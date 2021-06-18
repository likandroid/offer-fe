var nickname = "LiLei";
function Person(name) {
  this.nickname = name;
  this.sayHi = function () {
    console.log(this.nickname + 212);
    // (function() {
    //   console.log(this, 11);
    //   console.log(this.nickname);
    // })()
    let that = this
    setTimeout(function () {
      console.log(this, 22);
      console.log(this.nickname);
      console.log(that);
    }, 0);
  }
}
var Male = {
  nickname: 'xiaofang',
  sayHi: () => {
    console.log(this.nickname + 1);
  }
}
var person = new (Person.bind(Male, 'XiaoHong'));
person.sayHi();
// node环境与windows环境的区别