import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as l,a as e,b as t,e as n,f as d}from"./app-9976b6d0.js";const s="/assets/33_0-e0f12224.png",c="/assets/33_01-84a1d305.png",u={},v=d('<h2 id="第33课-用python解析html页面" tabindex="-1"><a class="header-anchor" href="#第33课-用python解析html页面" aria-hidden="true">#</a> 第33课：用Python解析HTML页面</h2><p>在前面的课程中，我们讲到了使用<code>request</code>三方库获取网络资源，还介绍了一些前端的基础知识。接下来，我们继续探索如何解析 HTML 代码，从页面中提取出有用的信息。之前，我们尝试过用正则表达式的捕获组操作提取页面内容，但是写出一个正确的正则表达式也是一件让人头疼的事情。为了解决这个问题，我们得先深入的了解一下 HTML 页面的结构，并在此基础上研究另外的解析页面的方法。</p><h3 id="html-页面的结构" tabindex="-1"><a class="header-anchor" href="#html-页面的结构" aria-hidden="true">#</a> HTML 页面的结构</h3><p>我们在浏览器中打开任意一个网站，然后通过鼠标右键菜单，选择“显示网页源代码”菜单项，就可以看到网页对应的 HTML 代码。</p><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码的第<code>1</code>行是文档类型声明，第<code>2</code>行的<code>&lt;html&gt;</code>标签是整个页面根标签的开始标签，最后一行是根标签的结束标签<code>&lt;/html&gt;</code>。<code>&lt;html&gt;</code>标签下面有两个子标签<code>&lt;head&gt;</code>和<code>&lt;body&gt;</code>，放在<code>&lt;body&gt;</code>标签下的内容会显示在浏览器窗口中，这部分内容是网页的主体；放在<code>&lt;head&gt;</code>标签下的内容不会显示在浏览器窗口中，但是却包含了页面重要的元信息，通常称之为网页的头部。HTML 页面大致的代码结构如下所示。</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;!doctype html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;!-- 页面的元信息，如字符编码、标题、关键字、媒体查询等 --&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- 页面的主体，显示在浏览器窗口中的内容 --&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标签、层叠样式表（CSS）、JavaScript 是构成 HTML 页面的三要素，其中标签用来承载页面要显示的内容，CSS 负责对页面的渲染，而 JavaScript 用来控制页面的交互式行为。要实现 HTML 页面的解析，可以使用 XPath 的语法，它原本是 XML 的一种查询语法，可以根据 HTML 标签的层次结构提取标签中的内容或标签属性；此外，也可以使用 CSS 选择器来定位页面元素，就跟用 CSS 渲染页面元素是同样的道理。</p><h3 id="xpath-解析" tabindex="-1"><a class="header-anchor" href="#xpath-解析" aria-hidden="true">#</a> XPath 解析</h3><p>XPath 是在 XML（eXtensible Markup Language）文档中查找信息的一种语法，XML 跟 HTML 类似也是一种用标签承载数据的标签语言，不同之处在于 XML 的标签是可扩展的，可以自定义的，而且 XML 对语法有更严格的要求。XPath 使用路径表达式来选取 XML 文档中的节点或者节点集，这里所说的节点包括元素、属性、文本、命名空间、处理指令、注释、根节点等。下面我们通过一个例子来说明如何使用 XPath 对页面进行解析。</p><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;bookstore&gt;
    &lt;book&gt;
      &lt;title lang=&quot;eng&quot;&gt;Harry Potter&lt;/title&gt;
      &lt;price&gt;29.99&lt;/price&gt;
    &lt;/book&gt;
    &lt;book&gt;
      &lt;title lang=&quot;zh&quot;&gt;Learning XML&lt;/title&gt;
      &lt;price&gt;39.95&lt;/price&gt;
    &lt;/book&gt;
&lt;/bookstore&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的 XML 文件，我们可以用如下所示的 XPath 语法获取文档中的节点。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>/bookstore</code></td><td>选取根元素 bookstore。<strong>注意</strong>：假如路径起始于正斜杠( / )，则此路径始终代表到某元素的绝对路径！</td></tr><tr><td><code>//book</code></td><td>选取所有 book 子元素，而不管它们在文档中的位置。</td></tr><tr><td><code>//@lang</code></td><td>选取名为 lang 的所有属性。</td></tr><tr><td><code>/bookstore/book[1]</code></td><td>选取属于 bookstore 子元素的第一个 book 元素。</td></tr><tr><td><code>/bookstore/book[last()]</code></td><td>选取属于 bookstore 子元素的最后一个 book 元素。</td></tr><tr><td><code>/bookstore/book[last()-1]</code></td><td>选取属于 bookstore 子元素的倒数第二个 book 元素。</td></tr><tr><td><code>/bookstore/book[position()&lt;3]</code></td><td>选取最前面的两个属于 bookstore 元素的子元素的 book 元素。</td></tr><tr><td><code>//title[@lang]</code></td><td>选取所有拥有名为 lang 的属性的 title 元素。</td></tr><tr><td><code>//title[@lang=&#39;eng&#39;]</code></td><td>选取所有 title 元素，且这些元素拥有值为 eng 的 lang 属性。</td></tr><tr><td><code>/bookstore/book[price&gt;35.00]</code></td><td>选取 bookstore 元素的所有 book 元素，且其中的 price 元素的值须大于 35.00。</td></tr><tr><td><code>/bookstore/book[price&gt;35.00]/title</code></td><td>选取 bookstore 元素中的 book 元素的所有 title 元素，且其中的 price 元素的值须大于 35.00。</td></tr></tbody></table><p>XPath还支持通配符用法，如下所示。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>/bookstore/*</code></td><td>选取 bookstore 元素的所有子元素。</td></tr><tr><td><code>//*</code></td><td>选取文档中的所有元素。</td></tr><tr><td><code>//title[@*]</code></td><td>选取所有带有属性的 title 元素。</td></tr></tbody></table><p>如果要选取多个节点，可以使用如下所示的方法。</p><table><thead><tr><th>路径表达式</th><th>结果</th></tr></thead><tbody><tr><td><code>//book/title | //book/price</code></td><td>选取 book 元素的所有 title 和 price 元素。</td></tr><tr><td><code>//title | //price</code></td><td>选取文档中的所有 title 和 price 元素。</td></tr><tr><td><code>/bookstore/book/title | //price</code></td><td>选取属于 bookstore 元素的 book 元素的所有 title 元素，以及文档中所有的 price 元素。</td></tr></tbody></table>`,17),p=e("strong",null,"说明",-1),b={href:"https://www.runoob.com/xpath/xpath-tutorial.html",target:"_blank",rel:"noopener noreferrer"},h=d('<p>当然，如果不理解或不熟悉 XPath 语法，可以在浏览器的开发者工具中按照如下所示的方法查看元素的 XPath 语法，下图是在 Chrome 浏览器的开发者工具中查看豆瓣网电影详情信息中影片标题的 XPath 语法。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实现 XPath 解析需要三方库<code>lxml</code> 的支持，可以使用下面的命令安装<code>lxml</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install lxml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面我们用 XPath 解析方式改写之前获取豆瓣电影 Top250的代码，如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from lxml import etree
import requests

for page in range(1, 11):
    resp = requests.get(
        url=f&#39;https://movie.douban.com/top250?start={(page - 1) * 25}&#39;,
        headers={&#39;User-Agent&#39;: &#39;BaiduSpider&#39;}
    )
    tree = etree.HTML(resp.text)
    # 通过XPath语法从页面中提取电影标题
    title_spans = tree.xpath(&#39;//*[@id=&quot;content&quot;]/div/div[1]/ol/li/div/div[2]/div[1]/a/span[1]&#39;)
    # 通过XPath语法从页面中提取电影评分
    rank_spans = tree.xpath(&#39;//*[@id=&quot;content&quot;]/div/div[1]/ol/li[1]/div/div[2]/div[2]/div/span[2]&#39;)
    for title_span, rank_span in zip(title_spans, rank_spans):
        print(title_span.text, rank_span.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css-选择器解析" tabindex="-1"><a class="header-anchor" href="#css-选择器解析" aria-hidden="true">#</a> CSS 选择器解析</h3><p>对于熟悉 CSS 选择器和 JavaScript 的开发者来说，通过 CSS 选择器获取页面元素可能是更为简单的选择，因为浏览器中运行的 JavaScript 本身就可以<code>document</code>对象的<code>querySelector()</code>和<code>querySelectorAll()</code>方法基于 CSS 选择器获取页面元素。在 Python 中，我们可以利用三方库<code>beautifulsoup4</code>或<code>pyquery</code>来做同样的事情。Beautiful Soup 可以用来解析 HTML 和 XML 文档，修复含有未闭合标签等错误的文档，通过为待解析的页面在内存中创建一棵树结构，实现对从页面中提取数据操作的封装。可以用下面的命令来安装 Beautiful Soup。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>pip install beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是使用<code>bs4</code>改写的获取豆瓣电影Top250电影名称的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import bs4
import requests

for page in range(1, 11):
    resp = requests.get(
        url=f&#39;https://movie.douban.com/top250?start={(page - 1) * 25}&#39;,
        headers={&#39;User-Agent&#39;: &#39;BaiduSpider&#39;}
    )
    # 创建BeautifulSoup对象
    soup = bs4.BeautifulSoup(resp.text, &#39;lxml&#39;)
    # 通过CSS选择器从页面中提取包含电影标题的span标签
    title_spans = soup.select(&#39;div.info &gt; div.hd &gt; a &gt; span:nth-child(1)&#39;)
    # 通过CSS选择器从页面中提取包含电影评分的span标签
    rank_spans = soup.select(&#39;div.info &gt; div.bd &gt; div &gt; span.rating_num&#39;)
    for title_span, rank_span in zip(title_spans, rank_spans):
        print(title_span.text, rank_span.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/",target:"_blank",rel:"noopener noreferrer"},g=d('<h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>下面我们对三种解析方式做一个简单比较。</p><table><thead><tr><th>解析方式</th><th>对应的模块</th><th>速度</th><th>使用难度</th></tr></thead><tbody><tr><td>正则表达式解析</td><td><code>re</code></td><td>快</td><td>困难</td></tr><tr><td>XPath 解析</td><td><code>lxml</code></td><td>快</td><td>一般</td></tr><tr><td>CSS 选择器解析</td><td><code>bs4</code>或<code>pyquery</code></td><td>不确定</td><td>简单</td></tr></tbody></table>',3);function k(_,f){const i=a("ExternalLinkIcon");return r(),l("div",null,[v,e("blockquote",null,[e("p",null,[p,t("：上面的例子来自于“菜鸟教程”网站上的 "),e("a",b,[t("XPath 教程"),n(i)]),t("，有兴趣的读者可以自行阅读原文。")])]),h,e("p",null,[t("关于 BeautifulSoup 更多的知识，可以参考它的"),e("a",m,[t("官方文档"),n(i)]),t("。")]),g])}const S=o(u,[["render",k],["__file","第33课：用Python解析HTML页面.html.vue"]]);export{S as default};
