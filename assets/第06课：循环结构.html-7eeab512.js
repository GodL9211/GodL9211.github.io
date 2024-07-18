import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9976b6d0.js";const r={},a=d(`<h2 id="第06课-循环结构" tabindex="-1"><a class="header-anchor" href="#第06课-循环结构" aria-hidden="true">#</a> 第06课：循环结构</h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>我们在写程序的时候，一定会遇到需要重复执行某条指令或某些指令的场景。例如用程序控制机器人踢足球，如果机器人持球而且还没有进入射门范围，那么我们就要一直发出让机器人向球门方向移动的指令。在这个场景中，让机器人向球门方向移动就是一个需要重复的动作，当然这里还会用到上一课讲的分支结构来判断机器人是否持球以及是否进入射门范围。再举一个简单的例子，如果要实现每隔1秒中在屏幕上打印一次“hello, world”并持续打印一个小时，我们肯定不能够直接把<code>print(&#39;hello, world&#39;)</code>这句代码写3600遍，这里我们需要构造循环结构。</p><p>所谓循环结构，就是程序中控制某条或某些指令重复执行的结构。在Python中构造循环结构有两种做法，一种是<code>for-in</code>循环，另一种是<code>while</code>循环。</p><h3 id="for-in循环" tabindex="-1"><a class="header-anchor" href="#for-in循环" aria-hidden="true">#</a> for-in循环</h3><p>如果明确的知道循环执行的次数，我们推荐使用<code>for-in</code>循环，例如输出100行的”hello, world“。 被<code>for-in</code>循环控制的语句块也是通过缩进的方式来构造的，这一点跟分支结构完全相同，大家看看下面的代码就明白了。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
用for循环实现1~100求和

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
total = 0
for x in range(1, 101):
    total += x
print(total)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是上面代码中的<code>range(1, 101)</code>可以用来构造一个从<code>1</code>到<code>100</code>的范围，当我们把这样一个范围放到<code>for-in</code>循环中，就可以通过前面的循环变量<code>x</code>依次取出从<code>1</code>到<code>100</code>的整数。当然，<code>range</code>的用法非常灵活，下面给出了一个例子：</p><ul><li><code>range(101)</code>：可以用来产生0到100范围的整数，需要注意的是取不到101。</li><li><code>range(1, 101)</code>：可以用来产生1到100范围的整数，相当于前面是闭区间后面是开区间。</li><li><code>range(1, 101, 2)</code>：可以用来产生1到100的奇数，其中2是步长，即每次递增的值。</li><li><code>range(100, 0, -2)</code>：可以用来产生100到1的偶数，其中-2是步长，即每次递减的值。</li></ul><p>知道了这一点，我们可以用下面的代码来实现1~100之间的偶数求和。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
用for循环实现1~100之间的偶数求和

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
total = 0
for x in range(2, 101, 2):
    total += x
print(total)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><p>如果要构造不知道具体循环次数的循环结构，我们推荐使用<code>while</code>循环。<code>while</code>循环通过一个能够产生<code>bool</code>值的表达式来控制循环，当表达式的值为<code>True</code>时则继续循环，当表达式的值为<code>False</code>时则结束循环。</p><p>下面我们通过一个“猜数字”的小游戏来看看如何使用<code>while</code>循环。猜数字游戏的规则是：计算机出一个<code>1</code>到<code>100</code>之间的随机数，玩家输入自己猜的数字，计算机给出对应的提示信息（大一点、小一点或猜对了），如果玩家猜中了数字，计算机提示用户一共猜了多少次，游戏结束，否则游戏继续。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
猜数字游戏

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
import random

