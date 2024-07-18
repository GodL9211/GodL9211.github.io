import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9976b6d0.js";const a={},s=d(`<h2 id="第15课-函数使用进阶" tabindex="-1"><a class="header-anchor" href="#第15课-函数使用进阶" aria-hidden="true">#</a> 第15课：函数使用进阶</h2><p>前面我们讲到了关于函数的知识，我们还讲到过Python中常用的数据类型，这些类型的变量都可以作为函数的参数或返回值，用好函数还可以让我们做更多的事情。</p><h3 id="关键字参数" tabindex="-1"><a class="header-anchor" href="#关键字参数" aria-hidden="true">#</a> 关键字参数</h3><p>下面是一个判断传入的三条边长能否构成三角形的函数，在调用函数传入参数时，我们可以指定参数名，也可以不指定参数名，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def is_triangle(a, b, c):
    print(f&#39;a = {a}, b = {b}, c = {c}&#39;)
    return a + b &gt; c and b + c &gt; a and a + c &gt; b


# 调用函数传入参数不指定参数名按位置对号入座
print(is_triangle(1, 2, 3))
# 调用函数通过“参数名=参数值”的形式按顺序传入参数
print(is_triangle(a=1, b=2, c=3))
# 调用函数通过“参数名=参数值”的形式不按顺序传入参数
print(is_triangle(c=3, a=1, b=2))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在没有特殊处理的情况下，函数的参数都是<strong>位置参数</strong>，也就意味着传入参数的时候对号入座即可，如上面代码的第7行所示，传入的参数值<code>1</code>、<code>2</code>、<code>3</code>会依次赋值给参数<code>a</code>、<code>b</code>、<code>c</code>。当然，也可以通过<code>参数名=参数值</code>的方式传入函数所需的参数，因为指定了参数名，传入参数的顺序可以进行调整，如上面代码的第9行和第11行所示。</p><p>调用函数时，如果希望函数的调用者必须以<code>参数名=参数值</code>的方式传参，可以用<strong>命名关键字参数</strong>（keyword-only argument）取代位置参数。所谓命名关键字参数，是在函数的参数列表中，写在<code>*</code>之后的参数，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def is_triangle(*, a, b, c):
    print(f&#39;a = {a}, b = {b}, c = {c}&#39;)
    return a + b &gt; c and b + c &gt; a and a + c &gt; b


# TypeError: is_triangle() takes 0 positional arguments but 3 were given
# print(is_triangle(3, 4, 5))
# 传参时必须使用“参数名=参数值”的方式，位置不重要
print(is_triangle(a=3, b=4, c=5))
print(is_triangle(c=5, b=4, a=3))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的<code>is_triangle</code>函数，参数列表中的<code>*</code>是一个分隔符，<code>*</code>前面的参数都是位置参数，而<code>*</code>后面的参数就是命名关键字参数。</p></blockquote><p>我们之前讲过在函数的参数列表中可以使用<strong>可变参数</strong><code>*args</code>来接收任意数量的参数，但是我们需要看看，<code>*args</code>是否能够接收带参数名的参数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def calc(*args):
    result = 0
    for arg in args:
        if type(arg) in (int, float):
            result += arg
    return result


print(calc(a=1, b=2, c=3))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码会引发<code>TypeError</code>错误，错误消息为<code>calc() got an unexpected keyword argument &#39;a&#39;</code>，由此可见，<code>*args</code>并不能处理带参数名的参数。我们在设计函数时，如果既不知道调用者会传入的参数个数，也不知道调用者会不会指定参数名，那么同时使用可变参数和<strong>关键字参数</strong>。关键字参数会将传入的带参数名的参数组装成一个字典，参数名就是字典中键值对的键，而参数值就是字典中键值对的值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def calc(*args, **kwargs):
    result = 0
    for arg in args:
        if type(arg) in (int, float):
            result += arg
    for value in kwargs.values():
        if type(value) in (int, float):
            result += value
    return result


print(calc())                  # 0
print(calc(1, 2, 3))           # 6
print(calc(a=1, b=2, c=3))     # 6
print(calc(1, 2, c=3, d=4))    # 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：<strong>不带参数名的参数（位置参数）必须出现在带参数名的参数（关键字参数）之前</strong>，否则将会引发异常。例如，执行<code>calc(1, 2, c=3, d=4, 5)</code>将会引发<code>SyntaxError</code>错误，错误消息为<code>positional argument follows keyword argument</code>，翻译成中文意思是“位置参数出现在关键字参数之后”。</p></blockquote><h3 id="高阶函数的用法" tabindex="-1"><a class="header-anchor" href="#高阶函数的用法" aria-hidden="true">#</a> 高阶函数的用法</h3><p>在前面几节课中，我们讲到了面向对象程序设计，在面向对象的世界中，一切皆为对象，所以类和函数也是对象。函数的参数和返回值可以是任意类型的对象，这就意味着<strong>函数本身也可以作为函数的参数或返回值</strong>，这就是所谓的<strong>高阶函数</strong>。</p><p>如果我们希望上面的<code>calc</code>函数不仅仅可以做多个参数求和，还可以做多个参数求乘积甚至更多的二元运算，我们就可以使用高阶函数的方式来改写上面的代码，将加法运算从函数中移除掉，具体的做法如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def calc(*args, init_value, op, **kwargs):
    result = init_value
    for arg in args:
        if type(arg) in (int, float):
            result = op(result, arg)
    for value in kwargs.values():
        if type(value) in (int, float):
            result = op(result, value)
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，上面的函数增加了两个参数，其中<code>init_value</code>代表运算的初始值，<code>op</code>代表二元运算函数。经过改造的<code>calc</code>函数不仅仅可以实现多个参数的累加求和，也可以实现多个参数的累乘运算，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def add(x, y):
    return x + y


def mul(x, y):
    return x * y


print(calc(1, 2, 3, init_value=0, op=add, x=4, y=5))      # 15
print(calc(1, 2, x=3, y=4, z=5, init_value=1, op=mul))    # 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过对高阶函数的运用，<code>calc</code>函数不再和加法运算耦合，所以灵活性和通用性会变强，这是一种解耦合的编程技巧，但是最初学者来说可能会稍微有点难以理解。需要注意的是，将函数作为参数和调用函数是有显著的区别的，<strong>调用函数需要在函数名后面跟上圆括号，而把函数作为参数时只需要函数名即可</strong>。上面的代码也可以不用定义<code>add</code>和<code>mul</code>函数，因为Python标准库中的<code>operator</code>模块提供了代表加法运算的<code>add</code>和代表乘法运算的<code>mul</code>函数，我们直接使用即可，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import operator

print(calc(1, 2, 3, init_value=0, op=operator.add, x=4, y=5))      # 15
print(calc(1, 2, x=3, y=4, z=5, init_value=1, op=operator.mul))    # 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python内置函数中有不少高阶函数，我们前面提到过的<code>filter</code>和<code>map</code>函数就是高阶函数，前者可以实现对序列中元素的过滤，后者可以实现对序列中元素的映射，例如我们要去掉一个整数列表中的奇数，并对所有的偶数求平方得到一个新的列表，就可以直接使用这两个函数来做到，具体的做法是如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def is_even(num):
    return num % 2 == 0


def square(num):
    return num ** 2


numbers1 = [35, 12, 8, 99, 60, 52]
numbers2 = list(map(square, filter(is_even, numbers1)))
print(numbers2)    # [144, 64, 3600, 2704]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，要完成上面代码的功能，也可以使用列表生成式，列表生成式的做法更为简单优雅。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>numbers1 = [35, 12, 8, 99, 60, 52]
numbers2 = [num ** 2 for num in numbers1 if num % 2 == 0]
print(numbers2)    # [144, 64, 3600, 2704]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lambda函数" tabindex="-1"><a class="header-anchor" href="#lambda函数" aria-hidden="true">#</a> Lambda函数</h3><p>在使用高阶函数的时候，如果作为参数或者返回值的函数本身非常简单，一行代码就能够完成，那么我们可以使用<strong>Lambda函数</strong>来表示。Python中的Lambda函数是没有的名字函数，所以很多人也把它叫做<strong>匿名函数</strong>，匿名函数只能有一行代码，代码中的表达式产生的运算结果就是这个匿名函数的返回值。上面代码中的<code>is_even</code>和<code>square</code>函数都只有一行代码，我们可以用Lambda函数来替换掉它们，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>numbers1 = [35, 12, 8, 99, 60, 52]
numbers2 = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers1)))
print(numbers2)    # [144, 64, 3600, 2704]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码可以看出，定义Lambda函数的关键字是<code>lambda</code>，后面跟函数的参数，如果有多个参数用逗号进行分隔；冒号后面的部分就是函数的执行体，通常是一个表达式，表达式的运算结果就是Lambda函数的返回值，不需要写<code>return</code> 关键字。</p><p>如果需要使用加减乘除这种简单的二元函数，也可以用Lambda函数来书写，例如调用上面的<code>calc</code>函数时，可以通过传入Lambda函数来作为<code>op</code>参数的参数值。当然，<code>op</code>参数也可以有默认值，例如我们可以用一个代表加法运算的Lambda函数来作为<code>op</code>参数的默认值。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>def calc(*args, init_value=0, op=lambda x, y: x + y, **kwargs):
    result = init_value
    for arg in args:
        if type(arg) in (int, float):
            result = op(result, arg)
    for value in kwargs.values():
        if type(value) in (int, float):
            result = op(result, value)
    return result


