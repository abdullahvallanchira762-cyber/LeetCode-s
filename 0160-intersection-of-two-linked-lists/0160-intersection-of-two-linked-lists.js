// Move both pointers forward; when one reaches the end, send it to the other list's head. Eventually, if an intersection exists, both pointers will point to the same node.

var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;

  while(pA != pB){
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next

  }
  return pA;
};