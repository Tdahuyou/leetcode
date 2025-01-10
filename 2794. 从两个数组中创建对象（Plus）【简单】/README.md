# [2794. 从两个数组中创建对象（Plus）【简单】](https://github.com/Tdahuyou/leetcode/tree/main/2794.%20%E4%BB%8E%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B8%AD%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%EF%BC%88Plus%EF%BC%89%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->
- [1. 🔗 links](#1--links-18)
- [2. 📝 Description](#2--description-18)
- [3. 💻 sols.1](#3--sols1-6)
<!-- endregion:toc -->
- [leetcode](https://leetcode.cn/problems/create-object-from-two-arrays)
- [bilibili](https://www.bilibili.com/video/BV1DivNejEb1/)

## 1. 🔗 links

- https://github.com/Tdahuyou/javascript - 0043. 判断某个属性是否存在于对象中

## 2. 📝 Description

给定两个数组 `keysArr` 和 `valuesArr`，返回一个新的对象 `obj`。`obj` 中的每个键值对都来自 `keysArr[i]` 和 `valuesArr[i]`。

如果前面的索引中存在重复的键，则应该跳过该键值对。换句话说，只有第一次出现的键会被添加到对象中。

如果键不是字符串，则应通过调用 `String()` 方法将其转换为字符串。

**示例 1：**

- 输入：`keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]`
- 输出：`{"a": 1, "b": 2, "c": 3}`
- 解释：键 "a"、"b" 和 "c" 分别与值 1、2 和 3 配对。

**示例 2：**

- 输入：`keysArr = ["1", 1, false], valuesArr = [4, 5, 6]`
- 输出：`{"1": 4, "false": 6}`
- 解释：首先，将 arr1 中的所有元素转换为字符串。我们可以看到有两个 "1" 的出现。使用第一次出现 "1" 的关联值：4。

**示例 3：**

- 输入：`keysArr = [], valuesArr = []`
- 输出：`{}`
- 解释：没有键，因此返回一个空对象。

**提示：**

- `keysArr` 和 `valuesArr` 都是有效的 JSON 数组
- `2 <= JSON.stringify(keysArr).length, JSON.stringify(valuesArr).length <= 5 * 10^5`
- `keysArr.length === valuesArr.length`

## 3. 💻 sols.1

```javascript
/**
 * @param {Array} keysArr
 * @param {Array} valuesArr
 * @return {Object}
 */
var createObject = function (keysArr, valuesArr) {
  const obj = {}
  for (let i = 0; i < keysArr.length; i++) {
    const key = keysArr[i]
    if (!Object.hasOwn(obj, key)) obj[key] = valuesArr[i]
  }
  return obj
};
```

`Object.hasOwn(obj, key)`

检查一个属性是否已存在于对象中，除了上述这种写法，还可以这么写：

- `key in obj`
- `obj.hasOwnProperty(key)`








