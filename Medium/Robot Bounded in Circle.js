/*

On an infinite plane, a robot initially stands at (0, 0) and faces north. The
robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the 
robot never leaves the circle.

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.

Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
*/

var isRobotBounded = function(instructions) {
    const coordinates = {x:0, y:0};
    let currentDirection = 'N';

    for(const instruction of instructions) {
        if (instruction === 'L' || instruction === 'R') currentDirection = changeDirection(currentDirection, instruction);
        else getNewPosition(currentDirection, coordinates);
    }

    return cordinates[x] !== 0 && coordinates[y] !== 0 && currentDirection === 'N'; 
}

function changeDirection(currentDirection, instruction) {
    if (currentDirection === 'N' && instruction === 'L') return 'W';
    else if (currentDirection === 'N' && instruction === 'R') return 'E';
    else if (currentDirection === 'W' && instruction === 'L') return 'S';
    else if (currentDirection === 'W' && instruction === 'R') return 'N';
    else if (currentDirection === 'S' && instruction === 'L') return 'E';
    else if (currentDirection === 'S' && instruction === 'R') return 'W';
    else if (currentDirection === 'E' && instruction === 'L') return 'N';
    else if (currentDirection === 'E' && instruction === 'R') return 'S';
}

function getNewPosition(currentDirection, coordinates){
    if (currentDirection === 'N') {
        coordinates[y] += 1;
    } else if (currentDirection === 'E') {
        coordinates[x] += 1;
    } else if (currentDirection === 'S') {
        coordinates[y] -= 1;
    } else if (currentDirection === 'W') {
        coordinates[x] -= 1;
    }
}