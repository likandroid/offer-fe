let tree = {
  value: 2,
  left: {
    value: 3,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null
    },
  },
  right: {
    value: 4,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: {
        value: 8,
        left: null,
        right: null
      },
      right: null
    }
  },
};

// 二叉树
// 2
// 3        4
// 5    6   7
// 8

// 实现一个方法leftSideView，打印出二叉树每行的第一个存在的数，如图例，打印出2，3，5，8