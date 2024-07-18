import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as s}from"./app-9976b6d0.js";const d="/assets/17_01-cddd6436.png",l="/assets/17_02-f3513806.png",t={},a=s('<h2 id="第17课-面向对象编程入门" tabindex="-1"><a class="header-anchor" href="#第17课-面向对象编程入门" aria-hidden="true">#</a> 第17课：面向对象编程入门</h2><p>面向对象编程是一种非常流行的<strong>编程范式</strong>（programming paradigm），所谓编程范式就是<strong>程序设计的方法论</strong>，简单的说就是程序员对程序的认知和理解以及他们编写代码的方式。</p><p>在前面的课程中，我们说过“<strong>程序是指令的集合</strong>”，运行程序时，程序中的语句会变成一条或多条指令，然后由CPU（中央处理器）去执行。为了简化程序的设计，我们又讲到了函数，<strong>把相对独立且经常重复使用的代码放置到函数中</strong>，在需要使用这些代码的时候调用函数即可。如果一个函数的功能过于复杂和臃肿，我们又可以进一步<strong>将函数进一步拆分为多个子函数</strong>来降低系统的复杂性。</p><p>不知大家是否发现，我们的编程工作其实是写程序的人按照计算机的工作方式通过代码控制机器完成任务。但是，计算机的工作方式与人类正常的思维模式是不同的，如果编程就必须抛弃人类正常的思维方式去迎合计算机，编程的乐趣就少了很多，而“每个人都应该学习编程”的豪言壮语也就只能喊喊口号而已。这里，我想说的并不是我们不能按照计算机的工作方式去编写代码，但是当我们需要开发一个复杂的系统时，这种方式会让代码过于复杂，从而导致开发和维护工作都变得举步维艰。</p><p>随着软件复杂性的增加，编写正确可靠的代码会变成了一项极为艰巨的任务，这也是很多人都坚信“软件开发是人类改造世界所有活动中最为复杂的活动”的原因。如何用程序描述复杂系统和解决复杂问题，就成为了所有程序员必须要思考和直面的问题。诞生于上世纪70年代的Smalltalk语言让软件开发者看到了希望，因为它引入了一种新的编程范式叫面向对象编程。在面向对象编程的世界里，程序中的<strong>数据和操作数据的函数是一个逻辑上的整体</strong>，我们称之为<strong>对象</strong>，<strong>对象可以接收消息</strong>，解决问题的方法就是<strong>创建对象并向对象发出各种各样的消息</strong>；通过消息传递，程序中的多个对象可以协同工作，这样就能构造出复杂的系统并解决现实中的问题。当然，面向对象编程的雏形还可以向前追溯到更早期的Simula语言，但这不是我们现在要讨论的重点。</p><blockquote><p><strong>说明：</strong> 今天我们使用的很多高级程序设计语言都支持面向对象编程，但是面向对象编程也不是解决软件开发中所有问题的“银弹”，或者说在软件开发这个行业目前还找不到这种所谓的“银弹”。关于这个问题，大家可以参考IBM360系统之父弗雷德里克·布鲁克斯所发表的论文《没有银弹：软件工程的本质性与附属性工作》或软件工程的经典著作《人月神话》一书。</p></blockquote><h3 id="类和对象" tabindex="-1"><a class="header-anchor" href="#类和对象" aria-hidden="true">#</a> 类和对象</h3><p>如果要用一句话来概括面向对象编程，我认为下面的说法是相当精辟和准确的。</p><blockquote><p><strong>面向对象编程</strong>：把一组数据和处理数据的方法组成<strong>对象</strong>，把行为相同的对象归纳为<strong>类</strong>，通过<strong>封装</strong>隐藏对象的内部细节，通过<strong>继承</strong>实现类的特化和泛化，通过<strong>多态</strong>实现基于对象类型的动态分派。</p></blockquote><p>这句话对初学者来说可能不那么容易理解，但是我可以先为大家圈出几个关键词：<strong>对象</strong>（object）、<strong>类</strong>（class）、<strong>封装</strong>（encapsulation）、<strong>继承</strong>（inheritance）、<strong>多态</strong>（polymorphism）。</p><p>我们先说说类和对象这两个词。在面向对象编程中，<strong>类是一个抽象的概念，对象是一个具体的概念</strong>。我们把同一类对象的共同特征抽取出来就是一个类，比如我们经常说的人类，这是一个抽象概念，而我们每个人就是人类的这个抽象概念下的实实在在的存在，也就是一个对象。简而言之，<strong>类是对象的蓝图和模板，对象是类的实例，是可以接受消息的实体</strong>。</p><p>在面向对象编程的世界中，<strong>一切皆为对象</strong>，<strong>对象都有属性和行为</strong>，<strong>每个对象都是独一无二的</strong>，而且<strong>对象一定属于某个类</strong>。对象的属性是对象的静态特征，对象的行为是对象的动态特征。按照上面的说法，如果我们把拥有共同特征的对象的属性和行为都抽取出来，就可以定义出一个类。</p><img src="'+d+`" width="75%"><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h3><p>在Python中，可以使用<code>class</code>关键字加上类名来定义类，通过缩进我们可以确定类的代码块，就如同定义函数那样。在类的代码块中，我们需要写一些函数，我们说过类是一个抽象概念，那么这些函数就是我们对一类对象共同的动态特征的提取。写在类里面的函数我们通常称之为<strong>方法</strong>，方法就是对象的行为，也就是对象可以接收的消息。方法的第一个参数通常都是<code>self</code>，它代表了接收这个消息的对象本身。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:

    def study(self, course_name):
        print(f&#39;学生正在学习{course_name}.&#39;)

    def play(self):
        print(f&#39;学生正在玩游戏.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建和使用对象" tabindex="-1"><a class="header-anchor" href="#创建和使用对象" aria-hidden="true">#</a> 创建和使用对象</h3><p>在我们定义好一个类之后，可以使用构造器语法来创建对象，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>stu1 = Student()
stu2 = Student()
print(stu1)    # &lt;__main__.Student object at 0x10ad5ac50&gt;
print(stu2)    # &lt;__main__.Student object at 0x10ad5acd0&gt; 
print(hex(id(stu1)), hex(id(stu2)))    # 0x10ad5ac50 0x10ad5acd0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类的名字后跟上圆括号就是所谓的构造器语法，上面的代码创建了两个学生对象，一个赋值给变量<code>stu1</code>，一个复制给变量<code>stu2</code>。当我们用<code>print</code>函数打印<code>stu1</code>和<code>stu2</code>两个变量时，我们会看到输出了对象在内存中的地址（十六进制形式），跟我们用<code>id</code>函数查看对象标识获得的值是相同的。现在我们可以告诉大家，我们定义的变量其实保存的是一个对象在内存中的逻辑地址（位置），通过这个逻辑地址，我们就可以在内存中找到这个对象。所以<code>stu3 = stu2</code>这样的赋值语句并没有创建新的对象，只是用一个新的变量保存了已有对象的地址。</p><p>接下来，我们尝试给对象发消息，即调用对象的方法。刚才的<code>Student</code>类中我们定义了<code>study</code>和<code>play</code>两个方法，两个方法的第一个参数<code>self</code>代表了接收消息的学生对象，<code>study</code>方法的第二个参数是学习的课程名称。Python中，给对象发消息有两种方式，请看下面的代码。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 通过“类.方法”调用方法，第一个参数是接收消息的对象，第二个参数是学习的课程名称
Student.study(stu1, &#39;Python程序设计&#39;)    # 学生正在学习Python程序设计.
# 通过“对象.方法”调用方法，点前面的对象就是接收消息的对象，只需要传入第二个参数
stu1.study(&#39;Python程序设计&#39;)             # 学生正在学习Python程序设计.

Student.play(stu2)    # 学生正在玩游戏.
stu2.play()           # 学生正在玩游戏. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化方法" tabindex="-1"><a class="header-anchor" href="#初始化方法" aria-hidden="true">#</a> 初始化方法</h3><p>大家可能已经注意到了，刚才我们创建的学生对象只有行为没有属性，如果要给学生对象定义属性，我们可以修改<code>Student</code>类，为其添加一个名为<code>__init__</code>的方法。在我们调用<code>Student</code>类的构造器创建对象时，首先会在内存中获得保存学生对象所需的内存空间，然后通过自动执行<code>__init__</code>方法，完成对内存的初始化操作，也就是把数据放到内存空间中。所以我们可以通过给<code>Student</code>类添加<code>__init__</code>方法的方式为学生对象指定属性，同时完成对属性赋初始值的操作，正因如此，<code>__init__</code>方法通常也被称为初始化方法。</p><p>我们对上面的<code>Student</code>类稍作修改，给学生对象添加<code>name</code>（姓名）和<code>age</code>（年龄）两个属性。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:
    &quot;&quot;&quot;学生&quot;&quot;&quot;

    def __init__(self, name, age):
        &quot;&quot;&quot;初始化方法&quot;&quot;&quot;
        self.name = name
        self.age = age

    def study(self, course_name):
        &quot;&quot;&quot;学习&quot;&quot;&quot;
        print(f&#39;{self.name}正在学习{course_name}.&#39;)

    def play(self):
        &quot;&quot;&quot;玩耍&quot;&quot;&quot;
        print(f&#39;{self.name}正在玩游戏.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改刚才创建对象和给对象发消息的代码，重新执行一次，看看程序的执行结果有什么变化。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code># 由于初始化方法除了self之外还有两个参数
# 所以调用Student类的构造器创建对象时要传入这两个参数
stu1 = Student(&#39;骆昊&#39;, 40)
stu2 = Student(&#39;王大锤&#39;, 15)
stu1.study(&#39;Python程序设计&#39;)    # 骆昊正在学习Python程序设计.
stu2.play()                    # 王大锤正在玩游戏.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打印对象" tabindex="-1"><a class="header-anchor" href="#打印对象" aria-hidden="true">#</a> 打印对象</h3><p>上面我们通过<code>__init__</code>方法在创建对象时为对象绑定了属性并赋予了初始值。在Python中，以两个下划线<code>__</code>（读作“dunder”）开头和结尾的方法通常都是有特殊用途和意义的方法，我们一般称之为<strong>魔术方法</strong>或<strong>魔法方法</strong>。如果我们在打印对象的时候不希望看到对象的地址而是看到我们自定义的信息，可以通过在类中放置<code>__repr__</code>魔术方法来做到，该方法返回的字符串就是用<code>print</code>函数打印对象的时候会显示的内容，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:
    &quot;&quot;&quot;学生&quot;&quot;&quot;

    def __init__(self, name, age):
        &quot;&quot;&quot;初始化方法&quot;&quot;&quot;
        self.name = name
        self.age = age

    def study(self, course_name):
        &quot;&quot;&quot;学习&quot;&quot;&quot;
        print(f&#39;{self.name}正在学习{course_name}.&#39;)

    def play(self):
        &quot;&quot;&quot;玩耍&quot;&quot;&quot;
        print(f&#39;{self.name}正在玩游戏.&#39;)
    
    def __repr__(self):
        return f&#39;{self.name}: {self.age}&#39;


stu1 = Student(&#39;骆昊&#39;, 40)
print(stu1)        # 骆昊: 40
students = [stu1, Student(&#39;李元芳&#39;, 36), Student(&#39;王大锤&#39;, 25)]
print(students)    # [骆昊: 40, 李元芳: 36, 王大锤: 25]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向对象的支柱" tabindex="-1"><a class="header-anchor" href="#面向对象的支柱" aria-hidden="true">#</a> 面向对象的支柱</h3><p>面向对象编程有三大支柱，就是我们之前给大家划重点的时候圈出的三个词：<strong>封装</strong>、<strong>继承</strong>和<strong>多态</strong>。后面两个概念在下一节课中会详细说明，这里我们先说一下什么是封装。我自己对封装的理解是：<strong>隐藏一切可以隐藏的实现细节，只向外界暴露简单的调用接口</strong>。我们在类中定义的对象方法其实就是一种封装，这种封装可以让我们在创建对象之后，只需要给对象发送一个消息就可以执行方法中的代码，也就是说我们在只知道方法的名字和参数（方法的外部视图），不知道方法内部实现细节（方法的内部视图）的情况下就完成了对方法的使用。</p><p>举一个例子，假如要控制一个机器人帮我倒杯水，如果不使用面向对象编程，不做任何的封装，那么就需要向这个机器人发出一系列的指令，如站起来、向左转、向前走5步、拿起面前的水杯、向后转、向前走10步、弯腰、放下水杯、按下出水按钮、等待10秒、松开出水按钮、拿起水杯、向右转、向前走5步、放下水杯等，才能完成这个简单的操作，想想都觉得麻烦。按照面向对象编程的思想，我们可以将倒水的操作封装到机器人的一个方法中，当需要机器人帮我们倒水的时候，只需要向机器人对象发出倒水的消息就可以了，这样做不是更好吗？</p><p>在很多场景下，面向对象编程其实就是一个三步走的问题。第一步定义类，第二步创建对象，第三步给对象发消息。当然，有的时候我们是不需要第一步的，因为我们想用的类可能已经存在了。之前我们说过，Python内置的<code>list</code>、<code>set</code>、<code>dict</code>其实都不是函数而是类，如果要创建列表、集合、字典对象，我们就不用自定义类了。当然，有的类并不是Python标准库中直接提供的，它可能来自于第三方的代码，如何安装和使用三方代码在后续课程中会进行讨论。在某些特殊的场景中，我们会用到名为“内置对象”的对象，所谓“内置对象”就是说上面三步走的第一步和第二步都不需要了，因为类已经存在而且对象已然创建过了，直接向对象发消息就可以了，这也就是我们常说的“开箱即用”。</p><h3 id="经典案例" tabindex="-1"><a class="header-anchor" href="#经典案例" aria-hidden="true">#</a> 经典案例</h3><h4 id="案例1-定义一个类描述数字时钟。" tabindex="-1"><a class="header-anchor" href="#案例1-定义一个类描述数字时钟。" aria-hidden="true">#</a> 案例1：定义一个类描述数字时钟。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import time


# 定义数字时钟类
class Clock(object):
    &quot;&quot;&quot;数字时钟&quot;&quot;&quot;

    def __init__(self, hour=0, minute=0, second=0):
        &quot;&quot;&quot;初始化方法
        :param hour: 时
        :param minute: 分
        :param second: 秒
        &quot;&quot;&quot;
        self.hour = hour
        self.min = minute
        self.sec = second

    def run(self):
        &quot;&quot;&quot;走字&quot;&quot;&quot;
        self.sec += 1
        if self.sec == 60:
            self.sec = 0
            self.min += 1
            if self.min == 60:
                self.min = 0
                self.hour += 1
                if self.hour == 24:
                    self.hour = 0

    def show(self):
        &quot;&quot;&quot;显示时间&quot;&quot;&quot;
        return f&#39;{self.hour:0&gt;2d}:{self.min:0&gt;2d}:{self.sec:0&gt;2d}&#39;


# 创建时钟对象
clock = Clock(23, 59, 58)
while True:
    # 给时钟对象发消息读取时间
    print(clock.show())
    # 休眠1秒钟
    time.sleep(1)
    # 给时钟对象发消息使其走字
    clock.run()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例2-定义一个类描述平面上的点-要求提供计算到另一个点距离的方法。" tabindex="-1"><a class="header-anchor" href="#案例2-定义一个类描述平面上的点-要求提供计算到另一个点距离的方法。" aria-hidden="true">#</a> 案例2：定义一个类描述平面上的点，要求提供计算到另一个点距离的方法。</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Point(object):
    &quot;&quot;&quot;屏面上的点&quot;&quot;&quot;

    def __init__(self, x=0, y=0):
        &quot;&quot;&quot;初始化方法
        :param x: 横坐标
        :param y: 纵坐标
        &quot;&quot;&quot;
        self.x, self.y = x, y

    def distance_to(self, other):
        &quot;&quot;&quot;计算与另一个点的距离
        :param other: 另一个点
        &quot;&quot;&quot;
        dx = self.x - other.x
        dy = self.y - other.y
        return (dx * dx + dy * dy) ** 0.5

    def __str__(self):
        return f&#39;({self.x}, {self.y})&#39;


p1 = Point(3, 5)
p2 = Point(6, 9)
print(p1, p2)
print(p1.distance_to(p2))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>面向对象编程是一种非常流行的编程范式，除此之外还有<strong>指令式编程</strong>、<strong>函数式编程</strong>等编程范式。由于现实世界是由对象构成的，而对象是可以接收消息的实体，所以<strong>面向对象编程更符合人类正常的思维习惯</strong>。类是抽象的，对象是具体的，有了类就能创建对象，有了对象就可以接收消息，这就是面向对象编程的基础。定义类的过程是一个抽象的过程，找到对象公共的属性属于数据抽象，找到对象公共的方法属于行为抽象。抽象的过程是一个仁者见仁智者见智的过程，对同一类对象进行抽象可能会得到不同的结果，如下图所示。</p><img src="`+l+'" width="75%"><blockquote><p><strong>说明：</strong> 本节课的插图来自于 Grady Booc 等撰写的《面向对象分析与设计》一书，该书是讲解面向对象编程的经典著作，有兴趣的读者可以购买和阅读这本书来了解更多的面向对象的相关知识。</p></blockquote>',44),r=[a];function o(u,c){return e(),i("div",null,r)}const b=n(t,[["render",o],["__file","第17课：面向对象编程入门.html.vue"]]);export{b as default};
