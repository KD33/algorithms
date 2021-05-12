/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
*/


function solutionOne(nums) {
    /*The trick here is to keep in mind that modifying the array as we're iterating 
    through it, which can lead to us pointing to the wrong number in the array, 
    so we need to specify the condition on which the index counter will update.  
    In this case, only increment the index when a number isn't spliced.
    */
    if (nums.length === 0 || nums.length === 1) return nums.length;
    
    let count = 1;
    while (count < nums.length) {
        if (nums[count - 1] === nums[count]) {
            nums.splice(count - 1, 1);
        } else {
            count += 1;
        }       
    }

    return nums.length;
}

function solutionTwo(nums) {
    let p1 = 0;
    let p2 = 1;

    while(p2 < nums.length) {
        while (nums[p2] === nums[p1]) {
            nums.splice(p2, 1);
        }
        p1 +=1
        p2+=1
    }

    return nums.length;
}

function solutionThree(nums) {
    /*this solution is about 20ms faster than mine.  Probably because it doesn't have to
    do the additional work of splicing.  We basically have a fast pointer and a slow pointer,
    p2 and p1 respectively.  Increment the fast pointer and compare it to the slow pointer at 
    every increment.  If it's the same value, do nothing, but when a new value is found, overwrite
    slow pointer + 1 with the new value, then incremenet the slow pointer by one.  We're essentially 
    creating this array of distinct values by overwriting the duplicate values.  At the end, the slow
    pointer points to the index of what would be the end of the distinct array, so we return slow pointer + 1
    */
    let p1 = 0;
    let p2 = 1;

    while (p2 < nums.length) {
        if (nums[p1] === nums[p2]) p2++;
        else {
            p1++;
            nums[p1] = nums[p2];
        }
    }
    return p1+1;
}