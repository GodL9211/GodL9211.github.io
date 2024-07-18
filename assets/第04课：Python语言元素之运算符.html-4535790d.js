import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as n,f as o}from"./app-9976b6d0.js";const c={},i=o(`<h2 id="第04课-python语言元素之运算符" tabindex="-1"><a class="header-anchor" href="#第04课-python语言元素之运算符" aria-hidden="true">#</a> 第04课：Python语言元素之运算符</h2><p>Python语言支持很多种运算符，我们先用一个表格为大家列出这些运算符，然后选择一些马上就会用到的运算符为大家进行讲解。</p><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>[]</code> <code>[:]</code></td><td>下标，切片</td></tr><tr><td><code>**</code></td><td>指数</td></tr><tr><td><code>~</code> <code>+</code> <code>-</code></td><td>按位取反, 正负号</td></tr><tr><td><code>*</code> <code>/</code> <code>%</code> <code>//</code></td><td>乘，除，模，整除</td></tr><tr><td><code>+</code> <code>-</code></td><td>加，减</td></tr><tr><td><code>&gt;&gt;</code> <code>&lt;&lt;</code></td><td>右移，左移</td></tr><tr><td><code>&amp;</code></td><td>按位与</td></tr><tr><td><code>^</code> <code>|</code></td><td>按位异或，按位或</td></tr><tr><td><code>&lt;=</code> <code>&lt;</code> <code>&gt;</code> <code>&gt;=</code></td><td>小于等于，小于，大于，大于等于</td></tr><tr><td><code>==</code> <code>!=</code></td><td>等于，不等于</td></tr><tr><td><code>is</code> <code>is not</code></td><td>身份运算符</td></tr><tr><td><code>in</code> <code>not in</code></td><td>成员运算符</td></tr><tr><td><code>not</code> <code>or</code> <code>and</code></td><td>逻辑运算符</td></tr><tr><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code> <code>//=</code> <code>**=</code> <code>&amp;=</code> <code>|=</code> <code>^=</code> <code>&gt;&gt;=</code> <code>&lt;&lt;=</code></td><td>（复合）赋值运算符</td></tr></tbody></table><blockquote><p><strong>说明：</strong> 上面这个表格实际上是按照运算符的优先级从上到下列出了各种运算符。所谓优先级就是在一个运算的表达式中，如果出现了多个运算符，应该先执行哪个运算再执行哪个运算的顺序。在实际开发中，如果搞不清楚运算符的优先级，可以使用圆括号来确保运算的执行顺序。</p></blockquote><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><p>Python中的算术运算符非常丰富，除了大家最为熟悉的加减乘除之外，还有整除运算符、求模（求余数）运算符和求幂运算符。下面的例子为大家展示了算术运算符的使用。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
算术运算符

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
print(321 + 123)     # 加法运算
print(321 - 123)     # 减法运算
print(321 * 123)     # 乘法运算
print(321 / 123)     # 除法运算
print(321 % 123)     # 求模运算
print(321 // 123)    # 整除运算
print(321 ** 123)    # 求幂运算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><p>赋值运算符应该是最为常见的运算符，它的作用是将右边的值赋给左边的变量。下面的例子演示了赋值运算符和复合赋值运算符的使用。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
赋值运算符和复合赋值运算符

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
a = 10
b = 3
a += b        # 相当于：a = a + b
a *= a + 2    # 相当于：a = a * (a + 2)
print(a)      # 算一下这里会输出什么
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>###比较运算符和逻辑运算符</p><p>比较运算符有的地方也称为关系运算符，包括<code>==</code>、<code>!=</code>、<code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code>、<code>&gt;=</code>，我相信没有什么好解释的，大家一看就能懂，需要提醒的是比较相等用的是<code>==</code>，请注意这里是两个等号，因为<code>=</code>是赋值运算符，我们在上面刚刚讲到过，<code>==</code>才是比较相等的运算符；比较不相等用的是<code>!=</code>，这不同于数学上的不等号，Python 2中曾经使用过<code>&lt;&gt;</code>来表示不等关系，大家知道就可以了。比较运算符会产生布尔值，要么是<code>True</code>要么是<code>False</code>。</p><p>逻辑运算符有三个，分别是<code>and</code>、<code>or</code>和<code>not</code>。<code>and</code>字面意思是“而且”，所以<code>and</code>运算符会连接两个布尔值，如果两个布尔值都是<code>True</code>，那么运算的结果就是<code>True</code>；左右两边的布尔值有一个是<code>False</code>，最终的运算结果就是<code>False</code>。相信大家已经想到了，如果<code>and</code>左边的布尔值是<code>False</code>，不管右边的布尔值是什么，最终的结果都是<code>False</code>，所以在做运算的时候右边的值会被跳过（短路处理），这也就意味着在<code>and</code>运算符左边为<code>False</code>的情况下，右边的表达式根本不会执行。<code>or</code>字面意思是“或者”，所以<code>or</code>运算符也会连接两个布尔值，如果两个布尔值有任意一个是<code>True</code>，那么最终的结果就是<code>True</code>。当然，<code>or</code>运算符也是有短路功能的，在它左边的布尔值为<code>True</code>的情况下，右边的表达式根本不会执行。<code>not</code>运算符的后面会跟上一个布尔值，它的作用是得到与该布尔值相反的值，也就是说，<code>not</code>后面的布尔值如果是<code>True</code>，运算结果就是<code>False</code>；而<code>not</code>后面的布尔值如果是<code>False</code>，运算结果就是<code>True</code>。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
比较运算符和逻辑运算符的使用

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
flag0 = 1 == 1
flag1 = 3 &gt; 2
flag2 = 2 &lt; 1
flag3 = flag1 and flag2
flag4 = flag1 or flag2
flag5 = not (1 != 2)
print(&#39;flag0 =&#39;, flag0)    # flag0 = True
print(&#39;flag1 =&#39;, flag1)    # flag1 = True
print(&#39;flag2 =&#39;, flag2)    # flag2 = False
print(&#39;flag3 =&#39;, flag3)    # flag3 = False
print(&#39;flag4 =&#39;, flag4)    # flag4 = True
print(&#39;flag5 =&#39;, flag5)    # flag5 = False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：比较运算符的优先级高于赋值运算符，所以<code>flag0 = 1 == 1</code>先做<code>1 == 1</code>产生布尔值<code>True</code>，再将这个值赋值给变量<code>flag0</code>。<code>print</code>函数可以输出多个值，多个值之间可以用<code>,</code>进行分隔，输出的内容之间默认以空格分开。</p></blockquote><h3 id="运算符的例子" tabindex="-1"><a class="header-anchor" href="#运算符的例子" aria-hidden="true">#</a> 运算符的例子</h3><h4 id="例子1-华氏温度转换为摄氏温度。" tabindex="-1"><a class="header-anchor" href="#例子1-华氏温度转换为摄氏温度。" aria-hidden="true">#</a> 例子1：华氏温度转换为摄氏温度。</h4><blockquote><p><strong>提示</strong>：华氏温度到摄氏温度的转换公式为：<code>C = (F - 32) / 1.8</code>。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
将华氏温度转换为摄氏温度

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
f = float(input(&#39;请输入华氏温度: &#39;))
c = (f - 32) / 1.8
print(&#39;%.1f华氏度 = %.1f摄氏度&#39; % (f, c))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：在使用<code>print</code>函数输出时，也可以对字符串内容进行格式化处理，上面<code>print</code>函数中的字符串<code>%.1f</code>是一个占位符，稍后会由一个<code>float</code>类型的变量值替换掉它。同理，如果字符串中有<code>%d</code>，后面可以用一个<code>int</code>类型的变量值替换掉它，而<code>%s</code>会被字符串的值替换掉。除了这种格式化字符串的方式外，还可以用下面的方式来格式化字符串，其中<code>{f:.1f}</code>和<code>{c:.1f}</code>可以先看成是<code>{f}</code>和<code>{c}</code>，表示输出时会用变量<code>f</code>和变量<code>c</code>的值替换掉这两个占位符，后面的<code>:.1f</code>表示这是一个浮点数，小数点后保留1位有效数字。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>print(f&#39;{f:.1f}华氏度 = {c:.1f}摄氏度&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h4 id="例子2-输入圆的半径计算计算周长和面积。" tabindex="-1"><a class="header-anchor" href="#例子2-输入圆的半径计算计算周长和面积。" aria-hidden="true">#</a> 例子2：输入圆的半径计算计算周长和面积。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入半径计算圆的周长和面积

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
radius = float(input(&#39;请输入圆的半径: &#39;))
perimeter = 2 * 3.1416 * radius
area = 3.1416 * radius * radius
print(&#39;周长: %.2f&#39; % perimeter)
print(&#39;面积: %.2f&#39; % area)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子3-输入年份判断是不是闰年。" tabindex="-1"><a class="header-anchor" href="#例子3-输入年份判断是不是闰年。" aria-hidden="true">#</a> 例子3：输入年份判断是不是闰年。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入年份 如果是闰年输出True 否则输出False

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
year = int(input(&#39;请输入年份: &#39;))
is_leap = year % 4 == 0 and year % 100 != 0 or year % 400 == 0
print(is_leap)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：比较运算符会产生布尔值，而逻辑运算符<code>and</code>和<code>or</code>会对这些布尔值进行组合，最终也是得到一个布尔值，闰年输出<code>True</code>，平年输出<code>False</code>。</p></blockquote><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>通过上面的例子相信大家感受到了，学会使用运算符以及由运算符构成的表达式，就可以帮助我们解决很多实际的问题，<strong>运算符和表达式对于任何一门编程语言都是非常重要的</strong>。</p>`,27),a=[i];function t(l,r){return d(),n("div",null,a)}const v=e(c,[["render",t],["__file","第04课：Python语言元素之运算符.html.vue"]]);export{v as default};
