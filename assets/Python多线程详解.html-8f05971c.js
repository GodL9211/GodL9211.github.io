import{_ as p}from"./haige_wechat_public-ccb5a382.js";import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as l,a as n,b as s,e,f as t}from"./app-2950586d.js";const u={},r=n("h2",{id:"为什么要使用多线程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#为什么要使用多线程","aria-hidden":"true"},"#"),s(" 为什么要使用多线程？")],-1),d={href:"https://www.zhihu.com/question/23474039",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>python3中多线程的实现使用了threading模块，它允许同一进程中运行多个线程。</p><h3 id="如何创建和执行一个线程" tabindex="-1"><a class="header-anchor" href="#如何创建和执行一个线程" aria-hidden="true">#</a> 如何创建和执行一个线程</h3><p>一般我们有两种方法来创建线程，一种是以某个函数来作为起点，另一种是继承Thread类。</p><h4 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h4><p>获取一个Thread对象，构造参数中target是起点函数，<code>注意不要加括号</code>。假如起点函数有参数，则可以通过args输入元组参数或者kwargs输入字典参数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/5/6 15:53</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;另外开始一个子线程做任务啦&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 用time.sleep模拟任务耗时</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;子线程任务结束啦&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这里是主线程&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 创建线程对象</span>
    t1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>task<span class="token punctuation">)</span>
    <span class="token comment"># 启动</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程依然可以干别的事&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>这里是主线程
另外开始一个子线程做任务啦
主线程依然可以干别的事
子线程任务结束啦
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/5/6 15:53</span>
<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">class</span> <span class="token class-name">NewThread</span><span class="token punctuation">(</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>  <span class="token comment"># 必须步骤</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># 入口是名字为run的方法</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始新的线程做一个任务啦&quot;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 用time.sleep模拟任务耗时</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这个新线程中的任务结束啦&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这里是主线程&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 创建线程对象</span>
    t1 <span class="token operator">=</span> NewThread<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># 启动</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span>  <span class="token comment"># 这里如果主线程结束，子线程会立刻退出，暂时先用sleep规避</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程依然可以干别的事&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>这里是主线程
开始新的线程做一个任务啦
主线程依然可以干别的事
这个新线程中的任务结束啦
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正式介绍threading模块" tabindex="-1"><a class="header-anchor" href="#正式介绍threading模块" aria-hidden="true">#</a> 正式介绍threading模块</h2>`,13),v={href:"https://docs.python.org/3/library/threading.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>关于线程信息的函数：</p><ul><li><code>threading.active_count()</code>：返回当前存活的Thread对象数量。</li><li><code>threading.current_thread()</code>：返回当前线程的Thread对象。</li><li><code>threading.enumerate()</code>：列表形式返回所有存活的Thread对象。</li><li><code>threading.main_thread()</code>：返回主Thread对象。</li></ul><p>Thread对象的方法及属性：</p><ul><li><code>Thread.name</code>：线程的名字，没有语义，可以相同名称。</li><li><code>Thread.ident</code>：线程标识符，非零整数。</li><li><code>Thread.Daemon</code>：是否为守护线程。</li><li><code>Thread.is_alive()</code>：是否存活。</li><li><code>Thread.start()</code>：开始线程活动。若多次调用抛出RuntimeError。</li><li><code>Thread.run()</code>：用来重载的，</li><li><code>Thread.join(timeout=None)</code>：等待直到线程正常或异常结束。尚未开始抛出RuntimeError</li><li><code>Thread(group=None, target=None, name=None, args=(), kwargs={}, *, deamon=None)</code>：构造函数。</li></ul><h3 id="守护线程-daemon" tabindex="-1"><a class="header-anchor" href="#守护线程-daemon" aria-hidden="true">#</a> 守护线程 Daemon</h3><p>在Python 3中，守护线程（daemon thread）是一种特殊的线程，它在程序运行时在后台运行，不会阻止程序的退出。当主线程退出时，守护线程也不会自动退出，而不需要等待它执行完毕。</p><h4 id="方法一-1" tabindex="-1"><a class="header-anchor" href="#方法一-1" aria-hidden="true">#</a> 方法一</h4><p>在创建线程对象时，可以通过设置<code>daemon</code>属性为<code>True</code>来创建守护线程，例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker thread running&#39;</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 创建守护线程</span>
t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> daemon<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment"># 启动线程</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 主线程执行一些操作</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread running&#39;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread finished&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Worker thread runningMain thread running

Worker thread running
Worker thread running
Worker thread running
Worker thread running
Main thread finished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个守护线程<code>worker()</code>，并将<code>daemon</code>属性设置为<code>True</code>。在主线程中，我们执行了一些操作，并休眠5秒钟。由于守护线程的存在，即使主线程已经结束，守护线程仍会在后台运行。</p><h4 id="方法二-1" tabindex="-1"><a class="header-anchor" href="#方法二-1" aria-hidden="true">#</a> 方法二</h4><p>设置守护线程用Thread.setDaemon(bool)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/5/6 16:06</span>


<span class="token keyword">import</span> time
<span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread


<span class="token keyword">def</span> <span class="token function">task1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始子线程1做任务1啦&quot;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 用time.sleep模拟任务耗时</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;子线程1中的任务1结束啦&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">task2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;开始子线程2做任务2啦&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;任务2-{}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;子线程2中的任务2结束啦&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;这里是主线程&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># 创建线程对象</span>
    t1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>task1<span class="token punctuation">)</span>
    t2 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>task2<span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>setDaemon<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 设置为守护进程，必须在start之前</span>
    <span class="token comment"># 启动</span>
    t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;主线程结束了&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>这里是主线程
