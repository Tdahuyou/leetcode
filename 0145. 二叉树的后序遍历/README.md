# 0145. 二叉树的后序遍历

- [x] 视频
- 原题：https://leetcode.cn/problems/binary-tree-postorder-traversal
- 难度：简单
- 标签：栈、树、深度优先搜索、二叉树
- 相似题目：94. 二叉树的中序遍历、144. 二叉树的前序遍历

## 🔗 链接

- https://wansuanfa.com/index.php/701 - 玩算法，二叉树的 DFS 遍历。


## 📝 题目描述

给你一棵二叉树的根节点 `root` ，返回其节点值的 **后序遍历** 。

**示例 1：**

![](md-imgs/2024-09-25-17-02-44.png)

- 输入：root = [1,null,2,3]
- 输出：[3,2,1]

**示例 2：**

- 输入：root = []
- 输出：[]

**示例 3：**

- 输入：root = [1]
- 输出：[1]

**提示：**

- 树中节点的数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

**进阶：**递归算法很简单，你可以通过迭代算法完成吗？

## 💻 题解 - 递归

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root, res = []) {
  if (!root) return res
  postorderTraversal(root.left, res)
  postorderTraversal(root.right, res)
  res.push(root.val)
  return res
}
```

## 📝 笔记 - 二叉树的遍历

- 前序遍历（先根次序遍历）：**根节点** -> 左子树 -> 右子树
- 中序遍历（中根次序遍历）：左子树 -> **根节点** -> 右子树
- 后序遍历（后根次序遍历）：左子树 -> 右子树 -> **根节点**

![](md-imgs/2024-09-25-17-01-44.png)

> 图片来源：https://wansuanfa.com/index.php/701