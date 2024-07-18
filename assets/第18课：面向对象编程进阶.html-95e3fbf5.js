import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-9976b6d0.js";const d={},l=s(`<h2 id="第18课-面向对象编程进阶" tabindex="-1"><a class="header-anchor" href="#第18课-面向对象编程进阶" aria-hidden="true">#</a> 第18课：面向对象编程进阶</h2><p>上一节课我们讲解了Python面向对象编程的基础知识，这一节课我们继续来讨论面向对象编程相关的内容。</p><h3 id="可见性和属性装饰器" tabindex="-1"><a class="header-anchor" href="#可见性和属性装饰器" aria-hidden="true">#</a> 可见性和属性装饰器</h3><p>在很多面向对象编程语言中，对象的属性通常会被设置为私有（private）或受保护（protected）的成员，简单的说就是不允许直接访问这些属性；对象的方法通常都是公开的（public），因为公开的方法是对象能够接受的消息，也是对象暴露给外界的调用接口，这就是所谓的访问可见性。在Python中，可以通过给对象属性名添加前缀下划线的方式来说明属性的访问可见性，例如，可以用<code>__name</code>表示一个私有属性，<code>_name</code>表示一个受保护属性，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:

    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def study(self, course_name):
        print(f&#39;{self.__name}正在学习{course_name}.&#39;)


stu = Student(&#39;王大锤&#39;, 20)
stu.study(&#39;Python程序设计&#39;)
print(stu.__name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的最后一行会引发<code>AttributeError</code>（属性错误）异常，异常消息为：<code>&#39;Student&#39; object has no attribute &#39;__name&#39;</code>。由此可见，以<code>__</code>开头的属性<code>__name</code>是私有的，在类的外面无法直接访问，但是类里面的<code>study</code>方法中可以通过<code>self.__name</code>访问该属性。</p><p>需要提醒大家的是，Python并没有从语法上严格保证私有属性的私密性，它只是给私有的属性和方法换了一个名字来阻挠对它们的访问，事实上如果你知道更换名字的规则仍然可以访问到它们，我们可以对上面的代码稍作修改就可以访问到私有的属性。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:

    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def study(self, course_name):
        print(f&#39;{self.__name}正在学习{course_name}.&#39;)


stu = Student(&#39;王大锤&#39;, 20)
stu.study(&#39;Python程序设计&#39;)
print(stu._Student__name, stu._Student__age)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python中有一句名言：“<strong>We are all consenting adults here</strong>”（大家都是成年人）。Python语言的设计者认为程序员要为自己的行为负责，而不是由Python语言本身来严格限制访问可见性，而大多数的程序员都认为<strong>开放比封闭要好</strong>，把对象的属性私有化并不是编程语言必须的东西，所以Python并没有从语法上做出最严格的限定。</p><p>Python中可以通过<code>property</code>装饰器为“私有”属性提供读取和修改的方法，之前我们提到过，装饰器通常会放在类、函数或方法的声明之前，通过一个<code>@</code>符号表示将装饰器应用于类、函数或方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:

    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    # 属性访问器(getter方法) - 获取__name属性
    @property
    def name(self):
        return self.__name
    
    # 属性修改器(setter方法) - 修改__name属性
    @name.setter
    def name(self, name):
        # 如果name参数不为空就赋值给对象的__name属性
        # 否则将__name属性赋值为&#39;无名氏&#39;，有两种写法
        # self.__name = name if name else &#39;无名氏&#39;
        self.__name = name or &#39;无名氏&#39;
    
    @property
    def age(self):
        return self.__age


stu = Student(&#39;王大锤&#39;, 20)
print(stu.name, stu.age)    # 王大锤 20
stu.name = &#39;&#39;
print(stu.name)    # 无名氏
# stu.age = 30     # AttributeError: can&#39;t set attribute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实际项目开发中，我们并不经常使用私有属性，属性装饰器的使用也比较少，所以上面的知识点大家简单了解一下就可以了。</p><h3 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性" aria-hidden="true">#</a> 动态属性</h3><p>Python是一门动态语言，维基百科对动态语言的解释是：“在运行时可以改变其结构的语言，例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或是其他结构上的变化。动态语言非常灵活，目前流行的Python和JavaScript都是动态语言，除此之外如PHP、Ruby等也都属于动态语言，而C、C++等语言则不属于动态语言”。</p><p>在Python中，我们可以动态为对象添加属性，这是Python作为动态类型语言的一项特权，代码如下所示。需要提醒大家的是，对象的方法其实本质上也是对象的属性，如果给对象发送一个无法接收的消息，引发的异常仍然是<code>AttributeError</code>。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age


stu = Student(&#39;王大锤&#39;, 20)
# 为Student对象动态添加sex属性
stu.sex = &#39;男&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不希望在使用对象时动态的为对象添加属性，可以使用Python的<code>__slots__</code>魔法。对于<code>Student</code>类来说，可以在类中指定<code>__slots__ = (&#39;name&#39;, &#39;age&#39;)</code>，这样<code>Student</code>类的对象只能有<code>name</code>和<code>age</code>属性，如果想动态添加其他属性将会引发异常，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Student:
    __slots__ = (&#39;name&#39;, &#39;age&#39;)

    def __init__(self, name, age):
        self.name = name
        self.age = age


stu = Student(&#39;王大锤&#39;, 20)
# AttributeError: &#39;Student&#39; object has no attribute &#39;sex&#39;
stu.sex = &#39;男&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法和类方法" tabindex="-1"><a class="header-anchor" href="#静态方法和类方法" aria-hidden="true">#</a> 静态方法和类方法</h3><p>之前我们在类中定义的方法都是对象方法，换句话说这些方法都是对象可以接收的消息。除了对象方法之外，类中还可以有静态方法和类方法，这两类方法是发给类的消息，二者并没有实质性的区别。在面向对象的世界里，一切皆为对象，我们定义的每一个类其实也是一个对象，而静态方法和类方法就是发送给类对象的消息。那么，什么样的消息会直接发送给类对象呢？</p><p>举一个例子，定义一个三角形类，通过传入三条边的长度来构造三角形，并提供计算周长和面积的方法。计算周长和面积肯定是三角形对象的方法，这一点毫无疑问。但是在创建三角形对象时，传入的三条边长未必能构造出三角形，为此我们可以先写一个方法来验证给定的三条边长是否可以构成三角形，这种方法很显然就不是对象方法，因为在调用这个方法时三角形对象还没有创建出来。我们可以把这类方法设计为静态方法或类方法，也就是说这类方法不是发送给三角形对象的消息，而是发送给三角形类的消息，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Triangle(object):
    &quot;&quot;&quot;三角形类&quot;&quot;&quot;

    def __init__(self, a, b, c):
        &quot;&quot;&quot;初始化方法&quot;&quot;&quot;
        self.a = a
        self.b = b
        self.c = c

    @staticmethod
    def is_valid(a, b, c):
        &quot;&quot;&quot;判断三条边长能否构成三角形(静态方法)&quot;&quot;&quot;
        return a + b &gt; c and b + c &gt; a and a + c &gt; b

    # @classmethod
    # def is_valid(cls, a, b, c):
    #     &quot;&quot;&quot;判断三条边长能否构成三角形(类方法)&quot;&quot;&quot;
    #     return a + b &gt; c and b + c &gt; a and a + c &gt; b

    def perimeter(self):
        &quot;&quot;&quot;计算周长&quot;&quot;&quot;
        return self.a + self.b + self.c

    def area(self):
        &quot;&quot;&quot;计算面积&quot;&quot;&quot;
        p = self.perimeter() / 2
        return (p * (p - self.a) * (p - self.b) * (p - self.c)) ** 0.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码使用<code>staticmethod</code>装饰器声明了<code>is_valid</code>方法是<code>Triangle</code>类的静态方法，如果要声明类方法，可以使用<code>classmethod</code>装饰器。可以直接使用<code>类名.方法名</code>的方式来调用静态方法和类方法，二者的区别在于，类方法的第一个参数是类对象本身，而静态方法则没有这个参数。简单的总结一下，<strong>对象方法、类方法、静态方法都可以通过<code>类名.方法名</code>的方式来调用，区别在于方法的第一个参数到底是普通对象还是类对象，还是没有接受消息的对象</strong>。静态方法通常也可以直接写成一个独立的函数，因为它并没有跟特定的对象绑定。</p><h3 id="继承和多态" tabindex="-1"><a class="header-anchor" href="#继承和多态" aria-hidden="true">#</a> 继承和多态</h3><p>面向对象的编程语言支持在已有类的基础上创建新类，从而减少重复代码的编写。提供继承信息的类叫做父类（超类、基类），得到继承信息的类叫做子类（派生类、衍生类）。例如，我们定义一个学生类和一个老师类，我们会发现他们有大量的重复代码，而这些重复代码都是老师和学生作为人的公共属性和行为，所以在这种情况下，我们应该先定义人类，再通过继承，从人类派生出老师类和学生类，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Person:
    &quot;&quot;&quot;人类&quot;&quot;&quot;

    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def eat(self):
        print(f&#39;{self.name}正在吃饭.&#39;)
    
    def sleep(self):
        print(f&#39;{self.name}正在睡觉.&#39;)


class Student(Person):
    &quot;&quot;&quot;学生类&quot;&quot;&quot;
    
    def __init__(self, name, age):
        # super(Student, self).__init__(name, age)
        super().__init__(name, age)
    
    def study(self, course_name):
        print(f&#39;{self.name}正在学习{course_name}.&#39;)


class Teacher(Person):
    &quot;&quot;&quot;老师类&quot;&quot;&quot;

    def __init__(self, name, age, title):
        # super(Teacher, self).__init__(name, age)
        super().__init__(name, age)
        self.title = title
    
    def teach(self, course_name):
        print(f&#39;{self.name}{self.title}正在讲授{course_name}.&#39;)



stu1 = Student(&#39;白元芳&#39;, 21)
stu2 = Student(&#39;狄仁杰&#39;, 22)
teacher = Teacher(&#39;武则天&#39;, 35, &#39;副教授&#39;)
stu1.eat()
stu2.sleep()
teacher.teach(&#39;Python程序设计&#39;)
stu1.study(&#39;Python程序设计&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>继承的语法是在定义类的时候，在类名后的圆括号中指定当前类的父类。如果定义一个类的时候没有指定它的父类是谁，那么默认的父类是<code>object</code>类。<code>object</code>类是Python中的顶级类，这也就意味着所有的类都是它的子类，要么直接继承它，要么间接继承它。Python语言允许多重继承，也就是说一个类可以有一个或多个父类，关于多重继承的问题我们在后面会有更为详细的讨论。在子类的初始化方法中，我们可以通过<code>super().__init__()</code>来调用父类初始化方法，<code>super</code>函数是Python内置函数中专门为获取当前对象的父类对象而设计的。从上面的代码可以看出，子类除了可以通过继承得到父类提供的属性和方法外，还可以定义自己特有的属性和方法，所以子类比父类拥有的更多的能力。在实际开发中，我们经常会用子类对象去替换掉一个父类对象，这是面向对象编程中一个常见的行为，也叫做“里氏替换原则”（Liskov Substitution Principle）。</p><p>子类继承父类的方法后，还可以对方法进行重写（重新实现该方法），不同的子类可以对父类的同一个方法给出不同的实现版本，这样的方法在程序运行时就会表现出多态行为（调用相同的方法，做了不同的事情）。多态是面向对象编程中最精髓的部分，当然也是对初学者来说最难以理解和灵活运用的部分，我们会在下一节课中用专门的例子来讲解多态这个知识点。</p><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>Python是动态语言，Python中的对象可以动态的添加属性。在面向对象的世界中，<strong>一切皆为对象</strong>，我们定义的类也是对象，所以<strong>类也可以接收消息</strong>，对应的方法是类方法或静态方法。通过继承，我们<strong>可以从已有的类创建新类</strong>，实现对已有类代码的复用。</p>`,30),a=[l];function t(r,v){return n(),i("div",null,a)}const m=e(d,[["render",t],["__file","第18课：面向对象编程进阶.html.vue"]]);export{m as default};
