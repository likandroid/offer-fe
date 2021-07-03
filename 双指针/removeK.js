function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
  let dummyNode = new ListNode(0, head);
  first = head;
  let second = dummyNode;
  console.log(first);
  console.log(second);
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first != null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummyNode.next;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));