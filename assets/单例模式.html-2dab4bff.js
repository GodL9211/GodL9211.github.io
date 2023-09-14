import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,e,f as t}from"./app-15e182e3.js";const l="/assets/思维导图-14c6071e.jpeg",u={},r=t('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>我们知道，经典设计模式总共有 23 种，但其中只有少数几种被广泛采用。根据我的工作经验，实际常用的可能不超过其中的一半。如果随机找一位程序员，并要求他列举出自己最熟悉的三种设计模式，那么<code>单例模式</code>肯定会是其中之一，这也是今天我们要讨论的。</p><figure><img src="'+l+`" alt="单例模式" tabindex="0" loading="lazy"><figcaption>单例模式</figcaption></figure><h2 id="为什么要单例模式" tabindex="-1"><a class="header-anchor" href="#为什么要单例模式" aria-hidden="true">#</a> 为什么要单例模式？</h2><p><code>单例设计模式（Singleton Design Pattern）</code>: 一个类只允许创建一个对象（或者实例），那这个类就是一个单例类，这种设计模式就叫作单例设计模式，简称单例模式。</p><p>当一个类的功能比较单一，只需要一个实例对象就可以完成需求时，就可以使用单例模式来节省内存资源。</p><blockquote><p><code>单例模式创建的对象是进程唯一的, 单例类中对象的唯一性的作用范围是进程内的，在进程间是不唯一的。</code>。</p></blockquote><h3 id="处理资源冲突" tabindex="-1"><a class="header-anchor" href="#处理资源冲突" aria-hidden="true">#</a> <code>处理资源冲突</code></h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Logger</span><span class="token punctuation">:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思考一下，以上代码是否存在什么问题呢？</p><p>答案是肯定的。</p><blockquote><p>这段代码并非线程安全的， 存在多线程写入日志时可能互相覆盖的问题！</p></blockquote><p>解决的办法有很多，如：使用类级别锁，分布式锁等。</p><p>相对于这两种解决方案，单例模式的解决思路就简单一些了。单例模式相对于之前类级别锁的好处是，不用创建那么多 Logger 对象，一方面节省内存空间，另一方面节省系统文件句柄（对于操作系统来说，文件句柄也是一种资源，不能随便浪费）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> logging


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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表示全局唯一类" tabindex="-1"><a class="header-anchor" href="#表示全局唯一类" aria-hidden="true">#</a> <code>表示全局唯一类</code></h3><p>从业务概念上，如果有些数据在系统中只应保存一份，那就比较适合设计为单例类。</p><ul><li>比如，配置信息类。在系统中，我们只有一个配置文件，当配置文件被加载到内存之后，以对象的形式存在，也理所应当只有一份。</li><li>再比如，<code>唯一递增 ID 号码生成器</code>，如果程序中有两个对象，那就会存在生成重复 ID 的情况，所以，我们应该将 ID 生成器类设计为单例。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


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
id_generator1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_id1 <span class="token operator">=</span> id_generator1<span class="token punctuation">.</span>get_id<span class="token punctuation">(</span><span class="token punctuation">)</span>

id_generator2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
my_id2 <span class="token operator">=</span> id_generator2<span class="token punctuation">.</span>get_id<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>id_generator1 <span class="token keyword">is</span> id_generator2<span class="token punctuation">)</span>   <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>my_id1<span class="token punctuation">,</span> my_id2<span class="token punctuation">)</span>  <span class="token comment"># 1 2</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ok，至此我们已经初步入门单例模式了。不过设计的并不十分优雅，而且还存在不少的问题。至于有什么问题以及如何改造，且听我慢慢道来。</p><h2 id="如何实现一个单例" tabindex="-1"><a class="header-anchor" href="#如何实现一个单例" aria-hidden="true">#</a> 如何实现一个单例？</h2><p>要实现一个单例，我们需要知道要重点关注的点是哪些？</p><ul><li>考虑对象创建时的线程安全问题</li><li>考虑是否支持延迟加载</li><li>考虑获取实例的性能是否高（是否加锁）</li></ul><p>在python中，我们可以使用多种方法来实现单例模式：</p><ul><li>使用模块</li><li>使用装饰器</li><li>使用类（方法）</li><li>基于<code>__new__</code>方法实现</li><li>基于元类metaclass实现</li></ul><h3 id="饿汉式-着急吃" tabindex="-1"><a class="header-anchor" href="#饿汉式-着急吃" aria-hidden="true">#</a> <code>饿汉式(着急吃)</code></h3><p>饿汉式的实现方式比较简单。在类加载的时候，instance 静态实例就已经创建并初始化好了，所以，instance 实例的创建过程是线程安全的。不过，这样的实现方式不支持延迟加载（在真正用到 IdGenerator 的时候，再创建实例）。</p><p><code>一种常见的方式是利用python模块化实现单例。</code></p><p>创建一个名为 id_generator_module.py 的模块文件，将 IdGenerator 类定义放入其中：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># id_generator_module.py</span>

<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token comment"># 创建单例实例</span>
id_generator_instance <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),k={href:"http://main.py",target:"_blank",rel:"noopener noreferrer"},d=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py</span>

<span class="token keyword">import</span> id_generator_module

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    singleton1 <span class="token operator">=</span> id_generator_module<span class="token punctuation">.</span>id_generator_instance
    singleton2 <span class="token operator">=</span> id_generator_module<span class="token punctuation">.</span>id_generator_instance

    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Python中可以使用模块的方式非常简单地实现单例模式，因为Python模块在程序中只会被导入一次，所以它天生就是单例的。</p></blockquote><h3 id="懒汉式-不着急吃" tabindex="-1"><a class="header-anchor" href="#懒汉式-不着急吃" aria-hidden="true">#</a> <code>懒汉式（不着急吃）</code></h3><p>有饿汉式，对应的，就有懒汉式。懒汉式相对于饿汉式的优势是支持延迟加载。</p><blockquote><p>这里只介绍一种懒汉式单例实现加以了解，其它实现请自行参考<code>饿汉式</code>或<code>双重检测式</code>进行改造。</p></blockquote><p><code>通过__new__方法实现单例</code></p><p>在Python中，对象的实例化过程通常遵循以下步骤：首先，执行类的<code>__new__</code>方法，如果未定义此方法，将默认调用父类的<code>__new__</code>方法来创建一个实例化对象。接着，再执行<code>__init__</code>方法来对这个新创建的对象进行初始化。</p><p>我们可以充分利用这个实例化过程来实现单例模式。具体做法是在类的<code>__new__</code>方法中判断是否已经存在实例，如果存在，则直接返回现有的实例，否则创建一个新的实例。这样就能够确保只有一个实例存在，从而实现了单例模式的效果。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/9/13 18:21</span>


<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>LazySingleton<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
                cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>init_generator<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token comment"># 使用示例</span>
singleton1 <span class="token operator">=</span> LazySingleton<span class="token punctuation">(</span><span class="token punctuation">)</span>
singleton2 <span class="token operator">=</span> LazySingleton<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这种实现方式会导致频繁加锁、释放锁，以及并发度低等问题，频繁的调用会产生性能瓶颈。</p></blockquote><h3 id="双重检测" tabindex="-1"><a class="header-anchor" href="#双重检测" aria-hidden="true">#</a> <code>双重检测</code></h3><p>饿汉式不支持延迟加载，懒汉式有性能问题，不支持高并发。那我们再来看一种既支持延迟加载、又支持高并发的单例实现方式，也就是双重检测实现方式。</p><p><code>使用__new__方法实现</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>使用装饰器函数实现单例模式</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


<span class="token keyword">def</span> <span class="token function">singleton</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
    instances <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">get_instance</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> instances<span class="token punctuation">:</span>
            <span class="token keyword">with</span> lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> instances<span class="token punctuation">:</span>
                    instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
        <span class="token keyword">return</span> instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>

    <span class="token keyword">return</span> get_instance


<span class="token decorator annotation punctuation">@singleton</span>
<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    singleton1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    singleton2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

    <span class="token comment"># 使用 __call__ 方法获取单例</span>
    singleton3 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton3<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用了类装饰器 @singleton 来标记 IdGenerator 类，并且确保只有一个实例被创建。</p><p><code>使用装饰器类实现单例模式</code></p><p>通过 <code>__call__</code> 方法来获取单例，并使用一个装饰器函数来包装类，确保只有一个实例被创建。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">SingletonDecorator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_cls <span class="token operator">=</span> cls
        self<span class="token punctuation">.</span>_instances <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        self<span class="token punctuation">.</span>_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>_cls <span class="token keyword">not</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>_instances<span class="token punctuation">:</span>
            <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> self<span class="token punctuation">.</span>_cls <span class="token keyword">not</span> <span class="token keyword">in</span> self<span class="token punctuation">.</span>_instances<span class="token punctuation">:</span>
                    instance <span class="token operator">=</span> self<span class="token punctuation">.</span>_cls<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
                    self<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>self<span class="token punctuation">.</span>_cls<span class="token punctuation">]</span> <span class="token operator">=</span> instance
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>self<span class="token punctuation">.</span>_cls<span class="token punctuation">]</span>


<span class="token decorator annotation punctuation">@SingletonDecorator</span>
<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    singleton1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    singleton2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

    <span class="token comment"># 使用装饰器获取单例</span>
    singleton3 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton3<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>友情提示，有关装饰器的介绍请查看我的另一篇文章：【python】装饰器详解</p></blockquote><p><code>使用类方法实现单例</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>init_generator<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>

    <span class="token decorator annotation punctuation">@classmethod</span>
    <span class="token keyword">def</span> <span class="token function">get_instance</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> cls<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    singleton1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">.</span>get_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>
    singleton2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">.</span>get_instance<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们将<code>__new__</code>方法去掉，并添加了一个类方法 get_instance()，该方法负责创建和返回单例实例。通过调用 IdGenerator.get_instance()，你可以获得同一个单例实例，输出应该是 True，表示是同一个实例。</p><p><code>使用元类metaclass实现单例模式</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">SingletonMeta</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    _instances <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> cls<span class="token punctuation">.</span>_instances<span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls <span class="token keyword">not</span> <span class="token keyword">in</span> cls<span class="token punctuation">.</span>_instances<span class="token punctuation">:</span>
                    instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>SingletonMeta<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__call__<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span> <span class="token operator">=</span> instance
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instances<span class="token punctuation">[</span>cls<span class="token punctuation">]</span>


<span class="token keyword">class</span> <span class="token class-name">IdGenerator</span><span class="token punctuation">(</span>metaclass<span class="token operator">=</span>SingletonMeta<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">init_generator</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">def</span> <span class="token function">get_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span><span class="token builtin">id</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token builtin">id</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    singleton1 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>
    singleton2 <span class="token operator">=</span> IdGenerator<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>singleton1 <span class="token keyword">is</span> singleton2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了一个名为 SingletonMeta 的元类，它负责控制单例的创建。我们将 IdGenerator 类的元类设置为 SingletonMeta，这样就可以确保只有一个实例被创建。输出结果应该是 True，表示是同一个实例。这种方式使用元类更加符合面向对象的思想，使得单例模式的实现更加清晰。</p><h2 id="如何实现集群环境下的单例" tabindex="-1"><a class="header-anchor" href="#如何实现集群环境下的单例" aria-hidden="true">#</a> 如何实现集群环境下的单例？</h2><p>具体来说，我们需要把这个单例对象序列化并存储到外部共享存储区（比如文件）。进程在使用这个单例对象的时候，需要先从外部共享存储区中将它读取到内存，并反序列化成对象，然后再使用，使用完成之后还需要再存储回外部共享存储区。</p><p>为了保证任何时刻，在进程间都只有一份对象存在，一个进程在获取到对象之后，需要对对象加锁，避免其他进程再将其获取。在进程使用完这个对象之后，还需要显式地将对象从内存中删除，并且释放对对象的加锁。</p><h2 id="使用场景示例" tabindex="-1"><a class="header-anchor" href="#使用场景示例" aria-hidden="true">#</a> 使用场景示例</h2><p><code>场景1</code></p><p>某个项目的配置信息存放在一个配置文件中，通过一个 Config 的类来读取配置文件的信息。如果在程序运行期间，有很多地方都需要使用配置文件的内容，也就是说，很多地方都需要创建 Config 对象的实例，这就导致系统中存在多个 Config 的实例对象，而这样会严重浪费内存资源，尤其是在配置文件内容很多的情况下。事实上，类似 Config 这样的类，我们希望在程序运行期间只存在一个实例对象。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> configparser
<span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>Config<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>load_config<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">load_config</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>config <span class="token operator">=</span> configparser<span class="token punctuation">.</span>ConfigParser<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>config<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token string">&#39;config.ini&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 如果配置文件不存在，设置默认配置</span>
            self<span class="token punctuation">.</span>set_default_config<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">set_default_config</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 设置默认配置</span>
        self<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">&#39;Section1&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;default_value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;default_value2&#39;</span><span class="token punctuation">}</span>

    <span class="token keyword">def</span> <span class="token function">get_config</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> section<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>config<span class="token punctuation">.</span>get<span class="token punctuation">(</span>section<span class="token punctuation">,</span> key<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">update_config</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> section<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span>section<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;config.ini&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> config_file<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>config<span class="token punctuation">.</span>write<span class="token punctuation">(</span>config_file<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    config <span class="token operator">=</span> Config<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment"># 获取配置信息</span>
    value1 <span class="token operator">=</span> config<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token string">&quot;Section1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span>

    <span class="token comment"># 更新配置信息</span>
    config<span class="token punctuation">.</span>update_config<span class="token punctuation">(</span><span class="token string">&quot;Section1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;new_value&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># 获取更新后的配置信息</span>
    updated_value1 <span class="token operator">=</span> config<span class="token punctuation">.</span>get_config<span class="token punctuation">(</span><span class="token string">&quot;Section1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>updated_value1<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>场景2</code><br> 分布式ID生成是一个常见的需求，以下是一个使用雪花算法实现分布式ID生成的Python代码示例，并将雪花算法的生成ID功能与单例模式结合使用，创建了一个单例类，该类包含了雪花算法的实例，并确保只有一个该类的实例存在：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> time


<span class="token keyword">class</span> <span class="token class-name">SnowflakeIDGenerator</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> worker_id<span class="token punctuation">,</span> datacenter_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 41位时间戳位</span>
        self<span class="token punctuation">.</span>timestamp_bits <span class="token operator">=</span> <span class="token number">41</span>
        <span class="token comment"># 10位工作机器ID位</span>
        self<span class="token punctuation">.</span>worker_id_bits <span class="token operator">=</span> <span class="token number">10</span>
        <span class="token comment"># 12位序列号位</span>
        self<span class="token punctuation">.</span>sequence_bits <span class="token operator">=</span> <span class="token number">12</span>

        <span class="token comment"># 最大工作机器ID和最大序列号</span>
        self<span class="token punctuation">.</span>max_worker_id <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> self<span class="token punctuation">.</span>worker_id_bits<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>max_sequence <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">^</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> self<span class="token punctuation">.</span>sequence_bits<span class="token punctuation">)</span>

        <span class="token comment"># 时间戳左移的位数</span>
        self<span class="token punctuation">.</span>timestamp_shift <span class="token operator">=</span> self<span class="token punctuation">.</span>worker_id_bits <span class="token operator">+</span> self<span class="token punctuation">.</span>sequence_bits
        <span class="token comment"># 工作机器ID左移的位数</span>
        self<span class="token punctuation">.</span>worker_id_shift <span class="token operator">=</span> self<span class="token punctuation">.</span>sequence_bits

        <span class="token comment"># 配置工作机器ID和数据中心ID</span>
        self<span class="token punctuation">.</span>worker_id <span class="token operator">=</span> worker_id
        self<span class="token punctuation">.</span>datacenter_id <span class="token operator">=</span> datacenter_id

        <span class="token comment"># 初始化序列号</span>
        self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment"># 上次生成ID的时间戳</span>
        self<span class="token punctuation">.</span>last_timestamp <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

        <span class="token comment"># 线程锁，用于保护并发生成ID的安全性</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 校验工作机器ID和数据中心ID是否合法</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>worker_id <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> self<span class="token punctuation">.</span>worker_id <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>max_worker_id<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Worker ID must be between 0 and </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>max_worker_id<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>datacenter_id <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">or</span> self<span class="token punctuation">.</span>datacenter_id <span class="token operator">&gt;</span> self<span class="token punctuation">.</span>max_worker_id<span class="token punctuation">:</span>
            <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Datacenter ID must be between 0 and </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>max_worker_id<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_current_timestamp</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_wait_for_next_timestamp</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> last_timestamp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_current_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> timestamp <span class="token operator">&lt;=</span> last_timestamp<span class="token punctuation">:</span>
            timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_current_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> timestamp

    <span class="token keyword">def</span> <span class="token function">generate_id</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            current_timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_current_timestamp<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> current_timestamp <span class="token operator">&lt;</span> self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">:</span>
                <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">&quot;Clock moved backwards. Refusing to generate ID.&quot;</span><span class="token punctuation">)</span>

            <span class="token keyword">if</span> current_timestamp <span class="token operator">==</span> self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>sequence <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> self<span class="token punctuation">.</span>max_sequence
                <span class="token keyword">if</span> self<span class="token punctuation">.</span>sequence <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    current_timestamp <span class="token operator">=</span> self<span class="token punctuation">.</span>_wait_for_next_timestamp<span class="token punctuation">(</span>self<span class="token punctuation">.</span>last_timestamp<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>sequence <span class="token operator">=</span> <span class="token number">0</span>

            self<span class="token punctuation">.</span>last_timestamp <span class="token operator">=</span> current_timestamp

            <span class="token comment"># 构造ID</span>
            timestamp <span class="token operator">=</span> current_timestamp <span class="token operator">&lt;&lt;</span> self<span class="token punctuation">.</span>timestamp_shift
            worker_id <span class="token operator">=</span> self<span class="token punctuation">.</span>worker_id <span class="token operator">&lt;&lt;</span> self<span class="token punctuation">.</span>worker_id_shift
            <span class="token builtin">id</span> <span class="token operator">=</span> timestamp <span class="token operator">|</span> worker_id <span class="token operator">|</span> self<span class="token punctuation">.</span>sequence
            <span class="token keyword">return</span> <span class="token builtin">id</span>


<span class="token keyword">class</span> <span class="token class-name">SingletonSnowflakeGenerator</span><span class="token punctuation">:</span>
    _instance_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> worker_id<span class="token punctuation">,</span> datacenter_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_instance_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> SnowflakeIDGenerator<span class="token punctuation">(</span>worker_id<span class="token punctuation">,</span> datacenter_id<span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    generator1 <span class="token operator">=</span> SingletonSnowflakeGenerator<span class="token punctuation">(</span>worker_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> datacenter_id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    generator2 <span class="token operator">=</span> SingletonSnowflakeGenerator<span class="token punctuation">(</span>worker_id<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> datacenter_id<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>generator1 <span class="token keyword">is</span> generator2<span class="token punctuation">)</span>  <span class="token comment"># 输出 True，表示是同一个实例</span>

    id1 <span class="token operator">=</span> generator1<span class="token punctuation">.</span>generate_id<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    id2 <span class="token operator">=</span> generator2<span class="token punctuation">.</span>generate_id<span class="token punctuation">(</span><span class="token punctuation">)</span>  

    <span class="token keyword">print</span><span class="token punctuation">(</span>id1<span class="token punctuation">)</span>  <span class="token comment"># 7108005303425175552</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>id2<span class="token punctuation">)</span>  <span class="token comment"># 7108005303425175553</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>场景3</code><br> 数据库连接池：确保在应用程序中只存在一个数据库连接池的实例，以提高性能和资源利用率。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> threading
<span class="token keyword">import</span> pymysql
<span class="token keyword">from</span> dbutils<span class="token punctuation">.</span>pooled_db <span class="token keyword">import</span> PooledDB


<span class="token keyword">class</span> <span class="token class-name">DatabaseConnectionPoolProxy</span><span class="token punctuation">:</span>
    _instance_lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>DatabaseConnectionPoolProxy<span class="token punctuation">,</span> <span class="token string">&quot;_instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> DatabaseConnectionPoolProxy<span class="token punctuation">.</span>_instance_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>DatabaseConnectionPoolProxy<span class="token punctuation">,</span> <span class="token string">&quot;_instance&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                    DatabaseConnectionPoolProxy<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">object</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>initialize_pool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> DatabaseConnectionPoolProxy<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">initialize_pool</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>pool <span class="token operator">=</span> PooledDB<span class="token punctuation">(</span>
            creator<span class="token operator">=</span>pymysql<span class="token punctuation">,</span>
            maxconnections<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span>
            mincached<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
            maxcached<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span>
            maxshared<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>
            blocking<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
            maxusage<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
            <span class="token comment"># 配置其他数据库连接池参数</span>
            host<span class="token operator">=</span><span class="token string">&#39;192.168.91.1&#39;</span><span class="token punctuation">,</span>
            port<span class="token operator">=</span><span class="token number">3306</span><span class="token punctuation">,</span>
            user<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
            password<span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
            database<span class="token operator">=</span><span class="token string">&#39;inventory&#39;</span><span class="token punctuation">,</span>
            charset<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span>
        <span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">get_connection</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>pool<span class="token punctuation">:</span>
            <span class="token keyword">return</span> self<span class="token punctuation">.</span>pool<span class="token punctuation">.</span>connection<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">execute_query</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> query<span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        conn <span class="token operator">=</span> self<span class="token punctuation">.</span>get_connection<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> conn<span class="token punctuation">:</span>
            cursor <span class="token operator">=</span> conn<span class="token punctuation">.</span>cursor<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                cursor<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>query<span class="token punctuation">,</span> params<span class="token punctuation">)</span>
                result <span class="token operator">=</span> cursor<span class="token punctuation">.</span>fetchall<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> result
            <span class="token keyword">finally</span><span class="token punctuation">:</span>
                cursor<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
                conn<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    db_proxy <span class="token operator">=</span> DatabaseConnectionPoolProxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> db_proxy<span class="token punctuation">.</span>execute_query<span class="token punctuation">(</span><span class="token string">&quot;SELECT * FROM inventory WHERE id=%s&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    db_proxy1 <span class="token operator">=</span> DatabaseConnectionPoolProxy<span class="token punctuation">(</span><span class="token punctuation">)</span>
    db_proxy2 <span class="token operator">=</span> DatabaseConnectionPoolProxy<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>db_proxy1 <span class="token keyword">is</span> db_proxy2<span class="token punctuation">)</span>  <span class="token comment"># True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>场景4</code><br> 缓存管理器：管理应用程序中的缓存数据，确保只有一个缓存管理器实例来避免数据一致性问题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading


<span class="token keyword">class</span> <span class="token class-name">CacheManager</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>CacheManager<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>initialize_cache<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">initialize_cache</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>cache_data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment"># 实际缓存数据的数据结构</span>

    <span class="token keyword">def</span> <span class="token function">get_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>cache_data<span class="token punctuation">.</span>get<span class="token punctuation">(</span>key<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">set_data</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>cache_data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    cache_manager1 <span class="token operator">=</span> CacheManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
    cache_manager1<span class="token punctuation">.</span>set_data<span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span>

    cache_manager2 <span class="token operator">=</span> CacheManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
    value <span class="token operator">=</span> cache_manager2<span class="token punctuation">.</span>get_data<span class="token punctuation">(</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>  <span class="token comment"># 输出 &quot;value1&quot;</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>cache_manager1 <span class="token keyword">is</span> cache_manager2<span class="token punctuation">)</span>  <span class="token comment"># 如果为 True，则是单例模式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>场景5</code><br> 线程池：确保在应用程序中只存在一个线程池的实例，以管理并发任务的执行。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor


<span class="token keyword">class</span> <span class="token class-name">ThreadPoolManager</span><span class="token punctuation">:</span>
    _instance <span class="token operator">=</span> <span class="token boolean">None</span>
    _lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__new__</span><span class="token punctuation">(</span>cls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> cls<span class="token punctuation">.</span>_lock<span class="token punctuation">:</span>
                <span class="token keyword">if</span> cls<span class="token punctuation">.</span>_instance <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                    cls<span class="token punctuation">.</span>_instance <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span>ThreadPoolManager<span class="token punctuation">,</span> cls<span class="token punctuation">)</span><span class="token punctuation">.</span>__new__<span class="token punctuation">(</span>cls<span class="token punctuation">)</span>
                    cls<span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>initialize_thread_pool<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> cls<span class="token punctuation">.</span>_instance

    <span class="token keyword">def</span> <span class="token function">initialize_thread_pool</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>thread_pool <span class="token operator">=</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>  <span class="token comment"># 最大工作线程数</span>

    <span class="token keyword">def</span> <span class="token function">submit_task</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> task_function<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>thread_pool<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>task_function<span class="token punctuation">,</span> <span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    thread_pool_manager1 <span class="token operator">=</span> ThreadPoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">sample_task</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token number">2</span>


    future <span class="token operator">=</span> thread_pool_manager1<span class="token punctuation">.</span>submit_task<span class="token punctuation">(</span>sample_task<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    result <span class="token operator">=</span> future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出 10</span>

    thread_pool_manager2 <span class="token operator">=</span> ThreadPoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">print</span><span class="token punctuation">(</span>thread_pool_manager1 <span class="token keyword">is</span> thread_pool_manager2<span class="token punctuation">)</span>  <span class="token comment"># 如果为 True，则是单例模式</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>懒汉式还是饿汉式更好我觉得需要看具体的场景。</p><ul><li><p>对于那些短生命周期的应用，如客户端应用来说，启动是频繁发生的，如果启动时导致了一堆饿汉初始化，会给用户带来不好的体验，如果把初始化往后延，将初始化分散在未来的各个时间点，即使某个懒汉初始化时间较长，用户也几乎无感知。</p></li><li><p>而对于生命周期较长的应用，长痛不如短痛，启动时耗点时，保证后面的使用流畅也是可取的。</p></li></ul><p>另外，需要关注多线程等并发带来的并发安全问题及引入锁后的性能问题等。</p><blockquote><p><code>__new__()</code>方法无法避免触发<code>__init__()</code>，所以通常为避免不必要的麻烦，通常不会重写<code>__init__()</code>方法</p></blockquote><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,48),v={href:"https://stackoverflow.com/questions/6760685/creating-a-singleton-in-python",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b={href:"https://time.geekbang.org/column/article/194035",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),g={href:"https://time.geekbang.org/column/article/194068",target:"_blank",rel:"noopener noreferrer"},f=n("br",null,null,-1),y={href:"https://time.geekbang.org/column/article/196790",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),h={href:"https://juejin.cn/post/7272006755265380367?searchId=2023091415282519FA309401F8161F22AE",target:"_blank",rel:"noopener noreferrer"},q=n("br",null,null,-1),x={href:"https://github.com/faif/python-patterns",target:"_blank",rel:"noopener noreferrer"};function I(L,D){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("在另一个文件（例如 "),n("a",k,[s("main.py"),e(a)]),s("）中导入模块并使用单例模式：")]),d,n("blockquote",null,[n("p",null,[n("a",v,[s("https://stackoverflow.com/questions/6760685/creating-a-singleton-in-python"),e(a)]),m,n("a",b,[s("https://time.geekbang.org/column/article/194035"),e(a)]),_,n("a",g,[s("https://time.geekbang.org/column/article/194068"),e(a)]),f,n("a",y,[s("https://time.geekbang.org/column/article/196790"),e(a)]),w,n("a",h,[s("https://juejin.cn/post/7272006755265380367?searchId=2023091415282519FA309401F8161F22AE"),e(a)]),q,n("a",x,[s("https://github.com/faif/python-patterns"),e(a)])])])])}const N=p(u,[["render",I],["__file","单例模式.html.vue"]]);export{N as default};
