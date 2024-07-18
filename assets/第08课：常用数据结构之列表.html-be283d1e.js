import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as a,c as r,a as n,b as e,e as v,f as i}from"./app-9976b6d0.js";const c={},o=i(`<h2 id="第08课-常用数据结构之列表" tabindex="-1"><a class="header-anchor" href="#第08课-常用数据结构之列表" aria-hidden="true">#</a> 第08课：常用数据结构之列表</h2><p>在开始本节课的内容之前，我们先给大家一个编程任务，将一颗色子掷<code>6000</code>次，统计每个点数出现的次数。这个任务对大家来说应该是非常简单的，我们可以用<code>1</code>到<code>6</code>均匀分布的随机数来模拟掷色子，然后用<code>6</code>个变量分别记录每个点数出现的次数，相信大家都能写出下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random

f1 = 0
f2 = 0
f3 = 0
f4 = 0
f5 = 0
f6 = 0
for _ in range(6000):
    face = random.randint(1, 6)
    if face == 1:
        f1 += 1
    elif face == 2:
        f2 += 1
    elif face == 3:
        f3 += 1
    elif face == 4:
        f4 += 1
    elif face == 5:
        f5 += 1
    else:
        f6 += 1
print(f&#39;1点出现了{f1}次&#39;)
print(f&#39;2点出现了{f2}次&#39;)
print(f&#39;3点出现了{f3}次&#39;)
print(f&#39;4点出现了{f4}次&#39;)
print(f&#39;5点出现了{f5}次&#39;)
print(f&#39;6点出现了{f6}次&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看上面的代码，相信大家一定觉得它非常的“笨重”和“丑陋”，更可怕的是，如果要统计掷两颗或者更多的色子统计每个点数出现的次数，那就需要定义更多的变量，写更多的分支结构。讲到这里，相信大家一定想问：有没有办法用一个变量来保存多个数据，有没有办法用统一的代码对多个数据进行操作？答案是肯定的，在Python中我们可以通过容器类型的变量来保存和操作多个数据，我们首先为大家介绍列表（list）这种新的数据类型。</p><h3 id="定义和使用列表" tabindex="-1"><a class="header-anchor" href="#定义和使用列表" aria-hidden="true">#</a> 定义和使用列表</h3><p>在Python中，<strong>列表是由一系元素按特定顺序构成的数据序列</strong>，这样就意味着定义一个列表类型的变量，<strong>可以保存多个数据</strong>，而且<strong>允许有重复的数据</strong>。跟上一课我们讲到的字符串类型一样，列表也是一种结构化的、非标量类型，操作一个列表类型的变量，除了可以使用运算符还可以使用它的方法。</p><p>在Python中，可以使用<code>[]</code>字面量语法来定义列表，列表中的多个元素用逗号进行分隔，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items1 = [35, 12, 99, 68, 55, 87]
items2 = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除此以外，还可以通过Python内置的<code>list</code>函数将其他序列变成列表。准确的说，<code>list</code>并不是一个普通的函数，它是创建列表对象的构造器（后面会讲到对象和构造器这两个概念）。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items1 = list(range(1, 10))
print(items1)    # [1, 2, 3, 4, 5, 6, 7, 8, 9]
items2 = list(&#39;hello&#39;)
print(items2)    # [&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是，列表是一种可变数据类型，也就是说列表可以添加元素、删除元素、更新元素，这一点跟我们上一课讲到的字符串有着鲜明的差别。字符串是一种不可变数据类型，也就是说对字符串做拼接、重复、转换大小写、修剪空格等操作的时候会产生新的字符串，原来的字符串并没有发生任何改变。</p><h4 id="列表的运算符" tabindex="-1"><a class="header-anchor" href="#列表的运算符" aria-hidden="true">#</a> 列表的运算符</h4><p>和字符串类型一样，列表也支持拼接、重复、成员运算、索引和切片以及比较运算，对此我们不再进行赘述，请大家参考下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items1 = [35, 12, 99, 68, 55, 87]
items2 = [45, 8, 29]

# 列表的拼接
items3 = items1 + items2
print(items3)    # [35, 12, 99, 68, 55, 87, 45, 8, 29]

# 列表的重复
items4 = [&#39;hello&#39;] * 3
print(items4)    # [&#39;hello&#39;, &#39;hello&#39;, &#39;hello&#39;]

# 列表的成员运算
print(100 in items3)        # False
print(&#39;hello&#39; in items4)    # True

# 获取列表的长度(元素个数)
size = len(items3)
print(size)                 # 9

# 列表的索引
print(items3[0], items3[-size])        # 35 35
items3[-1] = 100
print(items3[size - 1], items3[-1])    # 100 100

# 列表的切片
print(items3[:5])          # [35, 12, 99, 68, 55]
print(items3[4:])          # [55, 87, 45, 8, 100]
print(items3[-5:-7:-1])    # [55, 68]
print(items3[::-2])        # [100, 45, 55, 99, 35]

# 列表的比较运算
items5 = [1, 2, 3, 4]
items6 = list(range(1, 5))
# 两个列表比较相等性比的是对应索引位置上的元素是否相等
print(items5 == items6)    # True
items7 = [3, 2, 1]
# 两个列表比较大小比的是对应索引位置上的元素的大小
print(items5 &lt;= items7)    # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得一提的是，由于列表是可变类型，所以通过索引操作既可以获取列表中的元素，也可以更新列表中的元素。对列表做索引操作一样要注意索引越界的问题，对于有<code>N</code>个元素的列表，正向索引的范围是<code>0</code>到<code>N-1</code>，负向索引的范围是<code>-1</code>到<code>-N</code>，如果超出这个范围，将引发<code>IndexError</code>异常，错误信息为：<code>list index out of range</code>。</p><h4 id="列表元素的遍历" tabindex="-1"><a class="header-anchor" href="#列表元素的遍历" aria-hidden="true">#</a> 列表元素的遍历</h4><p>如果想逐个取出列表中的元素，可以使用<code>for</code>循环的，有以下两种做法。</p><p>方法一：</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]

for index in range(len(items)):
    print(items[index])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]

for item in items:
    print(item)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>讲到这里，我们可以用列表的知识来重构上面“掷色子统计每个点数出现次数”的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random

counters = [0] * 6
for _ in range(6000):
    face = random.randint(1, 6)
    counters[face - 1] += 1
for face in range(1, 7):
    print(f&#39;{face}点出现了{counters[face - 1]}次&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们用<code>counters</code>列表中的六个元素分别表示1到6的点数出现的次数，最开始的时候六个元素的值都是<code>0</code>。接下来用随机数模拟掷色子，如果摇出1点<code>counters[0]</code>的值加<code>1</code>，如果摇出2点<code>counters[1]</code>的值加<code>1</code>，以此类推。大家感受一下，这段代码是不是比之前的代码要简单优雅很多。</p><h3 id="列表的方法" tabindex="-1"><a class="header-anchor" href="#列表的方法" aria-hidden="true">#</a> 列表的方法</h3><p>和字符串一样，列表类型的方法也很多，下面为大家讲解比较重要的方法。</p><h4 id="添加和删除元素" tabindex="-1"><a class="header-anchor" href="#添加和删除元素" aria-hidden="true">#</a> 添加和删除元素</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]

# 使用append方法在列表尾部添加元素
items.append(&#39;Swift&#39;)
print(items)    # [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Swift&#39;]
# 使用insert方法在列表指定索引位置插入元素
items.insert(2, &#39;SQL&#39;)
print(items)    # [&#39;Python&#39;, &#39;Java&#39;, &#39;SQL&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Swift&#39;]

# 删除指定的元素
items.remove(&#39;Java&#39;)
print(items)    # [&#39;Python&#39;, &#39;SQL&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Swift&#39;]
# 删除指定索引位置的元素
items.pop(0)
items.pop(len(items) - 1)
print(items)    # [&#39;SQL&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]

# 清空列表中的元素
items.clear()
print(items)    # []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要提醒大家，在使用<code>remove</code>方法删除元素时，如果要删除的元素并不在列表中，会引发<code>ValueError</code>异常，错误消息是：<code>list.remove(x): x not in list</code>。在使用<code>pop</code>方法删除元素时，如果索引的值超出了范围，会引发<code>IndexError</code>异常，错误消息是：<code>pop index out of range</code>。</p><p>从列表中删除元素其实还有一种方式，就是使用Python中的<code>del</code>关键字后面跟要删除的元素，这种做法跟使用<code>pop</code>方法指定索引删除元素没有实质性的区别，但后者会返回删除的元素，前者在性能上略优（<code>del</code>对应字节码指令是<code>DELETE_SUBSCR</code>，而<code>pop</code>对应的字节码指令是<code>CALL_METHOD</code>和<code>POP_TOP</code>，不理解就跳过，不用管它！！！）。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]
del items[1]
print(items)    # [&#39;Python&#39;, &#39;Go&#39;, &#39;Kotlin&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元素位置和次数" tabindex="-1"><a class="header-anchor" href="#元素位置和次数" aria-hidden="true">#</a> 元素位置和次数</h4><p>列表类型的<code>index</code>方法可以查找某个元素在列表中的索引位置；因为列表中允许有重复的元素，所以列表类型提供了<code>count</code>方法来统计一个元素在列表中出现的次数。请看下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Python&#39;]

# 查找元素的索引位置
print(items.index(&#39;Python&#39;))       # 0
print(items.index(&#39;Python&#39;, 2))    # 5
# 注意：虽然列表中有&#39;Java&#39;，但是从索引为3这个位置开始后面是没有&#39;Java&#39;的
print(items.index(&#39;Java&#39;, 3))      # ValueError: &#39;Java&#39; is not in list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看看下面这段代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Python&#39;]

# 查找元素出现的次数
print(items.count(&#39;Python&#39;))    # 2
print(items.count(&#39;Go&#39;))        # 1
print(items.count(&#39;Swfit&#39;))     # 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元素排序和反转" tabindex="-1"><a class="header-anchor" href="#元素排序和反转" aria-hidden="true">#</a> 元素排序和反转</h4><p>列表的<code>sort</code>操作可以实现列表元素的排序，而<code>reverse</code>操作可以实现元素的反转，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>items = [&#39;Python&#39;, &#39;Java&#39;, &#39;Go&#39;, &#39;Kotlin&#39;, &#39;Python&#39;]

# 排序
items.sort()
print(items)    # [&#39;Go&#39;, &#39;Java&#39;, &#39;Kotlin&#39;, &#39;Python&#39;, &#39;Python&#39;]
# 反转
items.reverse()
print(items)    # [&#39;Python&#39;, &#39;Python&#39;, &#39;Kotlin&#39;, &#39;Java&#39;, &#39;Go&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表的生成式" tabindex="-1"><a class="header-anchor" href="#列表的生成式" aria-hidden="true">#</a> 列表的生成式</h3><p>在Python中，列表还可以通过一种特殊的字面量语法来创建，这种语法叫做生成式。我们给出两段代码，大家可以做一个对比，看看哪一种方式更加简单优雅。</p><p>通过<code>for</code>循环为空列表添加元素。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 创建一个由1到9的数字构成的列表
items1 = []
for x in range(1, 10):
    items1.append(x)
print(items1)

# 创建一个由&#39;hello world&#39;中除空格和元音字母外的字符构成的列表
items2 = []
for x in &#39;hello world&#39;:
    if x not in &#39; aeiou&#39;:
        items2.append(x)
print(items2)

# 创建一个由个两个字符串中字符的笛卡尔积构成的列表
items3 = []
for x in &#39;ABC&#39;:
    for y in &#39;12&#39;:
        items3.append(x + y)
print(items3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过生成式创建列表。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 创建一个由1到9的数字构成的列表
items1 = [x for x in range(1, 10)]
print(items1)    # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 创建一个由&#39;hello world&#39;中除空格和元音字母外的字符构成的列表
items2 = [x for x in &#39;hello world&#39; if x not in &#39; aeiou&#39;]
print(items2)    # [&#39;h&#39;, &#39;l&#39;, &#39;l&#39;, &#39;w&#39;, &#39;r&#39;, &#39;l&#39;, &#39;d&#39;]

# 创建一个由个两个字符串中字符的笛卡尔积构成的列表
items3 = [x + y for x in &#39;ABC&#39; for y in &#39;12&#39;]
print(items3)    # [&#39;A1&#39;, &#39;A2&#39;, &#39;B1&#39;, &#39;B2&#39;, &#39;C1&#39;, &#39;C2&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这种方式不仅代码简单优雅，而且性能也优于上面使用<code>for</code>循环和<code>append</code>方法向空列表中追加元素的方式。可以简单跟大家交待下为什么生成式拥有更好的性能，那是因为Python解释器的字节码指令中有专门针对生成式的指令（<code>LIST_APPEND</code>指令）；而<code>for</code>循环是通过方法调用（<code>LOAD_METHOD</code>和<code>CALL_METHOD</code>指令）的方式为列表添加元素，方法调用本身就是一个相对耗时的操作。对这一点不理解也没有关系，记住“<strong>强烈建议用生成式语法来创建列表</strong>”这个结论就可以了。</p><h3 id="嵌套的列表" tabindex="-1"><a class="header-anchor" href="#嵌套的列表" aria-hidden="true">#</a> 嵌套的列表</h3><p>Python语言没有限定列表中的元素必须是相同的数据类型，也就是说一个列表中的元素可以任意的数据类型，当然也包括列表。如果列表中的元素又是列表，那么我们可以称之为嵌套的列表。嵌套的列表可以用来表示表格或数学上的矩阵，例如：我们想保存5个学生3门课程的成绩，可以定义一个保存5个元素的列表保存5个学生的信息，而每个列表元素又是3个元素构成的列表，分别代表3门课程的成绩。但是，一定要注意下面的代码是有问题的。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>scores = [[0] * 3] * 5
print(scores)    # [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>看上去我们好像创建了一个<code>5 * 3</code>的嵌套列表，但实际上当我们录入第一个学生的第一门成绩后，你就会发现问题来了，我们看看下面代码的输出。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 嵌套的列表需要多次索引操作才能获取元素
scores[0][0] = 95
print(scores)
# [[95, 0, 0], [95, 0, 0], [95, 0, 0], [95, 0, 0], [95, 0, 0]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),t={href:"http://www.pythontutor.com/visualize.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"[[0] * 3] * 5]",-1),u=i(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>scores = [[0] * 3 for _ in range(5)]
scores[0][0] = 95
print(scores)
# [[95, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python中的列表底层是一个可以动态扩容的数组，列表元素在内存中也是连续存储的，所以可以实现随机访问（通过一个有效的索引获取到对应的元素且操作时间与列表元素个数无关）。我们暂时不去触碰这些底层存储细节以及列表每个方法的渐近时间复杂度（执行这个方法耗费的时间跟列表元素个数的关系），等需要的时候再告诉大家。现阶段，大家只需要知道<strong>列表是容器</strong>，可以<strong>保存各种类型的数据</strong>，<strong>可以通过索引操作列表元素</strong>，知道这些就足够了。</p>`,3);function b(h,p){const d=l("ExternalLinkIcon");return a(),r("div",null,[o,n("p",null,[e("我们不去过多的解释为什么会出现这样的问题，如果想深入研究这个问题，可以通过"),n("a",t,[e("Python Tutor"),v(d)]),e("网站的可视化代码执行功能，看看创建列表时计算机内存中发生了怎样的变化，下面的图就是在这个网站上生成的。建议大家不去纠结这个问题，现阶段只需要记住不能用"),m,e("这种方式来创建嵌套列表就行了。那么创建嵌套列表的正确做法是什么呢，下面的代码会给你答案。")]),u])}const y=s(c,[["render",b],["__file","第08课：常用数据结构之列表.html.vue"]]);export{y as default};
