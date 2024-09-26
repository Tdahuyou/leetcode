# 2620. 计数器

[此处为语雀卡片，点击链接查看](https://www.yuque.com/docs/125350806#rerQ2)

原题：[链接](https://leetcode.cn/problems/counter/)

难度：<font style="background:#DBF1B7;color:#2A4200">简单</font>

标签：JavaScript、TypeScript、闭包

相似题目：[💻 2665. 计数器 II](https://www.yuque.com/huyouda/leetcode/2665)、[💻 2666. 只允许一次函数调用](https://www.yuque.com/huyouda/leetcode/2666)

# 📝 题目描述
给定一个整型参数 `n`，请你编写并返回一个 `counter` 函数。这个 `counter` 函数最初返回 `n`，每次调用它时会返回前一个值加 1 的值 ( `n` ,  `n + 1` ,  `n + 2` ，等等)。



**示例 1：**

输入：
n = 10
["call","call","call"]
输出：[10,11,12]
解释：
counter() = 10 // 第一次调用 counter()，返回 n。
counter() = 11 // 返回上次调用的值加 1。
counter() = 12 // 返回上次调用的值加 1。

**示例 2：**

输入：
n = -2
["call","call","call","call","call"]
输出：[-2,-1,0,1,2]
解释：counter() 最初返回 -2。然后在每个后续调用后增加 1。



**提示：**

+ `-1000 <= n <= 1000`
+ `0 <= calls.length <= 1000`
+ `calls[i] === "call"`

# 💻 题解
```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  return () => n++
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

```typescript
function createCounter(n: number): () => number {
  return () => n++
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

上述程序是一个用于创建计数器的函数。函数 `createCounter` 接受一个数字参数 `n`，并返回一个函数 `counter`。

`counter` 函数是一个闭包，它内部引用了外部函数 `createCounter` 的参数 `n`。每次调用 `counter` 函数，它都会返回 `n` 的当前值，并且将 `n` 的值加 `1`。

**使用示例**

```javascript
const counter = createCounter(10);
console.log(counter()); // 输出 10
console.log(counter()); // 输出 11
console.log(counter()); // 输出 12
```

在上述示例中，我们首先调用 `createCounter(10)` 来创建一个计数器，并将返回的函数赋值给变量 `counter`。然后，每次调用 `counter()` 函数时，它会返回 `n` 的当前值，并将 `n` 的值增加 1。所以，第一次调用 `counter()` 时，输出为 10，第二次调用时，输出为 11，依此类推。

![画板](https://cdn.nlark.com/yuque/0/2024/jpeg/2331396/1718078494831-a2ddf713-a0db-423a-87fe-b4be58d2250c.jpeg)

