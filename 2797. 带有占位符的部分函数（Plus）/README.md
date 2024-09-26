# 2797. 带有占位符的部分函数（Plus）

原题：[链接](https://leetcode.cn/problems/partial-function-with-placeholders/description/)

难度：<font style="background:#DBF1B7;color:#2A4200">简单</font>

标签：JavaScript、TypeScript



# 📝 题目描述


给定函数 `fn` 和数组 `args`，返回一个函数 `partialFn`。



`args` 中的占位符 `"_"` 需要用 `restArgs` 中索引从 `0` 开始的值替换。 `restArgs` 中剩余的值则添加到 `args` 的末尾。



`partialFn` 应该返回 `fn` 的结果。`fn` 应该使用修改后的 `args` 的元素作为单独的参数调用。



**示例 1：**

输入：fn = (...args) => args, args = [2,4,6], restArgs = [8,10]
输出：[2,4,6,8,10]
解释：
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // [2,4,6,8,10]

args 中没有占位符 "_"，因此 restArgs 只是添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。_

_**示例 2：**_

_输入：fn = (...args) => args, args = [1,2,"_",4,"_",6], restArgs = [3,5]
输出：[1,2,3,4,5,6]
解释：
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // [1,2,3,4,5,6]

占位符 "_" 被 restArgs 中的值替换。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。

**示例 3：**

输入：fn = (a, b, c) => b + a - c, args = ["_", 5], restArgs = [5, 20]
输出：-10
解释：
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // -10

占位符 "_" 被替换为 5，并将 20 添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回 -10（5 + 5 - 20）。



**提示：**

+ `fn` 是一个函数
+ `args` 和 `restArgs` 都是有效的 JSON 数组
+ `1 <= args.length <= 5 * 10^4`
+ `1 <= restArgs.length <= 5 * 10^4`
+ `0 <= number of placeholders <= restArgs.length`



# 💻 题解


```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function (fn, args) {
  return function (...restArgs) {
    // 参数处理
    const arr = [...args]
    for (let i = 0; i < restArgs.length; i++) {
      const targetIndex = arr.indexOf('_')
      targetIndex === -1 ? arr.push(restArgs[i]) : arr[targetIndex] = restArgs[i]
    }

    return fn(...arr)
  }
};
```

```typescript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue

function partial(fn: Fn, args: JSONValue[]): Fn {

  return function (...restArgs) {
    // 参数处理
    const arr = [...args]
    for (let i = 0; i < restArgs.length; i++) {
      const targetIndex = arr.indexOf('_')
      targetIndex === -1 ? arr.push(restArgs[i]) : arr[targetIndex] = restArgs[i]
    }

    return fn(...arr)
  }
};
```

**时间复杂度：**![image](https://cdn.nlark.com/yuque/__latex/f2d5f588234eb61a559ff90c41511b85.svg)

假设输入参数的长度为 `n`，则在遍历 `restArgs` 时，需要执行 `n` 次循环。在循环内部，对数组进行操作 `arr.indexOf('_')` 的时间复杂度为 `O(n)`，因此总的时间复杂度为 `O(n^2)`。

**空间复杂度：**![image](data:image/svg+xml;utf8,%3Csvg%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%224.977ex%22%20height%3D%222.843ex%22%20style%3D%22vertical-align%3A%20-0.838ex%3B%22%20viewBox%3D%220%20-863.1%202143%201223.9%22%20role%3D%22img%22%20focusable%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-labelledby%3D%22MathJax-SVG-1-Title%22%3E%0A%3Ctitle%20id%3D%22MathJax-SVG-1-Title%22%3EEquation%3C%2Ftitle%3E%0A%3Cdefs%20aria-hidden%3D%22true%22%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-4F%22%20d%3D%22M740%20435Q740%20320%20676%20213T511%2042T304%20-22Q207%20-22%20138%2035T51%20201Q50%20209%2050%20244Q50%20346%2098%20438T227%20601Q351%20704%20476%20704Q514%20704%20524%20703Q621%20689%20680%20617T740%20435ZM637%20476Q637%20565%20591%20615T476%20665Q396%20665%20322%20605Q242%20542%20200%20428T157%20216Q157%20126%20200%2073T314%2019Q404%2019%20485%2098T608%20313Q637%20408%20637%20476Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-28%22%20d%3D%22M94%20250Q94%20319%20104%20381T127%20488T164%20576T202%20643T244%20695T277%20729T302%20750H315H319Q333%20750%20333%20741Q333%20738%20316%20720T275%20667T226%20581T184%20443T167%20250T184%2058T225%20-81T274%20-167T316%20-220T333%20-241Q333%20-250%20318%20-250H315H302L274%20-226Q180%20-141%20137%20-14T94%20250Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-6E%22%20d%3D%22M21%20287Q22%20293%2024%20303T36%20341T56%20388T89%20425T135%20442Q171%20442%20195%20424T225%20390T231%20369Q231%20367%20232%20367L243%20378Q304%20442%20382%20442Q436%20442%20469%20415T503%20336T465%20179T427%2052Q427%2026%20444%2026Q450%2026%20453%2027Q482%2032%20505%2065T540%20145Q542%20153%20560%20153Q580%20153%20580%20145Q580%20144%20576%20130Q568%20101%20554%2073T508%2017T439%20-10Q392%20-10%20371%2017T350%2073Q350%2092%20386%20193T423%20345Q423%20404%20379%20404H374Q288%20404%20229%20303L222%20291L189%20157Q156%2026%20151%2016Q138%20-11%20108%20-11Q95%20-11%2087%20-5T76%207T74%2017Q74%2030%20112%20180T152%20343Q153%20348%20153%20366Q153%20405%20129%20405Q91%20405%2066%20305Q60%20285%2060%20284Q58%20278%2041%20278H27Q21%20284%2021%20287Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-29%22%20d%3D%22M60%20749L64%20750Q69%20750%2074%20750H86L114%20726Q208%20641%20251%20514T294%20250Q294%20182%20284%20119T261%2012T224%20-76T186%20-143T145%20-194T113%20-227T90%20-246Q87%20-249%2086%20-250H74Q66%20-250%2063%20-250T58%20-247T55%20-238Q56%20-237%2066%20-225Q221%20-64%20221%20250T66%20725Q56%20737%2055%20738Q55%20746%2060%20749Z%22%3E%3C%2Fpath%3E%0A%3C%2Fdefs%3E%0A%3Cg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20transform%3D%22matrix(1%200%200%20-1%200%200)%22%20aria-hidden%3D%22true%22%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-4F%22%20x%3D%220%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-28%22%20x%3D%22763%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-6E%22%20x%3D%221153%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-29%22%20x%3D%221753%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E)

在参数处理过程中，需要创建一个长度为 `n` 的数组 `arr`，因此空间复杂度为 `O(n)`。



该解法的时间复杂度和空间复杂度都与输入参数的长度有关。

