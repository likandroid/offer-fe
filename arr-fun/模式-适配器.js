class Adaptee {
  specificRequest() {
    return '香港标准接口'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 内地标准插头`
  }
}

// 测试
let target = new Target()
let res = target.request()
console.log(res)
