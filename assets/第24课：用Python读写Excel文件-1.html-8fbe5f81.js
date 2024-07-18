import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as n,b as e,e as l,f as s}from"./app-9976b6d0.js";const t={},o=s(`<h2 id="第24课-用python读写excel文件-1" tabindex="-1"><a class="header-anchor" href="#第24课-用python读写excel文件-1" aria-hidden="true">#</a> 第24课：用Python读写Excel文件-1</h2><h3 id="excel简介" tabindex="-1"><a class="header-anchor" href="#excel简介" aria-hidden="true">#</a> Excel简介</h3><p>Excel是Microsoft（微软）为使用Windows和macOS操作系统开发的一款电子表格软件。Excel凭借其直观的界面、出色的计算功能和图表工具，再加上成功的市场营销，一直以来都是最为流行的个人计算机数据处理软件。当然，Excel也有很多竞品，例如Google Sheets、LibreOffice Calc、Numbers等，这些竞品基本上也能够兼容Excel，至少能够读写较新版本的Excel文件，当然这些不是我们讨论的重点。掌握用Python程序操作Excel文件，可以让日常办公自动化的工作更加轻松愉快，而且在很多商业项目中，导入导出Excel文件都是特别常见的功能。</p><p>Python操作Excel需要三方库的支持，如果要兼容Excel 2007以前的版本，也就是<code>xls</code>格式的Excel文件，可以使用三方库<code>xlrd</code>和<code>xlwt</code>，前者用于读Excel文件，后者用于写Excel文件。如果使用较新版本的Excel，即操作<code>xlsx</code>格式的Excel文件，可以使用<code>openpyxl</code>库，当然这个库不仅仅可以操作Excel，还可以操作其他基于Office Open XML的电子表格文件。</p><p>本章我们先讲解基于<code>xlwt</code>和<code>xlrd</code>操作Excel文件，大家可以先使用下面的命令安装这两个三方库以及配合使用的工具模块<code>xlutils</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install xlwt xlrd xlutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="读excel文件" tabindex="-1"><a class="header-anchor" href="#读excel文件" aria-hidden="true">#</a> 读Excel文件</h3><p>例如在当前文件夹下有一个名为“阿里巴巴2020年股票数据.xls”的Excel文件，如果想读取并显示该文件的内容，可以通过如下所示的代码来完成。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import xlrd

# 使用xlrd模块的open_workbook函数打开指定Excel文件并获得Book对象（工作簿）
wb = xlrd.open_workbook(&#39;阿里巴巴2020年股票数据.xls&#39;)
# 通过Book对象的sheet_names方法可以获取所有表单名称
sheetnames = wb.sheet_names()
print(sheetnames)
# 通过指定的表单名称获取Sheet对象（工作表）
sheet = wb.sheet_by_name(sheetnames[0])
# 通过Sheet对象的nrows和ncols属性获取表单的行数和列数
print(sheet.nrows, sheet.ncols)
for row in range(sheet.nrows):
    for col in range(sheet.ncols):
        # 通过Sheet对象的cell方法获取指定Cell对象（单元格）
        # 通过Cell对象的value属性获取单元格中的值
        value = sheet.cell(row, col).value
        # 对除首行外的其他行进行数据格式化处理
        if row &gt; 0:
            # 第1列的xldate类型先转成元组再格式化为“年月日”的格式
            if col == 0:
                # xldate_as_tuple函数的第二个参数只有0和1两个取值
                # 其中0代表以1900-01-01为基准的日期，1代表以1904-01-01为基准的日期
                value = xlrd.xldate_as_tuple(value, 0)
                value = f&#39;{value[0]}年{value[1]:&gt;02d}月{value[2]:&gt;02d}日&#39;
            # 其他列的number类型处理成小数点后保留两位有效数字的浮点数
            else:
                value = f&#39;{value:.2f}&#39;
        print(value, end=&#39;\\t&#39;)
    print()
# 获取最后一个单元格的数据类型
# 0 - 空值，1 - 字符串，2 - 数字，3 - 日期，4 - 布尔，5 - 错误
last_cell_type = sheet.cell_type(sheet.nrows - 1, sheet.ncols - 1)
print(last_cell_type)
# 获取第一行的值（列表）
print(sheet.row_values(0))
# 获取指定行指定列范围的数据（列表）
# 第一个参数代表行索引，第二个和第三个参数代表列的开始（含）和结束（不含）索引
print(sheet.row_slice(3, 0, 5))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=n("strong",null,"提示",-1),u={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"xlrd",-1),b={href:"https://xlrd.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},h=s(`<h3 id="写excel文件" tabindex="-1"><a class="header-anchor" href="#写excel文件" aria-hidden="true">#</a> 写Excel文件</h3><p>写入Excel文件可以通过<code>xlwt</code> 模块的<code>Workbook</code>类创建工作簿对象，通过工作簿对象的<code>add_sheet</code>方法可以添加工作表，通过工作表对象的<code>write</code>方法可以向指定单元格中写入数据，最后通过工作簿对象的<code>save</code>方法将工作簿写入到指定的文件或内存中。下面的代码实现了将<code>5</code>个学生<code>3</code>门课程的考试成绩写入Excel文件的操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random

import xlwt

student_names = [&#39;关羽&#39;, &#39;张飞&#39;, &#39;赵云&#39;, &#39;马超&#39;, &#39;黄忠&#39;]
scores = [[random.randrange(50, 101) for _ in range(3)] for _ in range(5)]
# 创建工作簿对象（Workbook）
wb = xlwt.Workbook()
# 创建工作表对象（Worksheet）
sheet = wb.add_sheet(&#39;一年级二班&#39;)
# 添加表头数据
titles = (&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)
for index, title in enumerate(titles):
    sheet.write(0, index, title)
# 将学生姓名和考试成绩写入单元格
for row in range(len(scores)):
    sheet.write(row + 1, 0, student_names[row])
    for col in range(len(scores[row])):
        sheet.write(row + 1, col + 1, scores[row][col])
# 保存Excel工作簿
wb.save(&#39;考试成绩表.xls&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调整单元格样式" tabindex="-1"><a class="header-anchor" href="#调整单元格样式" aria-hidden="true">#</a> 调整单元格样式</h4><p>在写Excel文件时，我们还可以为单元格设置样式，主要包括字体（Font）、对齐方式（Alignment）、边框（Border）和背景（Background）的设置，<code>xlwt</code>对这几项设置都封装了对应的类来支持。要设置单元格样式需要首先创建一个<code>XFStyle</code>对象，再通过该对象的属性对字体、对齐方式、边框等进行设定，例如在上面的例子中，如果希望将表头单元格的背景色修改为黄色，可以按照如下的方式进行操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>header_style = xlwt.XFStyle()
pattern = xlwt.Pattern()
pattern.pattern = xlwt.Pattern.SOLID_PATTERN
# 0 - 黑色、1 - 白色、2 - 红色、3 - 绿色、4 - 蓝色、5 - 黄色、6 - 粉色、7 - 青色
pattern.pattern_fore_colour = 5
header_style.pattern = pattern
titles = (&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)
for index, title in enumerate(titles):
    sheet.write(0, index, title, header_style)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望为表头设置指定的字体，可以使用<code>Font</code>类并添加如下所示的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>font = xlwt.Font()
# 字体名称
font.name = &#39;华文楷体&#39;
# 字体大小（20是基准单位，18表示18px）
font.height = 20 * 18
# 是否使用粗体
font.bold = True
# 是否使用斜体
font.italic = False
# 字体颜色
font.colour_index = 1
header_style.font = font
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面代码中指定的字体名（<code>font.name</code>）应当是本地系统有的字体，例如在我的电脑上有名为“华文楷体”的字体。</p></blockquote><p>如果希望表头垂直居中对齐，可以使用下面的代码进行设置。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>align = xlwt.Alignment()
# 垂直方向的对齐方式
align.vert = xlwt.Alignment.VERT_CENTER
# 水平方向的对齐方式
align.horz = xlwt.Alignment.HORZ_CENTER
header_style.alignment = align
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望给表头加上黄色的虚线边框，可以使用下面的代码来设置。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>borders = xlwt.Borders()
props = (
    (&#39;top&#39;, &#39;top_colour&#39;), (&#39;right&#39;, &#39;right_colour&#39;),
    (&#39;bottom&#39;, &#39;bottom_colour&#39;), (&#39;left&#39;, &#39;left_colour&#39;)
)
# 通过循环对四个方向的边框样式及颜色进行设定
for position, color in props:
    # 使用setattr内置函数动态给对象指定的属性赋值
    setattr(borders, position, xlwt.Borders.DASHED)
    setattr(borders, color, 5)
header_style.borders = borders
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要调整单元格的宽度（列宽）和表头的高度（行高），可以按照下面的代码进行操作。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 设置行高为40px
sheet.row(0).set_style(xlwt.easyxf(f&#39;font:height {20 * 40}&#39;))
titles = (&#39;姓名&#39;, &#39;语文&#39;, &#39;数学&#39;, &#39;英语&#39;)
for index, title in enumerate(titles):
    # 设置列宽为200px
    sheet.col(index).width = 20 * 200
    # 设置单元格的数据和样式
    sheet.write(0, index, title, header_style)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="公式计算" tabindex="-1"><a class="header-anchor" href="#公式计算" aria-hidden="true">#</a> 公式计算</h4><p>对于前面打开的“阿里巴巴2020年股票数据.xls”文件，如果要统计全年收盘价（Close字段）的平均值以及全年交易量（Volume字段）的总和，可以使用Excel的公式计算即可。我们可以先使用<code>xlrd</code>读取Excel文件夹，然后通过<code>xlutils</code>三方库提供的<code>copy</code>函数将读取到的Excel文件转成<code>Workbook</code>对象进行写操作，在调用<code>write</code>方法时，可以将一个<code>Formula</code>对象写入单元格。</p><p>实现公式计算的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import xlrd
import xlwt
from xlutils.copy import copy

wb_for_read = xlrd.open_workbook(&#39;阿里巴巴2020年股票数据.xls&#39;)
sheet1 = wb_for_read.sheet_by_index(0)
nrows, ncols = sheet1.nrows, sheet1.ncols
wb_for_write = copy(wb_for_read)
sheet2 = wb_for_write.get_sheet(0)
sheet2.write(nrows, 4, xlwt.Formula(f&#39;average(E2:E{nrows})&#39;))
sheet2.write(nrows, 6, xlwt.Formula(f&#39;sum(G2:G{nrows})&#39;))
wb_for_write.save(&#39;阿里巴巴2020年股票数据汇总.xls&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码有一些小瑕疵，有兴趣的读者可以自行探索并思考如何解决。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>掌握了Python程序操作Excel的方法，可以解决日常办公中很多繁琐的处理Excel电子表格工作，最常见就是将多个数据格式相同的Excel文件合并到一个文件以及从多个Excel文件或表单中提取指定的数据。当然，如果要对表格数据进行处理，使用Python数据分析神器之一的<code>pandas</code>库可能更为方便。</p>`,22);function x(p,_){const i=r("ExternalLinkIcon");return a(),c("div",null,[o,n("blockquote",null,[n("p",null,[v,e("：上面代码中使用的Excel文件“阿里巴巴2020年股票数据.xls”可以通过后面的百度云盘地址进行获取。链接:"),n("a",u,[e("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),l(i)]),e(" 提取码:e7b4。")])]),n("p",null,[e("相信通过上面的代码，大家已经了解到了如何读取一个Excel文件，如果想知道更多关于"),m,e("模块的知识，可以阅读它的"),n("a",b,[e("官方文档"),l(i)]),e("。")]),h])}const f=d(t,[["render",x],["__file","第24课：用Python读写Excel文件-1.html.vue"]]);export{f as default};
