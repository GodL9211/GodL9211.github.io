import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,f as s}from"./app-9976b6d0.js";const d={},l=s(`<h2 id="第48课-python程序接入mysql数据库" tabindex="-1"><a class="header-anchor" href="#第48课-python程序接入mysql数据库" aria-hidden="true">#</a> 第48课：Python程序接入MySQL数据库</h2><p>在 Python3 中，我们可以使用<code>mysqlclient</code>或者<code>pymysql</code>三方库来接入 MySQL 数据库并实现数据持久化操作。二者的用法完全相同，只是导入的模块名不一样。我们推荐大家使用纯 Python 的三方库<code>pymysql</code>，因为它更容易安装成功。下面我们仍然以之前创建的名为<code>hrs</code>的数据库为例，为大家演示如何通过 Python 程序操作 MySQL 数据库实现数据持久化操作。</p><h3 id="接入mysql" tabindex="-1"><a class="header-anchor" href="#接入mysql" aria-hidden="true">#</a> 接入MySQL</h3><p>首先，我们可以在命令行或者 PyCharm 的终端中通过下面的命令安装<code>pymysql</code>，如果需要接入 MySQL 8，还需要安装一个名为<code>cryptography</code>的三方库来支持 MySQL 8 的密码认证方式。</p><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>pip install pymysql cryptography
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>pymysql</code>操作 MySQL 的步骤如下所示：</p><ol><li>创建连接。MySQL 服务器启动后，提供了基于 TCP （传输控制协议）的网络服务。我们可以通过<code>pymysql</code>模块的<code>connect</code>函数连接 MySQL 服务器。在调用<code>connect</code>函数时，需要指定主机（<code>host</code>）、端口（<code>port</code>）、用户名（<code>user</code>）、口令（<code>password</code>）、数据库（<code>database</code>）、字符集（<code>charset</code>）等参数，该函数会返回一个<code>Connection</code>对象。</li><li>获取游标。连接 MySQL 服务器成功后，接下来要做的就是向数据库服务器发送 SQL 语句，MySQL 会执行接收到的 SQL 并将执行结果通过网络返回。要实现这项操作，需要先通过连接对象的<code>cursor</code>方法获取游标（<code>Cursor</code>）对象。</li><li>发出 SQL。通过游标对象的<code>execute</code>方法，我们可以向数据库发出 SQL 语句。</li><li>如果执行<code>insert</code>、<code>delete</code>或<code>update</code>操作，需要根据实际情况提交或回滚事务。因为创建连接时，默认开启了事务环境，在操作完成后，需要使用连接对象的<code>commit</code>或<code>rollback</code>方法，实现事务的提交或回滚，<code>rollback</code>方法通常会放在异常捕获代码块<code>except</code>中。如果执行<code>select</code>操作，需要通过游标对象抓取查询的结果，对应的方法有三个，分别是：<code>fetchone</code>、<code>fetchmany</code>和<code>fetchall</code>。其中<code>fetchone</code>方法会抓取到一条记录，并以元组或字典的方式返回；<code>fetchmany</code>和<code>fetchall</code>方法会抓取到多条记录，以嵌套元组或列表装字典的方式返回。</li><li>关闭连接。在完成持久化操作后，请不要忘记关闭连接，释放外部资源。我们通常会在<code>finally</code>代码块中使用连接对象的<code>close</code>方法来关闭连接。</li></ol><h3 id="代码实操" tabindex="-1"><a class="header-anchor" href="#代码实操" aria-hidden="true">#</a> 代码实操</h3><p>下面，我们通过代码实操的方式为大家演示上面说的五个步骤。</p><h4 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pymysql

no = int(input(&#39;部门编号: &#39;))
name = input(&#39;部门名称: &#39;)
location = input(&#39;部门所在地: &#39;)

# 1. 创建连接（Connection）
conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)
try:
    # 2. 获取游标对象（Cursor）
    with conn.cursor() as cursor:
        # 3. 通过游标对象向数据库服务器发出SQL语句
        affected_rows = cursor.execute(
            &#39;insert into \`tb_dept\` values (%s, %s, %s)&#39;,
            (no, name, location)
        )
        if affected_rows == 1:
            print(&#39;新增部门成功!!!&#39;)
    # 4. 提交事务（transaction）
    conn.commit()
except pymysql.MySQLError as err:
    # 4. 回滚事务
    conn.rollback()
    print(type(err), err)
finally:
    # 5. 关闭连接释放资源
    conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的<code>127.0.0.1</code>称为回环地址，它代表的是本机。下面的<code>guest</code>是我提前创建好的用户，该用户拥有对<code>hrs</code>数据库的<code>insert</code>、<code>delete</code>、<code>update</code>和<code>select</code>权限。我们不建议大家在项目中直接使用<code>root</code>超级管理员账号访问数据库，这样做实在是太危险了。我们可以使用下面的命令创建名为<code>guest</code>的用户并为其授权。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>create user &#39;guest&#39;@&#39;%&#39; identified by &#39;Guest.618&#39;;
grant insert, delete, update, select on \`hrs\`.* to &#39;guest&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果要插入大量数据，建议使用游标对象的<code>executemany</code>方法做批处理（一个<code>insert</code>操作后面跟上多组数据），大家可以尝试向一张表插入10000条记录，然后看看不使用批处理一条条的插入和使用批处理有什么差别。游标对象的<code>executemany</code>方法第一个参数仍然是 SQL 语句，第二个参数可以是包含多组数据的列表或元组。</p><h4 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pymysql

no = int(input(&#39;部门编号: &#39;))

# 1. 创建连接（Connection）
conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;,
                       autocommit=True)
try:
    # 2. 获取游标对象（Cursor）
    with conn.cursor() as cursor:
        # 3. 通过游标对象向数据库服务器发出SQL语句
        affected_rows = cursor.execute(
            &#39;delete from \`tb_dept\` where \`dno\`=%s&#39;,
            (no, )
        )
        if affected_rows == 1:
            print(&#39;删除部门成功!!!&#39;)
finally:
    # 5. 关闭连接释放资源
    conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：如果不希望每次 SQL 操作之后手动提交或回滚事务，可以<code>connect</code>函数中加一个名为<code>autocommit</code>的参数并将它的值设置为<code>True</code>，表示每次执行 SQL 成功后自动提交。但是我们建议大家手动提交或回滚，这样可以根据实际业务需要来构造事务环境。如果不愿意捕获异常并进行处理，可以在<code>try</code>代码块后直接跟<code>finally</code>块，省略<code>except</code>意味着发生异常时，代码会直接崩溃并将异常栈显示在终端中。</p></blockquote><h4 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h4><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pymysql

no = int(input(&#39;部门编号: &#39;))
name = input(&#39;部门名称: &#39;)
location = input(&#39;部门所在地: &#39;)

# 1. 创建连接（Connection）
conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)
try:
    # 2. 获取游标对象（Cursor）
    with conn.cursor() as cursor:
        # 3. 通过游标对象向数据库服务器发出SQL语句
        affected_rows = cursor.execute(
            &#39;update \`tb_dept\` set \`dname\`=%s, \`dloc\`=%s where \`dno\`=%s&#39;,
            (name, location, no)
        )
        if affected_rows == 1:
            print(&#39;更新部门信息成功!!!&#39;)
    # 4. 提交事务
    conn.commit()
except pymysql.MySQLError as err:
    # 4. 回滚事务
    conn.rollback()
    print(type(err), err)
finally:
    # 5. 关闭连接释放资源
    conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h4><ol><li>查询部门表的数据。</li></ol><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pymysql

# 1. 创建连接（Connection）
conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)
try:
    # 2. 获取游标对象（Cursor）
    with conn.cursor() as cursor:
        # 3. 通过游标对象向数据库服务器发出SQL语句
        cursor.execute(&#39;select \`dno\`, \`dname\`, \`dloc\` from \`tb_dept\`&#39;)
        # 4. 通过游标对象抓取数据
        row = cursor.fetchone()
        while row:
            print(row)
            row = cursor.fetchone()
except pymysql.MySQLError as err:
    print(type(err), err)
finally:
    # 5. 关闭连接释放资源
    conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong>：上面的代码中，我们通过构造一个<code>while</code>循环实现了逐行抓取查询结果的操作。这种方式特别适合查询结果有非常多行的场景。因为如果使用<code>fetchall</code>一次性将所有记录抓取到一个嵌套元组中，会造成非常大的内存开销，这在很多场景下并不是一个好主意。如果不愿意使用<code>while</code>循环，还可以考虑使用<code>iter</code>函数构造一个迭代器来逐行抓取数据，有兴趣的读者可以自行研究。</p></blockquote><ol start="2"><li>分页查询员工表的数据。</li></ol><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import pymysql

page = int(input(&#39;页码: &#39;))
size = int(input(&#39;大小: &#39;))

# 1. 创建连接（Connection）
con = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                      user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                      database=&#39;hrs&#39;, charset=&#39;utf8&#39;)
try:
    # 2. 获取游标对象（Cursor）
    with con.cursor(pymysql.cursors.DictCursor) as cursor:
        # 3. 通过游标对象向数据库服务器发出SQL语句
        cursor.execute(
            &#39;select \`eno\`, \`ename\`, \`job\`, \`sal\` from \`tb_emp\` order by \`sal\` desc limit %s,%s&#39;,
            ((page - 1) * size, size)
        )
        # 4. 通过游标对象抓取数据
        for emp_dict in cursor.fetchall():
            print(emp_dict)
finally:
    # 5. 关闭连接释放资源
    con.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例讲解" tabindex="-1"><a class="header-anchor" href="#案例讲解" aria-hidden="true">#</a> 案例讲解</h3><p>下面我们为大家讲解一个将数据库表数据导出到 Excel 文件的例子，我们需要先安装<code>openpyxl</code>三方库，命令如下所示。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>pip install openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来，我们通过下面的代码实现了将数据库<code>hrs</code>中所有员工的编号、姓名、职位、月薪、补贴和部门名称导出到一个 Excel 文件中。</p><div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import openpyxl
import pymysql

# 创建工作簿对象
workbook = openpyxl.Workbook()
# 获得默认的工作表
sheet = workbook.active
# 修改工作表的标题
sheet.title = &#39;员工基本信息&#39;
# 给工作表添加表头
sheet.append((&#39;工号&#39;, &#39;姓名&#39;, &#39;职位&#39;, &#39;月薪&#39;, &#39;补贴&#39;, &#39;部门&#39;))
# 创建连接（Connection）
conn = pymysql.connect(host=&#39;127.0.0.1&#39;, port=3306,
                       user=&#39;guest&#39;, password=&#39;Guest.618&#39;,
                       database=&#39;hrs&#39;, charset=&#39;utf8mb4&#39;)
try:
    # 获取游标对象（Cursor）
    with conn.cursor() as cursor:
        # 通过游标对象执行SQL语句
        cursor.execute(
            &#39;select \`eno\`, \`ename\`, \`job\`, \`sal\`, coalesce(\`comm\`, 0), \`dname\` &#39;
            &#39;from \`tb_emp\` natural join \`tb_dept\`&#39;
        )
        # 通过游标抓取数据
        row = cursor.fetchone()
        while row:
            # 将数据逐行写入工作表中
            sheet.append(row)
            row = cursor.fetchone()
    # 保存工作簿
    workbook.save(&#39;hrs.xlsx&#39;)
except pymysql.MySQLError as err:
    print(err)
finally:
    # 关闭连接释放资源
    conn.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以参考上面的例子，试一试把 Excel 文件的数据导入到指定数据库的指定表中，看看是否可以成功。</p>`,30),c=[l];function r(a,o){return n(),i("div",null,c)}const t=e(d,[["render",r],["__file","第48课.Python程序接入MySQL数据库.html.vue"]]);export{t as default};
