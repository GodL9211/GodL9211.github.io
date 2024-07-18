import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c,a as n,b as e,e as d,f as i}from"./app-9976b6d0.js";const v="/assets/25_01-2cb62015.png",o={},t=i(`<h2 id="第25课-用python读写excel文件-2" tabindex="-1"><a class="header-anchor" href="#第25课-用python读写excel文件-2" aria-hidden="true">#</a> 第25课：用Python读写Excel文件-2</h2><h3 id="excel简介" tabindex="-1"><a class="header-anchor" href="#excel简介" aria-hidden="true">#</a> Excel简介</h3><p>Excel是Microsoft（微软）为使用Windows和macOS操作系统开发的一款电子表格软件。Excel凭借其直观的界面、出色的计算功能和图表工具，再加上成功的市场营销，一直以来都是最为流行的个人计算机数据处理软件。当然，Excel也有很多竞品，例如Google Sheets、LibreOffice Calc、Numbers等，这些竞品基本上也能够兼容Excel，至少能够读写较新版本的Excel文件，当然这些不是我们讨论的重点。掌握用Python程序操作Excel文件，可以让日常办公自动化的工作更加轻松愉快，而且在很多商业项目中，导入导出Excel文件都是特别常见的功能。</p><p>本章我们继续讲解基于另一个三方库<code>openpyxl</code>如何进行Excel文件操作，首先需要先安装它。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>openpyxl</code>的优点在于，当我们打开一个Excel文件后，既可以对它进行读操作，又可以对它进行写操作，而且在操作的便捷性上是优于<code>xlwt</code>和<code>xlrd</code>的。此外，如果要进行样式编辑和公式计算，使用<code>openpyxl</code>也远比上一个章节我们讲解的方式更为简单，而且<code>openpyxl</code>还支持数据透视和插入图表等操作，功能非常强大。有一点需要再次强调，<code>openpyxl</code>并不支持操作Office 2007以前版本的Excel文件。</p><h3 id="读取excel文件" tabindex="-1"><a class="header-anchor" href="#读取excel文件" aria-hidden="true">#</a> 读取Excel文件</h3><p>例如在当前文件夹下有一个名为“阿里巴巴2020年股票数据.xlsx”的Excel文件，如果想读取并显示该文件的内容，可以通过如下所示的代码来完成。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import datetime

import openpyxl

# 加载一个工作簿 ---&gt; Workbook
wb = openpyxl.load_workbook(&#39;阿里巴巴2020年股票数据.xlsx&#39;)
# 获取工作表的名字
print(wb.sheetnames)
# 获取工作表 ---&gt; Worksheet
sheet = wb.worksheets[0]
# 获得单元格的范围
print(sheet.dimensions)
# 获得行数和列数
print(sheet.max_row, sheet.max_column)

# 获取指定单元格的值
print(sheet.cell(3, 3).value)
print(sheet[&#39;C3&#39;].value)
print(sheet[&#39;G255&#39;].value)

# 获取多个单元格（嵌套元组）
print(sheet[&#39;A2:C5&#39;])

# 读取所有单元格的数据
for row_ch in range(2, sheet.max_row + 1):
    for col_ch in &#39;ABCDEFG&#39;:
        value = sheet[f&#39;{col_ch}{row_ch}&#39;].value
        if type(value) == datetime.datetime:
            print(value.strftime(&#39;%Y年%m月%d日&#39;), end=&#39;\\t&#39;)
        elif type(value) == int:
            print(f&#39;{value:&lt;10d}&#39;, end=&#39;\\t&#39;)
        elif type(value) == float:
            print(f&#39;{value:.4f}&#39;, end=&#39;\\t&#39;)
        else:
            print(value, end=&#39;\\t&#39;)
    print()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m=n("strong",null,"提示",-1),u={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>需要提醒大家一点，<code>openpyxl</code>获取指定的单元格有两种方式，一种是通过<code>cell</code>方法，需要注意，该方法的行索引和列索引都是从<code>1</code>开始的，这是为了照顾用惯了Excel的人的习惯；另一种是通过索引运算，通过指定单元格的坐标，例如<code>C3</code>、<code>G255</code>，也可以取得对应的单元格，再通过单元格对象的<code>value</code>属性，就可以获取到单元格的值。通过上面的代码，相信大家还注意到了，可以通过类似<code>sheet[&#39;A2:C5&#39;]</code>或<code>sheet[&#39;A2&#39;:&#39;C5&#39;]</code>这样的切片操作获取多个单元格，该操作将返回嵌套的元组，相当于获取到了多行多列。</p><h3 id="写excel文件" tabindex="-1"><a class="header-anchor" href="#写excel文件" aria-hidden="true">#</a> 写Excel文件</h3><p>下面我们使用<code>openpyxl</code>来进行写Excel操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random

import openpyxl

# 第一步：创建工作簿（Workbook）
wb = openpyxl.Workbook()

# 第二步：添加工作表（Worksheet）
sheet = wb.active
sheet.title = &#39;期末成绩&#39;

titles = (&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)
for col_index, title in enumerate(titles):
    sheet.cell(1, col_index + 1, title)

names = (&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;)
for row_index, name in enumerate(names):
    sheet.cell(row_index + 2, 1, name)
    for col_index in range(2, 5):
        sheet.cell(row_index + 2, col_index, random.randrange(50, 101))

# 第四步：保存工作簿
wb.save(&#39;考试成绩表.xlsx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调整样式和公式计算" tabindex="-1"><a class="header-anchor" href="#调整样式和公式计算" aria-hidden="true">#</a> 调整样式和公式计算</h4>`,5),h=n("code",null,"openpyxl",-1),p=n("code",null,"Cell",-1),x=n("code",null,"font",-1),_=n("code",null,"alignment",-1),f=n("code",null,"border",-1),y=n("code",null,"openpyxl",-1),g={href:"https://openpyxl.readthedocs.io/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"openpyxl",-1),E=i(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import openpyxl
from openpyxl.styles import Font, Alignment, Border, Side

# 对齐方式
alignment = Alignment(horizontal=&#39;center&#39;, vertical=&#39;center&#39;)
# 边框线条
side = Side(color=&#39;ff7f50&#39;, style=&#39;mediumDashed&#39;)

wb = openpyxl.load_workbook(&#39;考试成绩表.xlsx&#39;)
sheet = wb.worksheets[0]

# 调整行高和列宽
sheet.row_dimensions[1].height = 30
sheet.column_dimensions[&#39;E&#39;].width = 120

sheet[&#39;E1&#39;] = &#39;平均分&#39;
# 设置字体
sheet.cell(1, 5).font = Font(size=18, bold=True, color=&#39;ff1493&#39;, name=&#39;华文楷体&#39;)
# 设置对齐方式
sheet.cell(1, 5).alignment = alignment
# 设置单元格边框
sheet.cell(1, 5).border = Border(left=side, top=side, right=side, bottom=side)
for i in range(2, 7):
    # 公式计算每个学生的平均分
    sheet[f&#39;E{i}&#39;] = f&#39;=average(B{i}:D{i})&#39;
    sheet.cell(i, 5).font = Font(size=12, color=&#39;4169e1&#39;, italic=True)
    sheet.cell(i, 5).alignment = alignment

wb.save(&#39;考试成绩表.xlsx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成统计图表" tabindex="-1"><a class="header-anchor" href="#生成统计图表" aria-hidden="true">#</a> 生成统计图表</h3><p>通过<code>openpyxl</code>库，可以直接向Excel中插入统计图表，具体的做法跟在Excel中插入图表大体一致。我们可以创建指定类型的图表对象，然后通过该对象的属性对图表进行设置。当然，最为重要的是为图表绑定数据，即横轴代表什么，纵轴代表什么，具体的数值是多少。最后，可以将图表对象添加到表单中，具体的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from openpyxl import Workbook
from openpyxl.chart import BarChart, Reference

wb = Workbook(write_only=True)
sheet = wb.create_sheet()

rows = [
    (&#39;类别&#39;, &#39;销售A组&#39;, &#39;销售B组&#39;),
    (&#39;手机&#39;, 40, 30),
    (&#39;平板&#39;, 50, 60),
    (&#39;笔记本&#39;, 80, 70),
    (&#39;外围设备&#39;, 20, 10),
]

# 向表单中添加行
for row in rows:
    sheet.append(row)

# 创建图表对象
chart = BarChart()
chart.type = &#39;col&#39;
chart.style = 10
# 设置图表的标题
chart.title = &#39;销售统计图&#39;
# 设置图表纵轴的标题
chart.y_axis.title = &#39;销量&#39;
# 设置图表横轴的标题
chart.x_axis.title = &#39;商品类别&#39;
# 设置数据的范围
data = Reference(sheet, min_col=2, min_row=1, max_row=5, max_col=3)
# 设置分类的范围
cats = Reference(sheet, min_col=1, min_row=2, max_row=5)
# 给图表添加数据
chart.add_data(data, titles_from_data=True)
# 给图表设置分类
chart.set_categories(cats)
chart.shape = 4
# 将图表添加到表单指定的单元格中
sheet.add_chart(chart, &#39;A10&#39;)

wb.save(&#39;demo.xlsx&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码，打开生成的Excel文件，效果如下图所示。</p><img src="`+v+'" alt="image-20210819235009026" width="80%"><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>掌握了Python程序操作Excel的方法，可以解决日常办公中很多繁琐的处理Excel电子表格工作，最常见就是将多个数据格式相同的Excel文件合并到一个文件以及从多个Excel文件或表单中提取指定的数据。如果数据体量较大或者处理数据的方式比较复杂，我们还是推荐大家使用Python数据分析神器之一的<code>pandas</code>库。</p>',8);function k(P,B){const l=a("ExternalLinkIcon");return r(),c("div",null,[t,n("blockquote",null,[n("p",null,[m,e("：上面代码中使用的Excel文件“阿里巴巴2020年股票数据.xlsx”可以通过后面的百度云盘地址进行获取。链接:"),n("a",u,[e("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),d(l)]),e(" 提取码:e7b4。")])]),b,n("p",null,[e("在使用"),h,e("操作Excel时，如果要调整单元格的样式，可以直接通过单元格对象（"),p,e("对象）的属性进行操作。单元格对象的属性包括字体（"),x,e("）、对齐（"),_,e("）、边框（"),f,e("）等，具体的可以参考"),y,e("的"),n("a",g,[e("官方文档"),d(l)]),e("。在使用"),w,e("时，如果需要做公式计算，可以完全按照Excel中的操作方式来进行，具体的代码如下所示。")]),E])}const W=s(o,[["render",k],["__file","第25课：用Python读写Excel文件-2.html.vue"]]);export{W as default};
