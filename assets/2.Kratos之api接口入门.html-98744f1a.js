import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as t,a as e,b as i,e as s,f as a}from"./app-6d12f651.js";const c={},v=e("p",null,[e("strong",null,"推荐语"),i(),e("code",null,"CIT中国"),i("的Kratos教程")],-1),o=e("br",null,null,-1),u=e("strong",null,"原文地址：",-1),m={href:"https://mp.weixin.qq.com/s/Nek9jwY-rFaN8TNw1tMhLA",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="学习目标" tabindex="-1"><a class="header-anchor" href="#学习目标" aria-hidden="true">#</a> 学习目标</h2><p>在上一节，我们初始化了一个helloword项目并成功访问 <em>localhost:8000/helloworld/{name}</em> 接口，这章我们来学习下如何自己<code>写一个接口并且访问数据库</code>。</p><h2 id="定义-api-生成文档、代码" tabindex="-1"><a class="header-anchor" href="#定义-api-生成文档、代码" aria-hidden="true">#</a> 定义 API ，生成文档、代码</h2><p>API 与用户的通信协议，通常是 REST API 和 RPC API 作为传输层协议，而 Kratos 主要参考 Google API 指南，实现了对应通信协议支持，并且遵守了 gRPC API 使用 HTTP 映射功能进行 JSON/HTTP 的支持。也就是通过定义 proto 即可使用 REST API 和 RPC API，通过类似 Google API 的仓库方式进行 API Schema 的管理。</p><p>我们打开 api 目录 ，打开 <code>api/agent/v1/agent.proto </code>文件。</p><figure><img src="https://secure2.wostatic.cn/static/gAbYhj37uyg4mhxdzwdaXa/image.png?auth_key=1688807055-cwarcRffzEhGT6Be7DrNtt-0-81188a90b7cc9c602d16fed6393d23a3" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上面使用了 proto 来定义 api ，如果你没接触过 proto 语法也没事，我来讲解一下。</p><p>图片上 <code>agent.proto</code> 文件是我们用来定义接口的，我们看下 <code>CreateAgent</code> 这个 rpc 函数，该函数接收 <code>CreateAgentRequest</code> 结构体，返回 <code>CreateAgentReply</code> 结构体。</p><p>我们引用了*<code>google/api/annotations.proto</code>*<code></code>这个 grpc 插件，<code>它能够通过写注释的方式来生成 http 相关的代码</code>，比如帮我们把前端传过来的参数解析到结构体 <code>CreateAgentRequest</code> 上，帮我们注册路由等。</p><p>我们来看下 gprc 插件 <code>google.api.http</code> 中我们能定义的成员：</p><div class="language-Protocol line-numbers-mode" data-ext="Protocol"><pre class="language-Protocol"><code>extend google.protobuf.MethodOptions {
  // See \`HttpRule\`.
  HttpRule http = 72295728;
}

