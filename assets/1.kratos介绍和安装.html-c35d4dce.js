import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as r,a as e,b as i,e as a,f as o}from"./app-6d12f651.js";const v={},t=e("p",null,[e("strong",null,"推荐语"),i(),e("code",null,"CIT中国"),i("的Kratos教程")],-1),c=e("br",null,null,-1),u=e("strong",null,"原文地址：",-1),m={href:"https://mp.weixin.qq.com/s/opeCRUm92YaGIYHTM0qj6w",target:"_blank",rel:"noopener noreferrer"},b=o(`<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>Kratos是一个Go语言编写的开源微服务框架，由Bilibili公司开发并开源。Kratos的目的是帮助开发者更加高效地构建大规模的、稳定的、高性能的微服务。</p><p>微服务开发目前有两种方式：</p><ul><li>微服务框架</li><li>服务网格</li></ul><p>Kratos 无疑是微服务框架中的王者，其对于微服务的支持是传统 web框架如 gin 远远不能企及的！</p><p>整套 Kratos 框架也是不错的学习仓库，可以了解和参考到微服务方面的技术积累和经验。</p><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><ul><li>APIs：协议通信以 HTTP/gRPC 为基础，通过 Protobuf 进行定义；</li><li>Errors：通过 Protobuf 的 Enum 作为错误码定义，以及工具生成判定接口；</li><li>Metadata：在协议通信 HTTP/gRPC 中，通过 Middleware 规范化服务元信息传递；</li><li>Config：支持多数据源方式，进行配置合并铺平，通过 Atomic 方式支持动态配置；</li><li>Logger：标准日志接口，可方便集成三方 log 库，并可通过 fluentd 收集日志；</li><li>Metrics：统一指标接口，可以实现各种指标系统，默认集成 Prometheus；</li><li>Tracing：遵循 OpenTelemetry 规范定义，以实现微服务链路追踪；</li><li>Encoding：支持 Accept 和 Content-Type 进行自动选择内容编码；</li><li>Transport：通用的 HTTP/gRPC 传输层，实现统一的 Middleware 插件支持；</li><li>Registry：实现统一注册中心接口，可插件化对接各种注册中心；</li></ul><h3 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h3><p>我们先简单的选几个方面来一瞥 kratos 框架的设计思想，你不需要现在立刻就掌握，只需要有个大概印象，后面我们会对每个模块做具体分析。</p><h4 id="protobuf【核心理论基础】" tabindex="-1"><a class="header-anchor" href="#protobuf【核心理论基础】" aria-hidden="true">#</a> Protobuf【核心理论基础】</h4><p>Protobuf，全名是<code>Protocol Buffers</code>，是一种轻便且高效的结构化数据存储格式，由Google开发。Protobuf 可以用于序列化结构化数据，比如XML、JSON等，但是它更小、更快、也更简单。使用 Protobuf 需要定义数据结构，这些数据结构以 <code>.proto</code>文件形式保存。您可以编写插件来根据<code>.proto </code>文件来生成任何语言的任何代码，可以说 <code>Protobuf 是kratos v2的理论基础</code>。</p><p>kratos 的设计思想就是通过 Protobuf 来支持高度自由的定制化，通过插件来实现高度可拔插的微服务框架，企业在开发时可以选择框架已经提供的插件实现，也可以自己定制插件。</p><p>例如API定义、gRPC Service、HTTP Service、请求参数校验、错误定义、Swagger API json、应用配置模版等都是基于 Protobuf IDL 来构建的。</p><figure><img src="https://secure2.wostatic.cn/static/tXY5Lf7HPb5uvRkbAkZfQR/image.png?auth_key=1688803500-qHsjZEJgnJ4LS5bg7CsV3c-0-67164ea36a6f43f6144c60ed8b70818e" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="transport-http-grpc" tabindex="-1"><a class="header-anchor" href="#transport-http-grpc" aria-hidden="true">#</a> Transport HTTP/gRPC</h4><p>kratos 框架对传输层进行了抽象，框架默认实现了 gRPC 和 HTTP 两种通信协议传输层。Transport 主要的接口：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 服务的启动和停止，用于管理服务生命周期。
type Server interface {
 Start(context.Context) error
 Stop(context.Context) error
}

// 用于实现注册到注册中心的终端地址
// 如果不实现这个方法则不会注册到注册中心
type Endpointer interface {
 Endpoint() (*url.URL, error)
}

// 请求头的元数据
type Header interface {
 Get(key string) string
 Set(key string, value string)
 Keys() []string
}

// Transporter is transport context value interface.
type Transporter interface {
 // 代表实现的通讯协议的类型。
 Kind() Kind
 // 提供的服务终端地址。
 Endpoint() string
 // 用于标识服务的方法路径
 Operation() string

 RequestHeader() Header
  
 ReplyHeader() Header
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="应用生命周期管理" tabindex="-1"><a class="header-anchor" href="#应用生命周期管理" aria-hidden="true">#</a> 应用生命周期管理</h4><p>在 kratos 中，可以通过实现 transport.Server 接口，然后通过 kratos.New 启动器进行管理服务生命周期。启动器主要处理：</p><ul><li>server 生命周期管理</li><li>registry 注册中心管理</li></ul><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// AppInfo is application context value.
type AppInfo interface {
 ID() string
 Name() string
 Version() string
 Metadata() map[string]string
 Endpoint() []string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h4><p>在 kratos 中，默认通过 proto 定义配置的模板，我们首先在 conf 目录下定义 proto 结构体，然后在 configs 目录下填充数据，框架会替我们实现配置管理，校验，绑定等功能。</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>message Bootstrap {
  Server server = 1;
  Data data = 2;
}

message Server {
  message HTTP {
    string network = 1;
    string addr = 2;
    google.protobuf.Duration timeout = 3;
  }
  message GRPC {
    string network = 1;
    string addr = 2;
    google.protobuf.Duration timeout = 3;
  }
  HTTP http = 1;
  GRPC grpc = 2;
}

message Data {
  message Database {
    string driver = 1;
    string source = 2;
  }
  message Redis {
    string network = 1;
    string addr = 2;
    google.protobuf.Duration read_timeout = 3;
    google.protobuf.Duration write_timeout = 4;
  }
  Database database = 1;
  Redis redis = 2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>server:
  http:
    addr: 0.0.0.0:8000
    timeout: 1s
  grpc:
    addr: 0.0.0.0:9000
    timeout: 1s
data:
  database:
    driver: mysql
    source: root:root@tcp(127.0.0.1:3306)/test
  redis:
    addr: 127.0.0.1:6379
    read_timeout: 0.2s
    write_timeout: 0.2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h4><p>在 kratos 日志模块中，主要分为 <code>Logger、Helper、Filter、Valuer </code>的实现。为了方便扩展，Logger 接口定义非常简单,也非常容易组合和扩展：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>type Logger interface {
   Log(level Level, keyvals ...interface{}) error
}
// 也可以定义多种日志输出 log.MultiLogger(out, err)，例如：info/warn/error，file/agent
logger := log.NewStdLogger(os.Stdout)å
// 根据日志级别进行过虑日志，或者 Key/Value/FilterFunc
logger := log.NewFilter(logger, log.FilterLevel(log.LevelInfo))
// 输出结构化日志
logger.Log(log.LevelInfo, &quot;msg&quot;, &quot;log info&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> middleware</h4><p><code>kratos 内置了一系列的中间件用于处理日志、指标、跟踪链等通用场景。</code>用户也可以通过实现 Middleware 接口，开发自定义 middleware，进行通用的业务处理，比如用户鉴权等。主要的内置中间件：</p><ul><li>recovery:： 用于 recovery panic</li><li>tracing： 用于启用 trace</li><li>logging ：用于请求日志的记录</li><li>metrics： 用于启用 metrics</li><li>validate： 用于处理参数校验</li><li>metadata：用于启用元信息传递 etc...</li></ul><h3 id="ddd文件目录设计" tabindex="-1"><a class="header-anchor" href="#ddd文件目录设计" aria-hidden="true">#</a> DDD文件目录设计</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>  .
├── Dockerfile
├── LICENSE
├── Makefile
├── README.md
├── api // 下面维护了微服务使用的proto文件以及根据它们所生成的go文件
│   └── helloworld
│       └── v1
│           ├── error_reason.pb.go
│           ├── error_reason.proto
│           ├── error_reason.swagger.json
│           ├── greeter.pb.go
│           ├── greeter.proto
│           ├── greeter.swagger.json
│           ├── greeter_grpc.pb.go
│           └── greeter_http.pb.go
├── cmd  // 整个项目启动的入口文件
│   └── server
│       ├── main.go
│       ├── wire.go  // 我们使用wire来维护依赖注入
│       └── wire_gen.go
├── configs  // 这里通常维护一些本地调试用的样例配置文件
│   └── config.yaml
├── go.mod
├── go.sum
├── internal  // 该服务所有不对外暴露的代码，通常的业务逻辑都在这下面，使用internal避免错误引用
│   ├── biz   // 业务逻辑的组装层，类似 DDD 的 domain 层，data 类似 DDD 的 repo，repo 接口在这里定义，使用依赖倒置的原则。
│   │   ├── README.md
│   │   ├── biz.go
│   │   └── greeter.go
│   ├── conf  // 内部使用的config的结构定义，使用proto格式生成
│   │   ├── conf.pb.go
│   │   └── conf.proto
│   ├── data  // 业务数据访问，包含 cache、db 等封装，同时也是 rpc 调用的 acl 防腐层，它实现了 biz 的 repo 接口。我们可能会把 data 与 dao 混淆在一起，data 偏重业务的含义，它所要做的是将领域对象重新拿出来，我们去掉了 DDD 的 infra层。
│   │   ├── README.md
│   │   ├── data.go
│   │   └── greeter.go
│   ├── server  // http和grpc实例的创建和配置
│   │   ├── grpc.go
│   │   ├── http.go
│   │   └── server.go
│   └── service  // 实现了 api 定义的服务层，类似 DDD 的 application 层，处理 DTO 到 biz 领域实体的转换(DTO -&gt; DO)，同时协同各类 biz 交互，但是不应处理复杂逻辑
│       ├── README.md
│       ├── greeter.go
│       └── service.go
└── third_party  // api 依赖的第三方proto
    ├── README.md
    ├── google
    │   └── api
    │       ├── annotations.proto
    │       ├── http.proto
    │       └── httpbody.proto
    └── validate
        ├── README.md
        └── validate.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ol><li>安装 cli 命令行工具</li></ol><p>kratos cli 目前主要用于从模板创建项目，维护依赖包版本等。</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>go install github.com/go-kratos/kratos/cmd/kratos/v2@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>通过 cli 创建项目</li></ol><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>kratos new helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装依赖</li></ol><p>因为kratos依赖了grpc，wire 等先进的生产力工具，所以我们需要先下载这些工具,可以直接使用 make 命令来安装</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>cd hellowrold
make init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code># init env
init:
  go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
  go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
  go install github.com/go-kratos/kratos/cmd/kratos/v2@latest
  go install github.com/go-kratos/kratos/cmd/protoc-gen-go-http/v2@latest
  go install github.com/google/gnostic/cmd/protoc-gen-openapi@latest
  go install github.com/google/wire/cmd/wire@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>启动项目</li></ol><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>make all
make build 
./bin/helloworld -conf=configs

// 你也可以直接使用 kratos run 来启动项目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>访问接口</li></ol><figure><img src="https://secure2.wostatic.cn/static/sQ2b9ugoGUiUkUFmzqVLW7/image.png?auth_key=1688803998-xzFULrJpqqGJJfRYF6RZX5-0-5a5908aaab32ed12e8ae7b87150bbe95" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>总的来说，Kratos是一个功能丰富、性能高效、可扩展性强的Go微服务框架，适用于构建大规模的分布式系统。试着运行第一个helloworld 微服务吧！</p>`,50);function g(p,h){const n=s("ExternalLinkIcon");return d(),r("div",null,[e("blockquote",null,[t,c,e("p",null,[u,i(),e("a",m,[i("https://mp.weixin.qq.com/s/opeCRUm92YaGIYHTM0qj6w"),a(n)])])]),b])}const _=l(v,[["render",g],["__file","1.kratos介绍和安装.html.vue"]]);export{_ as default};
