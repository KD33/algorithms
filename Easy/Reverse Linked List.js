/*
Given the head of a singly linked list, reverse the list, and return the 
reversed list

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Follow up: A linked list can be reversed either iteratively or 
recursively. Could you implement both?
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/*
I messed this question up because I did not consider the edge cases.
Come back to this problem and revise it to handle edge cases
*/

function solutionOne(head) {
    /*Just reverse the pointers in place*/
    const current = head.next;
    const prev = head;
    const next = current.next;

    prev.next = null;
    current.next = prev;

    while(next !== null) {
        prev = current;
        current = next;
        next = current.next;
        current.next = prev;
    }

    return current;
}

/*
Follow up: A linked list can be reversed either iteratively or 
recursively. Could you implement both?
*/