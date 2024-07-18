import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as t,a as e,b as d,e as o,f as c}from"./app-9976b6d0.js";const a={},l=e("h2",{id:"第23课-用python读写csv文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第23课-用python读写csv文件","aria-hidden":"true"},"#"),d(" 第23课：用Python读写CSV文件")],-1),u=e("h3",{id:"csv文件介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#csv文件介绍","aria-hidden":"true"},"#"),d(" CSV文件介绍")],-1),v=e("p",null,"CSV（Comma Separated Values）全称逗号分隔值文件是一种简单、通用的文件格式，被广泛的应用于应用程序（数据库、电子表格等）数据的导入和导出以及异构系统之间的数据交换。因为CSV是纯文本文件，不管是什么操作系统和编程语言都是可以处理纯文本的，而且很多编程语言中都提供了对读写CSV文件的支持，因此CSV格式在数据处理和数据科学中被广泛应用。",-1),m=e("p",null,"CSV文件有以下特点：",-1),h={href:"https://zh.wikipedia.org/wiki/ASCII",target:"_blank",rel:"noopener noreferrer"},p={href:"https://zh.wikipedia.org/wiki/Unicode",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zh.wikipedia.org/wiki/GB2312",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"由一条条的记录组成（典型的是每行一条记录）；",-1),q=e("li",null,"每条记录被分隔符（如逗号、分号、制表符等）分隔为字段（列）；",-1),g=e("li",null,"每条记录都有同样的字段序列。",-1),f=c(`<p>CSV文件可以使用文本编辑器或类似于Excel电子表格这类工具打开和编辑，当使用Excel这类电子表格打开CSV文件时，你甚至感觉不到CSV和Excel文件的区别。很多数据库系统都支持将数据导出到CSV文件中，当然也支持从CSV文件中读入数据保存到数据库中，这些内容并不是现在要讨论的重点。</p><h3 id="将数据写入csv文件" tabindex="-1"><a class="header-anchor" href="#将数据写入csv文件" aria-hidden="true">#</a> 将数据写入CSV文件</h3><p>现有五个学生三门课程的考试成绩需要保存到一个CSV文件中，要达成这个目标，可以使用Python标准库中的<code>csv</code>模块，该模块的<code>writer</code>函数会返回一个<code>csvwriter</code>对象，通过该对象的<code>writerow</code>或<code>writerows</code>方法就可以将数据写入到CSV文件中，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import csv
import random

with open(&#39;scores.csv&#39;, &#39;w&#39;) as file:
    writer = csv.writer(file)
    writer.writerow([&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;])
    names = [&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;]
    for name in names:
        scores = [random.randrange(50, 101) for _ in range(3)]
        scores.insert(0, name)
        writer.writerow(scores)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的CSV文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>姓名,语文,数学,英语
关羽,98,86,61
张飞,86,58,80
赵云,95,73,70
马超,83,97,55
黄忠,61,54,87
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是上面的<code>writer</code>函数，除了传入要写入数据的文件对象外，还可以<code>dialect</code>参数，它表示CSV文件的方言，默认值是<code>excel</code>。除此之外，还可以通过<code>delimiter</code>、<code>quotechar</code>、<code>quoting</code>参数来指定分隔符（默认是逗号）、包围值的字符（默认是双引号）以及包围的方式。其中，包围值的字符主要用于当字段中有特殊符号时，通过添加包围值的字符可以避免二义性。大家可以尝试将上面第5行代码修改为下面的代码，然后查看生成的CSV文件。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>writer = csv.writer(file, delimiter=&#39;|&#39;, quoting=csv.QUOTE_ALL)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成的CSV文件的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;姓名&quot;|&quot;语文&quot;|&quot;数学&quot;|&quot;英语&quot;
&quot;关羽&quot;|&quot;88&quot;|&quot;64&quot;|&quot;65&quot;
&quot;张飞&quot;|&quot;76&quot;|&quot;93&quot;|&quot;79&quot;
&quot;赵云&quot;|&quot;78&quot;|&quot;55&quot;|&quot;76&quot;
&quot;马超&quot;|&quot;72&quot;|&quot;77&quot;|&quot;68&quot;
&quot;黄忠&quot;|&quot;70&quot;|&quot;72&quot;|&quot;51&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从csv文件读取数据" tabindex="-1"><a class="header-anchor" href="#从csv文件读取数据" aria-hidden="true">#</a> 从CSV文件读取数据</h3><p>如果要读取刚才创建的CSV文件，可以使用下面的代码，通过<code>csv</code>模块的<code>reader</code>函数可以创建出<code>csvreader</code>对象，该对象是一个迭代器，可以通过<code>next</code>函数或<code>for-in</code>循环读取到文件中的数据。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import csv

with open(&#39;scores.csv&#39;, &#39;r&#39;) as file:
    reader = csv.reader(file, delimiter=&#39;|&#39;)
    for data_list in reader:
        print(reader.line_num, end=&#39;\\t&#39;)
        for elem in data_list:
            print(elem, end=&#39;\\t&#39;)
        print()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面的代码对<code>csvreader</code>对象做<code>for</code>循环时，每次会取出一个列表对象，该列表对象包含了一行中所有的字段。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>将来如果大家使用Python做数据分析，很有可能会用到名为<code>pandas</code>的三方库，它是Python数据分析的神器之一。<code>pandas</code>中封装了名为<code>read_csv</code>和<code>to_csv</code>的函数用来读写CSV文件，其中<code>read_CSV</code>会将读取到的数据变成一个<code>DataFrame</code>对象，而<code>DataFrame</code>就是<code>pandas</code>库中最重要的类型，它封装了一系列用于数据处理的方法（清洗、转换、聚合等）；而<code>to_csv</code>会将<code>DataFrame</code>对象中的数据写入CSV文件，完成数据的持久化。<code>read_csv</code>函数和<code>to_csv</code>函数远远比原生的<code>csvreader</code>和<code>csvwriter</code>强大。</p>`,16);function V(C,S){const n=r("ExternalLinkIcon");return s(),t("div",null,[l,u,v,m,e("ol",null,[e("li",null,[d("纯文本，使用某种字符集（如"),e("a",h,[d("ASCII"),o(n)]),d("、"),e("a",p,[d("Unicode"),o(n)]),d("、"),e("a",_,[d("GB2312"),o(n)]),d("）等）；")]),b,q,g]),f])}const y=i(a,[["render",V],["__file","第23课：用Python读写CSV文件.html.vue"]]);export{y as default};
