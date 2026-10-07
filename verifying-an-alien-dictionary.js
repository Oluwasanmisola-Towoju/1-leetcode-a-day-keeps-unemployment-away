
// LEETCODE PROBLEM: 953. Verifying an Alien Dictionary
// INSTRUCTIONS: You are given an array of strings words of an alien language,
//  and a string order representing the order of the alphabet of that language.
//  Return true if and only if the given words are sorted lexicographically in this alien language.


// HASH MAP
// Time Complexity: 0(N * M) where N is the number of words and M is the average length of the words
// Space Complexity: 0(1) since we are using a fixed size hash map for the order of the alphabet
class Solution {
    static alienDictionary(words, order) {
        const orderMap = new Map();

        for (let i = 0; i < order.length; i++) {
            orderMap.set(order[i], i);
        }

        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];
            let foundDifference = false;

            const minLength = Math.min(word1.length, word2.length);
            for (let j = 0; j < minLength; j++) {
                if (word1[j] !== word2[j]) {
                    if (orderMap.get(word2[j]) < orderMap.get(word1[j])) {
                        return false;
                    }
                    foundDifference = true;
                    break;
                }
            }

            // If no character difference was found, the longer word must not come first
            if (!foundDifference && word1.length > word2.length) {
                return false;
            }
        }

        return true;
    }
}


// TOPOLOGICAL SORT SOLUTION FOR NEETCODE
// NEETCODE SOLUTION DIFFERS FROM LEETCODE IN THAT IT DOES NOT TAKE IN THE ORDER OF THE ALPHABET AS AN INPUT,
//  THEY INFER THE ORDER FROM THE WORDS THEMSELVES.
//  THIS IS A MORE GENERAL SOLUTION THAT CAN BE USED TO VERIFY AN ALIEN DICTIONARY WITHOUT KNOWING THE ORDER OF THE ALPHABET IN ADVANCE.
// TIME COMPLEXITY: 0(N + V + E)
// SPACE COMPLEXITY: 0(V + E)          where N = number of words, V = number of unique characters, E = number of edges in the graph
class Solution {
    foreignDictionary(words) {
        const adj = new Map();
        const inDegree = new Map();

        for (const word of words) {
            for (const ch of word) {
                if (!adj.has(ch)) {
                    adj.set(ch, new Set());
                    inDegree.set(ch, 0);
                }
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);
            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }
            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    if (!adj.get(w1[j]).has(w2[j])) {
                        adj.get(w1[j]).add(w2[j]);
                        inDegree.set(w2[j], inDegree.get(w2[j]) + 1);
                    }
                    break;
                }
            }
        }

        const queue = [];
        for (const [ch, deg] of inDegree.entries()) {
            if (deg === 0) queue.push(ch);
        }

        let result = "";
        while (queue.length > 0) {
            const ch = queue.shift();
            result += ch;
            for (const neighbor of adj.get(ch)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        return result.length === inDegree.size ? result : "";
    }
}