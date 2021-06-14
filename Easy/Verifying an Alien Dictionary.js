/*
In an alien language, surprisingly they also use english lowercase letters, but
possibly in a different order. The order of the alphabet is some permutation of
lowercase letters.

Given a sequence of words written in the alien language, and the order of the 
alphabet, return true if and only if the given words are sorted 
lexicographicaly in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

*/

var isAlientSorted = function(words, order) {
    const letterRanking = {};
    for (let i = 0; i < order.length; i++) {
        const char = order[i];
        letterRanking[char] = i;
    }


    function compare(a, b) {
        const iterationLength = a.length > b.length ? a.length : b.length;
        for (let i = 0; i < iterationLength; i++) {
            if (!a[i]) return -1;
            if (!b[i]) return 1;
    
            const aChar = a[i];
            const bChar = b[i];

            if (letterRanking[aChar] > letterRanking[bChar]) {
                return 1;
            } else if (letterRanking[bChar] > letterRanking[aChar]) {
                return -1;
            }
        }
        return 0;
    }

    const wordsForComparison = [...words];
    wordsForComparison.sort(compare);
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== wordsForComparison[i]) return false;
    }
    return true;
}

console.log(isAlientSorted(['word', 'world', 'row'], "worldabcefghijkmnpqstuvxyz"))
console.log(isAlientSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))
console.log(isAlientSorted(["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"))

/*I chose the above approach because I wasn't sure how to efficiently compare
the words without having to compare each word to every word in the array 
O(n**2) runtime.  The solution however, is to compare each word to its adjacent
words.  In the array, [a, b, c, d, e, f, g], I can start at b and compare it to
a and c.  If b > a and b < c, then I know they are sorted.  
*/

function solutionTwo(words, order) {
    const letterValues = {};
    for (let i = 0; i < order.length; i++) {
        letterValues[order[i]] = i;
    }

    if (words.length === 2) {
        return compare(words[0], words[1], letterValues);
    } else {
        for (let i = 1; i < words.length - 1; i++) {
            if(!compare(words[i - 1], words[i], letterValues) || !compare(words[i], words[i + 1], letterValues)) {
                return false;
            }
        }
    }
    return true;
}

function compare(word1, word2, letterValues) {
    // return word2 > word 1
    const iteratorLength = word1.length > word2.length ? word1.length : word2.length;
    for (let i = 0; i < iteratorLength; i++) {
        if (!word1[i]) return true;
        if (!word2[i]) return false;

        const letter1Value = letterValues[word1[i]];
        const letter2Value = letterValues[word2[i]];

        if (letter2Value > letter1Value) return true;
        if (letter2Value < letter1Value) return false;
    }
    return true;
}
