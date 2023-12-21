import{_ as n}from"./海哥python-6b198e2b.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as t}from"./app-7702e136.js";const p={},i=t(`<h2 id="标准函数写法" tabindex="-1"><a class="header-anchor" href="#标准函数写法" aria-hidden="true">#</a> 标准函数写法</h2><p><code>参数 参数类型 返回的类型</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getSum</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">{</span>
    sum <span class="token operator">:=</span> n1 <span class="token operator">+</span> n2
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    res <span class="token operator">:=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>实参</code>：给函数实际传递的参数，例如上面的1，2<br><code>形参</code>：形式上的参数，例如上面的n1和n2</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><blockquote><p>golang函数支持返回多个返回值</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getRes</span><span class="token punctuation">(</span>n1 <span class="token builtin">int</span><span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">:=</span> n1 <span class="token operator">+</span> n2
  difference <span class="token operator">:=</span> n1 <span class="token operator">-</span> n2
  <span class="token keyword">return</span> sum<span class="token punctuation">,</span> difference
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个及以上的返回值，上面类型要加括号</p><h2 id="返回值命名" tabindex="-1"><a class="header-anchor" href="#返回值命名" aria-hidden="true">#</a> 返回值命名</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getRes</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum<span class="token punctuation">,</span> difference <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2
  difference <span class="token operator">=</span> n1 <span class="token operator">-</span> n2
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数也是一种数据类型" tabindex="-1"><a class="header-anchor" href="#函数也是一种数据类型" aria-hidden="true">#</a> 函数也是一种数据类型</h2><p>在Go语言中，<code>函数是一等公民（first-class citizens）</code>，这意味着函数在语言中被视为一种基本的数据类型，可以像变量一样被处理。</p><p><code>这种特性允许你将函数赋值给变量，将函数作为参数传递给其他函数，从函数中返回函数，以及在数据结构中存储函数等。</code></p><h3 id="函数变量" tabindex="-1"><a class="header-anchor" href="#函数变量" aria-hidden="true">#</a> 函数变量</h3><blockquote><p>你可以将函数分配给变量，这使得你可以像操作其他变量一样操作函数。</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将函数分配给变量</span>
    <span class="token keyword">var</span> sumFunc <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
    sumFunc <span class="token operator">=</span> add

    <span class="token comment">// 使用变量调用函数</span>
    result <span class="token operator">:=</span> <span class="token function">sumFunc</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// 输出 5</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的内存地址" tabindex="-1"><a class="header-anchor" href="#函数的内存地址" aria-hidden="true">#</a> 函数的内存地址</h3><blockquote><p>在Go语言中，函数也有一个内存地址，你可以通过取函数的地址来获取它。这对于将函数作为参数传递给其他函数或在数据结构中存储函数时非常有用。例如：</p></blockquote><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">getRes</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2 <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum<span class="token punctuation">,</span> difference <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2
  difference <span class="token operator">=</span> n1 <span class="token operator">-</span> n2
  <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;getRes is %v, type is %T&quot;</span><span class="token punctuation">,</span> getRes<span class="token punctuation">,</span> getRes<span class="token punctuation">)</span>
  <span class="token comment">//getRes is 0x4aca00, type is func(int, int) (int, int)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="立即调用的匿名函数" tabindex="-1"><a class="header-anchor" href="#立即调用的匿名函数" aria-hidden="true">#</a> 立即调用的匿名函数</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建并立即调用匿名函数</span>
    result <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// 输出 7</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23),c=[i];function o(l,u){return a(),e("div",null,c)}const v=s(p,[["render",o],["__file","10.函数.html.vue"]]);export{v as default};
