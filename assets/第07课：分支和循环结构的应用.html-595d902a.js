import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as a,a as n,b as i,e as v,f as e}from"./app-9976b6d0.js";const u={},o=e(`<h2 id="第07课-分支和循环结构的应用" tabindex="-1"><a class="header-anchor" href="#第07课-分支和循环结构的应用" aria-hidden="true">#</a> 第07课：分支和循环结构的应用</h2><p>通过上两节课的学习，大家对Python中的分支和循环结构已经有了感性的认识。<strong>分支和循环结构</strong>的重要性不言而喻，它<strong>是构造程序逻辑的基础</strong>，对于初学者来说也是比较困难的部分。大部分初学者在学习了分支和循环结构后都能理解它们的用途和用法，但是遇到实际问题的时候又无法下手；<strong>看懂别人的代码很容易，但是要自己写出同样的代码却又很难</strong>。如果你也有同样的问题和困惑，千万不要沮丧，这只是因为你才刚刚开始编程之旅，<strong>你的练习量还没有达到让你可以随心所欲的写出代码的程度</strong>，只要加强编程练习，这个问题迟早都会解决的。下面我们就为大家讲解一些经典的案例。</p><h3 id="经典小案例" tabindex="-1"><a class="header-anchor" href="#经典小案例" aria-hidden="true">#</a> 经典小案例</h3><h4 id="例子1-寻找水仙花数。" tabindex="-1"><a class="header-anchor" href="#例子1-寻找水仙花数。" aria-hidden="true">#</a> 例子1：寻找水仙花数。</h4><blockquote><p><strong>说明</strong>：水仙花数也被称为超完全数字不变数、自恋数、自幂数、阿姆斯特朗数，它是一个3位数，该数字每个位上数字的立方之和正好等于它本身，例如：$ 153=1<sup>3+5</sup>3+3^3 $。</p></blockquote><p>这个题目的关键是将一个三位数拆分为个位、十位、百位，这一点利用Python中的<code>//</code>（整除）和<code>%</code>（求模）运算符其实很容易做到，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
找出所有水仙花数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
for num in range(100, 1000):
    low = num % 10
    mid = num // 10 % 10
    high = num // 100
    if num == low ** 3 + mid ** 3 + high ** 3:
        print(num)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面利用<code>//</code>和<code>%</code>拆分一个数的小技巧在写代码的时候还是很常用的。我们要将一个不知道有多少位的正整数进行反转，例如将<code>12345</code>变成<code>54321</code>，也可以利用这两个运算来实现，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
正整数的反转

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
num = int(input(&#39;num = &#39;))
reversed_num = 0
while num &gt; 0:
    reversed_num = reversed_num * 10 + num % 10
    num //= 10
print(reversed_num)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-百钱百鸡问题。" tabindex="-1"><a class="header-anchor" href="#例子2-百钱百鸡问题。" aria-hidden="true">#</a> 例子2：百钱百鸡问题。</h4>`,10),c=n("strong",null,"说明",-1),t={href:"https://baike.baidu.com/item/%E5%BC%A0%E4%B8%98%E5%BB%BA/10246238",target:"_blank",rel:"noopener noreferrer"},m=e(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
《百钱百鸡》问题

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
# 假设公鸡的数量为x，x的取值范围是0到20
for x in range(0, 21):
    # 假设母鸡的数量为y，y的取值范围是0到33
    for y in range(0, 34):
        z = 100 - x - y
        if 5 * x + 3 * y + z // 3 == 100 and z % 3 == 0:
            print(f&#39;公鸡: {x}只, 母鸡: {y}只, 小鸡: {z}只&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面使用的方法叫做<strong>穷举法</strong>，也称为<strong>暴力搜索法</strong>，这种方法通过一项一项的列举备选解决方案中所有可能的候选项并检查每个候选项是否符合问题的描述，最终得到问题的解。这种方法看起来比较笨拙，但对于运算能力非常强大的计算机来说，通常都是一个可行的甚至是不错的选择，只要问题的解存在就能够找到它。</p><h4 id="例子3-craps赌博游戏。" tabindex="-1"><a class="header-anchor" href="#例子3-craps赌博游戏。" aria-hidden="true">#</a> 例子3：CRAPS赌博游戏。</h4><blockquote><p><strong>说明</strong>：CRAPS又称花旗骰，是美国拉斯维加斯非常受欢迎的一种的桌上赌博游戏。该游戏使用两粒骰子，玩家通过摇两粒骰子获得点数进行游戏。简化后的规则是：玩家第一次摇骰子如果摇出了7点或11点，玩家胜；玩家第一次如果摇出2点、3点或12点，庄家胜；玩家如果摇出其他点数则玩家继续摇骰子，如果玩家摇出了7点，庄家胜；如果玩家摇出了第一次摇的点数，玩家胜；其他点数玩家继续摇骰子，直到分出胜负。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
Craps赌博游戏
我们设定游戏开始时玩家有1000元的赌注
游戏结束的条件是玩家破产（输光所有的赌注）

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
from random import randint

money = 1000
while money &gt; 0:
    print(f&#39;你的总资产为: {money}元&#39;)
    go_on = False
    # 下注金额必须大于0小于等于玩家总资产
    while True:
        debt = int(input(&#39;请下注: &#39;))
        if 0 &lt; debt &lt;= money:
            break
    # 第一次摇色子
    # 用1到6均匀分布的随机数模拟摇色子得到的点数
    first = randint(1, 6) + randint(1, 6)
    print(f&#39;\\n玩家摇出了{first}点&#39;)
    if first == 7 or first == 11:
        print(&#39;玩家胜!\\n&#39;)
        money += debt
    elif first == 2 or first == 3 or first == 12:
        print(&#39;庄家胜!\\n&#39;)
        money -= debt
    else:
        go_on = True
    # 第一次摇色子没有分出胜负游戏继续
    while go_on:
        go_on = False
        current = randint(1, 6) + randint(1, 6)
        print(f&#39;玩家摇出了{current}点&#39;)
        if current == 7:
            print(&#39;庄家胜!\\n&#39;)
            money -= debt
        elif current == first:
            print(&#39;玩家胜!\\n&#39;)
            money += debt
        else:
            go_on = True
print(&#39;你破产了, 游戏结束!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子4-斐波那契数列。" tabindex="-1"><a class="header-anchor" href="#例子4-斐波那契数列。" aria-hidden="true">#</a> 例子4：斐波那契数列。</h4><blockquote><p><strong>说明</strong>：斐波那契数列（Fibonacci sequence），通常也被称作黄金分割数列，是意大利数学家莱昂纳多·斐波那契（Leonardoda Fibonacci）在《计算之书》中研究在理想假设条件下兔子成长率问题而引入的数列，因此这个数列也常被戏称为“兔子数列”。斐波那契数列的特点是数列的前两个数都是1，从第三个数开始，每个数都是它前面两个数的和，按照这个规律，斐波那契数列的前10个数是：<code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55</code>。斐波那契数列在现代物理、准晶体结构、化学等领域都有直接的应用。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输出斐波那契数列前20个数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;

a, b = 0, 1
for _ in range(20):
    a, b = b, a + b
    print(a)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子5-打印100以内的素数。" tabindex="-1"><a class="header-anchor" href="#例子5-打印100以内的素数。" aria-hidden="true">#</a> 例子5：打印100以内的素数。</h4><blockquote><p><strong>说明</strong>：素数指的是只能被1和自身整除的正整数（不包括1）。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输出100以内的素数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
for num in range(2, 100):
    # 假设num是素数
    is_prime = True
    # 在2到num-1之间找num的因子
    for factor in range(2, num):
        # 如果找到了num的因子，num就不是素数
        if num % factor == 0:
            is_prime = False
            break
    # 如果布尔值为True在num是素数
    if is_prime:
        print(num)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>还是那句话：<strong>分支结构和循环结构非常重要</strong>，是构造程序逻辑的基础，<strong>一定要通过大量的练习来达到融会贯通</strong>。刚才讲到的CRAPS赌博游戏那个例子可以作为一个标准，如果你能很顺利的完成这段代码，那么分支和循环结构的知识你就已经掌握了。</p>`,13);function b(h,g){const d=r("ExternalLinkIcon");return l(),a("div",null,[o,n("blockquote",null,[n("p",null,[c,i("：百钱百鸡是我国古代数学家"),n("a",t,[i("张丘建"),v(d)]),i("在《算经》一书中提出的数学问题：鸡翁一值钱五，鸡母一值钱三，鸡雏三值钱一。百钱买百鸡，问鸡翁、鸡母、鸡雏各几何？翻译成现代文是：公鸡5元一只，母鸡3元一只，小鸡1元三只，用100块钱买一百只鸡，问公鸡、母鸡、小鸡各有多少只？")])]),m])}const _=s(u,[["render",b],["__file","第07课：分支和循环结构的应用.html.vue"]]);export{_ as default};