开始子线程1做任务1啦
开始子线程2做任务2啦
任务2-0
主线程结束了
子线程1中的任务1结束啦任务2-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>守护线程的作用在于，当我们需要在程序运行时执行一些后台任务，但是不想让这些任务阻止程序的正常退出时，可以使用守护线程。<br> 例如，在一个Web应用程序中，我们可能需要启动一个守护线程来定期清理缓存或者执行一些后台任务。</p></blockquote><p>需要注意的是，守护线程无法完全控制其执行过程，因此不能用于一些必须在程序退出之前完成的任务。同时，守护线程不能访问一些主线程资源，例如共享内存或者打开的文件，因为这些资源可能会在主线程结束时被释放。</p><h3 id="让主线程等待子线程结束-join" tabindex="-1"><a class="header-anchor" href="#让主线程等待子线程结束-join" aria-hidden="true">#</a> 让主线程等待子线程结束 join</h3><p>假如要让主线程等子线程结束，那么可以使用Thread.join()方法。</p><p>当调用线程对象的<code>join()</code>方法时，主线程将被阻塞，直到该线程执行完成或者超时。</p><p>以下是一个简单的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker thread started&#39;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker thread finished&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建线程对象</span>
t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">)</span>
<span class="token comment"># 启动线程</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待线程结束</span>
t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 主线程继续执行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread finished&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Worker thread started
Worker thread finished
Main thread finished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个子线程<code>worker()</code>，并使用<code>start()</code>方法启动线程。在主线程中，我们调用了线程对象的<code>join()</code>方法，让主线程等待子线程执行完毕。在子线程执行完毕后，主线程继续执行。</p><p>需要注意的是，<code>join()</code>方法还可以设置超时时间，以避免无限期等待线程的执行。例如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker thread started&#39;</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker thread finished&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建线程对象</span>
t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">)</span>
<span class="token comment"># 启动线程</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待线程结束，最多等待3秒钟</span>
t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># 主线程继续执行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread finished&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Worker thread started
Worker thread finished
Main thread finished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们设置了<code>join()</code>方法的超时时间为3秒钟，即使子线程没有执行完成，主线程也会在3秒钟后继续执行。</p><h2 id="线程共享资源可能引起什么问题" tabindex="-1"><a class="header-anchor" href="#线程共享资源可能引起什么问题" aria-hidden="true">#</a> 线程共享资源可能引起什么问题？</h2><p>在线程编程中，多个线程可能同时访问和修改同一个共享资源，例如全局变量、共享内存、文件等。如果没有进行适当的同步操作，就可能会引发以下问题：</p><p><strong>竞态条件（Race Condition）</strong>：当多个线程同时访问和修改同一个共享资源时，就可能会发生竞态条件。这种情况下，由于线程执行顺序的不确定性，可能会导致资源被错误地读取或写入，从而引发程序的错误或崩溃。</p><p><strong>死锁（Deadlock）</strong>：当多个线程都在等待另一个线程释放某个资源时，就可能会发生死锁。这种情况下，程序会永久地阻塞在这个状态下，无法继续执行。</p><p><strong>活锁（Livelock）</strong>：多个线程相互协作，但是由于某些原因无法前进，导致它们不断重试，最终导致系统陷入死循环。活锁是一种比死锁更难以诊断和解决的问题。</p><p>为了避免以上问题，我们可以使用线程同步机制来保护共享资源的访问。</p><p>例如，可以使用<code>锁（Lock）</code>、<code>信号量（Semaphore）</code>、<code>条件变量（Condition）</code>等机制来限制同时访问共享资源的线程数量，从而避免竞态条件。同时，也可以使用一些算法和策略来避免死锁和活锁等问题的发生。</p><p>下面是一些具体的例子，说明在多线程程序中共享资源可能引发的问题：</p><h4 id="竞态条件" tabindex="-1"><a class="header-anchor" href="#竞态条件" aria-hidden="true">#</a> 竞态条件</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread

num <span class="token operator">=</span> <span class="token number">0</span>


<span class="token keyword">def</span> <span class="token function">sum_one</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> num
    <span class="token keyword">for</span> index <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">:</span>
        num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> num


t1 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sum_one<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t2 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sum_one<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">2000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t3 <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>sum_one<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">3000000</span><span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t3<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t3<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num--------&gt;&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>num--------<span class="token operator">&gt;</span> <span class="token number">1580567</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，我们创建了3个线程来执行<code>sum_one()</code>函数，这个三个线程会分别对全局变量<code>x</code>都进行<code>加1000000</code>操作。由于多个线程同时访问和修改<code>x</code>变量，就会产生竞态条件，导致<code>x</code>的最终值可能小于3000000。</p><h4 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁" aria-hidden="true">#</a> 死锁</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

lock1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
lock2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">worker1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 acquiring lock 1&#39;</span><span class="token punctuation">)</span>
    lock1<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 acquired lock 1&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 acquiring lock 2&#39;</span><span class="token punctuation">)</span>
    lock2<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 acquired lock 2&#39;</span><span class="token punctuation">)</span>
    lock2<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    lock1<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">worker2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 acquiring lock 2&#39;</span><span class="token punctuation">)</span>
    lock2<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 acquired lock 2&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 acquiring lock 1&#39;</span><span class="token punctuation">)</span>
    lock1<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 acquired lock 1&#39;</span><span class="token punctuation">)</span>
    lock1<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    lock2<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker1<span class="token punctuation">)</span>
