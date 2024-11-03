# [0066. 加一【简单】](https://github.com/Tdahuyou/leetcode/tree/main/0066.%20%E5%8A%A0%E4%B8%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

- [leetcode](https://leetcode.cn/problems/plus-one/)

## 📝 Description

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1：**
```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```
**示例 2：**
```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```
**示例 3：**
```
输入：digits = [9]
输出：[1,0]
解释：输入数组表示数字 9。
加 1 得到了 9 + 1 = 10。
因此，结果应该是 [1,0]。
```
**提示：**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

## 💻 题解 - 逆序循环

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] !== 0) return digits;
    }
    const result = Array(len + 1).fill(0);
    result[0] = 1;
    return result;
};
```
