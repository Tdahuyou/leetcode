# 2667. 创建 Hello World 函数

- 原题：https://leetcode.cn/problems/create-hello-world-function
- 难度：简单
- 视频：✔
- 标签：JavaScript、TypeScript

---

太看得起我了……

## 📝 题目描述

请你编写一个名为 `createHelloWorld` 的函数。它应该返回一个新的函数，该函数总是返回 `"Hello World"` 。

**示例 1：**

- 输入：`args = []`
- 输出：`"Hello World"`
- 解释：
  - `const f = createHelloWorld();`
  - `f(); // "Hello World"`

`createHelloWorld` 返回的函数应始终返回 `"Hello World"`。

**示例 2：**

- 输入：`args = [{},null,42]`
- 输出：`"Hello World"`
- 解释：
  - `const f = createHelloWorld();`
  - `f({}, null, 42); // "Hello World"`

可以传递任何参数给函数，但它应始终返回 `"Hello World"`。

**提示：**

- `0 <= args.length <= 10`

## 💻 题解

```javascript
/**
 * @return {Function}
 */
var createHelloWorld = function () {

  return function (...args) {
    return 'Hello World'
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```
