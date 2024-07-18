import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as d}from"./app-9976b6d0.js";const s="/assets/34_01-86f4edea.png",l={},a=d('<h2 id="第34课-python中的并发编程-1" tabindex="-1"><a class="header-anchor" href="#第34课-python中的并发编程-1" aria-hidden="true">#</a> 第34课：Python中的并发编程-1</h2><p>现如今，我们使用的计算机早已是多 CPU 或多核的计算机，而我们使用的操作系统基本都支持“多任务”，这使得我们可以同时运行多个程序，也可以将一个程序分解为若干个相对独立的子任务，让多个子任务“并行”或“并发”的执行，从而缩短程序的执行时间，同时也让用户获得更好的体验。因此当下，不管用什么编程语言进行开发，实现“并行”或“并发”编程已经成为了程序员的标配技能。为了讲述如何在 Python 程序中实现“并行”或“并发”，我们需要先了解两个重要的概念：进程和线程。</p><h3 id="线程和进程" tabindex="-1"><a class="header-anchor" href="#线程和进程" aria-hidden="true">#</a> 线程和进程</h3><p>我们通过操作系统运行一个程序会创建出一个或多个进程，进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动。简单的说，进程是操作系统分配存储空间的基本单位，每个进程都有自己的地址空间、数据栈以及其他用于跟踪进程执行的辅助数据；操作系统管理所有进程的执行，为它们合理的分配资源。一个进程可以通过 fork 或 spawn 的方式创建新的进程来执行其他的任务，不过新的进程也有自己独立的内存空间，因此两个进程如果要共享数据，必须通过进程间通信机制来实现，具体的方式包括管道、信号、套接字等。</p><p>一个进程还可以拥有多个执行线索，简单的说就是拥有多个可以获得 CPU 调度的执行单元，这就是所谓的线程。由于线程在同一个进程下，它们可以共享相同的上下文，因此相对于进程而言，线程间的信息共享和通信更加容易。当然在单核 CPU 系统中，多个线程不可能同时执行，因为在某个时刻只有一个线程能够获得 CPU，多个线程通过共享 CPU 执行时间的方式来达到并发的效果。</p><p>在程序中使用多线程技术通常都会带来不言而喻的好处，最主要的体现在提升程序的性能和改善用户体验，今天我们使用的软件几乎都用到了多线程技术，这一点可以利用系统自带的进程监控工具（如 macOS 中的“活动监视器”、Windows 中的“任务管理器”）来证实，如下图所示。</p><img src="'+s+`" width="100%"><p>这里，我们还需要跟大家再次强调两个概念：<strong>并发</strong>（concurrency）和<strong>并行</strong>（parallel）。<strong>并发</strong>通常是指同一时刻只能有一条指令执行，但是多个线程对应的指令被快速轮换地执行。比如一个处理器，它先执行线程 A 的指令一段时间，再执行线程 B 的指令一段时间，再切回到线程 A 执行一段时间。由于处理器执行指令的速度和切换的速度极快，人们完全感知不到计算机在这个过程中有多个线程切换上下文执行的操作，这就使得宏观上看起来多个线程在同时运行，但微观上其实只有一个线程在执行。<strong>并行</strong>是指同一时刻，有多条指令在多个处理器上同时执行，并行必须要依赖于多个处理器，不论是从宏观上还是微观上，多个线程可以在同一时刻一起执行的。很多时候，我们并不用严格区分并发和并行两个词，所以我们有时候也把 Python 中的多线程、多进程以及异步 I/O 都视为实现并发编程的手段，但实际上前面两者也可以实现并行编程，当然这里还有一个全局解释器锁（GIL）的问题，我们稍后讨论。</p><h3 id="多线程编程" tabindex="-1"><a class="header-anchor" href="#多线程编程" aria-hidden="true">#</a> 多线程编程</h3><p>Python 标准库中<code>threading</code>模块的<code>Thread</code>类可以帮助我们非常轻松的实现多线程编程。我们用一个联网下载文件的例子来对比使用多线程和不使用多线程到底有什么区别，代码如下所示。</p><p>不使用多线程的下载。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time


def download(*, filename):
    start = time.time()
    print(f&#39;开始下载 {filename}.&#39;)
    time.sleep(random.randint(3, 6))
    print(f&#39;{filename} 下载完成.&#39;)
    end = time.time()
    print(f&#39;下载耗时: {end - start:.3f}秒.&#39;)


def main():
    start = time.time()
    download(filename=&#39;Python从入门到住院.pdf&#39;)
    download(filename=&#39;MySQL从删库到跑路.avi&#39;)
    download(filename=&#39;Linux从精通到放弃.mp4&#39;)
    end = time.time()
    print(f&#39;总耗时: {end - start:.3f}秒.&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码并没有真正实现联网下载的功能，而是通过<code>time.sleep()</code>休眠一段时间来模拟下载文件需要一些时间上的开销，跟实际下载的状况比较类似。</p></blockquote><p>运行上面的代码，可以得到如下所示的运行结果。可以看出，当我们的程序只有一个工作线程时，每个下载任务都需要等待上一个下载任务执行结束才能开始，所以程序执行的总耗时是三个下载任务各自执行时间的总和。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开始下载Python从入门到住院.pdf.
Python从入门到住院.pdf下载完成.
下载耗时: 3.005秒.
开始下载MySQL从删库到跑路.avi.
MySQL从删库到跑路.avi下载完成.
下载耗时: 5.006秒.
开始下载Linux从精通到放弃.mp4.
Linux从精通到放弃.mp3下载完成.
下载耗时: 6.007秒.
总耗时: 14.018秒.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，上面的三个下载任务之间并没有逻辑上的因果关系，三者是可以“并发”的，下一个下载任务没有必要等待上一个下载任务结束，为此，我们可以使用多线程编程来改写上面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time
from threading import Thread


def download(*, filename):
    start = time.time()
    print(f&#39;开始下载 {filename}.&#39;)
    time.sleep(random.randint(3, 6))
    print(f&#39;{filename} 下载完成.&#39;)
    end = time.time()
    print(f&#39;下载耗时: {end - start:.3f}秒.&#39;)


def main():
    threads = [
        Thread(target=download, kwargs={&#39;filename&#39;: &#39;Python从入门到住院.pdf&#39;}),
        Thread(target=download, kwargs={&#39;filename&#39;: &#39;MySQL从删库到跑路.avi&#39;}),
        Thread(target=download, kwargs={&#39;filename&#39;: &#39;Linux从精通到放弃.mp4&#39;})
    ]
    start = time.time()
    # 启动三个线程
    for thread in threads:
        thread.start()
    # 等待线程结束
    for thread in threads:
        thread.join()
    end = time.time()
    print(f&#39;总耗时: {end - start:.3f}秒.&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>某次的运行结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>开始下载 Python从入门到住院.pdf.
开始下载 MySQL从删库到跑路.avi.
开始下载 Linux从精通到放弃.mp4.
MySQL从删库到跑路.avi 下载完成.
下载耗时: 3.005秒.
Python从入门到住院.pdf 下载完成.
下载耗时: 5.006秒.
Linux从精通到放弃.mp4 下载完成.
下载耗时: 6.003秒.
总耗时: 6.004秒.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的运行结果可以发现，整个程序的执行时间几乎等于耗时最长的一个下载任务的执行时间，这也就意味着，三个下载任务是并发执行的，不存在一个等待另一个的情况，这样做很显然提高了程序的执行效率。简单的说，如果程序中有非常耗时的执行单元，而这些耗时的执行单元之间又没有逻辑上的因果关系，即 B 单元的执行不依赖于 A 单元的执行结果，那么 A 和 B 两个单元就可以放到两个不同的线程中，让他们并发的执行。这样做的好处除了减少程序执行的等待时间，还可以带来更好的用户体验，因为一个单元的阻塞不会造成程序的“假死”，因为程序中还有其他的单元是可以运转的。</p><h4 id="使用-thread-类创建线程对象" tabindex="-1"><a class="header-anchor" href="#使用-thread-类创建线程对象" aria-hidden="true">#</a> 使用 Thread 类创建线程对象</h4><p>通过上面的代码可以看出，直接使用<code>Thread</code>类的构造器就可以创建线程对象，而线程对象的<code>start()</code>方法可以启动一个线程。线程启动后会执行<code>target</code>参数指定的函数，当然前提是获得 CPU 的调度；如果<code>target</code>指定的线程要执行的目标函数有参数，需要通过<code>args</code>参数为其进行指定，对于关键字参数，可以通过<code>kwargs</code>参数进行传入。<code>Thread</code>类的构造器还有很多其他的参数，我们遇到的时候再为大家进行讲解，目前需要大家掌握的，就是<code>target</code>、<code>args</code>和<code>kwargs</code>。</p><h4 id="继承-thread-类自定义线程" tabindex="-1"><a class="header-anchor" href="#继承-thread-类自定义线程" aria-hidden="true">#</a> 继承 Thread 类自定义线程</h4><p>除了上面的代码展示的创建线程的方式外，还可以通过继承<code>Thread</code>类并重写<code>run()</code>方法的方式来自定义线程，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time
from threading import Thread


class DownloadThread(Thread):

    def __init__(self, filename):
        self.filename = filename
        super().__init__()

    def run(self):
        start = time.time()
        print(f&#39;开始下载 {self.filename}.&#39;)
        time.sleep(random.randint(3, 6))
        print(f&#39;{self.filename} 下载完成.&#39;)
        end = time.time()
        print(f&#39;下载耗时: {end - start:.3f}秒.&#39;)


def main():
    threads = [
        DownloadThread(&#39;Python从入门到住院.pdf&#39;),
        DownloadThread(&#39;MySQL从删库到跑路.avi&#39;),
        DownloadThread(&#39;Linux从精通到放弃.mp4&#39;)
    ]
    start = time.time()
    # 启动三个线程
    for thread in threads:
        thread.start()
    # 等待线程结束
    for thread in threads:
        thread.join()
    end = time.time()
    print(f&#39;总耗时: {end - start:.3f}秒.&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用线程池" tabindex="-1"><a class="header-anchor" href="#使用线程池" aria-hidden="true">#</a> 使用线程池</h4><p>我们还可以通过线程池的方式将任务放到多个线程中去执行，通过线程池来使用线程应该是多线程编程最理想的选择。事实上，线程的创建和释放都会带来较大的开销，频繁的创建和释放线程通常都不是很好的选择。利用线程池，可以提前准备好若干个线程，在使用的过程中不需要再通过自定义的代码创建和释放线程，而是直接复用线程池中的线程。Python 内置的<code>concurrent.futures</code>模块提供了对线程池的支持，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time
from concurrent.futures import ThreadPoolExecutor
from threading import Thread


def download(*, filename):
    start = time.time()
    print(f&#39;开始下载 {filename}.&#39;)
    time.sleep(random.randint(3, 6))
    print(f&#39;{filename} 下载完成.&#39;)
    end = time.time()
    print(f&#39;下载耗时: {end - start:.3f}秒.&#39;)


def main():
    with ThreadPoolExecutor(max_workers=4) as pool:
        filenames = [&#39;Python从入门到住院.pdf&#39;, &#39;MySQL从删库到跑路.avi&#39;, &#39;Linux从精通到放弃.mp4&#39;]
        start = time.time()
        for filename in filenames:
            pool.submit(download, filename=filename)
    end = time.time()
    print(f&#39;总耗时: {end - start:.3f}秒.&#39;)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守护线程" tabindex="-1"><a class="header-anchor" href="#守护线程" aria-hidden="true">#</a> 守护线程</h3><p>所谓“守护线程”就是在主线程结束的时候，不值得再保留的执行线程。这里的不值得保留指的是守护线程会在其他非守护线程全部运行结束之后被销毁，它守护的是当前进程内所有的非守护线程。简单的说，守护线程会跟随主线程一起挂掉，而主线程的生命周期就是一个进程的生命周期。如果不理解，我们可以看一段简单的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time
from threading import Thread


def display(content):
    while True:
        print(content, end=&#39;&#39;, flush=True)
        time.sleep(0.1)


def main():
    Thread(target=display, args=(&#39;Ping&#39;, )).start()
    Thread(target=display, args=(&#39;Pong&#39;, )).start()


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中，我们将<code>print</code>函数的参数<code>flush</code>设置为<code>True</code>，这是因为<code>flush</code>参数的值如果为<code>False</code>，而<code>print</code>又没有做换行处理，就会导致每次<code>print</code>输出的内容被放到操作系统的输出缓冲区，直到缓冲区被输出的内容塞满，才会清空缓冲区产生一次输出。上述现象是操作系统为了减少 I/O 中断，提升 CPU 利用率做出的设定，为了让代码产生直观交互，我们才将<code>flush</code>参数设置为<code>True</code>，强制每次输出都清空输出缓冲区。</p></blockquote><p>上面的代码运行起来之后是不会停止的，因为两个子线程中都有死循环，除非你手动中断代码的执行。但是，如果在创建线程对象时，将名为<code>daemon</code>的参数设置为<code>True</code>，这两个线程就会变成守护线程，那么在其他线程结束时，即便有死循环，两个守护线程也会挂掉，不会再继续执行下去，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time
from threading import Thread


def display(content):
    while True:
        print(content, end=&#39;&#39;, flush=True)
        time.sleep(0.1)


def main():
    Thread(target=display, args=(&#39;Ping&#39;, ), daemon=True).start()
    Thread(target=display, args=(&#39;Pong&#39;, ), daemon=True).start()
    time.sleep(5)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，我们在主线程中添加了一行<code>time.sleep(5)</code>让主线程休眠5秒，在这个过程中，输出<code>Ping</code>和<code>Pong</code>的守护线程会持续运转，直到主线程在5秒后结束，这两个守护线程也被销毁，不再继续运行。</p><blockquote><p><strong>思考</strong>：如果将上面代码第12行的<code>daemon=True</code>去掉，代码会怎样执行？有兴趣的读者可以尝试一下，并看看实际执行的结果跟你想象的是否一致。</p></blockquote><h3 id="资源竞争" tabindex="-1"><a class="header-anchor" href="#资源竞争" aria-hidden="true">#</a> 资源竞争</h3><p>在编写多线程代码时，不可避免的会遇到多个线程竞争同一个资源（对象）的情况。在这种情况下，如果没有合理的机制来保护被竞争的资源，那么就有可能出现非预期的状况。下面的代码创建了<code>100</code>个线程向同一个银行账户（初始余额为<code>0</code>元）转账，每个线程转账金额为<code>1</code>元。在正常的情况下，我们的银行账户最终的余额应该是<code>100</code>元，但是运行下面的代码我们并不能得到<code>100</code>元这个结果。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time

from concurrent.futures import ThreadPoolExecutor


class Account(object):
    &quot;&quot;&quot;银行账户&quot;&quot;&quot;

    def __init__(self):
        self.balance = 0.0

    def deposit(self, money):
        &quot;&quot;&quot;存钱&quot;&quot;&quot;
        new_balance = self.balance + money
        time.sleep(0.01)
        self.balance = new_balance


def main():
    &quot;&quot;&quot;主函数&quot;&quot;&quot;
    account = Account()
    with ThreadPoolExecutor(max_workers=16) as pool:
        for _ in range(100):
            pool.submit(account.deposit, 1)
    print(account.balance)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中的<code>Account</code>类代表了银行账户，它的<code>deposit</code>方法代表存款行为，参数<code>money</code>代表存入的金额，该方法通过<code>time.sleep</code>函数模拟受理存款需要一段时间。我们通过线程池的方式启动了<code>100</code>个线程向一个账户转账，但是上面的代码并不能运行出<code>100</code>这个我们期望的结果，这就是在多个线程竞争一个资源的时候，可能会遇到的数据不一致的问题。注意上面代码的第<code>14</code>行，当多个线程都执行到这行代码时，它们会在相同的余额上执行加上存入金额的操作，这就会造成“丢失更新”现象，即之前修改数据的成果被后续的修改给覆盖掉了，所以才得不到正确的结果。</p><p>要解决上面的问题，可以使用锁机制，通过锁对操作数据的关键代码加以保护。Python 标准库的<code>threading</code>模块提供了<code>Lock</code>和<code>RLock</code>类来支持锁机制，这里我们不去深究二者的区别，建议大家直接使用<code>RLock</code>。接下来，我们给银行账户添加一个锁对象，通过锁对象来解决刚才存款时发生“丢失更新”的问题，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time

from concurrent.futures import ThreadPoolExecutor
from threading import RLock


class Account(object):
    &quot;&quot;&quot;银行账户&quot;&quot;&quot;

    def __init__(self):
        self.balance = 0.0
        self.lock = RLock()

    def deposit(self, money):
        # 获得锁
        self.lock.acquire()
        try:
            new_balance = self.balance + money
            time.sleep(0.01)
            self.balance = new_balance
        finally:
            # 释放锁
            self.lock.release()


def main():
    &quot;&quot;&quot;主函数&quot;&quot;&quot;
    account = Account()
    with ThreadPoolExecutor(max_workers=16) as pool:
        for _ in range(100):
            pool.submit(account.deposit, 1)
    print(account.balance)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，获得锁和释放锁的操作也可以通过上下文语法来实现，使用上下文语法会让代码更加简单优雅，这也是我们推荐大家使用的方式。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time

from concurrent.futures import ThreadPoolExecutor
from threading import RLock


class Account(object):
    &quot;&quot;&quot;银行账户&quot;&quot;&quot;

    def __init__(self):
        self.balance = 0.0
        self.lock = RLock()

    def deposit(self, money):
        # 通过上下文语法获得锁和释放锁
        with self.lock:
            new_balance = self.balance + money
            time.sleep(0.01)
            self.balance = new_balance


def main():
    &quot;&quot;&quot;主函数&quot;&quot;&quot;
    account = Account()
    with ThreadPoolExecutor(max_workers=16) as pool:
        for _ in range(100):
            pool.submit(account.deposit, 1)
    print(account.balance)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>思考</strong>：将上面的代码修改为5个线程向银行账户存钱，5个线程从银行账户取钱，取钱的线程在银行账户余额不足时，需要停下来等待存钱的线程将钱存入后再尝试取钱。这里需要用到线程调度的知识，大家可以自行研究下<code>threading</code>模块中的<code>Condition</code>类，看看是否能够完成这个任务。</p></blockquote><h3 id="gil问题" tabindex="-1"><a class="header-anchor" href="#gil问题" aria-hidden="true">#</a> GIL问题</h3><p>如果使用官方的 Python 解释器（通常称之为 CPython）运行 Python 程序，我们并不能通过使用多线程的方式将 CPU 的利用率提升到逼近400%（对于4核 CPU）或逼近800%（对于8核 CPU）这样的水平，因为 CPython 在执行代码时，会受到 GIL（全局解释器锁）的限制。具体的说，CPython 在执行任何代码时，都需要对应的线程先获得 GIL，然后每执行100条（字节码）指令，CPython 就会让获得 GIL 的线程主动释放 GIL，这样别的线程才有机会执行。因为 GIL 的存在，无论你的 CPU 有多少个核，我们编写的 Python 代码也没有机会真正并行的执行。</p><p>GIL 是官方 Python 解释器在设计上的历史遗留问题，要解决这个问题，让多线程能够发挥 CPU 的多核优势，需要重新实现一个不带 GIL 的 Python 解释器。这个问题按照官方的说法，在 Python 发布4.0版本时会得到解决，就让我们拭目以待吧。当下，对于 CPython 而言，如果希望充分发挥 CPU 的多核优势，可以考虑使用多进程，因为每个进程都对应一个 Python 解释器，因此每个进程都有自己独立的 GIL，这样就可以突破 GIL 的限制。在下一个章节中，我们会为大家介绍关于多进程的相关知识，并对多线程和多进程的代码及其执行效果进行比较。</p>`,48),r=[a];function v(c,m){return e(),i("div",null,r)}const u=n(l,[["render",v],["__file","第34课：Python中的并发编程-1.html.vue"]]);export{u as default};
