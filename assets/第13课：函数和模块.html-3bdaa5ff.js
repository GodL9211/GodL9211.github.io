import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as i,a as e,b as s,f as a}from"./app-9976b6d0.js";const l={},t=e("h2",{id:"第13课-函数和模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第13课-函数和模块","aria-hidden":"true"},"#"),s(" 第13课：函数和模块")],-1),o=e("p",null,"在讲解本节课的内容之前，我们先来研究一道数学题，请说出下面的方程有多少组正整数解。",-1),c=e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msub",null,[e("mi",null,"x"),e("mn",null,"1")]),e("mo",null,"+"),e("msub",null,[e("mi",null,"x"),e("mn",null,"2")]),e("mo",null,"+"),e("msub",null,[e("mi",null,"x"),e("mn",null,"3")]),e("mo",null,"+"),e("msub",null,[e("mi",null,"x"),e("mn",null,"4")]),e("mo",null,"="),e("mn",null,"8")]),e("annotation",{encoding:"application/x-tex"}," x_1 + x_2 + x_3 + x_4 = 8 ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"1")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"2")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.7333em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"3")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"x"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"4")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"8")])])])])],-1),r=e("p",null,[s("你可能已经想到了，这个问题其实等同于将"),e("code",null,"8"),s("个苹果分成四组且每组至少一个苹果有多少种方案，因此该问题还可以进一步等价于在分隔"),e("code",null,"8"),s("个苹果的"),e("code",null,"7"),s("个空隙之间插入三个隔板将苹果分成四组有多少种方案，也就是从"),e("code",null,"7"),s("个空隙选出"),e("code",null,"3"),s("个空隙放入隔板的组合数，所以答案是$ C_7^3=35 $。组合数的计算公式如下所示。")],-1),m=e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("msubsup",null,[e("mi",null,"C"),e("mi",null,"M"),e("mi",null,"N")]),e("mo",null,"="),e("mfrac",null,[e("mrow",null,[e("mi",null,"M"),e("mo",{stretchy:"false"},"!")]),e("mrow",null,[e("mi",null,"N"),e("mo",{stretchy:"false"},"!"),e("mo",{stretchy:"false"},"("),e("mi",null,"M"),e("mo",null,"−"),e("mi",null,"N"),e("mo",{stretchy:"false"},")"),e("mo",{stretchy:"false"},"!")])])]),e("annotation",{encoding:"application/x-tex"}," C_M^N = \\frac {M!} {N!(M-N)!} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1.1383em","vertical-align":"-0.247em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.8913em"}},[e("span",{style:{top:"-2.453em","margin-left":"-0.0715em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"M")])]),e("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.10903em"}},"N")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.247em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"2.3074em","vertical-align":"-0.936em"}}),e("span",{class:"mord"},[e("span",{class:"mopen nulldelimiter"}),e("span",{class:"mfrac"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"1.3714em"}},[e("span",{style:{top:"-2.314em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mclose"},"!"),e("span",{class:"mopen"},"("),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"M"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mclose"},")!")])]),e("span",{style:{top:"-3.23em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),e("span",{style:{top:"-3.677em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"M"),e("span",{class:"mclose"},"!")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.936em"}},[e("span")])])])]),e("span",{class:"mclose nulldelimiter"})])])])])])],-1),u=a(`<p>根据我们前面学习的知识，可以用循环做累乘的方式来计算阶乘，那么通过下面的Python代码我们就可以计算出组合数$ C_M^N $的值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入M和N计算C(M,N)

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
m = int(input(&#39;m = &#39;))
n = int(input(&#39;n = &#39;))
# 计算m的阶乘
fm = 1
for num in range(1, m + 1):
    fm *= num
# 计算n的阶乘
fn = 1
for num in range(1, n + 1):
    fn *= num
# 计算m-n的阶乘
fk = 1
for num in range(1, m - n + 1):
    fk *= num
# 计算C(M,N)的值
print(fm // fn // fk)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的作用" tabindex="-1"><a class="header-anchor" href="#函数的作用" aria-hidden="true">#</a> 函数的作用</h3><p>不知大家是否注意到，上面的代码中我们做了三次求阶乘，虽然<code>m</code>、<code>n</code>、<code>m - n</code>的值各不相同，但是三段代码并没有实质性的区别，属于重复代码。世界级的编程大师<em>Martin Fowler</em>先生曾经说过：“<strong>代码有很多种坏味道，重复是最坏的一种！</strong>”。要写出高质量的代码首先要解决的就是重复代码的问题。对于上面的代码来说，我们可以将计算阶乘的功能封装到一个称为“函数”的代码块中，在需要计算阶乘的地方，我们只需要“调用函数”就可以了。</p><h3 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3><p>数学上的函数通常形如<code>y = f(x)</code>或者<code>z = g(x, y)</code>这样的形式，在<code>y = f(x)</code>中，<code>f</code>是函数的名字，<code>x</code>是函数的自变量，<code>y</code>是函数的因变量；而在<code>z = g(x, y)</code>中，<code>g</code>是函数名，<code>x</code>和<code>y</code>是函数的自变量，<code>z</code>是函数的因变量。Python中的函数跟这个结构是一致的，每个函数都有自己的名字、自变量和因变量。我们通常把Python中函数的自变量称为函数的参数，而因变量称为函数的返回值。</p><p>在Python中可以使用<code>def</code>关键字来定义函数，和变量一样每个函数也应该有一个漂亮的名字，命名规则跟变量的命名规则是一致的（赶紧想一想我们之前讲过的变量的命名规则）。在函数名后面的圆括号中可以放置传递给函数的参数，就是我们刚才说到的函数的自变量，而函数执行完成后我们会通过<code>return</code>关键字来返回函数的执行结果，就是我们刚才说的函数的因变量。一个函数要执行的代码块（要做的事情）也是通过缩进的方式来表示的，跟之前分支和循环结构的代码块是一样的。大家不要忘了<code>def</code>那一行的最后面还有一个<code>:</code>，之前提醒过大家，那是在英文输入法状态下输入的冒号。</p><p>我们可以通过函数对上面的代码进行重构。**所谓重构，是在不影响代码执行结果的前提下对代码的结构进行调整。**重构之后的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
输入M和N计算C(M,N)

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;


# 定义函数：def是定义函数的关键字、fac是函数名，num是参数（自变量）
def fac(num):
    &quot;&quot;&quot;求阶乘&quot;&quot;&quot;
    result = 1
    for n in range(1, num + 1):
        result *= n
    # 返回num的阶乘（因变量）
    return result


m = int(input(&#39;m = &#39;))
n = int(input(&#39;n = &#39;))
# 当需要计算阶乘的时候不用再写重复的代码而是直接调用函数fac
# 调用函数的语法是在函数名后面跟上圆括号并传入参数
print(fac(m) // fac(n) // fac(m - n))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：事实上，Python标准库的<code>math</code>模块中有一个名为<code>factorial</code>的函数已经实现了求阶乘的功能，我们可以直接使用该函数来计算阶乘。<strong>将来我们使用的函数，要么是自定义的函数，要么是Python标准库或者三方库中提供的函数</strong>。</p></blockquote><h3 id="函数的参数" tabindex="-1"><a class="header-anchor" href="#函数的参数" aria-hidden="true">#</a> 函数的参数</h3><h4 id="参数的默认值" tabindex="-1"><a class="header-anchor" href="#参数的默认值" aria-hidden="true">#</a> 参数的默认值</h4><p>如果函数中没有<code>return</code>语句，那么函数默认返回代表空值的<code>None</code>。另外，在定义函数时，函数也可以没有自变量，但是函数名后面的圆括号是必须有的。Python中还允许函数的参数拥有默认值，我们可以把之前讲过的一个例子“CRAPS赌博游戏”中摇色子获得点数的功能封装成函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
参数的默认值

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;
from random import randint


# 定义摇色子的函数，n表示色子的个数，默认值为2
def roll_dice(n=2):
    &quot;&quot;&quot;摇色子返回总的点数&quot;&quot;&quot;
    total = 0
    for _ in range(n):
        total += randint(1, 6)
    return total


# 如果没有指定参数，那么n使用默认值2，表示摇两颗色子
print(roll_dice())
# 传入参数3，变量n被赋值为3，表示摇三颗色子获得点数
print(roll_dice(3))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来看一个更为简单的例子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def add(a=0, b=0, c=0):
    &quot;&quot;&quot;三个数相加求和&quot;&quot;&quot;
    return a + b + c


# 调用add函数，没有传入参数，那么a、b、c都使用默认值0
print(add())         # 0
# 调用add函数，传入一个参数，那么该参数赋值给变量a, 变量b和c使用默认值0
print(add(1))        # 1
# 调用add函数，传入两个参数，1和2分别赋值给变量a和b，变量c使用默认值0
print(add(1, 2))     # 3
# 调用add函数，传入三个参数，分别赋值给a、b、c三个变量
print(add(1, 2, 3))  # 6
# 传递参数时可以不按照设定的顺序进行传递，但是要用“参数名=参数值”的形式
print(add(c=50, a=100, b=200))    # 350
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：带默认值的参数必须放在不带默认值的参数之后，否则将产生<code>SyntaxError</code>错误，错误消息是：<code>non-default argument follows default argument</code>，翻译成中文的意思是“没有默认值的参数放在了带默认值的参数后面”。</p></blockquote><h4 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h4><p>接下来，我们还可以实现一个对任意多个数求和的<code>add</code>函数，因为Python语言中的函数可以通过星号表达式语法来支持可变参数。所谓可变参数指的是在调用函数时，可以向函数传入<code>0</code>个或任意多个参数。将来我们以团队协作的方式开发商业项目时，很有可能要设计函数给其他人使用，但有的时候我们并不知道函数的调用者会向该函数传入多少个参数，这个时候可变参数就可以派上用场。下面的代码演示了用可变参数实现对任意多个数求和的<code>add</code>函数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&quot;&quot;&quot;
可变参数

Version: 0.1
Author: 骆昊
&quot;&quot;&quot;


# 用星号表达式来表示args可以接收0个或任意多个参数
def add(*args):
    total = 0
    # 可变参数可以放在for循环中取出每个参数的值
    for val in args:
        if type(val) in (int, float):
            total += val
    return total


# 在调用add函数时可以传入0个或任意多个参数
print(add())
print(add(1))
print(add(1, 2))
print(add(1, 2, 3))
print(add(1, 3, 5, 7, 9))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用模块管理函数" tabindex="-1"><a class="header-anchor" href="#用模块管理函数" aria-hidden="true">#</a> 用模块管理函数</h3><p>不管用什么样的编程语言来写代码，给变量、函数起名字都是一个让人头疼的问题，因为我们会遇到<strong>命名冲突</strong>这种尴尬的情况。最简单的场景就是在同一个<code>.py</code>文件中定义了两个同名的函数，如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def foo():
    print(&#39;hello, world!&#39;)


def foo():
    print(&#39;goodbye, world!&#39;)

    
foo()    # 大家猜猜调用foo函数会输出什么
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然上面的这种情况我们很容易就能避免，但是如果项目是团队协作多人开发的时候，团队中可能有多个程序员都定义了名为<code>foo</code>的函数，这种情况下怎么解决命名冲突呢？答案其实很简单，Python中每个文件就代表了一个模块（module），我们在不同的模块中可以有同名的函数，在使用函数的时候我们通过<code>import</code>关键字导入指定的模块再使用<strong>完全限定名</strong>的调用方式就可以区分到底要使用的是哪个模块中的<code>foo</code>函数，代码如下所示。</p><p><code>module1.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def foo():
    print(&#39;hello, world!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>module2.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def foo():
    print(&#39;goodbye, world!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import module1
import module2

# 用“模块名.函数名”的方式（完全限定名）调用函数，
module1.foo()    # hello, world!
module2.foo()    # goodbye, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在导入模块时，还可以使用<code>as</code>关键字对模块进行别名，这样我们可以使用更为简短的完全限定名。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import module1 as m1
import module2 as m2

m1.foo()    # hello, world!
m2.foo()    # goodbye, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码我们导入了定义函数的模块，我们也可以使用<code>from...import...</code>语法从模块中直接导入需要使用的函数，代码如下所示。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from module1 import foo

foo()    # hello, world!

from module2 import foo

foo()    # goodbye, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果我们如果从两个不同的模块中导入了同名的函数，后导入的函数会覆盖掉先前的导入，就像下面的代码中，调用<code>foo</code>会输出<code>hello, world!</code>，因为我们先导入了<code>module2</code>的<code>foo</code>，后导入了<code>module1</code>的<code>foo</code> 。如果两个<code>from...import...</code>反过来写，就是另外一番光景了。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from module2 import foo
from module1 import foo

foo()    # hello, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想在上面的代码中同时使用来自两个模块中的<code>foo</code>函数也是有办法的，大家可能已经猜到了，还是用<code>as</code>关键字对导入的函数进行别名，代码如下所示。</p><p><code>test.py</code></p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from module1 import foo as f1
from module2 import foo as f2

f1()    # hello, world!
f2()    # goodbye, world!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标准库中的模块和函数" tabindex="-1"><a class="header-anchor" href="#标准库中的模块和函数" aria-hidden="true">#</a> 标准库中的模块和函数</h3><p>Python标准库中提供了大量的模块和函数来简化我们的开发工作，我们之前用过的<code>random</code>模块就为我们提供了生成随机数和进行随机抽样的函数；而<code>time</code>模块则提供了和时间操作相关的函数；上面求阶乘的函数在Python标准库中的<code>math</code>模块中已经有了，实际开发中并不需要我们自己编写，而<code>math</code>模块中还包括了计算正弦、余弦、指数、对数等一系列的数学函数。随着我们进一步的学习Python编程知识，我们还会用到更多的模块和函数。</p><p>Python标准库中还有一类函数是不需要<code>import</code>就能够直接使用的，我们将其称之为内置函数，这些内置函数都是很有用也是最常用的，下面的表格列出了一部分的内置函数。</p><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td><code>abs</code></td><td>返回一个数的绝对值，例如：<code>abs(-1.3)</code>会返回<code>1.3</code>。</td></tr><tr><td><code>bin</code></td><td>把一个整数转换成以<code>&#39;0b&#39;</code>开头的二进制字符串，例如：<code>bin(123)</code>会返回<code>&#39;0b1111011&#39;</code>。</td></tr><tr><td><code>chr</code></td><td>将Unicode编码转换成对应的字符，例如：<code>chr(8364)</code>会返回<code>&#39;€&#39;</code>。</td></tr><tr><td><code>hex</code></td><td>将一个整数转换成以<code>&#39;0x&#39;</code>开头的十六进制字符串，例如：<code>hex(123)</code>会返回<code>&#39;0x7b&#39;</code>。</td></tr><tr><td><code>input</code></td><td>从输入中读取一行，返回读到的字符串。</td></tr><tr><td><code>len</code></td><td>获取字符串、列表等的长度。</td></tr><tr><td><code>max</code></td><td>返回多个参数或一个可迭代对象中的最大值，例如：<code>max(12, 95, 37)</code>会返回<code>95</code>。</td></tr><tr><td><code>min</code></td><td>返回多个参数或一个可迭代对象中的最小值，例如：<code>min(12, 95, 37)</code>会返回<code>12</code>。</td></tr><tr><td><code>oct</code></td><td>把一个整数转换成以<code>&#39;0o&#39;</code>开头的八进制字符串，例如：<code>oct(123)</code>会返回<code>&#39;0o173&#39;</code>。</td></tr><tr><td><code>open</code></td><td>打开一个文件并返回文件对象。</td></tr><tr><td><code>ord</code></td><td>将字符转换成对应的Unicode编码，例如：<code>ord(&#39;€&#39;)</code>会返回<code>8364</code>。</td></tr><tr><td><code>pow</code></td><td>求幂运算，例如：<code>pow(2, 3)</code>会返回<code>8</code>；<code>pow(2, 0.5)</code>会返回<code>1.4142135623730951</code>。</td></tr><tr><td><code>print</code></td><td>打印输出。</td></tr><tr><td><code>range</code></td><td>构造一个范围序列，例如：<code>range(100)</code>会产生<code>0</code>到<code>99</code>的整数序列。</td></tr><tr><td><code>round</code></td><td>按照指定的精度对数值进行四舍五入，例如：<code>round(1.23456, 4)</code>会返回<code>1.2346</code>。</td></tr><tr><td><code>sum</code></td><td>对一个序列中的项从左到右进行求和运算，例如：<code>sum(range(1, 101))</code>会返回<code>5050</code>。</td></tr><tr><td><code>type</code></td><td>返回对象的类型，例如：<code>type(10)</code>会返回<code>int</code>；而<code> type(&#39;hello&#39;)</code>会返回<code>str</code>。</td></tr></tbody></table><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p><strong>函数是对功能相对独立且会重复使用的代码的封装</strong>。学会使用定义和使用函数，就能够写出更为优质的代码。当然，Python语言的标准库中已经为我们提供了大量的模块和常用的函数，用好这些模块和函数就能够用更少的代码做更多的事情；如果这些模块和函数不能满足我们的要求，我们就需要自定义函数，然后用模块的概念来管理这些自定义函数。</p>`,48),v=[t,o,c,r,m,u];function p(h,b){return d(),i("div",null,v)}const f=n(l,[["render",p],["__file","第13课：函数和模块.html.vue"]]);export{f as default};
