import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as t,a as e,b as n,e as i,f as a}from"./app-9976b6d0.js";const o={},c=a(`<h2 id="第27课-用python操作pdf文件" tabindex="-1"><a class="header-anchor" href="#第27课-用python操作pdf文件" aria-hidden="true">#</a> 第27课：用Python操作PDF文件</h2><p>PDF是Portable Document Format的缩写，这类文件通常使用<code>.pdf</code>作为其扩展名。在日常开发工作中，最容易遇到的就是从PDF中读取文本内容以及用已有的内容生成PDF文档这两个任务。</p><h3 id="从pdf中提取文本" tabindex="-1"><a class="header-anchor" href="#从pdf中提取文本" aria-hidden="true">#</a> 从PDF中提取文本</h3><p>在Python中，可以使用名为<code>PyPDF2</code>的三方库来读取PDF文件，可以使用下面的命令来安装它。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install PyPDF2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>PyPDF2</code>没有办法从PDF文档中提取图像、图表或其他媒体，但它可以提取文本，并将其返回为Python字符串。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import PyPDF2

reader = PyPDF2.PdfReader(&#39;test.pdf&#39;)
for page in reader.pages:
    print(page.extract_text())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=e("strong",null,"提示",-1),p={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"PyPDF2",-1),m={href:"https://cloud.tencent.com/developer/article/1395339",target:"_blank",rel:"noopener noreferrer"},b=a(`<p>要从PDF文件中提取文本也可以直接使用三方的命令行工具，具体的做法如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install pdfminer.six
pdf2text.py test.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="旋转和叠加页面" tabindex="-1"><a class="header-anchor" href="#旋转和叠加页面" aria-hidden="true">#</a> 旋转和叠加页面</h3><p>上面的代码中通过创建<code>PdfFileReader</code>对象的方式来读取PDF文档，该对象的<code>getPage</code>方法可以获得PDF文档的指定页并得到一个<code>PageObject</code>对象，通过<code>PageObject</code>对象的<code>rotateClockwise</code>和<code>rotateCounterClockwise</code>方法可以实现页面的顺时针和逆时针方向旋转，通过<code>PageObject</code>对象的<code>addBlankPage</code>方法可以添加一个新的空白页，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>reader = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)
writer = PyPDF2.PdfWriter()

for no, page in enumerate(reader.pages):
    if no % 2 == 0:
        new_page = page.rotate(-90)
    else:
        new_page = page.rotate(90)
    writer.add_page(new_page)

with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:
    writer.write(file_obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密pdf文件" tabindex="-1"><a class="header-anchor" href="#加密pdf文件" aria-hidden="true">#</a> 加密PDF文件</h3><p>使用<code>PyPDF2</code>中的<code>PdfFileWrite</code>对象可以为PDF文档加密，如果需要给一系列的PDF文档设置统一的访问口令，使用Python程序来处理就会非常的方便。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import PyPDF2

reader = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)
writer = PyPDF2.PdfWriter()

for page in reader.pages:
    writer.add_page(page)
    
writer.encrypt(&#39;foobared&#39;)

with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:
    writer.write(file_obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量添加水印" tabindex="-1"><a class="header-anchor" href="#批量添加水印" aria-hidden="true">#</a> 批量添加水印</h3><p>上面提到的<code>PageObject</code>对象还有一个名为<code>mergePage</code>的方法，可以两个PDF页面进行叠加，通过这个操作，我们很容易实现给PDF文件添加水印的功能。例如要给上面的“XGBoost.pdf”文件添加一个水印，我们可以先准备好一个提供水印页面的PDF文件，然后将包含水印的<code>PageObject</code>读取出来，然后再循环遍历“XGBoost.pdf”文件的每个页，获取到<code>PageObject</code>对象，然后通过<code>mergePage</code>方法实现水印页和原始页的合并，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>reader1 = PyPDF2.PdfReader(&#39;XGBoost.pdf&#39;)
reader2 = PyPDF2.PdfReader(&#39;watermark.pdf&#39;)
writer = PyPDF2.PdfWriter()
watermark_page = reader2.pages[0]

for page in reader1.pages:
    page.merge_page(watermark_page)
    writer.add_page(page)

with open(&#39;temp.pdf&#39;, &#39;wb&#39;) as file_obj:
    writer.write(file_obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果愿意，还可以让奇数页和偶数页使用不同的水印，大家可以自己思考下应该怎么做。</p><h3 id="创建pdf文件" tabindex="-1"><a class="header-anchor" href="#创建pdf文件" aria-hidden="true">#</a> 创建PDF文件</h3><p>创建PDF文档需要三方库<code>reportlab</code>的支持，安装的方法如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install reportlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面通过一个例子为大家展示<code>reportlab</code>的用法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

pdf_canvas = canvas.Canvas(&#39;resources/demo.pdf&#39;, pagesize=A4)
width, height = A4

# 绘图
image = canvas.ImageReader(&#39;resources/guido.jpg&#39;)
pdf_canvas.drawImage(image, 20, height - 395, 250, 375)

# 显示当前页
pdf_canvas.showPage()

# 注册字体文件
pdfmetrics.registerFont(TTFont(&#39;Font1&#39;, &#39;resources/fonts/Vera.ttf&#39;))
pdfmetrics.registerFont(TTFont(&#39;Font2&#39;, &#39;resources/fonts/青呱石头体.ttf&#39;))

# 写字
pdf_canvas.setFont(&#39;Font2&#39;, 40)
pdf_canvas.setFillColorRGB(0.9, 0.5, 0.3, 1)
pdf_canvas.drawString(width // 2 - 120, height // 2, &#39;你好，世界！&#39;)
pdf_canvas.setFont(&#39;Font1&#39;, 40)
pdf_canvas.setFillColorRGB(0, 1, 0, 0.5)
pdf_canvas.rotate(18)
pdf_canvas.drawString(250, 250, &#39;hello, world!&#39;)

# 保存
pdf_canvas.save()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),h=e("code",null,"reportlab",-1),P={href:"https://www.reportlab.com/docs/reportlab-userguide.pdf",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"提示",-1),f={href:"https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g",target:"_blank",rel:"noopener noreferrer"},_=e("h3",{id:"简单的总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#简单的总结","aria-hidden":"true"},"#"),n(" 简单的总结")],-1),F=e("p",null,"在学习完上面的内容之后，相信大家已经知道像合并多个PDF文件这样的工作应该如何用Python代码来处理了，赶紧自己动手试一试吧。",-1);function y(D,w){const d=s("ExternalLinkIcon");return l(),t("div",null,[c,e("blockquote",null,[e("p",null,[v,n("：上面代码中使用的PDF文件“test.pdf”以及下面的代码中需要用到的PDF文件，也可以通过下面的百度云盘地址进行获取。链接:"),e("a",p,[n("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),i(d)]),n(" 提取码:e7b4。")])]),e("p",null,[n("当然，"),u,n("并不是什么样的PDF文档都能提取出文字来，这个问题就我所知并没有什么特别好的解决方法，尤其是在提取中文的时候。网上也有很多讲解从PDF中提取文字的文章，推荐大家自行阅读"),e("a",m,[n("《三大神器助力Python提取pdf文档信息》"),i(d)]),n("一文进行了解。")]),b,e("p",null,[n("上面的代码如果不太理解也没有关系，等真正需要用Python创建PDF文档的时候，再好好研读一下"),h,n("的"),e("a",P,[n("官方文档"),i(d)]),n("就可以了。")]),e("blockquote",null,[e("p",null,[g,n("：上面代码中用到的图片和字体，也可以通过下面的百度云盘链接获取。链接:"),e("a",f,[n("https://pan.baidu.com/s/1rQujl5RQn9R7PadB2Z5g_g"),i(d)]),n(" 提取码:e7b4。")])]),_,F])}const j=r(o,[["render",y],["__file","第27课：用Python操作PDF文件.html.vue"]]);export{j as default};
