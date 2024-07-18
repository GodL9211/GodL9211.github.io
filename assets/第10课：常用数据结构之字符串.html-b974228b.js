import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c,a as e,b as d,e as r,f as n}from"./app-9976b6d0.js";const o="/assets/10_01-d54e232f.jpg",t={},v=n('<h2 id="第10课-字符串的使用" tabindex="-1"><a class="header-anchor" href="#第10课-字符串的使用" aria-hidden="true">#</a> 第10课：字符串的使用</h2><p>第二次世界大战促使了现代电子计算机的诞生，世界上的第一台通用电子计算机叫ENIAC（电子数值积分计算机），诞生于美国的宾夕法尼亚大学，占地167平米，重量27吨，每秒钟大约能够完成约5000次浮点运算，如下图所示。ENIAC诞生之后被应用于导弹弹道的计算，而数值计算也是现代电子计算机最为重要的一项功能。</p><img src="'+o+'" width="80%"><p>随着时间的推移，虽然数值运算仍然是计算机日常工作中最为重要的组成部分，但是今天的计算机还要处理大量的以文本形式存在的信息。如果我们希望通过Python程序来操作本这些文本信息，就必须要先了解字符串这种数据类型以及与它相关的知识。</p><h3 id="字符串的定义" tabindex="-1"><a class="header-anchor" href="#字符串的定义" aria-hidden="true">#</a> 字符串的定义</h3><p>所谓<strong>字符串</strong>，就是<strong>由零个或多个字符组成的有限序列</strong>，一般记为：</p>',6),u=e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mi",null,"s"),e("mo",null,"="),e("msub",null,[e("mi",null,"a"),e("mn",null,"1")]),e("msub",null,[e("mi",null,"a"),e("mn",null,"2")]),e("mo",null,"⋯"),e("msub",null,[e("mi",null,"a"),e("mi",null,"n")]),e("mtext",null," "),e("mtext",null," "),e("mtext",null," "),e("mtext",null," "),e("mtext",null," "),e("mo",{stretchy:"false"},"("),e("mn",null,"0"),e("mo",null,"≤"),e("mi",null,"n"),e("mo",null,"≤"),e("mi",{mathvariant:"normal"},"∞"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"}," s = a_1a_2 \\cdots a_n \\,\\,\\,\\,\\, (0 \\le n \\le \\infty) ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.4306em"}}),e("span",{class:"mord mathnormal"},"s"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"1")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"minner"},"⋯"),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"a"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.1514em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight"},"n")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"0"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"≤"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7719em","vertical-align":"-0.136em"}}),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"≤"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord"},"∞"),e("span",{class:"mclose"},")")])])])])],-1),m={href:"http://www.ruanyifeng.com/blog/2017/04/emoji.html",target:"_blank",rel:"noopener noreferrer"},h=n(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello, world!&#39;
s2 = &quot;你好，世界！&quot;
print(s1, s2)
# 以三个双引号或单引号开头的字符串可以折行
s3 = &#39;&#39;&#39;
hello, 
world!
&#39;&#39;&#39;
print(s3, end=&#39;&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：<code>print</code>函数中的<code>end=&#39;&#39;</code>表示输出后不换行，即将默认的结束符<code>\\n</code>（换行符）更换为<code>&#39;&#39;</code>（空字符）。</p></blockquote><h3 id="转义字符和原始字符串" tabindex="-1"><a class="header-anchor" href="#转义字符和原始字符串" aria-hidden="true">#</a> 转义字符和原始字符串</h3><p>可以在字符串中使用<code>\\</code>（反斜杠）来表示转义，也就是说<code>\\</code>后面的字符不再是它原来的意义，例如：<code>\\n</code>不是代表反斜杠和字符<code>n</code>，而是表示换行；<code>\\t</code>也不是代表反斜杠和字符<code>t</code>，而是表示制表符。所以如果字符串本身又包含了<code>&#39;</code>、<code>&quot;</code>、<code>\\</code>这些特殊的字符，必须要通过<code>\\</code>进行转义处理。例如要输出一个带单引号或反斜杠的字符串，需要用如下所示的方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;\\&#39;hello, world!\\&#39;&#39;
print(s1)
s2 = &#39;\\\\hello, world!\\\\&#39;
print(s2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中的字符串可以<code>r</code>或<code>R</code>开头，这种字符串被称为原始字符串，意思是字符串中的每个字符都是它本来的含义，没有所谓的转义字符。例如，在字符串<code>&#39;hello\\n&#39;</code>中，<code>\\n</code>表示换行；而在<code>r&#39;hello\\n&#39;</code>中，<code>\\n</code>不再表示换行，就是反斜杠和字符<code>n</code>。大家可以运行下面的代码，看看会输出什么。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 字符串s1中\\t是制表符，\\n是换行符
s1 = &#39;\\time up \\now&#39;
print(s1)
# 字符串s2中没有转义字符，每个字符都是原始含义
s2 = r&#39;\\time up \\now&#39;
print(s2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中还允许在<code>\\</code>后面还可以跟一个八进制或者十六进制数来表示字符，例如<code>\\141</code>和<code>\\x61</code>都代表小写字母<code>a</code>，前者是八进制的表示法，后者是十六进制的表示法。另外一种表示字符的方式是在<code>\\u</code>后面跟Unicode字符编码，例如<code>\\u9a86\\u660a</code>代表的是中文“骆昊”。运行下面的代码，看看输出了什么。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;\\141\\142\\143\\x61\\x62\\x63&#39;
s2 = &#39;\\u9a86\\u660a&#39;
print(s1, s2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的运算" tabindex="-1"><a class="header-anchor" href="#字符串的运算" aria-hidden="true">#</a> 字符串的运算</h3><p>Python为字符串类型提供了非常丰富的运算符，我们可以使用<code>+</code>运算符来实现字符串的拼接，可以使用<code>*</code>运算符来重复一个字符串的内容，可以使用<code>in</code>和<code>not in</code>来判断一个字符串是否包含另外一个字符串，我们也可以用<code>[]</code>和<code>[:]</code>运算符从字符串取出某个字符或某些字符。</p><h4 id="拼接和重复" tabindex="-1"><a class="header-anchor" href="#拼接和重复" aria-hidden="true">#</a> 拼接和重复</h4><p>下面的例子演示了使用<code>+</code>和<code>*</code>运算符来实现字符串的拼接和重复操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello&#39; + &#39; &#39; + &#39;world&#39;
print(s1)    # hello world
s2 = &#39;!&#39; * 3
print(s2)    # !!!
s1 += s2     # s1 = s1 + s2
print(s1)    # hello world!!!
s1 *= 2      # s1 = s1 * 2
print(s1)    # hello world!!!hello world!!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用<code>*</code>实现字符串的重复是非常有意思的一个运算符，在很多编程语言中，要表示一个有10个<code>a</code>的字符串，你只能写成<code>&quot;aaaaaaaaaa&quot;</code>，但是在Python中，你可以写成<code>&#39;a&#39; * 10</code>。你可能觉得<code>&quot;aaaaaaaaaa&quot;</code>这种写法也没有什么不方便的，那么想一想，如果字符<code>a</code>要重复100次或者1000次又会如何呢？</p><h4 id="比较运算" tabindex="-1"><a class="header-anchor" href="#比较运算" aria-hidden="true">#</a> 比较运算</h4><p>对于两个字符串类型的变量，可以直接使用比较运算符比较两个字符串的相等性或大小。需要说明的是，因为字符串在计算机内存中也是以二进制形式存在的，那么字符串的大小比较比的是每个字符对应的编码的大小。例如<code>A</code>的编码是<code>65</code>， 而<code>a</code>的编码是<code>97</code>，所以<code>&#39;A&#39; &lt; &#39;a&#39;</code>的结果相当于就是<code>65 &lt; 97</code>的结果，很显然是<code>True</code>；而<code>&#39;boy&#39; &lt; &#39;bad&#39;</code>，因为第一个字符都是<code>&#39;b&#39;</code>比不出大小，所以实际比较的是第二个字符的大小，显然<code>&#39;o&#39; &lt; &#39;a&#39;</code>的结果是<code>False</code>，所以<code>&#39;boy&#39; &lt; &#39;bad&#39;</code>的结果也是<code>False</code>。如果不清楚两个字符对应的编码到底是多少，可以使用<code>ord</code>函数来获得，例如<code>ord(&#39;A&#39;)</code>的值是<code>65</code>，而<code>ord(&#39;昊&#39;)</code>的值是<code>26122</code>。下面的代码为大家展示了字符串的比较运算。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;a whole new world&#39;
s2 = &#39;hello world&#39;
print(s1 == s2, s1 &lt; s2)      # False True
print(s2 == &#39;hello world&#39;)    # True
print(s2 == &#39;Hello world&#39;)    # False
print(s2 != &#39;Hello world&#39;)    # True
s3 = &#39;骆昊&#39;
print(ord(&#39;骆&#39;), ord(&#39;昊&#39;))               # 39558 26122
s4 = &#39;王大锤&#39;
print(ord(&#39;王&#39;), ord(&#39;大&#39;), ord(&#39;锤&#39;))    # 29579 22823 38180
print(s3 &gt; s4, s3 &lt;= s4)      # True False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要强调一下的是，字符串的比较运算比较的是字符串的内容，Python中还有一个<code>is</code>运算符（身份运算符），如果用<code>is</code>来比较两个字符串，它比较的是两个变量对应的字符串对象的内存地址（不理解先跳过），简单的说就是两个变量是否对应内存中的同一个字符串。看看下面的代码就比较清楚<code>is</code>运算符的作用了。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello world&#39;
s2 = &#39;hello world&#39;
s3 = s2
# 比较字符串的内容
print(s1 == s2, s2 == s3)    # True True
# 比较字符串的内存地址
print(s1 is s2, s2 is s3)    # False True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="成员运算" tabindex="-1"><a class="header-anchor" href="#成员运算" aria-hidden="true">#</a> 成员运算</h4><p>Python中可以用<code>in</code>和<code>not in</code>判断一个字符串中是否存在另外一个字符或字符串，<code>in</code>和<code>not in</code>运算通常称为成员运算，会产生布尔值<code>True</code>或<code>False</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello, world&#39;
print(&#39;wo&#39; in s1)    # True
s2 = &#39;goodbye&#39;
print(s2 in s1)      # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取字符串长度" tabindex="-1"><a class="header-anchor" href="#获取字符串长度" aria-hidden="true">#</a> 获取字符串长度</h4><p>获取字符串长度没有直接的运算符，而是使用内置函数<code>len</code>，我们在上节课的提到过这个内置函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;hello, world&#39;
print(len(s))                   # 12
print(len(&#39;goodbye, world&#39;))    # 14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="索引和切片" tabindex="-1"><a class="header-anchor" href="#索引和切片" aria-hidden="true">#</a> 索引和切片</h4><p>如果希望从字符串中取出某个字符，我们可以对字符串进行索引运算，运算符是<code>[n]</code>，其中<code>n</code>是一个整数，假设字符串的长度为<code>N</code>，那么<code>n</code>可以是从<code>0</code>到<code>N-1</code>的整数，其中<code>0</code>是字符串中第一个字符的索引，而<code>N-1</code>是字符串中最后一个字符的索引，通常称之为正向索引；在Python中，字符串的索引也可以是从<code>-1</code>到<code>-N</code>的整数，其中<code>-1</code>是最后一个字符的索引，而<code>-N</code>则是第一个字符的索引，通常称之为负向索引。注意，因为<strong>字符串是不可变类型</strong>，所以<strong>不能通过索引运算修改字符串中的字符</strong>。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;abc123456&#39;
N = len(s)

# 获取第一个字符
print(s[0], s[-N])    # a a

# 获取最后一个字符
print(s[N-1], s[-1])  # 6 6

# 获取索引为2或-7的字符
print(s[2], s[-7])    # c c

# 获取索引为5和-4的字符
print(s[5], s[-4])    # 3 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家注意的是，在进行索引操作时，如果索引越界（正向索引不在<code>0</code>到<code>N-1</code>范围，负向索引不在<code>-1</code>到<code>-N</code>范围），会引发<code>IndexError</code>异常，错误提示信息为：<code>string index out of range</code>（字符串索引超出范围）。</p><p>如果要从字符串中取出多个字符，我们可以对字符串进行切片，运算符是<code>[i:j:k]</code>，其中<code>i</code>是开始索引，索引对应的字符可以取到；<code>j</code>是结束索引，索引对应的字符不能取到；<code>k</code>是步长，默认值为<code>1</code>，表示从前向后获取相邻字符的连续切片，所以<code>:k</code>部分可以省略。假设字符串的长度为<code>N</code>，当<code>k &gt; 0</code>时表示正向切片（从前向后获取字符），如果没有给出<code>i</code>和<code>j</code>的值，则<code>i</code>的默认值是<code>0</code>，<code>j</code>的默认值是<code>N</code>；当<code>k &lt; 0</code>时表示负向切片（从后向前获取字符），如果没有给出<code>i</code>和<code>j</code>的值，则<code>i</code>的默认值是<code>-1</code>，j的默认值是<code>-N - 1</code>。如果不理解，直接看下面的例子，记住第一个字符的索引是<code>0</code>或<code>-N</code>，最后一个字符的索引是<code>N-1</code>或<code>-1</code>就行了。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;abc123456&#39;

# i=2, j=5, k=1的正向切片操作
print(s[2:5])       # c12

# i=-7, j=-4, k=1的正向切片操作
print(s[-7:-4])     # c12

# i=2, j=9, k=1的正向切片操作
print(s[2:])        # c123456

# i=-7, j=9, k=1的正向切片操作
print(s[-7:])       # c123456

# i=2, j=9, k=2的正向切片操作
print(s[2::2])      # c246

# i=-7, j=9, k=2的正向切片操作
print(s[-7::2])     # c246

# i=0, j=9, k=2的正向切片操作
print(s[::2])       # ac246

# i=1, j=-1, k=2的正向切片操作
print(s[1:-1:2])    # b135

# i=7, j=1, k=-1的负向切片操作
print(s[7:1:-1])    # 54321c

# i=-2, j=-8, k=-1的负向切片操作
print(s[-2:-8:-1])  # 54321c

# i=7, j=-10, k=-1的负向切片操作
print(s[7::-1])     # 54321cba

# i=-1, j=1, k=-1的负向切片操作
print(s[:1:-1])     # 654321c

# i=0, j=9, k=1的正向切片
print(s[:])         # abc123456

# i=0, j=9, k=2的正向切片
print(s[::2])       # ac246

# i=-1, j=-10, k=-1的负向切片
print(s[::-1])      # 654321cba

# i=-1, j=-10, k=-2的负向切片
print(s[::-2])      # 642ca
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="循环遍历每个字符" tabindex="-1"><a class="header-anchor" href="#循环遍历每个字符" aria-hidden="true">#</a> 循环遍历每个字符</h4><p>如果希望从字符串中取出每个字符，可以使用<code>for</code>循环对字符串进行遍历，有两种方式。</p><p>方式一：</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello&#39;
for index in range(len(s1)):
    print(s1[index])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello&#39;
for ch in s1:
    print(ch)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串的方法" tabindex="-1"><a class="header-anchor" href="#字符串的方法" aria-hidden="true">#</a> 字符串的方法</h3><p>在Python中，我们可以通过字符串类型自带的方法对字符串进行操作和处理，对于一个字符串类型的变量，我们可以用<code>变量名.方法名()</code>的方式来调用它的方法。所谓方法其实就是跟某个类型的变量绑定的函数，后面我们讲面向对象编程的时候还会对这一概念详加说明。</p><h4 id="大小写相关操作" tabindex="-1"><a class="header-anchor" href="#大小写相关操作" aria-hidden="true">#</a> 大小写相关操作</h4><p>下面的代码演示了和字符串大小写变换相关的方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello, world!&#39;

# 使用capitalize方法获得字符串首字母大写后的字符串
print(s1.capitalize())   # Hello, world!
# 使用title方法获得字符串每个单词首字母大写后的字符串
print(s1.title())        # Hello, World!
# 使用upper方法获得字符串大写后的字符串
print(s1.upper())        # HELLO, WORLD!

s2 = &#39;GOODBYE&#39;
# 使用lower方法获得字符串小写后的字符串
print(s2.lower())        # goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找操作" tabindex="-1"><a class="header-anchor" href="#查找操作" aria-hidden="true">#</a> 查找操作</h4><p>如果想在一个字符串中从前向后查找有没有另外一个字符串，可以使用字符串的<code>find</code>或<code>index</code>方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;hello, world!&#39;

# find方法从字符串中查找另一个字符串所在的位置
# 找到了返回字符串中另一个字符串首字符的索引
print(s.find(&#39;or&#39;))        # 8
# 找不到返回-1
print(s.find(&#39;shit&#39;))      # -1
# index方法与find方法类似
# 找到了返回字符串中另一个字符串首字符的索引
print(s.index(&#39;or&#39;))       # 8
# 找不到引发异常
print(s.index(&#39;shit&#39;))     # ValueError: substring not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用<code>find</code>和<code>index</code>方法时还可以通过方法的参数来指定查找的范围，也就是查找不必从索引为<code>0</code>的位置开始。<code>find</code>和<code>index</code>方法还有逆向查找（从后向前查找）的版本，分别是<code>rfind</code>和<code>rindex</code>，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;hello good world!&#39;

# 从前向后查找字符o出现的位置(相当于第一次出现)
print(s.find(&#39;o&#39;))       # 4
# 从索引为5的位置开始查找字符o出现的位置
print(s.find(&#39;o&#39;, 5))    # 7
# 从后向前查找字符o出现的位置(相当于最后一次出现)
print(s.rfind(&#39;o&#39;))      # 12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="性质判断" tabindex="-1"><a class="header-anchor" href="#性质判断" aria-hidden="true">#</a> 性质判断</h4><p>可以通过字符串的<code>startswith</code>、<code>endswith</code>来判断字符串是否以某个字符串开头和结尾；还可以用<code>is</code>开头的方法判断字符串的特征，这些方法都返回布尔值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s1 = &#39;hello, world!&#39;

# startwith方法检查字符串是否以指定的字符串开头返回布尔值
print(s1.startswith(&#39;He&#39;))    # False
print(s1.startswith(&#39;hel&#39;))   # True
# endswith方法检查字符串是否以指定的字符串结尾返回布尔值
print(s1.endswith(&#39;!&#39;))       # True

s2 = &#39;abc123456&#39;

# isdigit方法检查字符串是否由数字构成返回布尔值
print(s2.isdigit())    # False
# isalpha方法检查字符串是否以字母构成返回布尔值
print(s2.isalpha())    # False
# isalnum方法检查字符串是否以数字和字母构成返回布尔值
print(s2.isalnum())    # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="格式化字符串" tabindex="-1"><a class="header-anchor" href="#格式化字符串" aria-hidden="true">#</a> 格式化字符串</h4><p>在Python中，字符串类型可以通过<code>center</code>、<code>ljust</code>、<code>rjust</code>方法做居中、左对齐和右对齐的处理。如果要在字符串的左侧补零，也可以使用<code>zfill</code>方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;hello, world&#39;

# center方法以宽度20将字符串居中并在两侧填充*
print(s.center(20, &#39;*&#39;))  # ****hello, world****
# rjust方法以宽度20将字符串右对齐并在左侧填充空格
print(s.rjust(20))        #         hello, world
# ljust方法以宽度20将字符串左对齐并在右侧填充~
print(s.ljust(20, &#39;~&#39;))   # hello, world~~~~~~~~
# 在字符串的左侧补零
print(&#39;33&#39;.zfill(5))      # 00033
print(&#39;-33&#39;.zfill(5))     # -0033
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们之前讲过，在用<code>print</code>函数输出字符串时，可以用下面的方式对字符串进行格式化。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = 321
b = 123
print(&#39;%d * %d = %d&#39; % (a, b, a * b))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以用字符串的方法来完成字符串的格式，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = 321
b = 123
print(&#39;{0} * {1} = {2}&#39;.format(a, b, a * b))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从Python 3.6开始，格式化字符串还有更为简洁的书写方式，就是在字符串前加上<code>f</code>来格式化字符串，在这种以<code>f</code>打头的字符串中，<code>{变量名}</code>是一个占位符，会被变量对应的值将其替换掉，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = 321
b = 123
print(f&#39;{a} * {b} = {a * b}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要进一步控制格式化语法中变量值的形式，可以参照下面的表格来进行字符串格式化操作。</p><table><thead><tr><th>变量值</th><th>占位符</th><th>格式化结果</th><th>说明</th></tr></thead><tbody><tr><td><code>3.1415926</code></td><td><code>{:.2f}</code></td><td><code>&#39;3.14&#39;</code></td><td>保留小数点后两位</td></tr><tr><td><code>3.1415926</code></td><td><code>{:+.2f}</code></td><td><code>&#39;+3.14&#39;</code></td><td>带符号保留小数点后两位</td></tr><tr><td><code>-1</code></td><td><code>{:+.2f}</code></td><td><code>&#39;-1.00&#39;</code></td><td>带符号保留小数点后两位</td></tr><tr><td><code>3.1415926</code></td><td><code>{:.0f}</code></td><td><code>&#39;3&#39;</code></td><td>不带小数</td></tr><tr><td><code>123</code></td><td><code>{:0&gt;10d}</code></td><td><code>&#39;0000000123&#39;</code></td><td>左边补<code>0</code>，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:x&lt;10d}</code></td><td><code>&#39;123xxxxxxx&#39;</code></td><td>右边补<code>x</code> ，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:&gt;10d}</code></td><td><code>&#39; 123&#39;</code></td><td>左边补空格，补够10位</td></tr><tr><td><code>123</code></td><td><code>{:&lt;10d}</code></td><td><code>&#39;123 &#39;</code></td><td>右边补空格，补够10位</td></tr><tr><td><code>123456789</code></td><td><code>{:,}</code></td><td><code>&#39;123,456,789&#39;</code></td><td>逗号分隔格式</td></tr><tr><td><code>0.123</code></td><td><code>{:.2%}</code></td><td><code>&#39;12.30%&#39;</code></td><td>百分比格式</td></tr><tr><td><code>123456789</code></td><td><code>{:.2e}</code></td><td><code>&#39;1.23e+08&#39;</code></td><td>科学计数法格式</td></tr></tbody></table><h4 id="修剪操作" tabindex="-1"><a class="header-anchor" href="#修剪操作" aria-hidden="true">#</a> 修剪操作</h4><p>字符串的<code>strip</code>方法可以帮我们获得将原字符串修剪掉左右两端空格之后的字符串。这个方法非常有实用价值，通常用来将用户输入中因为不小心键入的头尾空格去掉，<code>strip</code>方法还有<code>lstrip</code>和<code>rstrip</code>两个版本，相信从名字大家已经猜出来这两个方法是做什么用的。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;   jackfrued@126.com  \\t\\r\\n&#39;
# strip方法获得字符串修剪左右两侧空格之后的字符串
print(s.strip())    # jackfrued@126.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换操作" tabindex="-1"><a class="header-anchor" href="#替换操作" aria-hidden="true">#</a> 替换操作</h4><p>如果希望用新的内容替换字符串中指定的内容，可以使用<code>replace</code>方法，代码如下所示。<code>replace</code>方法的第一个参数是被替换的内容，第二个参数是替换后的内容，还可以通过第三个参数指定替换的次数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;hello, world&#39;
print(s.replace(&#39;o&#39;, &#39;@&#39;))     # hell@, w@rld
print(s.replace(&#39;o&#39;, &#39;@&#39;, 1))  # hell@, world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拆分-合并操作" tabindex="-1"><a class="header-anchor" href="#拆分-合并操作" aria-hidden="true">#</a> 拆分/合并操作</h4><p>可以使用字符串的<code>split</code>方法将一个字符串拆分为多个字符串（放在一个列表中），也可以使用字符串的<code>join</code>方法将列表中的多个字符串连接成一个字符串，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;I love you&#39;
words = s.split()
print(words)            # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;]
print(&#39;#&#39;.join(words))  # I#love#you
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，<code>split</code>方法默认使用空格进行拆分，我们也可以指定其他的字符来拆分字符串，而且还可以指定最大拆分次数来控制拆分的效果，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>s = &#39;I#love#you#so#much&#39;
words = s.split(&#39;#&#39;)
print(words)  # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;, &#39;so&#39;, &#39;much&#39;]
words = s.split(&#39;#&#39;, 3)
print(words)  # [&#39;I&#39;, &#39;love&#39;, &#39;you&#39;, &#39;so#much&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编码-解码操作" tabindex="-1"><a class="header-anchor" href="#编码-解码操作" aria-hidden="true">#</a> 编码/解码操作</h4><p>Python中除了字符串<code>str</code>类型外，还有一种表示二进制数据的字节串类型（<code>bytes</code>）。所谓字节串，就是<strong>由零个或多个字节组成的有限序列</strong>。通过字符串的<code>encode</code>方法，我们可以按照某种编码方式将字符串编码为字节串，我们也可以使用字节串的<code>decode</code>方法，将字节串解码为字符串，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = &#39;骆昊&#39;
b = a.encode(&#39;utf-8&#39;)
c = a.encode(&#39;gbk&#39;)
print(b, c)  # b&#39;\\xe9\\xaa\\x86\\xe6\\x98\\x8a&#39; b&#39;\\xc2\\xe6\\xea\\xbb&#39;
print(b.decode(&#39;utf-8&#39;))
print(c.decode(&#39;gbk&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果编码和解码的方式不一致，会导致乱码问题（无法再现原始的内容）或引发<code>UnicodeDecodeError</code>错误导致程序崩溃。</p><h4 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h4><p>对于字符串类型来说，还有一个常用的操作是对字符串进行匹配检查，即检查字符串是否满足某种特定的模式。例如，一个网站对用户注册信息中用户名和邮箱的检查，就属于模式匹配检查。实现模式匹配检查的工具叫做正则表达式，Python语言通过标准库中的<code>re</code>模块提供了对正则表达式的支持，我们会在后续的课程中为大家讲解这个知识点。</p><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>知道如何表示和操作字符串对程序员来说是非常重要的，因为我们需要处理文本信息，Python中操作字符串可以用拼接、切片等运算符，也可以使用字符串类型的方法。</p>`,81);function p(b,g){const s=a("ExternalLinkIcon");return l(),c("div",null,[v,u,e("p",null,[d("在Python程序中，如果我们把单个或多个字符用单引号或者双引号包围起来，就可以表示一个字符串。字符串中的字符可以是特殊符号、英文字母、中文字符、日文的平假名或片假名、希腊字母、"),e("a",m,[d("Emoji字符"),r(s)]),d("等。")]),h])}const P=i(t,[["render",p],["__file","第10课：常用数据结构之字符串.html.vue"]]);export{P as default};
