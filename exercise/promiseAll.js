
let promises = [
  1, new Promise(resolve => {resolve(22222)}), 333, 
  new Promise(resolve => { resolve(4444) }), 555
]
promiseAll(promises).then(res => {
  console.log(res);
})
function promiseAll(promises) {
  if (!Array.isArray(promises) || !promises.length) return
  let result = []
  return new Promise((resolve, reject) => {
    let count = 0
    // i为string
    for (let i in promises) {
      if (promises[i] instanceof Promise) {
        try {
          Promise.resolve(promises[i]).then(r => {
            result[i] = r
            console.log(count);
            if (count === promises.length - 1) {
              resolve(result)
            }
            count++
          })
        } catch (error) {
          reject(error)
        }
      } else {
        console.log(count);
        result[i] = promises[i]
        if (i === promises.length - 1) {
          resolve(result)
        }
        count++
      }
    }
  })
}