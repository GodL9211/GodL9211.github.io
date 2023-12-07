import{_ as n}from"./海哥python-6b198e2b.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as p}from"./app-d263494b.js";const e={},o=p(`<h2 id="协程特性" tabindex="-1"><a class="header-anchor" href="#协程特性" aria-hidden="true">#</a> 协程特性</h2><p>在Go语言中，协程（goroutine）是一种轻量级的线程，由Go运行时系统管理。协程通过<code>go</code>关键字启动，可以理解为一种并发执行的函数。以下是Golang中协程的一些功能特性：</p><ol><li><strong>轻量级</strong>：协程是轻量级的线程，相对于传统的线程而言，创建和销毁的开销非常小。因此，可以创建数千甚至数百万个协程而不会导致系统资源的枯竭。</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中执行的代码</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 主线程中的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述例子中，通过<code>go</code>关键字启动了一个协程，该协程会异步执行匿名函数。</p><ol start="2"><li><strong>并发执行</strong>：协程允许在程序中并发执行多个任务，而不需要显式地管理线程。Go运行时会在适当的时候进行调度，确保协程能够充分利用系统资源。</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token function">printNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">printLetters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printLetters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> char <span class="token operator">:=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> char <span class="token operator">&lt;=</span> <span class="token char">&#39;e&#39;</span><span class="token punctuation">;</span> char<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述例子中，<code>printNumbers</code>和<code>printLetters</code>两个函数可以同时执行，实现了并发执行。</p><ol start="3"><li><strong>通信通过共享内存，不是通过显式锁</strong>：Go语言提倡使用通信来共享数据，而不是共享数据来通信。这通过使用通道（Channel）实现，避免了显式的锁和临界区。</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ch <span class="token operator">&lt;-</span> <span class="token number">42</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    result <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述例子中，通过通道进行协程之间的通信，避免了共享数据的竞态条件。</p><ol start="4"><li><strong>协程之间的同步</strong>：通过通道或其他同步原语，可以在协程之间实现同步。这使得可以有效地协调协程的执行顺序和共享资源的访问。</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中的工作</span>
        ch <span class="token operator">&lt;-</span> <span class="token string">&quot;Done&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 等待协程完成</span>
    result <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述例子中，主协程通过通道等待子协程完成。</p><h2 id="协程防坑指南" tabindex="-1"><a class="header-anchor" href="#协程防坑指南" aria-hidden="true">#</a> 协程防坑指南</h2><p>当使用协程进行并发编程时，有一些最佳实践和防坑指南可以帮助确保代码的可靠性和性能：</p><ol><li><p><strong>避免裸露的协程</strong>：协程的生命周期应该由调用者管理，避免在函数内部启动协程而不等待其完成。在函数返回之前，应该确保协程已经执行完毕。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 不推荐的写法</span>
<span class="token keyword">func</span> <span class="token function">badPractice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中的工作</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 函数返回，协程可能尚未执行完毕</span>
<span class="token punctuation">}</span>

<span class="token comment">// 推荐的写法</span>
<span class="token keyword">func</span> <span class="token function">goodPractice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
        <span class="token comment">// 协程中的工作</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 等待协程完成</span>
    <span class="token operator">&lt;-</span>done
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用通道进行协程之间的通信</strong>：避免使用共享内存进行协程之间的通信，而是使用通道。这有助于避免竞态条件和确保协程安全访问共享资源。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 不推荐的写法</span>
<span class="token keyword">var</span> sharedData <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">badPractice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中修改共享数据</span>
        sharedData <span class="token operator">=</span> <span class="token number">42</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 主线程中访问共享数据</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sharedData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 推荐的写法</span>
<span class="token keyword">func</span> <span class="token function">goodPractice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中通过通道传递数据</span>
        ch <span class="token operator">&lt;-</span> <span class="token number">42</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 主线程中从通道接收数据</span>
    result <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>使用<code>sync.WaitGroup</code>等待协程完成</strong>：当需要等待一组协程完成时，可以使用<code>sync.WaitGroup</code>。确保在协程内部调用<code>Done</code>来减少计数，以及在主线程中调用<code>Wait</code>等待所有协程完成。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;sync&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 协程中的工作</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 等待所有协程完成</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>避免泄漏协程</strong>：确保协程的退出条件明确，以防止协程泄漏。在协程内部使用<code>defer</code>语句确保资源的释放。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">leakyGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 协程中的工作</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 没有等待协程完成</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">nonLeakyGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    done <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> <span class="token function">close</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
        <span class="token comment">// 协程中的工作</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;-</span>done <span class="token comment">// 等待协程完成</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>合理使用<code>select</code>语句</strong>：在协程中使用<code>select</code>语句来处理多个通道的情况，确保协程可以及时退出或执行其他操作。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span>input <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> stop <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        <span class="token keyword">select</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> value <span class="token operator">:=</span> <span class="token operator">&lt;-</span>input<span class="token punctuation">:</span>
            <span class="token comment">// 处理输入</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">case</span> <span class="token operator">&lt;-</span>stop<span class="token punctuation">:</span>
            <span class="token comment">// 收到停止信号</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>避免直接捕获<code>panic</code></strong>：在协程中避免直接捕获<code>panic</code>，而是使用恢复（recover）机制来处理异常。直接捕获<code>panic</code>可能导致不可预测的行为。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">safeGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> r <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> r <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理panic</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Recovered from panic:&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 协程中的工作</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;Something went wrong&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>通过遵循这些最佳实践和防坑指南，可以确保协程的安全、可靠、高效地进行并发编程。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>总的来说，协程是Go语言中的一个重要特性，通过它可以轻松实现并发编程而不用担心传统线程的复杂性和开销。通过通道和其他同步原语，可以实现协程之间的通信和同步，使得并发编程更加简洁和安全。</p><hr><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22),c=[o];function i(l,u){return a(),t("div",null,c)}const v=s(e,[["render",i],["__file","21.协程.html.vue"]]);export{v as default};
