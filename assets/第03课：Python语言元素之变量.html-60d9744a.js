import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as o}from"./app-9976b6d0.js";const s={},d=o(`<h2 id="第03课-python语言元素之变量" tabindex="-1"><a class="header-anchor" href="#第03课-python语言元素之变量" aria-hidden="true">#</a> 第03课：Python语言元素之变量</h2><p>作为一个程序员，可能经常会被外行问到两个问题，其一是“什么是（计算机）程序”，其二是“写（计算机）程序能做什么”，这里我先对这两个问题做一个回答。<strong>程序是指令的集合</strong>，<strong>写程序就是用指令控制计算机做我们想让它做的事情</strong>。那么，为什么要用Python语言来写程序呢？因为<strong>Python语言简单优雅</strong>，相比C、C++、Java这样的编程语言，<strong>Python对初学者更加友好</strong>，当然这并不是说Python不像其他语言那样强大，<strong>Python几乎是无所不能的</strong>，在第一节课的时候，我们就说到了Python可以用于服务器程序开发、云平台开发、数据分析、机器学习等各个领域。当然，Python语言还可以用来粘合其他语言开发的系统，所以也经常被戏称为“<strong>胶水语言</strong>”。</p><h3 id="一些计算机常识" tabindex="-1"><a class="header-anchor" href="#一些计算机常识" aria-hidden="true">#</a> 一些计算机常识</h3><p>在开始系统的学习编程之前，我们先来科普一些计算机的基础知识。计算机的硬件系统通常由五大部件构成，包括：<strong>运算器</strong>、<strong>控制器</strong>、<strong>存储器</strong>、<strong>输入设备</strong>和<strong>输出设备</strong>。其中，运算器和控制器放在一起就是我们常说的<strong>中央处理器</strong>，它的功能是执行各种运算和控制指令。刚才我们提到过程序是指令的集合，写程序就是将一系列的指令按照某种方式组织到一起，然后通过这些指令去控制计算机做我们想让它做的事情。目前，我们使用的计算机基本都是“冯·诺依曼体系结构”的计算机，这种计算机有两个关键点：一是要将<strong>存储设备与中央处理器分开</strong>；二是将<strong>数据以二进制方式编码</strong>。</p><p>二进制是一种“逢二进一”的计数法，跟我们人类使用的“逢十进一”的计数法本质是一样的。人类因为有十根手指所以使用了十进制，因为在计数时十根手指用完之后就只能用进位的方式来表示更大的数值。当然凡事都有例外，玛雅人可能是因为长年光着脚的原因，把脚趾头也都用上了，于是他们使用了二十进制的计数法。在这种计数法的指导下，玛雅人的历法就与我们平常使用的历法并不相同。按照玛雅人的历法，2012年是上一个所谓的“太阳纪”的最后一年，而2013年则是新的“太阳纪”的开始，后来这件事情被以讹传讹的方式误传为”2012年是玛雅人预言的世界末日“的荒诞说法。今天很多人都在猜测，玛雅文明之所以发展缓慢跟使用了二十进制是有关系的。对于计算机来说，二进制在物理器件上最容易实现的，因为可以用高电压表示1，用低电压表示0。不是所有写程序的人都需要知道十进制与二进制如何转换，大多数时候我们即便不了解这些知识也能写出程序，但是我们必须要知道<strong>计算机是使用二进制计数的</strong>，不管什么<strong>数据到了计算机内存中都是以二进制形式存在的</strong>。</p><h3 id="变量和类型" tabindex="-1"><a class="header-anchor" href="#变量和类型" aria-hidden="true">#</a> 变量和类型</h3><p>要想在计算机内存中保存数据，首先就得说一说变量这个概念。在编程语言中，<strong>变量是数据的载体</strong>，简单的说就是一块用来保存数据的内存空间，<strong>变量的值可以被读取和修改</strong>，这是所有计算和控制的基础。计算机能处理的数据有很多种类型，最常见的就是数值，除了数值之外还有文本、图形、音频、视频等各种各样的数据。虽然数据在计算机中都是以二进制形态存在的，但是我们可以用不同类型的变量来表示数据类型的差异。<strong>Python中的数据类型很多</strong>，而且也<strong>允许我们自定义新的数据类型</strong>（这一点在后面会讲到），这里我们需要先了解几种常用的数据类型。</p><ul><li>整型（<code>int</code>）：Python中可以处理任意大小的整数，而且支持二进制（如<code>0b100</code>，换算成十进制是4）、八进制（如<code>0o100</code>，换算成十进制是64）、十进制（<code>100</code>）和十六进制（<code>0x100</code>，换算成十进制是256）的表示法。</li><li>浮点型（<code>float</code>）：浮点数也就是小数，之所以称为浮点数，是因为按照科学记数法表示时，一个浮点数的小数点位置是可变的，浮点数除了数学写法（如<code>123.456</code>）之外还支持科学计数法（如<code>1.23456e2</code>）。</li><li>字符串型（<code>str</code>）：字符串是以单引号或双引号括起来的任意文本，比如<code>&#39;hello&#39;</code>和<code>&quot;hello&quot;</code>。</li><li>布尔型（<code>bool</code>）：布尔值只有<code>True</code>、<code>False</code>两种值，要么是<code>True</code>，要么是<code>False</code>。</li></ul><h3 id="变量命名" tabindex="-1"><a class="header-anchor" href="#变量命名" aria-hidden="true">#</a> 变量命名</h3><p>对于每个变量我们需要给它取一个名字，就如同我们每个人都有自己的名字一样。在Python中，变量命名需要遵循以下这些规则，这些规则又分为必须遵守的硬性规则和建议遵守的非硬性规则。</p><ul><li>硬性规则： <ul><li>规则1：变量名由<strong>字母</strong>、数字和<strong>下划线</strong>构成，数字不能开头。需要说明的是，这里说的字母指的是Unicode字符，Unicode称为万国码，囊括了世界上大部分的文字系统，这也就意味着中文、日文、希腊字母等都可以作为变量名中的字符，但是像<code>!</code>、<code>@</code>、<code>#</code>这些特殊字符是不能出现在变量名中的，而且我们强烈建议大家<strong>尽可能使用英文字母</strong>。</li><li>规则2：<strong>大小写敏感</strong>，简单的说就是大写的<code>A</code>和小写的<code>a</code>是两个不同的变量。</li><li>规则3：变量名<strong>不要跟Python语言的关键字</strong>（有特殊含义的单词，后面会讲到）和<strong>保留字</strong>（如已有的函数、模块等的名字）<strong>发生重名的冲突</strong>。</li></ul></li><li>非硬性规则： <ul><li>规则1：变量名通常使用小写英文字母，多个单词用下划线进行连接。</li><li>规则2：受保护的变量用单个下划线开头。</li><li>规则3：私有的变量用两个下划线开头。</li></ul></li></ul><p>规则2和规则3大家暂时不用理解，后面自然会明白的。当然，作为一个专业的程序员，给变量（事实上应该是所有的标识符）命名时做到<strong>见名知意</strong>也非常重要。</p><h3 id="变量的使用" tabindex="-1"><a class="header-anchor" href="#变量的使用" aria-hidden="true">#</a> 变量的使用</h3><p>下面通过例子来说明变量的类型和变量的使用。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
使用变量保存数据并进行加减乘除运算

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
a = 45          # 变量a保存了45
b = 12          # 变量b保存了12
print(a + b)    # 57
print(a - b)    # 33
print(a * b)    # 540
print(a / b)    # 3.75
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python中可以使用<code>type</code>函数对变量的类型进行检查。程序设计中函数的概念跟数学上函数的概念基本一致，数学上的函数相信大家并不陌生，它包括了函数名、自变量和因变量。如果暂时不理解函数这个概念也不要紧，我们会在后续的内容中专门讲解函数的定义和使用。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
使用type()检查变量的类型

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
a = 100
b = 12.345
c = &#39;hello, world&#39;
d = True
print(type(a))    # &lt;class &#39;int&#39;&gt;
print(type(b))    # &lt;class &#39;float&#39;&gt;
print(type(c))    # &lt;class &#39;str&#39;&gt;
print(type(d))    # &lt;class &#39;bool&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同类型的变量可以相互转换，这一点可以通过Python的内置函数来实现。</p><ul><li><code>int()</code>：将一个数值或字符串转换成整数，可以指定进制。</li><li><code>float()</code>：将一个字符串转换成浮点数。</li><li><code>str()</code>：将指定的对象转换成字符串形式，可以指定编码。</li><li><code>chr()</code>：将整数转换成该编码对应的字符串（一个字符）。</li><li><code>ord()</code>：将字符串（一个字符）转换成对应的编码（整数）。</li></ul><p>下面的例子为大家演示了Python中类型转换的操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
Python中的类型转换操作

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
a = 100
b = 12.345
c = &#39;hello, world&#39;
d = True
# 整数转成浮点数
print(float(a))    # 100.0
# 浮点型转成字符串 (输出字符串时不会看到引号哟)
print(str(b))      # 12.345
# 字符串转成布尔型 (有内容的字符串都会变成True)
print(bool(c))     # True
# 布尔型转成整数 (True会转成1，False会转成0)
print(int(d))      # 1
# 将整数变成对应的字符 (97刚好对应字符表中的字母a)
print(chr(97))     # a
# 将字符转成整数 (Python中字符和字符串表示法相同)
print(ord(&#39;a&#39;))    # 97
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>在Python程序中，我们可以<strong>使用变量来保存数据</strong>，<strong>变量有不同的类型</strong>，<strong>变量可以做运算</strong>（下一课会有详细的讲解），<strong>也可以通过内置函数来转换变量类型</strong>。</p>`,23),r=[d];function l(t,a){return e(),i("div",null,r)}const v=n(s,[["render",l],["__file","第03课：Python语言元素之变量.html.vue"]]);export{v as default};
