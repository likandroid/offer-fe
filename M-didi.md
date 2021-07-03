1. 垃圾回收和内存泄露相关 
垃圾回收：对于全局变量，他的生命周期会持续到页面关闭 【这里就会牵扯到内存泄露】
对于局部的变量，函数执行完后，局部变量的生命周期结束，他所占用的内存会通过垃圾回收机制释放【这就是垃圾回收机制】
【垃圾回收机制】：有两种（引用计数、标记清除）
  （1）引用计数就是，跟踪记录每个值的引用次数，当声明一个变量，并将一个引用类型值赋给该变量，这个值的引用次数就是1,如果这个值再次赋值给一个变量，则引用次数加一，相反，如果一个变量脱离了值的引用，这该值引用次数减一，当引用次数为0时，就会等待垃圾回收机制回收，引用计数策略有一个很严重的问题：循环引用。如果对象 A 中包含一个指针指向对象 B，而对象 B 中也包含一个指针指向对象 A。那么这两个对象引用次数都是 2，但实际上已经可以回收了。若这种函数被反复多次调用，会导致大量内存得不到回收。
  （2）当变量进入环境时，将这个变量标记为进入环境，从逻辑上说，永远不能释放进入环境的变量所占用的内存，因为我们在这个环境中可能随时会用到他们，当变量离开环境时，则将其标记为离开环境。
  arr = [1, 2, 3]
  使用场景优化：（1）arr = []; 虽然让a变量成一个空数组,但是在堆上重新申请了一个空数组对象。可以使用arr.length = 0清除数组
  （2）对象尽量复用，尤其是在循环等地方出现创建新对象，能复用就复用。不用的对象，尽可能设置为null，尽快被垃圾回收掉。
  （3）在循环中的函数表达式，能复用最好放到循环外面。
  // 推荐用法
  function t(a) {
    console.log(a)
  }
  for (var k = 0; k < 10; k++) {
    t(k)
  }
  t = null
【内存泄露】
  （1）没有声明局部变量 function a(){
    b = '柚子小哥哥'
    console.log('在这里B没有声明！')
  } b 没有声明，会变成一个全局变量，在页面关闭之前不会被释放，在使用严格可以被避免
  （2）闭包带来的内存泄露  var num = (function (){
      var num = '柚子小哥哥';//闭包总引用，不会被回收
          return function (){
            console.dir(num)
          }
      })
  （3）定时器中的内存泄露，如果没有清除定时器，就不会被释放
  （4）dom事件没有移除：dom节点被移除但是事件依然存在内存中
内存泄漏的识别方法
2. ssl握手过程，非对称加密和对称加密的区别
  通过标准的HTTP（超文本传输协议HTTP协议被用于在Web浏览器和网站服务器之间传递信息），通信是不安全的，这意味着任何感兴趣的第三方都可以拦截甚至操纵正在传输的数据。安装SSL证书后，通过HTTPS（安全套接字超文本传输协议）建立连接时，将对其进行加密。但是，当我们提到加密时，我们指的是两种非常不同的加密样式：非对称加密和对称加密。
  浏览器-->服务器，这是我的ssl版本和支持加密的方式和一个随机数A
  浏览器<--服务器，这是我的ssl版本和支持加密方式还有我的证书和一个随机数B，此时浏览器收到确认发来的证书是否可靠，然后用证书中的【公钥】来看是否能够解开数字签名，证书上的域是不是服务器的域
  浏览器-->服务器，浏览器产生随机数C【使用非对称加密】用服务器的公钥加密，将加密后的C传输给server端。
                服务器会用自己的私钥解开C，此时双方都有ABC，然而第三方不知道，因为AB是明文传输，C是用服务器公钥加密传输的，且只能服务器的私钥解开，此时双方用ABC生成superX
  浏览器<--服务器 此时使用【对称加密】，双方简单用superX测试一下，加密后，使用浏览器生成的superX解密得到的数据，解密后确认无误，此时双方就可以使用superx开始对称加密通信了。

  既保证了密钥分发的安全，也保证了通信的效率。
  非对称加密（建立链接）：公钥私钥概念，公钥加密的东西可以用私钥解开，用双方的公钥来加密数据，即便数据给了坏了，他们也没有私钥解开。缺点：效率低，安全高
  对称加密（传输）：客户端和服务器说话，服务器先给他一份公钥，然后两人用公钥加密后的信息聊天，但是公钥如果被截获的话，聊天信息就暴露了，缺点：效率高，安全低

3. 渲染过程 （5步）
（1）构建DOM树 构建过程：Bytes字节->Characters字符->Tokens开始结束标签->Nodes节点->Dom
（2）构建CSS规则树 构建过程：Bytes->Characters->Tokens->Nodes->CSSOM
（3）合并DOM树和CSSOM树构建渲染树
    1、过滤掉不可见节点(脚本标记、元标记)
    2、过滤掉样式隐藏的节点（display:none）
