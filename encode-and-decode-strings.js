// Design an algorithm to encode a list of strings to a string.
//  The encoded string is then sent over the network and is decoded back to the original list of strings.

const strs = ["sanmi", "wants", "to", "be", "a", "cracked", "dev"];

// INTUITION APPROACH
// Time Complexity: 0(m + n) for each encode and decode function calls
// Space Complexity: 0(m + n) for each encode and decode function calls
class Solution1 {
    static encode(strs) {

        if (strs.length === 0) return '';

        let sizes = [];
        let parts = [];
        
        for (let s of strs) {
            sizes.push(s.length)
        }
        for (let sz of sizes) {
            parts.push(String(sz), ',');
        }
        parts.push('#', ...strs);
        const stringArray = parts.join('');

        // this.decode(stringArray);

        return stringArray;
    }

    static decode(str) {
        if (str.length === 0) {
            return [];
        }

        let sizes = [];
        let res = [];
        let i = 0;

        while(str[i] !== '#') {
            let j = i;
            while (str[j] !== ',') {
                j++
            }

            sizes.push(parseInt(str.substring(i, j), 10));
            i = j + 1;
        }
        i++;
        for (let sz of sizes) {
            res.push(str.substr(i, sz));
            i += sz;
        }
        return res;
    }
}

// OPTIMAL APPROACH
// Time Complexity: 0(m + n) for each encode and decode function calls
// Space Complexity: 0(m + n) for each encode and decode funstion calls

class Solution2 {
    static encode(strs) {
        const res = [];
        for (let s of strs) {
            res.push(String(s.length), '#', s)
        }
        const stringArray =  res.join('');

        // this.decode(stringArray);

        return stringArray
    }

    static decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;

            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}

Solution1.encode(strs);
Solution2.encode(strs);