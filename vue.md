1. diff算法
它通过JS的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点,dom diff 则是通过JS层面的计算，返回一个patch对象，即补丁对象，在通过特定的操作解析patch对象，完成页面的重新渲染
比较只会在同层级进行, 不会跨层级比较。
比较后会出现四种情况：
1、此节点是否被移除 -> 添加新的节点
2、属性是否被改变 -> 旧属性改为新属性
3、文本内容被改变-> 旧内容改为新内容
4、节点要被整个替换 -> 结构完全不相同 移除整个替换

2. vue双向绑定
https://www.cnblogs.com/beevesnoodles/p/9844854.html
我们知道 Vue 是通过数据劫持结合发布订阅模式来实现双向绑定的。我们也知道数据劫持是通过 Object.defineProperty 方法，当我们知道这些之后，我们就需要一个监听器 Observer 来监听属性的变化。得知属性发生变化之后我们需要一个 Watcher 订阅者来更新视图，我们还需要一个 compile 指令解析器，用于解析我们的节点元素的指令与初始化视图。所以我们需要如下：
Observer 监听器：用来监听属性的变化通知订阅者
Watcher 订阅者：收到属性的变化，然后更新视图
Compile 解析器：解析指令，初始化模版，绑定订阅者

监听器的作用就是去监听数据的每一个属性，我们上面也说了使用 Object.defineProperty 方法，当我们监听到属性发生变化之后我们需要通知 Watcher 订阅者执行更新函数去更新视图，在这个过程中我们可能会有很多个订阅者 Watcher 所以我们要创建一个容器 Dep 去做一个统一的管理。

Watcher 主要是接受属性变化的通知，然后去执行更新函数去更新视图，所以我们做的主要是有两步：
  1.把 Watcher 添加到 Dep 容器中，这里我们用到了 监听器的 get 函数
  2.接收到通知，执行更新函数。

Compile 的主要作用一个是用来解析指令初始化模板，一个是用来添加订阅者，绑定更新函数。
因为在解析 DOM 节点的过程中我们会频繁的操作 DOM， 所以我们利用文档片段（DocumentFragment）来帮助我们去解析 DOM 优化性能。

function defineReactive(data, key, value) {
  //递归调用，监听所有属性
  observer(value);
  var dep = new Dep();
  Object.defineProperty(data, key, {
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set: function (newVal) {
      if (value !== newVal) {
        value = newVal;
        dep.notify(); //通知订阅器
      }
    }
  });
}

function observer(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}

function Dep() {
  this.subs = [];
}
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
}
Dep.prototype.notify = function () {
  console.log('属性变化通知 Watcher 执行更新视图函数');
  this.subs.forEach(sub => {
    sub.update();
  })
}
Dep.target = null;