message HttpRule {

  // Determines the URL pattern is matched by this rules. This pattern can be
  // used with any of the {get|put|post|delete|patch} methods. A custom method
  // can be defined using the &#39;custom&#39; field.
  oneof pattern {
    // Maps to HTTP GET. Used for listing and getting information about
    // resources.
    string get = 2;

    // Maps to HTTP PUT. Used for replacing a resource.
    string put = 3;

    // Maps to HTTP POST. Used for creating a resource or performing an action.
    string post = 4;

    // Maps to HTTP DELETE. Used for deleting a resource.
    string delete = 5;

    // Maps to HTTP PATCH. Used for updating a resource.
    string patch = 6;
  }

  // The name of the request field whose value is mapped to the HTTP request
  // body, or \`*\` for mapping all request fields not captured by the path
  // pattern to the HTTP body, or omitted for not having any HTTP request body.
  //
  // NOTE: the referred field must be present at the top-level of the request
  // message type.
  string body = 7;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以定义 http 方法，url，如果我们需要使用 post 方法并绑定参数，我们可以这样写：</p><div class="language-Protocol line-numbers-mode" data-ext="Protocol"><pre class="language-Protocol"><code>rpc Login (LoginRequest) returns (LoginResponse) {
        option (google.api.http) = {
            post: &quot;/account/login&quot;
            body: &quot;*&quot;
        };
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成openapi【接口文档】" tabindex="-1"><a class="header-anchor" href="#生成openapi【接口文档】" aria-hidden="true">#</a> 生成OpenAPi【接口文档】</h3><p>OpenAPI 文档是一份可交付的技术内容，其中包含了如何使用和集成 API 的说明，OpenAPI 文档中，包含了集成 OpenAPI 所需的完整信息，如请求参数，返回参数等。在实际的项目开发过程中，对于程序员来说，OpenAPI 文档是再熟悉不过的东西，大多数开发团队中，只要涉及到前后端交互，OpenAPI 文档就会作为沟通前后端开发的桥梁，所以需要一个简单，高效，便捷的 OpenAPI 文档生成工具。</p><p>kratos 已经帮我们安装好了OpenAPI插件，我们只需要在根目录执行在根目录运行 <code>make api</code></p><p>成功执行上述命令后，会生成 openapi.yaml 文件。您可以将其导入到支持 OpenAPI 规范以供浏览的任何平台中，例如 apifox</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code># Generated with protoc-gen-openapi
# https://github.com/google/gnostic/tree/master/apps/protoc-gen-openapi

openapi: 3.0.3
info:
    title: Greeter
    description: The greeting service definition.
    version: 0.0.1
paths:
    /helloworld/{name}:
        get:
            summary: Sends a greeting
            operationId: Greeter_SayHello
            parameters:
                - name: name
                  in: query
                  schema:
                    type: string
            responses:
                &quot;200&quot;:
                    description: OK
                    content:
                        application/json:
                            schema:
                                $ref: &#39;#/components/schemas/HelloReply&#39;
components:
    schemas:
        HelloReply:
            properties:
                message:
                    type: string
            description: The response message containing the greetings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成go代码【-】" tabindex="-1"><a class="header-anchor" href="#生成go代码【-】" aria-hidden="true">#</a> 生成go代码【*】</h3><p>使用生成代码的方式来统一团队代码风格以及提高开发效率，执行上述命令，命令执行完后就能看到目录生成了多个 go 源文件：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code># 生成 proto 模板
kratos proto add api/agent/v1/agent.proto
# 生成 client 源码
kratos proto client api/agent/v1/agent.proto
# 生成 server 源码
kratos proto server  api/agent/v1/agent.proto -t internal/service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除示例代码" tabindex="-1"><a class="header-anchor" href="#删除示例代码" aria-hidden="true">#</a> 删除示例代码</h3><p>由于我们是使用 wire 来自动生成构造函数，因此我们想要将原来的 helloword api service 替换成 agent 需要修改点代码。</p><ol><li>service 目录下 service.go</li></ol><p>修改 internal/service/service.go 里依赖注入部分:</p><figure><img src="https://secure2.wostatic.cn/static/b6qLyuvVhP5fHAYB9MJEpk/image.png?auth_key=1688807470-8YntQou4wNCNwb2neeCDcV-0-0e939ea742a99a19e032cfd97c0e8fd0" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>在 internal/server 目录下，修改 http.go, grpc.go</li></ol><figure><img src="https://secure2.wostatic.cn/static/w6DSUUunpYC65XkymC6ue6/image.png?auth_key=1688807505-qBscBbq9LFNSFE9cNXqwcn-0-f08231d2153e74d32ecc89407e288e3f" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://secure2.wostatic.cn/static/jW7FPSVn4JYHLJh2ShGiQV/image.png?auth_key=1688807532-8DDHAKtrAVRuGi7cqprNzj-0-f6dc68d1896fa4880ff4f60794333adf" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>执行 <code>make all</code> , 有地方报错的话再修改下细节，如果你还不清楚的话，可以看下代码仓库中的提交历史记录。</li></ol><h2 id="接入-orm" tabindex="-1"><a class="header-anchor" href="#接入-orm" aria-hidden="true">#</a> 接入 ORM</h2><h3 id="什么是-orm" tabindex="-1"><a class="header-anchor" href="#什么是-orm" aria-hidden="true">#</a> 什么是 ORM？</h3><p>面向对象编程和关系型数据库，都是目前最流行的技术，但是它们的模型是不一样的。</p><p>面向对象编程把所有实体看成对象（object），关系型数据库则是采用实体之间的关系（relation）连接数据。很早就有人提出，关系也可以用对象表达，这样的话，就能使用面向对象编程，来操作关系型数据库。</p><p>简单说，ORM 就是通过实例对象的语法，完成关系型数据库的操作的技术，是&quot;对象-关系映射&quot;（Object/Relational Mapping） 的缩写。</p><p>ORM 把数据库映射成对象。</p><ul><li>数据库的表（table） --&gt; 类（class）</li><li>记录（record，行数据）--&gt; 对象（object）</li><li>字段（field）--&gt; 对象的属性（attribute） 举例来说，下面是一行 SQL 语句。</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT id, first_name, last_name, phone, birth_date, sex
FROM persons
WHERE id = 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序直接运行 SQL，操作数据库的写法如下。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT id, first_name, last_name, phone, birth_date, sex
FROM persons
WHERE id = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改成 ORM 的写法如下。</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>p = Person.get(10);
name = p.first_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一比较就可以发现，ORM 使用对象，封装了数据库操作，因此可以不碰 SQL 语言。开发者只使用面向对象编程，与数据对象直接交互，不用关心底层数据库。</p><p>ORM 有下面这些优点:</p><ul><li>数据模型都在一个地方定义，更容易更新和维护，也利于重用代码。</li><li>ORM 有现成的工具，很多功能都可以自动完成，比如数据消毒、预处理、事务等等。</li><li>它迫使你使用 MVC 架构，ORM 就是天然的 Model，最终使代码更清晰。</li><li>基于 ORM 的业务代码比较简单，代码量少，语义性好，容易理解。</li><li>你不必编写性能不佳的 SQL。</li></ul><p>ORM 也有很突出的缺点：</p><ul><li>ORM 库不是轻量级工具，需要花很多精力学习和设置。</li><li>对于复杂的查询，ORM 要么是无法表达，要么是性能不如原生的 SQL。</li><li>ORM 抽象掉了数据库层，开发者无法了解底层的数据库操作，也无法定制一些特殊的 SQL。</li></ul><h3 id="什么是-ent" tabindex="-1"><a class="header-anchor" href="#什么是-ent" aria-hidden="true">#</a> 什么是 ent</h3><p>ent 是 Facebook 开源的一个 ORM 框架，其结合 Facebook 的业务风格而诞生，比较新颖地使用节点和线条构建出数据流图来表示数据库中字段、表、之间的关系，现在已经被 Facebook 用在了生产环境(虽然 GitHub 上说该项目是 experimental 的),概括来说具有以下特色：</p><ul><li><code>图就是代码</code> - 将任何数据库表建模为 Go 对象。 轻松地遍历任何图形 - 可以轻松地运行查询、聚合和遍历任何图形结构。 静态类型和显式 API - 使用代码生成静态类型和显式 API，查询数据更加便捷。 多存储驱动程序 - 支持 MySQL、PostgreSQL、SQLite 和 Gremlin。</li><li><code>可扩展</code>- 简单地扩展和使用 Go 模板自定义。</li></ul><h3 id="安装脚手架工具entc" tabindex="-1"><a class="header-anchor" href="#安装脚手架工具entc" aria-hidden="true">#</a> 安装脚手架工具<code>entc</code></h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>go install entgo.io/ent/cmd/ent@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建实体" tabindex="-1"><a class="header-anchor" href="#创建实体" aria-hidden="true">#</a> 创建实体</h3><p>schema 相当于数据库的表，有两种方法可以实现：</p><h3 id="使用-ent-init-生成" tabindex="-1"><a class="header-anchor" href="#使用-ent-init-生成" aria-hidden="true">#</a> 使用 ent init 生成</h3><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>ent init User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将会在 {当前目录}/ent/schema/ 下生成一个user.go文件:</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>package schema

import &quot;entgo.io/ent&quot;

// User holds the schema definition for the User entity.
type User struct {
    ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {
    return nil
}

// Edges of the User.
func (User) Edges() []ent.Edge {
    return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-转换工具" tabindex="-1"><a class="header-anchor" href="#sql-转换工具" aria-hidden="true">#</a> sql 转换工具</h3><p>网上有人好心的制作了一个工具，可以将 SQL 转换成 schema 代码，非常方便！</p>`,60),p={href:"https://printlove.cn/tools/sql2ent",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>比如我们有一个创建表的 SQL</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE TABLE \`user\`  (
\`id\` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
\`email\` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
\`type\` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
\`created_at\` timestamp NULL DEFAULT NULL,
\`updated_at\` timestamp NULL DEFAULT NULL,
PRIMARY KEY (\`id\`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = DYNAMIC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换之后，生成如下代码：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>package schema

import (
 &quot;entgo.io/ent&quot;
 &quot;entgo.io/ent/dialect&quot;
 &quot;entgo.io/ent/schema/field&quot;
)

// User holds the schema definition for the User entity.
type User struct {
 ent.Schema
}

// Fields of the User.
func (User) Fields() []ent.Field {

 return []ent.Field{

  field.Int32(&quot;id&quot;).SchemaType(map[string]string{
   dialect.MySQL: &quot;int(10)UNSIGNED&quot;, // Override MySQL.
  }).NonNegative().Unique(),

  field.String(&quot;email&quot;).SchemaType(map[string]string{
   dialect.MySQL: &quot;varchar(50)&quot;, // Override MySQL.
  }),

  field.String(&quot;type&quot;).SchemaType(map[string]string{
   dialect.MySQL: &quot;varchar(20)&quot;, // Override MySQL.
  }),

  field.Time(&quot;created_at&quot;).SchemaType(map[string]string{
   dialect.MySQL: &quot;timestamp&quot;, // Override MySQL.
  }).Optional(),

  field.Time(&quot;updated_at&quot;).SchemaType(map[string]string{
   dialect.MySQL: &quot;timestamp&quot;, // Override MySQL.
  }).Optional(),
 }

}

// Edges of the User.
func (User) Edges() []ent.Edge {
 return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码" aria-hidden="true">#</a> 生成代码</h3><p>有了以上的 Schema，我们就可以生成代码了。</p><p>我们命令行进入 ent 的上一层文件夹，然后执行以下命令：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>ent generate ./ent/schema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是用命令行的方式其实是很不方便的，主要是有时候需要带一些特殊的参数，比如：--feature sql/modifier，这就很麻烦了。但好在 go 有一个很赞的特性go:generate，我们可以在 ent 文件夹下面创建一个generate.go文件：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>package ent

//go:generate go run -mod=mod entgo.io/ent/cmd/ent generate --feature privacy --feature sql/modifier --feature entql --feature sql/upsert ./schema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着我们可以在项目的根目录下运行命令执行整个项目的go:generate：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>go generate ./...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者指定执行这一个generate.go文件：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>go generate ./ent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自此所有的预备工作就做好了。</p><h3 id="ent-的一些数据库基本操作" tabindex="-1"><a class="header-anchor" href="#ent-的一些数据库基本操作" aria-hidden="true">#</a> ent 的一些数据库基本操作</h3><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 增
pedro := client.Pet.    // PetClient.
    Create().           // Pet create builder.
    SetName(&quot;pedro&quot;).   // Set field value.
    SetOwner(a8m).      // Set owner (unique edge).
    SaveX(ctx)          // Create and return.

// 删
err := client.User.
    DeleteOneID(id).
    Exec(ctx)

// 查
names, err := client.Pet.
    Query().
    Select(pet.FieldName).
    Strings(ctx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合进-kratos" tabindex="-1"><a class="header-anchor" href="#整合进-kratos" aria-hidden="true">#</a> 整合进 kratos</h2><p>官方推荐的包结构是这样的：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>|- data
|- biz
|- service
|- server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，我们可以把 ent 放进 data 文件夹下面去：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>|- data
| |- ent
|- biz
|- service
|- server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据库客户端" tabindex="-1"><a class="header-anchor" href="#创建数据库客户端" aria-hidden="true">#</a> 创建数据库客户端</h3><p>接着在 data.go 文件中添加创建数据库客户端的代码，使用 <strong>wire</strong> 将之注入到ProviderSet：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// ProviderSet is data providers.
var ProviderSet = wire.NewSet(
    NewEntClient,
    ...
)

// Data .
type Data struct {
    db  *ent.Client
}

// NewEntClient 创建数据库客户端
func NewEntClient(conf *conf.Data, logger log.Logger) *ent.Client {
 l := log.NewHelper(log.With(logger, &quot;module&quot;, &quot;ent/data&quot;))

 client, err := ent.Open(
  conf.Database.Driver,
  conf.Database.Source,
 )
 if err != nil {
  l.Fatalf(&quot;failed opening connection to db: %v&quot;, err)
 }
 // 运行数据库迁移工具
 if true {
  if err := client.Schema.Create(context.Background(), migrate.WithForeignKeys(false)); err != nil {
   l.Fatalf(&quot;failed creating schema resources: %v&quot;, err)
  }
 }
 return client
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要说明的是数据库迁移工具，如果数据库中不存在表，迁移工具会创建一个；如果字段存在改变，迁移工具会对字段进行修改。</p><h3 id="创建-usecase" tabindex="-1"><a class="header-anchor" href="#创建-usecase" aria-hidden="true">#</a> 创建 UseCase</h3><p>在 biz 文件夹下创建user.go：</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>package biz

type UserRepo interface {
 List(ctx context.Context, req *pagination.PagingRequest) (*v1.ListUserResponse, error)
 Get(ctx context.Context, req *v1.GetUserRequest) (*v1.User, error)
 Create(ctx context.Context, req *v1.CreateUserRequest) (*v1.User, error)
 Update(ctx context.Context, req *v1.UpdateUserRequest) (*v1.User, error)
 Delete(ctx context.Context, req *v1.DeleteUserRequest) (bool, error)
}

type UserUseCase struct {
 repo UserRepo
 log  *log.Helper
}

func NewUserUseCase(repo UserRepo, logger log.Logger) *UserUseCase {
 l := log.NewHelper(log.With(logger, &quot;module&quot;, &quot;user/usecase&quot;))
 return &amp;UserUseCase{repo: repo, log: l}
}

func (uc *UserUseCase) List(ctx context.Context, req *pagination.PagingRequest) (*v1.ListUserResponse, error) {
 return uc.repo.ListUser(ctx, req)
}

func (uc *UserUseCase) Get(ctx context.Context, req *v1.GetUserRequest) (*v1.User, error) {
 return uc.repo.GetUser(ctx, req)
}

func (uc *UserUseCase) Create(ctx context.Context, req *v1.CreateUserRequest) (*v1.User, error) {
 return uc.repo.CreateUser(ctx, req)
}

func (uc *UserUseCase) Update(ctx context.Context, req *v1.UpdateUserRequest) (*v1.User, error) {
 return uc.repo.UpdateUser(ctx, req)
}

func (uc *UserUseCase) Delete(ctx context.Context, req *v1.DeleteUserRequest) (bool, error) {
 return uc.repo.DeleteUser(ctx, req)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入到biz.ProviderSet</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// ProviderSet is biz providers.
var ProviderSet = wire.NewSet(
    NewUserUseCase,
    ...
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-repo" tabindex="-1"><a class="header-anchor" href="#创建-repo" aria-hidden="true">#</a> 创建 repo</h3><p>在 data 文件夹下创建user.go文件，实际操作数据库客户端的操作都在此做。</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>package data

var _ biz.UserRepo = (*UserRepo)(nil)

type UserRepo struct {
 data *Data
 log  *log.Helper
}

func NewUserRepo(data *Data, logger log.Logger) biz.UserRepo {
 l := log.NewHelper(log.With(logger, &quot;module&quot;, &quot;User/repo&quot;))
 return &amp;UserRepo{
  data: data,
  log:  l,
 }
}

func (r *userRepo) Delete(ctx context.Context, req *v1.DeleteUserRequest) (bool, error) {
 err := r.data.db.User.
  DeleteOneID(req.GetId()).
  Exec(ctx)
 return err != nil, err
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入到data.ProviderSet</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// ProviderSet is data providers.
var ProviderSet = wire.NewSet(
    NewUserRepo,
    ...
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><p>修改 configs/config.yaml ，保障mysql能连接上。</p><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>server:
  http:
    addr: 0.0.0.0:8000
    timeout: 1s
  grpc:
    addr: 0.0.0.0:9000
    timeout: 1s
data:
  database:
    driver: mysql
    source: root:root@tcp(127.0.0.1:3306)/shop_user?charset=utf8mb4&amp;parseTime=True&amp;loc=Local
  redis:
    addr: 127.0.0.1:6379
    dial_timeout: 1s
    read_timeout: 0.2s
    write_timeout: 0.2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wire" tabindex="-1"><a class="header-anchor" href="#wire" aria-hidden="true">#</a> wire</h3><p>Wire 是一个灵活的依赖注入工具，通过自动生成代码的方式在编译期完成依赖注入。</p><p>在各个组件之间的依赖关系中，通常鼓励显式初始化，而不是全局变量传递。</p><p>所以通过 Wire 进行初始化代码，可以很好地解决组件之间的耦合，以及提高代码维护性。</p><h4 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h4><p>Wire 具有两个基本概念：Provider 和 Injector。</p><p>Provider 是一个普通的 Go Func ，这个方法也可以接收其它 Provider 的返回值，从而形成了依赖注入；</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 提供一个配置文件（也可能是配置文件）
func NewConfig() *conf.Data {...}

// 提供数据组件，依赖了数据配置（初始化 Database、Cache 等）
func NewData(c *conf.Data) (*Data, error) {...}

// 提供持久化组件，依赖数据组件（实现 CURD 持久化层）
func NewUserRepo(d *data.Data) (*UserRepo, error) {...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h4><p>在 Kratos 中，主要分为 server、service、biz、data 服务模块，会通过 Wire 进行模块顺序的初始化；</p><figure><img src="https://secure2.wostatic.cn/static/gVTsDmN2RbpHZNUUiwkUXV/image.png?auth_key=1688808396-skaePwFLp3Z6DRaoK1QGcZ-0-357b9e7cb633672327dbee860ddee6f3" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在每个模块中，只需要一个 ProviderSet 提供者集合，就可以在 wire 中进行依赖注入；</p><p>并且我们在每个组件提供入口即可，不需要其它依赖，例如：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>-data
--data.go    // var ProviderSet = wire.NewSet(NewData, NewGreeterRepo)
--greeter.go // func NewGreeterRepo(data *Data, logger log.Logger) biz.GreeterRepo {...}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过 wire.go 中定义所有 ProviderSet 可以完成依赖注入配置。</p><h4 id="初始化组件" tabindex="-1"><a class="header-anchor" href="#初始化组件" aria-hidden="true">#</a> 初始化组件</h4><p>通过 wire 初始化组件，需要定义对应的 wire.go，以及 kratos application 用于启动管理。</p><div class="language-Go line-numbers-mode" data-ext="Go"><pre class="language-Go"><code>// 应用程序入口
cmd
-main.go
-wire.go
-wire_gen.go

// main.go 创建 kratos 应用生命周期管理
func newApp(logger log.Logger, hs *http.Server, gs *grpc.Server, greeter *service.GreeterService) *kratos.App {
    pb.RegisterGreeterServer(gs, greeter)
    pb.RegisterGreeterHTTPServer(hs, greeter)
    return kratos.New(
        kratos.Name(Name),
        kratos.Version(Version),
        kratos.Logger(logger),
        kratos.Server(
            hs,
            gs,
        ),
    )
}

// wire.go 初始化模块
func initApp(*conf.Server, *conf.Data, log.Logger) (*kratos.App, error) {
    // 构建所有模块中的 ProviderSet，用于生成 wire_gen.go 自动依赖注入文件
    panic(wire.Build(server.ProviderSet, data.ProviderSet, biz.ProviderSet, service.ProviderSet, newApp))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目的 main 目录中，运行 <code>make all</code> 进行生成编译期依赖注入代码：</p><h2 id="课后实践" tabindex="-1"><a class="header-anchor" href="#课后实践" aria-hidden="true">#</a> 课后实践</h2><ul><li>下载示例代码切换到对应 commit</li><li>运行 <code>make all</code></li><li>运行 <code>kratos run</code></li><li>访问接口</li><li>查看数据库是否变更</li></ul><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,61),h={href:"https://github.com/mouuii/kratos-tutorial",target:"_blank",rel:"noopener noreferrer"},f={href:"https://go.dev/blog/wire",target:"_blank",rel:"noopener noreferrer"},x={href:"https://entgo.io/docs/getting-started/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://mp.weixin.qq.com/s/73uUa65GBEokYcEk-5aO4Q",target:"_blank",rel:"noopener noreferrer"},S={href:"https://cloud.google.com/apis/design",target:"_blank",rel:"noopener noreferrer"},_={href:"https://go-kratos.dev/docs/guide/api-protobuf/",target:"_blank",rel:"noopener noreferrer"};function L(R,P){const n=d("ExternalLinkIcon");return l(),t("div",null,[e("blockquote",null,[v,o,e("p",null,[u,i(),e("a",m,[i("https://mp.weixin.qq.com/s/Nek9jwY-rFaN8TNw1tMhLA"),s(n)])])]),b,e("p",null,[i("SQL 转 Schema 工具： "),e("a",p,[i("https://printlove.cn/tools/sql2ent"),s(n)])]),g,e("ul",null,[e("li",null,[i("示例代码： "),e("a",h,[i("https://github.com/mouuii/kratos-tutorial"),s(n)]),i("  (commit: ae3560)")]),e("li",null,[i("wire："),e("a",f,[i("https://go.dev/blog/wire"),s(n)])]),e("li",null,[i("ent："),e("a",x,[i("https://entgo.io/docs/getting-started/"),s(n)])]),e("li",null,[i("grpc、proto: "),e("a",q,[i("https://grpc.io/"),s(n)])]),e("li",null,[i("公众号："),e("a",U,[i("https://mp.weixin.qq.com/s/73uUa65GBEokYcEk-5aO4Q"),s(n)])]),e("li",null,[i("api定义："),e("a",S,[i("https://cloud.google.com/apis/design"),s(n)])]),e("li",null,[i("proto规范："),e("a",_,[i("https://go-kratos.dev/docs/guide/api-protobuf/"),s(n)])])])])}const C=r(c,[["render",L],["__file","2.Kratos之api接口入门.html.vue"]]);export{C as default};
