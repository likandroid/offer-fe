var obj = {
  "name": "aaa",
  "Children": [{
    "name": "aaa",
    "Children": [{
        "name": "ccc",
        "Children": [
          // {
        //     "name": "ccc",
        //     "Children": []
          // }
        ]
      },
      {
        "name": "eee",
        "Children": []
      }]
  }]
}
var a = {
  aa: {
    aaa: 1,
    bbb: {
      aaaa: 9,
      dsfs: null,
      da: ['e9875t987']
    },
    ccc: {
      aaaa: {
        aaaaa: 9090,
        bbbbb: 90909
      }
    }
  }
}

function longTree(obj) {
  let walk = [];
  (function walkTree(obj, deeppath) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
      return walk.push(deeppath)
    }
    for (var i in obj) {
      walkTree(obj[i], deeppath + '.' + i)
    }
  })(obj, '')
  console.log(walk);
  return Math.max.apply(this, walk.map(function (n) {
    return n.split('.').length
  }))
  // let walkArr = walk.map(r => {
  //   return r.split('.').length
  // })
  // return Math.max(...walkArr)
}

// function walkTree(obj, deeppath, walk) {
//   if (Object.prototype.toString.call(obj) !== '[object Object]') {
//     return walk.push(deeppath)
//   }
//   for (var i in obj) {
//     walkTree(obj[i], deeppath + '.' + i)
//   }
// }

console.log(longTree(a))
// output
