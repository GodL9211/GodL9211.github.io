import{_ as n}from"./海哥python-6b198e2b.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as t}from"./app-35175fd5.js";const o={},i=t(`<p>在Go语言中，你可以使用<code>type</code>关键字来创建自定义数据类型和设置类型别名。下面是两者的区别：</p><ol><li><strong>自定义数据类型</strong>：通过<code>type</code>关键字可以创建一个全新的数据类型。例如，你可以创建一个表示温度的新类型：</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 自定义类型</span>
<span class="token keyword">type</span> Celsius <span class="token builtin">float64</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> temperature Celsius <span class="token operator">=</span> <span class="token number">23.5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Temperature:&quot;</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code>Celsius</code>被定义为一个新的<code>float64</code>类型，但是它不能直接与<code>float64</code>混用，需要进行显式的类型转换。</p><ol start="2"><li><strong>类型别名</strong>：使用<code>type</code>关键字也可以创建类型别名，它们只是已有类型的别名，没有创建新的类型。这允许你为现有类型提供更具描述性的名称，而不引入新的类型。</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// 类型别名</span>
<span class="token keyword">type</span> Temperature <span class="token operator">=</span> <span class="token builtin">float64</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> temperature Temperature <span class="token operator">=</span> <span class="token number">23.5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Temperature:&quot;</span><span class="token punctuation">,</span> temperature<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>Temperature</code>是<code>float64</code>的别名，它可以直接与<code>float64</code>混用而无需显式转换。</p><p>总的来说，自定义数据类型和类型别名都可以通过<code>type</code>关键字实现，但它们有不同的语义和用途。</p><hr><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),p=[i];function c(l,r){return a(),e("div",null,p)}const k=s(o,[["render",c],["__file","18.自定义数据结构.html.vue"]]);export{k as default};
