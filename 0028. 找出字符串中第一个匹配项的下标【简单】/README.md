# [0028. 找出字符串中第一个匹配项的下标【简单】](https://github.com/Tdahuyou/leetcode/tree/main/0028.%20%E6%89%BE%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8C%B9%E9%85%8D%E9%A1%B9%E7%9A%84%E4%B8%8B%E6%A0%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

- [leetcode](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- 本节介绍了 KMP 算法，代码量不多，但理解起来比较费劲儿，不应该是简单题的难度。

## 📝 Description

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串的第一个匹配项的下标（下标从 0 开始）。如果 `needle` 不是 `haystack` 的一部分，则返回  `-1` 。

**示例 1：**
```
输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
```
**示例 2：**
```
输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
```
**提示：**

- `1 <= haystack.length, needle.length <= 10^4`
- `haystack` 和 `needle` 仅由小写英文字符组成

## 📒 notes - 学习一个短语 - Find needle in haystack

- **Find needle in haystack** 大海捞针

## 💻 题解 - 调用原生 js 等价 api：`indexOf`

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
```

- 在 JS 中，字符串的 indexOf 方法，就是用来查找字符串中某个子串的位置，和题目的要求一致。做法简单粗暴，就是将 indexOf 给调用一下即可。作为算法题，我们应该想的是如何去实现内置的 indexOf 方法，思考它的实现逻辑，并使用代码将其写出来。

## 📒 notes - KMP 算法简介

- KMP（Knuth-Morris-Pratt）算法是一种高效的字符串匹配算法，由Donald Knuth、Vaughan Pratt和James H. Morris独立发明，并于1977年发表。这种算法的主要优点在于它能够在线性时间内完成模式串在文本串中的查找，即其时间复杂度为O(n+m)，其中n是文本串的长度，m是模式串的长度。
  - 文本串 - 待匹配的字符串，也称为主串（haystack）。
  - 模式串 - 要在文本串中查找的字符串，也称为子串（needle）。
- KMP算法因其高效性和实用性，在文本处理、搜索引擎等领域有着广泛的应用。通过预处理模式串，KMP能够在最坏情况下也能保证线性时间复杂度，这使得它成为解决字符串匹配问题的一个非常优秀的算法。
- **KMP 算法的基本思想**
  - KMP算法的核心在于利用已经匹配过的信息，避免从头开始重新匹配。当模式串的一个位置与主串不匹配时，KMP算法可以知道之前已经匹配过的字符信息，并据此决定模式串应该移动的位置，而不是简单地将模式串向后移动一位。
- **KMP 算法的关键组件**【关键在于理解匹配过程】
  1. **部分匹配表（Partial Match Table, PMT），也称为“next数组”**：
     - 这是一个数组，用于存储模式串中每个前缀的最大相同前后缀的长度。
     - 例如，对于模式串 "ABCDABD"，其PMT（或next数组）可能是 [0, 0, 0, 0, 1, 2, 0]。这意味着，如果在模式串的第 `j` 个位置失配，那么模式串应该回退到 `next[j - 1]` 的位置继续匹配。
       - 具体来说，假设匹配到 ABCDAB **D** 加粗的 D 位置时候出现了失配的情况，此时 j 为 6，这时候就需要让 j 回退，如果暴力处理的话，一旦出现了失配的情况，那么直接将 j 回退到开头 0 的位置，一切都从头开始。但是 next 可以对回退的逻辑进行优化，此时只需要回退到 `next[j - 1]` 的位置（也就是 `next[6 - 1] => 2`）即可，表示下次匹配的位置是 AB **C** DABD 中索引为 2 的位置，也就是加粗的 C 的位置开始，这是因为 **AB** CDABD 和 ABCD **AB** D 子串 AB 相同，虽然 D 位置出现了失配，但是没必要回退到开头，D 前边的 AB 子串和开始位置开始的 AB 是相同的，下次直接从 C 开始即可。
     - PMT的构建是KMP算法中较为复杂的部分，但一旦构建好，就能大大提高匹配效率。
  2. **匹配过程**：
     - **在匹配过程中，KMP算法使用两个指针，一个指向主串（haystack），另一个指向模式串（needle）。**
     - **当发生失配时，模式串指针不会回溯到起始位置，而是根据PMT移动到下一个可能匹配的位置。**
     - **如果模式串完全匹配，则返回匹配的起始位置；否则，继续匹配直到主串结束或找到匹配。**

## 💻 题解 - KMP

```javascript
/**
 * 22-09-30
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length, m = needle.length

  if (m === 0) return 0

  // 初始化 next
  const next = new Array(m).fill(0);
  for (let i = 1, j = 0; i < m; i++) {
    while (j > 0 && needle[j] !== needle[i]) j = next[j - 1]
    if (needle[i] === needle[j]) j++
    next[i] = j
  }

  // 查找匹配项
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && needle[j] !== haystack[i]) j = next[j - 1]
    if (haystack[i] === needle[j]) j++
    if (j === m) return i - m + 1
  }

  return -1
}
```

- 提交记录
  - ![](md-imgs/2024-11-09-22-56-53.png)
- 核心步骤
  - **步骤1. 初始化next数组**：这部分代码构建了PMT（或称next数组）。通过遍历模式串，计算每个位置的 **最大相同前后缀** 长度，从而指导后续匹配时如何移动模式串。
    - 解释：最大相同前后缀
      - 示例：`needle = "sad"` 对应的 next 数组为 `[0, 0, 0]`。
      - 示例：`leeto` 对应的 next 数组为 `[0, 0, 0, 0, 0]`。
      - 示例：`needle = "ababca"` 对应的 next 数组为 `[0, 0, 1, 2, 0, 1]`。
  - **步骤2. 匹配过程**：使用两个指针i和j分别遍历主串和模式串。当字符匹配时，两个指针都向前移动；如果不匹配，模式串指针j会根据next数组进行调整，以尝试新的匹配位置。如果模式串完全匹配，则返回匹配的起始位置。
  - 步骤 1、2 的实现流程是 KMP 算法的核心，它们的实现逻辑是非常类似的。
- 初始化 next 是 KMP 算法的核心，其中最难理解的部分，应该就是 while 循环部分了。简单的说，就是一旦失配 `needle[j] !== needle[i]`，那么就缩减 `j`，缩减到哪？就看 `next[j - 1]` 存放的位置是哪了。
- 其实无论是初始化 next 的过程，还是匹配 `haystack` 的过程，感觉都有点递归的味道。在初始化 next 时：
  - 只要匹配，`j` 就扩散一步，同时 `i` 也会扩散一步，在 `i` 扩散之前，会先记录下 `next[i]` 如果失配的话，那么下次匹配应该开始的位置是哪里
  - 只要失配，`j` 就要收缩，但是 `j` 并不是一口气直接缩到 `0`，它会先缩到 `next[j - 1]`，然后继续判断是否匹配
- 仔细阅读代码，不难发现，先驱始终都是 `i`，`j` 一直都是跟班，`j` 不可能会大于 `i`，`j` 走过的，都是 `i` 走过的路。而 `i` 走过的每一步，都记录下了这一步如果失算了，那么应该回退到哪才是最合理的。

### 分析 - next 初始化的逻辑

```js
// 初始化 next
const next = new Array(m).fill(0);
for (let i = 1, j = 0; i < m; i++) {
  while (j > 0 && needle[j] !== needle[i]) j = next[j - 1]
  if (needle[i] === needle[j]) j++
  next[i] = j
}
```

- m 表示子串 needle 的长度。
- i 表示子串 needle 的第几个位置。
- j 是一个辅助变量，用于记录当前位置失配时，需要回退到哪里。你可以认为 j 指向的位置，始终是 i 之前的某个片段的结尾，这个片段满足：`[0, j) === [i - j, i)`。
- `const next = new Array(m).fill(0);` next 数组中存放的成员，表示的含义是如果在匹配过程中，如果子串的某个位置失配了，那么需要根据 next 来决定下次匹配的开始位置，所以在初始化的时候，需要根据子串的长度来初始化。
- `for (let i = 1, j = 0; i < m; i++) { ... }`
  - `let i = 1` 如果第一个位置就失配了，不用纠结，直接从头开始，所以不需要去管 `next[0]` 的值，它肯定得是 `0`。
  - `i < m` 根据子串的长度来决定外层循环的次数，每次循环决定一个当前的 `next[i]` 的值。
- `while (j > 0 && needle[j] !== needle[i]) j = next[j - 1]` 失配，`j` 回退到 `next[j - 1]` 的位置。
- `if (needle[i] === needle[j]) j++` 匹配，j 向后移动一位。
- `next[i] = j` 将 j 的值赋给 `next[i]`，记录 `i + 1` 失配时应该回溯到的位置。

### 分析 - 查找匹配项的逻辑

```js
// 查找匹配项
for (let i = 0, j = 0; i < n; i++) {
  while (j > 0 && needle[j] !== haystack[i]) j = next[j - 1]
  if (haystack[i] === needle[j]) j++
  if (j === m) return i - m + 1
}
```

- i 表示匹配到了主串 haystack 的第几个位置。
- m 表示子串 needle 的长度。
- j 表示当前匹配到了子串 needle 的第几个位置。
- `while (j > 0 && needle[j] !== haystack[i]) j = next[j - 1]` 失配，`j` 回退到 `next[j - 1]` 的位置。
- `if (haystack[i] === needle[j]) j++` 匹配，j 向后移动一位。
- `if (j === m) return i - m + 1` 一旦条件成立，表示在主串中找到了满足条件的连续子串，将匹配的起始位置返回。