t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker2<span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread finished&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了两个线程<code>worker1()</code>和<code>worker2()</code>，它们都需要同时获取<code>lock1</code>和<code>lock2</code>两个锁来执行操作。由于<code>worker1()</code>先获取<code>lock1</code>，然后尝试获取<code>lock2</code>，而<code>worker2()</code>先获取<code>lock2</code>，然后尝试获取<code>lock1</code>，就可能会产生死锁的情况。</p><h4 id="活锁" tabindex="-1"><a class="header-anchor" href="#活锁" aria-hidden="true">#</a> 活锁</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Account</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> balance<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>balance <span class="token operator">=</span> balance
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">withdraw</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>balance <span class="token operator">&lt;</span> amount<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Withdraw failed: not enough balance&#39;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Withdraw </span><span class="token interpolation"><span class="token punctuation">{</span>amount<span class="token punctuation">}</span></span><span class="token string"> from account&#39;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>balance <span class="token operator">-=</span> amount
            <span class="token keyword">return</span> <span class="token boolean">True</span>

    <span class="token keyword">def</span> <span class="token function">transfer</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> target<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>withdraw<span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> target<span class="token punctuation">.</span>deposit<span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
                    <span class="token keyword">return</span> <span class="token boolean">True</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    self<span class="token punctuation">.</span>deposit<span class="token punctuation">(</span>amount<span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>

    <span class="token keyword">def</span> <span class="token function">deposit</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> amount<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Deposit </span><span class="token interpolation"><span class="token punctuation">{</span>amount<span class="token punctuation">}</span></span><span class="token string"> to account&#39;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>balance <span class="token operator">+=</span> amount
            <span class="token keyword">return</span> <span class="token boolean">True</span>

<span class="token keyword">def</span> <span class="token function">worker1</span><span class="token punctuation">(</span>acc1<span class="token punctuation">,</span> acc2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        acc1<span class="token punctuation">.</span>transfer<span class="token punctuation">(</span>acc2<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1: transfer complete&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">worker2</span><span class="token punctuation">(</span>acc1<span class="token punctuation">,</span> acc2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        acc2<span class="token punctuation">.</span>transfer<span class="token punctuation">(</span>acc1<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2: transfer complete&#39;</span><span class="token punctuation">)</span>

acc1 <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
acc2 <span class="token operator">=</span> Account<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker1<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>acc1<span class="token punctuation">,</span> acc2<span class="token punctuation">)</span><span class="token punctuation">)</span>
t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker2<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>acc1<span class="token punctuation">,</span> acc2<span class="token punctuation">)</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">1</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to accountDeposit <span class="token number">100</span> to account
Worker <span class="token number">1</span>: transfer complete

Worker <span class="token number">2</span>: transfer completeWithdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">1</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">1</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account

Worker <span class="token number">1</span>: transfer completeWithdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">2</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Withdraw <span class="token number">100</span> from account

Deposit <span class="token number">100</span> to accountDeposit <span class="token number">100</span> to account
Worker <span class="token number">2</span>: transfer complete

Worker <span class="token number">1</span>: transfer completeWithdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">2</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account
Worker <span class="token number">2</span>: transfer complete
Withdraw <span class="token number">100</span> from account
Deposit <span class="token number">100</span> to account

<span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了两个账户<code>acc1</code>和<code>acc2</code>，并创建了两个线程<code>worker1()</code>和<code>worker2()</code>，它们不断地在这两个账户之间转账。</p><p>由于<code>transfer()</code>方法中需要获取锁来修改账户余额，但是两个线程的执行顺序可能会导致它们同时等待对方释放锁，从而无法前进，最终导致系统陷入活锁的状态。</p><p>具体来说，假设<code>worker1()</code>执行了<code>acc1.transfer(acc2, 100)</code>，然后进入了<code>transfer()</code>方法中的<code>if self.withdraw(amount)</code>分支，在等待<code>acc1</code>的锁。</p><p>此时，<code>worker2()</code>执行了<code>acc2.transfer(acc1, 100)</code>，然后也进入了<code>transfer()</code>方法中的<code>if self.withdraw(amount)</code>分支，在等待<code>acc2</code>的锁。由于<code>acc1</code>和<code>acc2</code>之间的转账是相互依赖的，因此这两个线程无法前进，会一直重试，最终导致系统陷入活锁的状态。</p><h2 id="多线程的锁机制" tabindex="-1"><a class="header-anchor" href="#多线程的锁机制" aria-hidden="true">#</a> 多线程的锁机制</h2><p>在Python3中，锁机制是一种线程同步机制，它用于协调多个线程的并发访问共享资源，以避免竞态条件的发生。</p><p>Python 3中的多线程锁机制主要是通过<code>threading</code>模块中的<code>Lock</code>、<code>RLock</code>和<code>Semaphore</code>等类来实现的。</p><p><code>Lock</code>类是最基本的锁，它提供了两个基本方法<code>acquire()</code>和<code>release()</code>，用于获取锁和释放锁。当一个线程调用<code>acquire()</code>方法时，如果该锁没有被其他线程获取，则该线程获取到该锁并进入临界区，否则该线程就会被阻塞，直到该锁被其他线程释放为止。</p><p><code>RLock</code>类是可重入锁，它允许同一个线程多次获取该锁，每次获取都必须有对应的释放操作。如果一个线程已经获取到该锁，它可以再次获取该锁而不被阻塞，这就是可重入的特性。<code>RLock</code>类提供了<code>acquire()</code>和<code>release()</code>方法，与<code>Lock</code>类相同。</p><p><code>Semaphore</code>类是信号量，它与锁类似，但可以允许多个线程同时访问某个资源，而不是像锁一样只允许一个线程访问。它提供了<code>acquire()</code>和<code>release()</code>方法，用于获取和释放资源。</p><p>下面是一个使用<code>Lock</code>类的示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

counter <span class="token operator">=</span> <span class="token number">0</span>
lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> counter
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        lock<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        counter <span class="token operator">+=</span> <span class="token number">1</span>
        lock<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>increment<span class="token punctuation">)</span>
    threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>t<span class="token punctuation">)</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们定义了一个全局变量<code>counter</code>和一个<code>Lock</code>对象<code>lock</code>。<code>increment()</code>函数用于在循环中对<code>counter</code>进行100000次加1操作，而在每次加1之前，我们首先获取<code>lock</code>，加1操作完成之后再释放<code>lock</code>。这样保证了多个线程同时对<code>counter</code>进行操作时，不会产生竞争条件。</p><blockquote><p>另外，还需要注意到，对于每个获取锁的线程，一定要记得在合适的地方释放锁，否则就会出现死锁的情况。</p></blockquote><p>在多线程环境中，多个线程可能同时访问某个共享资源，这可能导致竞态条件的发生，从而导致程序出现不可预测的结果。为了避免这种情况的发生，我们可以使用锁机制来控制对共享资源的访问。在使用锁机制时，需要注意以下几点：</p><ol><li>锁是一种互斥机制，即同一时刻只能有一个线程持有锁，其他线程必须等待该线程释放锁后才能继续执行。</li><li>在访问共享资源前，线程需要先获取锁。如果锁已经被其他线程持有，则线程会被阻塞，直到其他线程释放锁。</li><li>在访问共享资源后，线程需要释放锁，以便其他线程可以获取锁并访问共享资源。</li><li>在使用锁时，需要保证所有线程都使用同一个锁对象。</li></ol><p>锁机制可以用于解决多线程程序中的竞态条件、死锁和活锁等问题。</p><h4 id="下面我们分别通过例子来说明锁是如何解决这些问题的。" tabindex="-1"><a class="header-anchor" href="#下面我们分别通过例子来说明锁是如何解决这些问题的。" aria-hidden="true">#</a> 下面我们分别通过例子来说明锁是如何解决这些问题的。</h4><p><strong>竞态条件</strong></p><p>竞态条件指的是多个线程对共享资源的竞争，导致结果的正确性取决于线程的执行顺序。</p><p>比如，在一个多线程程序中，多个线程同时对同一个变量进行加减操作，结果可能取决于每个线程的执行顺序，这就是一个典型的竞态条件。</p><p>通过使用锁，可以保证在任何时刻只有一个线程能够访问共享资源，从而避免竞态条件的出现。下面的例子演示了如何使用锁来解决竞态条件：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Counter</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">increment</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> num_iters<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_iters<span class="token punctuation">)</span><span class="token punctuation">:</span>
        counter<span class="token punctuation">.</span>increment<span class="token punctuation">(</span><span class="token punctuation">)</span>

