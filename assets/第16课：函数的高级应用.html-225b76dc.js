import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9976b6d0.js";const s={},l=d(`<h2 id="第16课-函数的高级应用" tabindex="-1"><a class="header-anchor" href="#第16课-函数的高级应用" aria-hidden="true">#</a> 第16课：函数的高级应用</h2><p>在上一节课中，我们已经对函数进行了更为深入的研究，还探索了Python中的高阶函数和Lambda函数。在这些知识的基础上，这节课我们为大家分享两个和函数相关的内容，一个是装饰器，一个是函数的递归调用。</p><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>装饰器是Python中<strong>用一个函数装饰另外一个函数或类并为其提供额外功能</strong>的语法现象。装饰器本身是一个函数，它的参数是被装饰的函数或类，它的返回值是一个带有装饰功能的函数。很显然，装饰器是一个高阶函数，它的参数和返回值都是函数。下面我们先通过一个简单的例子来说明装饰器的写法和作用，假设已经有名为<code>downlaod</code>和<code>upload</code>的两个函数，分别用于文件的上传和下载，下面的代码用休眠一段随机时间的方式模拟了下载和上传需要花费的时间，并没有联网做上传下载。</p><blockquote><p><strong>说明</strong>：用Python语言实现联网的上传下载也很简单，继续你的学习，这个环节很快就会来到。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time


