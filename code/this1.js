let name = 'window'
let obj = {
  name: 'obj',
  fn1() {
    return () => {
      console.log(this.name)
    }
  },
  arrow: () => {
    return function () {
      console.log(this.name, this, typeof this.name)
    }
  }
}
let obj1 = { name: 'obj1' }
// obj.fn1.call(obj1)() // obj1
obj.arrow.call(obj1)()