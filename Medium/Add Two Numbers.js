/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a 
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Sample Input:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/*
Was able to successfully work through this problem, but for some reason the
reversed order part of the question threw me off.  Why did I think this meant
I needed to reverse the incoming linked list in the beginning? 
*/

function solutionOne(l1, l2) {
    /*
    Runs in O(n + m) time and O(n) space

    This problem introduces a lot of tricks/caveats such as what to do when the
    lists are uneven, what to do when the output list ends in a number greater
    than 9?  I also originally forgot to include a pointer to the head of the 
    output list and return that as the output instead of the output itself.
    */
    let output;
    let outputHead;

    let currentL1 = l1;
    let currentL2 = l2;
    let carryTheOne = 0;

    while(currentL1 || currentL2) {
        const n1 = currentL1 ? currentL1.val : 0;
        const n2 = currentL2 ? currentL2.val : 0;
        let sum = n1 + n2 + carryTheOne;

        if (sum > 9) {
            carryTheOne = 1;
            sum = sum % 10;
        } else {
            carryTheOne = 0;
        }

        const newNode = new ListNode(sum, null);

        if (output === undefined) {
            output = newNode;
            outputHead = output;
        } else {
            output.next = newNode;
            output = output.next;
        }
        currentL1 = currentL1 ? currentL1.next : null;
        currentL2 = currentL2 ? currentL2.next : null;
    }

    if (carryTheOne > 0) output.next = new ListNode(1, null);
    return outputHead;
}
