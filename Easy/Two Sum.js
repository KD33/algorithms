/*
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 103
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

*/

function solutionOne(nums, target) {
    /*
    Brute force approach.  Iterate through the array, and for every number, 
    iterate through again and see if the numbers in the second iteration 
    sum up to the target.  This runs in O(n**2) runtime and O(1) space.
    */
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}

function solutionTwo(nums, target) {
    /* Use a hash in order to keep track of the numbers needed to reach the 
    target, and the map it to the index of the other number that it pairs with
    */
    const numsNeeded = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if(numsNeeded[currentNum] >= 0) {
            return [i, numsNeeded[currentNum]];
        }
        else {
            const numNeeded = target - nums[i];
            numsNeeded[numNeeded] = i;
        } 


    }

}

/*
Similar Problems:
  -3Sum
  -4Sum
  -Two Sum 2 - Input Array is Sorted
  -Two Sum 3 - Data Structure Design
  -Subarray Sum Equals K
*/ 