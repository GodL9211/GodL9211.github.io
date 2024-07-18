import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,f as n}from"./app-9976b6d0.js";const l="/assets/39_01-a15fe53f.png",d={},a=n('<h2 id="第39课-爬虫框架scrapy简介" tabindex="-1"><a class="header-anchor" href="#第39课-爬虫框架scrapy简介" aria-hidden="true">#</a> 第39课：爬虫框架Scrapy简介</h2><p>当你写了很多个爬虫程序之后，你会发现每次写爬虫程序时，都需要将页面获取、页面解析、爬虫调度、异常处理、反爬应对这些代码从头至尾实现一遍，这里面有很多工作其实都是简单乏味的重复劳动。那么，有没有什么办法可以提升我们编写爬虫代码的效率呢？答案是肯定的，那就是利用爬虫框架，而在所有的爬虫框架中，Scrapy 应该是最流行、最强大的框架。</p><h3 id="scrapy-概述" tabindex="-1"><a class="header-anchor" href="#scrapy-概述" aria-hidden="true">#</a> Scrapy 概述</h3><p>Scrapy 是基于 Python 的一个非常流行的网络爬虫框架，可以用来抓取 Web 站点并从页面中提取结构化的数据。下图展示了 Scrapy 的基本架构，其中包含了主要组件和系统的数据处理流程（图中带数字的红色箭头）。</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="scrapy的组件" tabindex="-1"><a class="header-anchor" href="#scrapy的组件" aria-hidden="true">#</a> Scrapy的组件</h4><p>我们先来说说 Scrapy 中的组件。</p><ol><li>Scrapy 引擎（Engine）：用来控制整个系统的数据处理流程。</li><li>调度器（Scheduler）：调度器从引擎接受请求并排序列入队列，并在引擎发出请求后返还给它们。</li><li>下载器（Downloader）：下载器的主要职责是抓取网页并将网页内容返还给蜘蛛（Spiders）。</li><li>蜘蛛程序（Spiders）：蜘蛛是用户自定义的用来解析网页并抓取特定URL的类，每个蜘蛛都能处理一个域名或一组域名，简单的说就是用来定义特定网站的抓取和解析规则的模块。</li><li>数据管道（Item Pipeline）：管道的主要责任是负责处理有蜘蛛从网页中抽取的数据条目，它的主要任务是清理、验证和存储数据。当页面被蜘蛛解析后，将被发送到数据管道，并经过几个特定的次序处理数据。每个数据管道组件都是一个 Python 类，它们获取了数据条目并执行对数据条目进行处理的方法，同时还需要确定是否需要在数据管道中继续执行下一步或是直接丢弃掉不处理。数据管道通常执行的任务有：清理 HTML 数据、验证解析到的数据（检查条目是否包含必要的字段）、检查是不是重复数据（如果重复就丢弃）、将解析到的数据存储到数据库（关系型数据库或 NoSQL 数据库）中。</li><li>中间件（Middlewares）：中间件是介于引擎和其他组件之间的一个钩子框架，主要是为了提供自定义的代码来拓展 Scrapy 的功能，包括下载器中间件和蜘蛛中间件。</li></ol><h4 id="数据处理流程" tabindex="-1"><a class="header-anchor" href="#数据处理流程" aria-hidden="true">#</a> 数据处理流程</h4><p>Scrapy 的整个数据处理流程由引擎进行控制，通常的运转流程包括以下的步骤：</p><ol><li><p>引擎询问蜘蛛需要处理哪个网站，并让蜘蛛将第一个需要处理的 URL 交给它。</p></li><li><p>引擎让调度器将需要处理的 URL 放在队列中。</p></li><li><p>引擎从调度那获取接下来进行爬取的页面。</p></li><li><p>调度将下一个爬取的 URL 返回给引擎，引擎将它通过下载中间件发送到下载器。</p></li><li><p>当网页被下载器下载完成以后，响应内容通过下载中间件被发送到引擎；如果下载失败了，引擎会通知调度器记录这个 URL，待会再重新下载。</p></li><li><p>引擎收到下载器的响应并将它通过蜘蛛中间件发送到蜘蛛进行处理。</p></li><li><p>蜘蛛处理响应并返回爬取到的数据条目，此外还要将需要跟进的新的 URL 发送给引擎。</p></li><li><p>引擎将抓取到的数据条目送入数据管道，把新的 URL 发送给调度器放入队列中。</p></li></ol><p>上述操作中的第2步到第8步会一直重复直到调度器中没有需要请求的 URL，爬虫就停止工作。</p><h3 id="安装和使用scrapy" tabindex="-1"><a class="header-anchor" href="#安装和使用scrapy" aria-hidden="true">#</a> 安装和使用Scrapy</h3><p>可以使用 Python 的包管理工具<code>pip</code>来安装 Scrapy。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install scrapy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在命令行中使用<code>scrapy</code>命令创建名为<code>demo</code>的项目。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>scrapy startproject demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>项目的目录结构如下图所示。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>demo
|____ demo
|________ spiders
|____________ __init__.py
|________ __init__.py
|________ items.py
|________ middlewares.py
|________ pipelines.py
|________ settings.py
|____ scrapy.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换到<code>demo</code> 目录，用下面的命令创建名为<code>douban</code>的蜘蛛程序。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>scrapy genspider douban movie.douban.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="一个简单的例子" tabindex="-1"><a class="header-anchor" href="#一个简单的例子" aria-hidden="true">#</a> 一个简单的例子</h4><p>接下来，我们实现一个爬取豆瓣电影 Top250 电影标题、评分和金句的爬虫。</p><ol><li><p>在<code>items.py</code>的<code>Item</code>类中定义字段，这些字段用来保存数据，方便后续的操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import scrapy


class DoubanItem(scrapy.Item):
    title = scrapy.Field()
    score = scrapy.Field()
    motto = scrapy.Field()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改<code>spiders</code>文件夹中名为<code>douban.py</code> 的文件，它是蜘蛛程序的核心，需要我们添加解析页面的代码。在这里，我们可以通过对<code>Response</code>对象的解析，获取电影的信息，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import scrapy
from scrapy import Selector, Request
from scrapy.http import HtmlResponse

from demo.items import MovieItem


class DoubanSpider(scrapy.Spider):
    name = &#39;douban&#39;
    allowed_domains = [&#39;movie.douban.com&#39;]
    start_urls = [&#39;https://movie.douban.com/top250?start=0&amp;filter=&#39;]

    def parse(self, response: HtmlResponse):
        sel = Selector(response)
        movie_items = sel.css(&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;)
        for movie_sel in movie_items:
            item = MovieItem()
            item[&#39;title&#39;] = movie_sel.css(&#39;.title::text&#39;).extract_first()
            item[&#39;score&#39;] = movie_sel.css(&#39;.rating_num::text&#39;).extract_first()
            item[&#39;motto&#39;] = movie_sel.css(&#39;.inq::text&#39;).extract_first()
            yield item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码不难看出，我们可以使用 CSS 选择器进行页面解析。当然，如果你愿意也可以使用 XPath 或正则表达式进行页面解析，对应的方法分别是<code>xpath</code>和<code>re</code>。</p><p>如果还要生成后续爬取的请求，我们可以用<code>yield</code>产出<code>Request</code>对象。<code>Request</code>对象有两个非常重要的属性，一个是<code>url</code>，它代表了要请求的地址；一个是<code>callback</code>，它代表了获得响应之后要执行的回调函数。我们可以将上面的代码稍作修改。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import scrapy
from scrapy import Selector, Request
from scrapy.http import HtmlResponse

from demo.items import MovieItem


class DoubanSpider(scrapy.Spider):
    name = &#39;douban&#39;
    allowed_domains = [&#39;movie.douban.com&#39;]
    start_urls = [&#39;https://movie.douban.com/top250?start=0&amp;filter=&#39;]

    def parse(self, response: HtmlResponse):
        sel = Selector(response)
        movie_items = sel.css(&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;)
        for movie_sel in movie_items:
            item = MovieItem()
            item[&#39;title&#39;] = movie_sel.css(&#39;.title::text&#39;).extract_first()
            item[&#39;score&#39;] = movie_sel.css(&#39;.rating_num::text&#39;).extract_first()
            item[&#39;motto&#39;] = movie_sel.css(&#39;.inq::text&#39;).extract_first()
            yield item

        hrefs = sel.css(&#39;#content &gt; div &gt; div.article &gt; div.paginator &gt; a::attr(&quot;href&quot;)&#39;)
        for href in hrefs:
            full_url = response.urljoin(href.extract())
            yield Request(url=full_url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们已经可以通过下面的命令让爬虫运转起来。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>scrapy crawl movie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以在控制台看到爬取到的数据，如果想将这些数据保存到文件中，可以通过<code>-o</code>参数来指定文件名，Scrapy 支持我们将爬取到的数据导出成 JSON、CSV、XML 等格式。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>scrapy crawl moive -o result.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不知大家是否注意到，通过运行爬虫获得的 JSON 文件中有<code>275</code>条数据，那是因为首页被重复爬取了。要解决这个问题，可以对上面的代码稍作调整，不在<code>parse</code>方法中解析获取新页面的 URL，而是通过<code>start_requests</code>方法提前准备好待爬取页面的 URL，调整后的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import scrapy
from scrapy import Selector, Request
from scrapy.http import HtmlResponse

from demo.items import MovieItem


class DoubanSpider(scrapy.Spider):
    name = &#39;douban&#39;
    allowed_domains = [&#39;movie.douban.com&#39;]

    def start_requests(self):
        for page in range(10):
            yield Request(url=f&#39;https://movie.douban.com/top250?start={page * 25}&#39;)

    def parse(self, response: HtmlResponse):
        sel = Selector(response)
        movie_items = sel.css(&#39;#content &gt; div &gt; div.article &gt; ol &gt; li&#39;)
        for movie_sel in movie_items:
            item = MovieItem()
            item[&#39;title&#39;] = movie_sel.css(&#39;.title::text&#39;).extract_first()
            item[&#39;score&#39;] = movie_sel.css(&#39;.rating_num::text&#39;).extract_first()
            item[&#39;motto&#39;] = movie_sel.css(&#39;.inq::text&#39;).extract_first()
            yield item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果希望完成爬虫数据的持久化，可以在数据管道中处理蜘蛛程序产生的<code>Item</code>对象。例如，我们可以通过前面讲到的<code>openpyxl</code>操作 Excel 文件，将数据写入 Excel 文件中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import openpyxl

from demo.items import MovieItem


class MovieItemPipeline:

    def __init__(self):
        self.wb = openpyxl.Workbook()
        self.sheet = self.wb.active
        self.sheet.title = &#39;Top250&#39;
        self.sheet.append((&#39;名称&#39;, &#39;评分&#39;, &#39;名言&#39;))

    def process_item(self, item: MovieItem, spider):
        self.sheet.append((item[&#39;title&#39;], item[&#39;score&#39;], item[&#39;motto&#39;]))
        return item

    def close_spider(self, spider):
        self.wb.save(&#39;豆瓣电影数据.xlsx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>process_item</code>和<code>close_spider</code>都是回调方法（钩子函数）， 简单的说就是 Scrapy 框架会自动去调用的方法。当蜘蛛程序产生一个<code>Item</code>对象交给引擎时，引擎会将该<code>Item</code>对象交给数据管道，这时我们配置好的数据管道的<code>parse_item</code>方法就会被执行，所以我们可以在该方法中获取数据并完成数据的持久化操作。另一个方法<code>close_spider</code>是在爬虫结束运行前会自动执行的方法，在上面的代码中，我们在这个地方进行了保存 Excel 文件的操作，相信这段代码大家是很容易读懂的。</p><p>总而言之，数据管道可以帮助我们完成以下操作：</p><ul><li>清理 HTML 数据，验证爬取的数据。</li><li>丢弃重复的不必要的内容。</li><li>将爬取的结果进行持久化操作。</li></ul></li><li><p>修改<code>settings.py</code>文件对项目进行配置，主要需要修改以下几个配置。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 用户浏览器
USER_AGENT = &#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;

# 并发请求数量 
CONCURRENT_REQUESTS = 4

# 下载延迟
DOWNLOAD_DELAY = 3
# 随机化下载延迟
RANDOMIZE_DOWNLOAD_DELAY = True

# 是否遵守爬虫协议
ROBOTSTXT_OBEY = True

# 配置数据管道
ITEM_PIPELINES = {
   &#39;demo.pipelines.MovieItemPipeline&#39;: 300,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面配置文件中的<code>ITEM_PIPELINES</code>选项是一个字典，可以配置多个处理数据的管道，后面的数字代表了执行的优先级，数字小的先执行。</p></blockquote></li></ol>`,24),r=[a];function c(v,t){return i(),s("div",null,r)}const u=e(d,[["render",c],["__file","第39课：爬虫框架Scrapy简介.html.vue"]]);export{u as default};
