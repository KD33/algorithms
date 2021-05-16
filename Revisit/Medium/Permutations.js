/*
Given an array nums of distinct integers, return all the possible permutations.
You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

*/

function solutionOne(nums) {
    const output = [];


    function permute(num, choices, output) {
        if (choices.length === 0) output.push(num);
        else {
            for (let j = 0; j < choices.length; j++) {
                const n = [...num, choices[j]];
                const choicePool = [].concat(
                    choices.slice(0, j),
                    choices.slice(j+1, choices.length)
                )
                permute(n, choicePool, output);
            }
        }
    }


    for (let i = 0; i < nums.length; i++) {
        const choices = [].concat(
            nums.slice(0, i),
            nums.slice(i+1, nums.length)
        );
        const num = [nums[i]];

        permute(num, choices, output);
    }
    return output;


}


solutionOne([1,2,3])