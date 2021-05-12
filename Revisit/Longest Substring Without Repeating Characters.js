/*
Given a string s, find the length of the longest substring without repeating 
characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a 
substring.

Example 4:

Input: s = ""
Output: 0
*/

function solutionOne(s) {
    if (s.length === 0 || s.length === 1) return s.length;
    let maxCount = 0;

    for (let i = 0; i < s.length; i++) {
        let count = 0;
        const found = {};
        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (found[char]) {
                break;
            } else {
                count+=1;
                found[char] = true;
            }
        }
        maxCount = count > maxCount ? count : maxCount;
    }

    return maxCount;
}

// look up sliding window
function solutionTwo(s) {
    const found = {};
    let maxCount = 0;
    let [left, right] = [0, 0];

    while (right < s.length) {
        const char = s[right];
        if (found[char]) {
            const substringLength = Object.keys(found).length;
            maxCount = maxCount > substringLength ? maxCount : substringLength;
            while (found[char]) {
                const d = s[left];
                delete found[d];
                left += 1;
            }
            found[char] = true;
            right +=1;

        } else {
            found[char] = true;
            right +=1;
        }
    }
    const substringLength = Object.keys(found).length;
    return maxCount > substringLength ? maxCount : substringLength;
}

/*Related Questions:
Longest Substring With At Most Two Distinct Characters
Longest Substring With at most K distinct characters
Maximum Erasure Value
Subarrays with K Different Integers
*/