# 2775. 将 undefined 转为 null（Plus）

- 原题：https://leetcode.cn/problems/undefined-to-null/
- 难度：中等
- 标签：
  - JavaScript
  - TypeScript
  - 递归

## 📝 题目描述

给定一个深层嵌套的对象或数组 obj ，并创建该对象 obj 的副本，将其中的任何 undefined 值替换为 null 。

当使用 JSON.stringify() 将对象转换为 JSON 字符串时，undefined 值与 null 值的处理方式不同。该函数有助于确保序列化数据不会出现意外错误。


**示例 1：**

- 输入：`obj = {"a": undefined, "b": 3}`
- 输出：`{"a": null, "b": 3}`
- 解释：obj.a 的值已从 undefined 更改为 null 。

**示例 2：**

- 输入：`obj = {"a": undefined, "b": ["a", undefined]}`
- 输出：`{"a": null,"b": ["a", null]}`
- 解释：obj.a 和 obj.b[1] 的值已从 undefined 更改为 null 。

**提示：**

- `obj` 是一个有效的 JSON 对象或数组
- `2 <= JSON.stringify(obj).length <= 105`

## 💻 题解 - 递归

```js
function undefinedToNull(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            obj[key] = undefinedToNull(obj[key]);
        }
        if (obj[key] === undefined) {
            obj[key] = null;
        }
    }
    return obj;
}
```