（4）根据渲染树来布局，计算节点的几何信息（layout），重排、重绘
（5）将各个节点绘制在屏幕上（paint），GPU
必要的CSS就请尽早的加载（1、引用位置靠前，2、减小文件体积）到客户端，这样就减少了对首次渲染的阻塞

DOM构建过程中如果遇到（非异步加载async）的javascript标签，浏览器将会终止DOM的构建，立即执行javascript。
这就是为什么非异步执行的javascript要放在尾部或者将可执行代码要放在DOMContentLoaded回调中？
因为如果该javascript代码操作了未构建完的DOM节点就会因为无法获取该节点而无法执行响应的操作。

当出现非异步加载的javascript时，CSSOM构建完成时间是早于javascript的执行，两者早于DOMContentloaded（即DOM构建彻底完成）。

图像不会阻止首屏的渲染

4. 前端性能优化
  1、降低请求数量
    a、减少获取数据的接口数（初始数据尽量通过一个接口返回）
    b、减少js、css的数量（提取公共js、css利用缓存、减少后续加载访问。有些代码直接注入页面无需外链形式访问加载。）
    c、图片懒加载
  2、降低文件大小
    a、图片压缩以及使用webp
    b、压缩js、css
    c、gzip（设置content-encoding:gzip）
    d、icon或者svg绘制图标
  3、加快请求速度
    a、[DNS预解析][1] 
    b、减少域名数量(页面、js、css、image、接口域名、同种类型文本请求尽量同域名。)
    c、静态资源cdn分发
    d、提前加载（提前加载一部分可能被用户访问的图片或者数据信息）
  4、缓存
    a、http协议缓存
    b、离线数据缓存localStorage
  5、渲染
    a、js、css优化(按照规范来写--google规范)
    b、服务器渲染
    c、能异步加载的js要异步加载
    d、js不要修改dom和css，避免重绘
  预解析的实现：
  1. 用meta信息来告知浏览器, 当前页面要做DNS预解析:<meta http-equiv="x-dns-prefetch-control" content="on" />
  2. 在页面header中使用link标签来强制对DNS预解析: <link rel="dns-prefetch" href="http://bdimg.share.baidu.com" /> dns-prefetch需慎用，多页面重复DNS预解析会增加重复DNS查询次数。
5. 脱离文档流的过程
  定义：行内元素默认从左到右流，遇到阻碍或者宽度不够自动换行，继续按照从左到右的方式布局。块级元素单独占据一行，并按照从上到下的方式布局（这种就是默认布局）。
  可以脱离文档流的：float（只要设置浮动，则默认自带 display: inline-block;，可设宽高，且不占行）
  position:absolute;绝对定位（只要设置绝对定位，则默认自带 display: inline-block;，可设宽高，且不占行）
  position:fixed;固定定位//IE6不兼容
8. typescript相关（1. 什么是duck-typing, 2. 接口声明变量不声明函数导致函数报错） 
  Duck-Typing是一种方法/规则，用于检查更复杂的变量类型的类型兼容性，可以比较一个对象和其他对象，方法是检查两个对象是否具有相同的类型匹配名称。
  duck-typing特性在TypeScript代码中提供了类型安全性
  let lion: Lion = new Dog(); // 替代者  
  class Lion {  
    sound = "barking";  
  }  
9. 聊聊设计模式，装饰器模式、单例模式 
  （1）单例
    定义：只有一个实例，可以全局访问
    主要解决：一个全局使用的类，频繁的创建和销毁
    何时使用：当想控制实例的数量，节省系统化资源
    优点：减少内存的开销，（例如首页页面的缓存），弹窗，购物车、vuex 和 redux 中的 store
  （2）工厂
    工厂模式的设计原则验证，构造函数和创建者分离，符合开放封闭原则
  （3）适配器
    对于适配器模式的理解，比如在去香港旅游的时候，使用的插头和内地的插头不一样，需要使用转换器进行转换，才可以使用。
    对于适配器模式的使用场景，封装旧接口，vue computed 等等。
  （4）装饰器
    为对象添加新功能，不改变其原有的结构和功能
9. 对webpack的理解，tree-shaking的理解， es6 module 
Tree-shaking（dead code elimination）是webpack内置的一个优化，主要功能就是去除没有用到代码。tree-shaking的消除原理是依赖于ES6的模块特性。
webpack 项目中，有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝。实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。
Dead Code 一般具有以下几个特征
  代码不会被执行，不可到达
  代码执行的结果不会被用到
  代码只会影响死变量（只写不读）
