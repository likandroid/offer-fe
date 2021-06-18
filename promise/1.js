Promise.resolve()
  .then(() => {
    console.log(11);
  })
  .then(() => console.log(12))
  .then(() => console.log(13))
  .then(() => console.log(14))
  .then(() => console.log(15));
Promise.resolve()
  .then(() => {
    console.log(21);
  })
  .then(() => console.log(22))
  .then(() => console.log(23))
  .then(() => console.log(24))
  .then(() => console.log(25));

/**
 * 11
 * 21
 * 12
 * 22
 * 13
 */