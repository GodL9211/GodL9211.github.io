import{_ as p}from"./haige_wechat_public-ccb5a382.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,a as n,b as s,e,f as t}from"./app-d263494b.js";const u={},r=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),d=n("p",null,[s("本文将带你学习装饰器在 Python 中的工作原理，如果在函数和类中使用装饰器，如何利用装饰器避免代码重复（"),n("code",null,"DRY 原则，Don’t Repeat Yourself"),s(" ）。")],-1),k=n("h2",{id:"装饰器是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#装饰器是什么","aria-hidden":"true"},"#"),s(" 装饰器是什么")],-1),v=n("p",null,[s("装饰器一直以来都是 Python 中很有用、很经典的一个 feature，在工程中的应用也十分广泛，比如日志、缓存等等的任务都会用到。然而，在平常工作生活中，我发现不少人，尤其是初学者，常常因为其相对复杂的表示，对装饰器望而生畏，认为它“"),n("code",null,"too fancy to learn"),s("”，实际并不如此。")],-1),m=n("code",null,"@staticmethod",-1),b=n("code",null,"@classmethod",-1),g={href:"https://click.palletsprojects.com/en/7.x/",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"@click.option(...)",-1),y=t(`<p>装饰器在 Python中是一个非常强大和有用的工具，因为它允许程序员修改函数或类的行为。装饰器允许我们包装另一个函数，<code>以扩展包装函数的行为</code>，而无需修改基础函数定义。这也被称为元编程，因为程序本身在程序运行时会尝试修改自身的另一部分。</p><p>装饰器是<code>语法糖</code>： 在代码中利用更简洁流畅的语法实现更为复杂的功能。</p><blockquote><p>万能公式：注意理解语法糖的等价形式</p></blockquote><p>我们知道，Python中一切皆对象。这意味着<code>Python中的函数可以用作参数或作为参数传递</code>。一等函数的属性：</p><ul><li>函数是 Object 类型的实例。</li><li>可以将函数存储在变量中。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Got a message: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
send_message <span class="token operator">=</span> func
send_message<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Got a message<span class="token punctuation">:</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以将该函数作为参数传递给另一个函数。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">def</span> <span class="token function">get_message</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Got a message: &#39;</span> <span class="token operator">+</span> message


<span class="token keyword">def</span> <span class="token function">root_call</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
root_call<span class="token punctuation">(</span>get_message<span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Got a message<span class="token punctuation">:</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>我们可以在函数里定义函数，也就是函数的嵌套。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get_message</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Got a message: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> get_message<span class="token punctuation">(</span>message<span class="token punctuation">)</span>

func<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Got a message<span class="token punctuation">:</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数的返回值也可以是函数对象（闭包）。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func_closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get_message</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Got a message: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> get_message

send_message <span class="token operator">=</span> func_closure<span class="token punctuation">(</span><span class="token punctuation">)</span>
send_message<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Got a message<span class="token punctuation">:</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以将它们存储在数据结构中，例如哈希表，列表等。</li></ul><h2 id="装饰器语法糖" tabindex="-1"><a class="header-anchor" href="#装饰器语法糖" aria-hidden="true">#</a> 装饰器语法糖</h2><p>如果你接触<code>Python</code>有一段时间了的话，想必你对<code>@</code>符号一定不陌生了，没错<code>@</code>符号就是装饰器的语法糖。它放在一个函数开始定义的地方，它就像一顶帽子一样戴在这个函数的头上。和这个函数绑定在一起。在我们调用这个函数的时候，第一件事并不是执行这个函数，而是将这个函数做为参数传入它头顶上这顶帽子，这顶帽子我们称之为<code>装饰函数</code>或<code>装饰器</code>。</p><p>装饰器的使用方法很固定：</p><ul><li>先定义一个装饰函数（帽子）（也可以用类、偏函数实现）</li><li>再定义你的业务函数、或者类（人）</li><li>最后把这顶帽子戴在这个人头上</li></ul><h2 id="函数装饰器" tabindex="-1"><a class="header-anchor" href="#函数装饰器" aria-hidden="true">#</a> 函数装饰器</h2><p><code>decorator必须是一个“可被调用（callable）的对象或属性描述符（Descriptors）</code>。</p><p>~理解描述符是深入理解 Python 的关键，因为它们是许多功能的基础，包括函数、方法、属性、类方法、静态方法和对超类的引用。这个暂不做过多赘述！~</p><blockquote><p><code>输入是函数，输出也是函数~</code></p></blockquote><h3 id="装饰不带参数的函数" tabindex="-1"><a class="header-anchor" href="#装饰不带参数的函数" aria-hidden="true">#</a> 装饰不带参数的函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 这里可以用下面的@语法糖实现，更优雅</span>
greet <span class="token operator">=</span> my_decorator<span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
greet<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更优雅的语法糖<code>@</code>表示，大大提高函数的重复利用和程序的可读性：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

greet<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出</span>
wrapper of decorator
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰带一个参数的函数" tabindex="-1"><a class="header-anchor" href="#装饰带一个参数的函数" aria-hidden="true">#</a> 装饰带一个参数的函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>


greet<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span>message<span class="token punctuation">)</span>

    <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>

<span class="token comment"># @语法糖等价于下面这个</span>
greet <span class="token operator">=</span> my_decorator<span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
greet<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出</span>
wrapper of decorator
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰带不定长参数的函数" tabindex="-1"><a class="header-anchor" href="#装饰带不定长参数的函数" aria-hidden="true">#</a> 装饰带不定长参数的函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 不定长参数*args,**kwargs</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>


