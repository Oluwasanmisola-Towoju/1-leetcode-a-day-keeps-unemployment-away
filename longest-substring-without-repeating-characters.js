// Given a string str, find the length of the longest substring without duplicate characters
const str = "rcnuircbhhhrcuw";

// BRUTE FORCE
// TIME COMPLEXITY: 0(n * m)
// SPACE C0MPLEXITY: 0(n)
// where n is the length of the string and m is the total number of unique characters in the string

class Solution1 {
    static lengthOfLongestSubstring(str) {
        let res = 0;

        for (let i = 0; i < str.length; i++) {
            let charSet = new Set();

            for (let j = i; j < str.length; j++) {
                if (charSet.has(str[j])) {
                    break;
                }

                charSet.add(str[j]);
            }
            res = Math.max(res, charSet.size);
        }
        return res;
    }
}


// SLIDING WINDOW
// TIME COMPLEXITY: 0(n)
// SPACE C0MPLEXITY: 0(m)
class Solution2 {
    static lengthOfLongestSubstring(str) {
        const seen = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < str.length; right++) {

            while (seen.has(str[right])) {
                seen.delete(str[left]);
                left++;
            }


            seen.add(str[right]);

            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}

// SLIDING WINDOW OPTIMAL
// TIME COMPLEXITY: 0(n)
// SPACE C0MPLEXITY: 0(m)
class Solution3 {
    static lengthOfLongestSubstring(str) {
        let mp = new Map();
        let l = 0,
            res = 0;

        for (let r = 0; r < str.length; r++) {
            if (mp.has(str[r])) {
                l = Math.max(mp.get(str[r]) + 1, l);
            }
            mp.set(str[r], r);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}

Solution1.lengthOfLongestSubstring(str);
Solution2.lengthOfLongestSubstring(str);
Solution3.lengthOfLongestSubstring(str);