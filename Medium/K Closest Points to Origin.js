/*
Given an array of points where points[i] = [xi, yi] represents a point on the 
X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance 
(i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique
(except for the order that it is in).

Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]


*/

var kClosest = function(points, k) {
    points.sort(compare);
    const output = [];
    for (let i = 0; i < k; i++) {
        output.push(points[i]);
    }

    return output;
}

function compare(a, b) {
    const distanceA = getDistance(a);
    const distanceB = getDistance(b);

    if (distanceA < distanceB) return -1;
    else if (distanceA > distanceB) return 1;
    else return 0;
}

function getDistance(points){
    const x = points[0];
    const y = points[1];

    return ((x**2) + (y**2))**.5;
}