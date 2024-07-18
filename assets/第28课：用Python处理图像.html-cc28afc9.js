import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as d}from"./app-9976b6d0.js";const l="/assets/28_01-cc3b8839.png",a="/assets/28_02-35b0453c.png",s="/assets/28_03-8dc8c2a3.png",t="/assets/28_04-eff717d8.png",r="/assets/28_05-d1567d6c.png",o="/assets/28_06-1b8d500e.png",c="/assets/28_07-a0d5a101.png",m="/assets/28_08-2a8482e1.png",v={},g=d(`<h2 id="第28课-用python处理图像" tabindex="-1"><a class="header-anchor" href="#第28课-用python处理图像" aria-hidden="true">#</a> 第28课：用Python处理图像</h2><h3 id="入门知识" tabindex="-1"><a class="header-anchor" href="#入门知识" aria-hidden="true">#</a> 入门知识</h3><ol><li><p>颜色。如果你有使用颜料画画的经历，那么一定知道混合红、黄、蓝三种颜料可以得到其他的颜色，事实上这三种颜色就是美术中的三原色，它们是不能再分解的基本颜色。在计算机中，我们可以将红、绿、蓝三种色光以不同的比例叠加来组合成其他的颜色，因此这三种颜色就是色光三原色。在计算机系统中，我们通常会将一个颜色表示为一个RGB值或RGBA值（其中的A表示Alpha通道，它决定了透过这个图像的像素，也就是透明度）。</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th><th style="text-align:center;">名称</th><th style="text-align:center;">RGB值</th></tr></thead><tbody><tr><td style="text-align:center;">White（白）</td><td style="text-align:center;">(255, 255, 255)</td><td style="text-align:center;">Red（红）</td><td style="text-align:center;">(255, 0, 0)</td></tr><tr><td style="text-align:center;">Green（绿）</td><td style="text-align:center;">(0, 255, 0)</td><td style="text-align:center;">Blue（蓝）</td><td style="text-align:center;">(0, 0, 255)</td></tr><tr><td style="text-align:center;">Gray（灰）</td><td style="text-align:center;">(128, 128, 128)</td><td style="text-align:center;">Yellow（黄）</td><td style="text-align:center;">(255, 255, 0)</td></tr><tr><td style="text-align:center;">Black（黑）</td><td style="text-align:center;">(0, 0, 0)</td><td style="text-align:center;">Purple（紫）</td><td style="text-align:center;">(128, 0, 128)</td></tr></tbody></table></li><li><p>像素。对于一个由数字序列表示的图像来说，最小的单位就是图像上单一颜色的小方格，这些小方块都有一个明确的位置和被分配的色彩数值，而这些一小方格的颜色和位置决定了该图像最终呈现出来的样子，它们是不可分割的单位，我们通常称之为像素（pixel）。每一个图像都包含了一定量的像素，这些像素决定图像在屏幕上所呈现的大小，大家如果爱好拍照或者自拍，对像素这个词就不会陌生。</p></li></ol><h3 id="用pillow处理图像" tabindex="-1"><a class="header-anchor" href="#用pillow处理图像" aria-hidden="true">#</a> 用Pillow处理图像</h3><p>Pillow是由从著名的Python图像处理库PIL发展出来的一个分支，通过Pillow可以实现图像压缩和图像处理等各种操作。可以使用下面的命令来安装Pillow。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install pillow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pillow中最为重要的是<code>Image</code>类，可以通过<code>Image</code>模块的<code>open</code>函数来读取图像并获得<code>Image</code>类型的对象。</p><ol><li><p>读取和显示图像</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from PIL import Image

# 读取图像获得Image对象
image = Image.open(&#39;guido.jpg&#39;)
# 通过Image对象的format属性获得图像的格式
print(image.format) # JPEG
# 通过Image对象的size属性获得图像的尺寸
print(image.size)   # (500, 750)
# 通过Image对象的mode属性获取图像的模式
print(image.mode)   # RGB
# 通过Image对象的show方法显示图像
image.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+l+`" width="80%"></li><li><p>剪裁图像</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 通过Image对象的crop方法指定剪裁区域剪裁图像
image.crop((80, 20, 310, 360)).show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+a+`" width="80%"></li><li><p>生成缩略图</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 通过Image对象的thumbnail方法生成指定尺寸的缩略图
image.thumbnail((128, 128))
image.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+s+`" width="100%"></li><li><p>缩放和黏贴图像</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 读取骆昊的照片获得Image对象
luohao_image = Image.open(&#39;luohao.png&#39;)
# 读取吉多的照片获得Image对象
guido_image = Image.open(&#39;guido.jpg&#39;)
# 从吉多的照片上剪裁出吉多的头
guido_head = guido_image.crop((80, 20, 310, 360))
width, height = guido_head.size
# 使用Image对象的resize方法修改图像的尺寸
# 使用Image对象的paste方法将吉多的头粘贴到骆昊的照片上
luohao_image.paste(guido_head.resize((int(width / 1.5), int(height / 1.5))), (172, 40))
luohao_image.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+t+`" width="80%"></li><li><p>旋转和翻转</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>image = Image.open(&#39;guido.jpg&#39;)
# 使用Image对象的rotate方法实现图像的旋转
image.rotate(45).show()
# 使用Image对象的transpose方法实现图像翻转
# Image.FLIP_LEFT_RIGHT - 水平翻转
# Image.FLIP_TOP_BOTTOM - 垂直翻转
image.transpose(Image.FLIP_TOP_BOTTOM).show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+r+`" width="80%"></li><li><p>操作像素</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>for x in range(80, 310):
    for y in range(20, 360):
        # 通过Image对象的putpixel方法修改图像指定像素点
        image.putpixel((x, y), (128, 128, 128))
image.show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" width="80%"></li><li><p>滤镜效果</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from PIL import ImageFilter

# 使用Image对象的filter方法对图像进行滤镜处理
# ImageFilter模块包含了诸多预设的滤镜也可以自定义滤镜
image.filter(ImageFilter.CONTOUR).show()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+'" width="80%"></li></ol><h3 id="使用pillow绘图" tabindex="-1"><a class="header-anchor" href="#使用pillow绘图" aria-hidden="true">#</a> 使用Pillow绘图</h3><p>Pillow中有一个名为<code>ImageDraw</code>的模块，该模块的<code>Draw</code>函数会返回一个<code>ImageDraw</code>对象，通过<code>ImageDraw</code>对象的<code>arc</code>、<code>line</code>、<code>rectangle</code>、<code>ellipse</code>、<code>polygon</code>等方法，可以在图像上绘制出圆弧、线条、矩形、椭圆、多边形等形状，也可以通过该对象的<code>text</code>方法在图像上添加文字。</p><img src="'+m+`" width="80%"><p>要绘制如上图所示的图像，完整的代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random

from PIL import Image, ImageDraw, ImageFont


def random_color():
    &quot;&quot;&quot;生成随机颜色&quot;&quot;&quot;
    red = random.randint(0, 255)
    green = random.randint(0, 255)
    blue = random.randint(0, 255)
    return red, green, blue


width, height = 800, 600
# 创建一个800*600的图像，背景色为白色
image = Image.new(mode=&#39;RGB&#39;, size=(width, height), color=(255, 255, 255))
# 创建一个ImageDraw对象
drawer = ImageDraw.Draw(image)
# 通过指定字体和大小获得ImageFont对象
font = ImageFont.truetype(&#39;Kongxin.ttf&#39;, 32)
# 通过ImageDraw对象的text方法绘制文字
drawer.text((300, 50), &#39;Hello, world!&#39;, fill=(255, 0, 0), font=font)
# 通过ImageDraw对象的line方法绘制两条对角直线
drawer.line((0, 0, width, height), fill=(0, 0, 255), width=2)
drawer.line((width, 0, 0, height), fill=(0, 0, 255), width=2)
xy = width // 2 - 60, height // 2 - 60, width // 2 + 60, height // 2 + 60
# 通过ImageDraw对象的rectangle方法绘制矩形
drawer.rectangle(xy, outline=(255, 0, 0), width=2)
# 通过ImageDraw对象的ellipse方法绘制椭圆
for i in range(4):
    left, top, right, bottom = 150 + i * 120, 220, 310 + i * 120, 380
    drawer.ellipse((left, top, right, bottom), outline=random_color(), width=8)
# 显示图像
image.show()
# 保存图像
image.save(&#39;result.png&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：上面代码中使用的字体文件需要根据自己准备，可以选择自己喜欢的字体文件并放置在代码目录下。</p></blockquote><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>使用Python语言做开发，除了可以用Pillow来处理图像外，还可以使用更为强大的OpenCV库来完成图形图像的处理，OpenCV（<strong>Open</strong> Source <strong>C</strong>omputer <strong>V</strong>ision Library）是一个跨平台的计算机视觉库，可以用来开发实时图像处理、计算机视觉和模式识别程序。在我们的日常工作中，有很多繁琐乏味的任务其实都可以通过Python程序来处理，编程的目的就是让计算机帮助我们解决问题，减少重复乏味的劳动。通过本章节的学习，相信大家已经感受到了使用Python程序绘图P图的乐趣，其实Python能做的事情还远不止这些，继续你的学习吧。</p>`,16),u=[g];function h(b,p){return i(),n("div",null,u)}const _=e(v,[["render",h],["__file","第28课：用Python处理图像.html.vue"]]);export{_ as default};
