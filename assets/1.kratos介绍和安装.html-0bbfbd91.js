import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as i,a as n,b as s,e as p,f as l}from"./app-d263494b.js";const c="/assets/protobuf-f1e9e28d.png",u="/assets/访问接口-4add22bb.png",r={},d=n("p",null,[n("strong",null,"推荐语"),s(),n("code",null,"CIT中国"),s("的Kratos教程")],-1),k=n("br",null,null,-1),v=n("strong",null,"原文地址：",-1),m={href:"https://mp.weixin.qq.com/s/opeCRUm92YaGIYHTM0qj6w",target:"_blank",rel:"noopener noreferrer"},b=l('<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Kratos是一个Go语言编写的开源微服务框架，由Bilibili公司开发并开源。Kratos的目的是帮助开发者更加高效地构建大规模的、稳定的、高性能的微服务。</p><p>微服务开发目前有两种方式：</p><ul><li>微服务框架</li><li>服务网格</li></ul><p>Kratos 无疑是微服务框架中的王者，其对于微服务的支持是传统 web框架如 gin 远远不能企及的！</p><p>整套 Kratos 框架也是不错的学习仓库，可以了解和参考到微服务方面的技术积累和经验。</p><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><ul><li>APIs：协议通信以 HTTP/gRPC 为基础，通过 Protobuf 进行定义；</li><li>Errors：通过 Protobuf 的 Enum 作为错误码定义，以及工具生成判定接口；</li><li>Metadata：在协议通信 HTTP/gRPC 中，通过 Middleware 规范化服务元信息传递；</li><li>Config：支持多数据源方式，进行配置合并铺平，通过 Atomic 方式支持动态配置；</li><li>Logger：标准日志接口，可方便集成三方 log 库，并可通过 fluentd 收集日志；</li><li>Metrics：统一指标接口，可以实现各种指标系统，默认集成 Prometheus；</li><li>Tracing：遵循 OpenTelemetry 规范定义，以实现微服务链路追踪；</li><li>Encoding：支持 Accept 和 Content-Type 进行自动选择内容编码；</li><li>Transport：通用的 HTTP/gRPC 传输层，实现统一的 Middleware 插件支持；</li><li>Registry：实现统一注册中心接口，可插件化对接各种注册中心；</li></ul><h3 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h3><p>我们先简单的选几个方面来一瞥 kratos 框架的设计思想，你不需要现在立刻就掌握，只需要有个大概印象，后面我们会对每个模块做具体分析。</p><h4 id="protobuf【核心理论基础】" tabindex="-1"><a class="header-anchor" href="#protobuf【核心理论基础】" aria-hidden="true">#</a> Protobuf【核心理论基础】</h4><p>Protobuf，全名是<code>Protocol Buffers</code>，是一种轻便且高效的结构化数据存储格式，由Google开发。Protobuf 可以用于序列化结构化数据，比如XML、JSON等，但是它更小、更快、也更简单。使用 Protobuf 需要定义数据结构，这些数据结构以 <code>.proto</code>文件形式保存。您可以编写插件来根据<code>.proto </code>文件来生成任何语言的任何代码，可以说 <code>Protobuf 是kratos v2的理论基础</code>。</p><p>kratos 的设计思想就是通过 Protobuf 来支持高度自由的定制化，通过插件来实现高度可拔插的微服务框架，企业在开发时可以选择框架已经提供的插件实现，也可以自己定制插件。</p><p>例如API定义、gRPC Service、HTTP Service、请求参数校验、错误定义、Swagger API json、应用配置模版等都是基于 Protobuf IDL 来构建的。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="transport-http-grpc" tabindex="-1"><a class="header-anchor" href="#transport-http-grpc" aria-hidden="true">#</a> Transport HTTP/gRPC</h4><p>kratos 框架对传输层进行了抽象，框架默认实现了 gRPC 和 HTTP 两种通信协议传输层。Transport 主要的接口：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 服务的启动和停止，用于管理服务生命周期。</span>
<span class="token keyword">type</span> Server <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">Start</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span>
 <span class="token function">Stop</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token comment">// 用于实现注册到注册中心的终端地址</span>
<span class="token comment">// 如果不实现这个方法则不会注册到注册中心</span>
<span class="token keyword">type</span> Endpointer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">Endpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>url<span class="token punctuation">.</span>URL<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 请求头的元数据</span>
<span class="token keyword">type</span> Header <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">Get</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
 <span class="token function">Set</span><span class="token punctuation">(</span>key <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token builtin">string</span><span class="token punctuation">)</span>
 <span class="token function">Keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// Transporter is transport context value interface.</span>
<span class="token keyword">type</span> Transporter <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token comment">// 代表实现的通讯协议的类型。</span>
 <span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Kind
 <span class="token comment">// 提供的服务终端地址。</span>
 <span class="token function">Endpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
 <span class="token comment">// 用于标识服务的方法路径</span>
 <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>

 <span class="token function">RequestHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Header
  
 <span class="token function">ReplyHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Header
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用生命周期管理" tabindex="-1"><a class="header-anchor" href="#应用生命周期管理" aria-hidden="true">#</a> 应用生命周期管理</h4><p>在 kratos 中，可以通过实现 transport.Server 接口，然后通过 kratos.New 启动器进行管理服务生命周期。启动器主要处理：</p><ul><li>server 生命周期管理</li><li>registry 注册中心管理</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// AppInfo is application context value.</span>
<span class="token keyword">type</span> AppInfo <span class="token keyword">interface</span> <span class="token punctuation">{</span>
 <span class="token function">ID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
 <span class="token function">Name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
 <span class="token function">Version</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
 <span class="token function">Metadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
 <span class="token function">Endpoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h4><p>在 kratos 中，默认通过 proto 定义配置的模板，我们首先在 conf 目录下定义 proto 结构体，然后在 configs 目录下填充数据，框架会替我们实现配置管理，校验，绑定等功能。</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Bootstrap</span> <span class="token punctuation">{</span>
  <span class="token positional-class-name class-name">Server</span> server <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Data</span> data <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Server</span> <span class="token punctuation">{</span>
  <span class="token keyword">message</span> <span class="token class-name">HTTP</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> network <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> addr <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Duration</span> timeout <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">message</span> <span class="token class-name">GRPC</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> network <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> addr <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Duration</span> timeout <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token positional-class-name class-name">HTTP</span> http <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">GRPC</span> grpc <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
  <span class="token keyword">message</span> <span class="token class-name">Database</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> driver <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> source <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">message</span> <span class="token class-name">Redis</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> network <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> addr <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Duration</span> read_timeout <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">google<span class="token punctuation">.</span>protobuf<span class="token punctuation">.</span>Duration</span> write_timeout <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token positional-class-name class-name">Database</span> database <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Redis</span> redis <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
    <span class="token key atrule">addr</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8000</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 1s
  <span class="token key atrule">grpc</span><span class="token punctuation">:</span>
    <span class="token key atrule">addr</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">9000</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 1s
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">source</span><span class="token punctuation">:</span> root<span class="token punctuation">:</span>root@tcp(127.0.0.1<span class="token punctuation">:</span>3306)/test
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token key atrule">read_timeout</span><span class="token punctuation">:</span> 0.2s
    <span class="token key atrule">write_timeout</span><span class="token punctuation">:</span> 0.2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h4><p>在 kratos 日志模块中，主要分为 <code>Logger、Helper、Filter、Valuer </code>的实现。为了方便扩展，Logger 接口定义非常简单,也非常容易组合和扩展：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Logger <span class="token keyword">interface</span> <span class="token punctuation">{</span>
   <span class="token function">Log</span><span class="token punctuation">(</span>level Level<span class="token punctuation">,</span> keyvals <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
<span class="token comment">// 也可以定义多种日志输出 log.MultiLogger(out, err)，例如：info/warn/error，file/agent</span>
logger <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">NewStdLogger</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdout<span class="token punctuation">)</span>å
<span class="token comment">// 根据日志级别进行过虑日志，或者 Key/Value/FilterFunc</span>
logger <span class="token operator">:=</span> log<span class="token punctuation">.</span><span class="token function">NewFilter</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> log<span class="token punctuation">.</span><span class="token function">FilterLevel</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>LevelInfo<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结构化日志</span>
logger<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>LevelInfo<span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;log info&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> middleware</h4><p><code>kratos 内置了一系列的中间件用于处理日志、指标、跟踪链等通用场景。</code>用户也可以通过实现 Middleware 接口，开发自定义 middleware，进行通用的业务处理，比如用户鉴权等。主要的内置中间件：</p><ul><li>recovery:： 用于 recovery panic</li><li>tracing： 用于启用 trace</li><li>logging ：用于请求日志的记录</li><li>metrics： 用于启用 metrics</li><li>validate： 用于处理参数校验</li><li>metadata：用于启用元信息传递 etc...</li></ul><h3 id="ddd文件目录设计" tabindex="-1"><a class="header-anchor" href="#ddd文件目录设计" aria-hidden="true">#</a> DDD文件目录设计</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>  <span class="token punctuation">.</span>
├── Dockerfile
├── LICENSE
├── Makefile
├── README<span class="token punctuation">.</span>md
├── api <span class="token comment">// 下面维护了微服务使用的proto文件以及根据它们所生成的go文件</span>
│   └── helloworld
│       └── v1
│           ├── error_reason<span class="token punctuation">.</span>pb<span class="token punctuation">.</span><span class="token keyword">go</span>
│           ├── error_reason<span class="token punctuation">.</span>proto
│           ├── error_reason<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>json
│           ├── greeter<span class="token punctuation">.</span>pb<span class="token punctuation">.</span><span class="token keyword">go</span>
│           ├── greeter<span class="token punctuation">.</span>proto
│           ├── greeter<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>json
│           ├── greeter_grpc<span class="token punctuation">.</span>pb<span class="token punctuation">.</span><span class="token keyword">go</span>
│           └── greeter_http<span class="token punctuation">.</span>pb<span class="token punctuation">.</span><span class="token keyword">go</span>
├── cmd  <span class="token comment">// 整个项目启动的入口文件</span>
│   └── server
│       ├── main<span class="token punctuation">.</span><span class="token keyword">go</span>
│       ├── wire<span class="token punctuation">.</span><span class="token keyword">go</span>  <span class="token comment">// 我们使用wire来维护依赖注入</span>
│       └── wire_gen<span class="token punctuation">.</span><span class="token keyword">go</span>
├── configs  <span class="token comment">// 这里通常维护一些本地调试用的样例配置文件</span>
│   └── config<span class="token punctuation">.</span>yaml
├── <span class="token keyword">go</span><span class="token punctuation">.</span>mod
├── <span class="token keyword">go</span><span class="token punctuation">.</span>sum
├── internal  <span class="token comment">// 该服务所有不对外暴露的代码，通常的业务逻辑都在这下面，使用internal避免错误引用</span>
│   ├── biz   <span class="token comment">// 业务逻辑的组装层，类似 DDD 的 domain 层，data 类似 DDD 的 repo，repo 接口在这里定义，使用依赖倒置的原则。</span>
│   │   ├── README<span class="token punctuation">.</span>md
│   │   ├── biz<span class="token punctuation">.</span><span class="token keyword">go</span>
│   │   └── greeter<span class="token punctuation">.</span><span class="token keyword">go</span>
│   ├── conf  <span class="token comment">// 内部使用的config的结构定义，使用proto格式生成</span>
│   │   ├── conf<span class="token punctuation">.</span>pb<span class="token punctuation">.</span><span class="token keyword">go</span>
│   │   └── conf<span class="token punctuation">.</span>proto
│   ├── data  <span class="token comment">// 业务数据访问，包含 cache、db 等封装，同时也是 rpc 调用的 acl 防腐层，它实现了 biz 的 repo 接口。我们可能会把 data 与 dao 混淆在一起，data 偏重业务的含义，它所要做的是将领域对象重新拿出来，我们去掉了 DDD 的 infra层。</span>
│   │   ├── README<span class="token punctuation">.</span>md
│   │   ├── data<span class="token punctuation">.</span><span class="token keyword">go</span>
│   │   └── greeter<span class="token punctuation">.</span><span class="token keyword">go</span>
│   ├── server  <span class="token comment">// http和grpc实例的创建和配置</span>
│   │   ├── grpc<span class="token punctuation">.</span><span class="token keyword">go</span>
│   │   ├── http<span class="token punctuation">.</span><span class="token keyword">go</span>
│   │   └── server<span class="token punctuation">.</span><span class="token keyword">go</span>
│   └── service  <span class="token comment">// 实现了 api 定义的服务层，类似 DDD 的 application 层，处理 DTO 到 biz 领域实体的转换(DTO -&gt; DO)，同时协同各类 biz 交互，但是不应处理复杂逻辑</span>
│       ├── README<span class="token punctuation">.</span>md
│       ├── greeter<span class="token punctuation">.</span><span class="token keyword">go</span>
│       └── service<span class="token punctuation">.</span><span class="token keyword">go</span>
└── third_party  <span class="token comment">// api 依赖的第三方proto</span>
    ├── README<span class="token punctuation">.</span>md
    ├── google
    │   └── api
    │       ├── annotations<span class="token punctuation">.</span>proto
    │       ├── http<span class="token punctuation">.</span>proto
    │       └── httpbody<span class="token punctuation">.</span>proto
    └── validate
        ├── README<span class="token punctuation">.</span>md
        └── validate<span class="token punctuation">.</span>proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ol><li>安装 cli 命令行工具</li></ol><p>kratos cli 目前主要用于从模板创建项目，维护依赖包版本等。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/go-kratos/kratos/cmd/kratos/v2@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>通过 cli 创建项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kratos new helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装依赖</li></ol><p>因为kratos依赖了grpc，wire 等先进的生产力工具，所以我们需要先下载这些工具,可以直接使用 make 命令来安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> hellowrold
<span class="token function">make</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># init env</span>
init:
  go <span class="token function">install</span> google.golang.org/protobuf/cmd/protoc-gen-go@latest
  go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
  go <span class="token function">install</span> github.com/go-kratos/kratos/cmd/kratos/v2@latest
  go <span class="token function">install</span> github.com/go-kratos/kratos/cmd/protoc-gen-go-http/v2@latest
  go <span class="token function">install</span> github.com/google/gnostic/cmd/protoc-gen-openapi@latest
  go <span class="token function">install</span> github.com/google/wire/cmd/wire@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>启动项目</li></ol><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token builtin">make</span> all
<span class="token builtin">make</span> build 
<span class="token punctuation">.</span><span class="token operator">/</span>bin<span class="token operator">/</span>helloworld <span class="token operator">-</span>conf<span class="token operator">=</span>configs

<span class="token comment">// 你也可以直接使用 kratos run 来启动项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>访问接口</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>总的来说，Kratos是一个功能丰富、性能高效、可扩展性强的Go微服务框架，适用于构建大规模的分布式系统。试着运行第一个helloworld 微服务吧！</p>',50);function g(h,f){const a=t("ExternalLinkIcon");return o(),i("div",null,[n("blockquote",null,[d,k,n("p",null,[v,s(),n("a",m,[s("https://mp.weixin.qq.com/s/opeCRUm92YaGIYHTM0qj6w"),p(a)])])]),b])}const _=e(r,[["render",g],["__file","1.kratos介绍和安装.html.vue"]]);export{_ as default};
