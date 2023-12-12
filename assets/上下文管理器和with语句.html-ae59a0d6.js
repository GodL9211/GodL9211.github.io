import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as i,a as n,b as s,e,f as c}from"./app-d1a619f2.js";const l={},u=c(`<p>嗨，大家好，我是暴走的海鸽。</p><p>今天，我将向大家介绍上下文管理器和with语句的使用方法。</p><blockquote><p>以下<strong>上下文管理器</strong>、<strong>with</strong>未作特殊说明时均为同步原语。</p></blockquote><h2 id="什么是上下文管理器和with" tabindex="-1"><a class="header-anchor" href="#什么是上下文管理器和with" aria-hidden="true">#</a> 什么是上下文管理器和with</h2><p>有人认为Python中的with语句是一个晦涩难懂的特性，但是只要你了解了其背后的原理，就不会感觉到神秘了。with语句实际上是非常有用的特性，有助于编写清晰易读的Python代码。</p><p>而上下文管理器存在的目的便是管理with语句，就像迭代器的存在是为了管理for语句一样。</p><p>那么，究竟 with 语句要怎么用，与之相关的上下文管理器（context manager）是什么，它们之间又有着怎样的联系呢？</p><p>在任何一门编程语言中，<code>文件的输入输出</code>、<code>数据库的连接断开</code>等，都是很常见的资源管理操作。但资源都是有限的，在写程序时，我们必须保证这些资源在使用过后得到释放，不然就容易造成资源泄露，轻者使得系统处理缓慢，重则会使系统崩溃。</p><p>在 Python 中，上下文管理器（Context Manager）是一种资源管理的机制，用于在使用资源（如文件、网络连接、数据库连接等）之前分配资源，然后在使用完毕后释放资源。<code>with</code> 语句是用来简化上下文管理器的使用的语法糖，使代码更加清晰和简洁。</p><h3 id="一个典型的案例便是内置的open-函数" tabindex="-1"><a class="header-anchor" href="#一个典型的案例便是内置的open-函数" aria-hidden="true">#</a> 一个典型的案例便是内置的open()函数</h3><p>使用try/finally结构保证文件的最终关闭：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>f <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，这一套固定模板较为冗长，还容易漏写，代码可读性也较差，因此我们一般更倾向于<code>with</code>语句。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span> 
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="另外一个典型的例子-是-python-中的-threading-lock-类。" tabindex="-1"><a class="header-anchor" href="#另外一个典型的例子-是-python-中的-threading-lock-类。" aria-hidden="true">#</a> 另外一个典型的例子，是 Python 中的 threading.lock 类。</h3><p>比如我想要获取一个锁，执行相应的操作，完成后再释放，那么代码就可以写成下面这样：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>some_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
some_lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    some_lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而对应的 with 语句，同样非常简洁：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>some_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> somelock<span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="什么场景建议考虑使用上下文管理器和with语句" tabindex="-1"><a class="header-anchor" href="#什么场景建议考虑使用上下文管理器和with语句" aria-hidden="true">#</a> 什么场景建议考虑使用上下文管理器和with语句</h2><p>从前面的例子中可以看出，上下文管理器的常见用途是自动打开和关闭文件以及锁的申请和释放。</p><p>不过，你还可以在许多其他情况下使用上下文管理器，综合来看有以下几种场景：</p><p><strong>1) 打开-关闭</strong></p><ul><li>如果想自动打开和关闭资源，可以使用上下文管理器。</li><li>例如，可以使用上下文管理器打开一个套接字并关闭它。</li></ul><p><strong>2) 锁定-释放</strong></p><ul><li>上下文管理器可以帮助你更有效地管理对象的锁。它们允许你获取锁并自动释放锁。</li></ul><p><strong>3) 启动-停止</strong></p><ul><li>上下文管理器还能帮助您处理需要启动和停止阶段的场景。</li><li>例如，您可以使用上下文管理器启动计时器并自动停止。</li></ul><p><strong>4) 更改 - 重置</strong></p><ul><li><p>上下文管理器可以处理更改和重置场景。</p></li><li><p>例如，您的应用程序需要连接多个数据源。它有一个默认连接。<br> 要连接到另一个数据源：</p><ul><li>首先，使用上下文管理器将默认连接更改为新连接。</li><li>第二，使用新连接。</li><li>第三，完成新连接的操作后，将其重置回默认连接。</li></ul></li></ul><p><strong>5) 进入 - 退出</strong></p><ul><li>上下文管理器可以处理进入和退出的场景。</li></ul><h2 id="常见的上下文管理器和with语句使用" tabindex="-1"><a class="header-anchor" href="#常见的上下文管理器和with语句使用" aria-hidden="true">#</a> 常见的上下文管理器和with语句使用</h2><p>为了更充分地掌握和运用这一特性，一个较为有效的途径是深入研究该特性在各个广泛应用的场景中的实际运用。</p><p>上下文管理器和 <code>with</code> 语句在 Python 中的使用非常广泛，涵盖了许多不同的场景。以下是一些常见的上下文管理器和 <code>with</code> 语句的使用场景：</p><p>1.<strong>文件操作</strong>：<code>open()</code> 函数返回的文件对象就是一个上下文管理器，它负责文件的打开和关闭。<code>with open(&quot;file.txt&quot;, &quot;r&quot;) as file:</code> 就是一个典型的使用案例。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    content <span class="token operator">=</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<strong>数据库连接</strong>：在数据库操作中，使用 <code>with</code> 语句可以确保在使用完数据库连接后正确地关闭连接，防止资源泄漏。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sqlite3

<span class="token keyword">with</span> sqlite3<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token string">&quot;mydatabase.db&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> connection<span class="token punctuation">:</span>
    cursor <span class="token operator">=</span> connection<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM mytable&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.<strong>网络连接</strong>：类似于数据库连接，确保在网络连接使用完毕后关闭连接是良好的实践。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests

url <span class="token operator">=</span> <span class="token string">&#39;https://www.example.com&#39;</span>

<span class="token comment"># 使用Session对象作为上下文管理器</span>
<span class="token keyword">with</span> requests<span class="token punctuation">.</span>Session<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
    <span class="token comment"># 发起GET请求</span>
    response <span class="token operator">=</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

    <span class="token comment"># 在此处处理响应</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>

<span class="token comment"># 在退出上下文时，底层连接会被关闭</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.<strong>线程锁</strong>：<code>threading</code> 模块中的 <code>Lock</code> 对象可以作为上下文管理器，确保在使用完锁之后正确释放。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">with</span> lock<span class="token punctuation">:</span>
<span class="token comment"># 执行需要线程同步的代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.<strong>文件锁</strong>：在多进程环境下，可以使用文件锁确保多个进程对同一文件的互斥访问。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> fcntl

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    fcntl<span class="token punctuation">.</span>flock<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> fcntl<span class="token punctuation">.</span>LOCK_EX<span class="token punctuation">)</span>
    <span class="token comment"># 执行需要文件锁的代码</span>
    fcntl<span class="token punctuation">.</span>flock<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">,</span> fcntl<span class="token punctuation">.</span>LOCK_UN<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.<strong>时间测量</strong>：使用上下文管理器来测量代码块的执行时间。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">TimerContextManager</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> traceback<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        elapsed_time <span class="token operator">=</span> self<span class="token punctuation">.</span>end_time <span class="token operator">-</span> self<span class="token punctuation">.</span>start_time
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Code executed in </span><span class="token interpolation"><span class="token punctuation">{</span>elapsed_time<span class="token punctuation">}</span></span><span class="token string"> seconds&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">with</span> TimerContextManager<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token comment"># 执行需要测量时间的代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.<strong>测试资源管理</strong>：在测试中，可以使用上下文管理器确保在测试开始和结束时正确地分配和释放资源。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TestContextManager</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 在测试开始时分配资源</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> traceback<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 在测试结束时释放资源</span>


<span class="token keyword">with</span> TestContextManager<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> test<span class="token punctuation">:</span>
<span class="token comment"># 执行测试代码</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些只是很小的一部分示例，上下文管理器和 <code>with</code> 语句的使用可以根据具体的应用场景而变化。总体而言，它们是一种确保资源正确管理的强大方式，提高了代码的可读性和可维护性。</p><h2 id="上下文管理器和with的本质" tabindex="-1"><a class="header-anchor" href="#上下文管理器和with的本质" aria-hidden="true">#</a> 上下文管理器和with的本质</h2><p>上面我们了解了一些常见的上下文管理器和with的用法，有内置的上下文管理器和自定义的上下文管理器。可能你已经从中看出点端倪了，不过不妨让我们深入的了解下这一特性的本质。</p><h3 id="上下文管理器的实现" tabindex="-1"><a class="header-anchor" href="#上下文管理器的实现" aria-hidden="true">#</a> 上下文管理器的实现</h3><p>一个上下文管理器必须实现两个方法：<code>__enter__</code> 和 <code>__exit__</code>。</p><ul><li><code>__enter__(self)</code>：在进入 <code>with</code> 语句块时被调用，返回资源对象，该对象会被赋值给 <code>as</code> 后面的变量。</li><li><code>__exit__(self, exc_type, exc_value, traceback)</code>：在离开 <code>with</code> 语句块时被调用，用于资源的释放。如果 <code>with</code> 语句块中发生异常，异常的信息（异常类型（如ZeroDivisionError）、异常示例（如错误消息）、traceback对象）将作为参数传递给 <code>__exit__</code> 方法。如果<code>__exit__</code>方法返回None或者True之外的值，with块中任何异常都会向上冒泡。</li></ul><blockquote><p>try/finally语句中调用sys.exec_info()，得到的便是<code>__exit__</code>接收的三个参数。因此可以在<code>__exit__</code>中对异常进行处理。</p></blockquote><p>我们来看一个发生异常的例子，观察 <code>__exit__</code> 方法拿到的异常信息是怎样的：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">TestContext</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;__enter__&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;exc_type:&quot;</span><span class="token punctuation">,</span> exc_type<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;exc_value:&quot;</span><span class="token punctuation">,</span> exc_value<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;exc_tb:&quot;</span><span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;__exit__&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">with</span> TestContext<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">:</span>
    <span class="token comment"># 这里会发生异常</span>
    a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;t: %s&#39;</span> <span class="token operator">%</span> t<span class="token punctuation">)</span>
    
<span class="token triple-quoted-string string">&quot;&quot;&quot;
__enter__
exc_type: &lt;class &#39;ZeroDivisionError&#39;&gt;
exc_value: division by zero
exc_tb: &lt;traceback object at 0x7fa1d2adfe40&gt;
__exit__
Traceback (most recent call last):
  File &quot;/mnt/d/jinzhuan/rss/tpl_hf.py&quot;, line 15, in &lt;module&gt;
    a = 1 / 0
ZeroDivisionError: division by zero
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以在<code>__exit__</code>处理异常，这也是很多框架中用于消除大量<code>try/exception/finally</code>的手段之一，比如django中就有这样处理数据库操作异常时的代码，见文末源码。</p></blockquote><h3 id="with-语句" tabindex="-1"><a class="header-anchor" href="#with-语句" aria-hidden="true">#</a> <code>with</code> 语句</h3><p>直接调用<code>__enter__</code>和<code>__exit__</code>方法是使用上下文管理器的方式之一，但是<code>with</code> 语句是一种更加简洁的处理上下文管理器的方式。它的语法如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> expression <span class="token keyword">as</span> variable<span class="token punctuation">:</span>
    <span class="token comment"># code block</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>expression</code> 返回一个上下文管理器对象。</li><li><code>variable</code> 是一个变量，用于存储 <code>expression</code> 返回的上下文管理器对象。</li></ul><p>在 <code>with</code> 语句块中，上下文管理器的 <code>__enter__</code> 方法被调用，返回的对象赋值给 <code>variable</code>。当退出 <code>with</code> 语句块时，无论是正常退出还是因为异常，上下文管理器的 <code>__exit__</code> 方法都会被调用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">TimerContextManager</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>end_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        elapsed_time <span class="token operator">=</span> self<span class="token punctuation">.</span>end_time <span class="token operator">-</span> self<span class="token punctuation">.</span>start_time
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Elapsed Time: </span><span class="token interpolation"><span class="token punctuation">{</span>elapsed_time<span class="token punctuation">}</span></span><span class="token string"> seconds&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">with</span> TimerContextManager<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> timer<span class="token punctuation">:</span>
    <span class="token comment"># 在这里写你想要测量执行时间的代码</span>
    <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

<span class="token comment"># 在这里 timer 对象不再可用，执行时间已经在 __exit__ 方法中输出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>with</code> 语句可以确保资源的正确分配和释放，使代码更加简洁和可读。上下文管理器在文件操作、数据库连接、网络连接等场景中经常被使用。在 Python 标准库中，有一些内置的上下文管理器，比如 <code>open()</code> 函数返回的文件对象就是一个上下文管理器。</p><p><strong>python 3.10后支持带括号的上下文管理器</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span><span class="token punctuation">(</span>  
   <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;text1.txt&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f1<span class="token punctuation">,</span>  
   <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;text2.txt&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f2  
<span class="token punctuation">)</span><span class="token punctuation">:</span>  
  <span class="token keyword">print</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f2<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步上下文管理器和async-with的本质" tabindex="-1"><a class="header-anchor" href="#异步上下文管理器和async-with的本质" aria-hidden="true">#</a> <strong>异步上下文管理器</strong>和<strong>async with</strong>的本质</h2><h3 id="异步上下文管理器" tabindex="-1"><a class="header-anchor" href="#异步上下文管理器" aria-hidden="true">#</a> 异步上下文管理器</h3><p>要创建异步上下文管理器，您需要定义<code>.__aenter__()</code>和<code>.__aexit__()</code>方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aiohttp
<span class="token keyword">import</span> asyncio


<span class="token keyword">class</span> <span class="token class-name">AsyncSession</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_url <span class="token operator">=</span> url

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">__aenter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>session <span class="token operator">=</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span>
        response <span class="token operator">=</span> <span class="token keyword">await</span> self<span class="token punctuation">.</span>session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_url<span class="token punctuation">)</span>
        <span class="token keyword">return</span> response

    <span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">__aexit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">await</span> self<span class="token punctuation">.</span>session<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> AsyncSession<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">as</span> response<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">: status -&gt; </span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>status<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        html <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">: type -&gt; </span><span class="token interpolation"><span class="token punctuation">{</span>html<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span>
        check<span class="token punctuation">(</span><span class="token string">&quot;https://realpython.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        check<span class="token punctuation">(</span><span class="token string">&quot;https://pycoders.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># https://realpython.com: status -&gt; 200</span>
<span class="token comment"># https://pycoders.com: status -&gt; 200</span>
<span class="token comment"># https://pycoders.com: type -&gt; &lt;!doctype html&gt;</span>
<span class="token comment"># https://realpython.com: type -&gt; &lt;!doctype html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用asyc-with语句" tabindex="-1"><a class="header-anchor" href="#使用asyc-with语句" aria-hidden="true">#</a> 使用asyc with语句</h3><p><code>async with</code>是<code>with</code>语句的异步版本，可以使用它来编写依赖于异步代码的上下文管理器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aiohttp
<span class="token keyword">import</span> asyncio


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">as</span> response<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">: status -&gt; </span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>status<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            html <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">: type -&gt; </span><span class="token interpolation"><span class="token punctuation">{</span>html<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>gather<span class="token punctuation">(</span>
        check<span class="token punctuation">(</span><span class="token string">&quot;https://realpython.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        check<span class="token punctuation">(</span><span class="token string">&quot;https://pycoders.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>


asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment"># https://realpython.com: status -&gt; 200</span>
<span class="token comment"># https://realpython.com: type -&gt; &lt;!doctype html</span>
<span class="token comment"># https://pycoders.com: status -&gt; 200</span>
<span class="token comment"># https://pycoders.com: type -&gt; &lt;!doctype html&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contextlib包简化上下文管理器的实现和管理" tabindex="-1"><a class="header-anchor" href="#contextlib包简化上下文管理器的实现和管理" aria-hidden="true">#</a> <strong>contextlib包</strong>简化上下文管理器的实现和管理</h2><p><code>contextlib</code> 模块提供了一些实用工具，用于简化创建和操作上下文管理器。以下是一些常用的 <code>contextlib</code> 工具：</p><p>1.<strong><code>contextlib.contextmanager</code>：</strong></p><p><strong>介绍：</strong> 这是一个装饰器，用于将一个生成器函数转化为上下文管理器。生成器的 <code>yield</code> 语句之前的代码块将在 <code>__enter__</code> 方法中执行，而 <code>yield</code> 语句之后的代码块将在 <code>__exit__</code> 方法中执行。</p><p><strong>此装饰器本质：</strong> 我们先来看下这个装饰器的定义和帮助文档，其实讲的还是非常清楚的，巧妙的利用了<code>生成器</code>特性实现了上下文管理器。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">contextmanager</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token triple-quoted-string string">&quot;&quot;&quot;@contextmanager decorator.

  Typical usage:

      @contextmanager
      def some_generator(&lt;arguments&gt;):
          &lt;setup&gt;
          try:
              yield &lt;value&gt;
          finally:
              &lt;cleanup&gt;

  This makes this:

      with some_generator(&lt;arguments&gt;) as &lt;variable&gt;:
          &lt;body&gt;

  equivalent to this:

      &lt;setup&gt;
      try:
          &lt;variable&gt; = &lt;value&gt;
          &lt;body&gt;
      finally:
          &lt;cleanup&gt;
  &quot;&quot;&quot;</span>
  <span class="token decorator annotation punctuation">@wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>
  <span class="token keyword">def</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwds<span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> _GeneratorContextManager<span class="token punctuation">(</span>func<span class="token punctuation">,</span> args<span class="token punctuation">,</span> kwds<span class="token punctuation">)</span>
  <span class="token keyword">return</span> helper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class _GeneratorContextManager(_GeneratorContextManagerBase,
                             AbstractContextManager,
                             ContextDecorator):
   &quot;&quot;&quot;Helper for @contextmanager decorator.&quot;&quot;&quot;

   def _recreate_cm(self):
       # _GCM instances are one-shot context managers, so the
       # CM must be recreated each time a decorated function is
       # called
       return self.__class__(self.func, self.args, self.kwds)

   def __enter__(self):
       # do not keep args and kwds alive unnecessarily
       # they are only needed for recreation, which is not possible anymore
       del self.args, self.kwds, self.func
       try:
           return next(self.gen)
       except StopIteration:
           raise RuntimeError(&quot;generator didn&#39;t yield&quot;) from None

   def __exit__(self, type, value, traceback):
       if type is None:
           try:
               next(self.gen)
           except StopIteration:
               return False
           else:
               raise RuntimeError(&quot;generator didn&#39;t stop&quot;)
       else:
           if value is None:
               # Need to force instantiation so we can reliably
               # tell if we get the same exception back
               value = type()
           try:
               self.gen.throw(type, value, traceback)
           except StopIteration as exc:
               # Suppress StopIteration *unless* it&#39;s the same exception that
               # was passed to throw().  This prevents a StopIteration
               # raised inside the &quot;with&quot; statement from being suppressed.
               return exc is not value
           except RuntimeError as exc:
               # Don&#39;t re-raise the passed in exception. (issue27122)
               if exc is value:
                   return False
               # Likewise, avoid suppressing if a StopIteration exception
               # was passed to throw() and later wrapped into a RuntimeError
               # (see PEP 479).
               if type is StopIteration and exc.__cause__ is value:
                   return False
               raise
           except:
               # only re-raise if it&#39;s *not* the exception that was
               # passed to throw(), because __exit__() must not raise
               # an exception unless __exit__() itself failed.  But throw()
               # has to raise the exception to signal propagation, so this
               # fixes the impedance mismatch between the throw() protocol
               # and the __exit__() protocol.
               #
               # This cannot use &#39;except BaseException as exc&#39; (as in the
               # async implementation) to maintain compatibility with
               # Python 2, where old-style class exceptions are not caught
               # by &#39;except BaseException&#39;.
               if sys.exc_info()[1] is value:
                   return False
               raise
           raise RuntimeError(&quot;generator didn&#39;t stop after throw()&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager


<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">my_context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Code before yield is __enter__</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span>
    <span class="token comment"># Code after yield is __exit__</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Exit&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">with</span> my_context<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Inside the context&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yield后异常示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager


<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;before&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> <span class="token string">&#39;hello&#39;</span>
        <span class="token comment"># 这里发生异常必须自己处理异常逻辑否则不会向下执行</span>
        a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span>
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;after&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">with</span> test<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    
<span class="token triple-quoted-string string">&quot;&quot;&quot;
before
hello
after
Traceback (most recent call last):
  File &quot;/mnt/d/jinzhuan/rss/tpl_hf.py&quot;, line 16, in &lt;module&gt;
    print(t)
  File &quot;/usr/lib/python3.8/contextlib.py&quot;, line 120, in __exit__
    next(self.gen)
  File &quot;/mnt/d/jinzhuan/rss/tpl_hf.py&quot;, line 10, in test
    a = 1 / 0
ZeroDivisionError: division by zero
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<strong><code>contextlib.closing</code>：</strong></p><p><strong>介绍：</strong> <code>closing</code> 是一个上下文管理器工具，用于确保在退出上下文时调用对象的<code>close</code>方法。通常，它用于处理那些没有实现上下文管理协议（<code>__enter__</code>和<code>__exit__</code>方法）的对象，但是有<code>close</code>方法的情况。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> closing


<span class="token keyword">class</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token comment"># 定义了 close 方法才可以使用 closing 装饰器</span>
    <span class="token keyword">def</span> <span class="token function">close</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;closed&#39;</span><span class="token punctuation">)</span>

    <span class="token comment"># with 块执行结束后 自动执行 close 方法</span>


<span class="token keyword">with</span> closing<span class="token punctuation">(</span>Test<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;do something&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Output:  </span>
<span class="token comment"># do something  </span>
<span class="token comment"># closed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从执行结果我们可以看到，<code>with</code> 语句块执行结束后，会自动调用 <code>Test</code> 实例的 <code>close</code> 方法。所以，对于需要自定义关闭资源的场景，我们可以使用这个方法配合 <code>with</code> 来完成。</p><p>3.<strong><code>contextlib.ExitStack</code>：</strong></p><p><strong>介绍：</strong> <code>ExitStack</code> 是一个上下文管理器，它允许你动态地管理一组上下文管理器，无论这组管理器的数量是多少。它可以用于替代多个嵌套的 <code>with</code> 语句。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> ExitStack


<span class="token keyword">def</span> <span class="token function">example_function</span><span class="token punctuation">(</span>file1_path<span class="token punctuation">,</span> file2_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> ExitStack<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> stack<span class="token punctuation">:</span>
        <span class="token comment"># 打开第一个文件</span>
        file1 <span class="token operator">=</span> stack<span class="token punctuation">.</span>enter_context<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span>file1_path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 打开第二个文件</span>
        file2 <span class="token operator">=</span> stack<span class="token punctuation">.</span>enter_context<span class="token punctuation">(</span><span class="token builtin">open</span><span class="token punctuation">(</span>file2_path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 在此处进行文件处理，无需手动关闭文件</span>


<span class="token comment"># 使用例子</span>
example_function<span class="token punctuation">(</span><span class="token string">&#39;file1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;file2.txt&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.<strong><code>contextlib.suppress</code>：</strong></p><p><strong>介绍：</strong> <code>suppress</code> 是一个上下文管理器，用于<code>忽略指定的异常</code>。它允许您执行代码块，即使在存在异常的情况下也能继续执行。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> suppress

<span class="token keyword">with</span> suppress<span class="token punctuation">(</span>ZeroDivisionError<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 尝试执行可能抛出异常的代码</span>
    result <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">0</span>

<span class="token comment"># 不会中断程序执行，即使发生了ZeroDivisionError</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Continuing with the program&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.<strong><code>contextlib.redirect_stdout</code> 和 <code>contextlib.redirect_stderr</code>：</strong></p><p><strong>介绍：</strong> 这两个上下文管理器允许您在代码块内重定向标准输出和标准错误流。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> redirect_stdout<span class="token punctuation">,</span> redirect_stderr
<span class="token keyword">import</span> io

<span class="token comment"># 示例1: 将标准输出重定向到文件</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;output.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">with</span> redirect_stdout<span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This goes to the file instead of the console.&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 示例2: 将标准错误重定向到字符串</span>
error_output <span class="token operator">=</span> io<span class="token punctuation">.</span>StringIO<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> redirect_stderr<span class="token punctuation">(</span>error_output<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This goes to the error_output StringIO instead of the console.&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 获取重定向的标准错误的内容</span>
error_contents <span class="token operator">=</span> error_output<span class="token punctuation">.</span>getvalue<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Captured error output:&quot;</span><span class="token punctuation">,</span> error_contents<span class="token punctuation">)</span>

<span class="token comment"># This goes to the error_output StringIO instead of the console.</span>
<span class="token comment"># Captured error output:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.<strong><code>contextlib.ContextDecorator</code>：</strong></p><p><strong>介绍：</strong> <code>ContextDecorator</code>是一个用于创建同时兼具上下文管理器和装饰器功能的基类。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> contextlib <span class="token keyword">import</span> ContextDecorator


<span class="token keyword">class</span> <span class="token class-name">TestCm</span><span class="token punctuation">(</span>ContextDecorator<span class="token punctuation">)</span><span class="token punctuation">:</span>
    a <span class="token operator">=</span> <span class="token number">12</span>

    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;enter&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exception<span class="token punctuation">,</span> traceback<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span>
        TestCm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">12</span>


<span class="token decorator annotation punctuation">@TestCm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">play_testcm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    TestCm<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">8</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;play_testcm, &quot;</span><span class="token punctuation">,</span> TestCm<span class="token punctuation">.</span>a<span class="token punctuation">)</span>


play_testcm<span class="token punctuation">(</span><span class="token punctuation">)</span>



<span class="token comment"># enter</span>
<span class="token comment"># play_testcm,  8</span>
<span class="token comment"># exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.<strong><code>contextlib.asynccontextmanager</code>：</strong></p><p><strong>介绍：</strong> <code>contextlib.asynccontextmanager</code>是用于创建<code>异步上下文管理器</code>的装饰器。</p><p><strong>示例：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> asynccontextmanager


<span class="token comment"># 异步上下文管理器的例子</span>
<span class="token decorator annotation punctuation">@asynccontextmanager</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">async_example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Enter async_example&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 在进入上下文时执行一些异步操作</span>

    result <span class="token operator">=</span> <span class="token keyword">await</span> asyncio<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># 将资源（或状态）传递给上下文</span>
        <span class="token keyword">yield</span> result
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        <span class="token comment"># 在退出上下文时执行一些异步操作</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Exit async_example&quot;</span><span class="token punctuation">)</span>


<span class="token comment"># 使用异步上下文管理器</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> async_example<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> result<span class="token punctuation">:</span>
        <span class="token comment"># 在此处使用上下文中的资源</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Inside main:&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>


<span class="token comment"># 运行异步代码</span>
asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Enter async_example</span>
<span class="token comment"># Inside main: None</span>
<span class="token comment"># Exit async_example</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些工具使得使用上下文管理器更加方便和灵活。<code>contextlib</code> 是 Python 标准库中一个强大而灵活的模块，用于简化上下文管理器的使用。</p><p>关于<code>contextlib</code>包的更多使用技巧，请阅读源码或参考官方文档。</p><h2 id="更多应用示例" tabindex="-1"><a class="header-anchor" href="#更多应用示例" aria-hidden="true">#</a> 更多应用示例</h2><h3 id="自定义文件上下文管理类" tabindex="-1"><a class="header-anchor" href="#自定义文件上下文管理类" aria-hidden="true">#</a> 自定义文件上下文管理类</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">FileManager</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;calling __init__ method&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>mode <span class="token operator">=</span> mode 
        self<span class="token punctuation">.</span><span class="token builtin">file</span> <span class="token operator">=</span> <span class="token boolean">None</span>
        
    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;calling __enter__ method&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">file</span> <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>mode<span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">file</span>


    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_val<span class="token punctuation">,</span> exc_tb<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;calling __exit__ method&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">file</span><span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
            
<span class="token keyword">with</span> FileManager<span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;ready to write to file&#39;</span><span class="token punctuation">)</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
    
<span class="token comment">## 输出</span>
calling __init__ method
calling __enter__ method
ready to write to <span class="token builtin">file</span>
calling __exit__ method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis分布式锁" tabindex="-1"><a class="header-anchor" href="#redis分布式锁" aria-hidden="true">#</a> Redis分布式锁</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> redis
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager

<span class="token comment"># 假设已经创建了一个 Redis 连接</span>
redis_client <span class="token operator">=</span> redis<span class="token punctuation">.</span>StrictRedis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">,</span> decode_responses<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">lock</span><span class="token punctuation">(</span>_redis_client<span class="token punctuation">,</span> lock_key<span class="token punctuation">,</span> expire<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        _locked <span class="token operator">=</span> _redis_client<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>lock_key<span class="token punctuation">,</span> <span class="token string">&#39;locked&#39;</span><span class="token punctuation">,</span> ex<span class="token operator">=</span>expire<span class="token punctuation">,</span> nx<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span> _locked
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        _redis_client<span class="token punctuation">.</span>delete<span class="token punctuation">(</span>lock_key<span class="token punctuation">)</span>


<span class="token comment"># 使用 lock 上下文管理器</span>
<span class="token keyword">with</span> lock<span class="token punctuation">(</span>redis_client<span class="token punctuation">,</span> <span class="token string">&#39;locked&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">as</span> locked<span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> locked<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to acquire lock. Exiting...&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Lock acquired. Performing some operation...&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 在这里执行需要锁的操作</span>

<span class="token comment"># do something...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redis事务和管道" tabindex="-1"><a class="header-anchor" href="#redis事务和管道" aria-hidden="true">#</a> Redis事务和管道</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> redis
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> contextmanager

<span class="token comment"># 假设已经创建了一个 Redis 连接</span>
redis_client <span class="token operator">=</span> redis<span class="token punctuation">.</span>StrictRedis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">,</span> decode_responses<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@contextmanager</span>
<span class="token keyword">def</span> <span class="token function">pipeline</span><span class="token punctuation">(</span>_redis_client<span class="token punctuation">)</span><span class="token punctuation">:</span>
    _pipe <span class="token operator">=</span> _redis_client<span class="token punctuation">.</span>pipeline<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> _pipe
        _pipe<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> exc<span class="token punctuation">:</span>
        _pipe<span class="token punctuation">.</span>reset<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># 使用 pipeline 上下文管理器</span>
<span class="token keyword">with</span> pipeline<span class="token punctuation">(</span>redis_client<span class="token punctuation">)</span> <span class="token keyword">as</span> pipe<span class="token punctuation">:</span>
    pipe<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> ex<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
    pipe<span class="token punctuation">.</span>zadd<span class="token punctuation">(</span><span class="token string">&#39;key2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    pipe<span class="token punctuation">.</span>sadd<span class="token punctuation">(</span><span class="token string">&#39;key3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我简要解释一下这段代码：</p><ol><li><code>pipeline</code> 函数使用 <code>@contextmanager</code> 装饰器，使得该函数返回一个上下文管理器。</li><li>在 <code>try</code> 块内，创建了一个 Redis pipeline 对象 <code>pipe</code>。</li><li><code>yield pipe</code> 将这个 pipeline 对象传递给 <code>with</code> 语句中的 <code>as</code> 子句，这样在 <code>with</code> 代码块中可以使用这个 pipeline 对象。</li><li><code>pipe.execute()</code> 在 <code>with</code> 代码块结束时被调用，执行 Redis pipeline 中的所有命令。</li><li><code>except</code> 块内，如果在 <code>with</code> 代码块中发生了异常，通过 <code>pipe.reset()</code> 重置 pipeline 对象，确保不会执行之前的命令。</li></ol><h3 id="异步文件上下文管理器" tabindex="-1"><a class="header-anchor" href="#异步文件上下文管理器" aria-hidden="true">#</a> 异步文件上下文管理器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aiofiles
<span class="token keyword">import</span> asyncio


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">read_file_async</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiofiles<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        content <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>read_file_async<span class="token punctuation">(</span><span class="token string">&#39;example.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步http请求上下文管理器" tabindex="-1"><a class="header-anchor" href="#异步http请求上下文管理器" aria-hidden="true">#</a> 异步HTTP请求上下文管理器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> aiohttp
<span class="token keyword">import</span> asyncio


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">fetch_data</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">with</span> aiohttp<span class="token punctuation">.</span>ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>
        <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token keyword">as</span> response<span class="token punctuation">:</span>
            data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span>text<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>fetch_data<span class="token punctuation">(</span><span class="token string">&#39;https://baidu.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="django中的databaseerrorwrapper上下文管理器源码" tabindex="-1"><a class="header-anchor" href="#django中的databaseerrorwrapper上下文管理器源码" aria-hidden="true">#</a> django中的DatabaseErrorWrapper上下文管理器源码</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">DatabaseErrorWrapper</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    Context manager and decorator that reraises backend-specific database
    exceptions using Django&#39;s common wrappers.
    &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        wrapper is a database wrapper.

        It must have a Database attribute defining PEP-249 exceptions.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>wrapper <span class="token operator">=</span> wrapper

    <span class="token keyword">def</span> <span class="token function">__enter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token keyword">def</span> <span class="token function">__exit__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> exc_type<span class="token punctuation">,</span> exc_value<span class="token punctuation">,</span> traceback<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> exc_type <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        <span class="token keyword">for</span> dj_exc_type <span class="token keyword">in</span> <span class="token punctuation">(</span>
                DataError<span class="token punctuation">,</span>
                OperationalError<span class="token punctuation">,</span>
                IntegrityError<span class="token punctuation">,</span>
                InternalError<span class="token punctuation">,</span>
                ProgrammingError<span class="token punctuation">,</span>
                NotSupportedError<span class="token punctuation">,</span>
                DatabaseError<span class="token punctuation">,</span>
                InterfaceError<span class="token punctuation">,</span>
                Error<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">:</span>
            db_exc_type <span class="token operator">=</span> <span class="token builtin">getattr</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>wrapper<span class="token punctuation">.</span>Database<span class="token punctuation">,</span> dj_exc_type<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token builtin">issubclass</span><span class="token punctuation">(</span>exc_type<span class="token punctuation">,</span> db_exc_type<span class="token punctuation">)</span><span class="token punctuation">:</span>
                dj_exc_value <span class="token operator">=</span> dj_exc_type<span class="token punctuation">(</span><span class="token operator">*</span>exc_value<span class="token punctuation">.</span>args<span class="token punctuation">)</span>
                <span class="token comment"># Only set the &#39;errors_occurred&#39; flag for errors that may make</span>
                <span class="token comment"># the connection unusable.</span>
                <span class="token keyword">if</span> dj_exc_type <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>DataError<span class="token punctuation">,</span> IntegrityError<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    self<span class="token punctuation">.</span>wrapper<span class="token punctuation">.</span>errors_occurred <span class="token operator">=</span> <span class="token boolean">True</span>
                <span class="token keyword">raise</span> dj_exc_value<span class="token punctuation">.</span>with_traceback<span class="token punctuation">(</span>traceback<span class="token punctuation">)</span> <span class="token keyword">from</span> exc_value

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Note that we are intentionally not using @wraps here for performance</span>
        <span class="token comment"># reasons. Refs #21109.</span>
        <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> self<span class="token punctuation">:</span>
                <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> inner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>这篇文章深入探讨了 Python 上下文管理器的应用与实现。首先，我们对比了在没有使用 <code>with</code> 语句和使用 <code>with</code> 语句时操作文件的代码差异，明确了 <code>with</code> 语句的优势，使代码结构更为简洁。接着，我们深入研究了 <code>with</code> 语句的实现原理，强调只需实现 <code>__enter__</code> 和 <code>__exit__</code> 方法的实例，即可借助 <code>with</code> 语法块高效管理资源。</p><p>然后我们也简单了解了下<code>异步上下文管理器</code>和<code>async with</code>以管理资源。</p><p>进一步介绍了 Python 标准库中 <code>contextlib</code> 模块，它提供了更便捷的上下文管理器实现方式。我们学习了如何使用 <code>contextmanager</code> 、<code>ContextDecorator</code>装饰器和 <code>closing</code> 等方法来优雅地处理资源。最后，通过多个实际例子展示了上下文管理器在管理资源和执行前后逻辑方面的价值。</p><p>综上所述，通过在开发中广泛运用上下文管理器，我们能够显著提升代码结构和可维护性。因此，强烈推荐在项目中积极采用这一优秀的编程模式。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,134),d=n("br",null,null,-1),r=n("br",null,null,-1),k={href:"https://docs.python.org/3/library/contextlib.html",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://realpython.com/python-with-statement/",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),y={href:"https://medium.com/@praba230890/a-guide-to-python-context-managers-aa7db1d28e87",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),g={href:"https://book.pythontips.com/en/latest/context_managers.html",target:"_blank",rel:"noopener noreferrer"},_=n("blockquote",null,[n("p",null,[s("喜欢这篇文章的话，可以关注一下我的公众号『"),n("strong",null,"海哥python"),s("』")])],-1);function w(f,x){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("《流畅的python》第一版及第二版"),d,s(" 《深入理解python特性》"),r,n("a",k,[s("https://docs.python.org/3/library/contextlib.html"),e(a)]),v,n("a",m,[s("https://realpython.com/python-with-statement/"),e(a)]),b,n("a",y,[s("https://medium.com/@praba230890/a-guide-to-python-context-managers-aa7db1d28e87"),e(a)]),h,n("a",g,[s("https://book.pythontips.com/en/latest/context_managers.html"),e(a)])])]),_])}const C=t(l,[["render",w],["__file","上下文管理器和with语句.html.vue"]]);export{C as default};
