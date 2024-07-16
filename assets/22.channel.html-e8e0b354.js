const e=JSON.parse('{"key":"v-7dc32d02","path":"/docs/golang/golang-base/22.channel.html","title":"22.channel","lang":"zh-CN","frontmatter":{"title":"22.channel","icon":"book","index":true,"article":false,"description":"前言 在Go语言中，通道（channel）是一种用于在协程之间进行通信的数据结构。通道提供了一种安全、同步的方式，确保在多个协程之间共享数据时不会发生竞态条件。以下是Golang中通道的一些功能特性： 1. 通道的创建：使用make函数可以创建一个通道。 ```go ch := make(chan int) ``` 在这个例子中，ch是一个用于传递整数...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/golang/golang-base/22.channel.html"}],["meta",{"property":"og:site_name","content":"暴走の海鸽"}],["meta",{"property":"og:title","content":"22.channel"}],["meta",{"property":"og:description","content":"前言 在Go语言中，通道（channel）是一种用于在协程之间进行通信的数据结构。通道提供了一种安全、同步的方式，确保在多个协程之间共享数据时不会发生竞态条件。以下是Golang中通道的一些功能特性： 1. 通道的创建：使用make函数可以创建一个通道。 ```go ch := make(chan int) ``` 在这个例子中，ch是一个用于传递整数..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T06:54:27.000Z"}],["meta",{"property":"article:author","content":"Mr.暴走の海鸽"}],["meta",{"property":"article:modified_time","content":"2023-12-14T06:54:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"22.channel\\",\\"description\\":\\"前言 在Go语言中，通道（channel）是一种用于在协程之间进行通信的数据结构。通道提供了一种安全、同步的方式，确保在多个协程之间共享数据时不会发生竞态条件。以下是Golang中通道的一些功能特性： 1. 通道的创建：使用make函数可以创建一个通道。 ```go ch := make(chan int) ``` 在这个例子中，ch是一个用于传递整数...\\"}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"channel的妙用","slug":"channel的妙用","link":"#channel的妙用","children":[{"level":3,"title":"无缓冲channel","slug":"无缓冲channel","link":"#无缓冲channel","children":[]},{"level":3,"title":"带缓冲channel","slug":"带缓冲channel","link":"#带缓冲channel","children":[]},{"level":3,"title":"nil channel的妙用","slug":"nil-channel的妙用","link":"#nil-channel的妙用","children":[]},{"level":3,"title":"与select结合使用的一些惯用法","slug":"与select结合使用的一些惯用法","link":"#与select结合使用的一些惯用法","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1697106418000,"updatedTime":1702536867000,"contributors":[{"name":"lianhaifeng","email":"lianhaifeng@rongannetworks.com","commits":2}]},"readingTime":{"minutes":2.43,"words":729},"filePathRelative":"docs/golang/golang-base/22.channel.md","localizedDate":"2023年10月12日","excerpt":"","autoDesc":true}');export{e as data};