ES6 module 特点：
  只能作为模块顶层的语句出现
  import 的模块名只能是字符串常量
  import binding 是 immutable的
10. 实现flat
ES10 新增Array.flat()和Array.flatMap()

flatMap相当于 map 和 flat 结合（相当于对象map返回的数组指向降维(一个维度)最低转为一维数组）

11. webpack原理
  1. 核心概念
（1）entry：一个可执行模块或者库的入口。
（2）chunk：多个文件组成一个代码块。可以将可执行的模块和他所依赖的模块组合成一个chunk，这是打包。
（3）loader：文件转换器。例如把es6转为es5，scss转为css等
（4）plugin：扩展webpack功能的插件。在webpack构建的生命周期节点上加入扩展hook，添加功能。
  2. 常见的loader
（1）babel-loader：把es6转成es5；
（2）css-loader：加载css，支持模块化，压缩，文件导入等特性；
（3）style-loader：把css代码注入到js中，通过dom操作去加载css；
（4）eslint-loader：通过Eslint检查js代码；
（5）image-loader：加载并且压缩图片；
（6）file-loader：文件输出到一个文件夹中，在代码中通过相对url去引用输出的文件；
（7）url-loader：和file-loader类似，文件很小的时候可以base64方式吧文件内容注入到代码中。
（8）source-map-loader：加载额外的source map文件，方便调试。
  3. 常见plugin
  (1）uglifyjs-webpack-plugin：通过UglifyJS去压缩js代码；
 （2）commons-chunk-plugin：提取公共代码；
 （3）define-plugin：定义环境变量。

 webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
（1）初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
（2）开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
（3）确定入口：根据配置中的 entry 找出所有的入口文件；
（4）编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
（5）完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
（6）输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
（7）输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

12. 写过webpack loader或者插件吗？
编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（source），可以通过返回值的方式将处理后的内容输出，也可以调用this.callback()方法，将内容返回给webpack。 还可以通过 this.async()生成一个callback函数，再用这个callback将处理后的内容输出出去。

Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
13. babel原理
  •ES6代码输入
  •babylon进行解析得到AST
  •plugin用babel-traverse对AST树进行遍历转译,得到新的AST树
  •用babel-generator通过AST树生成ES5代码
14. 知道怎么转化成AST的吗？
15. 虚拟DOM的理解
16. 热更新HMR
（1）第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。
（2）第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监控，并且告诉 webpack，将代码打包到内存中。
（3）第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。
（4）第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建立一个 websocket 长连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。
（5）webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。
（6）HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
（7）而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
（8）最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。
17. js隐式转换
显式：
（1）Number
console.log(Number(false))     //0
console.log(Number(true))    //1
console.log(Number(0))        //0
console.log(Number("aa"))      //NaN
console.log(Number([]))        //0//因为【】隐式转换是空字符串，字符串隐式转换为0
console.log(Number({}))        //NaN//因为{}隐式转换是【object object】不能被转换就是NaN
console.log(Number(''))     // 0//注释：这个是空字符
console.log(Number(undefined))     //NaN
console.log(Number('1.1.1'));        //NaN
console.log(Number('你好'));    //NaN
（2）parseInt()整数内型
parseInt(123) 123
parseInt('a3') NaN
parseInt('') NaN
parseInt('123   sds') 123
parseInt('0x10') 16，字符串以0x开头则将之后的数字按16进制解读
parseInt("0xa"); //10，要注意16进制包括0~9，a~f （也就是10~15），超出该范围的字符不被解读。
parseInt("0xg"); //NAN
parseInt("011");11 //chrome下输出为11也就是会忽略首位的0，将011当成10进制解读，别的浏览器未测试--
parseInt("011",8); //此时会输出正确的9，第二个参数radix，八进制解析
parseInt("09",8); //八进制取值范围为0~7，不包括9，因此9不能被解读，这时相当于parseInt("0",8);输出0

当小数点后有6个或者以上的0时，会以科学记数法存储
parseInt("0.000000434"); //4 
document.write(0.000000434+"<br/>"); //4.34e-7
parseInt("0.00000434"); //0
（3）parseFloat
parseFloat("123abc"); // 123
parseFloat("a3aa123abc"); // NaN

false 特殊的
console.log([] == null); // false 特殊的
console.log("ddd" == null); // false 特殊的
console.log({} == null); // false 特殊的
console.log(12 == null); // false 特殊的
console.log(undefined == null); // true 以为内意义相同
console.log(undefined === null); // false 类型不等

隐式类型转换通常有两种情况：赋值转换和运算转换
列如：var a = true + 1; console.log(a) 答案是:2;//这就发生隐式转化；
转换过程 = 'true' + 1;//先转换成字符串
        = 1 + 1;//在转换为数值内型
        = 2;
