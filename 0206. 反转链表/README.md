# 0206. 反转链表

- 原题：https://leetcode.cn/problems/reverse-linked-list
- 难度：简单
- 标签：递归、链表
- 视频：✔

## 📝 题目描述

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例 1：**

![](md-imgs/2024-09-25-17-04-27.png)

- 输入：head = [1,2,3,4,5]
- 输出：[5,4,3,2,1]

**示例 2：**

![](md-imgs/2024-09-25-17-04-34.png)

- 输入：head = [1,2]
- 输出：[2,1]

**示例 3：**

- 输入：head = []
- 输出：[]

**提示：**

- 链表中节点的数目范围是 `[0, 5000]`
- `-5000 <= Node.val <= 5000`

**进阶：**链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

## 💻 题解 - 递归

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head

  const newHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return newHead
};
```

