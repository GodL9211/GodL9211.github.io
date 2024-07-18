import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-9976b6d0.js";const d={},l=s(`<h2 id="第35课-python中的并发编程-2" tabindex="-1"><a class="header-anchor" href="#第35课-python中的并发编程-2" aria-hidden="true">#</a> 第35课：Python中的并发编程-2</h2><p>在上一课中我们说过，由于 GIL 的存在，CPython 中的多线程并不能发挥 CPU 的多核优势，如果希望突破 GIL 的限制，可以考虑使用多进程。对于多进程的程序，每个进程都有一个属于自己的 GIL，所以多进程不会受到 GIL 的影响。那么，我们应该如何在 Python 程序中创建和使用多进程呢？</p><p>###创建进程</p><p>在 Python 中可以基于<code>Process</code>类来创建进程，虽然进程和线程有着本质的差别，但是<code>Process</code>类和<code>Thread</code>类的用法却非常类似。在使用<code>Process</code>类的构造器创建对象时，也是通过<code>target</code>参数传入一个函数来指定进程要执行的代码，而<code>args</code>和<code>kwargs</code>参数可以指定该函数使用的参数值。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from multiprocessing import Process, current_process
from time import sleep


def sub_task(content, nums):
    # 通过current_process函数获取当前进程对象
    # 通过进程对象的pid和name属性获取进程的ID号和名字
    print(f&#39;PID: {current_process().pid}&#39;)
    print(f&#39;Name: {current_process().name}&#39;)
    # 通过下面的输出不难发现，每个进程都有自己的nums列表，进程之间本就不共享内存
    # 在创建子进程时复制了父进程的数据结构，三个进程从列表中pop(0)得到的值都是20
    counter, total = 0, nums.pop(0)
    print(f&#39;Loop count: {total}&#39;)
    sleep(0.5)
    while counter &lt; total:
        counter += 1
        print(f&#39;{counter}: {content}&#39;)
        sleep(0.01)


def main():
    nums = [20, 30, 40]
    # 创建并启动进程来执行指定的函数
    Process(target=sub_task, args=(&#39;Ping&#39;, nums)).start()
    Process(target=sub_task, args=(&#39;Pong&#39;, nums)).start()
    # 在主进程中执行sub_task函数
    sub_task(&#39;Good&#39;, nums)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码通过<code>current_process</code>函数获取当前进程对象，再通过进程对象的<code>pid</code>属性获取进程ID。在 Python 中，使用<code>os</code>模块的<code>getpid</code>函数也可以达到同样的效果。</p></blockquote><p>如果愿意，也可以使用<code>os</code>模块的<code>fork</code>函数来创建进程，调用该函数时，操作系统自动把当前进程（父进程）复制一份（子进程），父进程的<code>fork</code>函数会返回子进程的ID，而子进程中的<code>fork</code>函数会返回<code>0</code>，也就是说这个函数调用一次会在父进程和子进程中得到两个不同的返回值。需要注意的是，Windows 系统并不支持<code>fork</code>函数，如果你使用的是 Linux 或 macOS 系统，可以试试下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import os

print(f&#39;PID: {os.getpid()}&#39;)
pid = os.fork()
if pid == 0:
    print(f&#39;子进程 - PID: {os.getpid()}&#39;)
    print(&#39;Todo: 在子进程中执行的代码&#39;)
else:
    print(f&#39;父进程 - PID: {os.getpid()}&#39;)
    print(&#39;Todo: 在父进程中执行的代码&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简而言之，我们还是推荐大家通过直接使用<code>Process</code>类、继承<code>Process</code>类和使用进程池（<code>ProcessPoolExecutor</code>）这三种方式来创建和使用多进程，这三种方式不同于上面的<code>fork</code>函数，能够保证代码的兼容性和可移植性。具体的做法跟之前讲过的创建和使用多线程的方式比较接近，此处不再进行赘述。</p><h3 id="多进程和多线程的比较" tabindex="-1"><a class="header-anchor" href="#多进程和多线程的比较" aria-hidden="true">#</a> 多进程和多线程的比较</h3><p>对于爬虫这类 I/O 密集型任务来说，使用多进程并没有什么优势；但是对于计算密集型任务来说，多进程相比多线程，在效率上会有显著的提升，我们可以通过下面的代码来加以证明。下面的代码会通过多线程和多进程两种方式来判断一组大整数是不是质数，很显然这是一个计算密集型任务，我们将任务分别放到多个线程和多个进程中来加速代码的执行，让我们看看多线程和多进程的代码具体表现有何不同。</p><p>我们先实现一个多线程的版本，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import concurrent.futures

PRIMES = [
    1116281,
    1297337,
    104395303,
    472882027,
    533000389,
    817504243,
    982451653,
    112272535095293,
    112582705942171,
    112272535095293,
    115280095190773,
    115797848077099,
    1099726899285419
] * 5


def is_prime(n):
    &quot;&quot;&quot;判断素数&quot;&quot;&quot;
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return n != 1


def main():
    &quot;&quot;&quot;主函数&quot;&quot;&quot;
    with concurrent.futures.ThreadPoolExecutor(max_workers=16) as executor:
        for number, prime in zip(PRIMES, executor.map(is_prime, PRIMES)):
            print(&#39;%d is prime: %s&#39; % (number, prime))


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设上面的代码保存在名为<code>example.py</code>的文件中，在 Linux 或 macOS 系统上，可以使用<code>time python example.py</code>命令执行程序并获得操作系统关于执行时间的统计，在我的 macOS 上，某次的运行结果的最后一行输出如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python example09.py  38.69s user 1.01s system 101% cpu 39.213 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从运行结果可以看出，多线程的代码只能让 CPU 利用率达到100%，这其实已经证明了多线程的代码无法利用 CPU 多核特性来加速代码的执行，我们再看看多进程的版本，我们将上面代码中的线程池（<code>ThreadPoolExecutor</code>）更换为进程池（<code>ProcessPoolExecutor</code>）。</p><p>多进程的版本。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import concurrent.futures

PRIMES = [
    1116281,
    1297337,
    104395303,
    472882027,
    533000389,
    817504243,
    982451653,
    112272535095293,
    112582705942171,
    112272535095293,
    115280095190773,
    115797848077099,
    1099726899285419
] * 5


def is_prime(n):
    &quot;&quot;&quot;判断素数&quot;&quot;&quot;
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return n != 1


def main():
    &quot;&quot;&quot;主函数&quot;&quot;&quot;
    with concurrent.futures.ProcessPoolExecutor(max_workers=16) as executor:
        for number, prime in zip(PRIMES, executor.map(is_prime, PRIMES)):
            print(&#39;%d is prime: %s&#39; % (number, prime))


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：运行上面的代码时，可以通过操作系统的任务管理器（资源监视器）来查看是否启动了多个 Python 解释器进程。</p></blockquote><p>我们仍然通过<code>time python example.py</code>的方式来执行上述代码，运行结果的最后一行如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python example09.py 106.63s user 0.57s system 389% cpu 27.497 total
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出，多进程的版本在我使用的这台电脑上，让 CPU 的利用率达到了将近400%，而运行代码时用户态耗费的 CPU 的时间（106.63秒）几乎是代码运行总时间（27.497秒）的4倍，从这两点都可以看出，我的电脑使用了一款4核的 CPU。当然，要知道自己的电脑有几个 CPU 或几个核，可以直接使用下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import os

print(os.cpu_count())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>综上所述，多进程可以突破 GIL 的限制，充分利用 CPU 多核特性，对于计算密集型任务，这一点是相当重要的。常见的计算密集型任务包括科学计算、图像处理、音视频编解码等，如果这些计算密集型任务本身是可以并行的，那么使用多进程应该是更好的选择。</p><h3 id="进程间通信" tabindex="-1"><a class="header-anchor" href="#进程间通信" aria-hidden="true">#</a> 进程间通信</h3><p>在讲解进程间通信之前，先给大家一个任务：启动两个进程，一个输出“Ping”，一个输出“Pong”，两个进程输出的“Ping”和“Pong”加起来一共有50个时，就结束程序。听起来是不是非常简单，但是实际编写代码时，由于多个进程之间不能够像多个线程之间直接通过共享内存的方式交换数据，所以下面的代码是达不到我们想要的结果的。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from multiprocessing import Process
from time import sleep

counter = 0


def sub_task(string):
    global counter
    while counter &lt; 50:
        print(string, end=&#39;&#39;, flush=True)
        counter += 1
        sleep(0.01)

        
def main():
    Process(target=sub_task, args=(&#39;Ping&#39;, )).start()
    Process(target=sub_task, args=(&#39;Pong&#39;, )).start()


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码看起来没毛病，但是最后的结果是“Ping”和“Pong”各输出了50个。再次提醒大家，当我们在程序中创建进程的时候，子进程会复制父进程及其所有的数据结构，每个子进程有自己独立的内存空间，这也就意味着两个子进程中各有一个<code>counter</code>变量，它们都会从<code>0</code>加到<code>50</code>，所以结果就可想而知了。要解决这个问题比较简单的办法是使用<code>multiprocessing</code>模块中的<code>Queue</code>类，它是可以被多个进程共享的队列，底层是通过操作系统底层的管道和信号量（semaphore）机制来实现的，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time
from multiprocessing import Process, Queue


def sub_task(content, queue):
    counter = queue.get()
    while counter &lt; 50:
        print(content, end=&#39;&#39;, flush=True)
        counter += 1
        queue.put(counter)
        time.sleep(0.01)
        counter = queue.get()


def main():
    queue = Queue()
    queue.put(0)
    p1 = Process(target=sub_task, args=(&#39;Ping&#39;, queue))
    p1.start()
    p2 = Process(target=sub_task, args=(&#39;Pong&#39;, queue))
    p2.start()
    while p1.is_alive() and p2.is_alive():
        pass
    queue.put(50)


if __name__ == &#39;__main__&#39;:
    main()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：<code>multiprocessing.Queue</code>对象的<code>get</code>方法默认在队列为空时是会阻塞的，直到获取到数据才会返回。如果不希望该方法阻塞以及需要指定阻塞的超时时间，可以通过指定<code>block</code>和<code>timeout</code>参数进行设定。</p></blockquote><p>上面的代码通过<code>Queue</code>类的<code>get</code>和<code>put</code>方法让三个进程（<code>p1</code>、<code>p2</code>和主进程）实现了数据的共享，这就是所谓的进程间的通信，通过这种方式，当<code>Queue</code>中取出的值已经大于等于<code>50</code>时，<code>p1</code>和<code>p2</code>就会跳出<code>while</code>循环，从而终止进程的执行。代码第22行的循环是为了等待<code>p1</code>和<code>p2</code>两个进程中的一个结束，这时候主进程还需要向<code>Queue</code>中放置一个大于等于<code>50</code>的值，这样另一个尚未结束的进程也会因为读到这个大于等于<code>50</code>的值而终止。</p><p>进程间通信的方式还有很多，比如使用套接字也可以实现两个进程的通信，甚至于这两个进程并不在同一台主机上，有兴趣的读者可以自行了解。</p><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>在 Python 中，我们还可以通过<code>subprocess</code>模块的<code>call</code>函数执行其他的命令来创建子进程，相当于就是在我们的程序中调用其他程序，这里我们暂不探讨这些知识，有兴趣的读者可以自行研究。</p><p>对于Python开发者来说，以下情况需要考虑使用多线程：</p><ol><li>程序需要维护许多共享的状态（尤其是可变状态），Python 中的列表、字典、集合都是线程安全的（多个线程同时操作同一个列表、字典或集合，不会引发错误和数据问题），所以使用线程而不是进程维护共享状态的代价相对较小。</li><li>程序会花费大量时间在 I/O 操作上，没有太多并行计算的需求且不需占用太多的内存。</li></ol><p>那么在遇到下列情况时，应该考虑使用多进程：</p><ol><li>程序执行计算密集型任务（如：音视频编解码、数据压缩、科学计算等）。</li><li>程序的输入可以并行的分成块，并且可以将运算结果合并。</li><li>程序在内存使用方面没有任何限制且不强依赖于 I/O 操作（如读写文件、套接字等）。</li></ol>`,38),r=[l];function c(a,v){return n(),i("div",null,r)}const t=e(d,[["render",c],["__file","第35课：Python中的并发编程-2.html.vue"]]);export{t as default};
