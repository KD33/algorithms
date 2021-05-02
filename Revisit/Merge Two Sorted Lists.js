/*
Merge two sorted linked lists and return it as a sorted list. The list should 
be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:

Input: l1 = [], l2 = []
Output: []

Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

*/

function solutionOne(l1, l2) {
    //Is it possible to do this in place?
    //Read the solutions for this to see if there are better implementations
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let output = new ListNode(null, null);
    const outputHead = output;

    let currentL1 = l1;
    let currentL2 = l2;

    while(currentL1 !== null && currentL2 !== null) {
        let node;
        if (currentL1.val <= currentL2.val) {
            node = currentL1;
            currentL1 = currentL1.next;
        }
        else {
            node = currentL2;
            currentL2 = currentL2.next;
        }

        output.val = node.val;
        output.next = new ListNode(null, null);
        output = output.next;
    }

    if (currentL1 === null) {
        output.val = currentL2.val;
        output.next = currentL2.next;
    } else {
        output.val = currentL1.val;
        output.next = currentL1.next;
    }
    return outputHead;   

}