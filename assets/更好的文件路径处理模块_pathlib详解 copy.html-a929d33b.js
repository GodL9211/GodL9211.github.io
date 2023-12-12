import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as l,a as n,b as s,e as t,f as e}from"./app-d1a619f2.js";const c="/assets/Snipaste_2023-12-07_13-58-23-48bd17e6.png",u={},d=e(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>如果你需要在 Python 里进行文件处理，那么标准库中的<code>os</code>和<code>os.path</code>兄弟俩一定是你无法避开的两个模块。它们提供了非常多与文件路径处理、文件读写、文件状态查看相关的工具函数。</p><p><code>os.path</code>一直是Python中处理路径事实上的标准，但它可能会显得有些繁琐。与之相比，<code>pathlib</code>模块提供了更简单、更直观的方式来完成绝大多数任务。</p><p>在Python3.4开始，官方提供了<code>pathlib</code>面向对象的文件系统路径，核心的点在于面向对象， 这也是<code>os.path</code>和<code>pathlib</code>的本质区别。</p><blockquote><p>2019年Django也将<em>os.path</em>替换成了<em>pathlib</em>。</p></blockquote><h2 id="为什么需要pathlib" tabindex="-1"><a class="header-anchor" href="#为什么需要pathlib" aria-hidden="true">#</a> 为什么需要<code>pathlib</code>?</h2><p>在<code>pathlib</code>出现之前，Python的标准库<code>os</code>及<code>os.path</code>支持操作文件路径，使用字符串表示文件路径。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os<span class="token punctuation">.</span>path
 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
<span class="token string">&#39;F:\\\\spug-3.0\\\\spug-3.0\\\\spug_api\\\\test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者写出下面这种长长的代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">import</span> os<span class="token punctuation">.</span>path
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isfile<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>expanduser<span class="token punctuation">(</span><span class="token string">&#39;~&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;realpython.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是路径并不只是一个字符串，如果需要对文件进行操作，需要结合使用多个标准库的功能，如: 需要移动当前目录下的一些文件到备份目录，需要使用<code>os</code>，<code>glob</code>和<code>shutil</code>库。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> glob
<span class="token keyword">import</span> os
<span class="token keyword">import</span> shutil

<span class="token keyword">for</span> file_name <span class="token keyword">in</span> glob<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;*.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    new_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;archive&#39;</span><span class="token punctuation">,</span> file_name<span class="token punctuation">)</span>
    shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span>file_name<span class="token punctuation">,</span> new_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而且，由于不同的操作系统使用的分隔符不同，使用字符串拼接路径就容易出现问题。</p><p>有了<code>pathlib</code>，使得上述的问题变得更加轻松，pathlib创建的Path对象，可以直接通过正斜杠运算符<code>/</code>连接字符串生成新的对象。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>
<span class="token keyword">import</span> pathlib
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> WindowsPath

path <span class="token operator">=</span> pathlib<span class="token punctuation">.</span>Path<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>  <span class="token comment"># .</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>absolute<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;data.txt&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># F:\\spug-3.0\\spug-3.0\\spug_api\\test\\data.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pathlib的基本使用" tabindex="-1"><a class="header-anchor" href="#pathlib的基本使用" aria-hidden="true">#</a> pathlib的基本使用</h2><h3 id="path类的常用属性和方法" tabindex="-1"><a class="header-anchor" href="#path类的常用属性和方法" aria-hidden="true">#</a> Path类的常用属性和方法</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>descriptor<span class="token punctuation">:</span>
    parts<span class="token punctuation">:</span> 每一层路径
    parent<span class="token punctuation">:</span> 父目录
    parents<span class="token punctuation">:</span> 所有父目录
    stem<span class="token punctuation">:</span> 不带后缀的文件名
    name<span class="token punctuation">:</span> 文件名或目录名
    suffix<span class="token punctuation">:</span> 文件名后缀
    suffixes<span class="token punctuation">:</span> 文件名后缀列表

function<span class="token punctuation">:</span>
    is_absolute<span class="token punctuation">:</span> 是否为绝对路径
    joinpath<span class="token punctuation">:</span> 组合路径
    cwd<span class="token punctuation">:</span> 当前工作目录
    home<span class="token punctuation">:</span> 根目录
    rename<span class="token punctuation">:</span> 重命名
    replace<span class="token punctuation">:</span> 覆盖
    touch<span class="token punctuation">:</span> 新建文件
    exists<span class="token punctuation">:</span> 是否存在路径
    expanduser<span class="token punctuation">:</span> 返回带<span class="token operator">~</span>和<span class="token operator">~</span>user的路径
    glob<span class="token punctuation">:</span> 列出匹配的文件或目录
    rglob<span class="token punctuation">:</span> 递归列出匹配的文件或目录
    is_dir<span class="token punctuation">:</span> 是否为目录
    is_file<span class="token punctuation">:</span> 是否为文件
    iterdir<span class="token punctuation">:</span> 列出路径下的文件和目录
    mkdir<span class="token punctuation">:</span> 新建目录
    <span class="token builtin">open</span><span class="token punctuation">:</span> 打开文件
    resolve<span class="token punctuation">:</span> 转成绝对路径
    rmdir<span class="token punctuation">:</span> 删除目录
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建路径" tabindex="-1"><a class="header-anchor" href="#创建路径" aria-hidden="true">#</a> 创建路径</h3><p>前面用到了<code>pathlib.Path()</code>获取当前路径的方法，也可以显示的传入路径字符串进行路径创建，支持相对路径和绝对路径字符串的传递。</p><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> os<span class="token punctuation">.</span>path <span class="token keyword">import</span> abspath<span class="token punctuation">,</span> dirname<span class="token punctuation">,</span> join

manage_path <span class="token operator">=</span> abspath<span class="token punctuation">(</span><span class="token string">&quot;./manage.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 绝对路径</span>
base_dir <span class="token operator">=</span> dirname<span class="token punctuation">(</span>manage_path<span class="token punctuation">)</span>  <span class="token comment"># 父目录</span>
another_manage_path <span class="token operator">=</span> join<span class="token punctuation">(</span>base_dir<span class="token punctuation">,</span> <span class="token string">&quot;another_manage.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 构成新路径</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;manage_path:&quot;</span><span class="token punctuation">,</span> manage_path<span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;base_dir:&quot;</span><span class="token punctuation">,</span> base_dir<span class="token punctuation">)</span>  
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;another_manage_path:&quot;</span><span class="token punctuation">,</span> another_manage_path<span class="token punctuation">)</span>

<span class="token comment"># manage_path: F:\\spug-3.0\\spug-3.0\\spug_api\\manage.py</span>
<span class="token comment"># base_dir: F:\\spug-3.0\\spug-3.0\\spug_api</span>
<span class="token comment"># another_manage_path: F:\\spug-3.0\\spug-3.0\\spug_api\\another_manage.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

manage_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;manage.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 绝对路径</span>
base_dir <span class="token operator">=</span> manage_path<span class="token punctuation">.</span>parent  <span class="token comment"># 父目录</span>
another_manage_path <span class="token operator">=</span> base_dir <span class="token operator">/</span> <span class="token string">&quot;another_manage.py&quot;</span>  <span class="token comment"># 构成新路径</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;manage_path:&quot;</span><span class="token punctuation">,</span> manage_path<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;base_dir:&quot;</span><span class="token punctuation">,</span> base_dir<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;another_manage_path:&quot;</span><span class="token punctuation">,</span> another_manage_path<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>显然用pathlib更加便捷和优雅!!</p></blockquote><h3 id="创建文件-path-touch" tabindex="-1"><a class="header-anchor" href="#创建文件-path-touch" aria-hidden="true">#</a> 创建文件 Path.touch()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token punctuation">)</span>
new_path <span class="token operator">=</span> path <span class="token operator">/</span> <span class="token string">&quot;hello.py&quot;</span>
new_path<span class="token punctuation">.</span>touch<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建目录和重命名" tabindex="-1"><a class="header-anchor" href="#创建目录和重命名" aria-hidden="true">#</a> 创建目录和重命名</h3><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> os<span class="token punctuation">.</span>path

os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;./src&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;stuff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 构建目录./src/stuff</span>
os<span class="token punctuation">.</span>rename<span class="token punctuation">(</span><span class="token string">&quot;./src/stuff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/config&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 将./src/stuff重命名为./src/config</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

Path<span class="token punctuation">(</span><span class="token string">&quot;./src/stuff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>mkdir<span class="token punctuation">(</span>parents<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> exist_ok<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 构建目录./src/stuff</span>
Path<span class="token punctuation">(</span><span class="token string">&quot;./src/stuff&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rename<span class="token punctuation">(</span><span class="token string">&quot;./src/config&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 将./src/stuff重命名为./src/config</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mkdir方法:</p><ul><li>parents默认为False，父目录不存在时抛出FileNotFoundError</li><li>exist_ok默认为False，该目录存在时抛出FileExistsError</li></ul></blockquote><h3 id="递归列出某类型文件" tabindex="-1"><a class="header-anchor" href="#递归列出某类型文件" aria-hidden="true">#</a> 递归列出某类型文件</h3><p>假设目录：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">(</span>spug<span class="token operator">-</span><span class="token number">3.0</span><span class="token punctuation">)</span> PS F<span class="token punctuation">:</span>\\spug<span class="token operator">-</span><span class="token number">3.0</span>\\spug<span class="token operator">-</span><span class="token number">3.0</span>\\spug_api\\path_lib_test<span class="token operator">&gt;</span> tree <span class="token operator">/</span>F            

F<span class="token punctuation">:</span><span class="token punctuation">.</span>
│  pathlib_test<span class="token punctuation">.</span>py
│  __init__<span class="token punctuation">.</span>py
│
└─test
        __init__<span class="token punctuation">.</span>py

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>列出所有<code>.py</code>文件</p></blockquote><p><em>os</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># ! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> os <span class="token keyword">import</span> walk
<span class="token keyword">from</span> os<span class="token punctuation">.</span>path <span class="token keyword">import</span> join<span class="token punctuation">,</span> expanduser<span class="token punctuation">,</span> abspath

home <span class="token operator">=</span> expanduser<span class="token punctuation">(</span><span class="token string">&#39;~&#39;</span><span class="token punctuation">)</span>
python_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> walk<span class="token punctuation">(</span><span class="token string">&quot;./test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    python_files<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span>abspath<span class="token punctuation">(</span>join<span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files <span class="token keyword">if</span> <span class="token builtin">file</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&#39;.mp4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 现在python_files列表包含所有以&#39;.mp4&#39;结尾的文件的绝对路径</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>python_files<span class="token punctuation">)</span>  <span class="token comment"># [&#39;F:\\\\spug-3.0\\\\spug-3.0\\\\spug_api\\\\path_lib_test\\\\test\\\\1.mp4&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>glob</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> glob <span class="token keyword">import</span> glob

top_level_py_files <span class="token operator">=</span> glob<span class="token punctuation">(</span><span class="token string">&quot;./*.py&quot;</span><span class="token punctuation">)</span>
all_py_files <span class="token operator">=</span> glob<span class="token punctuation">(</span><span class="token string">&quot;./**/*.py&quot;</span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># 递归</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>top_level_py_files<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>all_py_files<span class="token punctuation">)</span>

<span class="token comment"># [&#39;.\\\\pathlib_test.py&#39;, &#39;.\\\\__init__.py&#39;]</span>
<span class="token comment"># [&#39;.\\\\pathlib_test.py&#39;, &#39;.\\\\__init__.py&#39;, &#39;.\\\\test\\\\__init__.py&#39;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

top_level_py_files <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&quot;*.py&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 不进行递归</span>
all_py_files <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rglob<span class="token punctuation">(</span><span class="token string">&quot;*.py&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 递归</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>top_level_py_files<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>all_py_files<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># [WindowsPath(&#39;pathlib_test.py&#39;), WindowsPath(&#39;__init__.py&#39;)]</span>
<span class="token comment"># [WindowsPath(&#39;pathlib_test.py&#39;), WindowsPath(&#39;__init__.py&#39;), WindowsPath(&#39;test/__init__.py&#39;)]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>glob不会确定地返回路径顺序。</p></blockquote><h3 id="打开多个文件并读取内容" tabindex="-1"><a class="header-anchor" href="#打开多个文件并读取内容" aria-hidden="true">#</a> 打开多个文件并读取内容</h3><p><em>glob</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> glob <span class="token keyword">import</span> glob

contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> fname <span class="token keyword">in</span> glob<span class="token punctuation">(</span><span class="token string">&quot;./**/*init*.py&quot;</span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        contents<span class="token punctuation">.</span>append<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span>

<span class="token comment"># [&quot;#! -*-conding=: UTF-8 -*-\\n# 2023/12/6 17:20\\n\\n\\nif __name__ == &#39;__main__&#39;:\\n    pass\\n&quot;, &quot;#! -*-conding=: UTF-8 -*-\\n# 2023/12/6 17:22\\n\\n\\nif __name__ == &#39;__main__&#39;:\\n    pass\\n&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> path <span class="token keyword">in</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rglob<span class="token punctuation">(</span><span class="token string">&quot;*__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> path<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        contents<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span>

<span class="token comment"># [&quot;#! -*-conding=: UTF-8 -*-\\n# 2023/12/6 17:20\\n\\n\\nif __name__ == &#39;__main__&#39;:\\n    pass\\n&quot;, &quot;#! -*-conding=: UTF-8 -*-\\n# 2023/12/6 17:22\\n\\n\\nif __name__ == &#39;__main__&#39;:\\n    pass\\n&quot;]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> 操作符</h3><p>使用<code>/</code>取代<code>os.path.join</code>进行路径拼接。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

base_dir <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
child_dir <span class="token operator">=</span> base_dir <span class="token operator">/</span> <span class="token string">&quot;test&quot;</span>
file_path <span class="token operator">=</span> child_dir <span class="token operator">/</span> <span class="token string">&quot;__init__.py&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>
<span class="token comment"># test\\__init__.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路径的每个位置-path-parts" tabindex="-1"><a class="header-anchor" href="#路径的每个位置-path-parts" aria-hidden="true">#</a> 路径的每个位置 Path.parts</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;F:/spug-3.0/spug-3.0/spug_api/pathlib_test.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>parts<span class="token punctuation">)</span>
<span class="token comment"># (&#39;F:\\\\&#39;, &#39;spug-3.0&#39;, &#39;spug-3.0&#39;, &#39;spug_api&#39;, &#39;pathlib_test.py&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父目录-path-parents-path-parent" tabindex="-1"><a class="header-anchor" href="#父目录-path-parents-path-parent" aria-hidden="true">#</a> 父目录 Path.parents &amp; Path.parent</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;path_lib_test/test/__init__.py&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>parents<span class="token punctuation">)</span>   <span class="token comment"># &lt;WindowsPath.parents&gt;</span>

<span class="token keyword">for</span> parent <span class="token keyword">in</span> file_path<span class="token punctuation">.</span>parents<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span>

<span class="token comment"># path_lib_test\\test</span>
<span class="token comment"># path_lib_test</span>
<span class="token comment"># .</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>parent<span class="token punctuation">)</span>

<span class="token comment"># path_lib_test\\test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),r={id:"文件名或目录名-path-name",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#文件名或目录名-path-name","aria-hidden":"true"},"#",-1),m={href:"http://Path.name",target:"_blank",rel:"noopener noreferrer"},v=e(`<p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> os

<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># __init__.py</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># __init__.py</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment"># test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件名后缀-path-suffixes-path-suffix" tabindex="-1"><a class="header-anchor" href="#文件名后缀-path-suffixes-path-suffix" aria-hidden="true">#</a> 文件名后缀 Path.suffixes &amp; Path.suffix</h3><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> os

<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># (&#39;test/__init__&#39;, &#39;.py&#39;)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>suffixes<span class="token punctuation">)</span>  <span class="token comment"># [&#39;.py&#39;]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>suffix<span class="token punctuation">)</span>  <span class="token comment"># .py</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不带后缀文件名-path-stem" tabindex="-1"><a class="header-anchor" href="#不带后缀文件名-path-stem" aria-hidden="true">#</a> 不带后缀文件名 Path.stem</h3><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> os


<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>splitext<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>basename<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># __init__</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>stem<span class="token punctuation">)</span>  <span class="token comment"># __init__</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否为绝对路径-path-is-absolute" tabindex="-1"><a class="header-anchor" href="#是否为绝对路径-path-is-absolute" aria-hidden="true">#</a> 是否为绝对路径 Path.is_absolute()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>is_absolute<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合路径-path-joinpath-other" tabindex="-1"><a class="header-anchor" href="#组合路径-path-joinpath-other" aria-hidden="true">#</a> 组合路径 Path.joinpath(*other)</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>joinpath<span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;__init__.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>  <span class="token comment"># test\\__init__.py</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取当前工作目录-path-cwd" tabindex="-1"><a class="header-anchor" href="#获取当前工作目录-path-cwd" aria-hidden="true">#</a> 获取当前工作目录 Path.cwd()</h3><blockquote><p>和 os.getcwd() 返回的相同</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># F:\\spug-3.0\\spug-3.0\\spug_api\\path_lib_test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根目录-path-home" tabindex="-1"><a class="header-anchor" href="#根目录-path-home" aria-hidden="true">#</a> 根目录 Path.home()</h3><blockquote><p>返回一个表示用户家目录的新路径对象。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span>home<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># C:\\Users\\lianhf</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否存在路径-path-exists" tabindex="-1"><a class="header-anchor" href="#是否存在路径-path-exists" aria-hidden="true">#</a> 是否存在路径 Path.exists()</h3><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os<span class="token punctuation">.</span>path

<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token string">&quot;test/aaaa.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/aaaa.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># False</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="返回带和user的路径-path-expanduser" tabindex="-1"><a class="header-anchor" href="#返回带和user的路径-path-expanduser" aria-hidden="true">#</a> 返回带<sub>和</sub>user的路径 Path.expanduser()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;~/test/aaaa.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>expanduser<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># C:\\Users\\lianhf\\test\\aaaa.py</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否为目录或文件-path-is-dir-path-is-file" tabindex="-1"><a class="header-anchor" href="#是否为目录或文件-path-is-dir-path-is-file" aria-hidden="true">#</a> 是否为目录或文件 Path.is_dir() &amp; Path.is_file()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

dir_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dir_path<span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>dir_path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>is_dir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>file_path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出路径下的文件和目录-path-iterdir" tabindex="-1"><a class="header-anchor" href="#列出路径下的文件和目录-path-iterdir" aria-hidden="true">#</a> 列出路径下的文件和目录 Path.iterdir()</h3><blockquote><p>产生该路径下的对象的路径</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

base_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
contents <span class="token operator">=</span> <span class="token punctuation">[</span>content <span class="token keyword">for</span> content <span class="token keyword">in</span> base_path<span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>contents<span class="token punctuation">)</span>  <span class="token comment"># [WindowsPath(&#39;pathlib_test.py&#39;), WindowsPath(&#39;test&#39;), WindowsPath(&#39;__init__.py&#39;)]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打开文件-path-open" tabindex="-1"><a class="header-anchor" href="#打开文件-path-open" aria-hidden="true">#</a> 打开文件 Path.open()</h3><blockquote><p>事实上，Path.open() 是在幕后调用内置的 open() 函数。这就是为什么你可以在 Path.open() 中使用模式和编码等参数。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!usr/bin/env python</span>
<span class="token comment"># -*- coding:utf-8 _*-</span>
<span class="token comment"># __time__：2023/12/6 21:37</span>


<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&quot;简答题.md&quot;</span>
<span class="token keyword">with</span> path<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> md_file<span class="token punctuation">:</span>
    content <span class="token operator">=</span> md_file<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    groceries <span class="token operator">=</span> <span class="token punctuation">[</span>line <span class="token keyword">for</span> line <span class="token keyword">in</span> content<span class="token punctuation">.</span>splitlines<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> line<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;##&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>groceries<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="覆盖-移动-path-replace" tabindex="-1"><a class="header-anchor" href="#覆盖-移动-path-replace" aria-hidden="true">#</a> 覆盖/移动 Path.replace()</h3><blockquote><p>将文件或目录重命名为给定的 target，并返回一个新的指向 target 的 Path 实例。</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span>

path<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>path<span class="token punctuation">.</span>parent <span class="token operator">/</span> <span class="token string">&quot;__init2__.py&quot;</span><span class="token punctuation">)</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转成绝对路径-path-resolve" tabindex="-1"><a class="header-anchor" href="#转成绝对路径-path-resolve" aria-hidden="true">#</a> 转成绝对路径 Path.resolve()</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/__init__.py&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>resolve<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># F:\\spug-3.0\\spug-3.0\\spug_api\\path_lib_test\\test\\__init__.py</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>strict设为True，如果路径不存在，则抛出FileNotFoundError</p></blockquote><h3 id="删除目录-path-rmdir" tabindex="-1"><a class="header-anchor" href="#删除目录-path-rmdir" aria-hidden="true">#</a> 删除目录 Path.rmdir()</h3><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>移除此目录。此目录必须为空的。</p></blockquote><p><em>os.path</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

os<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token string">&quot;test/hello&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果目录下不为空，抛出OSError</p><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

file_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;test/hello&quot;</span><span class="token punctuation">)</span>
file_path<span class="token punctuation">.</span>rmdir<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果目录下不为空，抛出OSError</p><h3 id="删除文件-os-remove-path-unlink" tabindex="-1"><a class="header-anchor" href="#删除文件-os-remove-path-unlink" aria-hidden="true">#</a> 删除文件 os.remove()/Path.unlink()</h3><p><em>os</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> os

os<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;test/hello.txt&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!usr/bin/env python</span>
<span class="token comment"># -*- coding:utf-8 _*-</span>
<span class="token comment"># __time__：2023/12/6 21:37</span>
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

p <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;./username.txt&#39;</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>unlink<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读写文件" tabindex="-1"><a class="header-anchor" href="#读写文件" aria-hidden="true">#</a> 读写文件</h3><ul><li><code>.read_text()</code>: 以文本模式打开路径，并以字符串形式返回内容。</li><li><code>.read_bytes()</code>: 以二进制模式打开路径，并以字节字符串形式返回内容。</li><li><code>.write_text()</code>: 打开路径并写入字符串数据。</li><li><code>.write_bytes()</code>: 以二进制模式打开路径并向其中写入数据。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token comment"># 除此之外，还有几个很甜的方法，省去了 with open 语句</span>
path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;/home/ubuntu/readme.txt&quot;</span><span class="token punctuation">)</span>
text <span class="token operator">=</span> path<span class="token punctuation">.</span>read_text<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>write_text<span class="token punctuation">(</span>text<span class="token punctuation">)</span>

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;/home/ubuntu/image.png&quot;</span><span class="token punctuation">)</span>
image <span class="token operator">=</span> path<span class="token punctuation">.</span>read_bytes<span class="token punctuation">(</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>write_bytes<span class="token punctuation">(</span>image<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>上述每个方法都会处理文件的打开和关闭。</p></blockquote><h3 id="移动文件-shutil-move-path-rename-path-replace" tabindex="-1"><a class="header-anchor" href="#移动文件-shutil-move-path-rename-path-replace" aria-hidden="true">#</a> 移动文件 shutil.move()/path.rename()/path.replace()</h3><p><em>shutil</em></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> shutil

shutil<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token string">&#39;./__init__.py&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./test&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>pathlib</em></p><p>可以使用<code>path.rename()</code>或者<code>path.replace()</code>移动文件:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;test/__init2__.py&#39;</span><span class="token punctuation">)</span>
folder <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>folder <span class="token operator">/</span> path<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;hello.py&quot;</span><span class="token punctuation">)</span>
destination <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;goodbye.py&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token keyword">not</span> destination<span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    source<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>destination<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码并非并发安全的！这里仅提供实现思路。</p><p>也可以换一种思路：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">import</span> fcntl

source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;hello.py&quot;</span><span class="token punctuation">)</span>
destination <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;goodbye.py&quot;</span><span class="token punctuation">)</span>

lock_file <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;lock_file.lock&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> lock_file<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&quot;xb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> lock<span class="token punctuation">:</span>
        fcntl<span class="token punctuation">.</span>flock<span class="token punctuation">(</span>lock<span class="token punctuation">,</span> fcntl<span class="token punctuation">.</span>LOCK_EX<span class="token punctuation">)</span>  <span class="token comment"># 获取独占锁</span>

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> destination<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>mode<span class="token operator">=</span><span class="token string">&quot;xb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
                <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>source<span class="token punctuation">.</span>read_bytes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> FileExistsError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;File </span><span class="token interpolation"><span class="token punctuation">{</span>destination<span class="token punctuation">}</span></span><span class="token string"> exists already.&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            source<span class="token punctuation">.</span>unlink<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">finally</span><span class="token punctuation">:</span>
            fcntl<span class="token punctuation">.</span>flock<span class="token punctuation">(</span>lock<span class="token punctuation">,</span> fcntl<span class="token punctuation">.</span>LOCK_UN<span class="token punctuation">)</span>  <span class="token comment"># 释放锁</span>

<span class="token keyword">except</span> FileExistsError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Another process is already handling the operation.&quot;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名文件" tabindex="-1"><a class="header-anchor" href="#重命名文件" aria-hidden="true">#</a> 重命名文件</h3><p>文件重命名除了可以使用上述的<code>path.rename()</code>，还可以使用<code>.with_stem()</code>, <code>.with_suffix()</code>, 或者<code>.with_name()</code>结合<code>.replace()</code>来实现。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!usr/bin/env python</span>
<span class="token comment"># -*- coding:utf-8 _*-</span>
<span class="token comment"># __time__：2023/12/6 21:37</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

txt_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;./hello.txt&quot;</span><span class="token punctuation">)</span>

md_path <span class="token operator">=</span> txt_path<span class="token punctuation">.</span>with_suffix<span class="token punctuation">(</span><span class="token string">&quot;.md&quot;</span><span class="token punctuation">)</span>

txt_path<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>md_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>.with_suffix()</code>会返回一个新路径。要真正重命名文件，需要使用<code>.replace()</code>。这将把<code>txt_path</code>移到<code>md_path</code>，并在保存时重命名它。</p><p>如果要更改包括扩展名在内的完整文件名，可以使用<code>.with_name()</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

md_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;./hello.md&quot;</span><span class="token punctuation">)</span>

txt_path <span class="token operator">=</span> md_path<span class="token punctuation">.</span>with_name<span class="token punctuation">(</span><span class="token string">&quot;goodbye.md&quot;</span><span class="token punctuation">)</span>

md_path<span class="token punctuation">.</span>replace<span class="token punctuation">(</span>txt_path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件复制" tabindex="-1"><a class="header-anchor" href="#文件复制" aria-hidden="true">#</a> 文件复制</h3><p>令人惊讶的是，<code>Path</code>并没有复制文件的方法。不过，利用目前学到的<code>pathlib</code>知识，只需几行代码就能创建相同的功能:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

source <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&quot;shopping_list.md&quot;</span><span class="token punctuation">)</span>
destination <span class="token operator">=</span> source<span class="token punctuation">.</span>with_stem<span class="token punctuation">(</span><span class="token string">&quot;shopping_list_02&quot;</span><span class="token punctuation">)</span>
destination<span class="token punctuation">.</span>write_bytes<span class="token punctuation">(</span>source<span class="token punctuation">.</span>read_bytes<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>.with_stem()</code>创建新的文件名，但没有更改扩展名，并使用<code>.read_bytes()</code>读取源文件的内容，然后使用<code>.write_bytes()</code>将这些内容写入目标文件。</p><p>虽然使用 pathlib 来处理所有与路径相关的事情很有吸引力，但你也可以考虑使用<code>shutil</code>来复制文件。它是一个很好的选择，也知道如何处理路径对象。</p><h3 id="检查路径是否符合规则" tabindex="-1"><a class="header-anchor" href="#检查路径是否符合规则" aria-hidden="true">#</a> 检查路径是否符合规则</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>p <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;data.json&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># math 检查匹配规则</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">&#39;*.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转unix风格" tabindex="-1"><a class="header-anchor" href="#转unix风格" aria-hidden="true">#</a> 转Unix风格</h3><p>as_posix()：返回使用正斜杠（/）的路径字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;/host/share&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># \\host\\share</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>as_posix<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># /host/share</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pathlib-是否比-os-path-更快" tabindex="-1"><a class="header-anchor" href="#pathlib-是否比-os-path-更快" aria-hidden="true">#</a> pathlib 是否比 os.path 更快？</h2><p>在我尝试运行基准测试之前，我猜它不是。<code>Path()</code>是一种面向对象的路径操作方法。实例化一个对象可能比调用<code>os.path.join</code>（只需吐出一个字符串）更费时。</p><p>但即使慢，我也很好奇到底慢了多少。另外，谁知道呢，也许我的直觉是错的？</p><p>废话不多说，直接来看下路径拼接的快慢对比：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!usr/bin/env python</span>
<span class="token comment"># -*- coding:utf-8 _*-</span>
<span class="token comment"># __time__：2023/12/6 21:37</span>

<span class="token comment"># pathlib_benchmarks.py</span>

<span class="token keyword">import</span> os
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path


<span class="token keyword">def</span> <span class="token function">os_path_join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;how&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;do&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;you&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;do&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;world.txt&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">pathlib_join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> Path<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token string">&quot;how&quot;</span> <span class="token operator">/</span> <span class="token string">&quot;do&quot;</span> <span class="token operator">/</span> <span class="token string">&quot;you&quot;</span> <span class="token operator">/</span> <span class="token string">&quot;do&quot;</span> <span class="token operator">/</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">/</span> <span class="token string">&quot;world.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们定义一个<code>pathlib_benchmarks.py</code>的脚本，<code>os_path_join</code>和<code>pathlib_join</code>方法分别使用<code>os.path</code>和<code>path</code>模块实现，然后执行测试：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>PS E<span class="token punctuation">:</span>\\projects\\mkwang\\python_and_go<span class="token operator">&gt;</span> python <span class="token operator">-</span>m timeit <span class="token operator">-</span>s <span class="token string">&quot;from pathlib_benchmarks import pathlib_join&quot;</span> <span class="token string">&quot;pathlib_join()&quot;</span>
<span class="token number">10000</span> loops<span class="token punctuation">,</span> best of <span class="token number">5</span><span class="token punctuation">:</span> <span class="token number">21.9</span> usec per loop
PS E<span class="token punctuation">:</span>\\projects\\mkwang\\python_and_go<span class="token operator">&gt;</span> python <span class="token operator">-</span>m timeit <span class="token operator">-</span>s <span class="token string">&quot;from pathlib_benchmarks import os_path_join&quot;</span> <span class="token string">&quot;os_path_join()&quot;</span>
<span class="token number">50000</span> loops<span class="token punctuation">,</span> best of <span class="token number">5</span><span class="token punctuation">:</span> <span class="token number">6.95</span> usec per loop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>结果和预期的差不太多！更多的对比，如果你有兴趣的话可以自己试试~</p></blockquote><h2 id="常用脚本" tabindex="-1"><a class="header-anchor" href="#常用脚本" aria-hidden="true">#</a> 常用脚本</h2><h3 id="统计文件个数" tabindex="-1"><a class="header-anchor" href="#统计文件个数" aria-hidden="true">#</a> 统计文件个数</h3><p>我们可以使用<code>.iterdir</code>方法获取当前文件下的所有文件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pathlib
<span class="token keyword">from</span> collections <span class="token keyword">import</span> Counter

now_path <span class="token operator">=</span> pathlib<span class="token punctuation">.</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
gen <span class="token operator">=</span> <span class="token punctuation">(</span>i<span class="token punctuation">.</span>suffix <span class="token keyword">for</span> i <span class="token keyword">in</span> now_path<span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Counter<span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># Counter({&#39;.py&#39;: 16, &#39;&#39;: 11, &#39;.txt&#39;: 1, &#39;.png&#39;: 1, &#39;.csv&#39;: 1})</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看目录中最近修改的文件" tabindex="-1"><a class="header-anchor" href="#查看目录中最近修改的文件" aria-hidden="true">#</a> 查看目录中最近修改的文件</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

directory <span class="token operator">=</span> Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
time<span class="token punctuation">,</span> file_path <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>st_mtime<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token keyword">for</span> f <span class="token keyword">in</span> directory<span class="token punctuation">.</span>iterdir<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>fromtimestamp<span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>  <span class="token comment"># 023-12-06 22:56:09.532177 E:\\projects\\mkwang\\python_and_go\\pathlib_test.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动子文件夹下的所有文件到本文件夹" tabindex="-1"><a class="header-anchor" href="#移动子文件夹下的所有文件到本文件夹" aria-hidden="true">#</a> 移动子文件夹下的所有文件到本文件夹</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

current_file <span class="token operator">=</span> Path<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">.</span>absolute<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> path <span class="token keyword">in</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rglob<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> path <span class="token operator">==</span> current_file <span class="token keyword">or</span> path<span class="token punctuation">.</span>parent <span class="token operator">==</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">if</span> path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            new_path <span class="token operator">=</span> Path<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">/</span> path<span class="token punctuation">.</span>name
            path<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>new_path<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Error moving </span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token punctuation">{</span>e<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示目录树" tabindex="-1"><a class="header-anchor" href="#展示目录树" aria-hidden="true">#</a> 展示目录树</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">import</span> pathlib


<span class="token keyword">def</span> <span class="token function">print_tree</span><span class="token punctuation">(</span>directory<span class="token punctuation">,</span> depth<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    spacer <span class="token operator">=</span> <span class="token string">&#39;    &#39;</span> <span class="token operator">*</span> depth
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>spacer<span class="token punctuation">}</span></span><span class="token string">+ </span><span class="token interpolation"><span class="token punctuation">{</span>directory<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">/&#39;</span></span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> path <span class="token keyword">in</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>directory<span class="token punctuation">.</span>rglob<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>spacer<span class="token punctuation">}</span></span><span class="token string">    </span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            print_tree<span class="token punctuation">(</span>path<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    current_path <span class="token operator">=</span> pathlib<span class="token punctuation">.</span>Path<span class="token punctuation">.</span>cwd<span class="token punctuation">(</span><span class="token punctuation">)</span>
    print_tree<span class="token punctuation">(</span>current_path<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量重命名" tabindex="-1"><a class="header-anchor" href="#批量重命名" aria-hidden="true">#</a> 批量重命名</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#! -*-conding=: UTF-8 -*-</span>
<span class="token comment"># 2023/12/6 11:41</span>

<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path


<span class="token keyword">def</span> <span class="token function">batch_rename</span><span class="token punctuation">(</span>directory_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    directory <span class="token operator">=</span> Path<span class="token punctuation">(</span>directory_path<span class="token punctuation">)</span>

    <span class="token keyword">for</span> file_path <span class="token keyword">in</span> directory<span class="token punctuation">.</span>glob<span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> file_path<span class="token punctuation">.</span>is_file<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            new_name <span class="token operator">=</span> file_path<span class="token punctuation">.</span>stem<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39; RAW&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.mp4&#39;</span>
            new_path <span class="token operator">=</span> file_path<span class="token punctuation">.</span>with_name<span class="token punctuation">(</span>new_name<span class="token punctuation">)</span>
            file_path<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>new_path<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    target_directory <span class="token operator">=</span> <span class="token string">&#39;./test&#39;</span>  <span class="token comment"># 需要批量重命名的路径</span>
    batch_rename<span class="token punctuation">(</span>target_directory<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取文件大小" tabindex="-1"><a class="header-anchor" href="#获取文件大小" aria-hidden="true">#</a> 获取文件大小</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path

<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>getsize<span class="token punctuation">(</span><span class="token string">&#39;test/1.mp4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Path<span class="token punctuation">(</span><span class="token string">&#39;test/1.mp4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>st_size<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件存在且不为空" tabindex="-1"><a class="header-anchor" href="#文件存在且不为空" aria-hidden="true">#</a> 文件存在且不为空</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pathlib <span class="token keyword">import</span> Path


<span class="token keyword">def</span> <span class="token function">path_exists</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;文件存在且不为空&quot;&quot;&quot;</span>
    <span class="token keyword">if</span> path <span class="token keyword">and</span> Path<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>exists<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> Path<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>stat<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>st_size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>path_exists<span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path_exists<span class="token punctuation">(</span><span class="token string">&#39;abc.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>path_exists<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>从 Python 3.4 开始，<code>pathlib</code>已在标准库中提供。创建、删除、读取、写入、查找、移动、复制、拆分，以及其他任何你想对文件路径或文件本身执行的操作，<code>pathlib</code>可能都有相应的功能。使用<code>pathlib</code>，文件路径可以由适当的<code>Path</code>对象表示，而不是像以前一样用纯字符串表示。 这些对象使代码处理文件路径：</p><ul><li>更容易阅读，特别是可以使用 “/” 将路径连接在一起</li><li>更强大，直接在对象上提供最必要的方法和属性</li><li>在操作系统中更加一致，因为<code>Path</code>对象隐藏了不同系统的特性</li></ul><p>当然，<code>os.path</code>或其他模块可以更快地完成这些操作。</p>`,117),h=n("thead",null,[n("tr",null,[n("th",null,"功能"),n("th",null,"os 和 os.path"),n("th",null,"pathlib")])],-1),b=n("tr",null,[n("td",null,"绝对路径"),n("td",null,"os.path.abspath()"),n("td",null,"Path.resolve()")],-1),_=n("tr",null,[n("td",null,"改变文件的模式和权限"),n("td",null,"os.chmod()"),n("td",null,"Path.chmod()")],-1),g=n("tr",null,[n("td",null,"新建目录"),n("td",null,"os.mkdir()"),n("td",null,"Path.mkdir()")],-1),y=n("tr",null,[n("td",null,"新建目录"),n("td",null,"os.makedirs()"),n("td",null,"Path.mkdir()")],-1),f=n("tr",null,[n("td",null,"重命名"),n("td",null,"os.rename()"),n("td",null,"Path.rename()")],-1),w=n("tr",null,[n("td",null,"覆盖"),n("td",null,"os.replace()"),n("td",null,"Path.replace()")],-1),q=n("tr",null,[n("td",null,"删除目录"),n("td",null,"os.rmdir()"),n("td",null,"Path.rmdir()")],-1),x=n("tr",null,[n("td",null,"移除此文件或符号链接"),n("td",null,"os.remove(), os.unlink()"),n("td",null,"Path.unlink()")],-1),P=n("tr",null,[n("td",null,"当前工作目录"),n("td",null,"os.getcwd()"),n("td",null,"Path.cwd()")],-1),F=n("tr",null,[n("td",null,"是否存在路径"),n("td",null,"os.path.exists()"),n("td",null,"Path.exists()")],-1),T=n("tr",null,[n("td",null,"根目录"),n("td",null,"os.path.expanduser()"),n("td",null,"Path.expanduser(), Path.home()")],-1),U=n("tr",null,[n("td",null,"列出路径下的文件和目录"),n("td",null,"os.listdir()"),n("td",null,"Path.iterdir()")],-1),j=n("tr",null,[n("td",null,"是否为目录"),n("td",null,"os.path.isdir()"),n("td",null,"Path.is_dir()")],-1),E=n("tr",null,[n("td",null,"是否为文件"),n("td",null,"os.path.isfile()"),n("td",null,"Path.is_file()")],-1),z=n("tr",null,[n("td",null,"是否指向符号链接"),n("td",null,"os.path.islink()"),n("td",null,"Path.is_symlink()")],-1),W=n("tr",null,[n("td",null,"创建硬链接"),n("td",null,"os.link()"),n("td",null,"Path.link_to()")],-1),C=n("tr",null,[n("td",null,"将此路径创建为符号链接"),n("td",null,"os.symlink()"),n("td",null,"Path.symlink_to()")],-1),N=n("tr",null,[n("td",null,"返回符号链接所指向的路径"),n("td",null,"os.readlink()"),n("td",null,"Path.readlink()")],-1),S=n("tr",null,[n("td",null,"返回 os.stat_result 对象包含此路径信息"),n("td",null,"os.stat()"),n("td",null,"Path.stat(), Path.owner(), Path.group()")],-1),L=n("tr",null,[n("td",null,"是否为绝对路径"),n("td",null,"os.path.isabs()"),n("td",null,"PurePath.is_absolute()")],-1),O=n("tr",null,[n("td",null,"连接路径"),n("td",null,"os.path.join()"),n("td",null,"PurePath.joinpath()")],-1),V=n("td",null,"文件名或目录名",-1),B=n("td",null,"os.path.basename()",-1),A={href:"http://PurePath.name",target:"_blank",rel:"noopener noreferrer"},I=n("tr",null,[n("td",null,"父目录"),n("td",null,"os.path.dirname()"),n("td",null,"PurePath.parent")],-1),K=n("tr",null,[n("td",null,"是否相同文件"),n("td",null,"os.path.samefile()"),n("td",null,"Path.samefile()")],-1),D=n("tr",null,[n("td",null,"文件名后缀"),n("td",null,"os.path.splitext()"),n("td",null,"PurePath.suffix")],-1),R=n("tr",null,[n("td",null,"移动文件"),n("td",null,"shutil.move()"),n("td",null,"Path.rename()")],-1),X=n("blockquote",null,[n("p",null,"更多内容和细节请参考官方文档~")],-1),G=n("h2",{id:"参考文献",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文献","aria-hidden":"true"},"#"),s(" 参考文献")],-1),H={href:"https://docs.python.org/zh-cn/3.11/library/pathlib.html",target:"_blank",rel:"noopener noreferrer"},J=n("br",null,null,-1),M={href:"https://stackoverflow.com/questions/2104080/how-do-i-check-file-size-in-python",target:"_blank",rel:"noopener noreferrer"},Q=n("br",null,null,-1),Y={href:"https://docs.python.org/zh-cn/3/library/os.path.html",target:"_blank",rel:"noopener noreferrer"},Z=n("br",null,null,-1),$={href:"https://docs.python.org/zh-cn/3/library/shutil.html",target:"_blank",rel:"noopener noreferrer"},nn=n("br",null,null,-1),sn={href:"https://docs.python.org/zh-cn/3/library/os.html",target:"_blank",rel:"noopener noreferrer"},an=n("br",null,null,-1),tn={href:"https://switowski.com/blog/pathlib/",target:"_blank",rel:"noopener noreferrer"},en=n("br",null,null,-1),pn={href:"https://betterprogramming.pub/should-you-be-using-pathlib-6f3a0fddec7e",target:"_blank",rel:"noopener noreferrer"},on=n("br",null,null,-1),ln={href:"https://peps.python.org/pep-0428/",target:"_blank",rel:"noopener noreferrer"},cn=n("br",null,null,-1),un={href:"https://realpython.com/python-pathlib/",target:"_blank",rel:"noopener noreferrer"};function dn(rn,kn){const a=o("ExternalLinkIcon");return i(),l("div",null,[d,n("h3",r,[k,s(" 文件名或目录名 "),n("a",m,[s("Path.name"),t(a)])]),v,n("table",null,[h,n("tbody",null,[b,_,g,y,f,w,q,x,P,F,T,U,j,E,z,W,C,N,S,L,O,n("tr",null,[V,B,n("td",null,[n("a",A,[s("PurePath.name"),t(a)])])]),I,K,D,R])]),X,G,n("blockquote",null,[n("p",null,[n("a",H,[s("https://docs.python.org/zh-cn/3.11/library/pathlib.html"),t(a)]),J,n("a",M,[s("https://stackoverflow.com/questions/2104080/how-do-i-check-file-size-in-python"),t(a)]),Q,n("a",Y,[s("https://docs.python.org/zh-cn/3/library/os.path.html"),t(a)]),Z,n("a",$,[s("https://docs.python.org/zh-cn/3/library/shutil.html"),t(a)]),nn,n("a",sn,[s("https://docs.python.org/zh-cn/3/library/os.html"),t(a)]),an,n("a",tn,[s("https://switowski.com/blog/pathlib/"),t(a)]),en,n("a",pn,[s("https://betterprogramming.pub/should-you-be-using-pathlib-6f3a0fddec7e"),t(a)]),on,n("a",ln,[s("https://peps.python.org/pep-0428/"),t(a)]),cn,n("a",un,[s("https://realpython.com/python-pathlib/"),t(a)])])])])}const hn=p(u,[["render",dn],["__file","更好的文件路径处理模块_pathlib详解 copy.html.vue"]]);export{hn as default};
