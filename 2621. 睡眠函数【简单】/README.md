# [2621. 睡眠函数【简单】](https://github.com/Tdahuyou/leetcode/tree/main/2621.%20%E7%9D%A1%E7%9C%A0%E5%87%BD%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->
- [1. 📝 summary](#1--summary)
- [2. 📝 Description](#2--description)
- [3. 💻 题解](#3--题解)
<!-- endregion:toc -->

## 1. 📝 summary

- [leetcode](https://leetcode.cn/problems/sleep/)

## 2. 📝 Description

请你编写一个异步函数，它接收一个正整数参数 `millis` ，并休眠 `millis` 毫秒。要求此函数可以解析任何值。

**示例 1：**

- 输入：millis = 100
- 输出：100
- 解释：在 100ms 后此异步函数执行完时返回一个 Promise 对象

```js
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```

**示例 2：**

- 输入：millis = 200
- 输出：200
- 解释：在 200ms 后函数执行完时返回一个 Promise 对象

**提示：**

- `1 <= millis <= 1000`

## 3. 💻 题解

```javascript
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis))
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
