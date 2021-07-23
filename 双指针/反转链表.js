var reverseList = function (head) {
  var list = head;
  var p = list;
  var q = null;

  while (p.next !== null) {
    q = p.next;
    p.next = q.next;
    q.next = list;
    list = q;
  }
  return list;
};