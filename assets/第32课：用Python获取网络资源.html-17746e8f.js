import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as l,a as n,b as e,e as i,f as t}from"./app-9976b6d0.js";const a="/assets/32_01-b196f2fb.png",c="/assets/32_02-93f85458.png",u={},p=n("h2",{id:"第32课-用python获取网络数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第32课-用python获取网络数据","aria-hidden":"true"},"#"),e(" 第32课：用Python获取网络数据")],-1),v=n("p",null,"网络数据采集是 Python 语言非常擅长的领域，上节课我们讲到，实现网络数据采集的程序通常称之为网络爬虫或蜘蛛程序。即便是在大数据时代，数据对于中小企业来说仍然是硬伤和短板，有些数据需要通过开放或付费的数据接口来获得，其他的行业数据和竞对数据则必须要通过网络数据采集的方式来获得。不管使用哪种方式获取网络数据资源，Python 语言都是非常好的选择，因为 Python 的标准库和三方库都对网络数据采集提供了良好的支持。",-1),m=n("h3",{id:"requests库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requests库","aria-hidden":"true"},"#"),e(" requests库")],-1),h=n("code",null,"requests",-1),b=n("code",null,"requests",-1),_={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_web_server",target:"_blank",rel:"noopener noreferrer"},f=n("figure",null,[n("img",{src:"https://github.com/jackfrued/mypic/raw/master/20210822093434.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),P=n("code",null,"requests",-1),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"requests",-1),y=n("code",null,"get",-1),T=t(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests

resp = requests.get(&#39;https://www.sohu.com/&#39;)
if resp.status_code == 200:
    print(resp.text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面代码中的变量<code>resp</code>是一个<code>Response</code>对象（<code>requests</code>库封装的类型），通过该对象的<code>status_code</code>属性可以获取响应状态码，而该对象的<code>text</code>属性可以帮我们获取到页面的 HTML 代码。</p></blockquote><p>由于<code>Response</code>对象的<code>text</code>是一个字符串，所以我们可以利用之前讲过的正则表达式的知识，从页面的 HTML 代码中提取新闻的标题和链接，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import re

import requests

pattern = re.compile(r&#39;&lt;a.*?href=&quot;(.*?)&quot;.*?title=&quot;(.*?)&quot;.*?&gt;&#39;)
resp = requests.get(&#39;https://www.sohu.com/&#39;)
if resp.status_code == 200:
    all_matches = pattern.findall(resp.text)
    for href, title in all_matches:
        print(href)
        print(title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了文本内容，我们也可以使用<code>requests</code>库通过 URL 获取二进制资源。下面的例子演示了如何获取百度 Logo 并保存到名为<code>baidu.png</code>的本地文件中。可以在百度的首页上右键点击百度Logo，并通过“复制图片地址”菜单项获取图片的 URL。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests

resp = requests.get(&#39;https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png&#39;)
with open(&#39;baidu.png&#39;, &#39;wb&#39;) as file:
    file.write(resp.content)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：<code>Response</code>对象的<code>content</code>属性可以获得服务器响应的二进制数据。</p></blockquote>`,7),k=n("code",null,"requests",-1),H=n("code",null,"requests",-1),w={href:"https://docs.python-requests.org/zh_CN/latest/",target:"_blank",rel:"noopener noreferrer"},L=n("h3",{id:"编写爬虫代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#编写爬虫代码","aria-hidden":"true"},"#"),e(" 编写爬虫代码")],-1),z=n("code",null,"requests",-1),M={href:"https://movie.douban.com/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://movie.douban.com/top250",target:"_blank",rel:"noopener noreferrer"},I={href:"https://movie.douban.com/top250?start=xxx",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"xxx",-1),S=n("code",null,"0",-1),N=n("code",null,"xxx",-1),R=n("code",null,"100",-1),U=t('<figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import re
import time

import requests

for page in range(1, 11):
    resp = requests.get(
        url=f&#39;https://movie.douban.com/top250?start={(page - 1) * 25}&#39;,
        # 如果不设置HTTP请求头中的User-Agent，豆瓣会检测出不是浏览器而阻止我们的请求。
        # 通过get函数的headers参数设置User-Agent的值，具体的值可以在浏览器的开发者工具查看到。
        # 用爬虫访问大部分网站时，将爬虫伪装成来自浏览器的请求都是非常重要的一步。
        headers={&#39;User-Agent&#39;: &#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;}
    )
    # 通过正则表达式获取class属性为title且标签体不以&amp;开头的span标签并用捕获组提取标签内容
    pattern1 = re.compile(r&#39;&lt;span class=&quot;title&quot;&gt;([^&amp;]*?)&lt;/span&gt;&#39;)
    titles = pattern1.findall(resp.text)
    # 通过正则表达式获取class属性为rating_num的span标签并用捕获组提取标签内容
    pattern2 = re.compile(r&#39;&lt;span class=&quot;rating_num&quot;.*?&gt;(.*?)&lt;/span&gt;&#39;)
    ranks = pattern2.findall(resp.text)
    # 使用zip压缩两个列表，循环遍历所有的电影标题和评分
    for title, rank in zip(titles, ranks):
        print(title, rank)
    # 随机休眠1-5秒，避免爬取页面过于频繁
    time.sleep(random.random() * 4 + 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：通过分析豆瓣网的robots协议，我们发现豆瓣网并不拒绝百度爬虫获取它的数据，因此我们也可以将爬虫伪装成百度的爬虫，将<code>get</code>函数的<code>headers</code>参数修改为：<code>headers={&#39;User-Agent&#39;: &#39;BaiduSpider&#39;}</code>。</p></blockquote><h3 id="使用-ip-代理" tabindex="-1"><a class="header-anchor" href="#使用-ip-代理" aria-hidden="true">#</a> 使用 IP 代理</h3><p>让爬虫程序隐匿自己的身份对编写爬虫程序来说是比较重要的，很多网站对爬虫都比较反感的，因为爬虫会耗费掉它们很多的网络带宽并制造很多无效的流量。要隐匿身份通常需要使用<strong>商业 IP 代理</strong>（如蘑菇代理、芝麻代理、快代理等），让被爬取的网站无法获取爬虫程序来源的真实 IP 地址，也就无法简单的通过 IP 地址对爬虫程序进行封禁。</p>`,5),O={href:"http://www.moguproxy.com/",target:"_blank",rel:"noopener noreferrer"},W={href:"http://www.moguproxy.com/buy",target:"_blank",rel:"noopener noreferrer"},E=t('<img src="'+c+`" width="100%"><p>下面，我们以HTTP隧道代理为例，为大家讲解接入 IP 代理的方式，大家也可以直接参考蘑菇代理官网提供的代码来为爬虫设置代理。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests

APP_KEY = &#39;Wnp******************************XFx&#39;
PROXY_HOST = &#39;secondtransfer.moguproxy.com:9001&#39;

for page in range(1, 11):
    resp = requests.get(
        url=f&#39;https://movie.douban.com/top250?start={(page - 1) * 25}&#39;,
        # 需要在HTTP请求头设置代理的身份认证方式
        headers={
            &#39;Proxy-Authorization&#39;: f&#39;Basic {APP_KEY}&#39;,
            &#39;User-Agent&#39;: &#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36&#39;,
            &#39;Accept-Language&#39;: &#39;zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4&#39;
        },
        # 设置代理服务器
        proxies={
            &#39;http&#39;: f&#39;http://{PROXY_HOST}&#39;,
            &#39;https&#39;: f&#39;https://{PROXY_HOST}&#39;
        },
        verify=False
    )
    pattern1 = re.compile(r&#39;&lt;span class=&quot;title&quot;&gt;([^&amp;]*?)&lt;/span&gt;&#39;)
    titles = pattern1.findall(resp.text)
    pattern2 = re.compile(r&#39;&lt;span class=&quot;rating_num&quot;.*?&gt;(.*?)&lt;/span&gt;&#39;)
    ranks = pattern2.findall(resp.text)
    for title, rank in zip(titles, ranks):
        print(title, rank)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码需要修改<code>APP_KEY</code>为自己创建的订单对应的<code>Appkey</code>值，这个值可以在用户中心用户订单中查看到。蘑菇代理提供了免费的 API 代理和 HTTP 隧道代理试用，但是试用的代理接通率不能保证，建议大家还是直接购买一个在自己支付能力范围内的代理服务来体验。</p><p><strong>另注</strong>：蘑菇代理目前已经停止服务了，大家可以按照上面讲解的方式使用其他商业代理即可。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python 语言能做的事情真的很多，就网络数据采集这一项而言，Python 几乎是一枝独秀的，大量的企业和个人都在使用 Python 从网络上获取自己需要的数据，这可能也是你将来日常工作的一部分。另外，用编写正则表达式的方式从网页中提取内容虽然可行，但是写出一个能够满足需求的正则表达式本身也不是件容易的事情，这一点对于新手来说尤为明显。在下一节课中，我们将会为大家介绍另外两种从页面中提取数据的方法，虽然从性能上来讲，它们可能不如正则表达式，但是却降低了编码的复杂性，相信大家会喜欢上它们的。</p>`,6);function K(X,Y){const s=o("ExternalLinkIcon");return d(),l("div",null,[p,v,m,n("p",null,[e("要使用 Python 获取网络数据，我们推荐大家使用名为"),h,e(" 的三方库，这个库我们在之前的课程中其实已经使用过了。按照官方网站的解释，"),b,e("是基于 Python 标准库进行了封装，简化了通过 HTTP 或 HTTPS 访问网络资源的操作。上课我们提到过，HTTP 是一个请求响应式的协议，当我们在浏览器中输入正确的 "),n("a",_,[e("URL"),i(s)]),e("（通常也称为网址）并按下 Enter 键时，我们就向网络上的 "),n("a",g,[e("Web 服务器"),i(s)]),e("发送了一个 HTTP 请求，服务器在收到请求后会给我们一个 HTTP 响应。在 Chrome 浏览器中的菜单中打开“开发者工具”切换到“Network”选项卡就能够查看 HTTP 请求和响应到底是什么样子的，如下图所示。")]),f,n("p",null,[e("通过"),P,e("库，我们可以让 Python 程序向浏览器一样向 Web 服务器发起请求，并接收服务器返回的响应，从响应中我们就可以提取出想要的数据。浏览器呈现给我们的网页是用 "),n("a",q,[e("HTML"),i(s)]),e(" 编写的，浏览器相当于是 HTML 的解释器环境，我们看到的网页中的内容都包含在 HTML 的标签中。在获取到 HTML 代码后，就可以从标签的属性或标签体中提取内容。下面例子演示了如何获取网页 HTML 代码，我们通过"),x,e("库的"),y,e("函数，获取了搜狐首页的代码。")]),T,n("p",null,[k,e("库非常好用而且功能上也比较强大和完整，具体的内容我们在使用的过程中为大家一点点剖析。想解锁关于"),H,e("库更多的知识，可以阅读它的"),n("a",w,[e("官方文档"),i(s)]),e("。")]),L,n("p",null,[e("接下来，我们以“豆瓣电影”为例，为大家讲解如何编写爬虫代码。按照上面提供的方法，我们先使用"),z,e("获取到网页的HTML代码，然后将整个代码看成一个长字符串，这样我们就可以使用正则表达式的捕获组从字符串提取我们需要的内容。下面的代码演示了如何从"),n("a",M,[e("豆瓣电影"),i(s)]),e("获取排前250名的电影的名称。"),n("a",A,[e("豆瓣电影Top250"),i(s)]),e("的页面结构和对应代码如下图所示，可以看出，每页共展示了25部电影，如果要获取到 Top250 数据，我们共需要访问10个页面，对应的地址是"),n("a",I,[e("https://movie.douban.com/top250?start=xxx"),i(s)]),e("，这里的"),C,e("如果为"),S,e("就是第一页，如果"),N,e("的值是"),R,e("，那么我们可以访问到第五页。为了代码简单易读，我们只获取电影的标题和评分。")]),U,n("p",null,[e("下面以"),n("a",O,[e("蘑菇代理"),i(s)]),e("为例，为大家讲解商业 IP 代理的使用方法。首先需要在该网站注册一个账号，注册账号后就可以"),n("a",W,[e("购买"),i(s)]),e("相应的套餐来获得商业 IP 代理。作为商业用途，建议大家购买不限量套餐，这样可以根据实际需要获取足够多的代理 IP 地址；作为学习用途，可以购买包时套餐或根据自己的需求来决定。蘑菇代理提供了两种接入代理的方式，分别是 API 私密代理和 HTTP 隧道代理，前者是通过请求蘑菇代理的 API 接口获取代理服务器地址，后者是直接使用统一的入口（蘑菇代理提供的域名）进行接入。")]),E])}const F=r(u,[["render",K],["__file","第32课：用Python获取网络资源.html.vue"]]);export{F as default};
