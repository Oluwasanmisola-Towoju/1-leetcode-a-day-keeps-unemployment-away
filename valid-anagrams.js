// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// Two strings are anagrams if they contain the same characters, with each character appearing the same number of times, regardless of order.

const s = "racecar";
const t = "carrace";
const m = s.length;
const n = t.length;

// SORTING
// Time Complexity: O(nlogn + mlogm)
// Space Complexity: O(1) or O(n + m) depending on the sorting algorithm

class Solution1 {
    static isAnagram(s, t) {
        if (n !== m) {
            return false;
        }
        else if (n === m) {
            let sSort = s.split('').sort().join();
            let tSort = t.split('').sort().join();
            return sSort == tSort;
        } 
        else {
            return false;
        }
    }
}

// HASH MAP
// Time Complexity: O(n + m)
// Space Complexity: O(1)

class Solution2 {
    static isAnagram(s, t) {
        if (n !== m) {
            return false;
        }
        else if (n === m) {
            const countS = {}; 
            const countT = {};

            for (let i = 0; i < m; i++) {
                countS[s[i]] = (countS[s[i]] || 0) + 1;
                countT[t[i]] = (countT[t[i]] || 0) + 1;
            }

            for (const key in countS) {
                if (countS[key] !== countT[key]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
}

// HASH TABLE
// Time Complexity: O(n + m)
// Space Complexity: O(1)

class Solution3 {
    isAnagram(s, t) {
        if (n !== m) {
            return false;
        }

        const count = new Array(26).fill(0);

        for (let i = 0; i < n; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }
        return count.every((val) => val === 0);
    }
}

Solution1.isAnagram(s, t);
Solution2.isAnagram(s, t);
Solution3.isAnagram(s, t);