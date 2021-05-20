// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

 

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

//Use two pointers, so that we only have to make one pass through the linked list.
//We need to stop 1 node before the node to remove, and we remove the node of 
//interest by just skipping it from node of interest - 1.  The edge case here is
//when n = head.list;

function solutionOne(head, n) {
    let lead = head;
    let lag = head;
    for (let i = 0; i < n; i++) {
        lead = lead.next;
    }
    
    if (lead === null) return lag.next;
    while(lead.next) {
        lead = lead.next;
        lag = lag.next;
    }
    
    const removedNode = lag.next;
    lag.next = lag.next.next;
    removedNode.next = null;
    
    return head;        
}

//Related to Swapping Nodes in a Linked List & Delete N Nodes After M Nodes of a Linked List