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

var threeSum = function(nums) {
    const output = [];
    nums.sort(compare);

    if (nums.length < 3) return [];
    for (let i = 0; i < nums.length - 2; i++) {
        let beginning = i + 1;
        let end = nums.length - 1;

        while(end > beginning) {
            const sum = nums[i] + nums[beginning] + nums[end];
            if (sum > 0) {
                end = end - 1;
            } else if (sum < 0) {
                beginning += 1;
            } else {
                output.push([nums[i], nums[beginning], nums[end]]);
                do {
                    beginning +=1;
                }
                while(nums[beginning] === nums[beginning - 1]);
            }
        }

        while(nums[i] === nums[i+1]) {
            i+=1;
        }
    }
    return output;
};


function compare(a, b) {
    return a - b;
}

//What if you cannot sort?