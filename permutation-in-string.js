//Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

str1 = "ab"
str2 = "eidbaooo"

//SLIDING WINDOW
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(1)
class Solution {
    static checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        const base = 'a'.charCodeAt(0);

        // initialize the frequency maps for s1 and s2
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - base]++; 
            s2Count[s2.charCodeAt(i) - base]++;
        }

        // helper function to correctly check if frequency arrays match
        const matches = (arr1, arr2) => arr1.every((value, index) => value === arr2[index]);

        // slide the window through s2 to compare the maps
        for (let i = 0; i < s2.length - s1.length; i++) {
            if (matches(s1Count, s2Count)) {
                return true;
            }
            s2Count[s2.charCodeAt(i + s1.length) - base]++;  // add the next character to the window
            s2Count[s2.charCodeAt(i) - base]--;              // remove the character that is no longer in the window
        }

        // check the last window remaining
        return matches(s1Count, s2Count);
    }
}

// HASH TABLE
// TIME COMPLEXITY: 0(n * m) where n is the length of s2 and m is the length of s1
// SPACE COMPLEXITY: 0(n)
class Solution2 {
    static checkInclusion(s1, s2) {
        let count1 = {};
        for (let c of s1) {
            count1[c] = (count1[c] || 0) + 1;
        }

        let need = Object.keys(count1).length;
        for (let i = 0; i < s2.length; i++) {
            let count2 = {};
            let cur = 0;
            for (let j = i; j < s2.length; j++) {
                let c = s2[j];
                count2[c] = (count2[c] || 0) + 1;

                if ((count1[c] || 0) < count2[c]) {
                    break;
                }

                if ((count1[c] || 0) === count2[c]) {
                    cur++;
                }

                if (cur === need) {
                    return true;
                }
            }
        }
        return false;
    }
}