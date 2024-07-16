import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as l,a as s,b as n,e,f as t}from"./app-967d79b2.js";const c={},u=t('<h1 id="重写drf的to-representation和to-internal-value方法有什么用途" tabindex="-1"><a class="header-anchor" href="#重写drf的to-representation和to-internal-value方法有什么用途" aria-hidden="true">#</a> 重写DRF的to_representation和to_internal_value方法有什么用途?</h1><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><ul><li><a href="#to_representation%E6%96%B9%E6%B3%95">to_representation方法</a></li><li><a href="#to_internal_value%E6%96%B9%E6%B3%95">to_internal_value方法</a></li><li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%8F%E5%88%97%E5%8C%96%E5%99%A8%E7%B1%BB%E5%AD%97%E6%AE%B5">自定义序列化器类字段</a></li><li><a href="#%E5%B0%8F%E7%BB%93">小结</a></li></ul>',3),r={href:"https://so.csdn.net/so/search?q=%E5%BA%8F%E5%88%97%E5%8C%96&spm=1001.2101.3001.7020",title:"序列化",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"BaseSerializer",-1),k=s("code",null,"to_representation()",-1),v=s("code",null,"to_internal_value()",-1),m={href:"https://so.csdn.net/so/search?q=%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96&spm=1001.2101.3001.7020",title:"反序列化",target:"_blank",rel:"noopener noreferrer"},b=t(`<ol><li><code>to_representation()</code> 允许我们改变序列化的输出。</li><li><code>to_internal_value()</code> 允许改变我们反序列化的输出。</li></ol><p>那么这两个方法该如何使用呢? 小编我今天就带你看一看！ </p><p>假设我们有如下一个文章模型(Article)：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>auth<span class="token punctuation">.</span>models <span class="token keyword">import</span> User
<span class="token keyword">from</span> django<span class="token punctuation">.</span>db <span class="token keyword">import</span> models
 
 
<span class="token keyword">class</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>models<span class="token punctuation">.</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>
    title <span class="token operator">=</span> models<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">256</span><span class="token punctuation">)</span>
    body <span class="token operator">=</span> models<span class="token punctuation">.</span>TextField<span class="token punctuation">(</span><span class="token punctuation">)</span>
    liked_by <span class="token operator">=</span> models<span class="token punctuation">.</span>ManyToManyField<span class="token punctuation">(</span>to<span class="token operator">=</span>User<span class="token punctuation">)</span>
 
 
    <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文章资源有 <code>title</code>, <code>body</code>和 <code>liked_by</code>  三个字段。<code>liked_by</code> 代表喜欢该文章的用户对象id列表。</p><p>我们的序列化器<code>ArticleSerializer</code>类如下所示：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Article
 
 
<span class="token keyword">class</span> <span class="token class-name">ArticleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Article
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们使用上面序列化器去序列化单篇文章资源，我们将得到如下输出数据：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span>
   <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;DRF advanced tutorials&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;body&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;This is a good example.&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;liked_by&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">4</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-representation方法" tabindex="-1"><a class="header-anchor" href="#to-representation方法" aria-hidden="true">#</a> to_representation方法</h3><p>现在如果我们希望给上面输出数据添加一个<code>total_likes</code>点赞总数的字段，我们只需要在序列化器类里重写<code>to_representation</code>方法。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> rest_framework <span class="token keyword">import</span> serializers
<span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Article
 
 
<span class="token keyword">class</span> <span class="token class-name">ArticleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Article
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
 
 
    <span class="token keyword">def</span> <span class="token function">to_representation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 调用父类获取当前序列化数据，value代表每个对象实例obj</span>
        data <span class="token operator">=</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_representation<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token comment"># 对序列化数据做修改，添加新的数据</span>
        data<span class="token punctuation">[</span><span class="token string">&#39;total_likes&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">.</span>liked_by<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在使用新的序列化器类去序列化单篇文章资源，我们将得到如下输出结果。<code>to_representation()</code> 方法改变了我们序列化的输出，并传递了额外的数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">{</span> 
   <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
   <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;DRF advanced tutorials&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;body&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;This is a good example.&quot;</span><span class="token punctuation">,</span>
   <span class="token string">&quot;liked_by&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token number">4</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token string">&quot;total_likes&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="to-internal-value方法" tabindex="-1"><a class="header-anchor" href="#to-internal-value方法" aria-hidden="true">#</a> to_internal_value方法</h3><p><code>to_internal_value</code>主要在<code>反序列化时用到</code>，其作用处理API请求携带的数据，对其进行验证并转化为Python的数据类型。</p><p>假如我们的API客户端通过请求提交了额外的数据，比如<code>extra_info</code>字段，如下所示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>  <span class="token punctuation">{</span>
   <span class="token string">&quot;extra_info&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
       <span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token string">&quot;article_data&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
       <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
       <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;DRF advanced tutorials&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;body&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;This is a good example.&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;liked_by&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
          <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token number">4</span>
       <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token string">&quot;total_likes&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于<code>extra_info</code>字段不属于我们<code>ArticleSerializer</code>类里的字段，如果我们直接使用<code>ArticleSerializer</code>类对上述数据进行反序列化会出现错误。</p><p>事实上反序列化时我们只需要提取<code>article_data</code>然后对其反序列化即可，所以我们可以重写<code>to_internal_value</code>提取我们所需要的数据，忽略不想要的数据。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> <span class="token punctuation">.</span>models <span class="token keyword">import</span> Article
<span class="token keyword">class</span> <span class="token class-name">ArticleSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> Article
        fields <span class="token operator">=</span> <span class="token string">&#39;__all__&#39;</span>
 
 
    <span class="token keyword">def</span> <span class="token function">to_internal_value</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 进提取所需要的数据，对其进行反序列化，data代表未验证的数据</span>
        article_data <span class="token operator">=</span> data<span class="token punctuation">[</span><span class="token string">&#39;article_data&#39;</span><span class="token punctuation">]</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to_internal_value<span class="token punctuation">(</span>article_data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义序列化器类字段" tabindex="-1"><a class="header-anchor" href="#自定义序列化器类字段" aria-hidden="true">#</a> 自定义序列化器类字段</h2><p><code>to_representation()</code> 和<code>to_internal_value()</code>方法的令一个重要用途就是用来自定义序列化类字段。下例为DRF提供的一个官方演示，展示了如何使用这两个方法自定义了一个包含有x, y坐标的字段<code>CoordinateField</code>字段。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 自定义字段</span>
<span class="token keyword">class</span> <span class="token class-name">CoordinateField</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>Field<span class="token punctuation">)</span><span class="token punctuation">:</span>
 
 
    <span class="token keyword">def</span> <span class="token function">to_representation</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;x&quot;</span><span class="token punctuation">:</span> value<span class="token punctuation">.</span>x_coordinate<span class="token punctuation">,</span>
            <span class="token string">&quot;y&quot;</span><span class="token punctuation">:</span> value<span class="token punctuation">.</span>y_coordinate
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret
 
 
    <span class="token keyword">def</span> <span class="token function">to_internal_value</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ret <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;x_coordinate&quot;</span><span class="token punctuation">:</span> data<span class="token punctuation">[</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token string">&quot;y_coordinate&quot;</span><span class="token punctuation">:</span> data<span class="token punctuation">[</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret
 
 
<span class="token comment"># 定义好后，可以在序列化类中使用。</span>
<span class="token keyword">class</span> <span class="token class-name">DataPointSerializer</span><span class="token punctuation">(</span>serializers<span class="token punctuation">.</span>ModelSerializer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    coordinates <span class="token operator">=</span> CoordinateField<span class="token punctuation">(</span>source<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
 
 
    <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span>
        model <span class="token operator">=</span> DataPoint
        fields <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;coordinates&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>重写 <code>to_representation()</code> 和<code>to_internal_value()</code>方法不仅可以改变序列化数据的输出，处理反序列化的输入数据，还可以用来自定义字段。你都明白了吗?</p>`,26);function _(h,g){const a=p("ExternalLinkIcon");return i(),l("div",null,[u,s("p",null,[n("DRF所有"),s("a",r,[n("序列化"),e(a)]),n("器类都继承了"),d,n(" 类， 通过重写该类的 "),k,n(" 和"),v,n("方法可以改变序列化和"),s("a",m,[n("反序列化"),e(a)]),n("的行为，比如给序列化后的数据添加额外的数据，或者对客户端API请求携带的数据进行反序列化处理以及用来自定义序列化器字段。")]),b])}const f=o(c,[["render",_],["__file","重写DRF的to_representation和to_internal_value方法有什么用途-.html.vue"]]);export{f as default};
