# 0007. 整数反转

原题：[链接](https://leetcode.cn/problems/reverse-integer/)

难度：<font style="background:#F6E1AC;color:#664900">中等</font>

标签：`数学`

相似题目：[💻 0009. 回文数](https://www.yuque.com/huyouda/leetcode/0009)



# 题目描述


给你一个 32 位的有符号整数 `x` ，返回将 `x` 中的数字部分反转后的结果。



如果反转后整数超过 32 位的有符号整数的范围 `[−2<sup>31</sup>,  2<sup>31</sup> − 1]` ，就返回 0。



**假设环境不允许存储 64 位整数（有符号或无符号）。**



**示例 1：**

输入：x = 123
输出：321

**示例 2：**

输入：x = -123
输出：-321

**示例 3：**

输入：x = 120
输出：21

**示例 4：**

输入：x = 0
输出：0



**提示：**

+ `-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1`



# 题解


## 题解 - 暴力解法，转为字符串求解


![画板](https://cdn.nlark.com/yuque/0/2024/jpeg/2331396/1718233343670-bf4a3bfe-d57e-4dff-9df2-c0802b52149b.jpeg)



```javascript
var reverse = function (x) {
  let ans
  if (x < 0) { // x 为负数
    ans = ('-' + x.toString().substring(1).split('').reverse().join('')) - 0
  } else { // x 为正数
    ans = x.toString().split('').reverse().join('') - 0
  }

  const max = (2 ** 31) - 1
  const min = -(2 ** 31)

  if (ans < min || ans > max) {
    return 0
  } else {
    return ans
  }
}
```

```typescript
function reverse(x: number): number {
  let ans: number
  if (x < 0) { // x 为负数
    ans = Number('-' + x.toString().substring(1).split('').reverse().join(''))
  } else { // x 为正数
    ans = Number(x.toString().split('').reverse().join(''))
  }

  const max = (2 ** 31) - 1
  const min = -(2 ** 31)

  if (ans < min || ans > max) {
    return 0
  } else {
    return ans
  }
}
```

**时间复杂度：**![image](data:image/svg+xml;utf8,%3Csvg%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%224.977ex%22%20height%3D%222.843ex%22%20style%3D%22vertical-align%3A%20-0.838ex%3B%22%20viewBox%3D%220%20-863.1%202143%201223.9%22%20role%3D%22img%22%20focusable%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-labelledby%3D%22MathJax-SVG-1-Title%22%3E%0A%3Ctitle%20id%3D%22MathJax-SVG-1-Title%22%3EEquation%3C%2Ftitle%3E%0A%3Cdefs%20aria-hidden%3D%22true%22%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-4F%22%20d%3D%22M740%20435Q740%20320%20676%20213T511%2042T304%20-22Q207%20-22%20138%2035T51%20201Q50%20209%2050%20244Q50%20346%2098%20438T227%20601Q351%20704%20476%20704Q514%20704%20524%20703Q621%20689%20680%20617T740%20435ZM637%20476Q637%20565%20591%20615T476%20665Q396%20665%20322%20605Q242%20542%20200%20428T157%20216Q157%20126%20200%2073T314%2019Q404%2019%20485%2098T608%20313Q637%20408%20637%20476Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-28%22%20d%3D%22M94%20250Q94%20319%20104%20381T127%20488T164%20576T202%20643T244%20695T277%20729T302%20750H315H319Q333%20750%20333%20741Q333%20738%20316%20720T275%20667T226%20581T184%20443T167%20250T184%2058T225%20-81T274%20-167T316%20-220T333%20-241Q333%20-250%20318%20-250H315H302L274%20-226Q180%20-141%20137%20-14T94%20250Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-6E%22%20d%3D%22M21%20287Q22%20293%2024%20303T36%20341T56%20388T89%20425T135%20442Q171%20442%20195%20424T225%20390T231%20369Q231%20367%20232%20367L243%20378Q304%20442%20382%20442Q436%20442%20469%20415T503%20336T465%20179T427%2052Q427%2026%20444%2026Q450%2026%20453%2027Q482%2032%20505%2065T540%20145Q542%20153%20560%20153Q580%20153%20580%20145Q580%20144%20576%20130Q568%20101%20554%2073T508%2017T439%20-10Q392%20-10%20371%2017T350%2073Q350%2092%20386%20193T423%20345Q423%20404%20379%20404H374Q288%20404%20229%20303L222%20291L189%20157Q156%2026%20151%2016Q138%20-11%20108%20-11Q95%20-11%2087%20-5T76%207T74%2017Q74%2030%20112%20180T152%20343Q153%20348%20153%20366Q153%20405%20129%20405Q91%20405%2066%20305Q60%20285%2060%20284Q58%20278%2041%20278H27Q21%20284%2021%20287Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-29%22%20d%3D%22M60%20749L64%20750Q69%20750%2074%20750H86L114%20726Q208%20641%20251%20514T294%20250Q294%20182%20284%20119T261%2012T224%20-76T186%20-143T145%20-194T113%20-227T90%20-246Q87%20-249%2086%20-250H74Q66%20-250%2063%20-250T58%20-247T55%20-238Q56%20-237%2066%20-225Q221%20-64%20221%20250T66%20725Q56%20737%2055%20738Q55%20746%2060%20749Z%22%3E%3C%2Fpath%3E%0A%3C%2Fdefs%3E%0A%3Cg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20transform%3D%22matrix(1%200%200%20-1%200%200)%22%20aria-hidden%3D%22true%22%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-4F%22%20x%3D%220%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-28%22%20x%3D%22763%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-6E%22%20x%3D%221153%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-29%22%20x%3D%221753%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E)

**空间复杂度：**![image](data:image/svg+xml;utf8,%3Csvg%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%224.977ex%22%20height%3D%222.843ex%22%20style%3D%22vertical-align%3A%20-0.838ex%3B%22%20viewBox%3D%220%20-863.1%202143%201223.9%22%20role%3D%22img%22%20focusable%3D%22false%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-labelledby%3D%22MathJax-SVG-1-Title%22%3E%0A%3Ctitle%20id%3D%22MathJax-SVG-1-Title%22%3EEquation%3C%2Ftitle%3E%0A%3Cdefs%20aria-hidden%3D%22true%22%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-4F%22%20d%3D%22M740%20435Q740%20320%20676%20213T511%2042T304%20-22Q207%20-22%20138%2035T51%20201Q50%20209%2050%20244Q50%20346%2098%20438T227%20601Q351%20704%20476%20704Q514%20704%20524%20703Q621%20689%20680%20617T740%20435ZM637%20476Q637%20565%20591%20615T476%20665Q396%20665%20322%20605Q242%20542%20200%20428T157%20216Q157%20126%20200%2073T314%2019Q404%2019%20485%2098T608%20313Q637%20408%20637%20476Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-28%22%20d%3D%22M94%20250Q94%20319%20104%20381T127%20488T164%20576T202%20643T244%20695T277%20729T302%20750H315H319Q333%20750%20333%20741Q333%20738%20316%20720T275%20667T226%20581T184%20443T167%20250T184%2058T225%20-81T274%20-167T316%20-220T333%20-241Q333%20-250%20318%20-250H315H302L274%20-226Q180%20-141%20137%20-14T94%20250Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMATHI-6E%22%20d%3D%22M21%20287Q22%20293%2024%20303T36%20341T56%20388T89%20425T135%20442Q171%20442%20195%20424T225%20390T231%20369Q231%20367%20232%20367L243%20378Q304%20442%20382%20442Q436%20442%20469%20415T503%20336T465%20179T427%2052Q427%2026%20444%2026Q450%2026%20453%2027Q482%2032%20505%2065T540%20145Q542%20153%20560%20153Q580%20153%20580%20145Q580%20144%20576%20130Q568%20101%20554%2073T508%2017T439%20-10Q392%20-10%20371%2017T350%2073Q350%2092%20386%20193T423%20345Q423%20404%20379%20404H374Q288%20404%20229%20303L222%20291L189%20157Q156%2026%20151%2016Q138%20-11%20108%20-11Q95%20-11%2087%20-5T76%207T74%2017Q74%2030%20112%20180T152%20343Q153%20348%20153%20366Q153%20405%20129%20405Q91%20405%2066%20305Q60%20285%2060%20284Q58%20278%2041%20278H27Q21%20284%2021%20287Z%22%3E%3C%2Fpath%3E%0A%3Cpath%20stroke-width%3D%221%22%20id%3D%22E1-MJMAIN-29%22%20d%3D%22M60%20749L64%20750Q69%20750%2074%20750H86L114%20726Q208%20641%20251%20514T294%20250Q294%20182%20284%20119T261%2012T224%20-76T186%20-143T145%20-194T113%20-227T90%20-246Q87%20-249%2086%20-250H74Q66%20-250%2063%20-250T58%20-247T55%20-238Q56%20-237%2066%20-225Q221%20-64%20221%20250T66%20725Q56%20737%2055%20738Q55%20746%2060%20749Z%22%3E%3C%2Fpath%3E%0A%3C%2Fdefs%3E%0A%3Cg%20stroke%3D%22currentColor%22%20fill%3D%22currentColor%22%20stroke-width%3D%220%22%20transform%3D%22matrix(1%200%200%20-1%200%200)%22%20aria-hidden%3D%22true%22%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-4F%22%20x%3D%220%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-28%22%20x%3D%22763%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMATHI-6E%22%20x%3D%221153%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%20%3Cuse%20xlink%3Ahref%3D%22%23E1-MJMAIN-29%22%20x%3D%221753%22%20y%3D%220%22%3E%3C%2Fuse%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E)

其中 n 是整数 x 转换为字符串后的字符数，字符串操作过程中生成了多个长度为 n 的中间结果，时间和空间消耗主要集中在这些字符串操作上。



这种转为字符串的处理方案，优点在于**易理解**，缺点在于**性能不佳**。字符串操作相对于纯数学运算会有较高的时间和空间开销，对于大数可能会影响性能。



上述做法还依赖于特定语言的字符串处理能力，**不具有普遍性**。在某些低级语言或环境中可能不适用，需要手写高级语言预设的 API（比如 `toString`、`substring`、`split` 等）的功能。



**注意：**

`x.toString().split('').reverse().join('') - 0` 这种隐式类型转换的写法，在 js 中 OK，但是在 ts 中默认是不被允许的，可以使用显示转换的写法 `Number(x.toString().split('').reverse().join(''))`



## 题解 - 数学方法


![画板](https://cdn.nlark.com/yuque/0/2024/jpeg/2331396/1717907461303-5a993dc3-013f-4e6a-bea0-a9d9ce36756a.jpeg)

> 平板横屏看，感觉图的大小刚好，如果是在手机或者 PC 上预览，显然偏小了很多，需要放大来看。
>



```javascript
var reverse = function (x) {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  let ans = 0
  while (x !== 0) {
    ans = ans * 10 + x % 10
    x = Math.trunc(x / 10)
  }
  if (ans < min || ans > max) {
    return 0
  } else {
    return ans
  }
}
```

```typescript
function reverse(x: number): number {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  let ans = 0
  while (x !== 0) {
    ans = ans * 10 + x % 10
    x = Math.trunc(x / 10)
  }
  if (ans < min || ans > max) {
    return 0
  } else {
    return ans
  }
}
```

**时间复杂度：**![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N))

函数的核心是一个 `while` 循环，循环的次数由整数 `x` 的位数决定。假设 `x` 有 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?d) 位，则循环执行 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?d) 次。因此，时间复杂度为 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(d))。由于一个整数的位数与它的大小是[对数关系](#A2L2U)，若 `x` 的绝对值为 `N`，则 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?d%20%3D%20%5Clog_%7B10%7DN)，因此时间复杂度可以表示为 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7DN))。在大多数分析中，我们用[自然对数](#jJb4z)，所以时间复杂度也可以表示为 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N))。



**空间复杂度：**![image](https://cdn.nlark.com/yuque/__latex/a2006f1ac61cb1902beacb3e29fff089.svg)

没有使用任何额外的数据结构（如数组或对象），所有操作都是就地进行的。因此，空间复杂度为 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(1))。



**原理简述：**

每一次遍历，都将 x 的最低位搬运到 ans 的最高位。

`ans = ans * 10 + x % 10;`

`x = Math.trunc(x / 10);`（[Math.trunc 的基本用法](#ow1VY)）

![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1717907471841-61b9eb78-667f-4301-869a-3e6dfb0cb96d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/2331396/1717907491564-d1a8367c-5fd1-40d5-8a19-db02a32233f5.png)



# 笔记


## 笔记 - 整数位数和它的大小之间对数关系


一个整数的位数（即该整数表示为十进制数时的数字个数）与这个整数的大小之间存在对数关系。



如果我们有一个正整数![image](https://cdn.nlark.com/yuque/__latex/459f3c80a50b7be28751b0869ef5386a.svg)，它的十进制表示的位数![image](https://cdn.nlark.com/yuque/__latex/56c1b0cb7a48ccf9520b0adb3c8cb2e8.svg)可以通过以下方式计算：



![image](https://cdn.nlark.com/yuque/__latex/798e57eb71ad2c75666deae2e1bb32f4.svg)



这是因为在十进制系统中，每增加一位数，数的大小大约增加十倍。例如：



+ 一位数的范围是 1 到 9。
+ 两位数的范围是 10 到 99。
+ 三位数的范围是 100 到 999。



一般来说，位数 ![image](https://cdn.nlark.com/yuque/__latex/56c1b0cb7a48ccf9520b0adb3c8cb2e8.svg) 和数的大小 ![image](https://cdn.nlark.com/yuque/__latex/459f3c80a50b7be28751b0869ef5386a.svg) 之间的关系可以表示为：



![image](https://cdn.nlark.com/yuque/__latex/29a131e9cf5ba07d7ed215a96207669a.svg)



**举几个具体例子来说明：**

+ 对于数 9，![image](https://cdn.nlark.com/yuque/__latex/e4321376e604b9942cbc50095092a637.svg)，所以位数是 ![image](https://cdn.nlark.com/yuque/__latex/5961e1bd10e82595e9c2a35a945e27e1.svg)。
+ 对于数 99，![image](https://cdn.nlark.com/yuque/__latex/dd1a7b82e016227f9dd813e4bd32d038.svg)，所以位数是 ![image](https://cdn.nlark.com/yuque/__latex/09107fcb678e1c7d9d649e6366959455.svg)。
+ 对于数 1000，![image](https://cdn.nlark.com/yuque/__latex/fd8a0ad7a4650185ee60d1d4457a7bbd.svg)，所以位数是 ![image](https://cdn.nlark.com/yuque/__latex/eb6a2a32a63855c3e8fc4adce748a493.svg)。



因此，当我们说一个整数的位数和它的大小存在对数关系时，是指位数 ![image](https://cdn.nlark.com/yuque/__latex/56c1b0cb7a48ccf9520b0adb3c8cb2e8.svg) 可以通过 ![image](https://cdn.nlark.com/yuque/__latex/0ba28b5395db99ad64773f4f9eeeb349.svg) 来估算。这种对数关系在分析算法复杂度时非常有用，因为它帮助我们将处理位数的问题转换为处理对数的问题，从而更容易进行时间复杂度的分析。



## 笔记 - 对比![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7D%20N)) 和 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N))


<u>在算法分析中，时间复杂度表示法中的 </u>![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7D%20N))<u> 和 </u>![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N))<u> 实际上表示的是相同的增长速率，尽管它们在形式上有所不同。</u>让我们仔细分析一下它们之间的关系。



**对数的底**

+ ![image](https://cdn.nlark.com/yuque/__latex/0ba28b5395db99ad64773f4f9eeeb349.svg)：表示以 10 为底的对数。
+ ![image](https://cdn.nlark.com/yuque/__latex/09c50184c7cbd2487a1b84dae0bce425.svg)：通常表示以 2 为底的对数（即 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_2%20N)），不过在很多情况下，如果没有明确指定底，![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog%20N) 也可以泛指对数，底数可以是 2、10 或 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?e)。



**对数之间的换算**

不同底数的对数之间可以通过换底公式互相转换：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_a%20N%20%3D%20%5Cfrac%7B%5Clog_b%20N%7D%7B%5Clog_b%20a%7D)



例如：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_%7B10%7D%20N%20%3D%20%5Cfrac%7B%5Clog_2%20N%7D%7B%5Clog_2%2010%7D)



由于 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_2%2010) 是一个常数，大约等于 3.32193，因此：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_%7B10%7D%20N%20%3D%20%5Cfrac%7B%5Clog_2%20N%7D%7B3.32193%7D)



**大 O 表示法中的常数因子**

在大 O 表示法中，我们关注的是增长速率，而不是具体的常数因子。大 O 表示法忽略了常数因子，因此：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7D%20N)%20%3D%20O%5Cleft(%5Cfrac%7B%5Clog_2%20N%7D%7B3.32193%7D%5Cright)%20%3D%20O(%5Clog_2%20N))



类似地，对于自然对数 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Cln%20N)（以 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?e) 为底的对数），也有：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Cln%20N%20%3D%20%5Clog_e%20N%20%3D%20%5Cfrac%7B%5Clog_2%20N%7D%7B%5Clog_2%20e%7D)



同样地，因为 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?%5Clog_2%20e) 是一个常数，所以：