def download(filename):
    print(f&#39;开始下载{filename}.&#39;)
    time.sleep(random.randint(2, 6))
    print(f&#39;{filename}下载完成.&#39;)

    
def upload(filename):
    print(f&#39;开始上传{filename}.&#39;)
    time.sleep(random.randint(4, 8))
    print(f&#39;{filename}上传完成.&#39;)

    
download(&#39;MySQL从删库到跑路.avi&#39;)
upload(&#39;Python从入门到住院.pdf&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们希望知道调用<code>download</code>和<code>upload</code>函数做文件上传下载到底用了多少时间，这个应该如何实现呢？相信很多小伙伴已经想到了，我们可以在函数开始执行的时候记录一个时间，在函数调用结束后记录一个时间，两个时间相减就可以计算出下载或上传的时间，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>start = time.time()
download(&#39;MySQL从删库到跑路.avi&#39;)
end = time.time()
print(f&#39;花费时间: {end - start:.3f}秒&#39;)
start = time.time()
upload(&#39;Python从入门到住院.pdf&#39;)
end = time.time()
print(f&#39;花费时间: {end - start:.3f}秒&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码，我们可以得到下载和上传花费的时间，但不知道大家是否注意到，上面记录时间、计算和显示执行时间的代码都是重复代码。有编程经验的人都知道，<strong>重复的代码是万恶之源</strong>，那么有没有办法在不写重复代码的前提下，用一种简单优雅的方式记录下函数的执行时间呢？在Python中，装饰器就是解决这类问题的最佳选择。我们可以把记录函数执行时间的功能封装到一个装饰器中，在有需要的地方直接使用这个装饰器就可以了，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time


# 定义装饰器函数，它的参数是被装饰的函数或类
def record_time(func):
    
    # 定义一个带装饰功能（记录被装饰函数的执行时间）的函数
    # 因为不知道被装饰的函数有怎样的参数所以使用*args和**kwargs接收所有参数
    # 在Python中函数可以嵌套的定义（函数中可以再定义函数）
    def wrapper(*args, **kwargs):
        # 在执行被装饰的函数之前记录开始时间
        start = time.time()
        # 执行被装饰的函数并获取返回值
        result = func(*args, **kwargs)
        # 在执行被装饰的函数之后记录结束时间
        end = time.time()
        # 计算和显示被装饰函数的执行时间
        print(f&#39;{func.__name__}执行时间: {end - start:.3f}秒&#39;)
        # 返回被装饰函数的返回值（装饰器通常不会改变被装饰函数的执行结果）
        return result
    
    # 返回带装饰功能的wrapper函数
    return wrapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上面的装饰器函数有两种方式，第一种方式就是直接调用装饰器函数，传入被装饰的函数并获得返回值，我们可以用这个返回值直接覆盖原来的函数，那么在调用时就已经获得了装饰器提供的额外的功能（记录执行时间），大家可以试试下面的代码就明白了。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>download = record_time(download)
upload = record_time(upload)
download(&#39;MySQL从删库到跑路.avi&#39;)
upload(&#39;Python从入门到住院.pdf&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中已经没有重复代码了，虽然写装饰器会花费一些心思，但是这是一个一劳永逸的骚操作，如果还有其他的函数也需要记录执行时间，按照上面的代码如法炮制即可。</p><p>在Python中，使用装饰器很有更为便捷的<strong>语法糖</strong>（编程语言中添加的某种语法，这种语法对语言的功能没有影响，但是使用更加方法，代码的可读性也更强，我们将其称之为“语法糖”或“糖衣语法”），可以用<code>@装饰器函数</code>将装饰器函数直接放在被装饰的函数上，效果跟上面的代码相同，下面是完整的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time


def record_time(func):

    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f&#39;{func.__name__}执行时间: {end - start:.3f}秒&#39;)
        return result

    return wrapper


@record_time
def download(filename):
    print(f&#39;开始下载{filename}.&#39;)
    time.sleep(random.randint(2, 6))
    print(f&#39;{filename}下载完成.&#39;)


@record_time
def upload(filename):
    print(f&#39;开始上传{filename}.&#39;)
    time.sleep(random.randint(4, 8))
    print(f&#39;{filename}上传完成.&#39;)


download(&#39;MySQL从删库到跑路.avi&#39;)
upload(&#39;Python从入门到住院.pdf&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，我们通过装饰器语法糖为<code>download</code>和<code>upload</code>函数添加了装饰器，这样调用<code>download</code>和<code>upload</code>函数时，会记录下函数的执行时间。事实上，被装饰后的<code>download</code>和<code>upload</code>函数是我们在装饰器<code>record_time</code>中返回的<code>wrapper</code>函数，调用它们其实就是在调用<code>wrapper</code>函数，所以拥有了记录函数执行时间的功能。</p><p>如果希望取消装饰器的作用，那么在定义装饰器函数的时候，需要做一些额外的工作。Python标准库<code>functools</code>模块的<code>wraps</code>函数也是一个装饰器，我们将它放在<code>wrapper</code>函数上，这个装饰器可以帮我们保留被装饰之前的函数，这样在需要取消装饰器时，可以通过被装饰函数的<code>__wrapped__</code>属性获得被装饰之前的函数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random
import time

from functools import wraps


def record_time(func):

    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f&#39;{func.__name__}执行时间: {end - start:.3f}秒&#39;)
        return result

    return wrapper


@record_time
def download(filename):
    print(f&#39;开始下载{filename}.&#39;)
    time.sleep(random.randint(2, 6))
    print(f&#39;{filename}下载完成.&#39;)


@record_time
def upload(filename):
    print(f&#39;开始上传{filename}.&#39;)
    time.sleep(random.randint(4, 8))
    print(f&#39;{filename}上传完成.&#39;)


download(&#39;MySQL从删库到跑路.avi&#39;)
upload(&#39;Python从入门到住院.pdf&#39;)
# 取消装饰器
download.__wrapped__(&#39;MySQL必知必会.pdf&#39;)
upload = upload.__wrapped__
upload(&#39;Python从新手到大师.pdf&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>装饰器函数本身也可以参数化</strong>，简单的说就是通过我们的装饰器也是可以通过调用者传入的参数来定制的，这个知识点我们在后面用到它的时候再为大家讲解。</p><h3 id="递归调用" tabindex="-1"><a class="header-anchor" href="#递归调用" aria-hidden="true">#</a> 递归调用</h3><p>Python中允许函数嵌套定义，也允许函数之间相互调用，而且一个函数还可以直接或间接的调用自身。函数自己调用自己称为递归调用，那么递归调用有什么用处呢？现实中，有很多问题的定义本身就是一个递归定义，例如我们之前讲到的阶乘，非负整数<code>N</code>的阶乘是<code>N</code>乘以<code>N-1</code>的阶乘，即$ N! = N \\times (N-1)! $，定义的左边和右边都出现了阶乘的概念，所以这是一个递归定义。既然如此，我们可以使用递归调用的方式来写一个求阶乘的函数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def fac(num):
    if num in (0, 1):
        return 1
    return num * fac(num - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<code>fac</code>函数中又调用了<code>fac</code>函数，这就是所谓的递归调用。代码第2行的<code>if</code>条件叫做递归的收敛条件，简单的说就是什么时候要结束函数的递归调用，在计算阶乘时，如果计算到<code>0</code>或<code>1</code>的阶乘，就停止递归调用，直接返回<code>1</code>；代码第4行的<code>num * fac(num - 1)</code>是递归公式，也就是阶乘的递归定义。下面，我们简单的分析下，如果用<code>fac(5)</code>计算<code>5</code>的阶乘，整个过程会是怎样的。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 递归调用函数入栈
# 5 * fac(4)
# 5 * (4 * fac(3))
# 5 * (4 * (3 * fac(2)))
# 5 * (4 * (3 * (2 * fac(1))))
# 停止递归函数出栈
# 5 * (4 * (3 * (2 * 1)))
# 5 * (4 * (3 * 2))
# 5 * (4 * 6)
# 5 * 24
# 120
print(fac(5))    # 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，函数调用会通过内存中称为“栈”（stack）的数据结构来保存当前代码的执行现场，函数调用结束后会通过这个栈结构恢复之前的执行现场。栈是一种先进后出的数据结构，这也就意味着最早入栈的函数最后才会返回，而最后入栈的函数会最先返回。例如调用一个名为<code>a</code>的函数，函数<code>a</code>的执行体中又调用了函数<code>b</code>，函数<code>b</code>的执行体中又调用了函数<code>c</code>，那么最先入栈的函数是<code>a</code>，最先出栈的函数是<code>c</code>。每进入一个函数调用，栈就会增加一层栈帧（stack frame），栈帧就是我们刚才提到的保存当前代码执行现场的结构；每当函数调用结束后，栈就会减少一层栈帧。通常，内存中的栈空间很小，因此递归调用的次数如果太多，会导致栈溢出（stack overflow），所以<strong>递归调用一定要确保能够快速收敛</strong>。我们可以尝试执行<code>fac(5000)</code>，看看是不是会提示<code>RecursionError</code>错误，错误消息为：<code>maximum recursion depth exceeded in comparison</code>（超出最大递归深度），其实就是发生了栈溢出。</p><p>我们使用的Python官方解释器，默认将函数调用的栈结构最大深度设置为<code>1000</code>层。如果超出这个深度，就会发生上面说的<code>RecursionError</code>。当然，我们可以使用<code>sys</code>模块的<code>setrecursionlimit</code>函数来改变递归调用的最大深度，例如：<code>sys.setrecursionlimit(10000)</code>，这样就可以让上面的<code>fac(5000)</code>顺利执行出结果，但是我们不建议这样做，因为让递归快速收敛才是我们应该做的事情，否则就应该考虑使用循环递推而不是递归。</p><p>再举一个之前讲过的生成斐波那契数列的例子，因为斐波那契数列前两个数都是<code>1</code>，从第3个数开始，每个数是前两个数相加的和，可以记为<code>f(n) = f(n - 1) + f(n - 2)</code>，很显然这又是一个递归的定义，所以我们可以用下面的递归调用函数来计算第​<code>n</code>个斐波那契数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def fib(n):
    if n in (1, 2):
        return 1
    return fib(n - 1) + fib(n - 2)


# 打印前20个斐波那契数
for i in range(1, 21):
    print(fib(i))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家，上面计算斐波那契数的代码虽然看起来非常简单明了，但执行性能是比较糟糕的，原因大家可以自己思考一下，更好的做法还是之前讲过的使用循环递推的方式，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>装饰器是Python中的特色语法，<strong>可以通过装饰器来增强现有的函数</strong>，这是一种非常有用的编程技巧。一些复杂的问题用函数递归调用的方式写起来真的很简单，但是<strong>函数的递归调用一定要注意收敛条件和递归公式</strong>，找到递归公式才有机会使用递归调用，而收敛条件确定了递归什么时候停下来。函数调用通过内存中的栈空间来保存现场和恢复现场，栈空间通常都很小，所以<strong>递归如果不能迅速收敛，很可能会引发栈溢出错误，从而导致程序的崩溃</strong>。</p>`,32),a=[l];function r(c,v){return n(),i("div",null,a)}const u=e(s,[["render",r],["__file","第16课：函数的高级应用.html.vue"]]);export{u as default};
