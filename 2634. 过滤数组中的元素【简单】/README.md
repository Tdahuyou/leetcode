# [2634. 过滤数组中的元素【简单】](https://github.com/Tdahuyou/leetcode/tree/main/2634.%20%E8%BF%87%E6%BB%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

- [leetcode](https://leetcode.cn/problems/filter-elements-from-array/)

## 📝 Description

给定一个整数数组 `arr` 和一个过滤函数 `fn`，并返回一个过滤后的数组 `filteredArr` 。

`fn` 函数接受一个或两个参数：

- `arr[i]` - `arr` 中的数字
- `i` - `arr[i]` 的索引

`filteredArr` 应该只包含使表达式 `fn(arr[i], i)` 的值为 **真值** 的 `arr` 中的元素。**真值** 是指 `Boolean(value)` 返回参数为 `true` 的值。

请在不使用内置的 `Array.filter` 方法的情况下解决该问题。

**示例 1：**

- 输入：`arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }`
- 输出：`[20,30]`
- 解释：`const newArray = filter(arr, fn); // [20, 30]` 过滤函数过滤掉不大于 10 的值

**示例 2：**

- 输入：`arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }`
- 输出：`[1]`
- 解释：过滤函数 fn 也可以接受每个元素的索引。在这种情况下，过滤函数删除索引不为 0 的元素

**示例 3：**

- 输入：`arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }`
- 输出：`[-2,0,1,2]`
- 解释：像 `0` 这样的假值应被过滤掉

**提示：**

- `0 <= arr.length <= 1000`
- `-10^9 <= arr[i] <= 10^9`

## 💻 题解

```javascript
var filter = function (arr, fn) {
  const ans = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const res = fn(item, i)
    if (res) ans.push(item)
  }
  return ans
}
```

- 时间复杂度：$O(n)$，就一个 `for` 循环。
- 空间复杂度：$O(n)$，主要是结果数组 `ans` 占的空间。

**理解回调：**

`fn` 是调用者传入的回调函数，我们需要注入的是每次遍历数组 `arr` 时，当前项的值 `item` 和索引 `index`。然后根据返回结果的真、假，判断是否加入到返回的数组中。
