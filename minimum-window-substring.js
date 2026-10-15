// Given two strings s and t, return the shortest substring of s such that every character in t, 
// including duplicates, is present in the substring.
//  If such a substring does not exist, return an empty string "".

const s = "OUZODYXAZV";
const t = "XYZ";

// SLIDING WINDOW
// TIME COMPLEXITY: O(n * m) where n is the length of s and m is the length of t
// SPACE COMPLEXITY: O(k) where k is the number of unique characters in t
class Solution1 {
    static minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        let window = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0,
            need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (countT[c] && window[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}

// SLIDING WINDOW WITH HASHMAP
// TIME COMPLEXITY: O(n + m) where n is the length of s and m is the length of t
// SPACE COMPLEXITY: O(k) where k is the number of unique characters in t
class Solution2 {
    static minWindow(s, t) {
        if (s.length === 0 || t.length === 0 || s.length < t.length) {
            return ""
        }

        let mapT = new Map();


        for (let i = 0; i < t.length; i++) {
            const code = t.charCodeAt(i);
            mapT.set(code, (mapT.get(code) || 0) + 1);
        }

        const require = mapT.size;
        let l = 0;
        let r = 0;
        let create = 0;
        let ans = [-1, 0, 0];
        let subStringMap = new Map();

        while(r < s.length) {
            let c = s.charCodeAt(r);
            let count = subStringMap.get(c) || 0;
            subStringMap.set(c, count + 1);

            if (mapT.has(c) && subStringMap.get(c) === mapT.get(c)) {
                create++;
            }

            while(l <= r && create === require) {
                c = s.charCodeAt(l);
                if (ans[0] === -1 || ans[0] > r - l + 1) {
                    ans[0] = r - l + 1;
                    ans[1] = l;
                    ans[2] = r;
                }
                subStringMap.set(c, (subStringMap.get(c) || 0) - 1);
                if (mapT.has(c) && subStringMap.get(c) < mapT.get(c)) {
                    create--;
                }
                l++;
            }
            r++;
        }

        if (ans[0] === -1) {
            return "";
        }

        return s.substring(ans[1], ans[2] + 1);
    }
}

// BRUTE FORCE
// TIME COMPLEXITY: O(n^3) where n is the length of s
// SPACE COMPLEXITY: O(k) where k is the number of unique characters in t
class Solution3 {
    static minWindow(s, t) {
        if (t === '') return '';

        let countT = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let res = [-1, -1];
        let resLen = Infinity;

        for (let i = 0; i < s.length; i++) {
            let countS = {};
            for (let j = i; j < s.length; j++) {
                countS[s[j]] = (countS[s[j]] || 0) + 1;

                let flag = true;
                for (let c in countT) {
                    if ((countS[c] || 0) < countT[c]) {
                        flag = false;
                        break;
                    }
                }

                if (flag && j - i + 1 < resLen) {
                    resLen = j - i + 1;
                    res = [i, j];
                }
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}