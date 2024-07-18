import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-9976b6d0.js";const d="/assets/12_01-acd4df6f.jpg",a={},l=s(`<h2 id="第12课-常用数据结构之字典" tabindex="-1"><a class="header-anchor" href="#第12课-常用数据结构之字典" aria-hidden="true">#</a> 第12课：常用数据结构之字典</h2><p>迄今为止，我们已经为大家介绍了Python中的三种容器型数据类型，但是这些数据类型仍然不足以帮助我们解决所有的问题。例如，我们要保存一个人的信息，包括姓名、年龄、体重、单位地址、家庭住址、本人手机号、紧急联系人手机号等信息，你会发现我们之前学过的列表、元组和集合都不是最理想的选择。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>person1 = [&#39;王大锤&#39;, 55, 60, &#39;科华北路62号&#39;, &#39;中同仁路8号&#39;, &#39;13122334455&#39;, &#39;13800998877&#39;]
person2 = (&#39;王大锤&#39;, 55, 60, &#39;科华北路62号&#39;, &#39;中同仁路8号&#39;, &#39;13122334455&#39;, &#39;13800998877&#39;)
person3 = {&#39;王大锤&#39;, 55, 60, &#39;科华北路62号&#39;, &#39;中同仁路8号&#39;, &#39;13122334455&#39;, &#39;13800998877&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集合肯定是最不合适的，因为集合有去重特性，如果一个人的年龄和体重相同，那么集合中就会少一项信息；同理，如果这个人的家庭住址和单位地址是相同的，那么集合中又会少一项信息。另一方面，虽然列表和元组可以把一个人的所有信息都保存下来，但是当你想要获取这个人的手机号时，你得先知道他的手机号是列表或元组中的第6个还是第7个元素；当你想获取一个人的家庭住址时，你还得知道家庭住址是列表或元组中的第几项。总之，在遇到上述的场景时，列表、元组、字典都不是最合适的选择，我们还需字典（dictionary）类型，这种数据类型最适合把相关联的信息组装到一起，并且可以帮助我们解决程序中为真实事物建模的问题。</p><p>说到字典这个词，大家一定不陌生，读小学的时候每个人基本上都有一本《新华字典》，如下图所示。</p><figure><img src="`+d+`" alt="dictionary" tabindex="0" loading="lazy"><figcaption>dictionary</figcaption></figure><p>Python程序中的字典跟现实生活中的字典很像，它以键值对（键和值的组合）的方式把数据组织到一起，我们可以通过键找到与之对应的值并进行操作。就像《新华字典》中，每个字（键）都有与它对应的解释（值）一样，每个字和它的解释合在一起就是字典中的一个条目，而字典中通常包含了很多个这样的条目。</p><h3 id="创建和使用字典" tabindex="-1"><a class="header-anchor" href="#创建和使用字典" aria-hidden="true">#</a> 创建和使用字典</h3><p>在Python中创建字典可以使用<code>{}</code>字面量语法，这一点跟上一节课讲的集合是一样的。但是字典的<code>{}</code>中的元素是以键值对的形式存在的，每个元素由<code>:</code>分隔的两个值构成，<code>:</code>前面是键，<code>:</code>后面是值，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>xinhua = {
    &#39;麓&#39;: &#39;山脚下&#39;,
    &#39;路&#39;: &#39;道，往来通行的地方；方面，地区：南～货，外～货；种类：他俩是一～人&#39;,
    &#39;蕗&#39;: &#39;甘草的别名&#39;,
    &#39;潞&#39;: &#39;潞水，水名，即今山西省的浊漳河；潞江，水名，即云南省的怒江&#39;
}
print(xinhua)
person = {
    &#39;name&#39;: &#39;王大锤&#39;, &#39;age&#39;: 55, &#39;weight&#39;: 60, &#39;office&#39;: &#39;科华北路62号&#39;,
    &#39;home&#39;: &#39;中同仁路8号&#39;, &#39;tel&#39;: &#39;13122334455&#39;, &#39;econtact&#39;: &#39;13800998877&#39;
}
print(person)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码，相信大家已经看出来了，用字典来保存一个人的信息远远优于使用列表或元组，因为我们可以用<code>:</code>前面的键来表示条目的含义，而<code>:</code>后面就是这个条目所对应的值。</p><p>当然，如果愿意，我们也可以使用内置函数<code>dict</code>或者是字典的生成式语法来创建字典，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># dict函数(构造器)中的每一组参数就是字典中的一组键值对
person = dict(name=&#39;王大锤&#39;, age=55, weight=60, home=&#39;中同仁路8号&#39;)
print(person)    # {&#39;name&#39;: &#39;王大锤&#39;, &#39;age&#39;: 55, &#39;weight&#39;: 60, &#39;home&#39;: &#39;中同仁路8号&#39;}

# 可以通过Python内置函数zip压缩两个序列并创建字典
items1 = dict(zip(&#39;ABCDE&#39;, &#39;12345&#39;))
print(items1)    # {&#39;A&#39;: &#39;1&#39;, &#39;B&#39;: &#39;2&#39;, &#39;C&#39;: &#39;3&#39;, &#39;D&#39;: &#39;4&#39;, &#39;E&#39;: &#39;5&#39;}
items2 = dict(zip(&#39;ABCDE&#39;, range(1, 10)))
print(items2)    # {&#39;A&#39;: 1, &#39;B&#39;: 2, &#39;C&#39;: 3, &#39;D&#39;: 4, &#39;E&#39;: 5}

# 用字典生成式语法创建字典
items3 = {x: x ** 3 for x in range(1, 6)}
print(items3)     # {1: 1, 2: 8, 3: 27, 4: 64, 5: 125}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想知道字典中一共有多少组键值对，仍然是使用<code>len</code>函数；如果想对字典进行遍历，可以用<code>for</code>循环，但是需要注意，<code>for</code>循环只是对字典的键进行了遍历，不过没关系，在讲完字典的运算后，我们可以通过字典的键获取到和这个键对应的值。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>person = {&#39;name&#39;: &#39;王大锤&#39;, &#39;age&#39;: 55, &#39;weight&#39;: 60, &#39;office&#39;: &#39;科华北路62号&#39;}
print(len(person))    # 4
for key in person:
    print(key)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典的运算" tabindex="-1"><a class="header-anchor" href="#字典的运算" aria-hidden="true">#</a> 字典的运算</h3><p>对于字典类型来说，成员运算和索引运算肯定是最为重要的，前者可以判定指定的键在不在字典中，后者可以通过键获取对应的值或者向字典中加入新的键值对。值得注意的是，字典的索引不同于列表的索引，列表中的元素因为有属于自己有序号，所以列表的索引是一个整数；字典中因为保存的是键值对，所以字典的索引是键值对中的键，通过索引操作可以修改原来的值或者向字典中存入新的键值对。需要<strong>特别提醒</strong>大家注意的是，<strong>字典中的键必须是不可变类型</strong>，例如整数（<code>int</code>）、浮点数（<code>float</code>）、字符串（<code>str</code>）、元组（<code>tuple</code>）等类型的值；显然，列表（<code>list</code>）和集合（<code>set</code>）是不能作为字典中的键的，当然字典类型本身也不能再作为字典中的键，因为字典也是可变类型，但是字典可以作为字典中的值。关于可变类型不能作为字典中的键的原因，我们在后面的课程中再为大家详细说明。这里，我们先看看下面的代码，了解一下字典的成员运算和索引运算。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>person = {&#39;name&#39;: &#39;王大锤&#39;, &#39;age&#39;: 55, &#39;weight&#39;: 60, &#39;office&#39;: &#39;科华北路62号&#39;}
# 检查name和tel两个键在不在person字典中
print(&#39;name&#39; in person, &#39;tel&#39; in person)    # True False
# 通过age修将person字典中对应的值修改为25
if &#39;age&#39; in person:
    person[&#39;age&#39;] = 25
# 通过索引操作向person字典中存入新的键值对
person[&#39;tel&#39;] = &#39;13122334455&#39;
person[&#39;signature&#39;] = &#39;你的男朋友是一个盖世垃圾，他会踏着五彩祥云去迎娶你的闺蜜&#39;
print(&#39;name&#39; in person, &#39;tel&#39; in person)    # True True
# 检查person字典中键值对的数量
print(len(person))    # 6
# 对字典的键进行循环并通索引运算获取键对应的值
for key in person:
    print(f&#39;{key}: {person[key]}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，在通过索引运算获取字典中的值时，如指定的键没有在字典中，将会引发<code>KeyError</code>异常。</p><h3 id="字典的方法" tabindex="-1"><a class="header-anchor" href="#字典的方法" aria-hidden="true">#</a> 字典的方法</h3><p>字典类型的方法基本上都跟字典的键值对操作相关，可以通过下面的例子来了解这些方法的使用。例如，我们要用一个字典来保存学生的信息，我们可以使用学生的学号作为字典中的键，通过学号做索引运算就可以得到对应的学生；我们可以把字典的值也做成一个字典，这样就可以用多组键值对分别存储学生的姓名、性别、年龄、籍贯等信息，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 字典中的值又是一个字典(嵌套的字典)
students = {
    1001: {&#39;name&#39;: &#39;狄仁杰&#39;, &#39;sex&#39;: True, &#39;age&#39;: 22, &#39;place&#39;: &#39;山西大同&#39;},
    1002: {&#39;name&#39;: &#39;白元芳&#39;, &#39;sex&#39;: True, &#39;age&#39;: 23, &#39;place&#39;: &#39;河北保定&#39;},
    1003: {&#39;name&#39;: &#39;武则天&#39;, &#39;sex&#39;: False, &#39;age&#39;: 20, &#39;place&#39;: &#39;四川广元&#39;}
}

# 使用get方法通过键获取对应的值，如果取不到不会引发KeyError异常而是返回None或设定的默认值
print(students.get(1002))    # {&#39;name&#39;: &#39;白元芳&#39;, &#39;sex&#39;: True, &#39;age&#39;: 23, &#39;place&#39;: &#39;河北保定&#39;}
print(students.get(1005))    # None
print(students.get(1005, {&#39;name&#39;: &#39;无名氏&#39;}))    # {&#39;name&#39;: &#39;无名氏&#39;}

# 获取字典中所有的键
print(students.keys())      # dict_keys([1001, 1002, 1003])
# 获取字典中所有的值
print(students.values())    # dict_values([{...}, {...}, {...}])
# 获取字典中所有的键值对
print(students.items())     # dict_items([(1001, {...}), (1002, {....}), (1003, {...})])
# 对字典中所有的键值对进行循环遍历
for key, value in students.items():
    print(key, &#39;---&gt;&#39;, value)

# 使用pop方法通过键删除对应的键值对并返回该值
stu1 = students.pop(1002)
print(stu1)             # {&#39;name&#39;: &#39;白元芳&#39;, &#39;sex&#39;: True, &#39;age&#39;: 23, &#39;place&#39;: &#39;河北保定&#39;}
print(len(students))    # 2
# stu2 = students.pop(1005)    # KeyError: 1005
stu2 = students.pop(1005, {})
print(stu2)             # {}

# 使用popitem方法删除字典中最后一组键值对并返回对应的二元组
# 如果字典中没有元素，调用该方法将引发KeyError异常
key, value = students.popitem()
print(key, value)    # 1003 {&#39;name&#39;: &#39;武则天&#39;, &#39;sex&#39;: False, &#39;age&#39;: 20, &#39;place&#39;: &#39;四川广元&#39;}

# 如果这个键在字典中存在，setdefault返回原来与这个键对应的值
# 如果这个键在字典中不存在，向字典中添加键值对，返回第二个参数的值，默认为None
result = students.setdefault(1005, {&#39;name&#39;: &#39;方启鹤&#39;, &#39;sex&#39;: True})
print(result)        # {&#39;name&#39;: &#39;方启鹤&#39;, &#39;sex&#39;: True}
print(students)      # {1001: {...}, 1005: {...}}

# 使用update更新字典元素，相同的键会用新值覆盖掉旧值，不同的键会添加到字典中
others = {
    1005: {&#39;name&#39;: &#39;乔峰&#39;, &#39;sex&#39;: True, &#39;age&#39;: 32, &#39;place&#39;: &#39;北京大兴&#39;},
    1010: {&#39;name&#39;: &#39;王语嫣&#39;, &#39;sex&#39;: False, &#39;age&#39;: 19},
    1008: {&#39;name&#39;: &#39;钟灵&#39;, &#39;sex&#39;: False}
}
students.update(others)
print(students)      # {1001: {...}, 1005: {...}, 1010: {...}, 1008: {...}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跟列表一样，从字典中删除元素也可以使用<code>del</code>关键字，在删除元素的时候如果指定的键索引不到对应的值，一样会引发<code>KeyError</code>异常，具体的做法如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>person = {&#39;name&#39;: &#39;王大锤&#39;, &#39;age&#39;: 25, &#39;sex&#39;: True}
del person[&#39;age&#39;]
print(person)    # {&#39;name&#39;: &#39;王大锤&#39;, &#39;sex&#39;: True}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典的应用" tabindex="-1"><a class="header-anchor" href="#字典的应用" aria-hidden="true">#</a> 字典的应用</h3><p>我们通过几个简单的例子来讲解字典的应用。</p><p><strong>例子1</strong>：输入一段话，统计每个英文字母出现的次数。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>sentence = input(&#39;请输入一段话: &#39;)
counter = {}
for ch in sentence:
    if &#39;A&#39; &lt;= ch &lt;= &#39;Z&#39; or &#39;a&#39; &lt;= ch &lt;= &#39;z&#39;:
        counter[ch] = counter.get(ch, 0) + 1
for key, value in counter.items():
    print(f&#39;字母{key}出现了{value}次.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>例子2</strong>：在一个字典中保存了股票的代码和价格，找出股价大于100元的股票并创建一个新的字典。</p><blockquote><p><strong>说明</strong>：可以用字典的生成式语法来创建这个新字典。</p></blockquote><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>stocks = {
    &#39;AAPL&#39;: 191.88,
    &#39;GOOG&#39;: 1186.96,
    &#39;IBM&#39;: 149.24,
    &#39;ORCL&#39;: 48.44,
    &#39;ACN&#39;: 166.89,
    &#39;FB&#39;: 208.09,
    &#39;SYMC&#39;: 21.29
}
stocks2 = {key: value for key, value in stocks.items() if value &gt; 100}
print(stocks2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python程序中的字典跟现实生活中字典非常像，允许我们<strong>以键值对的形式保存数据</strong>，再<strong>通过键索引对应的值</strong>。这是一种非常<strong>有利于数据检索</strong>的数据类型，底层原理我们在后续的课程中为大家讲解。再次提醒大家注意，<strong>字典中的键必须是不可变类型</strong>，字典中的值可以是任意类型。</p>`,33),r=[l];function v(c,t){return n(),i("div",null,r)}const m=e(a,[["render",v],["__file","第12课：常用数据结构之字典.html.vue"]]);export{m as default};
