# 2704. 相等还是不相等

原题：[链接](https://leetcode.cn/problems/to-be-or-not-to-be/description/)

难度：<font style="background:#DBF1B7;color:#2A4200">简单</font>

标签：JavaScript、TypeScript

# 📝 题目描述


请你编写一个名为 `expect` 的函数，用于帮助开发人员测试他们的代码。它应该接受任何值 `val` 并返回一个包含以下两个函数的对象。



+ `toBe(val)` 接受另一个值并在两个值相等（ `===` ）时返回 `true` 。如果它们不相等，则应抛出错误 `"Not Equal"` 。
+ `notToBe(val)` 接受另一个值并在两个值不相等（ `!==` ）时返回 `true` 。如果它们相等，则应抛出错误 `"Equal"` 。



**示例 1：**

输入：func = () => expect(5).toBe(5)
输出：{"value": true}
解释：5 === 5 因此该表达式返回 true。

**示例 2：**

输入：func = () => expect(5).toBe(null)
输出：{"error": "Not Equal"}
解释：5 !== null 因此抛出错误 "Not Equal".

**示例 3：**

输入：func = () => expect(5).notToBe(null)
输出：{"value": true}
解释：5 !== null 因此该表达式返回 true.



# 💻 题解
```javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(newVal) {
      if (newVal === val) return true
      else throw new Error('Not Equal')
    },
    notToBe(newVal) {
      if (newVal !== val) return true
      else throw new Error('Equal')
    }
  }
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

```typescript
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(newVal) {
      if (newVal === val) return true
      else throw new Error('Not Equal')
    },
    notToBe(newVal) {
      if (newVal !== val) return true
      else throw new Error('Equal')
    }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

