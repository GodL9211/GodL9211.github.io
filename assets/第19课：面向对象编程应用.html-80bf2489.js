import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as d}from"./app-9976b6d0.js";const s={},l=d(`<h2 id="第19课-面向对象编程应用" tabindex="-1"><a class="header-anchor" href="#第19课-面向对象编程应用" aria-hidden="true">#</a> 第19课：面向对象编程应用</h2><p>面向对象编程对初学者来说不难理解但很难应用，虽然我们为大家总结过面向对象的三步走方法（定义类、创建对象、给对象发消息），但是说起来容易做起来难。<strong>大量的编程练习</strong>和<strong>阅读优质的代码</strong>可能是这个阶段最能够帮助到大家的两件事情。接下来我们还是通过经典的案例来剖析面向对象编程的知识，同时也通过这些案例为大家讲解如何运用之前学过的Python知识。</p><h3 id="经典案例" tabindex="-1"><a class="header-anchor" href="#经典案例" aria-hidden="true">#</a> 经典案例</h3><h4 id="案例1-扑克游戏。" tabindex="-1"><a class="header-anchor" href="#案例1-扑克游戏。" aria-hidden="true">#</a> 案例1：扑克游戏。</h4><blockquote><p><strong>说明</strong>：简单起见，我们的扑克只有52张牌（没有大小王），游戏需要将52张牌发到4个玩家的手上，每个玩家手上有13张牌，按照黑桃、红心、草花、方块的顺序和点数从小到大排列，暂时不实现其他的功能。</p></blockquote><p>使用面向对象编程方法，首先需要从问题的需求中找到对象并抽象出对应的类，此外还要找到对象的属性和行为。当然，这件事情并不是特别困难，我们可以从需求的描述中找出名词和动词，名词通常就是对象或者是对象的属性，而动词通常是对象的行为。扑克游戏中至少应该有三类对象，分别是牌、扑克和玩家，牌、扑克、玩家三个类也并不是孤立的。类和类之间的关系可以粗略的分为<strong>is-a关系（继承）</strong>、<strong>has-a关系（关联）<strong>和</strong>use-a关系（依赖）</strong>。很显然扑克和牌是has-a关系，因为一副扑克有（has-a）52张牌；玩家和牌之间不仅有关联关系还有依赖关系，因为玩家手上有（has-a）牌而且玩家使用了（use-a）牌。</p><p>牌的属性显而易见，有花色和点数。我们可以用0到3的四个数字来代表四种不同的花色，但是这样的代码可读性会非常糟糕，因为我们并不知道黑桃、红心、草花、方块跟0到3的数字的对应关系。如果一个变量的取值只有有限多个选项，我们可以使用枚举。与C、Java等语言不同的是，Python中没有声明枚举类型的关键字，但是可以通过继承<code>enum</code>模块的<code>Enum</code>类来创建枚举类型，代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from enum import Enum


class Suite(Enum):
    &quot;&quot;&quot;花色(枚举)&quot;&quot;&quot;
    SPADE, HEART, CLUB, DIAMOND = range(4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码可以看出，定义枚举类型其实就是定义符号常量，如<code>SPADE</code>、<code>HEART</code>等。每个符号常量都有与之对应的值，这样表示黑桃就可以不用数字<code>0</code>，而是用<code>Suite.SPADE</code>；同理，表示方块可以不用数字<code>3</code>， 而是用<code>Suite.DIAMOND</code>。注意，使用符号常量肯定是优于使用字面常量的，因为能够读懂英文就能理解符号常量的含义，代码的可读性会提升很多。Python中的枚举类型是可迭代类型，简单的说就是可以将枚举类型放到<code>for-in</code>循环中，依次取出每一个符号常量及其对应的值，如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>for suite in Suite:
    print(f&#39;{suite}: {suite.value}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们可以定义牌类。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Card:
    &quot;&quot;&quot;牌&quot;&quot;&quot;

    def __init__(self, suite, face):
        self.suite = suite
        self.face = face

    def __repr__(self):
        suites = &#39;♠♥♣♦&#39;
        faces = [&#39;&#39;, &#39;A&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;, &#39;10&#39;, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;]
        # 根据牌的花色和点数取到对应的字符
        return f&#39;{suites[self.suite.value]}{faces[self.face]}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过下面的代码来测试下<code>Card</code>类。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>card1 = Card(Suite.SPADE, 5)
card2 = Card(Suite.HEART, 13)
print(card1, card2)    # ♠5 ♥K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们定义扑克类。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import random


class Poker:
    &quot;&quot;&quot;扑克&quot;&quot;&quot;

    def __init__(self):
        # 通过列表的生成式语法创建一个装52张牌的列表
        self.cards = [Card(suite, face) for suite in Suite
                      for face in range(1, 14)]
        # current属性表示发牌的位置
        self.current = 0

    def shuffle(self):
        &quot;&quot;&quot;洗牌&quot;&quot;&quot;
        self.current = 0
        # 通过random模块的shuffle函数实现列表的随机乱序
        random.shuffle(self.cards)

    def deal(self):
        &quot;&quot;&quot;发牌&quot;&quot;&quot;
        card = self.cards[self.current]
        self.current += 1
        return card

    @property
    def has_next(self):
        &quot;&quot;&quot;还有没有牌可以发&quot;&quot;&quot;
        return self.current &lt; len(self.cards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过下面的代码来测试下<code>Poker</code>类。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>poker = Poker()
poker.shuffle()
print(poker.cards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义玩家类。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Player:
    &quot;&quot;&quot;玩家&quot;&quot;&quot;

    def __init__(self, name):
        self.name = name
        self.cards = []

    def get_one(self, card):
        &quot;&quot;&quot;摸牌&quot;&quot;&quot;
        self.cards.append(card)

    def arrange(self):
        self.cards.sort()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建四个玩家并将牌发到玩家的手上。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>poker = Poker()
poker.shuffle()
players = [Player(&#39;东邪&#39;), Player(&#39;西毒&#39;), Player(&#39;南帝&#39;), Player(&#39;北丐&#39;)]
for _ in range(13):
    for player in players:
        player.get_one(poker.deal())
for player in players:
    player.arrange()
    print(f&#39;{player.name}: &#39;, end=&#39;&#39;)
    print(player.cards)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的代码会在<code>player.arrange()</code>那里出现异常，因为<code>Player</code>的<code>arrange</code>方法使用了列表的<code>sort</code>对玩家手上的牌进行排序，排序需要比较两个<code>Card</code>对象的大小，而<code>&lt;</code>运算符又不能直接作用于<code>Card</code>类型，所以就出现了<code>TypeError</code>异常，异常消息为：<code>&#39;&lt;&#39; not supported between instances of &#39;Card&#39; and &#39;Card&#39;</code>。</p><p>为了解决这个问题，我们可以对<code>Card</code>类的代码稍作修改，使得两个<code>Card</code>对象可以直接用<code>&lt;</code>进行大小的比较。这里用到技术叫<strong>运算符重载</strong>，Python中要实现对<code>&lt;</code>运算符的重载，需要在类中添加一个名为<code>__lt__</code>的魔术方法。很显然，魔术方法<code>__lt__</code>中的<code>lt</code>是英文单词“less than”的缩写，以此类推，魔术方法<code>__gt__</code>对应<code>&gt;</code>运算符，魔术方法<code>__le__</code>对应<code>&lt;=</code>运算符，<code>__ge__</code>对应<code>&gt;=</code>运算符，<code>__eq__</code>对应<code>==</code>运算符，<code>__ne__</code>对应<code>!=</code>运算符。</p><p>修改后的<code>Card</code>类代码如下所示。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Card:
    &quot;&quot;&quot;牌&quot;&quot;&quot;

    def __init__(self, suite, face):
        self.suite = suite
        self.face = face

    def __repr__(self):
        suites = &#39;♠♥♣♦&#39;
        faces = [&#39;&#39;, &#39;A&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;, &#39;10&#39;, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;]
        # 根据牌的花色和点数取到对应的字符
        return f&#39;{suites[self.suite.value]}{faces[self.face]}&#39;
    
    def __lt__(self, other):
        # 花色相同比较点数的大小
        if self.suite == other.suite:
            return self.face &lt; other.face
        # 花色不同比较花色对应的值
        return self.suite.value &lt; other.suite.value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明：</strong> 大家可以尝试在上面代码的基础上写一个简单的扑克游戏，如21点游戏（Black Jack），游戏的规则可以自己在网上找一找。</p></blockquote><h4 id="案例2-工资结算系统。" tabindex="-1"><a class="header-anchor" href="#案例2-工资结算系统。" aria-hidden="true">#</a> 案例2：工资结算系统。</h4><blockquote><p><strong>要求</strong>：某公司有三种类型的员工，分别是部门经理、程序员和销售员。需要设计一个工资结算系统，根据提供的员工信息来计算员工的月薪。其中，部门经理的月薪是固定15000元；程序员按工作时间（以小时为单位）支付月薪，每小时200元；销售员的月薪由1800元底薪加上销售额5%的提成两部分构成。</p></blockquote><p>通过对上述需求的分析，可以看出部门经理、程序员、销售员都是员工，有相同的属性和行为，那么我们可以先设计一个名为<code>Employee</code>的父类，再通过继承的方式从这个父类派生出部门经理、程序员和销售员三个子类。很显然，后续的代码不会创建<code>Employee</code> 类的对象，因为我们需要的是具体的员工对象，所以这个类可以设计成专门用于继承的抽象类。Python中没有定义抽象类的关键字，但是可以通过<code>abc</code>模块中名为<code>ABCMeta</code> 的元类来定义抽象类。关于元类的知识，后面的课程中会有专门的讲解，这里不用太纠结这个概念，记住用法即可。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>from abc import ABCMeta, abstractmethod


class Employee(metaclass=ABCMeta):
    &quot;&quot;&quot;员工&quot;&quot;&quot;

    def __init__(self, name):
        self.name = name

    @abstractmethod
    def get_salary(self):
        &quot;&quot;&quot;结算月薪&quot;&quot;&quot;
        pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的员工类中，有一个名为<code>get_salary</code>的方法用于结算月薪，但是由于还没有确定是哪一类员工，所以结算月薪虽然是员工的公共行为但这里却没有办法实现。对于暂时无法实现的方法，我们可以使用<code>abstractmethod</code>装饰器将其声明为抽象方法，所谓<strong>抽象方法就是只有声明没有实现的方法</strong>，<strong>声明这个方法是为了让子类去重写这个方法</strong>。接下来的代码展示了如何从员工类派生出部门经理、程序员、销售员这三个子类以及子类如何重写父类的抽象方法。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>class Manager(Employee):
    &quot;&quot;&quot;部门经理&quot;&quot;&quot;

    def get_salary(self):
        return 15000.0


class Programmer(Employee):
    &quot;&quot;&quot;程序员&quot;&quot;&quot;

    def __init__(self, name, working_hour=0):
        super().__init__(name)
        self.working_hour = working_hour

    def get_salary(self):
        return 200 * self.working_hour


class Salesman(Employee):
    &quot;&quot;&quot;销售员&quot;&quot;&quot;

    def __init__(self, name, sales=0):
        super().__init__(name)
        self.sales = sales

    def get_salary(self):
        return 1800 + self.sales * 0.05
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的<code>Manager</code>、<code>Programmer</code>、<code>Salesman</code>三个类都继承自<code>Employee</code>，三个类都分别重写了<code>get_salary</code>方法。<strong>重写就是子类对父类已有的方法重新做出实现</strong>。相信大家已经注意到了，三个子类中的<code>get_salary</code>各不相同，所以这个方法在程序运行时会产生<strong>多态行为</strong>，多态简单的说就是<strong>调用相同的方法</strong>，<strong>不同的子类对象做不同的事情</strong>。</p><p>我们通过下面的代码来完成这个工资结算系统，由于程序员和销售员需要分别录入本月的工作时间和销售额，所以在下面的代码中我们使用了Python内置的<code>isinstance</code>函数来判断员工对象的类型。我们之前讲过的<code>type</code>函数也能识别对象的类型，但是<code>isinstance</code>函数更加强大，因为它可以判断出一个对象是不是某个继承结构下的子类型，你可以简答的理解为<code>type</code>函数是对对象类型的精准匹配，而<code>isinstance</code>函数是对对象类型的模糊匹配。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>emps = [
    Manager(&#39;刘备&#39;), Programmer(&#39;诸葛亮&#39;), Manager(&#39;曹操&#39;), 
    Programmer(&#39;荀彧&#39;), Salesman(&#39;吕布&#39;), Programmer(&#39;张辽&#39;),
]
for emp in emps:
    if isinstance(emp, Programmer):
        emp.working_hour = int(input(f&#39;请输入{emp.name}本月工作时间: &#39;))
    elif isinstance(emp, Salesman):
        emp.sales = float(input(f&#39;请输入{emp.name}本月销售额: &#39;))
    print(f&#39;{emp.name}本月工资为: ￥{emp.get_salary():.2f}元&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="简单的总结" tabindex="-1"><a class="header-anchor" href="#简单的总结" aria-hidden="true">#</a> 简单的总结</h3><p>面向对象的编程思想非常的好，也符合人类的正常思维习惯，但是要想灵活运用面向对象编程中的抽象、封装、继承、多态需要长时间的积累和沉淀，这件事情无法一蹴而就，属于“路漫漫其修远兮，吾将上下而求索”的东西。</p>`,38),a=[l];function r(c,o){return n(),i("div",null,a)}const v=e(s,[["render",r],["__file","第19课：面向对象编程应用.html.vue"]]);export{v as default};