![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Cln%20N)%20%3D%20O%5Cleft(%5Cfrac%7B%5Clog_2%20N%7D%7B%5Clog_2%20e%7D%5Cright)%20%3D%20O(%5Clog_2%20N))



因此， ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7D%20N)) 和 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N)) 在表示时间复杂度时是等价的，因为它们都表示对数增长，只是底数不同。由于大 O 表示法忽略了常数因子，这些底数不同的对数表达式在大 O 表示法中被视为相同的增长速率。



所以， ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog_%7B10%7D%20N)) 和 ![image](https://www.yuque.com/api/services/graph/generate_redirect/latex?O(%5Clog%20N)) 表示的含义在算法复杂度分析中是一样的。



## 笔记 - Math.trunc 的基本用法


在 `Math.trunc` 中，`trunc` 的全称是 [truncate](https://www.yuque.com/huyouda/en/truncate)。`Math.trunc` 方法用于截取数字的小数部分，只保留其整数部分，无论数字是正数还是负数。



```javascript
console.log(Math.trunc(4.9));    // 输出: 4
console.log(Math.trunc(-4.9));   // 输出: -4
console.log(Math.trunc(4.1));    // 输出: 4
console.log(Math.trunc(-4.1));   // 输出: -4
```



`Math.trunc` 会简单地删除小数点后的所有内容，而不会进行舍入操作。这与 `Math.floor` 和 `Math.ceil` 的行为不同，`Math.floor` 总是向下舍入到最接近的整数，`Math.ceil` 总是向上舍入到最接近的整数。

