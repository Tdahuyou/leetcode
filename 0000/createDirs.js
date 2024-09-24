/**
 * 根据给定的 dirs 初始化目录
 * 每个目录中的含有一个 README.md 文件
 * 文件内容第一行为 `# ${dir}` 其中 dir 表示当前目录的名称。
 */
const fs = require('fs');
const path = require('path');

const dirs = [
  '0001. 两数之和',
  '0003. 无重复字符的最长子串',
  '0005. 最长回文子串',
  '0007. 整数反转',
  '0009. 回文数',
  '0011. 盛最多水的容器',
  '0013. 罗马数字转整数',
  '0014. 最长公共前缀',
  '0015. 三数之和',
  '0094. 二叉树的中序遍历',
  '0105. 从前序与中序遍历序列构造二叉树',
  '0106. 从中序与后序遍历序列构造二叉树',
  '0144. 二叉树的前序遍历',
  '0145. 二叉树的后序遍历',
  '0206. 反转链表',
  '0239. 滑动窗口最大值',
  '0520. 检测大写字母',
  '0622. 设计循环队列',
  '0912. 排序数组',
  '1695. 删除子数组的最大得分',
  '2414. 最长的字母序连续子字符串的长度',
  '2618. 检查是否是类的对象实例',
  '2619. 数组原型对象的最后一个元素',
  '2620. 计数器',
  '2621. 睡眠函数',
  '2626. 数组归约运算',
  '2629. 复合函数',
  '2632. 柯里化',
  '2634. 过滤数组中的元素',
  '2635. 转换数组中的每个元素',
  '2648. 生成斐波那契数列',
  '2665. 计数器 II',
  '2666. 只允许一次函数调用',
  '2667. 创建 Hello World 函数',
  '2677. 分块数组',
  '2690. 无穷方法对象（Plus）',
  '2694. 事件发射器',
  '2695. 包装数组',
  '2703. 返回传递的参数的长度',
  '2704. 相等还是不相等',
  '2715. 执行可取消的延迟函数',
  '2722. 根据 ID 合并两个数组',
  '2723. 两个 Promise 对象相加',
  '2724. 排序方式',
  '2725. 间隔取消',
  '2726. 使用方法链的计算器',
  '2727. 判断对象是否为空',
  '2758. 下一天（Plus）',
  '2774. 数组的上界（Plus）',
  '2794. 从两个数组中创建对象（Plus）',
  '2796. 重复字符串（Plus）',
  '2797. 带有占位符的部分函数（Plus）',
  '2803. 阶乘生成器（Plus）',
  '2804. 数组原型的 forEach 方法',
  '2806. 取整购买后的账户余额',
  '2822. 对象反转',
];

// 遍历目录列表并创建目录和 README.md 文件
dirs.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  const readmePath = path.join(dirPath, 'README.md');

  // 创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }

  // 创建 README.md 文件
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, `# ${dir}\n`);
    console.log(`Created README.md in: ${dir}`);
  }
});

console.log('All directories and README.md files have been created.');