greet<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">greet2</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> num<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> num<span class="token punctuation">)</span>


greet2<span class="token punctuation">(</span><span class="token string">&quot;hello world2&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰器带参数" tabindex="-1"><a class="header-anchor" href="#装饰器带参数" aria-hidden="true">#</a> 装饰器带参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">repeat</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
                func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper
    <span class="token keyword">return</span> my_decorator


<span class="token decorator annotation punctuation">@repeat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>

<span class="token comment"># @语法糖等价于：</span>
<span class="token comment"># my_decorator = repeat(4)</span>
<span class="token comment"># greet = my_decorator(greet)</span>

greet<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出：</span>
wrapper of decorator
hello world
wrapper of decorator
hello world
wrapper of decorator
hello world
wrapper of decorator
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原函数还是原函数吗" tabindex="-1"><a class="header-anchor" href="#原函数还是原函数吗" aria-hidden="true">#</a> 原函数还是原函数吗？</h3><p>我们试着打印出 greet() 函数的一些元信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>greet.__name__
<span class="token comment">## 输出</span>
<span class="token string">&#39;wrapper&#39;</span>

help<span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
Help on <span class="token keyword">function</span> wrapper <span class="token keyword">in</span> module __main__:

wrapper<span class="token punctuation">(</span>*args, **kwargs<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决这个问题，我们通常使用内置的装饰器<code>@functools.wrap</code>，它会帮助保留原函数的元信息（也就是将原函数的元信息，拷贝到对应的装饰器函数里）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">my_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;wrapper of decorator&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
    
<span class="token decorator annotation punctuation">@my_decorator</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>

greet<span class="token punctuation">.</span>__name__

<span class="token comment"># 输出</span>
<span class="token string">&#39;greet&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器" aria-hidden="true">#</a> 类装饰器</h2><p><code>定义一个类装饰器，装饰函数，默认调用__call__方法</code></p><h3 id="类装饰器-本身无参数" tabindex="-1"><a class="header-anchor" href="#类装饰器-本身无参数" aria-hidden="true">#</a> 类装饰器-本身无参数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Count</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func
        self<span class="token punctuation">.</span>num_calls <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>num_calls <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num of calls is: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>num_calls<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@Count</span>
<span class="token keyword">def</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 等价于example = Count(example) </span>

example<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类装饰器本身无参数时等价于<code>example = Count(example)</code></p></blockquote><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出</span>
num of calls is: <span class="token number">1</span>
hello world

example<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
num of calls is: <span class="token number">2</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何定义带参数的类装饰器" tabindex="-1"><a class="header-anchor" href="#如何定义带参数的类装饰器" aria-hidden="true">#</a> 如何定义带参数的类装饰器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Count</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 类装饰器参数</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> a
        self<span class="token punctuation">.</span>num_calls <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 被装饰函数</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>a<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>num_calls <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num of calls is: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>num_calls<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@Count</span><span class="token punctuation">(</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始调用example函数..............&quot;</span><span class="token punctuation">)</span>

example<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Count</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>a <span class="token operator">=</span> a
        self<span class="token punctuation">.</span>num_calls <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>a<span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>num_calls <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;num of calls is: {}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>num_calls<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># @语法糖等价形式</span>
example <span class="token operator">=</span> Count<span class="token punctuation">(</span><span class="token string">&quot;aaaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始调用example函数..............&quot;</span><span class="token punctuation">)</span>

example<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>aaaa
开始调用example函数<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
aaaa
num of calls is: <span class="token number">1</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="描述符与装饰器" tabindex="-1"><a class="header-anchor" href="#描述符与装饰器" aria-hidden="true">#</a> 描述符与装饰器</h3><p>还有一类装饰器比较特殊，比如基于python描述符实现的<code>property</code>。</p>`,59),f=n("code",null,"__get__()",-1),h=n("code",null,"__set__()",-1),_=n("code",null,"__delete__()",-1),q=n("br",null,null,-1),x={href:"https://docs.python.org/3/reference/datamodel.html#descriptors",target:"_blank",rel:"noopener noreferrer"},j=n("br",null,null,-1),C={href:"https://docs.python.org/3/howto/descriptor.html#descriptorhowto",target:"_blank",rel:"noopener noreferrer"},P=t(`<p><code>关于描述符，这里不赘述</code>。基于描述符，我们也可以实现自定义的property:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">cached_property</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> func<span class="token punctuation">.</span>__name__
        self<span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">__get__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> owner<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> self
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>name <span class="token keyword">not</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>cache<span class="token punctuation">:</span>
            value <span class="token operator">=</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>self<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>cache<span class="token punctuation">[</span>self<span class="token punctuation">.</span>name<span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">__set__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&quot;can&#39;t set attribute&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@cached_property</span>
    <span class="token comment"># @property</span>
    <span class="token keyword">def</span> <span class="token function">value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Calculating value...&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">42</span>


obj <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment"># 输出: Calculating value...   42</span>

<span class="token comment"># 使用缓存的值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>value<span class="token punctuation">)</span>  <span class="token comment"># 输出: 42</span>

<span class="token comment"># 尝试修改属性值（抛出TypeError）</span>
obj<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;invalid&quot;</span>  <span class="token comment"># 抛出 TypeError: can&#39;t set attribute</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰类的装饰器" tabindex="-1"><a class="header-anchor" href="#装饰类的装饰器" aria-hidden="true">#</a> 装饰类的装饰器</h2><p>在Python中，装饰类的装饰器是一种特殊类型的函数，它用于修改或增强类的行为。装饰器可以在不修改原始类定义的情况下，通过将类传递给装饰器函数来对其进行装饰。</p><p>通常情况下，装饰类的装饰器是一个接受类作为参数的函数，并返回一个新的类或修改原始类的函数。这个装饰器函数可以在类定义之前使用<code>@</code>符号应用到类上。</p><blockquote><p><code>输入是类，输出也是类~</code></p></blockquote><h3 id="如何定义装饰类的装饰器" tabindex="-1"><a class="header-anchor" href="#如何定义装饰类的装饰器" aria-hidden="true">#</a> 如何定义装饰类的装饰器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">timer_decorator</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">TimerClass</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">__getattribute__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
            start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
            result <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__getattribute__<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
            end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
            execution_time <span class="token operator">=</span> end_time <span class="token operator">-</span> start_time
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Method &#39;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">&#39; executed in </span><span class="token interpolation"><span class="token punctuation">{</span>execution_time<span class="token punctuation">}</span></span><span class="token string"> seconds.&quot;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> result

    <span class="token keyword">return</span> TimerClass


<span class="token decorator annotation punctuation">@timer_decorator</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">my_method</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Executing my_method&quot;</span><span class="token punctuation">)</span>


obj <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>my_method<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Method <span class="token string">&#39;my_method&#39;</span> executed <span class="token keyword">in</span> <span class="token number">2</span>.1457672119140625e-06 seconds.
Executing my_method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例中，<code>timer_decorator</code>装饰器接收一个类作为参数，并返回一个继承自原始类的新类<code>TimerClass</code>。<code>TimerClass</code>中重写了<code>__getattribute__</code>方法，在调用类的方法时，会计算方法的执行时间并进行打印。</p><h3 id="巧用functools-partial" tabindex="-1"><a class="header-anchor" href="#巧用functools-partial" aria-hidden="true">#</a> 巧用functools.partial</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> functools


<span class="token keyword">class</span> <span class="token class-name">DelayFunc</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>  duration<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>duration <span class="token operator">=</span> duration
        self<span class="token punctuation">.</span>func <span class="token operator">=</span> func

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Wait for </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>duration<span class="token punctuation">}</span></span><span class="token string"> seconds...&#39;</span></span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>self<span class="token punctuation">.</span>duration<span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">eager_call</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Call without delay&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">delay</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;装饰器：推迟某个函数的执行。同时提供 .eager_call 方法立即执行
    &quot;&quot;&quot;</span>
    <span class="token comment"># 此处为了避免定义额外函数，直接使用 functools.partial 帮助构造</span>
    <span class="token comment"># DelayFunc 实例</span>
    <span class="token keyword">return</span> functools<span class="token punctuation">.</span>partial<span class="token punctuation">(</span>DelayFunc<span class="token punctuation">,</span> duration<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@delay</span><span class="token punctuation">(</span>duration<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b


<span class="token comment"># 这次调用将会延迟 2 秒</span>
add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># 这次调用将会立即执行</span>
add<span class="token punctuation">.</span>eager_call<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="django示例" tabindex="-1"><a class="header-anchor" href="#django示例" aria-hidden="true">#</a> django示例</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>decorators <span class="token keyword">import</span> login_required

<span class="token keyword">def</span> <span class="token function">require_login</span><span class="token punctuation">(</span>view_class<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用@login_required装饰器对dispatch方法进行装饰</span>
    view_class<span class="token punctuation">.</span>dispatch <span class="token operator">=</span> login_required<span class="token punctuation">(</span>view_class<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>
    <span class="token keyword">return</span> view_class

<span class="token decorator annotation punctuation">@require_login</span>
<span class="token keyword">class</span> <span class="token class-name">MyView</span><span class="token punctuation">(</span>View<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">get</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 处理GET请求的逻辑</span>
        <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;GET request&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 处理POST请求的逻辑</span>
        <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;POST request&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>等价于<code>MyView = require_login（MyView）</code></p></blockquote><h3 id="objprint示例" tabindex="-1"><a class="header-anchor" href="#objprint示例" aria-hidden="true">#</a> objprint示例</h3><p><code>一个有意思的python三方模块，使用装饰器打印object</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> objprint <span class="token keyword">import</span> add_objprint

<span class="token keyword">class</span> <span class="token class-name">Position</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>x <span class="token operator">=</span> x
        self<span class="token punctuation">.</span>y <span class="token operator">=</span> y

<span class="token decorator annotation punctuation">@add_objprint</span>
<span class="token keyword">class</span> <span class="token class-name">Player</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span>
        self<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
        self<span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;axe&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;armor&quot;</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>coins <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;gold&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;silver&quot;</span><span class="token punctuation">:</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token string">&quot;bronze&quot;</span><span class="token punctuation">:</span> <span class="token number">57</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>position <span class="token operator">=</span> Position<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># This will print the same thing as above</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Player<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>Player
  .name <span class="token operator">=</span> <span class="token string">&#39;Alice&#39;</span>,
  .age <span class="token operator">=</span> <span class="token number">18</span>,
  .items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;axe&#39;</span>, <span class="token string">&#39;armor&#39;</span><span class="token punctuation">]</span>,
  .coins <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;gold&#39;</span><span class="token builtin class-name">:</span> <span class="token number">1</span>, <span class="token string">&#39;silver&#39;</span><span class="token builtin class-name">:</span> <span class="token number">33</span>, <span class="token string">&#39;bronze&#39;</span><span class="token builtin class-name">:</span> <span class="token number">57</span><span class="token punctuation">}</span>,
  .position <span class="token operator">=</span> <span class="token operator">&lt;</span>Position
    .x <span class="token operator">=</span> <span class="token number">3</span>,
    .y <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token operator">&gt;</span>
<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-wrapt-模块编写更扁平的装饰器" tabindex="-1"><a class="header-anchor" href="#使用-wrapt-模块编写更扁平的装饰器" aria-hidden="true">#</a> 使用 wrapt 模块编写更扁平的装饰器</h2><p>在写装饰器的过程中，你有没有碰到过什么不爽的事情？这里列举两个可能使你特别难受的点：</p><blockquote><ol><li><code>实现带参数的装饰器时，层层嵌套的函数代码特别难写、难读</code></li><li><code>因为函数和类方法的不同，为前者写的装饰器经常没法直接套用在后者上</code></li></ol></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random


<span class="token keyword">def</span> <span class="token function">provide_number</span><span class="token punctuation">(</span>min_num<span class="token punctuation">,</span> max_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;装饰器：随机生成一个在 [min_num, max_num] 范围的整数，追加为函数的第一个位置参数
    &quot;&quot;&quot;</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">decorated</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            num <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>min_num<span class="token punctuation">,</span> max_num<span class="token punctuation">)</span>
            <span class="token comment"># 将 num 作为第一个参数追加后调用函数</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> decorated
    <span class="token keyword">return</span> wrapper
    


<span class="token decorator annotation punctuation">@provide_number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">print_random_number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment"># 输出 1-100 的随机整数</span>
<span class="token comment"># OUTPUT: 72</span>
print_random_number<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@provide_number</code> 装饰器功能看上去很不错，但它有着我在前面提到的两个问题：<strong><code>嵌套层级深、无法在类方法上使用</code></strong>。如果直接用它去装饰类方法，会出现下面的情况：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@provide_number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">print_random_number</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token comment"># OUTPUT: &lt;__main__.Foo object at 0x104047278&gt;</span>
Foo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>print_random_number<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Foo</code> 类实例中的 <code>print_random_number</code> 方法将会输出类实例 <code>self</code> ，而不是我们期望的随机数 <code>num</code>。</p><p>之所以会出现这个结果，是因为类方法 <em>（method）</em> 和函数 <em>（function）</em> 二者在工作机制上有着细微不同。如果要修复这个问题，<code>provider_number</code> 装饰器在修改类方法的位置参数时，必须聪明的跳过藏在 <code>*args</code> 里面的类实例 <code>self</code> 变量，才能正确的将 <code>num</code> 作为第一个参数注入。</p>`,29),T={href:"https://pypi.org/project/wrapt/",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"wrapt",-1),L=n("code",null,"provide_number",-1),F=n("code",null,"嵌套层级深",-1),O=n("code",null,"无法通用",-1),G=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> random

<span class="token keyword">import</span> wrapt


<span class="token keyword">def</span> <span class="token function">provide_number</span><span class="token punctuation">(</span>min_num<span class="token punctuation">,</span> max_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@wrapt<span class="token punctuation">.</span>decorator</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>wrapped<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 参数含义：</span>
        <span class="token comment">#</span>
        <span class="token comment"># - wrapped：被装饰的函数或类方法</span>
        <span class="token comment"># - instance：</span>
        <span class="token comment">#   - 如果被装饰者为普通类方法，该值为类实例</span>
        <span class="token comment">#   - 如果被装饰者为 classmethod 类方法，该值为类</span>
        <span class="token comment">#   - 如果被装饰者为类/函数/静态方法，该值为 None</span>
        <span class="token comment">#</span>
        <span class="token comment"># - args：调用时的位置参数（注意没有 * 符号）</span>
        <span class="token comment"># - kwargs：调用时的关键字参数（注意没有 ** 符号）</span>
        <span class="token comment">#</span>
        num <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>min_num<span class="token punctuation">,</span> max_num<span class="token punctuation">)</span>
        <span class="token comment"># 无需关注 wrapped 是类方法或普通函数，直接在头部追加参数</span>
        args <span class="token operator">=</span> <span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token punctuation">)</span> <span class="token operator">+</span> args
        <span class="token keyword">return</span> wrapped<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@provide_number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">print_random_number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Foo</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@provide_number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">print_random_number</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


<span class="token comment"># 输出 1-100 的随机整数</span>
print_random_number<span class="token punctuation">(</span><span class="token punctuation">)</span>

Foo<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>print_random_number<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用wrapt写一个不带参数的装饰器" tabindex="-1"><a class="header-anchor" href="#使用wrapt写一个不带参数的装饰器" aria-hidden="true">#</a> 使用wrapt写一个不带参数的装饰器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> wrapt

<span class="token decorator annotation punctuation">@wrapt<span class="token punctuation">.</span>decorator</span>
<span class="token keyword">def</span> <span class="token function">pass_through</span><span class="token punctuation">(</span>wrapped<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> wrapped<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@pass_through</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用wrapt写一个带参数的装饰器" tabindex="-1"><a class="header-anchor" href="#使用wrapt写一个带参数的装饰器" aria-hidden="true">#</a> 使用wrapt写一个带参数的装饰器</h3><p>如果您希望实现一个接受参数的装饰器，请将装饰器的定义包装在函数闭包中。应用装饰器时提供给外部函数的任何参数都将在调用包装函数时可供内部包装器使用。</p><blockquote><p>函数签名是固定的，必须是(wrapped, instance, args, kwargs)</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> wrapt

<span class="token keyword">def</span> <span class="token function">with_arguments</span><span class="token punctuation">(</span>myarg1<span class="token punctuation">,</span> myarg2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@wrapt<span class="token punctuation">.</span>decorator</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>wrapped<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> wrapped<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@with_arguments</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用wrapt的装饰器嵌套" tabindex="-1"><a class="header-anchor" href="#使用wrapt的装饰器嵌套" aria-hidden="true">#</a> 使用wrapt的装饰器嵌套</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> wrapt


<span class="token decorator annotation punctuation">@wrapt<span class="token punctuation">.</span>decorator</span>
<span class="token keyword">def</span> <span class="token function">uppercase</span><span class="token punctuation">(</span>wrapped<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    result <span class="token operator">=</span> wrapped<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> result<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">repeat</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@wrapt<span class="token punctuation">.</span>decorator</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span>wrapped<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>wrapped<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span>

    <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@uppercase</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;Hello, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">!&quot;</span></span>


<span class="token keyword">print</span><span class="token punctuation">(</span>greet<span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Output: [&#39;HELLO, ALICE!&#39;, &#39;HELLO, ALICE!&#39;, &#39;HELLO, ALICE!&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>wrapt</code> 模块编写的装饰器，相比原来拥有下面这些优势：</p><ul><li>嵌套层级少：使用 <code>@wrapt.decorator</code> 可以将两层嵌套减少为一层</li><li>更简单：处理位置与关键字参数时，可以忽略类实例等特殊情况</li><li>更灵活：针对 <code>instance</code> 值进行条件判断后，更容易让装饰器变得通用</li></ul><h2 id="装饰器的嵌套" tabindex="-1"><a class="header-anchor" href="#装饰器的嵌套" aria-hidden="true">#</a> 装饰器的嵌套</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">my_decorator1</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;execute decorator1&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">my_decorator2</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;execute decorator2&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token decorator annotation punctuation">@my_decorator1</span>
<span class="token decorator annotation punctuation">@my_decorator2</span>
<span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>


greet<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的执行顺序从里到外，所以上面的语句也等效于下面这行代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>greet <span class="token operator">=</span> my_decorator1<span class="token punctuation">(</span>my_decorator2<span class="token punctuation">(</span>greet<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 或者</span>
<span class="token comment"># greet = my_decorator2(greet)</span>
<span class="token comment"># greet = my_decorator1(greet)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出</span>
execute decorator1
execute decorator2
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多装饰器的执行顺序" tabindex="-1"><a class="header-anchor" href="#多装饰器的执行顺序" aria-hidden="true">#</a> 多装饰器的执行顺序</h2><p>说到Python装饰器的执行顺序，有很多半吊子张口就来：</p><blockquote><p>靠近函数名的装饰器先执行，远离函数名的装饰器后执行。</p></blockquote><p><code>这种说法是不准确的</code>。</p><h3 id="举个栗子" tabindex="-1"><a class="header-anchor" href="#举个栗子" aria-hidden="true">#</a> 举个栗子</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator_outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是外层装饰器&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器，函数运行之前&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器，函数运行之后&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器闭包初始化完毕&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token keyword">def</span> <span class="token function">decorator_inner</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是内层装饰器&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器，函数运行之前&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器，函数运行之后&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器闭包初始化完毕&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper  

<span class="token decorator annotation punctuation">@decorator_outer</span>
<span class="token decorator annotation punctuation">@decorator_inner</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是函数本身&quot;</span><span class="token punctuation">)</span>

func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，你可以先花几秒钟思考下这段代码的输出结果是什么呢？也许会出乎一些人的预料！！</p><p><code>结果揭晓</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>我是内层装饰器
<span class="token number">1</span>
<span class="token number">2</span>
内层装饰器闭包初始化完毕
<span class="token number">3</span>
<span class="token number">4</span>
我是外层装饰器
a
b
外层装饰器闭包初始化完毕
c
d
<span class="token comment"># ==================================================</span>
外层装饰器，函数运行之前
内层装饰器，函数运行之前
我是函数本身
内层装饰器，函数运行之后
外层装饰器，函数运行之后
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实，只要我们套用万能替代公式，是不难得出正确的答案的。直接上代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">decorator_outer</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是外层装饰器&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器，函数运行之前&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器，函数运行之后&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;外层装饰器闭包初始化完毕&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">decorator_inner</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是内层装饰器&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器，函数运行之前&#39;</span><span class="token punctuation">)</span>
        func<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器，函数运行之后&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;内层装饰器闭包初始化完毕&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token comment"># @decorator_outer</span>
<span class="token comment"># @decorator_inner</span>
<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我是函数本身&quot;</span><span class="token punctuation">)</span>


<span class="token comment">#</span>
<span class="token comment"># func()</span>

func <span class="token operator">=</span> decorator_inner<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;----------------------------------------&quot;</span><span class="token punctuation">)</span>
func <span class="token operator">=</span> decorator_outer<span class="token punctuation">(</span>func<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==================================================&quot;</span><span class="token punctuation">)</span>
func<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>装饰器里面的代码中，<code>wrapper</code>闭包外面的代码确实是内层装饰器先执行，外层装饰器后执行。这部分是在带上<code>@</code>帽子之后就执行了，而并非是在调用的时候。这个从等价形式也可以得出结论，因为带帽的时候其实已经做过某些调用了，这个你可以细品。</p></blockquote><p>重点是闭包<code>wrapper</code>内部的代码的执行顺序。通过等价公式不难得出，最后执行的<code>func</code>已经不是原来的<code>func</code>函数，而是<code>decorator_outer(func)</code>。</p><ul><li>所以执行<code>func()</code>其实是执行了<code>decorator_outer(func)()</code>，因此先打印了<code>外层装饰器，函数运行之前</code>;</li><li>然后执行<code>decorator_outer</code>装饰器<code>wrapper</code>闭包里的<code>func</code>函数，而<code>decorator_outer</code>装饰器<code>wrapper</code>闭包里的<code>func</code>函数此时是<code>func = decorator_inner(func)</code>;</li><li>所以紧接着打印了<code>内层装饰器，函数运行之前</code>—&gt;<code>我是函数本身</code>—&gt;<code>内层装饰器，函数运行之后</code>—&gt;<code>外层装饰器，函数运行之后</code>。</li></ul><blockquote><p>所以，当我们说多个装饰器堆叠的时候，哪个装饰器的代码先运行时，不能一概而论说内层装饰器的代码先运行。</p></blockquote><p>闭包<code>wrapper</code>内部的代码执行逻辑：</p><ol><li>外层装饰器先执行，但只执行了一部分，执行到调用<code>func()</code></li><li>内层装饰器开始执行</li><li>内层装饰器执行完</li><li>外层装饰器执行完</li></ol><blockquote><p>重点：需要搞清楚<code>函数和函数调用</code>的区别，注意：函数是可以当成返回值的</p></blockquote><p>在实际应用的场景中，当我们采用上面的方式写了两个装饰方法比如先验证有没有登录<code>@login_required</code>，再验证权限够不够时<code>@permision_allowed</code>时，我们采用下面的顺序来装饰函数:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">login_required</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;检测是否有特定的Cookies&#39;</span><span class="token punctuation">)</span>
        is_login <span class="token operator">=</span> <span class="token boolean">False</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> is_login<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;没有登录&quot;</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper


<span class="token keyword">def</span> <span class="token function">permision_allowed</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;检测是否有特定的数据集权限&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;首先从请求参数中获取dataset_id&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;然后从登录session中获取用户id，注意，如果没有登录，是没有session的&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;判断用户是否有这个dataset的权限&#39;</span><span class="token punctuation">)</span>
        has_data_set_permission <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> has_data_set_permission<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">:</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;没有数据集权限&quot;</span><span class="token punctuation">}</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@login_required</span>
<span class="token decorator annotation punctuation">@permision_allowed</span>
<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment"># Do something</span>
  <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器应用场景示例" tabindex="-1"><a class="header-anchor" href="#装饰器应用场景示例" aria-hidden="true">#</a> 装饰器应用场景示例</h2><h3 id="缓存装饰器" tabindex="-1"><a class="header-anchor" href="#缓存装饰器" aria-hidden="true">#</a> 缓存装饰器</h3><p>下面的缓存装饰器可以帮助你避免重复计算，以提高代码的性能。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">cache_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 创建一个字典来存储缓存的结果</span>
    cache <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 定义内部包装函数，用于接收任意数量的位置参数</span>

    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 检查当前参数是否在缓存中</span>
        <span class="token keyword">if</span> args <span class="token keyword">in</span> cache<span class="token punctuation">:</span>
            <span class="token comment"># 如果在缓存中，则从缓存中获取结果并打印提示信息</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;从缓存中获取</span><span class="token interpolation"><span class="token punctuation">{</span>args<span class="token punctuation">}</span></span><span class="token string">的结果&quot;</span></span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span>
        <span class="token comment"># 如果不在缓存中，则调用原始函数计算结果</span>
        result <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">)</span>
        <span class="token comment"># 将计算结果存储到缓存中，并打印提示信息</span>
        cache<span class="token punctuation">[</span>args<span class="token punctuation">]</span> <span class="token operator">=</span> result
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;计算</span><span class="token interpolation"><span class="token punctuation">{</span>args<span class="token punctuation">}</span></span><span class="token string">的结果并将其存入缓存&quot;</span></span><span class="token punctuation">)</span>
        <span class="token comment"># 返回计算结果</span>
        <span class="token keyword">return</span> result

    <span class="token comment"># 返回包装函数</span>
    <span class="token keyword">return</span> wrapper


<span class="token comment"># 使用缓存装饰器修饰fibonacci函数</span>
<span class="token decorator annotation punctuation">@cache_decorator</span>
<span class="token keyword">def</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> fibonacci<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> fibonacci<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>fibonacci<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;*****************&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fibonacci<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入合法性检查" tabindex="-1"><a class="header-anchor" href="#输入合法性检查" aria-hidden="true">#</a> 输入合法性检查</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 定义类型检查装饰器</span>
<span class="token keyword">def</span> <span class="token function">type_check_decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 定义内部包装函数，用于接收任意数量的位置参数和关键字参数</span>

    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 遍历位置参数</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> arg <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果参数不是字符串类型，抛出TypeError异常</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;第</span><span class="token interpolation"><span class="token punctuation">{</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">个参数值</span><span class="token interpolation"><span class="token punctuation">{</span>arg<span class="token punctuation">}</span></span><span class="token string">必须是str类型&quot;</span></span><span class="token punctuation">)</span>
        <span class="token comment"># 遍历关键字参数</span>
        <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token keyword">in</span> kwargs<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果关键字参数的值不是字符串类型，抛出TypeError异常</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;关键字参数</span><span class="token interpolation"><span class="token punctuation">{</span>key<span class="token punctuation">}</span></span><span class="token string">必须是str类型&quot;</span></span><span class="token punctuation">)</span>
        <span class="token comment"># 参数检查通过后，调用原始函数并返回结果</span>
        <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>

    <span class="token comment"># 返回包装函数</span>
    <span class="token keyword">return</span> wrapper


<span class="token comment"># 使用类型检查装饰器修饰concat_strings函数</span>
<span class="token decorator annotation punctuation">@type_check_decorator</span>
<span class="token keyword">def</span> <span class="token function">concat_strings</span><span class="token punctuation">(</span><span class="token operator">*</span>strings<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sep<span class="token punctuation">.</span>join<span class="token punctuation">(</span>strings<span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>concat_strings<span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录" aria-hidden="true">#</a> 日志记录</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">log_execution_time</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        start <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
        res <span class="token operator">=</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        end <span class="token operator">=</span> time<span class="token punctuation">.</span>perf_counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{} took {} ms&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
    <span class="token keyword">return</span> wrapper
    
<span class="token decorator annotation punctuation">@log_execution_time</span>
<span class="token keyword">def</span> <span class="token function">calculate_similarity</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="身份认证" tabindex="-1"><a class="header-anchor" href="#身份认证" aria-hidden="true">#</a> 身份认证</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> functools

<span class="token keyword">def</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        request <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> check_user_logged_in<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># 如果用户处于登录状态</span>
            <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span> <span class="token comment"># 执行函数post_comment() </span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">&#39;Authentication failed&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> wrapper
    
<span class="token decorator annotation punctuation">@authenticate</span>
<span class="token keyword">def</span> <span class="token function">post_comment</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    instances <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> instances<span class="token punctuation">:</span>
            instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>
    
    <span class="token keyword">return</span> wrapper

<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">Logger</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>log_file <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;log.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>log_file<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>message<span class="token punctuation">}</span></span><span class="token string">\\n&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，<code>singleton</code> 装饰器用于创建单例类。装饰器包装了 <code>Logger</code> 类，确保只有一个 <code>Logger</code> 的实例存在。</p><h3 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h3><p>电商领域有个功能明显可以使用“策略”模式，即根据客户的属性或订单中的商品计算折扣。<br> 假如一个网店制定了下述折扣规则。</p><ul><li>有<code>1000或以上积分</code>的顾客，每个订单享<code>5%</code> 折扣。</li><li>同一订单中，单个商品的数量达到<code>20个或以上</code>，享<code>10%</code>折扣。</li><li>订单中的不同商品达到<code>10个或以上</code>，享<code>7%</code>折扣。</li></ul><p>简单起见，我们<code>假定一个订单一次只能享用一个折扣</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> namedtuple

promos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>


<span class="token keyword">def</span> <span class="token function">promotion</span><span class="token punctuation">(</span>promo_func<span class="token punctuation">)</span><span class="token punctuation">:</span>
    promos<span class="token punctuation">.</span>append<span class="token punctuation">(</span>promo_func<span class="token punctuation">)</span>
    <span class="token keyword">return</span> promo_func


<span class="token decorator annotation punctuation">@promotion</span>
<span class="token keyword">def</span> <span class="token function">fidelity</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;为积分为1000或以上的顾客提供5%折扣&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> order<span class="token punctuation">.</span>total<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">.05</span> <span class="token keyword">if</span> order<span class="token punctuation">.</span>customer<span class="token punctuation">.</span>fidelity <span class="token operator">&gt;=</span> <span class="token number">1000</span> <span class="token keyword">else</span> <span class="token number">0</span>


<span class="token decorator annotation punctuation">@promotion</span>
<span class="token keyword">def</span> <span class="token function">bulk_item</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;单个商品为20个或以上时提供10%折扣&quot;&quot;&quot;</span>
    discount <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> order<span class="token punctuation">.</span>cart<span class="token punctuation">:</span>
        <span class="token keyword">if</span> item<span class="token punctuation">.</span>quantity <span class="token operator">&gt;=</span> <span class="token number">20</span><span class="token punctuation">:</span>
            discount <span class="token operator">+=</span> item<span class="token punctuation">.</span>total<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">.1</span>
    <span class="token keyword">return</span> discount


<span class="token decorator annotation punctuation">@promotion</span>
<span class="token keyword">def</span> <span class="token function">large_order</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;订单中的不同商品达到10个或以上时提供7%折扣&quot;&quot;&quot;</span>
    distinct_items <span class="token operator">=</span> <span class="token punctuation">{</span>item<span class="token punctuation">.</span>product <span class="token keyword">for</span> item <span class="token keyword">in</span> order<span class="token punctuation">.</span>cart<span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>distinct_items<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> order<span class="token punctuation">.</span>total<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">.07</span>
    <span class="token keyword">return</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">best_promo</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;选择可用的最佳折扣&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>promo<span class="token punctuation">(</span>order<span class="token punctuation">)</span> <span class="token keyword">for</span> promo <span class="token keyword">in</span> promos<span class="token punctuation">)</span>


Customer <span class="token operator">=</span> namedtuple<span class="token punctuation">(</span><span class="token string">&#39;Customer&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name fidelity&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">LineItem</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> product<span class="token punctuation">,</span> quantity<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>product <span class="token operator">=</span> product
        self<span class="token punctuation">.</span>quantity <span class="token operator">=</span> quantity
        self<span class="token punctuation">.</span>price <span class="token operator">=</span> price

    <span class="token keyword">def</span> <span class="token function">total</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>price <span class="token operator">*</span> self<span class="token punctuation">.</span>quantity


<span class="token keyword">class</span> <span class="token class-name">Order</span><span class="token punctuation">:</span>  <span class="token comment"># 上下文</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> customer<span class="token punctuation">,</span> cart<span class="token punctuation">,</span> promotions<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>__total <span class="token operator">=</span> <span class="token boolean">None</span>
        self<span class="token punctuation">.</span>customer <span class="token operator">=</span> customer
        self<span class="token punctuation">.</span>cart <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>cart<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>promotion <span class="token operator">=</span> promotions

    <span class="token keyword">def</span> <span class="token function">total</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token string">&#39;__total&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>__total <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>total<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">for</span> item <span class="token keyword">in</span> self<span class="token punctuation">.</span>cart<span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__total


joe <span class="token operator">=</span> Customer<span class="token punctuation">(</span><span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

joe_cart <span class="token operator">=</span> <span class="token punctuation">[</span>LineItem<span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> LineItem<span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> LineItem<span class="token punctuation">(</span><span class="token string">&#39;watermellon&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

joe_order <span class="token operator">=</span> Order<span class="token punctuation">(</span>joe<span class="token punctuation">,</span> joe_cart<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>best_promo<span class="token punctuation">(</span>joe_order<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>所谓的装饰器，其实就是通过装饰器函数，来修改原函数的一些功能，使得原函数不需要修改。</p><p>一切<code>callable</code>的对象都可以被用来实现装饰器。</p><p><code>wrapt</code>模块很有用，用它可以帮助我们用更简单的代码写出复杂装饰器。</p><p>装饰器的应用场景其实很常见，我们常见的判断用户是否登录(token校验的判断)、用户是否有访问权限很多都是使用装饰器来判断的，在DRF(django restframework)中的<code>@api_view</code>、<code>@permission_classes</code>。</p><p>合理使用装饰器，往往能极大地提高程序的可读性以及运行效率。</p><p>每当你对装饰器感到迷茫的时候，可以将装饰器用其等价形式理解。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,63),N={href:"https://mp.weixin.qq.com/s/PXu-68puFUpxzJRqUHJwBw",target:"_blank",rel:"noopener noreferrer"},D=n("br",null,null,-1),H={href:"https://segmentfault.com/a/1190000007837364",target:"_blank",rel:"noopener noreferrer"},I=n("br",null,null,-1),M={href:"https://github.com/piglei/one-python-craftsman/blob/master/zh_CN/8-tips-on-decorators.md",target:"_blank",rel:"noopener noreferrer"},U=n("blockquote",null,[n("p",null,[s("喜欢这篇文章的话，就点个关注吧，或者关注一下我的公众号『"),n("strong",null,"海哥python"),s("』也可以，会持续分享高质量Python文章，以及其它内容。"),n("br"),n("img",{src:p,alt:"海哥python 官方公众号",loading:"lazy"})])],-1);function V(z,A){const a=c("ExternalLinkIcon");return i(),l("div",null,[r,d,k,v,n("p",null,[s("你可能已经和装饰器打过不少交道了。在做面向对象编程时，我们就经常会用到 "),m,s(" 和 "),b,s(" 两个内置装饰器。此外，如果你接触过 "),n("a",g,[s("click"),e(a)]),s(" 模块，就更不会对装饰器感到陌生。click 最为人所称道的参数定义接口 "),w,s(" 就是利用装饰器实现的。")]),y,n("blockquote",null,[n("p",null,[s("在Python中，属性描述符可以用作装饰器，是因为描述符对象可以通过实现 "),f,s("、"),h,s(" 和 "),_,s(" 方法来拦截对属性的访问和操作。"),q,n("a",x,[s("https://docs.python.org/3/reference/datamodel.html#descriptors"),e(a)]),j,n("a",C,[s("https://docs.python.org/3/howto/descriptor.html#descriptorhowto"),e(a)])])]),P,n("p",null,[s("这时，就应该是 "),n("a",T,[s("wrapt"),e(a)]),s(" 模块闪亮登场的时候了。"),E,s(" 模块是一个专门帮助你编写装饰器的工具库。利用它，我们可以非常方便的改造 "),L,s(" 装饰器，完美解决“"),F,s("”和“"),O,s("”两个问题，")]),G,n("blockquote",null,[n("p",null,[n("a",N,[s("https://mp.weixin.qq.com/s/PXu-68puFUpxzJRqUHJwBw"),e(a)]),D,n("a",H,[s("https://segmentfault.com/a/1190000007837364"),e(a)]),I,n("a",M,[s("https://github.com/piglei/one-python-craftsman/blob/master/zh_CN/8-tips-on-decorators.md"),e(a)])])]),U])}const S=o(u,[["render",V],["__file","Python装饰器详解.html.vue"]]);export{S as default};
