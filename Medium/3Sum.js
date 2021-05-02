/*
Given an integer array nums, return all the triplets [nums[i], nums[j], 
nums[k]] such that i != j, i != k, and j != k, and 
nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []


*/

function threeSum(nums) {
    const output = [];
    nums.sort(compare); 
    for(let i = 0; i < nums.length -2; i++) {
        let head = i + 1;
        let tail = nums.length - 1;
        while (tail > head) {
            const sum = nums[i] + nums[head] + nums[tail];
            if (sum > 0) {
                tail--;
            } else if (sum < 0) {
                head++;
            } else {
                output.append([
                    nums[i],
                    nums[head],
                    nums[tail]
                ]);
                head++;
                increment--;
            }
        }
    }

    return output;
}

function compare(a, b) {
    return a - b;
}