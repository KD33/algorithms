// Given a characters array tasks, representing the tasks a CPU needs to do, 
// where each letter represents a different task. Tasks could be done in any 
// order. Each task is done in one unit of time. For each unit of time, the CPU 
// could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period 
// between two same tasks (the same letter in the array), that is that there must 
// be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all 
// the given tasks.

 
// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation: 
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

function solutionOne(tasks, n) { 
    //Solution is probably something along the lines of choosing the task that
    // occurs most frequently, and pairing it with other tasks that occur most 
    // frequently.  Pretty much, try not to waste time by pairing tasks with
    // idles.  Idles should only be used when nothing else can be used.  The 
    // previousNTasks array is used to see if a task can performed or if it is in
    // the cooling period.  If a task is in previousNT, it cannot be done, and 
    // somehting else needs to be done.  Idles can go in previousNT, but can be added
    // to sequence regardless of whether or not it is in previousNT. 

    // Conceptually I understand to use a greedy algorithm, I'm just not sure how to 
    // implement it.

    const sequence = [];
    const previousNTasks = [];

    while(tasks.length > 0) {
        let mostFrequentlyOccuringTask = '';
        let frequency = 0;
        let currentTaskCount = 0;
        let prevTask = tasks[0];
        for (let i = 0; i < tasks.length; i++) {
            const currentTask = tasks[i];
            if (currentTask === prevTask) {
                currentTaskCount += 1;
            } else {
                prevTask = currentTask;
                if (currentTaskCount > frequency) {
                    frequency = currentTaskCount;
                    mostFrequentlyOccuringTask = currentTask; 
                }
                currentTaskCount = 1;
            }
        }


    }
    return sequence.length;
}
