import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as a,c as l,a as s,b as n,e as t,f as e}from"./app-9976b6d0.js";const r={},o=e(`<h2 id="第05课-分支结构" tabindex="-1"><a class="header-anchor" href="#第05课-分支结构" aria-hidden="true">#</a> 第05课：分支结构</h2><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>迄今为止，我们写的Python代码都是一条一条语句顺序执行，这种代码结构通常称之为顺序结构。然而仅有顺序结构并不能解决所有的问题，比如我们设计一个游戏，游戏第一关的通关条件是玩家获得1000分，那么在完成本局游戏后，我们要根据玩家得到分数来决定究竟是进入第二关，还是告诉玩家“Game Over”，这里就会产生两个分支，而且这两个分支只有一个会被执行。类似的场景还有很多，我们将这种结构称之为“分支结构”或“选择结构”。给大家一分钟的时间，你应该可以想到至少5个以上这样的例子，赶紧试一试。</p><h3 id="if语句的使用" tabindex="-1"><a class="header-anchor" href="#if语句的使用" aria-hidden="true">#</a> if语句的使用</h3><p>在Python中，要构造分支结构可以使用<code>if</code>、<code>elif</code>和<code>else</code>关键字。所谓<strong>关键字</strong>就是有特殊含义的单词，像<code>if</code>和<code>else</code>就是专门用于构造分支结构的关键字，很显然你不能够使用它作为变量名。下面的例子中演示了如何构造一个分支结构。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
用户身份验证

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
username = input(&#39;请输入用户名: &#39;)
password = input(&#39;请输入口令: &#39;)
# 用户名是admin且密码是123456则身份验证成功否则身份验证失败
if username == &#39;admin&#39; and password == &#39;123456&#39;:
    print(&#39;身份验证成功!&#39;)
else:
    print(&#39;身份验证失败!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，不同于C++、Java等编程语言，Python中没有用花括号来构造代码块而是<strong>使用了缩进的方式来表示代码的层次结构</strong>，如果<code>if</code>条件成立的情况下需要执行多条语句，只要保持多条语句具有相同的缩进就可以了。换句话说<strong>连续的代码如果又保持了相同的缩进那么它们属于同一个代码块</strong>，相当于是一个执行的整体。<strong>缩进</strong>可以使用任意数量的空格，但<strong>通常使用4个空格</strong>，强烈建议大家<strong>不要使用制表键来缩进代码</strong>，如果你已经习惯了这么做，可以<strong>设置代码编辑工具将1个制表键自动变成4个空格</strong>，很多的代码编辑工具都支持这项功能。</p><blockquote><p><strong>提示</strong>：<code>if</code>和<code>else</code> 的最后面有一个<code>:</code>，它是用英文输入法输入的冒号；程序中输入的<code>&#39;</code>、<code>&quot;</code>、<code>=</code>、<code>(</code>、<code>)</code>等特殊字符，都是在英文输入法状态下输入的。有很多初学者经常不注意这一点，结果运行代码的时候就会遇到很多莫名其妙的错误提示。<strong>强烈建议</strong>大家在写代码的时候都<strong>打开英文输入法</strong>（注意是英文输入法而不是中文输入法的英文输入模式），这样可以避免很多不必要的麻烦。</p></blockquote><p>如果要构造出更多的分支，可以使用<code>if...elif...else...</code>结构或者嵌套的<code>if...else...</code>结构，下面的代码演示了如何利用多分支结构实现分段函数求值。</p>`,9),m={class:"katex-block"},p={class:"katex-display"},u={class:"katex"},v=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",{rowspacing:"0.36em",columnalign:"left left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mn",null,"3"),s("mi",null,"x"),s("mo",null,"−"),s("mn",null,"5"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",null,">"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",null,"x"),s("mo",null,"+"),s("mn",null,"2"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("mo",null,"≤"),s("mi",null,"x"),s("mo",null,"≤"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mn",null,"5"),s("mi",null,"x"),s("mo",null,"+"),s("mn",null,"3"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",null,"<"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},")")])])])])])])]),s("annotation",{encoding:"application/x-tex"}," f(x) = \\begin{cases} 3x - 5, & (x \\gt 1) \\\\ x + 2, & (-1 \\le x \\le 1) \\\\ 5x + 3, & (x \\lt -1) \\end{cases} ")])])],-1),h={class:"katex-html","aria-hidden":"true"},g=e('<span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span>',1),b={class:"base"},y=s("span",{class:"strut",style:{height:"4.32em","vertical-align":"-1.91em"}},null,-1),_={class:"minner"},f={class:"mopen"},x={class:"delimsizing mult"},q={class:"vlist-t vlist-t2"},w={class:"vlist-r"},P={class:"vlist",style:{height:"2.35em"}},k=s("span",{style:{top:"-2.2em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎩")])],-1),z={style:{top:"-2.192em"}},V=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1),A={style:{height:"0.316em",width:"0.8889em"}},B={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"},M=s("path",{d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"},null,-1),E=[M],H=s("span",{style:{top:"-3.15em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎨")])],-1),C={style:{top:"-4.292em"}},N=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1),L={style:{height:"0.316em",width:"0.8889em"}},D={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.316em",style:{width:"0.8889em"},viewBox:"0 0 888.89 316",preserveAspectRatio:"xMinYMin"},F=s("path",{d:"M384 0 H504 V316 H384z M384 0 H504 V316 H384z"},null,-1),I=[F],R=s("span",{style:{top:"-4.6em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎧")])],-1),Y=s("span",{class:"vlist-s"},"​",-1),G=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.85em"}},[s("span")])],-1),J=e('<span class="mord"><span class="mtable"><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">3</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">5</span><span class="mpunct">,</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">2</span><span class="mpunct">,</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mord">5</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">3</span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:1em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.41em;"><span style="top:-4.41em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span><span style="top:-2.97em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span><span style="top:-1.53em;"><span class="pstrut" style="height:3.008em;"></span><span class="mord"><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord">−</span><span class="mord">1</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.91em;"><span></span></span></span></span></span></span></span><span class="mclose nulldelimiter"></span>',2),O=e(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
