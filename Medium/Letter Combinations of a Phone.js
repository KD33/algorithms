/*
Given a string containing digits from 2-9 inclusive, return all possible letter 
combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]


*/

function solutionOne(digits){
    if (digits.length === 0) return [];
    if (digits.length === 1) return digitCharacterMapping[digits];

    const output = [];
    const digitCharacterMapping = {
        0:[],
        1:[],
        2:['a', 'b', 'c'],
        3:['d', 'e', 'f',],
        4:['g', 'h', 'i'],
        5:['j', 'k', 'l'],
        6:['m', 'n', 'o'],
        7:['p', 'q', 'r', 's'],
        8:['t', 'u', 'v'],
        9:['w', 'x', 'y', 'z'],
    }

    const chars = digitCharacterMapping[digits[0]];
    for (let j = 0; j < chars.length; j++) {
        const combination = chars[j];
        const remainingDigits = digits.slice(1, digits.length);
        permute(combination, remainingDigits, output);
    }
    

    function permute(combination, remainingDigits, output) {
        if (remainingDigits.length === 0) output.push(combination);
        else {
            const choices = digitCharacterMapping[remainingDigits[0]];
            for (let i = 0; i < choices.length; i++) {
                const newCombo = combination + choices[i];
                permute(newCombo, remainingDigits.slice(1, remainingDigits.length), output);
            }
            
        }
    }
    return output;
}

solutionOne("234")