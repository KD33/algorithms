// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

//     0 <= a, b, c, d < n
//     a, b, c, and d are distinct.
//     nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

function solutionOne(nums, target) {
    nums.sort(compare);
    const output = [];

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let beginning = j + 1;
            let end = nums.length - 1;

            while (end > beginning) {
                let sum = nums[i] + nums[j] + nums[beginning] + nums[end];
                if (sum > target) {
                    end = end - 1;
                } else if (sum < target) {
                    beginning = beginning + 1;
                } else {
                    output.push([nums[i], nums[j], nums[beginning], nums[end]]);
                    do {
                        beginning += 1;
                    }
                    while(nums[beginning] === nums[beginning - 1]);
                }
            }

            while(nums[j] === nums[j + 1]) {
                j += 1;
            }
        }
        while (nums[i] === nums[i+1]) {
            i += 1;
        }
    }
    return output;
}

function compare(a, b) {
    return a - b;
}