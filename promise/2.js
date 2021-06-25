Promise.resolve()
  .then(() => {
    console.log(1);
    return Promise.resolve(2);
  })
  .then(res => {
    console.log(res);
  });
Promise.resolve()
  .then(() => console.log(11))
  .then(() => console.log(12))
  .then(() => console.log(13))
  .then(() => console.log(14))
  .then(() => console.log(15))
  .then(() => console.log(16))

/**
 * 1
 * 11
 * 12
 * 13
 * 2
 * 14
 * 15
 */