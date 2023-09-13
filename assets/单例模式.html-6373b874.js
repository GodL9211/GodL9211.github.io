import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-44adde98.js";const t="/assets/思维导图-14c6071e.jpeg",p={},o=e('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>我们知道，经典设计模式总共有 23 种，但其中只有少数几种被广泛采用。根据我的工作经验，实际常用的可能不超过其中的一半。如果随机找一位程序员，并要求他列举出自己最熟悉的三种设计模式，那么<code>单例模式</code>肯定会是其中之一，这也是今天我们要讨论的。</p><figure><img src="'+t+`" alt="单例模式" tabindex="0" loading="lazy"><figcaption>单例模式</figcaption></figure><h2 id="为什么要单例模式" tabindex="-1"><a class="header-anchor" href="#为什么要单例模式" aria-hidden="true">#</a> 为什么要单例模式？</h2><p><code>单例设计模式（Singleton Design Pattern）</code>: 一个类只允许创建一个对象（或者实例），那这个类就是一个单例类，这种设计模式就叫作单例设计模式，简称单例模式。</p><h3 id="处理资源冲突" tabindex="-1"><a class="header-anchor" href="#处理资源冲突" aria-hidden="true">#</a> <code>处理资源冲突</code></h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>file_path <span class="token operator">=</span> file_path

    <span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>file_path<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
            <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>message <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">UserController</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> Logger<span class="token punctuation">(</span><span class="token string">&quot;/Users/haige/log.txt&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...省略业务逻辑代码...</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>log<span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&quot; logged in!&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">OrderController</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> Logger<span class="token punctuation">(</span><span class="token string">&quot;/Users/haige/log.txt&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> order<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...省略业务逻辑代码...</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;Created an order: &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Logger类的应用示例：</span>
user_controller <span class="token operator">=</span> UserController<span class="token punctuation">(</span><span class="token punctuation">)</span>
user_controller<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>

order_controller <span class="token operator">=</span> OrderController<span class="token punctuation">(</span><span class="token punctuation">)</span>
order_controller<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;product&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Widget&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;quantity&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考一下，以上代码是否存在什么问题呢？</p><p>答案是肯定的。</p><blockquote><p>这段代码并非线程安全的， 存在多线程写入日志时可能互相覆盖的问题！</p></blockquote><p>解决的办法有很多，如：使用类级别锁，分布式锁等。</p><p>相对于这两种解决方案，单例模式的解决思路就简单一些了。单例模式相对于之前类级别锁的好处是，不用创建那么多 Logger 对象，一方面节省内存空间，另一方面节省系统文件句柄（对于操作系统来说，文件句柄也是一种资源，不能随便浪费）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging

<span class="token keyword">class</span> <span class="token class-name">Logger</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>Logger<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
            cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>init_logger<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">init_logger</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span><span class="token string">&quot;MyLogger&quot;</span><span class="token punctuation">)</span>
        file_handler <span class="token operator">=</span> logging<span class="token punctuation">.</span>FileHandler<span class="token punctuation">(</span><span class="token string">&quot;/Users/wangzheng/log.txt&quot;</span><span class="token punctuation">)</span>
        formatter <span class="token operator">=</span> logging<span class="token punctuation">.</span>Formatter<span class="token punctuation">(</span><span class="token string">&quot;%(asctime)s - %(message)s&quot;</span><span class="token punctuation">)</span>
        file_handler<span class="token punctuation">.</span>setFormatter<span class="token punctuation">(</span>formatter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>addHandler<span class="token punctuation">(</span>file_handler<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>setLevel<span class="token punctuation">(</span>logging<span class="token punctuation">.</span>INFO<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span>message<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">UserController</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...省略业务逻辑代码...</span>
        Logger<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>log<span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&quot; logged in!&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">OrderController</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> order<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># ...省略业务逻辑代码...</span>
        Logger<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>log<span class="token punctuation">(</span><span class="token string">&quot;Created an order: &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Logger类的应用示例：</span>
user_controller <span class="token operator">=</span> UserController<span class="token punctuation">(</span><span class="token punctuation">)</span>
user_controller<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span>

order_controller <span class="token operator">=</span> OrderController<span class="token punctuation">(</span><span class="token punctuation">)</span>
order_controller<span class="token punctuation">.</span>create<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;product&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Widget&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;quantity&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表示全局唯一类" tabindex="-1"><a class="header-anchor" href="#表示全局唯一类" aria-hidden="true">#</a> <code>表示全局唯一类</code></h3><p>从业务概念上，如果有些数据在系统中只应保存一份，那就比较适合设计为单例类。</p><ul><li>比如，配置信息类。在系统中，我们只有一个配置文件，当配置文件被加载到内存之后，以对象的形式存在，也理所应当只有一份。</li><li>再比如，<code>唯一递增 ID 号码生成器</code>，如果程序中有两个对象，那就会存在生成重复 ID 的情况，所以，我们应该将 ID 生成器类设计为单例。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>IdGenerator<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>init_generator<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>

<span class="token comment"># IdGenerator使用举例</span>
id_generator <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">id</span> <span class="token operator">=</span> id_generator<span class="token punctuation">.</span>get_id<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，至此我们已经初步入门单例模式了。不过设计的并不十分优雅，而且还存在不少的问题。至于有什么问题以及如何改造，且听我慢慢道来。</p><h2 id="如何实现一个单例" tabindex="-1"><a class="header-anchor" href="#如何实现一个单例" aria-hidden="true">#</a> 如何实现一个单例？</h2><p>要实现一个单例，我们需要知道要重点关注的点是哪些？</p><ul><li>考虑对象创建时的线程安全问题</li><li>考虑是否支持延迟加载</li><li>考虑获取实例的性能是否高（是否加锁）</li></ul><h3 id="饿汉式-着急吃" tabindex="-1"><a class="header-anchor" href="#饿汉式-着急吃" aria-hidden="true">#</a> <code>饿汉式(着急吃)</code></h3><p>饿汉式的实现方式比较简单。在类加载的时候，instance 静态实例就已经创建并初始化好了，所以，instance 实例的创建过程是线程安全的。不过，这样的实现方式不支持延迟加载（在真正用到 IdGenerator 的时候，再创建实例）:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用__new__方法来创建饿汉式单例的实例。Python中的__new__方法在每次创建实例时都会被调用，但我们在该方法中返回了同一个实例，因此保持了单例模式的特性。</p><h3 id="懒汉式-不着急吃" tabindex="-1"><a class="header-anchor" href="#懒汉式-不着急吃" aria-hidden="true">#</a> <code>懒汉式（不着急吃）</code></h3><p>有饿汉式，对应的，就有懒汉式。懒汉式相对于饿汉式的优势是支持延迟加载。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/9/13 18:21</span>


<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>LazySingleton<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>init_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">init_instance</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 在初始化时可以添加需要的属性和方法</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>


<span class="token comment"># 使用示例</span>
singleton1 <span class="token operator">=</span> LazySingleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
singleton2 <span class="token operator">=</span> LazySingleton<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中的__new__方法在每次创建实例时都会被调用，但我们在该方法中返回了同一个实例，因此保持了单例模式的特性。我们也使用线程锁来确保在多线程环境下的线程安全性。这样，只有在需要时才会创建实例，实现了懒汉式单例模式。</p><blockquote><p>这种实现方式会导致频繁加锁、释放锁，以及并发度低等问题，频繁的调用会产生性能瓶颈。</p></blockquote><h3 id="双重检测" tabindex="-1"><a class="header-anchor" href="#双重检测" aria-hidden="true">#</a> <code>双重检测</code></h3><p>饿汉式不支持延迟加载，懒汉式有性能问题，不支持高并发。那我们再来看一种既支持延迟加载、又支持高并发的单例实现方式，也就是双重检测实现方式。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/9/13 18:21</span>


<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>IdGenerator<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>init_generator<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token comment"># 使用示例</span>
singleton1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
singleton2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>懒汉式还是饿汉式更好我觉得需要看具体的场景。对于那些短生命周期的应用，如客户端应用来说，启动是频繁发生的，如果启动时导致了一堆饿汉初始化，会给用户带来不好的体验，如果把初始化往后延，将初始化分散在未来的各个时间点，即使某个懒汉初始化时间较长，用户也几乎无感知。而对于生命周期较长的应用，长痛不如短痛，启动时耗点时，保证后面的使用流畅也是可取的。</p>`,35),c=[o];function l(i,u){return s(),a("div",null,c)}const k=n(p,[["render",l],["__file","单例模式.html.vue"]]);export{k as default};
