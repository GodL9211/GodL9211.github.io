import{_ as n}from"./海哥python-6b198e2b.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,f as i}from"./app-ef3f8a6c.js";const t={},o=i(`<h2 id="无限循环" tabindex="-1"><a class="header-anchor" href="#无限循环" aria-hidden="true">#</a> 无限循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>i <span class="token operator">:=</span> <span class="token number">1</span>

<span class="token keyword">for</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  i<span class="token operator">++</span>
  <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">10</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件循环" tabindex="-1"><a class="header-anchor" href="#条件循环" aria-hidden="true">#</a> 条件循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>i <span class="token operator">:=</span> <span class="token number">1</span>
<span class="token keyword">for</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  i<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标准for循环" tabindex="-1"><a class="header-anchor" href="#标准for循环" aria-hidden="true">#</a> 标准for循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',8),p=[o];function c(l,r){return a(),e("div",null,p)}const v=s(t,[["render",c],["__file","8.for循环.html.vue"]]);export{v as default};
