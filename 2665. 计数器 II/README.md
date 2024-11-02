# [2665. 计数器 II](https://github.com/Tdahuyou/leetcode/tree/main/2665.%20%E8%AE%A1%E6%95%B0%E5%99%A8%20II)

- [leetcode|*](https://leetcode.cn/problems/counter-ii)
- 相似：
  - [2620. 计数器](./2620.%20计数器/README.md)
  - [2666. 只允许一次函数调用](./2666.%20只允许一次函数调用/README.md)
- [bilibili](https://www.bilibili.com/video/BV1DivNejEb1)
  - leetcode.2665.计数器 II
- 📝 summary
  - 这道题和 2620 类似，都是考察闭包，只不过这个题目做了一些扩展。可以在衍生作用域的时候多维护一个变量来解决本题。

## 📝 Description

请你写一个函数 `createCounter`。这个函数接收一个初始的整数值 `init`。并返回一个包含三个函数的对象。

这三个函数是：

- `increment()` 将当前值加 1 并返回。
- `decrement()` 将当前值减 1 并返回。
- `reset()` 将当前值设置为 `init` 并返回。

**示例 1：**

- 输入：`init = 5, calls = ["increment","reset","decrement"]`
- 输出：`[6,5,4]`
- 解释：
  - `const counter = createCounter(5);`
  - `counter.increment(); // 6`
  - `counter.reset(); // 5`
  - `counter.decrement(); // 4`

**示例 2：**

- 输入：`init = 0, calls = ["increment","increment","decrement","reset","reset"]`
- 输出：`[1,2,1,0,0]`
- 解释：
  - `const counter = createCounter(0);`
  - `counter.increment(); // 1`
  - `counter.increment(); // 2`
  - `counter.decrement(); // 1`
  - `counter.reset(); // 0`
  - `counter.reset(); // 0`

**提示：**

- `-1000 <= init <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i]` 是 “increment”、“decrement” 和 “reset” 中的一个

## 💻 题解

```javascript
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let changedInit = init
  return {
    increment() {
      return ++changedInit
    },
    reset() {
      return changedInit = init
    },
    decrement() {
      return --changedInit
    }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```
