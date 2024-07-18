import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9976b6d0.js";const s={},a=d(`<h2 id="第09课-常用数据结构之元组" tabindex="-1"><a class="header-anchor" href="#第09课-常用数据结构之元组" aria-hidden="true">#</a> 第09课：常用数据结构之元组</h2><p>上一节课为大家讲解了Python中的列表，它是一种容器型数据类型，我们可以通过定义列表类型的变量来保存和操作多个元素。当然，Python中容器型的数据类型肯定不止列表一种，接下来我们为大家讲解另一种重要的容器型数据类型，它的名字叫元组（tuple）。</p><h3 id="定义和使用元组" tabindex="-1"><a class="header-anchor" href="#定义和使用元组" aria-hidden="true">#</a> 定义和使用元组</h3><p>在Python中，元组也是多个元素按照一定的顺序构成的序列。元组和列表的不同之处在于，元组是不可变类型，这就意味着元组类型的变量一旦定义，其中的元素不能再添加或删除，而且元素的值也不能进行修改。定义元组通常使用<code>()</code>字面量语法，也建议大家使用这种方式来创建元组。元组类型支持的运算符跟列表是一样。下面的代码演示了元组的定义和运算。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 定义一个三元组
t1 = (30, 10, 55)
# 定义一个四元组
t2 = (&#39;骆昊&#39;, 40, True, &#39;四川成都&#39;)

# 查看变量的类型
print(type(t1), type(t2))    # &lt;class &#39;tuple&#39;&gt; &lt;class &#39;tuple&#39;&gt;
# 查看元组中元素的数量
print(len(t1), len(t2))      # 3 4

# 通过索引运算获取元组中的元素
print(t1[0], t1[-3])         # 30 30
print(t2[3], t2[-1])         # 四川成都 四川成都

# 循环遍历元组中的元素
for member in t2:
    print(member)

# 成员运算
print(100 in t1)    # False
print(40 in t2)     # True

# 拼接
t3 = t1 + t2
print(t3)           # (30, 10, 55, &#39;骆昊&#39;, 40, True, &#39;四川成都&#39;)

# 切片
print(t3[::3])      # (30, &#39;骆昊&#39;, &#39;四川成都&#39;)

# 比较运算
print(t1 == t3)    # False
print(t1 &gt;= t3)    # False
print(t1 &lt; (30, 11, 55))    # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个元组中如果有两个元素，我们就称之为二元组；一个元组中如果五个元素，我们就称之为五元组。需要提醒大家注意的是，<code>()</code>表示空元组，但是如果元组中只有一个元素，需要加上一个逗号，否则<code>()</code>就不是代表元组的字面量语法，而是改变运算优先级的圆括号，所以<code>(&#39;hello&#39;, )</code>和<code>(100, )</code>才是一元组，而<code>(&#39;hello&#39;)</code>和<code>(100)</code>只是字符串和整数。我们可以通过下面的代码来加以验证。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 空元组
a = ()
print(type(a))    # &lt;class &#39;tuple&#39;&gt;
# 不是元组
b = (&#39;hello&#39;)
print(type(b))    # &lt;class &#39;str&#39;&gt;
c = (100)
print(type(c))    # &lt;class &#39;int&#39;&gt;
# 一元组
d = (&#39;hello&#39;, )
print(type(d))    # &lt;class &#39;tuple&#39;&gt;
e = (100, )
print(type(e))    # &lt;class &#39;tuple&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组的应用场景" tabindex="-1"><a class="header-anchor" href="#元组的应用场景" aria-hidden="true">#</a> 元组的应用场景</h3><p>讲到这里，相信大家一定迫切的想知道元组有哪些应用场景，我们给大家举几个例子。</p><h4 id="例子1-打包和解包操作。" tabindex="-1"><a class="header-anchor" href="#例子1-打包和解包操作。" aria-hidden="true">#</a> 例子1：打包和解包操作。</h4><p>当我们把多个用逗号分隔的值赋给一个变量时，多个值会打包成一个元组类型；当我们把一个元组赋值给多个变量时，元组会解包成多个值然后分别赋给对应的变量，如下面的代码所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 打包
a = 1, 10, 100
print(type(a), a)    # &lt;class &#39;tuple&#39;&gt; (1, 10, 100)
# 解包
i, j, k = a
print(i, j, k)       # 1 10 100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在解包时，如果解包出来的元素个数和变量个数不对应，会引发<code>ValueError</code>异常，错误信息为：<code>too many values to unpack</code>（解包的值太多）或<code>not enough values to unpack</code>（解包的值不足）。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = 1, 10, 100, 1000
# i, j, k = a             # ValueError: too many values to unpack (expected 3)
# i, j, k, l, m, n = a    # ValueError: not enough values to unpack (expected 6, got 4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一种解决变量个数少于元素的个数方法，就是使用星号表达式，我们之前讲函数的可变参数时使用过星号表达式。有了星号表达式，我们就可以让一个变量接收多个值，代码如下所示。需要注意的是，用星号表达式修饰的变量会变成一个列表，列表中有0个或多个元素。还有在解包语法中，星号表达式只能出现一次。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a = 1, 10, 100, 1000
i, j, *k = a
print(i, j, k)          # 1 10 [100, 1000]
i, *j, k = a
print(i, j, k)          # 1 [10, 100] 1000
*i, j, k = a
print(i, j, k)          # [1, 10] 100 1000
*i, j = a
print(i, j)             # [1, 10, 100] 1000
i, *j = a
print(i, j)             # 1 [10, 100, 1000]
i, j, k, *l = a
print(i, j, k, l)       # 1 10 100 [1000]
i, j, k, l, *m = a
print(i, j, k, l, m)    # 1 10 100 1000 []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明一点，解包语法对所有的序列都成立，这就意味着对列表以及我们之前讲到的<code>range</code>函数返回的范围序列都可以使用解包语法。大家可以尝试运行下面的代码，看看会出现怎样的结果。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a, b, *c = range(1, 10)
print(a, b, c)
a, b, c = [1, 10, 100]
print(a, b, c)
a, *b, c = &#39;hello&#39;
print(a, b, c)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-交换两个变量的值。" tabindex="-1"><a class="header-anchor" href="#例子2-交换两个变量的值。" aria-hidden="true">#</a> 例子2：交换两个变量的值。</h4><p>交换两个变量的值是编程语言中的一个经典案例，在很多编程语言中，交换两个变量的值都需要借助一个中间变量才能做到，如果不用中间变量就需要使用比较晦涩的位运算来实现。在Python中，交换两个变量<code>a</code>和<code>b</code>的值只需要使用如下所示的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a, b = b, a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理，如果要将三个变量<code>a</code>、<code>b</code>、<code>c</code>的值互换，即<code>b</code>赋给<code>a</code>，<code>c</code>赋给<code>b</code>，<code>a</code>赋给<code>c</code>，也可以如法炮制。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>a, b, c = b, c, a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，上面并没有用到打包和解包语法，Python的字节码指令中有<code>ROT_TWO</code>和<code>ROT_THREE</code>这样的指令可以实现这个操作，效率是非常高的。但是如果有多于三个变量的值要依次互换，这个时候没有直接可用的字节码指令，执行的原理就是我们上面讲解的打包和解包操作。</p><h3 id="元组和列表的比较" tabindex="-1"><a class="header-anchor" href="#元组和列表的比较" aria-hidden="true">#</a> 元组和列表的比较</h3><p>这里还有一个非常值得探讨的问题，Python中已经有了列表类型，为什么还需要元组这样的类型呢？这个问题对于初学者来说似乎有点困难，不过没有关系，我们先抛出观点，大家可以一边学习一边慢慢体会。</p><ol><li><p>元组是不可变类型，<strong>不可变类型更适合多线程环境</strong>，因为它降低了并发访问变量的同步化开销。关于这一点，我们会在后面讲解多线程的时候为大家详细论述。</p></li><li><p>元组是不可变类型，通常<strong>不可变类型在创建时间和占用空间上面都优于对应的可变类型</strong>。我们可以使用<code>sys</code>模块的<code>getsizeof</code>函数来检查保存相同元素的元组和列表各自占用了多少内存空间。我们也可以使用<code>timeit</code>模块的<code>timeit</code>函数来看看创建保存相同元素的元组和列表各自花费的时间，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import sys
import timeit

a = list(range(100000))
b = tuple(range(100000))
print(sys.getsizeof(a), sys.getsizeof(b))    # 900120 800056

print(timeit.timeit(&#39;[1, 2, 3, 4, 5, 6, 7, 8, 9]&#39;))
print(timeit.timeit(&#39;(1, 2, 3, 4, 5, 6, 7, 8, 9)&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Python中的元组和列表是可以相互转换的，我们可以通过下面的代码来做到。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 将元组转换成列表
info = (&#39;骆昊&#39;, 175, True, &#39;四川成都&#39;)
print(list(info))       # [&#39;骆昊&#39;, 175, True, &#39;四川成都&#39;]
# 将列表转换成元组
fruits = [&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;]
print(tuple(fruits))    # (&#39;apple&#39;, &#39;banana&#39;, &#39;orange&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p><strong>列表和元组都是容器型的数据类型</strong>，即一个变量可以保存多个数据。<strong>列表是可变数据类型</strong>，<strong>元组是不可变数据类型</strong>，所以列表添加元素、删除元素、清空、排序等方法对于元组来说是不成立的。但是列表和元组都可以进行<strong>拼接</strong>、<strong>成员运算</strong>、<strong>索引和切片</strong>这些操作，后面我们要讲到的字符串类型也是这样，因为字符串就是字符按一定顺序构成的序列，在这一点上三者并没有什么区别。我们<strong>推荐大家使用列表的生成式语法来创建列表</strong>，它很好用，也是Python中非常有特色的语法。</p>`,29),l=[a];function r(c,t){return n(),i("div",null,l)}const u=e(s,[["render",r],["__file","第09课：常用数据结构之元组.html.vue"]]);export{u as default};
