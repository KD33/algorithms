/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing
x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], 
then return 0.

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Example 4:

Input: x = 0
Output: 0


*/

function solutionOne(x) {
    /*
    Turn input integer to a string
    Check for the sign
    Reverse the string and convert it back to an integer
    Check the bounds
    O(n) runtime & O(n) space
    */
    const sign = x > 0 ? 1 : -1;
    x = String(x);
    if (sign === -1) x = x.substring(1,)
    let output = '';

    for(let i = x.length - 1; i > -1; i--) {
        output += x[i];
    }

    while (output[0] === '0') {
        output = output.substring(1, );
    }

    output = parseInt(output) * sign;
    return -1 * 2**31 < output && output < 2**31 ? output : 0;
}

function solutionTwo(x) {
    //Repeatedly mod 10 the integer
    const bound = 2**31
    let result = Math.abs(x);
    let output = '';

    while (result !== 0) {
        const i = String(result % 10);
        output += i;
        result = Math.floor(result / 10);
    }
    output = parseInt(output);
    if (x < 0) output = output * -1;
    return -bound < output && output < bound ? output : 0;
}

function solutionThree(x) {
    // Can you do this without needing to build the string?
}

console.log(solutionTwo(-321))
