import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as a,a as e,b as n,e as r,f as c}from"./app-9976b6d0.js";const t={},o=e("h2",{id:"第45课-索引",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第45课-索引","aria-hidden":"true"},"#"),n(" 第45课：索引")],-1),v=e("p",null,"索引是关系型数据库中用来提升查询性能最为重要的手段。关系型数据库中的索引就像一本书的目录，我们可以想象一下，如果要从一本书中找出某个知识点，但是这本书没有目录，这将是一件多么可怕的事情！我们估计得一篇一篇的翻下去，才能确定这个知识点到底在什么位置。创建索引虽然会带来存储空间上的开销，就像一本书的目录会占用一部分篇幅一样，但是在牺牲空间后换来的查询时间的减少也是非常显著的。",-1),u={href:"https://zh.wikipedia.org/zh-cn/%E5%B9%B3%E8%A1%A1%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>B+ 树由根节点、中间节点和叶子节点构成，其中叶子节点用来保存排序后的数据。由于记录在索引上是排序过的，因此在一个叶子节点内查找数据时可以使用二分查找，这种查找方式效率非常的高。当数据很少的时候，B+ 树只有一个根节点，数据也就保存在根节点上。随着记录越来越多，B+ 树会发生分裂，根节点不再保存数据，而是提供了访问下一层节点的指针，帮助快速确定数据在哪个叶子节点上。</p><p>在创建二维表时，我们通常都会为表指定主键列，主键列上默认会创建索引，而对于 MySQL InnoDB 存储引擎来说，因为它使用的是索引组织表这种数据存储结构，所以主键上的索引就是整张表的数据，而这种索引我们也将其称之为<strong>聚集索引</strong>（clustered index）。很显然，一张表只能有一个聚集索引，否则表的数据岂不是要保存多次。我们自己创建的索引都是二级索引（secondary index），更常见的叫法是<strong>非聚集索引</strong>（non-clustered index）。通过我们自定义的非聚集索引只能定位记录的主键，在获取数据时可能需要再通过主键上的聚集索引进行查询，这种现象称为“回表”，因此通过非聚集索引检索数据通常比使用聚集索引检索数据要慢。</p><p>接下来我们通过一个简单的例子来说明索引的意义，比如我们要根据学生的姓名来查找学生，这个场景在实际开发中应该经常遇到，就跟通过商品名称查找商品是一个道理。我们可以使用 MySQL 的<code>explain</code>关键字来查看 SQL 的执行计划（数据库执行 SQL 语句的具体步骤）。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ALL
possible_keys: NULL
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 11
     filtered: 10.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的 SQL 执行计划中，有几项值得我们关注：</p><ol><li><code>select_type</code>：查询的类型。 <ul><li><code>SIMPLE</code>：简单 SELECT，不需要使用 UNION 操作或子查询。</li><li><code>PRIMARY</code>：如果查询包含子查询，最外层的 SELECT 被标记为 PRIMARY。</li><li><code>UNION</code>：UNION 操作中第二个或后面的 SELECT 语句。</li><li><code>SUBQUERY</code>：子查询中的第一个 SELECT。</li><li><code>DERIVED</code>：派生表的 SELECT 子查询。</li></ul></li><li><code>table</code>：查询对应的表。</li><li><code>type</code>：MySQL 在表中找到满足条件的行的方式，也称为访问类型，包括：<code>ALL</code>（全表扫描）、<code>index</code>（索引全扫描，只遍历索引树）、<code>range</code>（索引范围扫描）、<code>ref</code>（非唯一索引扫描）、<code>eq_ref</code>（唯一索引扫描）、<code>const</code> / <code>system</code>（常量级查询）、<code>NULL</code>（不需要访问表或索引）。在所有的访问类型中，很显然 ALL 是性能最差的，它代表的全表扫描是指要扫描表中的每一行才能找到匹配的行。</li><li><code>possible_keys</code>：MySQL 可以选择的索引，但是<strong>有可能不会使用</strong>。</li><li><code>key</code>：MySQL 真正使用的索引，如果为<code>NULL</code>就表示没有使用索引。</li><li><code>key_len</code>：使用的索引的长度，在不影响查询的情况下肯定是长度越短越好。</li><li><code>rows</code>：执行查询需要扫描的行数，这是一个<strong>预估值</strong>。</li><li><code>extra</code>：关于查询额外的信息。 <ul><li><code>Using filesort</code>：MySQL 无法利用索引完成排序操作。</li><li><code>Using index</code>：只使用索引的信息而不需要进一步查表来获取更多的信息。</li><li><code>Using temporary</code>：MySQL 需要使用临时表来存储结果集，常用于分组和排序。</li><li><code>Impossible where</code>：<code>where</code>子句会导致没有符合条件的行。</li><li><code>Distinct</code>：MySQL 发现第一个匹配行后，停止为当前的行组合搜索更多的行。</li><li><code>Using where</code>：查询的列未被索引覆盖，筛选条件并不是索引的前导列。</li></ul></li></ol><p>从上面的执行计划可以看出，当我们通过学生名字查询学生时实际上是进行了全表扫描，不言而喻这个查询性能肯定是非常糟糕的，尤其是在表中的行很多的时候。如果我们需要经常通过学生姓名来查询学生，那么就应该在学生姓名对应的列上创建索引，通过索引来加速查询。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create index idx_student_name on tb_student(stuname);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看刚才的 SQL 对应的执行计划。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ref
possible_keys: idx_student_name
          key: idx_student_name
      key_len: 62
          ref: const
         rows: 1
     filtered: 100.00
        Extra: NULL
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以注意到，在对学生姓名创建索引后，刚才的查询已经不是全表扫描而是基于索引的查询，而且扫描的行只有唯一的一行，这显然大大的提升了查询的性能。MySQL 中还允许创建前缀索引，即对索引字段的前N个字符创建索引，这样的话可以减少索引占用的空间（但节省了空间很有可能会浪费时间，<strong>时间和空间是不可调和的矛盾</strong>），如下所示。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create index idx_student_name_1 on tb_student(stuname(1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的索引相当于是根据学生姓名的第一个字来创建的索引，我们再看看 SQL 执行计划。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>explain select * from tb_student where stuname=&#39;林震南&#39;\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: tb_student
   partitions: NULL
         type: ref
possible_keys: idx_student_name
          key: idx_student_name
      key_len: 5
          ref: const
         rows: 2
     filtered: 100.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不知道大家是否注意到，这一次扫描的行变成了2行，因为学生表中有两个姓“林”的学生，我们只用姓名的第一个字作为索引的话，在查询时通过索引就会找到这两行。</p><p>如果要删除索引，可以使用下面的SQL。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>alter table tb_student drop index idx_student_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>drop index idx_student_name on tb_student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在创建索引时，我们还可以使用复合索引、函数索引（MySQL 5.7 开始支持），用好复合索引实现<strong>索引覆盖</strong>可以减少不必要的排序和回表操作，这样就会让查询的性能成倍的提升，有兴趣的读者可以自行研究。</p><p>我们简单的为大家总结一下索引的设计原则：</p><ol><li><strong>最适合</strong>索引的列是出现在<strong>WHERE子句</strong>和连接子句中的列。</li><li>索引列的基数越大（取值多、重复值少），索引的效果就越好。</li><li>使用<strong>前缀索引</strong>可以减少索引占用的空间，内存中可以缓存更多的索引。</li><li><strong>索引不是越多越好</strong>，虽然索引加速了读操作（查询），但是写操作（增、删、改）都会变得更慢，因为数据的变化会导致索引的更新，就如同书籍章节的增删需要更新目录一样。</li><li>使用 InnoDB 存储引擎时，表的普通索引都会保存主键的值，所以<strong>主键要尽可能选择较短的数据类型</strong>，这样可以有效的减少索引占用的空间，提升索引的缓存效果。</li></ol><p>最后，还有一点需要说明，InnoDB 使用的 B-tree 索引，数值类型的列除了等值判断时索引会生效之外，使用<code>&gt;</code>、<code>&lt;</code>、<code>&gt;=</code>、<code>&lt;=</code>、<code>BETWEEN...AND... </code>、<code>&lt;&gt;</code>时，索引仍然生效；对于字符串类型的列，如果使用不以通配符开头的模糊查询，索引也是起作用的，但是其他的情况会导致索引失效，这就意味着很有可能会做全表查询。</p>`,26);function b(p,g){const i=s("ExternalLinkIcon");return l(),a("div",null,[o,v,e("p",null,[n("MySQL 数据库中所有数据类型的列都可以被索引。对于MySQL 8.0 版本的 InnoDB 存储引擎来说，它支持三种类型的索引，分别是 B+ 树索引、全文索引和 R 树索引。这里，我们只介绍使用得最为广泛的 B+ 树索引。使用 B+ 树的原因非常简单，因为它是目前在基于磁盘进行海量数据存储和排序上最有效率的数据结构。B+ 树是一棵"),e("a",u,[n("平衡树"),r(i)]),n("，树的高度通常为3或4，但是却可以保存从百万级到十亿级的数据，而从这些数据里面查询一条数据，只需要3次或4次 I/O 操作。")]),m])}const x=d(t,[["render",b],["__file","第45课.索引.html.vue"]]);export{x as default};