# 产生一个1-100范围的随机数
answer = random.randint(1, 100)
counter = 0
while True:
    counter += 1
    number = int(input(&#39;请输入: &#39;))
    if number &lt; answer:
        print(&#39;大一点&#39;)
    elif number &gt; answer:
        print(&#39;小一点&#39;)
    else:
        print(&#39;恭喜你猜对了!&#39;)
        break
# 当退出while循环的时候显示用户一共猜了多少次
print(f&#39;你总共猜了{counter}次&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="break和continue" tabindex="-1"><a class="header-anchor" href="#break和continue" aria-hidden="true">#</a> break和continue</h3><p>上面的代码中使用<code>while True</code>构造了一个条件恒成立的循环，也就意味着如果不做特殊处理，循环是不会结束的，这也就是常说的“死循环”。为了在用户猜中数字时能够退出循环结构，我们使用了<code>break</code>关键字，它的作用是提前结束循环。需要注意的是，<code>break</code>只能终止它所在的那个循环，这一点在使用嵌套循环结构时需要引起注意，下面的例子我们会讲到什么是嵌套的循环结构。除了<code>break</code>之外，还有另一个关键字是<code>continue</code>，它可以用来放弃本次循环后续的代码直接让循环进入下一轮。</p><h3 id="嵌套的循环结构" tabindex="-1"><a class="header-anchor" href="#嵌套的循环结构" aria-hidden="true">#</a> 嵌套的循环结构</h3><p>和分支结构一样，循环结构也是可以嵌套的，也就是说在循环中还可以构造循环结构。下面的例子演示了如何通过嵌套的循环来输出一个乘法口诀表（九九表）。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
打印乘法口诀表

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
for i in range(1, 10):
    for j in range(1, i + 1):
        print(f&#39;{i}*{j}={i * j}&#39;, end=&#39;\\t&#39;)
    print()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很显然，在上面的代码中，外层循环用来控制一共会产生<code>9</code>行的输出，而内层循环用来控制每一行会输出多少列。内层循环中的输出就是九九表一行中的所有列，所以在内层循环完成时，有一个<code>print()</code>来实现换行输出的效果。</p><h3 id="循环的例子" tabindex="-1"><a class="header-anchor" href="#循环的例子" aria-hidden="true">#</a> 循环的例子</h3><h4 id="例子1-输入一个正整数判断它是不是素数。" tabindex="-1"><a class="header-anchor" href="#例子1-输入一个正整数判断它是不是素数。" aria-hidden="true">#</a> 例子1：输入一个正整数判断它是不是素数。</h4><blockquote><p><strong>提示</strong>：素数指的是只能被1和自身整除的大于1的整数。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入一个正整数判断它是不是素数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
num = int(input(&#39;请输入一个正整数: &#39;))
end = int(num ** 0.5)
is_prime = True
for x in range(2, end + 1):
    if num % x == 0:
        is_prime = False
        break
if is_prime and num != 1:
    print(f&#39;{num}是素数&#39;)
else:
    print(f&#39;{num}不是素数&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-输入两个正整数-计算它们的最大公约数和最小公倍数。" tabindex="-1"><a class="header-anchor" href="#例子2-输入两个正整数-计算它们的最大公约数和最小公倍数。" aria-hidden="true">#</a> 例子2：输入两个正整数，计算它们的最大公约数和最小公倍数。</h4><blockquote><p><strong>提示</strong>：两个数的最大公约数是两个数的公共因子中最大的那个数；两个数的最小公倍数则是能够同时被两个数整除的最小的那个数。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入两个正整数计算它们的最大公约数和最小公倍数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;

x = int(input(&#39;x = &#39;))
y = int(input(&#39;y = &#39;))
for factor in range(x, 0, -1):
    if x % factor == 0 and y % factor == 0:
        print(f&#39;{x}和{y}的最大公约数是{factor}&#39;)
        print(f&#39;{x}和{y}的最小公倍数是{x * y // factor}&#39;)
        break
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>学会了Python中的分支结构和循环结构，我们就可以解决很多实际的问题了。通过这节课的学习，大家应该已经知道了可以用<code>for</code>和<code>while</code>关键字来构造循环结构。<strong>如果知道循环的次数，我们通常使用</strong><code>for</code><strong>循环</strong>；如果<strong>循环次数不能确定，可以用</strong><code>while</code><strong>循环</strong>。在循环中还<strong>可以使用</strong><code>break</code><strong>来提前结束循环</strong>。</p>`,30),s=[a];function l(o,c){return n(),i("div",null,s)}const t=e(r,[["render",l],["__file","第06课：循环结构.html.vue"]]);export{t as default};
