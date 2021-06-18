var obj = {
  fun: function () {
    console.log(this)
  }
}

// setTimeout(obj.fun, 1000);      // this指向window对象
setTimeout('obj.fun()', 1000);  // this指向obj对象