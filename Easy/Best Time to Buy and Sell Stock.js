/*
You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot 
achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
profit = 6-1 = 5.  Note that buying on day 2 and selling on day 1 is not 
allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

function solutionOne(prices) {
    /*
    Have a variable for the largest difference.  Iterate through the array,
    for every iteration, iterate through the elements again starting at i + 1.
    Take the difference between array at i and array at i + 1, and see if that
    difference is larger than the largest difference.

    This implementation runs in O(n**2) runtime and O(1) space
    */

    let largestProfit = -Infinity;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > largestProfit) largestProfit = profit;
        }
    }

    return largestProfit > 0 ? largestProfit : 0;
}

function solutionTwo(prices) {
    /*
    O(n) runtime, O(1) space
    I'm trying to figure out the highest and lowest values moving forward.
    If the largest value is prior to the smallest value, then it does not
    matter.  So every time there is a new minimum value, I want to reset
    the smallest value and the largest value, and then iterate through
    looking for the peak on that new lowest value.  That peak represents
    the best time to sell and the largest potential profit I can make. 
    */

    //NOTE: This can be optimized.  The largest variable is uneeded.
    let smallest = prices[0];
    let largest = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        const currentDayPrice = prices[i];
        if(currentDayPrice <= smallest) {
            smallest = currentDayPrice;
            largest = currentDayPrice;
        }
        if (currentDayPrice >= largest) {
            largest = currentDayPrice;
        }

        const potentialProfit = currentDayPrice - smallest;
        if (potentialProfit > maxProfit) maxProfit = potentialProfit;
    }

    return maxProfit > 0 ? maxProfit : 0;
}

/*
Similar
Maximum SubArray
Best tiome To Buy and Sell Stock 2
Best Time To Buy and Sell Stock 3, 4
*/