counter <span class="token operator">=</span> Counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
num_threads <span class="token operator">=</span> <span class="token number">10</span>
num_iters <span class="token operator">=</span> <span class="token number">10000</span>
threads <span class="token operator">=</span> <span class="token punctuation">[</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> num_iters<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_threads<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，多个线程对 Counter 对象的 count 属性进行加 1 操作，这可能会导致竞态条件。</p><p>为了避免这种情况，我们使用了一个锁，通过 with self.lock 来获取锁，这样在任何时刻只有一个线程能够修改 count 属性。</p><p>这样，我们就避免了竞态条件的出现。</p><p><strong>死锁</strong></p><p>死锁是指两个或多个线程在等待彼此释放资源，从而形成僵局的情况。为了解决死锁问题，可以使用锁机制来协调线程对共享资源的访问。具体来说，当一个线程获得锁时，其他线程必须等待该线程释放锁之后才能访问共享资源，从而避免多个线程同时访问同一个共享资源而产生死锁。</p><p>例如，考虑一个简单的场景，其中有两个线程，分别需要获取两个共享资源才能继续执行。假设这两个线程在获取资源时的顺序不同，可能会出现死锁的情况。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

resource_a <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
resource_b <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resource_a<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A acquired resource A and resource B&quot;</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_a<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resource_b<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_a<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread B acquired resource A and resource B&quot;</span><span class="token punctuation">)</span>
    resource_a<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

thread1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_a<span class="token punctuation">)</span>
thread2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_b<span class="token punctuation">)</span>

thread1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

thread1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，<code>thread_a</code>和<code>thread_b</code>分别获取<code>resource_a</code>和<code>resource_b</code>，但是它们的获取顺序不同。因此，如果这两个线程同时运行，就有可能发生死锁的情况，导致程序卡住。</p><p>为了避免死锁，可以使用锁机制。修改上述代码，如下所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

resource_a <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
resource_b <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resource_a<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A acquired resource A and resource B&quot;</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_a<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    resource_a<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread B acquired resource A and resource B&quot;</span><span class="token punctuation">)</span>
    resource_b<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
    resource_a<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

thread1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_a<span class="token punctuation">)</span>
thread2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_b<span class="token punctuation">)</span>

thread1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

thread1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
thread2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，每个线程都按照相同的顺序获取锁，这样就避免了死锁的情况。</p><p><strong>活锁</strong></p><p>活锁是多线程程序中的一种常见问题，它是指线程在尝试协调其操作时一直重试，但最终没有达到进展的状态。一个常见的例子是两个线程互相等待对方释放其持有的资源。</p><p>使用锁是解决活锁问题的一种常见方式。当线程需要访问共享资源时，必须获得相应的锁。如果锁已经被其他线程持有，线程将阻塞直到获得锁为止。这样，当多个线程尝试同时访问同一共享资源时，只有一个线程能够获取锁，其他线程将被阻塞。</p><p>下面是一个使用锁解决活锁问题的例子。假设有两个线程A和B，它们需要同时访问两个共享资源x和y，但由于资源x和y的访问顺序不同，线程A需要先获得x再获得y，而线程B需要先获得y再获得x。如果两个线程尝试同时获取它们需要的资源，就会出现活锁问题。</p><p>使用锁可以解决这个问题。假设每个线程都先获取x的锁，然后再获取y的锁，这样就可以保证每个线程都按照相同的顺序获取资源，避免了死锁和活锁的问题。</p><p>下面是使用锁解决活锁问题的代码示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Resource</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lock1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lock2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">get_x</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lock1<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;x&quot;</span>

    <span class="token keyword">def</span> <span class="token function">get_y</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lock2<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&quot;y&quot;</span>

    <span class="token keyword">def</span> <span class="token function">release_x</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lock1<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">release_y</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>lock2<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_a</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> resource<span class="token punctuation">.</span>get_x<span class="token punctuation">(</span><span class="token punctuation">)</span>
        y <span class="token operator">=</span> resource<span class="token punctuation">.</span>get_y<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread A got resources x and y&quot;</span><span class="token punctuation">)</span>
        resource<span class="token punctuation">.</span>release_x<span class="token punctuation">(</span><span class="token punctuation">)</span>
        resource<span class="token punctuation">.</span>release_y<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">thread_b</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        y <span class="token operator">=</span> resource<span class="token punctuation">.</span>get_y<span class="token punctuation">(</span><span class="token punctuation">)</span>
        x <span class="token operator">=</span> resource<span class="token punctuation">.</span>get_x<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Thread B got resources y and x&quot;</span><span class="token punctuation">)</span>
        resource<span class="token punctuation">.</span>release_y<span class="token punctuation">(</span><span class="token punctuation">)</span>
        resource<span class="token punctuation">.</span>release_x<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    resource <span class="token operator">=</span> Resource<span class="token punctuation">(</span><span class="token punctuation">)</span>
    a <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_a<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    b <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>thread_b<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    a<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    b<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，每个线程都使用相同的锁顺序来获取资源x和y，这样就避免了活锁的问题。</p><blockquote><p>使用锁可能导致执行速度慢，但是保证了线程安全<br> 无论是Lock还是RLock，acquire和release都要成对出现</p></blockquote><h2 id="多线程的通信" tabindex="-1"><a class="header-anchor" href="#多线程的通信" aria-hidden="true">#</a> 多线程的通信</h2><p>Python3 中多线程之间的通信方式有以下几种：</p><h4 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h4><p>在 Python 3 中，可以使用队列（Queue）实现多线程之间的通信。队列是线程安全的数据结构，可以实现线程之间的同步和协作，避免竞争条件和死锁问题。</p><p>Python 内置了 Queue 模块，提供了队列数据结构，它可以用于实现多线程之间的安全通信。可以使用队列的 put() 方法往队列中添加元素，使用 get() 方法从队列中取出元素。</p><p>Queue模块提供了以下几个类：</p><ul><li>Queue：基本队列，实现FIFO（先进先出）的算法。</li><li>LifoQueue：与Queue类似，但是实现了LIFO（后进先出）的算法。</li><li>PriorityQueue：队列中的每个元素都有一个优先级，每次弹出优先级最高的元素。</li><li>SimpleQueue：类似于Queue，但是没有任务协作的功能，也就是说，不能在进程之间使用。</li></ul><p>Queue类中最常用的方法包括：</p><ul><li>put(item[, block[, timeout]])：将一个item放入队列，如果队列已满，block为True则阻塞，直到队列未满或超时；block为False时，则抛出queue.Full异常。</li><li>get([block[, timeout]])：从队列中取出并返回一个item，如果队列为空，block为True则阻塞，直到队列不为空或超时；block为False时，则抛出queue.Empty异常。</li><li>task_done()：通知队列，一个先前放入队列的任务已经完成。</li><li>join()：阻塞主线程，直到队列中所有的任务都被处理完。</li></ul><p>下面举一个简单的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> queue
