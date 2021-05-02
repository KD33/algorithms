/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in 
the diagram below).

The robot can only move either down or right at any point in time. The robot 
is trying to reach the bottom-right corner of the grid (marked 'Finish' in the
diagram below).

How many possible unique paths are there?

Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:

Input: m = 7, n = 3
Output: 28



Example 4:

Input: m = 3, n = 3
Output: 6


*/

function solutionOne(m, n) {
    /*
    Imagine we're at the destination, and we want to work our way back. At the
    end, we can only move up one space, or to the left one space, so we subtract
    1 from the coordinates and work our way back until we are at m = 1, and n = 1.
    In the event we m or n is equal to 0, we are off the board, and this is not
    a valid path.  

    This solution is not optimal because we end up doing unnecessary function
    calls.  For example, if m = 3, and n = 3, we call solution(3,2) + 
    solution(3,2).  These function calls then break down into more function 
    calls, and we end up repeating ourselves.
    */ 

    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    
    return solutionOne(m-1, n) + solutionOne(m, n-1);
}


function solutionTwo(m, n) {
    /*
    //O(n * d) space time complexity
    
    We use dynamic programming, and work our way up to solving mxn by solving
    all of the grid spaces that come before it.  We store the solutions for
    these in a 2D array (since it mimics a grid) and then get the value at 
    our array[m][n].

    If m or n = 0, then there are 0 ways to move, and if m or n = 1 then there
    is only 1 way to move, so we can prepopulate our array with these solutions.
    Therefore, the first value we need to calculate for is a 2x2 grid.  At the
    starting point of the 2x2 grid, we can either move right or down.  If we
    move right, then this becomes a 2x1 problem, which we've solved (there is 
    only 1 way to move in a 2x1 grid).  If we move down, then this becomes a
    1x2 problem, which we've solved (there is only 1 way to move).  Therefore,
    in a 2x2 grid, there are 2 ways to move, and come to this conclusion by 
    summing the calculated values for a 1x2 and 2x1 problem.  We can therefore
    come up with the formula that the solution for any problem is equal to the 
    sum of the number of ways from one row above, and one column to the left.
    */
    const grid = [];
    const firstRow = new Array(n + 1).fill(0);
    const secondRow = new Array(n + 1).fill(1);
    secondRow[0] = 0;
    grid.push(firstRow);
    grid.push(secondRow);

    for(let row = 2; row < m + 1; row++) {
        grid.push([]);
        for(let col = 0; col < n + 1; col++) {
            if (col === 0) {
                grid[row][0] = 0;
            } else if (col === 1) {
                grid[row][1] = 1;
            } else {
                grid[row][col] = grid[row - 1][col] + grid[row][col-1];
            }
        }
    }

    return grid[m][n]
}

/*
Related
Unique Sum ||
Minimum Path Sum
Dungeon Game
*/