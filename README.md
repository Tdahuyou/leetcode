# LeetCode

- 📝 summary
  - leetcode notes 力扣刷题笔记。

## 📂 files

- [TODO.md](./TODO.md)
  - 待办清单。根据知识点对笔记做了分组处理。
- [TOP_INFOS](./TOP_INFOS.md)
  - 批量提取了每篇文档的头部信息。

## 🔗 links

- https://www.bilibili.com/video/BV1DivNejEb1
  - bilibili 视频
- https://leetcode.cn/
  - LeetCode 官网
- https://github.com/doocs
  - GitHub 技术社区 Doocs
- https://github.com/doocs/leetcode
  - 🔥 LeetCode solutions in any programming language | 多种编程语言实现 LeetCode、《剑指 Offer（第 2 版）》、《程序员面试金典（第 6 版）》题解
- https://doocs.github.io/leetcode/lc/1/
  - LeetCode 全解

## 📒 notes - LeetCode 刷题指南 - 新手快速入门

- 数据结构
  - ![](md-imgs/2024-09-25-15-01-46.png)
- 算法
  - ![](md-imgs/2024-09-25-15-02-56.png)

## 📒 notes - leetcode 笔记编写规范 - 相似题目

- **背景**：每个题解多少都会对应几个相似题目，这是经常需要编辑的内容，可是如果文件夹的名称一旦发生变化，相似题目的链接（如果使用相对路径的话）很可能会失效，再去一个个维护，成本会比较高，因此暂停一个规范，以便在每次执行批处理脚本 `notes/scripts/getTopInfos.js` 提取头部信息时，自动处理所有相似题目的链接。
- **规范**：在编写笔记的时候，如果某道题有相似题目，那么相似题目暂时可以像下面这样写在头部信息中：

```md
- 相似：[0001]
- 相似：[1695]
```

- 有多少个就写多少个，格式固定为 `- 相似：[题目编号]`。
- 当执行批量生成头部信息的脚本 `notes/scripts/getTopInfos.js` 时，会根据编号自动去生成有效的链接。

```md
- 相似：[0001. 两数之和【简单】](https://github.com/Tdahuyou/leetcode/tree/main/0001.%20%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91) <!-- [locale](./0001.%20%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91/README.md) -->
- 相似：[1695. 删除子数组的最大得分【中等】](https://github.com/Tdahuyou/leetcode/tree/main/1695.%20%E5%88%A0%E9%99%A4%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BE%97%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91) <!-- [locale](./1695.%20%E5%88%A0%E9%99%A4%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BE%97%E5%88%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91/README.md) -->
```

- 最后，再执行头部信息的批量更新脚本 `notes/scripts/setTopInfos.js` 即可实现批量更新。
- **小结**：这里定的规范，主要是为了解决相似题目的链接失效的问题。