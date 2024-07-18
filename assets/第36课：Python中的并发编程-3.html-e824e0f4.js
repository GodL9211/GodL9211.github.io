import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c,a as n,b as e,e as o,f as i}from"./app-9976b6d0.js";const r={},t=i('<h2 id="第36课-python中的并发编程-3" tabindex="-1"><a class="header-anchor" href="#第36课-python中的并发编程-3" aria-hidden="true">#</a> 第36课：Python中的并发编程-3</h2><p>爬虫是典型的 I/O 密集型任务，I/O 密集型任务的特点就是程序会经常性的因为 I/O 操作而进入阻塞状态，比如我们之前使用<code>requests</code>获取页面代码或二进制内容，发出一个请求之后，程序必须要等待网站返回响应之后才能继续运行，如果目标网站不是很给力或者网络状况不是很理想，那么等待响应的时间可能会很久，而在这个过程中整个程序是一直阻塞在那里，没有做任何的事情。通过前面的课程，我们已经知道了可以通过多线程的方式为爬虫提速，使用多线程的本质就是，当一个线程阻塞的时候，程序还有其他的线程可以继续运转，因此整个程序就不会在阻塞和等待中浪费了大量的时间。</p><p>事实上，还有一种非常适合 I/O 密集型任务的并发编程方式，我们称之为异步编程，你也可以将它称为异步 I/O。这种方式并不需要启动多个线程或多个进程来实现并发，它是通过多个子程序相互协作的方式来提升 CPU 的利用率，解决了 I/O 密集型任务 CPU 利用率很低的问题，我一般将这种方式称为“协作式并发”。这里，我不打算探讨操作系统的各种 I/O 模式，因为这对很多读者来说都太过抽象；但是我们得先抛出两组概念给大家，一组叫做“阻塞”和“非阻塞”，一组叫做“同步”和“异步”。</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><h4 id="阻塞" tabindex="-1"><a class="header-anchor" href="#阻塞" aria-hidden="true">#</a> 阻塞</h4><p>阻塞状态指程序未得到所需计算资源时被挂起的状态。程序在等待某个操作完成期间，自身无法继续处理其他的事情，则称该程序在该操作上是阻塞的。阻塞随时都可能发生，最典型的就是 I/O 中断（包括网络 I/O 、磁盘 I/O 、用户输入等）、休眠操作、等待某个线程执行结束，甚至包括在 CPU 切换上下文时，程序都无法真正的执行，这就是所谓的阻塞。</p><h4 id="非阻塞" tabindex="-1"><a class="header-anchor" href="#非阻塞" aria-hidden="true">#</a> 非阻塞</h4><p>程序在等待某操作过程中，自身不被阻塞，可以继续处理其他的事情，则称该程序在该操作上是非阻塞的。非阻塞并不是在任何程序级别、任何情况下都可以存在的。仅当程序封装的级别可以囊括独立的子程序单元时，它才可能存在非阻塞状态。显然，某个操作的阻塞可能会导程序耗时以及效率低下，所以我们会希望把它变成非阻塞的。</p><h4 id="同步" tabindex="-1"><a class="header-anchor" href="#同步" aria-hidden="true">#</a> 同步</h4><p>不同程序单元为了完成某个任务，在执行过程中需靠某种通信方式以协调一致，我们称这些程序单元是同步执行的。例如前面讲过的给银行账户存钱的操作，我们在代码中使用了“锁”作为通信信号，让多个存钱操作强制排队顺序执行，这就是所谓的同步。</p><h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4><p>不同程序单元在执行过程中无需通信协调，也能够完成一个任务，这种方式我们就称之为异步。例如，使用爬虫下载页面时，调度程序调用下载程序后，即可调度其他任务，而无需与该下载任务保持通信以协调行为。不同网页的下载、保存等操作都是不相关的，也无需相互通知协调。很显然，异步操作的完成时刻和先后顺序并不能确定。</p>',12),v=n("strong",null,"消息通信机制",-1),m=n("strong",null,"程序在等待消息时状态",-1),u={href:"https://item.jd.com/11880047.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<h3 id="生成器和协程" tabindex="-1"><a class="header-anchor" href="#生成器和协程" aria-hidden="true">#</a> 生成器和协程</h3><p>前面我们说过，异步编程是一种“协作式并发”，即通过多个子程序相互协作的方式提升 CPU 的利用率，从而减少程序在阻塞和等待中浪费的时间，最终达到并发的效果。我们可以将多个相互协作的子程序称为“协程”，它是实现异步编程的关键。在介绍协程之前，我们先通过下面的代码，看看什么是生成器。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def fib(max_count):
    a, b = 0, 1
    for _ in range(max_count):
        a, b = b, a + b
        yield a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们编写了一个生成斐波那契数列的生成器，调用上面的<code>fib</code>函数并不是执行该函数获得返回值，因为<code>fib</code>函数中有一个特殊的关键字<code>yield</code>。这个关键字使得<code>fib</code>函数跟普通的函数有些区别，调用该函数会得到一个生成器对象，我们可以通过下面的代码来验证这一点。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>gen_obj = fib(20)
print(gen_obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;generator object fib at 0x106daee40&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以使用内置函数<code>next</code>从生成器对象中获取斐波那契数列的值，也可以通过<code>for-in</code>循环对生成器能够提供的值进行遍历，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>for value in gen_obj:
    print(value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成器经过预激活，就是一个协程，它可以跟其他子程序协作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def calc_average():
    total, counter = 0, 0
    avg_value = None
    while True:
        curr_value = yield avg_value
        total += curr_value
        counter += 1
        avg_value = total / counter


def main():
    obj = calc_average()
    # 生成器预激活
    obj.send(None)
    for _ in range(5):
        print(obj.send(float(input())))


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>main</code>函数首先通过生成器对象的<code>send</code>方法发送一个<code>None</code>值来将其激活为协程，也可以通过<code>next(obj)</code>达到同样的效果。接下来，协程对象会接收<code>main</code>函数发送的数据并产出（<code>yield</code>）数据的平均值。通过上面的例子，不知道大家是否看出两段子程序是怎么“协作”的。</p><h3 id="异步函数" tabindex="-1"><a class="header-anchor" href="#异步函数" aria-hidden="true">#</a> 异步函数</h3><p>Python 3.5版本中，引入了两个非常有意思的元素，一个叫<code>async</code>，一个叫<code>await</code>，它们在Python 3.7版本中成为了正式的关键字。通过这两个关键字，可以简化协程代码的编写，可以用更为简单的方式让多个子程序很好的协作起来。我们通过一个例子来加以说明，请大家先看看下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time


def display(num):
    time.sleep(1)
    print(num)


def main():
    start = time.time()
    for i in range(1, 10):
        display(i)
    end = time.time()
    print(f&#39;{end - start:.3f}秒&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码每次执行都会依次输出<code>1</code>到<code>9</code>的数字，每个间隔<code>1</code>秒钟，整个代码需要执行大概需要<code>9</code>秒多的时间，这一点我相信大家都能看懂。不知道大家是否意识到，这段代码就是以同步和阻塞的方式执行的，同步可以从代码的输出看出来，而阻塞是指在调用<code>display</code>函数发生休眠时，整个代码的其他部分都不能继续执行，必须等待休眠结束。</p><p>接下来，我们尝试用异步的方式改写上面的代码，让<code>display</code>函数以异步的方式运转。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import asyncio
import time


async def display(num):
    await asyncio.sleep(1)
    print(num)


def main():
    start = time.time()
    objs = [display(i) for i in range(1, 10)]
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(objs))
    loop.close()
    end = time.time()
    print(f&#39;{end - start:.3f}秒&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 中的<code>asyncio</code>模块提供了对异步 I/O 的支持。上面的代码中，我们首先在<code>display</code>函数前面加上了<code>async</code>关键字使其变成一个异步函数，调用异步函数不会执行函数体而是获得一个协程对象。我们将<code>display</code>函数中的<code>time.sleep(1)</code>修改为<code>await asyncio.sleep(1)</code>，二者的区别在于，后者不会让整个代码陷入阻塞，因为<code>await</code>操作会让其他协作的子程序有获得 CPU 资源而得以运转的机会。为了让这些子程序可以协作起来，我们需要将他们放到一个事件循环（实现消息分派传递的系统）上，因为<strong>当协程遭遇 I/O 操作阻塞时，就会到事件循环中监听 I/O 操作是否完成，并注册自身的上下文以及自身的唤醒函数（以便恢复执行），之后该协程就变为阻塞状态</strong>。上面的第12行代码创建了<code>9</code>个协程对象并放到一个列表中，第13行代码通过<code>asyncio</code>模块的<code>get_event_loop</code>函数获得了系统的事件循环，第14行通过<code>asyncio</code>模块的<code>run_until_complete</code>函数将协程对象挂载到事件循环上。执行上面的代码会发现，<code>9</code>个分别会阻塞<code>1</code>秒钟的协程总共只阻塞了约<code>1</code>秒种的时间，因为<strong>阻塞的协程对象会放弃对 CPU 的占有而不是让 CPU 处于闲置状态，这种方式大大的提升了 CPU 的利用率</strong>。而且我们还会注意到，数字并不是按照从<code>1</code>到<code>9</code>的顺序打印输出的，这正是我们想要的结果，说明它们是<strong>异步执行</strong>的。对于爬虫这样的 I/O 密集型任务来说，这种协作式并发在很多场景下是比使用多线程更好的选择，因为这种做法减少了管理和维护多个线程以及多个线程切换所带来的开销。</p><h3 id="aiohttp库" tabindex="-1"><a class="header-anchor" href="#aiohttp库" aria-hidden="true">#</a> aiohttp库</h3><p>我们之前使用的<code>requests</code>三方库并不支持异步 I/O，如果希望使用异步 I/O 的方式来加速爬虫代码的执行，我们可以安装和使用名为<code>aiohttp</code>的三方库。</p><p>安装<code>aiohttp</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install aiohttp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的代码使用<code>aiohttp</code>抓取了<code>10</code>个网站的首页并解析出它们的标题。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import asyncio
import re

import aiohttp
from aiohttp import ClientSession

TITLE_PATTERN = re.compile(r&#39;&lt;title.*?&gt;(.*?)&lt;/title&gt;&#39;, re.DOTALL)


async def fetch_page_title(url):
    async with aiohttp.ClientSession(headers={
        &#39;User-Agent&#39;: &#39;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36&#39;,
    }) as session:  # type: ClientSession
        async with session.get(url, ssl=False) as resp:
            if resp.status == 200:
                html_code = await resp.text()
                matcher = TITLE_PATTERN.search(html_code)
                title = matcher.group(1).strip()
                print(title)


def main():
    urls = [
        &#39;https://www.python.org/&#39;,
        &#39;https://www.jd.com/&#39;,
        &#39;https://www.baidu.com/&#39;,
        &#39;https://www.taobao.com/&#39;,
        &#39;https://git-scm.com/&#39;,
        &#39;https://www.sohu.com/&#39;,
        &#39;https://gitee.com/&#39;,
        &#39;https://www.amazon.com/&#39;,
        &#39;https://www.usa.gov/&#39;,
        &#39;https://www.nasa.gov/&#39;
    ]
    objs = [fetch_page_title(url) for url in urls]
    loop = asyncio.get_event_loop()
    loop.run_until_complete(asyncio.wait(objs))
    loop.close()


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！
搜狐
淘宝网 - 淘！我喜欢
百度一下，你就知道
Gitee - 基于 Git 的代码托管和研发协作平台
Git
NASA
Official Guide to Government Information and Services   &amp;#124; USAGov
Amazon.com. Spend less. Smile more.
Welcome to Python.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可以看出，网站首页标题的输出顺序跟它们的 URL 在列表中的顺序没有关系。代码的第11行到第13行创建了<code>ClientSession</code>对象，通过它的<code>get</code>方法可以向指定的 URL 发起请求，如第14行所示，跟<code>requests</code>中的<code>Session</code>对象并没有本质区别，唯一的区别是这里使用了异步上下文。代码第16行的<code>await</code>会让因为 I/O 操作阻塞的子程序放弃对 CPU 的占用，这使得其他的子程序可以运转起来去抓取页面。代码的第17行和第18行使用了正则表达式捕获组操作解析网页标题。<code>fetch_page_title</code>是一个被<code>async</code>关键字修饰的异步函数，调用该函数会获得协程对象，如代码第35行所示。后面的代码跟之前的例子没有什么区别，相信大家能够理解。</p><p>大家可以尝试将<code>aiohttp</code>换回到<code>requests</code>，看看不使用异步 I/O 也不使用多线程，到底和上面的代码有什么区别，相信通过这样的对比，大家能够更深刻的理解我们之前强调的几个概念：同步和异步，阻塞和非阻塞。</p>`,29);function p(h,_){const d=a("ExternalLinkIcon");return l(),c("div",null,[t,n("p",null,[e("很多人都不太能准确的把握这几个概念，这里我们简单的总结一下，同步与异步的关注点是"),v,e("，最终表现出来的是“有序”和“无序”的区别；阻塞和非阻塞的关注点是"),m,e("，最终表现出来的是程序在等待时能不能做点别的。如果想深入理解这些内容，推荐大家阅读经典著作"),n("a",u,[e("《UNIX网络编程》"),o(d)]),e("，这本书非常的赞。")]),b])}const f=s(r,[["render",p],["__file","第36课：Python中的并发编程-3.html.vue"]]);export{f as default};
