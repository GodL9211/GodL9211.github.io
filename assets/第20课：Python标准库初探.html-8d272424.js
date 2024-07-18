import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as o,a as e,b as n,e as a,f as i}from"./app-9976b6d0.js";const c={},r=e("h2",{id:"第20课-python标准库初探",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第20课-python标准库初探","aria-hidden":"true"},"#"),n(" 第20课：Python标准库初探")],-1),u=e("p",null,"Python语言最可爱的地方在于它的标准库和三方库实在是太丰富了，日常开发工作中的很多任务都可以通过这些标准库或者三方库直接解决。下面我们先介绍Python标准库中的一些常用模块，后面的课程中再陆陆续续为大家介绍Python常用三方库的用途和用法。",-1),h=e("h3",{id:"base64-base64编解码模块",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base64-base64编解码模块","aria-hidden":"true"},"#"),n(" base64 - Base64编解码模块")],-1),m=e("p",null,[e("strong",null,"Base64"),n("是一种基于64个可打印字符来表示二进制数据的方法。由于"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"l"),e("mi",null,"o"),e("msub",null,[e("mi",null,"g"),e("mn",null,"2")]),e("mn",null,"64"),e("mo",null,"="),e("mn",null,"6")]),e("annotation",{encoding:"application/x-tex"},"log _{2}64=6")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord"},[e("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},[e("span",{class:"mord mtight"},"2")])])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mord"},"64"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6444em"}}),e("span",{class:"mord"},"6")])])]),n("，所以Base64以6个比特（二进制位，可以表示0或1）为一个单元，每个单元对应一个可打印字符。对于3字节（24比特）的二进制数据，我们可以将其处理成对应于4个Base64单元，即3个字节可由4个可打印字符来表示。Base64编码可用来作为电子邮件的传输编码，也可以用于其他需要将二进制数据转成文本字符的场景，这使得在XML、JSON、YAML这些文本数据格式中传输二进制内容成为可能。在Base64中的可打印字符包括"),e("code",null,"A-Z"),n("、"),e("code",null,"a-z"),n("、"),e("code",null,"0-9"),n("，这里一共是62个字符，另外两个可打印符号通常是"),e("code",null,"+"),n("和"),e("code",null,"/"),n("，"),e("code",null,"="),n("用于在Base64编码最后进行补位。")],-1),v={href:"http://www.ruanyifeng.com/blog/2008/06/base64.html",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"base64",-1),b=e("code",null,"b64encode",-1),g=e("code",null,"b64decode",-1),y=e("strong",null,"Python的交互式环境",-1),x=i(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&gt;&gt;&gt; import base64
&gt;&gt;&gt; 
&gt;&gt;&gt; content = &#39;Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.&#39;
&gt;&gt;&gt; base64.b64encode(content.encode())
b&#39;TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=&#39;
&gt;&gt;&gt; content = b&#39;TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=&#39;
&gt;&gt;&gt; base64.b64decode(content).decode()
&#39;Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="collections-容器数据类型模块" tabindex="-1"><a class="header-anchor" href="#collections-容器数据类型模块" aria-hidden="true">#</a> collections - 容器数据类型模块</h3><p><code>collections</code>模块提供了诸多非常好用的数据结构，主要包括：</p>`,3),f=e("ul",null,[e("li",null,[e("code",null,"namedtuple"),n("：命令元组，它是一个类工厂，接受类型的名称和属性列表来创建一个类。")]),e("li",null,[e("code",null,"deque"),n("：双端队列，是列表的替代实现。Python中的列表底层是基于数组来实现的，而"),e("code",null,"deque"),n("底层是双向链表，因此当你需要在头尾添加和删除元素是，"),e("code",null,"deque"),n("会表现出更好的性能，渐近时间复杂度为"),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mn",null,"1"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(1)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mord"},"1"),e("span",{class:"mclose"},")")])])]),n("。")]),e("li",null,[e("code",null,"Counter"),n("："),e("code",null,"dict"),n("的子类，键是元素，值是元素的计数，它的"),e("code",null,"most_common()"),n("方法可以帮助我们获取出现频率最高的元素。"),e("code",null,"Counter"),n("和"),e("code",null,"dict"),n("的继承关系我认为是值得商榷的，按照CARP原则，"),e("code",null,"Counter"),n("跟"),e("code",null,"dict"),n("的关系应该设计为关联关系更为合理。")]),e("li",null,[e("code",null,"OrderedDict"),n("："),e("code",null,"dict"),n("的子类，它记录了键值对插入的顺序，看起来既有字典的行为，也有链表的行为。")]),e("li",null,[e("code",null,"defaultdict"),n("：类似于字典类型，但是可以通过默认的工厂函数来获得键对应的默认值，相比字典中的"),e("code",null,"setdefault()"),n("方法，这种做法更加高效。")])],-1),B=i(`<p>下面是在<strong>Python交互式环境中</strong>使用<code>namedtuple</code>创建扑克牌类的例子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&gt;&gt;&gt; from collections import namedtuple
&gt;&gt;&gt;
&gt;&gt;&gt; Card = namedtuple(&#39;Card&#39;, (&#39;suite&#39;, &#39;face&#39;))
&gt;&gt;&gt; card1 = Card(&#39;红桃&#39;, 5)
&gt;&gt;&gt; card2 = Card(&#39;草花&#39;, 9)
&gt;&gt;&gt; card1
Card(suite=&#39;红桃&#39;, face=5)
&gt;&gt;&gt; card2
Card(suite=&#39;草花&#39;, face=9)
&gt;&gt;&gt; print(f&#39;{card1.suite}{card1.face}&#39;)
红桃5
&gt;&gt;&gt; print(f&#39;{card2.suite}{card2.face}&#39;)
草花9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是使用<code>Counter</code>类统计列表中出现次数最多的三个元素的例子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from collections import Counter

words = [
    &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;, &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;,
    &#39;the&#39;, &#39;eyes&#39;, &#39;the&#39;, &#39;eyes&#39;, &#39;the&#39;, &#39;eyes&#39;, &#39;not&#39;, &#39;around&#39;,
    &#39;the&#39;, &#39;eyes&#39;, &quot;don&#39;t&quot;, &#39;look&#39;, &#39;around&#39;, &#39;the&#39;, &#39;eyes&#39;,
    &#39;look&#39;, &#39;into&#39;, &#39;my&#39;, &#39;eyes&#39;, &quot;you&#39;re&quot;, &#39;under&#39;
]
counter = Counter(words)
# 打印words列表中出现频率最高的3个元素及其出现次数
for elem, count in counter.most_common(3):
    print(elem, count)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashlib-哈希函数模块" tabindex="-1"><a class="header-anchor" href="#hashlib-哈希函数模块" aria-hidden="true">#</a> hashlib - 哈希函数模块</h3>`,5),_={href:"https://zh.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"},G=e("a",{href:"%5Bhttps://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F%5D(https://zh.wikipedia.org/wiki/SHA%E5%AE%B6%E6%97%8F)"},"SHA家族",-1),C=i(`<blockquote><p><strong>说明</strong>：在2011年的时候，RFC 6151中已经禁止将MD5用作密钥散列消息认证码，这个问题不在我们讨论的范围内。</p></blockquote><p>Python标准库的<code>hashlib</code>模块提供了对哈希函数的封装，通过使用<code>md5</code>、<code>sha1</code>、<code>sha256</code>等类，我们可以轻松的生成“数字指纹”。举一个简单的例子，用户注册时我们希望在数据库中保存用户的密码，很显然我们不能将用户密码直接保存在数据库中，这样可能会导致用户隐私的泄露，所以在数据库中保存用户密码时，通常都会将密码的“指纹”保存起来，用户登录时通过哈希函数计算密码的“指纹”再进行匹配来判断用户登录是否成功。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import hashlib

# 计算字符串&quot;123456&quot;的MD5摘要
print(hashlib.md5(&#39;123456&#39;.encode()).hexdigest())

# 计算文件&quot;Python-3.7.1.tar.xz&quot;的MD5摘要
hasher = hashlib.md5()
with open(&#39;Python-3.7.1.tar.xz&#39;, &#39;rb&#39;) as file:
    data = file.read(512)
    while data:
        hasher.update(data)
        data = file.read(512)
print(hasher.hexdigest())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：很多网站在下载链接的旁边都提供了哈希摘要，完成文件下载后，我们可以计算该文件的哈希摘要并检查它与网站上提供的哈希摘要是否一致（指纹比对）。如果计算出的哈希摘要与网站提供的并不一致，很有可能是下载出错或该文件在传输过程中已经被篡改，这时候就不应该直接使用这个文件。</p></blockquote><h3 id="heapq-堆排序模块" tabindex="-1"><a class="header-anchor" href="#heapq-堆排序模块" aria-hidden="true">#</a> heapq - 堆排序模块</h3><p><code>heapq</code>模块实现了堆排序算法，如果希望使用堆排序，尤其是要解决<strong>TopK问题</strong>（从序列中找到K个最大或最小元素），直接使用该模块即可，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import heapq

list1 = [34, 25, 12, 99, 87, 63, 58, 78, 88, 92]
# 找出列表中最大的三个元素
print(heapq.nlargest(3, list1))
# 找出列表中最小的三个元素
print(heapq.nsmallest(3, list1))

list2 = [
    {&#39;name&#39;: &#39;IBM&#39;, &#39;shares&#39;: 100, &#39;price&#39;: 91.1},
    {&#39;name&#39;: &#39;AAPL&#39;, &#39;shares&#39;: 50, &#39;price&#39;: 543.22},
    {&#39;name&#39;: &#39;FB&#39;, &#39;shares&#39;: 200, &#39;price&#39;: 21.09},
    {&#39;name&#39;: &#39;HPQ&#39;, &#39;shares&#39;: 35, &#39;price&#39;: 31.75},
    {&#39;name&#39;: &#39;YHOO&#39;, &#39;shares&#39;: 45, &#39;price&#39;: 16.35},
    {&#39;name&#39;: &#39;ACME&#39;, &#39;shares&#39;: 75, &#39;price&#39;: 115.65}
]
# 找出价格最高的三只股票
print(heapq.nlargest(3, list2, key=lambda x: x[&#39;price&#39;]))
# 找出持有数量最高的三只股票
print(heapq.nlargest(3, list2, key=lambda x: x[&#39;shares&#39;]))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="itertools-迭代工具模块" tabindex="-1"><a class="header-anchor" href="#itertools-迭代工具模块" aria-hidden="true">#</a> itertools - 迭代工具模块</h3><p><code>itertools</code>可以帮助我们生成各种各样的迭代器，大家可以看看下面的例子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import itertools

# 产生ABCD的全排列
for value in itertools.permutations(&#39;ABCD&#39;):
    print(value)

# 产生ABCDE的五选三组合
for value in itertools.combinations(&#39;ABCDE&#39;, 3):
    print(value)

# 产生ABCD和123的笛卡尔积
for value in itertools.product(&#39;ABCD&#39;, &#39;123&#39;):
    print(value)

# 产生ABC的无限循环序列
it = itertools.cycle((&#39;A&#39;, &#39;B&#39;, &#39;C&#39;))
print(next(it))
print(next(it))
print(next(it))
print(next(it))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="random-随机数和随机抽样模块" tabindex="-1"><a class="header-anchor" href="#random-随机数和随机抽样模块" aria-hidden="true">#</a> random - 随机数和随机抽样模块</h3><p>这个模块我们之前已经用过很多次了，生成随机数、实现随机乱序和随机抽样，下面是常用函数的列表。</p><ul><li><code>getrandbits(k)</code>：返回具有<code>k</code>个随机比特位的整数。</li><li><code>randrange(start, stop[, step])</code>：从<code>range(start, stop, step)</code> 返回一个随机选择的元素，但实际上并没有构建一个<code>range</code>对象。</li><li><code>randint(a, b)</code>：返回随机整数<code>N</code>满足<code>a &lt;= N &lt;= b</code>，相当于<code>randrange(a, b+1)</code>。</li><li><code>choice(seq)</code>：从非空序列<code>seq</code>返回一个随机元素。 如果<code>seq</code>为空，则引发<code>IndexError</code>。</li><li><code>choices(population, weight=None, *, cum_weights=None, k=1)</code>：从<code>population</code>中选择替换，返回大小为<code>k</code>的元素列表。 如果<code>population</code>为空，则引发<code>IndexError</code>。</li><li><code>shuffle(x[, random])</code>：将序列<code>x</code>随机打乱位置。</li><li><code>sample(population, k)</code>：返回从总体序列或集合中选择<code>k</code>个不重复元素构造的列表，用于无重复的随机抽样。</li><li><code>random()</code>：返回<code>[0.0, 1.0)</code>范围内的下一个随机浮点数。</li><li><code>expovariate(lambd)</code>：指数分布。</li><li><code>gammavariate(alpha, beta)</code>：伽玛分布。</li><li><code>gauss(mu, sigma)</code> / <code>normalvariate(mu, sigma)</code>：正态分布。</li><li><code>paretovariate(alpha)</code>：帕累托分布。</li><li><code>weibullvariate(alpha, beta)</code>：威布尔分布。</li></ul><h3 id="os-path-路径操作相关模块" tabindex="-1"><a class="header-anchor" href="#os-path-路径操作相关模块" aria-hidden="true">#</a> os.path - 路径操作相关模块</h3><p><code>os.path</code>模块封装了操作路径的工具函数，如果程序中需要对文件路径做拼接、拆分、获取以及获取文件的存在性和其他属性，这个模块将会非常有帮助，下面为大家罗列一些常用的函数。</p><ul><li><code>dirname(path)</code>：返回路径<code>path</code>的目录名称。</li><li><code>exists(path)</code>：如果<code>path</code>指向一个已存在的路径或已打开的文件描述符，返回 <code>True</code>。</li><li><code>getatime(path)</code> / <code>getmtime(path)</code> / <code>getctime(path)</code>：返回<code>path</code>的最后访问时间/最后修改时间/创建时间。</li><li><code>getsize(path)</code>：返回<code>path</code>的大小，以字节为单位。如果该文件不存在或不可访问，则抛出<code>OSError</code>异常。</li><li><code>isfile(path)</code>：如果<code>path</code>是普通文件，则返回 <code>True</code>。</li><li><code>isdir(path)</code>：如果<code>path</code>是目录（文件夹），则返回<code>True</code>。</li><li><code>join(path, *paths)</code>：合理地拼接一个或多个路径部分。返回值是<code>path</code>和<code>paths</code>所有值的连接，每个非空部分后面都紧跟一个目录分隔符 (<code>os.sep</code>)，除了最后一部分。这意味着如果最后一部分为空，则结果将以分隔符结尾。如果参数中某个部分是绝对路径，则绝对路径前的路径都将被丢弃，并从绝对路径部分开始连接。</li><li><code>splitext(path)</code>：将路径<code>path</code>拆分为一对，即<code>(root, ext)</code>，使得<code>root + ext == path</code>，其中<code>ext</code>为空或以英文句点开头，且最多包含一个句点。</li></ul><h3 id="uuid-uuid生成模块" tabindex="-1"><a class="header-anchor" href="#uuid-uuid生成模块" aria-hidden="true">#</a> uuid - UUID生成模块</h3><p><code>uuid</code>模块可以帮助我们生成全局唯一标识符（Universal Unique IDentity）。该模块提供了四个用于生成UUID的函数，分别是：</p><ul><li><code>uuid1()</code>：由MAC地址、当前时间戳、随机数生成，可以保证全球范围内的唯一性。</li><li><code>uuid3(namespace, name)</code>：通过计算命名空间和名字的MD5哈希摘要（“指纹”）值得到，保证了同一命名空间中不同名字的唯一性，和不同命名空间的唯一性，但同一命名空间的同一名字会生成相同的UUID。</li><li><code>uuid4()</code>：由伪随机数生成UUID，有一定的重复概率，该概率可以计算出来。</li><li><code>uuid5()</code>：算法与<code>uuid3</code>相同，只不过哈希函数用SHA-1取代了MD5。</li></ul><p>由于<code>uuid4</code>存在概率型重复，那么在真正需要全局唯一标识符的地方最好不用使用它。在分布式环境下，<code>uuid1</code>是很好的选择，因为它能够保证生成ID的全局唯一性。下面是在<strong>Python交互式环境中</strong>使用<code>uuid1</code>函数生成全局唯一标识符的例子。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>&gt;&gt;&gt; import uuid
&gt;&gt;&gt; uuid.uuid1().hex
&#39;622a8334baab11eaaa9c60f81da8d840&#39;
&gt;&gt;&gt; uuid.uuid1().hex
&#39;62b066debaab11eaaa9c60f81da8d840&#39;
&gt;&gt;&gt; uuid.uuid1().hex
&#39;642c0db0baab11eaaa9c60f81da8d840&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python标准库中有大量的模块，日常开发中有很多常见的任务在Python标准库中都有封装好的函数或类可供使用，这也是Python这门语言最可爱的地方。</p>`,23);function I(P,k){const d=l("ExternalLinkIcon");return t(),o("div",null,[r,u,h,m,e("p",null,[n("关于Base64编码的细节，大家可以参考"),e("a",v,[n("《Base64笔记》"),a(d)]),n("一文，Python标准库中的"),p,n("模块提供了"),b,n("和"),g,n("两个函数，专门用于实现Base64的编码和解码，下面演示了在"),y,n("中执行这两个函数的效果。")]),x,f,B,e("p",null,[n("哈希函数又称哈希算法或散列函数，是一种为已有的数据创建“数字指纹”（哈希摘要）的方法。哈希函数把数据压缩成摘要，对于相同的输入，哈希函数可以生成相同的摘要（数字指纹），需要注意的是这个过程并不可逆（不能通过摘要计算出输入的内容）。一个优质的哈希函数能够为不同的输入生成不同的摘要，出现哈希冲突（不同的输入产生相同的摘要）的概率极低，"),e("a",_,[n("MD5"),a(d)]),n("、"),G,n("就是这类好的哈希函数。")]),C])}const Z=s(c,[["render",I],["__file","第20课：Python标准库初探.html.vue"]]);export{Z as default};
