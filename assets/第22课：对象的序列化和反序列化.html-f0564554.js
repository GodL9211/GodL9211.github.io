import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as r,a as d,b as e,e as o,f as i}from"./app-9976b6d0.js";const c="/assets/22_01-69f087dd.png",l="/assets/22_02-fb09a8ec.png",u="/assets/22_03-9f7d08a5.png",v="/assets/22_04-fc247ca6.png",p={},m=d("h2",{id:"第22课-对象的序列化和反序列化",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#第22课-对象的序列化和反序列化","aria-hidden":"true"},"#"),e(" 第22课：对象的序列化和反序列化")],-1),h=d("p",null,"###JSON概述",-1),b=d("strong",null,"实现跨语言跨平台数据交换",-1),_=d("strong",null,"异构系统间交换数据的事实标准",-1),g={href:"https://www.json.org/json-zh.html",target:"_blank",rel:"noopener noreferrer"},q=i(`<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>{
    name: &quot;骆昊&quot;,
    age: 40,
    friends: [&quot;王大锤&quot;, &quot;白元芳&quot;],
    cars: [
        {&quot;brand&quot;: &quot;BMW&quot;, &quot;max_speed&quot;: 240},
        {&quot;brand&quot;: &quot;Benz&quot;, &quot;max_speed&quot;: 280},
        {&quot;brand&quot;: &quot;Audi&quot;, &quot;max_speed&quot;: 280}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是JSON的一个简单例子，大家可能已经注意到了，它跟Python中的字典非常类似而且支持嵌套结构，就好比Python字典中的值可以是另一个字典。我们可以尝试把下面的代码输入浏览器的控制台（对于Chrome浏览器，可以通过“更多工具”菜单找到“开发者工具”子菜单，就可以打开浏览器的控制台），浏览器的控制台提供了一个运行JavaScript代码的交互式环境（类似于Python的交互式环境），下面的代码会帮我们创建出一个JavaScript的对象，我们将其赋值给名为<code>obj</code>的变量。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>let obj = {
    name: &quot;骆昊&quot;,
    age: 40,
    friends: [&quot;王大锤&quot;, &quot;白元芳&quot;],
    cars: [
        {&quot;brand&quot;: &quot;BMW&quot;, &quot;max_speed&quot;: 240},
        {&quot;brand&quot;: &quot;Benz&quot;, &quot;max_speed&quot;: 280},
        {&quot;brand&quot;: &quot;Audi&quot;, &quot;max_speed&quot;: 280}
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+'" width="100%"><p>上面的<code>obj</code>就是JavaScript中的一个对象，我们可以通过<code>obj.name</code>或<code>obj[&quot;name&quot;]</code>两种方式获取到<code>name</code>对应的值，如下图所示。可以注意到，<code>obj[&quot;name&quot;]</code>这种获取数据的方式跟Python字典通过键获取值的索引操作是完全一致的，而Python中也通过名为<code>json</code>的模块提供了字典与JSON双向转换的支持。</p><img src="'+l+`" width="100%"><p>我们在JSON中使用的数据类型（JavaScript数据类型）和Python中的数据类型也是很容易找到对应关系的，大家可以看看下面的两张表。</p><p>表1：JavaScript数据类型（值）对应的Python数据类型（值）</p><table><thead><tr><th>JSON</th><th>Python</th></tr></thead><tbody><tr><td><code>object</code></td><td><code>dict</code></td></tr><tr><td><code>array</code></td><td><code>list</code></td></tr><tr><td><code>string</code></td><td><code>str</code></td></tr><tr><td><code>number </code></td><td><code>int</code> / <code>float</code></td></tr><tr><td><code>number</code> (real)</td><td><code>float</code></td></tr><tr><td><code>boolean</code> (<code>true</code> / <code>false</code>)</td><td><code>bool</code> (<code>True</code> / <code>False</code>)</td></tr><tr><td><code>null</code></td><td><code>None</code></td></tr></tbody></table><p>表2：Python数据类型（值）对应的JavaScript数据类型（值）</p><table><thead><tr><th>Python</th><th>JSON</th></tr></thead><tbody><tr><td><code>dict</code></td><td><code>object</code></td></tr><tr><td><code>list</code> / <code>tuple</code></td><td><code>array</code></td></tr><tr><td><code>str</code></td><td><code>string</code></td></tr><tr><td><code>int</code> / <code>float</code></td><td><code>number</code></td></tr><tr><td><code>bool</code> （<code>True</code> / <code>False</code>）</td><td><code>boolean</code> (<code>true</code> / <code>false</code>)</td></tr><tr><td><code>None</code></td><td><code>null</code></td></tr></tbody></table><h3 id="读写json格式的数据" tabindex="-1"><a class="header-anchor" href="#读写json格式的数据" aria-hidden="true">#</a> 读写JSON格式的数据</h3><p>在Python中，如果要将字典处理成JSON格式（以字符串形式存在），可以使用<code>json</code>模块的<code>dumps</code>函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import json

my_dict = {
    &#39;name&#39;: &#39;骆昊&#39;,
    &#39;age&#39;: 40,
    &#39;friends&#39;: [&#39;王大锤&#39;, &#39;白元芳&#39;],
    &#39;cars&#39;: [
        {&#39;brand&#39;: &#39;BMW&#39;, &#39;max_speed&#39;: 240},
        {&#39;brand&#39;: &#39;Audi&#39;, &#39;max_speed&#39;: 280},
        {&#39;brand&#39;: &#39;Benz&#39;, &#39;max_speed&#39;: 280}
    ]
}
print(json.dumps(my_dict))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，输出如下所示，可以注意到中文字符都是用Unicode编码显示的。</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{&quot;name&quot;: &quot;\\u9a86\\u660a&quot;, &quot;age&quot;: 40, &quot;friends&quot;: [&quot;\\u738b\\u5927\\u9524&quot;, &quot;\\u767d\\u5143\\u82b3&quot;], &quot;cars&quot;: [{&quot;brand&quot;: &quot;BMW&quot;, &quot;max_speed&quot;: 240}, {&quot;brand&quot;: &quot;Audi&quot;, &quot;max_speed&quot;: 280}, {&quot;brand&quot;: &quot;Benz&quot;, &quot;max_speed&quot;: 280}]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要将字典处理成JSON格式并写入文本文件，只需要将<code>dumps</code>函数换成<code>dump</code>函数并传入文件对象即可，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import json

my_dict = {
    &#39;name&#39;: &#39;骆昊&#39;,
    &#39;age&#39;: 40,
    &#39;friends&#39;: [&#39;王大锤&#39;, &#39;白元芳&#39;],
    &#39;cars&#39;: [
        {&#39;brand&#39;: &#39;BMW&#39;, &#39;max_speed&#39;: 240},
        {&#39;brand&#39;: &#39;Audi&#39;, &#39;max_speed&#39;: 280},
        {&#39;brand&#39;: &#39;Benz&#39;, &#39;max_speed&#39;: 280}
    ]
}
with open(&#39;data.json&#39;, &#39;w&#39;) as file:
    json.dump(my_dict, file)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码，会创建<code>data.json</code>文件，文件的内容跟上面代码的输出是一样的。</p><p><code>json</code>模块有四个比较重要的函数，分别是：</p><ul><li><code>dump</code> - 将Python对象按照JSON格式序列化到文件中</li><li><code>dumps</code> - 将Python对象处理成JSON格式的字符串</li><li><code>load</code> - 将文件中的JSON数据反序列化成对象</li><li><code>loads</code> - 将字符串的内容反序列化成Python对象</li></ul>`,21),y={href:"https://zh.wikipedia.org/",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>我们可以通过下面的代码，读取上面创建的<code>data.json</code>文件，将JSON格式的数据还原成Python中的字典。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import json

with open(&#39;data.json&#39;, &#39;r&#39;) as file:
    my_dict = json.load(file)
    print(type(my_dict))
    print(my_dict)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包管理工具pip的使用" tabindex="-1"><a class="header-anchor" href="#包管理工具pip的使用" aria-hidden="true">#</a> 包管理工具pip的使用</h3><p>Python标准库中的<code>json</code>模块在数据序列化和反序列化时性能并不是非常理想，为了解决这个问题，可以使用三方库<code>ujson</code>来替换<code>json</code>。所谓三方库，是指非公司内部开发和使用的，也不是来自于官方标准库的Python模块，这些模块通常由其他公司、组织或个人开发，所以被称为三方库。虽然Python语言的标准库虽然已经提供了诸多模块来方便我们的开发，但是对于一个强大的语言来说，它的生态圈一定也是非常繁荣的。</p><p>之前安装Python解释器时，默认情况下已经勾选了安装pip，大家可以在命令提示符或终端中通过<code>pip --version</code>来确定是否已经拥有了pip。pip是Python的包管理工具，通过pip可以查找、安装、卸载、更新Python的三方库或工具，macOS和Linux系统应该使用pip3。例如要安装替代<code>json</code>模块的<code>ujson</code>，可以使用下面的命令。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install ujson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在默认情况下，pip会访问<code>https://pypi.org/simple/</code>来获得三方库相关的数据，但是国内访问这个网站的速度并不是十分理想，因此国内用户可以使用豆瓣网提供的镜像来替代这个默认的下载源，操作如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install ujson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过<code>pip search</code>命令根据名字查找需要的三方库，可以通过<code>pip list</code>命令来查看已经安装过的三方库。如果想更新某个三方库，可以使用<code>pip install -U</code>或<code>pip install --upgrade</code>；如果要删除某个三方库，可以使用<code>pip uninstall</code>命令。</p><p>搜索<code>ujson</code>三方库。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip search ujson

micropython-cpython-ujson (0.2)  - MicroPython module ujson ported to CPython
pycopy-cpython-ujson (0.2)       - Pycopy module ujson ported to CPython
ujson (3.0.0)                    - Ultra fast JSON encoder and decoder for Python
ujson-bedframe (1.33.0)          - Ultra fast JSON encoder and decoder for Python
ujson-segfault (2.1.57)          - Ultra fast JSON encoder and decoder for Python. Continuing 
                                   development.
ujson-ia (2.1.1)                 - Ultra fast JSON encoder and decoder for Python (Internet 
                                   Archive fork)
ujson-x (1.37)                   - Ultra fast JSON encoder and decoder for Python
ujson-x-legacy (1.35.1)          - Ultra fast JSON encoder and decoder for Python
drf_ujson (1.2)                  - Django Rest Framework UJSON Renderer
drf-ujson2 (1.6.1)               - Django Rest Framework UJSON Renderer
ujsonDB (0.1.0)                  - A lightweight and simple database using ujson.
fast-json (0.3.2)                - Combines best parts of json and ujson for fast serialization
decimal-monkeypatch (0.4.3)      - Python 2 performance patches: decimal to cdecimal, json to 
                                   ujson for psycopg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看已经安装的三方库。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip list

Package                       Version
----------------------------- ----------
aiohttp                       3.5.4
alipay                        0.7.4
altgraph                      0.16.1
amqp                          2.4.2
...							  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新<code>ujson</code>三方库。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install -U ujson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除<code>ujson</code>三方库。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip uninstall -y ujson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：如果要更新<code>pip</code>自身，对于macOS系统来说，可以使用命令<code>pip install -U pip</code>。在Windows系统上，可以将命令替换为<code>python -m pip install -U --user pip</code>。</p></blockquote><h3 id="使用网络api获取数据" tabindex="-1"><a class="header-anchor" href="#使用网络api获取数据" aria-hidden="true">#</a> 使用网络API获取数据</h3>`,19),P={href:"https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},j={href:"http://www.ruanyifeng.com/blog/2016/08/http.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.juhe.cn/",target:"_blank",rel:"noopener noreferrer"},J={href:"http://www.avatardata.cn/",target:"_blank",rel:"noopener noreferrer"},N={href:"http://apis.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"http://docs.python-requests.org/zh_CN/latest/",target:"_blank",rel:"noopener noreferrer"},O=d("code",null,"requests",-1),B={href:"https://www.tianapi.com/",target:"_blank",rel:"noopener noreferrer"},w=i('<img src="'+u+`" alt="image-20210820151134034" width="100%"><p>Python通过URL接入网络，我们推荐大家使用<code>requests</code>三方库，它简单且强大，但需要自行安装。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install requests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取国内新闻并显示新闻标题和链接。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests

resp = requests.get(&#39;http://api.tianapi.com/guonei/?key=APIKey&amp;num=10&#39;)
if resp.status_code == 200:
    data_model = resp.json()
    for news in data_model[&#39;newslist&#39;]:
        print(news[&#39;title&#39;])
        print(news[&#39;url&#39;])
        print(&#39;-&#39; * 60)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码通过<code>requests</code>模块的<code>get</code>函数向天行数据的国内新闻接口发起了一次请求，如果请求过程没有出现问题，<code>get</code>函数会返回一个<code>Response</code>对象，通过该对象的<code>status_code</code>属性表示HTTP响应状态码，如果不理解没关系，你只需要关注它的值，如果值等于<code>200</code>或者其他<code>2</code>字头的值，那么我们的请求是成功的。通过<code>Response</code>对象的<code>json()</code>方法可以将返回的JSON格式的数据直接处理成Python字典，非常方便。天行数据国内新闻接口返回的JSON格式的数据（部分）如下图所示。</p><img src="`+v+'" width="100%"><blockquote><p><strong>提示</strong>：上面代码中的APIKey需要换成自己在天行数据网站申请的APIKey。天行数据网站上还有提供了很多非常有意思的API接口，例如：垃圾分类、周公解梦等，大家可以仿照上面的代码来调用这些接口。每个接口都有对应的接口文档，文档中有关于如何使用接口的详细说明。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python中实现序列化和反序列化除了使用<code>json</code>模块之外，还可以使用<code>pickle</code>和<code>shelve</code>模块，但是这两个模块是使用特有的序列化协议来序列化数据，因此序列化后的数据只能被Python识别，关于这两个模块的相关知识，有兴趣的读者可以自己查找网络上的资料。处理JSON格式的数据很显然是程序员必须掌握的一项技能，因为不管是访问网络API接口还是提供网络API接口给他人使用，都需要具备处理JSON格式数据的相关知识。</p>',10);function k(A,T){const n=a("ExternalLinkIcon");return t(),r("div",null,[m,h,d("p",null,[e("通过上面的讲解，我们已经知道如何将文本数据和二进制数据保存到文件中，那么这里还有一个问题，如果希望把一个列表或者一个字典中的数据保存到文件中又该怎么做呢？在Python中，我们可以将程序中的数据以JSON格式进行保存。JSON是“JavaScript Object Notation”的缩写，它本来是JavaScript语言中创建对象的一种字面量语法，现在已经被广泛的应用于跨语言跨平台的数据交换。使用JSON的原因非常简单，因为它结构紧凑而且是纯文本，任何操作系统和编程语言都能处理纯文本，这就是"),b,e("的前提条件。目前JSON基本上已经取代了XML（可扩展标记语言）作为"),_,e("。可以在"),d("a",g,[e("JSON的官方网站"),o(n)]),e("找到更多关于JSON的知识，这个网站还提供了每种语言处理JSON数据格式可以使用的工具或三方库。")]),q,d("p",null,[e("这里出现了两个概念，一个叫序列化，一个叫反序列化，"),d("a",y,[e("维基百科"),o(n)]),e("上的解释是：“序列化（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换为可以存储或传输的形式，这样在需要的时候能够恢复到原先的状态，而且通过序列化的数据重新获取字节时，可以利用这些字节来产生原始对象的副本（拷贝）。与这个过程相反的动作，即从一系列字节中提取数据结构的操作，就是反序列化（deserialization）”。")]),f,d("p",null,[e("如果想在我们自己的程序中显示天气、路况、航班等信息，这些信息我们自己没有能力提供，所以必须使用网络数据服务。目前绝大多数的网络数据服务（或称之为网络API）都是基于"),d("a",P,[e("HTTP"),o(n)]),e("或HTTPS提供JSON格式的数据，我们可以通过Python程序发送HTTP请求给指定的URL（统一资源定位符），这个URL就是所谓的网络API，如果请求成功，它会返回HTTP响应，而HTTP响应的消息体中就有我们需要的JSON格式的数据。关于HTTP的相关知识，可以看看阮一峰的"),d("a",j,[e("《HTTP协议入门》"),o(n)]),e("一文。")]),d("p",null,[e("国内有很多提供网络API接口的网站，例如"),d("a",S,[e("聚合数据"),o(n)]),e("、"),d("a",J,[e("阿凡达数据"),o(n)]),e("等，这些网站上有免费的和付费的数据接口，国外的"),d("a",N,[e("{API}Search"),o(n)]),e("网站也提供了类似的功能，有兴趣的可以自行研究。下面的例子演示了如何使用"),d("a",x,[O,o(n)]),e("库（基于HTTP进行网络资源访问的三方库）访问网络API获取国内新闻并显示新闻标题和链接。在这个例子中，我们使用了名为"),d("a",B,[e("天行数据"),o(n)]),e("的网站提供的国内新闻数据接口，其中的APIKey需要自己到网站上注册申请。在天行数据网站注册账号后会自动分配APIKey，但是要访问接口获取数据，需要绑定验证邮箱或手机，然后还要申请需要使用的接口，如下图所示。")]),w])}const E=s(p,[["render",k],["__file","第22课：对象的序列化和反序列化.html.vue"]]);export{E as default};
