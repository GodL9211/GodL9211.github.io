import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-41afd04a.js";const t={},i=e(`<h2 id="无限循环" tabindex="-1"><a class="header-anchor" href="#无限循环" aria-hidden="true">#</a> 无限循环</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>i <span class="token operator">:=</span> <span class="token number">1</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function p(c,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","8.for循环.html.vue"]]);export{u as default};
