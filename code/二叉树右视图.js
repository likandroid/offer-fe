
var rightSideView = function (root) {
  if (!root)
    return [];
  let arrList = [];
  DFS(root, 0, arrList);
  return arrList;
};

function DFS(root, depth, res) {
  if (root) {
    if (res.length === depth) {// 当数组长度等于当前 深度 时, 把当前的值加入数组
      res.push(root.val);
    } 
    DFS(root.right, depth + 1, res);// 先从右边开始, 当右边没了, 再轮到左边
    DFS(root.left, depth + 1, res);
  }
}

// 左视图的话，就反过来


console.log(rightSideView([1, 2, 3, null, 5, null, 4]));