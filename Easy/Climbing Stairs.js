/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can 
you climb to the top?
 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

function solutionOne(n) {
    /*
    The trick is recognizing that this is a dynamic programming problem and
    that we can build on all of the subproblems that come before the value, 
    n, that we care about.  Therefore, we'll build an array of values that 
    stores the number of ways to climb a number of stairs at n, where n equals
    the index at that value.
    
    We'll say that the number of ways to climb at 0 is 1, which is to not do
    anything.  The number of ways to climb at 1 is 1, which is to take 1 step.
    The problem gives us the number of ways to climb at 2 and 3, which are 2 
    and 3 respectively.  So our array starts as [1, 1, 2, 3].

    At any value n, our options are to take 1 step from the previous step value
    (n - 1), or take 2 steps from (n - 2).  Therefore, if we write out the number
    of ways to climb at a value n, the number of ways at n + 1 is the same as
    the number of ways at n.  We just add 1 more step to each equation.  The 
    number of ways at n from n -2, is the same as n - 2, we just add 2 to each
    equation.  Therefore, for a given step n, where we can take 1, and 2 steps, 
    just sum the number of ways from n - 1 steps, and n - 2 steps.
    */ 
   const numberOfWays = [1, 1, 2, 3]
   for(let i = 4; i < n + 1; i++) {
       numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
   }

   return numberOfWays[n]
}


function solutionTwo(n) {
    //Just for giggles, try a recursive implementation
    if (n < 0) return 0;
    if (n === 0) return 1;
    return solutionTwo(n - 1) + solutionTwo(n - 2);

}

function solutionThree(n) {
    //Try a recursive memoized implementation
}