# 调用calc函数，使用init_value和op的默认值
print(calc(1, 2, 3, x=4, y=5))    # 15
# 调用calc函数，通过lambda函数给op参数赋值
print(calc(1, 2, 3, x=4, y=5, init_value=1, op=lambda x, y: x * y))    # 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：注意上面的代码中的<code>calc</code>函数，它同时使用了可变参数、关键字参数、命名关键字参数，其中命名关键字参数要放在可变参数和关键字参数之间，传参时先传入可变参数，关键字参数和命名关键字参数的先后顺序并不重要。</p></blockquote><p>有很多函数在Python中用一行代码就能实现，我们可以用Lambda函数来定义这些函数，调用Lambda函数就跟调用普通函数一样，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import operator, functools

# 一行代码定义求阶乘的函数
fac = lambda num: functools.reduce(operator.mul, range(1, num + 1), 1)
# 一行代码定义判断素数的函数
is_prime = lambda x: x &gt; 1 and all(map(lambda f: x % f, range(2, int(x ** 0.5) + 1)))

# 调用Lambda函数
print(fac(10))        # 3628800
print(is_prime(9))    # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示1</strong>：上面使用的<code>reduce</code>函数是Python标准库<code>functools</code>模块中的函数，它可以实现对数据的归约操作，通常情况下，<strong>过滤</strong>（filter）、<strong>映射</strong>（map）和<strong>归约</strong>（reduce）是处理数据中非常关键的三个步骤，而Python的标准库也提供了对这三个操作的支持。</p><p><strong>提示2</strong>：上面使用的<code>all</code>函数是Python内置函数，如果传入的序列中所有布尔值都是<code>True</code>，<code>all</code>函数就返回<code>True</code>，否则<code>all</code>函数就返回<code>False</code>。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python中的函数可以使用可变参数<code>*args</code>和关键字参数<code>**kwargs</code>来接收任意数量的参数，而且传入参数时可以带上参数名也可以没有参数名，可变参数会被处理成一个元组，而关键字参数会被处理成一个字典。<strong>Python中的函数是一等函数，可以赋值给变量，也可以作为函数的参数和返回值</strong>，这也就意味着我们可以在Python中使用高阶函数。如果我们要定义的函数非常简单，只有一行代码且不需要函数名，可以使用Lambda函数（匿名函数）。</p>`,38),l=[s];function r(c,o){return n(),i("div",null,l)}const u=e(a,[["render",r],["__file","第15课：函数使用进阶.html.vue"]]);export{u as default};
