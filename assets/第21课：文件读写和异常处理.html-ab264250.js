import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as s,c as l,a as n,b as e,e as r,f as i}from"./app-9976b6d0.js";const a="/assets/21_01-a3afbf80.png",t={},v=i('<h2 id="第21课-文件读写和异常处理" tabindex="-1"><a class="header-anchor" href="#第21课-文件读写和异常处理" aria-hidden="true">#</a> 第21课：文件读写和异常处理</h2><p>实际开发中常常会遇到对数据进行持久化的场景，所谓持久化是指将数据从无法长久保存数据的存储介质（通常是内存）转移到可以长久保存数据的存储介质（通常是硬盘）中。实现数据持久化最直接简单的方式就是通过<strong>文件系统</strong>将数据保存到<strong>文件</strong>中。</p><p>计算机的<strong>文件系统</strong>是一种存储和组织计算机数据的方法，它使得对数据的访问和查找变得容易，文件系统使用<strong>文件</strong>和<strong>树形目录</strong>的抽象逻辑概念代替了硬盘、光盘、闪存等物理设备的数据块概念，用户使用文件系统来保存数据时，不必关心数据实际保存在硬盘的哪个数据块上，只需要记住这个文件的路径和文件名。在写入新数据之前，用户不必关心硬盘上的哪个数据块没有被使用，硬盘上的存储空间管理（分配和释放）功能由文件系统自动完成，用户只需要记住数据被写入到了哪个文件中。</p><h3 id="打开和关闭文件" tabindex="-1"><a class="header-anchor" href="#打开和关闭文件" aria-hidden="true">#</a> 打开和关闭文件</h3><p>有了文件系统，我们可以非常方便的通过文件来读写数据；在Python中要实现文件操作是非常简单的。我们可以使用Python内置的<code>open</code>函数来打开文件，在使用<code>open</code>函数时，我们可以通过函数的参数指定<strong>文件名</strong>、<strong>操作模式</strong>和<strong>字符编码</strong>等信息，接下来就可以对文件进行读写操作了。这里所说的操作模式是指要打开什么样的文件（字符文件或二进制文件）以及做什么样的操作（读、写或追加），具体如下表所示。</p><table><thead><tr><th>操作模式</th><th>具体含义</th></tr></thead><tbody><tr><td><code>&#39;r&#39;</code></td><td>读取 （默认）</td></tr><tr><td><code>&#39;w&#39;</code></td><td>写入（会先截断之前的内容）</td></tr><tr><td><code>&#39;x&#39;</code></td><td>写入，如果文件已经存在会产生异常</td></tr><tr><td><code>&#39;a&#39;</code></td><td>追加，将内容写入到已有文件的末尾</td></tr><tr><td><code>&#39;b&#39;</code></td><td>二进制模式</td></tr><tr><td><code>&#39;t&#39;</code></td><td>文本模式（默认）</td></tr><tr><td><code>&#39;+&#39;</code></td><td>更新（既可以读又可以写）</td></tr></tbody></table><p>下图展示了如何根据程序的需要来设置<code>open</code>函数的操作模式。</p><img src="'+a+'" width="75%">',8),u=n("code",null,"open",-1),m=n("code",null,"encoding",-1),b={href:"https://www.cnblogs.com/skynet/archive/2011/05/03/2035105.html",target:"_blank",rel:"noopener noreferrer"},p=i(`<p>使用<code>open</code>函数打开文件成功后会返回一个文件对象，通过这个对象，我们就可以实现对文件的读写操作；如果打开文件失败，<code>open</code>函数会引发异常，稍后会对此加以说明。如果要关闭打开的文件，可以使用文件对象的<code>close</code>方法，这样可以在结束文件操作时释放掉这个文件。</p><h3 id="读写文本文件" tabindex="-1"><a class="header-anchor" href="#读写文本文件" aria-hidden="true">#</a> 读写文本文件</h3><p>用<code>open</code>函数打开文本文件时，需要指定文件名并将文件的操作模式设置为<code>&#39;r&#39;</code>，如果不指定，默认值也是<code>&#39;r&#39;</code>；如果需要指定字符编码，可以传入<code>encoding</code>参数，如果不指定，默认值是None，那么在读取文件时使用的是操作系统默认的编码。需要提醒大家，如果不能保证保存文件时使用的编码方式与<code>encoding</code>参数指定的编码方式是一致的，那么就可能因无法解码字符而导致读取文件失败。</p><p>下面的例子演示了如何读取一个纯文本文件（一般指只有字符原生编码构成的文件，与富文本相比，纯文本不包含字符样式的控制元素，能够被最简单的文本编辑器直接读取）。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>file = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)
print(file.read())
file.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),h=n("strong",null,"说明",-1),g={href:"http://www.china.org.cn/learning_english/2011-02/21/content_21967654.htm",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>除了使用文件对象的<code>read</code>方法读取文件之外，还可以使用<code>for-in</code>循环逐行读取或者用<code>readlines</code>方法将文件按行读取到一个列表容器中，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>file = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)
for line in file:
    print(line, end=&#39;&#39;)
file.close()

file = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)
lines = file.readlines()
for line in lines:
    print(line, end=&#39;&#39;)
file.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要向文件中写入内容，可以在打开文件时使用<code>w</code>或者<code>a</code>作为操作模式，前者会截断之前的文本内容写入新的内容，后者是在原来内容的尾部追加新的内容。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>file = open(&#39;致橡树.txt&#39;, &#39;a&#39;, encoding=&#39;utf-8&#39;)
file.write(&#39;\\n标题：《致橡树》&#39;)
file.write(&#39;\\n作者：舒婷&#39;)
file.write(&#39;\\n时间：1977年3月&#39;)
file.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理机制" tabindex="-1"><a class="header-anchor" href="#异常处理机制" aria-hidden="true">#</a> 异常处理机制</h3><p>请注意上面的代码，如果<code>open</code>函数指定的文件并不存在或者无法打开，那么将引发异常状况导致程序崩溃。为了让代码具有健壮性和容错性，我们可以<strong>使用Python的异常机制对可能在运行时发生状况的代码进行适当的处理</strong>。Python中和异常相关的关键字有五个，分别是<code>try</code>、<code>except</code>、<code>else</code>、<code>finally</code>和<code>raise</code>，我们先看看下面的代码，再来为大家介绍这些关键字的用法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>file = None
try:
    file = open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;)
    print(file.read())
except FileNotFoundError:
    print(&#39;无法打开指定的文件!&#39;)
except LookupError:
    print(&#39;指定了未知的编码!&#39;)
except UnicodeDecodeError:
    print(&#39;读取文件时解码错误!&#39;)
finally:
    if file:
        file.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Python中，我们可以将运行时会出现状况的代码放在<code>try</code>代码块中，在<code>try</code>后面可以跟上一个或多个<code>except</code>块来捕获异常并进行相应的处理。例如，在上面的代码中，文件找不到会引发<code>FileNotFoundError</code>，指定了未知的编码会引发<code>LookupError</code>，而如果读取文件时无法按指定编码方式解码文件会引发<code>UnicodeDecodeError</code>，所以我们在<code>try</code>后面跟上了三个<code>except</code>分别处理这三种不同的异常状况。在<code>except</code>后面，我们还可以加上<code>else</code>代码块，这是<code>try</code> 中的代码没有出现异常时会执行的代码，而且<code>else</code>中的代码不会再进行异常捕获，也就是说如果遇到异常状况，程序会因异常而终止并报告异常信息。最后我们使用<code>finally</code>代码块来关闭打开的文件，释放掉程序中获取的外部资源。由于<code>finally</code>块的代码不论程序正常还是异常都会执行，甚至是调用了<code>sys</code>模块的<code>exit</code>函数终止Python程序，<code>finally</code>块中的代码仍然会被执行（因为<code>exit</code>函数的本质是引发了<code>SystemExit</code>异常），因此我们把<code>finally</code>代码块称为“总是执行代码块”，它最适合用来做释放外部资源的操作。</p><p>Python中内置了大量的异常类型，除了上面代码中用到的异常类型以及之前的课程中遇到过的异常类型外，还有许多的异常类型，其继承结构如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StopAsyncIteration
      +-- ArithmeticError
      |    +-- FloatingPointError
      |    +-- OverflowError
      |    +-- ZeroDivisionError
      +-- AssertionError
      +-- AttributeError
      +-- BufferError
      +-- EOFError
      +-- ImportError
      |    +-- ModuleNotFoundError
      +-- LookupError
      |    +-- IndexError
      |    +-- KeyError
      +-- MemoryError
      +-- NameError
      |    +-- UnboundLocalError
      +-- OSError
      |    +-- BlockingIOError
      |    +-- ChildProcessError
      |    +-- ConnectionError
      |    |    +-- BrokenPipeError
      |    |    +-- ConnectionAbortedError
      |    |    +-- ConnectionRefusedError
      |    |    +-- ConnectionResetError
      |    +-- FileExistsError
      |    +-- FileNotFoundError
      |    +-- InterruptedError
      |    +-- IsADirectoryError
      |    +-- NotADirectoryError
      |    +-- PermissionError
      |    +-- ProcessLookupError
      |    +-- TimeoutError
      +-- ReferenceError
      +-- RuntimeError
      |    +-- NotImplementedError
      |    +-- RecursionError
      +-- SyntaxError
      |    +-- IndentationError
      |         +-- TabError
      +-- SystemError
      +-- TypeError
      +-- ValueError
      |    +-- UnicodeError
      |         +-- UnicodeDecodeError
      |         +-- UnicodeEncodeError
      |         +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
           +-- ImportWarning
           +-- UnicodeWarning
           +-- BytesWarning
           +-- ResourceWarning
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的继承结构可以看出，Python中所有的异常都是<code>BaseException</code>的子类型，它有四个直接的子类，分别是：<code>SystemExit</code>、<code>KeyboardInterrupt</code>、<code>GeneratorExit</code>和<code>Exception</code>。其中，<code>SystemExit</code>表示解释器请求退出，<code>KeyboardInterrupt</code>是用户中断程序执行（按下<code>Ctrl+c</code>），<code>GeneratorExit</code>表示生成器发生异常通知退出，不理解这些异常没有关系，继续学习就好了。值得一提的是<code>Exception</code>类，它是常规异常类型的父类型，很多的异常都是直接或间接的继承自<code>Exception</code>类。如果Python内置的异常类型不能满足应用程序的需要，我们可以自定义异常类型，而自定义的异常类型也应该直接或间接继承自<code>Exception</code>类，当然还可以根据需要重写或添加方法。</p><p>在Python中，可以使用<code>raise</code>关键字来引发异常（抛出异常对象），而调用者可以通过<code>try...except...</code>结构来捕获并处理异常。例如在函数中，当函数的执行条件不满足时，可以使用抛出异常的方式来告知调用者问题的所在，而调用者可以通过捕获处理异常来使得代码从异常中恢复，定义异常和抛出异常的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class InputError(ValueError):
    &quot;&quot;&quot;自定义异常类型&quot;&quot;&quot;
    pass


def fac(num):
    &quot;&quot;&quot;求阶乘&quot;&quot;&quot;
    if num &lt; 0:
        raise InputError(&#39;只能计算非负整数的阶乘&#39;)
    if num in (0, 1):
        return 1
    return num * fac(num - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用求阶乘的函数<code>fac</code>，通过<code>try...except...</code>结构捕获输入错误的异常并打印异常对象（显示异常信息），如果输入正确就计算阶乘并结束程序。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>flag = True
while flag:
    num = int(input(&#39;n = &#39;))
    try:
        print(f&#39;{num}! = {fac(num)}&#39;)
        flag = False
    except InputError as err:
        print(err)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上下文语法" tabindex="-1"><a class="header-anchor" href="#上下文语法" aria-hidden="true">#</a> 上下文语法</h3><p>对于<code>open</code>函数返回的文件对象，还可以使用<code>with</code>上下文语法在文件操作完成后自动执行文件对象的<code>close</code>方法，这样可以让代码变得更加简单优雅，因为不需要再写<code>finally</code>代码块来执行关闭文件释放资源的操作。需要提醒大家的是，并不是所有的对象都可以放在<code>with</code>上下文语法中，只有符合<strong>上下文管理器协议</strong>（有<code>__enter__</code>和<code>__exit__</code>魔术方法）的对象才能使用这种语法，Python标准库中的<code>contextlib</code>模块也提供了对<code>with</code>上下文语法的支持，后面再为大家进行讲解。</p><p>用<code>with</code>上下文语法改写后的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>try:
    with open(&#39;致橡树.txt&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;) as file:
        print(file.read())
except FileNotFoundError:
    print(&#39;无法打开指定的文件!&#39;)
except LookupError:
    print(&#39;指定了未知的编码!&#39;)
except UnicodeDecodeError:
    print(&#39;读取文件时解码错误!&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写二进制文件" tabindex="-1"><a class="header-anchor" href="#读写二进制文件" aria-hidden="true">#</a> 读写二进制文件</h3><p>读写二进制文件跟读写文本文件的操作类似，但是需要注意，在使用<code>open</code>函数打开文件时，如果要进行读操作，操作模式是<code>&#39;rb&#39;</code>，如果要进行写操作，操作模式是<code>&#39;wb&#39;</code>。还有一点，读写文本文件时，<code>read</code>方法的返回值以及<code>write</code>方法的参数是<code>str</code>对象（字符串），而读写二进制文件时，<code>read</code>方法的返回值以及<code>write</code>方法的参数是<code>bytes-like</code>对象（字节串）。下面的代码实现了将当前路径下名为<code>guido.jpg</code>的图片文件复制到<code>吉多.jpg</code>文件中的操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>try:
    with open(&#39;guido.jpg&#39;, &#39;rb&#39;) as file1:
        data = file1.read()
    with open(&#39;吉多.jpg&#39;, &#39;wb&#39;) as file2:
        file2.write(data)
except FileNotFoundError:
    print(&#39;指定的文件无法打开.&#39;)
except IOError:
    print(&#39;读写文件时出现错误.&#39;)
print(&#39;程序执行结束.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要复制的图片文件很大，一次将文件内容直接读入内存中可能会造成非常大的内存开销，为了减少对内存的占用，可以为<code>read</code>方法传入<code>size</code>参数来指定每次读取的字节数，通过循环读取和写入的方式来完成上面的操作，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>try:
    with open(&#39;guido.jpg&#39;, &#39;rb&#39;) as file1, open(&#39;吉多.jpg&#39;, &#39;wb&#39;) as file2:
        data = file1.read(512)
        while data:
            file2.write(data)
            data = file1.read()
except FileNotFoundError:
    print(&#39;指定的文件无法打开.&#39;)
except IOError:
    print(&#39;读写文件时出现错误.&#39;)
print(&#39;程序执行结束.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>通过读写文件的操作，我们可以实现数据持久化。在Python中可以通过<code>open</code>函数来获得文件对象，可以通过文件对象的<code>read</code>和<code>write</code>方法实现文件读写操作。程序在运行时可能遭遇无法预料的异常状况，可以使用Python的异常机制来处理这些状况。Python的异常机制主要包括<code>try</code>、<code>except</code>、<code>else</code>、<code>finally</code>和<code>raise</code>这五个核心关键字。<code>try</code>后面的<code>except</code>语句不是必须的，<code>finally</code>语句也不是必须的，但是二者必须要有一个；<code>except</code>语句可以有一个或多个，多个<code>except</code>会按照书写的顺序依次匹配指定的异常，如果异常已经处理就不会再进入后续的<code>except</code>语句；<code>except</code>语句中还可以通过元组同时指定多个异常类型进行捕获；<code>except</code>语句后面如果不指定异常类型，则默认捕获所有异常；捕获异常后可以使用<code>raise</code>要再次抛出，但是不建议捕获并抛出同一个异常；不建议在不清楚逻辑的情况下捕获所有异常，这可能会掩盖程序中严重的问题。最后强调一点，<strong>不要使用异常机制来处理正常业务逻辑或控制程序流程</strong>，简单的说就是不要滥用异常机制，这是初学者常犯的错误。</p>`,26);function y(E,x){const d=c("ExternalLinkIcon");return s(),l("div",null,[v,n("p",null,[e("在使用"),u,e("函数时，如果打开的文件是字符文件（文本文件），可以通过"),m,e("参数来指定读写文件使用的字符编码。如果对字符编码和字符集这些概念不了解，可以看看"),n("a",b,[e("《字符集和字符编码》"),r(d)]),e("一文，此处不再进行赘述。")]),p,n("blockquote",null,[n("p",null,[h,e("："),n("a",g,[e("《致橡树》"),r(d)]),e("是舒婷老师在1977年3月创建的爱情诗，也是我最喜欢的现代诗之一。")])]),f])}const w=o(t,[["render",y],["__file","第21课：文件读写和异常处理.html.vue"]]);export{w as default};
