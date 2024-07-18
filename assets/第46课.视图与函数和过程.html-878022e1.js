import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c,a as e,b as n,e as l,f as d}from"./app-9976b6d0.js";const v="/assets/46_19-bffa358b.png",o={},t=d(`<h2 id="第46课-视图、函数和过程" tabindex="-1"><a class="header-anchor" href="#第46课-视图、函数和过程" aria-hidden="true">#</a> 第46课：视图、函数和过程</h2><p>为了讲解视图、函数和过程，我们首先用下面的 DDL 和 DML 创建名为 hrs 的数据库并为其二维表添加如下所示的数据。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>-- 创建名为hrs的数据库并指定默认的字符集
create database \`hrs\` default charset utf8mb4;

-- 切换到hrs数据库
use \`hrs\`;

-- 创建部门表
create table \`tb_dept\`
(
\`dno\` int not null comment &#39;编号&#39;,
\`dname\` varchar(10) not null comment &#39;名称&#39;,
\`dloc\` varchar(20) not null comment &#39;所在地&#39;,
primary key (\`dno\`)
);

-- 插入4个部门
insert into \`tb_dept\` values 
    (10, &#39;会计部&#39;, &#39;北京&#39;),
    (20, &#39;研发部&#39;, &#39;成都&#39;),
    (30, &#39;销售部&#39;, &#39;重庆&#39;),
    (40, &#39;运维部&#39;, &#39;深圳&#39;);

-- 创建员工表
create table \`tb_emp\`
(
\`eno\` int not null comment &#39;员工编号&#39;,
\`ename\` varchar(20) not null comment &#39;员工姓名&#39;,
\`job\` varchar(20) not null comment &#39;员工职位&#39;,
\`mgr\` int comment &#39;主管编号&#39;,
\`sal\` int not null comment &#39;员工月薪&#39;,
\`comm\` int comment &#39;每月补贴&#39;,
\`dno\` int not null comment &#39;所在部门编号&#39;,
primary key (\`eno\`),
constraint \`fk_emp_mgr\` foreign key (\`mgr\`) references tb_emp (\`eno\`),
constraint \`fk_emp_dno\` foreign key (\`dno\`) references tb_dept (\`dno\`)
);

-- 插入14个员工
insert into \`tb_emp\` values 
    (7800, &#39;张三丰&#39;, &#39;总裁&#39;, null, 9000, 1200, 20),
    (2056, &#39;乔峰&#39;, &#39;分析师&#39;, 7800, 5000, 1500, 20),
    (3088, &#39;李莫愁&#39;, &#39;设计师&#39;, 2056, 3500, 800, 20),
    (3211, &#39;张无忌&#39;, &#39;程序员&#39;, 2056, 3200, null, 20),
    (3233, &#39;丘处机&#39;, &#39;程序员&#39;, 2056, 3400, null, 20),
    (3251, &#39;张翠山&#39;, &#39;程序员&#39;, 2056, 4000, null, 20),
    (5566, &#39;宋远桥&#39;, &#39;会计师&#39;, 7800, 4000, 1000, 10),
    (5234, &#39;郭靖&#39;, &#39;出纳&#39;, 5566, 2000, null, 10),
    (3344, &#39;黄蓉&#39;, &#39;销售主管&#39;, 7800, 3000, 800, 30),
    (1359, &#39;胡一刀&#39;, &#39;销售员&#39;, 3344, 1800, 200, 30),
    (4466, &#39;苗人凤&#39;, &#39;销售员&#39;, 3344, 2500, null, 30),
    (3244, &#39;欧阳锋&#39;, &#39;程序员&#39;, 3088, 3200, null, 20),
    (3577, &#39;杨过&#39;, &#39;会计&#39;, 5566, 2200, null, 10),
    (3588, &#39;朱九真&#39;, &#39;会计&#39;, 5566, 2500, null, 10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><p>视图是关系型数据库中将一组查询指令构成的结果集组合成可查询的数据表的对象。简单的说，视图就是虚拟的表，但与数据表不同的是，数据表是一种实体结构，而视图是一种虚拟结构，你也可以将视图理解为保存在数据库中被赋予名字的 SQL 语句。</p><p>使用视图可以获得以下好处：</p><ol><li>可以将实体数据表隐藏起来，让外部程序无法得知实际的数据结构，让访问者可以使用表的组成部分而不是整个表，降低数据库被攻击的风险。</li><li>在大多数的情况下视图是只读的（更新视图的操作通常都有诸多的限制），外部程序无法直接透过视图修改数据。</li><li>重用 SQL 语句，将高度复杂的查询包装在视图表中，直接访问该视图即可取出需要的数据；也可以将视图视为数据表进行连接查询。</li><li>视图可以返回与实体数据表不同格式的数据，在创建视图的时候可以对数据进行格式化处理。</li></ol><p>创建视图。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create view \`vw_emp_simple\`
as
select  \`eno\`,
        \`ename\`,
        \`job\`,
        \`dno\`
  from  \`tb_emp\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>提示</strong>：因为视图不包含数据，所以每次使用视图时，都必须执行查询以获得数据，如果你使用了连接查询、嵌套查询创建了较为复杂的视图，你可能会发现查询性能下降得很厉害。因此，在使用复杂的视图前，应该进行测试以确保其性能能够满足应用的需求。</p></blockquote><p>有了上面的视图，我们就可以使用之前讲过的 DCL， 限制某些用户只能从视图中获取员工信息，这样员工表中的工资（<code>sal</code>）、补贴（<code>comm</code>）等敏感字段便不会暴露给用户。下面的代码演示了如何从视图中获取数据。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select * from \`vw_emp_simple\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------+-----------+--------------+-----+
| eno  | ename     | job          | dno |
+------+-----------+--------------+-----+
| 1359 | 胡二刀    | 销售员       |  30 |
| 2056 | 乔峰      | 分析师       |  20 |
| 3088 | 李莫愁    | 设计师       |  20 |
| 3211 | 张无忌    | 程序员       |  20 |
| 3233 | 丘处机    | 程序员       |  20 |
| 3244 | 欧阳锋    | 程序员       |  20 |
| 3251 | 张翠山    | 程序员       |  20 |
| 3344 | 黄蓉      | 销售主管     |  30 |
| 3577 | 杨过      | 会计         |  10 |
| 3588 | 朱九真    | 会计         |  10 |
| 4466 | 苗人凤    | 销售员       |  30 |
| 5234 | 郭靖      | 出纳         |  10 |
| 5566 | 宋远桥    | 会计师       |  10 |
| 7800 | 张三丰    | 总裁         |  20 |
+------+-----------+--------------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然视图是一张虚拟的表，那么视图的中的数据可以更新吗？视图的可更新性要视具体情况而定，以下类型的视图是不能更新的：</p><ol><li>使用了聚合函数（<code>SUM</code>、<code>MIN</code>、<code>MAX</code>、<code>AVG</code>、<code>COUNT</code>等）、<code>DISTINCT</code>、<code>GROUP BY</code>、<code>HAVING</code>、<code>UNION</code>或者<code>UNION ALL</code>的视图。</li><li><code>SELECT</code>中包含了子查询的视图。</li><li><code>FROM</code>子句中包含了一个不能更新的视图的视图。</li><li><code>WHERE</code>子句的子查询引用了<code>FROM</code>子句中的表的视图。</li></ol><p>删除视图。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop view if exists \`vw_emp_simple\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果希望更新视图，可以先用上面的命令删除视图，也可以通过<code>create or replace view</code>来更新视图。</p></blockquote><p>视图的规则和限制。</p><ol><li>视图可以嵌套，可以利用从其他视图中检索的数据来构造一个新的视图。视图也可以和表一起使用。</li><li>创建视图时可以使用<code>order by</code>子句，但如果从视图中检索数据时也使用了<code>order by</code>，那么该视图中原先的<code>order by</code>会被覆盖。</li><li>视图无法使用索引，也不会激发触发器（实际开发中因为性能等各方面的考虑，通常不建议使用触发器，所以我们也不对这个概念进行介绍）的执行。</li></ol><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>MySQL 中的函数跟 Python 中的函数大同小异，因为函数都是用来封装功能上相对独立且会被重复使用的代码的。如果非要找出一些差别来，那么 MySQL 中的函数是可以执行 SQL 语句的。下面的例子，我们通过自定义函数实现了截断超长字符串的功能。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delimiter $$

create function fn_truncate_string(
    content varchar(10000),
    max_length int unsigned
) returns varchar(10000) no sql
begin
    declare result varchar(10000) default content;
    if char_length(content) &gt; max_length then
        set result = left(content, max_length);
        set result = concat(result, &#39;……&#39;);
    end if;
    return result;
end $$

delimiter ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明1</strong>：函数声明后面的<code>no sql</code>是声明函数体并没有使用 SQL 语句；如果函数体中需要通过 SQL 读取数据，需要声明为<code>reads sql data</code>。</p><p><strong>说明2</strong>：定义函数前后的<code>delimiter</code>命令是为了修改终止符（定界符），因为函数体中的语句都是用<code>;</code>表示结束，如果不重新定义定界符，那么遇到的<code>;</code>的时候代码就会被截断执行，显然这不是我们想要的效果。</p></blockquote><p>在查询中调用自定义函数。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select fn_truncate_string(&#39;和我在成都的街头走一走，直到所有的灯都熄灭了也不停留&#39;, 10) as short_string;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------------------+
| short_string                         |
+--------------------------------------+
| 和我在成都的街头走一……                 |
+--------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h3><p>过程（又称存储过程）是事先编译好存储在数据库中的一组 SQL 的集合，调用过程可以简化应用程序开发人员的工作，减少与数据库服务器之间的通信，对于提升数据操作的性能也是有帮助的。其实迄今为止，我们使用的 SQL 语句都是针对一个或多个表的单条语句，但在实际开发中经常会遇到某个操作需要多条 SQL 语句才能完成的情况。例如，电商网站在受理用户订单时，需要做以下一系列的处理。</p><ol><li>通过查询来核对库存中是否有对应的物品以及库存是否充足。</li><li>如果库存有物品，需要锁定库存以确保这些物品不再卖给别人， 并且要减少可用的物品数量以反映正确的库存量。</li><li>如果库存不足，可能需要进一步与供应商进行交互或者至少产生一条系统提示消息。</li><li>不管受理订单是否成功，都需要产生流水记录，而且需要给对应的用户产生一条通知信息。</li></ol><p>我们可以通过过程将复杂的操作封装起来，这样不仅有助于保证数据的一致性，而且将来如果业务发生了变动，只需要调整和修改过程即可。对于调用过程的用户来说，过程并没有暴露数据表的细节，而且执行过程比一条条的执行一组 SQL 要快得多。</p><p>下面的过程实现 hrs 数据库中员工工资的普调，具体的规则是：<code>10</code>部门的员工薪资上浮<code>300</code>， <code>20</code>部门的员工薪资上浮<code>800</code>，<code>30</code>部门的员工薪资上浮<code>500</code>。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>delimiter $$

create procedure sp_upgrade_salary()
begin
    declare flag boolean default 1;
    -- 定义一个异常处理器
    declare continue handler for sqlexception set flag=0;

    -- 开启事务环境
    start transaction;
    
    update tb_emp set sal=sal+300 where dno=10;
    update tb_emp set sal=sal+800 where dno=20;
    update tb_emp set sal=sal+500 where dno=30;

    -- 提交或回滚事务
    if flag then
        commit;
    else
        rollback;
    end if;
end $$

delimiter ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的过程代码中使用了<code>start transaction</code>来开启事务环境，关于事务，在本课的最后有一个简单的介绍。为了确定代码中是否发生异常，从而提交或回滚事务，上面的过程中定义了一个名为<code>flag</code>的变量和一个异常处理器，如果发生了异常，<code>flag</code>将会被赋值为<code>0</code>，后面的分支结构会根据<code>flag</code>的值来决定是执行<code>commit</code>，还是执行<code>rollback</code>。</p></blockquote><p>调用过程。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>call sp_upgrade_salary();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除过程。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop procedure if exists sp_upgrade_salary;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在过程中，我们可以定义变量、条件，可以使用分支和循环语句，可以通过游标操作查询结果，还可以使用事件调度器，这些内容我们暂时不在此处进行介绍。虽然我们说了很多过程的好处，但是在实际开发中，如果频繁的使用过程并将大量复杂的运算放到过程中，会给据库服务器造成巨大的压力，而数据库往往都是性能瓶颈所在，使用过程无疑是雪上加霜的操作。所以，对于互联网产品开发，我们一般建议让数据库只做好存储，复杂的运算和处理交给应用服务器上的程序去完成，如果应用服务器变得不堪重负了，我们可以比较容易的部署多台应用服务器来分摊这些压力。</p>`,40),u={href:"https://item.jd.com/12818982.html",target:"_blank",rel:"noopener noreferrer"},m=d(`<h3 id="其他内容" tabindex="-1"><a class="header-anchor" href="#其他内容" aria-hidden="true">#</a> 其他内容</h3><h4 id="范式理论" tabindex="-1"><a class="header-anchor" href="#范式理论" aria-hidden="true">#</a> 范式理论</h4><p>范式理论是设计关系型数据库中二维表的指导思想。</p><ol><li>第一范式：数据表的每个列的值域都是由原子值组成的，不能够再分割。</li><li>第二范式：数据表里的所有数据都要和该数据表的键（主键与候选键）有完全依赖关系。</li><li>第三范式：所有非键属性都只和候选键有相关性，也就是说非键属性之间应该是独立无关的。</li></ol><blockquote><p><strong>说明</strong>：实际工作中，出于效率的考虑，我们在设计表时很有可能做出反范式设计，即故意降低方式级别，增加冗余数据来获得更好的操作性能。</p></blockquote><h4 id="数据完整性" tabindex="-1"><a class="header-anchor" href="#数据完整性" aria-hidden="true">#</a> 数据完整性</h4><ol><li><p>实体完整性 - 每个实体都是独一无二的</p><ul><li>主键（<code>primary key</code>） / 唯一约束（<code>unique</code>）</li></ul></li><li><p>引用完整性（参照完整性）- 关系中不允许引用不存在的实体</p><ul><li>外键（<code>foreign key</code>）</li></ul></li><li><p>域（domain）完整性 - 数据是有效的</p><ul><li><p>数据类型及长度</p></li><li><p>非空约束（<code>not null</code>）</p></li><li><p>默认值约束（<code>default</code>）</p></li><li><p>检查约束（<code>check</code>）</p><blockquote><p><strong>说明</strong>：在 MySQL 8.x 以前，检查约束并不起作用。</p></blockquote></li></ul></li></ol><h4 id="数据一致性" tabindex="-1"><a class="header-anchor" href="#数据一致性" aria-hidden="true">#</a> 数据一致性</h4><ol><li><p>事务：一系列对数据库进行读/写的操作，这些操作要么全都成功，要么全都失败。</p></li><li><p>事务的 ACID 特性</p><ul><li>原子性：事务作为一个整体被执行，包含在其中的对数据库的操作要么全部被执行，要么都不执行</li><li>一致性：事务应确保数据库的状态从一个一致状态转变为另一个一致状态</li><li>隔离性：多个事务并发执行时，一个事务的执行不应影响其他事务的执行</li><li>持久性：已被提交的事务对数据库的修改应该永久保存在数据库中</li></ul></li><li><p>MySQL 中的事务操作</p><ul><li><p>开启事务环境</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>start transaction
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提交事务</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>回滚事务</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>rollback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>查看事务隔离级别</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>show variables like &#39;transaction_isolation&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+-----------------+
| Variable_name         | Value           |
+-----------------------+-----------------+
| transaction_isolation | REPEATABLE-READ |
+-----------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，MySQL 默认的事务隔离级别是<code>REPEATABLE-READ</code>。</p></li><li><p>修改（当前会话）事务隔离级别</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>set session transaction isolation level read committed;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重新查看事务隔离级别，结果如下所示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+----------------+
| Variable_name         | Value          |
+-----------------------+----------------+
| transaction_isolation | READ-COMMITTED |
+-----------------------+----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9),b={href:"https://blog.csdn.net/jackfrued/article/details/44921941",target:"_blank",rel:"noopener noreferrer"},p={href:"https://item.jd.com/11220393.html",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"ANSI/ISO SQL 92标准定义了4个等级的事务隔离级别，如下表所示。需要说明的是，事务隔离级别和数据访问的并发性是对立的，事务隔离级别越高并发性就越差。所以要根据具体的应用来确定到底使用哪种事务隔离级别，这个地方没有万能的原则。",-1),g=e("img",{src:v,style:{zoom:"50%"}},null,-1),_=e("h3",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),L=e("p",null,"关于 MySQL 的知识肯定远远不止上面列出的这些，比如 MySQL 性能调优、MySQL 运维相关工具、MySQL 数据的备份和恢复、监控 MySQL 服务、部署高可用架构等，这一系列的问题在这里都没有办法逐一展开来讨论，那就留到有需要的时候再进行讲解吧，各位读者也可以自行探索。",-1);function S(Q,f){const i=a("ExternalLinkIcon");return r(),c("div",null,[t,e("p",null,[n("如果大家对上面讲到的视图、函数、过程包括我们没有讲到的触发器这些知识有兴趣，建议大家阅读 MySQL 的入门读物"),e("a",u,[n("《MySQL必知必会》"),l(i)]),n("进行一般性了解即可，因为这些知识点在大家将来的工作中未必用得上，学了也可能仅仅是为了应付面试而已。")]),m,e("p",null,[n("关系型数据库的事务是一个很大的话题，因为当存在多个并发事务访问数据时，就有可能出现三类读数据的问题（脏读、不可重复读、幻读）和两类更新数据的问题（第一类丢失更新、第二类丢失更新）。想了解这五类问题的，可以阅读我发布在 CSDN 网站上的"),e("a",b,[n("《Java面试题全集（上）》"),l(i)]),n("一文的第80题。为了避免这些问题，关系型数据库底层是有对应的锁机制的，按锁定对象不同可以分为表级锁和行级锁，按并发事务锁定关系可以分为共享锁和独占锁。然而直接使用锁是非常麻烦的，为此数据库为用户提供了自动锁机制，只要用户指定适当的事务隔离级别，数据库就会通过分析 SQL 语句，然后为事务访问的资源加上合适的锁。此外，数据库还会维护这些锁通过各种手段提高系统的性能，这些对用户来说都是透明的。想了解 MySQL 事务和锁的细节知识，推荐大家阅读进阶读物"),e("a",p,[n("《高性能MySQL》"),l(i)]),n("，这也是数据库方面的经典书籍。")]),h,g,_,L])}const y=s(o,[["render",S],["__file","第46课.视图与函数和过程.html.vue"]]);export{y as default};