分段函数求值

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
x = float(input(&#39;x = &#39;))
if x &gt; 1:
    y = 3 * x - 5
elif x &gt;= -1:
    y = x + 2
else:
    y = 5 * x + 3
print(f&#39;f({x}) = {y}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然根据实际开发的需要，分支结构是可以嵌套的，例如判断是否通关以后还要根据你获得的宝物或者道具的数量对你的表现给出等级（比如点亮两颗或三颗星星），那么我们就需要在<code>if</code>的内部构造出一个新的分支结构，同理<code>elif</code>和<code>else</code>中也可以再构造新的分支，我们称之为嵌套的分支结构，也就是说上面的代码也可以写成下面的样子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
分段函数求值

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
x = float(input(&#39;x = &#39;))
if x &gt; 1:
    y = 3 * x - 5
else:
    if x &gt;= -1:
        y = x + 2
    else:
        y = 5 * x + 3
print(f&#39;f({x}) = {y}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),S=s("strong",null,"说明：",-1),T={href:"https://zhuanlan.zhihu.com/p/111843067",target:"_blank",rel:"noopener noreferrer"},j=s("strong",null,"Python之禅",-1),K=s("strong",null,"Flat is better than nested",-1),Q=e(`<h3 id="一些例子" tabindex="-1"><a class="header-anchor" href="#一些例子" aria-hidden="true">#</a> 一些例子</h3><h4 id="例子1-英制单位英寸与公制单位厘米互换。" tabindex="-1"><a class="header-anchor" href="#例子1-英制单位英寸与公制单位厘米互换。" aria-hidden="true">#</a> 例子1：英制单位英寸与公制单位厘米互换。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
英制单位英寸和公制单位厘米互换

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
value = float(input(&#39;请输入长度: &#39;))
unit = input(&#39;请输入单位: &#39;)
if unit == &#39;in&#39; or unit == &#39;英寸&#39;:
    print(&#39;%f英寸 = %f厘米&#39; % (value, value * 2.54))
elif unit == &#39;cm&#39; or unit == &#39;厘米&#39;:
    print(&#39;%f厘米 = %f英寸&#39; % (value, value / 2.54))
else:
    print(&#39;请输入有效的单位&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-百分制成绩转换为等级制成绩。" tabindex="-1"><a class="header-anchor" href="#例子2-百分制成绩转换为等级制成绩。" aria-hidden="true">#</a> 例子2：百分制成绩转换为等级制成绩。</h4><blockquote><p><strong>要求</strong>：如果输入的成绩在90分以上（含90分）输出A；80分-90分（不含90分）输出B；70分-80分（不含80分）输出C；60分-70分（不含70分）输出D；60分以下输出E。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
百分制成绩转换为等级制成绩

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
score = float(input(&#39;请输入成绩: &#39;))
if score &gt;= 90:
    grade = &#39;A&#39;
elif score &gt;= 80:
    grade = &#39;B&#39;
elif score &gt;= 70:
    grade = &#39;C&#39;
elif score &gt;= 60:
    grade = &#39;D&#39;
else:
    grade = &#39;E&#39;
print(&#39;对应的等级是:&#39;, grade)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子3-输入三条边长-如果能构成三角形就计算周长和面积。" tabindex="-1"><a class="header-anchor" href="#例子3-输入三条边长-如果能构成三角形就计算周长和面积。" aria-hidden="true">#</a> 例子3：输入三条边长，如果能构成三角形就计算周长和面积。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
判断输入的边长能否构成三角形，如果能则计算出三角形的周长和面积

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
a = float(input(&#39;a = &#39;))
b = float(input(&#39;b = &#39;))
c = float(input(&#39;c = &#39;))
if a + b &gt; c and a + c &gt; b and b + c &gt; a:
    peri = a + b + c
    print(f&#39;周长: {peri}&#39;)
    half = peri / 2
    area = (half * (half - a) * (half - b) * (half - c)) ** 0.5
    print(f&#39;面积: {area}&#39;)
else:
    print(&#39;不能构成三角形&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),U=s("strong",null,"说明：",-1),W={href:"https://zh.wikipedia.org/zh-hans/%E6%B5%B7%E4%BC%A6%E5%85%AC%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},X=s("h3",{id:"简单的总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#简单的总结","aria-hidden":"true"},"#"),n(" 简单的总结")],-1),Z=s("p",null,[n("学会了Python中的分支结构和循环结构，我们就可以用Python程序来解决很多实际的问题了。这一节课相信已经帮助大家记住了"),s("code",null,"if"),n("、"),s("code",null,"elif"),n("、"),s("code",null,"else"),n("这几个关键字以及如何使用它们来构造分支结构，下一节课我们为大家介绍循环结构，学完这两次课你一定会发现，你能写出很多很多非常有意思的代码。继续加油！")],-1);function $(ss,ns){const i=c("ExternalLinkIcon");return a(),l("div",null,[o,s("p",m,[s("span",p,[s("span",u,[v,s("span",h,[g,s("span",b,[y,s("span",_,[s("span",f,[s("span",x,[s("span",q,[s("span",w,[s("span",P,[k,s("span",z,[V,s("span",A,[(a(),l("svg",B,E))])]),H,s("span",C,[N,s("span",L,[(a(),l("svg",D,I))])]),R]),Y]),G])])]),J])])])])])]),O,s("blockquote",null,[s("p",null,[S,n(" 大家可以自己感受和评判一下这两种写法到底是哪一种更好。在"),s("a",T,[j,t(i)]),n("中有这么一句话：“"),K,n("”，之所以提倡代码“扁平化”，是因为代码嵌套的层次如果很多，会严重的影响代码的可读性，所以使用更为扁平化的结构在很多场景下都是较好的选择。")])]),Q,s("blockquote",null,[s("p",null,[U,n(" 上面通过边长计算三角形面积的公式叫做"),s("a",W,[n("海伦公式"),t(i)]),n("。")])]),X,Z])}const ls=d(r,[["render",$],["__file","第05课：分支结构.html.vue"]]);export{ls as default};
