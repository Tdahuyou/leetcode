# 2627. 函数防抖

[此处为语雀卡片，点击链接查看](https://www.yuque.com/docs/173928310#p0peJ)

原题：[链接](https://leetcode.cn/problems/debounce/description/)

难度：<font style="background:#F6E1AC;color:#664900">中等</font>

标签：JavaScript、TypeScript、函数防抖

相似题目：[💻 2676. 节流](https://www.yuque.com/huyouda/leetcode/2676)

# 🔗 链接
[链接](https://lodash.com/docs/4.17.15#debounce)，Lodash，`_.debounce(func, [wait=0], [options={}])`

[github](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L10304)，Lodash，debounce 实现源码

[💼 防抖、节流](https://www.yuque.com/huyouda/programming-public/cb8ouo5mzidfs809)，JS 笔记。

# 📝 题目描述
请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 `t` ，并返回该函数的 **函数防抖** 后的结果。

**函数防抖** 方法是一个函数，它的执行被延迟了 `t` 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。

例如，假设 `t = 50ms` ，函数分别在 `30ms` 、 `60ms` 和 `100ms` 时调用。前两个函数调用将被取消，第三个函数调用将在 `150ms` 执行。如果改为 `t = 35ms` ，则第一个调用将被取消，第二个调用将在 `95ms` 执行，第三个调用将在 `135ms` 执行。

![](https://assets.leetcode.com/uploads/2023/04/08/screen-shot-2023-04-08-at-11048-pm.png)

上图展示了了防抖函数是如何转换事件的。其中，每个矩形表示 100ms，反弹时间为 400ms。每种颜色代表一组不同的输入。

请在不使用 lodash 的 `_.debounce()` 函数的前提下解决该问题。



**示例 1：**

输入：
t = 50
calls = [
  {"t": 50, inputs: [1]},
  {"t": 75, inputs: [2]}
]
输出：[{"t": 125, inputs: [2]}]
解释：
let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

第一次调用被第二次调用取消，因为第二次调用发生在 100ms 之前
第二次调用延迟 50ms，在 125ms 执行。输入为 (2)。

**示例 2：**

输入：
t = 20
calls = [
  {"t": 50, inputs: [1]},
  {"t": 100, inputs: [2]}
]
输出：[{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
解释：
第一次调用延迟到 70ms。输入为 (1)。
第二次调用延迟到 120ms。输入为 (2)。

**示例 3：**

输入：
t = 150
calls = [
  {"t": 50, inputs: [1, 2]},
  {"t": 300, inputs: [3, 4]},
  {"t": 300, inputs: [5, 6]}
]
输出：[{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
解释：
第一次调用延迟了 150ms，运行时间为 200ms。输入为 (1, 2)。
第二次调用被第三次调用取消
第三次调用延迟了 150ms，运行时间为 450ms。输入为 (5, 6)。



**提示：**

+ `0 <= t <= 1000`
+ `1 <= calls.length <= 10`
+ `0 <= calls[i].t <= 1000`
+ `0 <= calls[i].inputs.length <= 10`

# 💻 题解
```javascript
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(_ => fn(...args), t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```

```typescript
type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timer: undefined | number
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(_ => fn(...args), t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```



**逻辑分析**

每次 `debounce` 返回的函数被调用时，都做以下两件事儿：

1. `clearTimeout(timer)` 清空之前的延迟触发器，无论有没有都清空。（这里的 if 判断逻辑没有多大意义，有没有都行）
2. `timer = setTimeout(_ => fn(...args), t)` 绑定新的触发器，延迟时间为 `t`。

# 📝 笔记
# 💻 示例


