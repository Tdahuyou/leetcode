# 2635. 转换数组中的每个元素

[此处为语雀卡片，点击链接查看](https://www.yuque.com/docs/173570676#mVyKN)

原题：[链接](https://leetcode.cn/problems/apply-transform-over-each-element-in-array/description/)

难度：<font style="background:#DBF1B7;color:#2A4200">简单</font>

标签：JavaScript、TypeScript、map

---

实现数组原生 API `Array.map`。

# 📝 题目描述
编写一个函数，这个函数接收一个整数数组 `arr` 和一个映射函数  `fn` ，通过该映射函数返回一个新的数组。

返回数组的创建语句应为 `returnedArray[i] = fn(arr[i], i)` 。

请你在不使用内置方法 `Array.map` 的前提下解决这个问题。



**示例 1:**

输入：arr = [1,2,3], fn = function plusone(n) { return n + 1; }
输出：[2,3,4]
解释：
const newArray = map(arr, plusone); // [2,3,4]
此映射函数返回值是将数组中每个元素的值加 1。

**示例** **2:**

输入：arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
输出：[1,3,5]
解释：此映射函数返回值根据输入数组索引增加每个值。

**示例 3:**

输入：arr = [10,20,30], fn = function constant() { return 42; }
输出：[42,42,42]
解释：此映射函数返回值恒为 42。



**提示：**

+ `0 <= arr.length <= 1000`
+ `-10^9 <= arr[i] <= 10^9`
+ `fn` 返回一个数

# 💻 题解
```javascript
var map = function(arr, fn) {
  const ans = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    ans[i] = fn(arr[i], i)
  }
  return ans
}
```

