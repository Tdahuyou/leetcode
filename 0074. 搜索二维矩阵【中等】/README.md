# [0074. 搜索二维矩阵【中等】](https://github.com/Tdahuyou/leetcode/tree/main/0074.%20%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

- [leetcode](https://leetcode.cn/problems/search-a-2d-matrix/)
- 相似：[0162. 寻找峰值【中等】](https://github.com/Tdahuyou/leetcode/tree/main/0162.%20%E5%AF%BB%E6%89%BE%E5%B3%B0%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91) <!-- [locale](./0162.%20%E5%AF%BB%E6%89%BE%E5%B3%B0%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91/README.md) -->
- 相似：[0035. 搜索插入位置【简单】](https://github.com/Tdahuyou/leetcode/tree/main/0035.%20%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91) <!-- [locale](./0035.%20%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91/README.md) -->
- 相似：[0704. 二分查找【简单】](https://github.com/Tdahuyou/leetcode/tree/main/0704.%20%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91) <!-- [locale](./0704.%20%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91/README.md) -->
- 相似：[0074. 搜索二维矩阵【中等】](https://github.com/Tdahuyou/leetcode/tree/main/0074.%20%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91) <!-- [locale](./0074.%20%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91/README.md) -->

## 🔗 links

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  - MDN - `Array.prototype.flat()` - 将数组拍扁。

## 📝 Description

给你一个满足下述两条属性的 `m x n` 整数矩阵：

- 每行中的整数从左到右按非严格递增顺序排列。
- 每行的第一个整数大于前一行的最后一个整数。

给你一个整数 `target` ，如果 `target` 在矩阵中，返回 `true` ；否则，返回 `false` 。

**示例 1：**

![](md-imgs/2024-11-02-21-32-16.png)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true
```

**示例 2：**

![](md-imgs/2024-11-02-21-32-35.png)

```
输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false
```

**提示：**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 100`
- `-10^4 <= matrix[i][j], target <= 10^4`

## 💻 题解 - flat

```javascript
var searchMatrix = function(matrix, target) {
  return matrix.flat().includes(target);
};
```

- 将二维数组转换为一维 - `Array.prototype.flat()` - 将数组拍扁。
```js
[0, 1, 2, [3, 4]].flat(); // => [0, 1, 2, 3, 4]
[0, 1, 2, [[[3, 4]]]].flat(2); // => [0, 1, 2, [3, 4]]
// flat() 参数默认值为 1
```
- ![](md-imgs/2024-11-03-21-45-21.png)

## 💻 题解 - 循环二维数组

```javascript
var searchMatrix = function(matrix, target) {
  const rows = matrix.length, cols = matrix[0].length;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const item = matrix[r][c];
      if (item === target) return true;
    }
  }
  return false;
};
```

- 两个 for 循环，暴力循环二维数组的每一项。
  - 一旦发现与目标值 target 相等的项，则返回 true，表示在该二维数组 matrix 中找到了目标值。
  - 若找完所有项都没找到与目标值相等的值，则返回 false，表明该二维数组 matrix 中不存在目标值。
- ![](md-imgs/2024-11-03-21-47-00.png)

## 💻 题解 - 二分查找

```javascript
var searchMatrix = function(matrix, target) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let start = 0,
    end = rows * cols - 1;
  while (start <= end) {
    const mid = start + ((end - start) >> 1),
      r = parseInt(mid / cols),
      c = mid % cols,
      item = matrix[r][c];
    if (item === target) return true;
    else if (item < target) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};
```

- 将二维数组视作一维数组来做，并且题目明确该二维数组是有序的。
- ![](md-imgs/2024-11-03-21-47-44.png)

