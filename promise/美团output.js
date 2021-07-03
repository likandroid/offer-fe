var a = 1;
var i = 1000
console.log(bea); // bea is not defined
var obj = {
  like: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(a);
    var a = 2;
    var bea = 1212
  },
  d: function () {
    console.log(0);
    setTimeout(_ => console.log(1));
    new Promise(resolve => {
      console.log(2);
      resolve()
    }).then(_ => {
      console.log(3);
    });
    console.log(4)
  }
}

obj.a(); // obj.a is not a function
obj.b(); // 箭头函数，this
obj.c(); // undefined
obj.d() // 0 2 4 3 1