# 2727. 判断对象是否为空

原题：[链接](https://leetcode.cn/problems/is-object-empty/description/)

难度：<font style="background:#DBF1B7;color:#2A4200">简单</font>

标签：JavaScript、TypeScript



# 📝 题目描述


给定一个对象或数组，判断它是否为空。



+ 一个空对象不包含任何键值对。
+ 一个空数组不包含任何元素。



你可以假设对象或数组是通过 `JSON.parse` 解析得到的。



**示例 1：**

输入：obj = {"x": 5, "y": 42}
输出：false
解释：这个对象有两个键值对，所以它不为空。

**示例 2：**

输入：obj = {}
输出：true
解释：这个对象没有任何键值对，所以它为空。

**示例 3：**

输入：obj = [null, false, 0]
输出：false
解释：这个数组有 3 个元素，所以它不为空。



**提示：**

+ `obj` 是一个有效的 JSON 对象或数组
+ `2 <= JSON.stringify(obj).length <= 10^5`



**你可以在 O(1) 时间复杂度内解决这个问题吗？**



# 💻 题解


```javascript
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  return Object.keys(obj).length === 0
}
```

```typescript
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0
};
```



`Object.keys(obj)` 这个操作是 `O n`



**题目描述：“你可以在 O(1) 时间复杂度内解决这个问题吗？”**

**<font style="color:#DF2A3F;">答：不能。数组可以，对象不行。</font>**

`if (Array.isArray(obj)) return obj.length === 0`

---

`JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]"`、`JSON.stringify(obj).length === 2`

在 `JSON.stringify` 方法中，它需要遍历整个对象或数组以将其转换为 JSON 字符串。因此，这种写法的复杂度也是 `O n`，其中 n 是对象或数组中的元素或属性的数量。

从官方测试用例的执行结果来分析，`Object.keys` 这种解法的效果要比 `JSON.stringify` 好一些。应该是 JS 引擎内部对 `Object.keys` 等相关 API 做了优化处理，复杂度也许到不了 `O n`，且比字符串处理的效果略好。

![JSON.stringify](https://cdn.nlark.com/yuque/0/2024/png/2331396/1718556897284-0d00071f-7b14-4167-bf5d-0ca61b319566.png)![Object.keys](https://cdn.nlark.com/yuque/0/2024/png/2331396/1718556933373-c74adff9-df23-4c10-bda9-5852f725e228.png)



