// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

const strs = ["static", "baby", "racecar", "tool", "lamb", "climb", "chill", "carrace", "loot"];

// SORTING
// TIME COMPLEXITY: 0(m * nlog(n))
// SPACE COMPLEXITY: 0(m * n)

class Solution1 {
    static groupAnagrams(strs) {
        const result = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            
            if (!result[sortedS]) {
                result[sortedS] = [];
            }
            result[sortedS].push(s);
        }
        return Object.values(result);
    }
}

// HASH MAP
// TIME COMPLEXITY: 0(m * n) where m is the length of strs and n is the length of the longest string in strs
// SPACE COMPLEXITY: 0(m * n)

class Solution2 {
    static groupAnagrams(strs) {
        const result = {}; // mapping charCount to list of anagrams
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] ++;
            }
            const key = count.join(',');
            if (!result[key]) {
                result[key] = []; 
            }
            result[key].push(s);
        }
        return Object.values(result);
    }
}

Solution1.groupAnagrams(strs);
Solution2.groupAnagrams(strs);