<span class="token keyword">import</span> time

<span class="token comment"># 生产者线程，负责向队列中添加数据</span>
<span class="token keyword">class</span> <span class="token class-name">ProducerThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> queue<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>queue <span class="token operator">=</span> queue
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            item <span class="token operator">=</span> <span class="token string">&quot;item-&quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>put<span class="token punctuation">(</span>item<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;produced&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment"># 消费者线程，负责从队列中取出数据</span>
<span class="token keyword">class</span> <span class="token class-name">ConsumerThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> queue<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        threading<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>queue <span class="token operator">=</span> queue
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            item <span class="token operator">=</span> self<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> item <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;consumed&quot;</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>

<span class="token comment"># 创建一个队列对象</span>
q <span class="token operator">=</span> queue<span class="token punctuation">.</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 创建两个线程对象，分别作为生产者和消费者</span>
producer <span class="token operator">=</span> ProducerThread<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token string">&quot;Producer&quot;</span><span class="token punctuation">)</span>
consumer <span class="token operator">=</span> ConsumerThread<span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token string">&quot;Consumer&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 启动线程</span>
producer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
consumer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 等待生产者线程完成生产</span>
producer<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 停止消费者线程</span>
q<span class="token punctuation">.</span>put<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span>
consumer<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们创建了一个生产者线程和一个消费者线程。生产者线程负责向队列中添加数据，消费者线程负责从队列中取出数据。生产者线程每隔一秒钟向队列中添加一个字符串，消费者线程每隔半秒钟从队列中取出一个字符串。为了避免消费者线程在队列为空时陷入死循环，我们在队列的末尾放置了一个 None 值，当消费者线程取出该值时，就会退出循环。</p><h4 id="事件-event" tabindex="-1"><a class="header-anchor" href="#事件-event" aria-hidden="true">#</a> 事件（Event）</h4><p>事件是一种同步对象，可以用于多线程之间的通信，常用于控制线程的执行顺序。可以使用事件的 set() 方法设置事件，使用 wait() 方法等待事件被设置，使用 clear() 方法清除事件。</p><p>以下是一个使用事件实现多线程间通信的示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token keyword">import</span> threading


<span class="token keyword">def</span> <span class="token function">worker1</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 is waiting...\\n&#39;</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 1 is running...\\n&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">worker2</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 is waiting...\\n&#39;</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Worker 2 is running...\\n&#39;</span><span class="token punctuation">)</span>


event <span class="token operator">=</span> threading<span class="token punctuation">.</span>Event<span class="token punctuation">(</span><span class="token punctuation">)</span>

t1 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker1<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
t2 <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker2<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main thread is sleeping...\\n&#39;</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Worker <span class="token number">1</span> is waiting<span class="token punctuation">..</span>.
Worker <span class="token number">2</span> is waiting<span class="token punctuation">..</span>.
Main thread is sleeping<span class="token punctuation">..</span>.

Worker <span class="token number">1</span> is running<span class="token punctuation">..</span>.
Worker <span class="token number">2</span> is running<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该代码创建了两个线程，它们都等待事件被设置，当事件被设置后，它们才开始执行。在主线程中，先休眠了 3 秒钟，然后设置了事件，从而唤醒了两个线程。在实际应用中，事件可以用于控制线程的执行顺序，或者实现线程之间的协作。</p><h4 id="锁-lock" tabindex="-1"><a class="header-anchor" href="#锁-lock" aria-hidden="true">#</a> 锁（Lock）</h4><p>使用锁可以实现多线程间的通信，可以通过共享变量和锁的机制来实现线程间的同步和互斥。具体来说，一个线程需要访问共享变量时，首先需要获得锁，然后读取或修改共享变量的值，完成操作后再释放锁，以便其他线程访问共享变量。</p><ul><li>下面是一个简单的示例代码，其中两个线程共享一个变量 <code>counter</code>，通过锁的机制来实现对该变量的互斥访问。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">CounterThread</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> lock<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> lock

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">global</span> counter
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
                counter <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>
    counter <span class="token operator">=</span> <span class="token number">0</span>
    threads <span class="token operator">=</span> <span class="token punctuation">[</span>CounterThread<span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
        t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;counter = </span><span class="token interpolation"><span class="token punctuation">{</span>counter<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>counter <span class="token operator">=</span> <span class="token number">1000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这个例子中，<code>CounterThread</code> 是一个继承自 <code>threading.Thread</code> 的线程类，它有一个成员变量 <code>lock</code>，用于控制对共享变量 <code>counter</code> 的访问。在 <code>run</code> 方法中，线程会循环执行一定次数的加操作，每次操作前会获取锁并对 <code>counter</code> 做加一操作，完成后再释放锁。在主线程中创建了 10 个 <code>CounterThread</code> 线程，并启动它们进行计数操作。在所有线程都执行完毕后，打印出 <code>counter</code> 的最终值。</p><p>使用锁可以确保多个线程对共享变量的访问是互斥的，从而避免竞态条件和数据损坏等问题。但是，使用锁也可能会导致性能问题和死锁等问题，因此需要谨慎使用，并根据实际情况选择合适的同步机制。</p><ul><li>或者</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Counter</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
        self<span class="token punctuation">.</span>lock <span class="token operator">=</span> threading<span class="token punctuation">.</span>Lock<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">increment</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">with</span> self<span class="token punctuation">.</span>lock<span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        counter<span class="token punctuation">.</span>increment<span class="token punctuation">(</span><span class="token punctuation">)</span>

counter <span class="token operator">=</span> Counter<span class="token punctuation">(</span><span class="token punctuation">)</span>
threads <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>worker<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    threads<span class="token punctuation">.</span>append<span class="token punctuation">(</span>t<span class="token punctuation">)</span>

<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> t <span class="token keyword">in</span> threads<span class="token punctuation">:</span>
    t<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们创建了一个 <code>Counter</code> 类，其中包含一个整数 <code>value</code> 和一个锁对象 <code>lock</code>。 <code>increment</code> 方法使用 <code>with</code> 语句获取锁并增加 <code>value</code> 的值。</p><p>我们还创建了 10 个线程，每个线程都会调用 <code>worker</code> 函数。这个函数会循环 10000 次调用 <code>increment</code> 方法来增加 <code>value</code> 的值。</p><p>由于每个线程都会获取锁来访问共享资源，因此只有一个线程可以访问 <code>increment</code> 方法，避免了多个线程同时修改 <code>value</code> 的值，从而确保了线程安全。最终的输出结果应该是<code>100000</code>，即<code>10</code>个线程分别增加了<code>10000</code>次。</p><h4 id="条件变量-condition-实现多线程间的通信" tabindex="-1"><a class="header-anchor" href="#条件变量-condition-实现多线程间的通信" aria-hidden="true">#</a> 条件变量（Condition）实现多线程间的通信</h4><p>条件变量（Condition）是Python多线程编程中常用的线程间通信机制之一，它可以用于线程间的通信和同步，提供了一个线程等待另一个线程通知其发生了某个事件的方法。</p><p>下面是一个使用条件变量实现多线程间通信的示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> cond<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token operator">=</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>cond <span class="token operator">=</span> cond

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> self<span class="token punctuation">.</span>cond<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> producing item </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>cond<span class="token punctuation">.</span>notify<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 通知消费者线程</span>
                self<span class="token punctuation">.</span>cond<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 等待消费者线程通知</span>

<span class="token keyword">class</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> cond<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token operator">=</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>cond <span class="token operator">=</span> cond

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> self<span class="token punctuation">.</span>cond<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>cond<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 等待生产者线程通知</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> consuming item </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
                self<span class="token punctuation">.</span>cond<span class="token punctuation">.</span>notify<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 通知生产者线程</span>

cond <span class="token operator">=</span> threading<span class="token punctuation">.</span>Condition<span class="token punctuation">(</span><span class="token punctuation">)</span>
producer <span class="token operator">=</span> Producer<span class="token punctuation">(</span><span class="token string">&quot;Producer&quot;</span><span class="token punctuation">,</span> cond<span class="token punctuation">)</span>
consumer <span class="token operator">=</span> Consumer<span class="token punctuation">(</span><span class="token string">&quot;Consumer&quot;</span><span class="token punctuation">,</span> cond<span class="token punctuation">)</span>
producer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
consumer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
producer<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
consumer<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例代码中，生产者线程通过<code>cond.notify()</code>方法通知消费者线程，消费者线程通过<code>cond.wait()</code>方法等待生产者线程的通知。条件变量<code>cond</code>用于实现线程之间的同步和通信，生产者线程和消费者线程在共享同一把锁的情况下，通过<code>with self.cond:</code>语句获取条件变量的锁并进入临界区，确保线程安全。</p><h4 id="信号量-semaphore-实现多线程间的通信" tabindex="-1"><a class="header-anchor" href="#信号量-semaphore-实现多线程间的通信" aria-hidden="true">#</a> 信号量（Semaphore）实现多线程间的通信</h4><p>信号量（Semaphore）是一种用于控制并发访问共享资源的同步原语。它是一种计数器，用于控制多个线程对共享资源的访问。信号量维护一个计数器，初始值为一个非负整数，每当一个线程访问共享资源时，计数器减1；当计数器为0时，所有试图访问共享资源的线程都会被阻塞，直到某个线程释放了共享资源，此时计数器加1，被阻塞的线程才有机会继续执行。</p><p>在 Python 中，我们可以使用 <code>threading.Semaphore</code> 类来创建信号量对象。该类的构造函数接受一个整数作为参数，表示初始计数器的值。<code>Semaphore</code> 类有两个方法，<code>acquire()</code> 和 <code>release()</code>，分别用于获取和释放信号量。</p><p>以下是使用信号量实现的简单示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">class</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> sem<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token operator">=</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>buf <span class="token operator">=</span> buf
        self<span class="token punctuation">.</span>sem <span class="token operator">=</span> sem

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>sem<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>buf<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> produced </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>sem<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>threading<span class="token punctuation">.</span>Thread<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> sem<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>name<span class="token operator">=</span>name<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>buf <span class="token operator">=</span> buf
        self<span class="token punctuation">.</span>sem <span class="token operator">=</span> sem

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>sem<span class="token punctuation">.</span>acquire<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>buf<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>sem<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span>
            item <span class="token operator">=</span> self<span class="token punctuation">.</span>buf<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> consumed </span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>sem<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    buf <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    sem <span class="token operator">=</span> threading<span class="token punctuation">.</span>Semaphore<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    producer <span class="token operator">=</span> Producer<span class="token punctuation">(</span><span class="token string">&quot;Producer&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> sem<span class="token punctuation">)</span>
    consumer1 <span class="token operator">=</span> Consumer<span class="token punctuation">(</span><span class="token string">&quot;Consumer1&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> sem<span class="token punctuation">)</span>
    consumer2 <span class="token operator">=</span> Consumer<span class="token punctuation">(</span><span class="token string">&quot;Consumer2&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> sem<span class="token punctuation">)</span>
    producer<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    producer<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例代码中，有一个生产者线程和两个消费者线程。生产者线程向共享缓冲区中添加数据，而消费者线程从缓冲区中获取数据。为了避免竞争条件，我们使用了信号量。</p><p>在生产者线程中，当信号量可用时，它会获取信号量并添加数据到缓冲区中，然后释放信号量。在消费者线程中，当信号量可用时，它会获取信号量并从缓冲区中获取数据，然后释放信号量。</p><p>通过使用信号量，我们可以确保生产者和消费者线程之间的同步，从而避免了竞争条件和死锁问题。</p><h4 id="管道-pipe" tabindex="-1"><a class="header-anchor" href="#管道-pipe" aria-hidden="true">#</a> 管道（Pipe）</h4><p>在 Python3 中，可以使用 <code>multiprocessing</code> 模块中的 <code>Pipe</code> 类来实现多进程间的通信，也可以用 <code>multiprocessing.connection</code> 模块来创建多进程间的通信通道。下面的例子是用 <code>Pipe</code> 类来实现多线程间的通信：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading
<span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Pipe

<span class="token keyword">def</span> <span class="token function">producer</span><span class="token punctuation">(</span>pipe<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        pipe<span class="token punctuation">.</span>send<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> produced </span><span class="token interpolation"><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    pipe<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">consumer</span><span class="token punctuation">(</span>pipe<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            item <span class="token operator">=</span> pipe<span class="token punctuation">.</span>recv<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>threading<span class="token punctuation">.</span>current_thread<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> consumed </span><span class="token interpolation"><span class="token punctuation">{</span>item<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> EOFError<span class="token punctuation">:</span>
            <span class="token keyword">break</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    producer_conn<span class="token punctuation">,</span> consumer_conn <span class="token operator">=</span> Pipe<span class="token punctuation">(</span><span class="token punctuation">)</span>
    producer_thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>producer<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>producer_conn<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    consumer_thread <span class="token operator">=</span> threading<span class="token punctuation">.</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>consumer<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>consumer_conn<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    producer_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer_thread<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    producer_thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    consumer_thread<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了两个线程，一个生产者线程和一个消费者线程。它们之间共享一个管道（<code>Pipe</code>），其中生产者将数据写入管道，而消费者从管道中读取数据。当生产者完成其工作后，它会关闭管道以通知消费者停止运行。</p><p>需要注意的是，在 <code>Pipe</code> 中，发送和接收操作是阻塞的。因此，在发送或接收数据时，如果没有可用的空间或数据，线程将被阻塞，直到有数据可用或空间可用。</p><h2 id="定时器timer" tabindex="-1"><a class="header-anchor" href="#定时器timer" aria-hidden="true">#</a> 定时器Timer</h2><p>定时器（Timer）是Python中的一个线程类，它可以在一定时间之后调用指定的函数或方法。Timer是继承自Thread类的，因此可以像Thread一样启动、停止和等待它。</p><p>定时器的构造函数如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">threading</span><span class="token punctuation">.</span>Timer<span class="token punctuation">(</span>interval<span class="token punctuation">,</span> function<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>interval</code>表示定时器的时间间隔（秒），<code>function</code>表示定时器超时后要调用的函数或方法。<code>args</code>和<code>kwargs</code>是传递给函数或方法的参数。</p><p>下面是一个使用定时器的例子：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> threading

<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> threading<span class="token punctuation">.</span>Timer<span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">,</span> hello<span class="token punctuation">)</span>
t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># 启动定时器，等待5秒后调用hello函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个程序中，我们创建了一个定时器<code>t</code>，它会在5秒后调用<code>hello</code>函数，并启动定时器。程序将在启动定时器后立即继续执行，而定时器则在后台等待5秒，然后调用<code>hello</code>函数。</p><p>如果我们想要停止定时器，可以使用<code>cancel()</code>方法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>t<span class="token punctuation">.</span>cancel<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 停止定时器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，如果定时器已经超时并且在调用函数之前被取消，那么函数将不会被调用。因此，需要在调用<code>cancel()</code>方法之前等待定时器超时。</p><h2 id="python3线程池" tabindex="-1"><a class="header-anchor" href="#python3线程池" aria-hidden="true">#</a> python3线程池</h2><h4 id="concurrent-futures实现多线程" tabindex="-1"><a class="header-anchor" href="#concurrent-futures实现多线程" aria-hidden="true">#</a> concurrent.futures实现多线程</h4><p>Python 3中的线程池是一种常见的多线程编程模型，可以提高多线程程序的性能和可维护性。在Python 3中，线程池可以通过标准库中的<code>concurrent.futures</code>模块来实现。</p><p><code>concurrent.futures</code>模块定义了两个类：<code>ThreadPoolExecutor</code>和<code>ProcessPoolExecutor</code>。这两个类都实现了Python 3中的执行器(Executor)接口，提供了一种方便的方式来异步执行函数或方法，并返回其结果。</p><p><strong>Exectuor</strong> 提供了如下常用方法：</p><ul><li><code>submit(fn, *args, **kwargs)</code>：将 fn 函数提交给线程池。*args 代表传给 fn 函数的参数，*kwargs 代表以关键字参数的形式为 fn 函数传入参数。</li><li><code>map(func, *iterables, timeout=None, chunksize=1)</code>：该函数类似于全局函数 <code>map(func, *iterables)</code>，只是该函数将会启动多个线程，以异步方式立即对 iterables 执行 map 处理。超时抛出TimeoutError错误。返回每个函数的结果，<strong>注意不是返回future</strong>。</li><li><code>shutdown(wait=True)</code>：关闭线程池。关闭之后线程池不再接受新任务，但会将之前提交的任务完成。</li></ul><p>程序将task函数submit给线程池后，会返回一个Future对象，Future主要用来获取task的返回值。</p><p><strong>Future</strong> 提供了如下方法：</p><ul><li><code>cancel()</code>：取消该 Future 代表的线程任务。如果该任务正在执行，不可取消，则该方法返回 False；否则，程序会取消该任务，并返回 True。</li><li><code>cancelled()</code>：返回 Future 代表的线程任务是否被成功取消。</li><li><code>running()</code>：如果该 Future 代表的线程任务正在执行、不可被取消，该方法返回 True。</li><li><code>done()</code>：如果该 Funture 代表的线程任务被成功取消或执行完成，则该方法返回 True。</li><li><code>result(timeout=None)</code>：获取该 Future 代表的线程任务最后返回的结果。如果 Future 代表的线程任务还未完成，该方法将会阻塞当前线程，其中 timeout 参数指定最多阻塞多少秒。超时抛出TimeoutError，取消抛出CancelledError。</li><li><code>exception(timeout=None)</code>：获取该 Future 代表的线程任务所引发的异常。如果该任务成功完成，没有异常，则该方法返回 None。</li><li><code>add_done_callback(fn)</code>：为该 Future 代表的线程任务注册一个“回调函数”，当该任务成功完成时，程序会自动触发该 fn 函数，参数是future。</li></ul><p>使用线程池来执行线程任务的步骤如下：</p><ol><li>调用 ThreadPoolExecutor 类的构造器创建一个线程池。</li><li>定义一个普通函数作为线程任务。</li><li>调用 ThreadPoolExecutor 对象的 submit() 方法来提交线程任务。</li><li>当不想提交任何任务时，调用 ThreadPoolExecutor 对象的 shutdown() 方法来关闭线程池。</li></ol><p><code>ThreadPoolExecutor</code>是一个线程池执行器，可以用来执行异步任务，它管理着一个线程池，其中包含若干个线程。当一个任务被提交给执行器时，执行器会将其分配给一个线程来执行。当线程池中的所有线程都在执行任务时，新提交的任务会被放入队列中，直到有可用的线程为止。</p><p>以下是一个使用<code>ThreadPoolExecutor</code>的简单示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> concurrent<span class="token punctuation">.</span>futures <span class="token keyword">import</span> ThreadPoolExecutor
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">worker</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Worker </span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string"> starting&quot;</span></span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Worker </span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string"> finished&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> ThreadPoolExecutor<span class="token punctuation">(</span>max_workers<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">as</span> executor<span class="token punctuation">:</span>
        futures <span class="token operator">=</span> <span class="token punctuation">[</span>executor<span class="token punctuation">.</span>submit<span class="token punctuation">(</span>worker<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> future <span class="token keyword">in</span> concurrent<span class="token punctuation">.</span>futures<span class="token punctuation">.</span>as_completed<span class="token punctuation">(</span>futures<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> future<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Task raised an exception: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span> 
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Task returned: </span><span class="token interpolation"><span class="token punctuation">{</span>result<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们创建了一个线程池执行器，并指定了最大线程数为3。然后我们循环提交5个任务给执行器，每个任务都是一个<code>worker</code>函数，并传入不同的参数。由于我们设置了最大线程数为3，所以只会有3个任务同时被执行，另外2个任务会在之后的某个时间点被执行。</p><p>执行结果会存储在<code>Future</code>对象中，我们可以通过<code>as_completed()</code>方法获取任务的执行结果。如果任务执行过程中发生了异常，<code>result()</code>方法会抛出相应的异常。否则，它会返回任务的执行结果。</p><p><code>ThreadPoolExecutor</code>还有其他一些有用的方法，例如<code>shutdown()</code>方法可以等待所有已提交的任务执行完毕并关闭线程池。</p><p>总之，Python 3中的线程池提供了一种方便的方式来执行异步任务，可以大大提高多线程程序的性能和可维护性。</p><h4 id="使用线程池的好处和场景" tabindex="-1"><a class="header-anchor" href="#使用线程池的好处和场景" aria-hidden="true">#</a> 使用线程池的好处和场景</h4><p>使用线程池的优点是可以避免线程的频繁创建和销毁，从而提高线程的利用率，减少系统的开销。因此，当需要频繁执行短时间的任务时，可以考虑使用线程池。例如：</p><ol><li>网络服务器：在服务器端接收客户端请求后，可以使用线程池来处理客户端请求，以提高服务器的并发性能。</li><li>图像处理：在图像处理过程中，需要频繁启动和停止线程来处理每个像素点的计算，使用线程池可以减少线程的创建和销毁，提高处理效率。</li><li>数据库连接池：在数据库操作中，需要频繁创建和销毁数据库连接，使用线程池可以减少这种开销，提高数据库操作的效率。</li></ol><p>总之，当需要频繁执行短时间的任务时，可以考虑使用线程池来优化程序性能。</p><blockquote><p>喜欢这篇文章的话，就点个关注吧，或者关注一下我的公众号『<strong>海哥python</strong>』也可以，会持续分享高质量Python文章，以及其它内容。</p></blockquote><figure><img src="`+p+'" alt="海哥python 官方公众号" tabindex="0" loading="lazy"><figcaption>海哥python 官方公众号</figcaption></figure>',182);function b(h,g){const a=c("ExternalLinkIcon");return i(),l("div",null,[r,n("p",null,[s("使用多线程，可以同时进行多项任务，可以使用户界面更友好，还可以后台执行某些用时长的任务，同时具有易于通信的优点。（对于GIL以及Python多线程对于效率的影响讨论可看知乎"),n("a",d,[s("为什么有人说 Python 的多线程是鸡肋呢？ - 知乎 (zhihu.com)"),e(a)]),s("）")]),k,n("blockquote",null,[n("p",null,[n("a",v,[s("https://docs.python.org/3/library/threading.html"),e(a)])])]),m])}const _=o(u,[["render",b],["__file","Python多线程详解.html.vue"]]);export{_ as default};
