# 0028. 找出字符串中第一个匹配项的下标【简单】

- [leetcode](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)

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
