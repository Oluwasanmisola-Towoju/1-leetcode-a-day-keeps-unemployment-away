// Given a roman numeral, convert it to an integer.
const numeral = "MCDXLIII"
const s = "MCDXLIII"

// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(1)

class Solution1 {
    static romanToInt(numeral) {
        const romanMap = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
            IV: 4,
            IX: 9,
            XL: 40,
            XC: 90,
            CD: 400,
            CM: 900
        }

        let sum = 0;
        let i = 0;
        
        while (i < numeral.length) {
            if (i < numeral.length - 1) {
                const twoChar = numeral[i] + numeral[i + 1];
                if (romanMap[twoChar]) {
                    sum += romanMap[twoChar];
                    i = i+2;
                    continue;
                }
            }
            sum += romanMap[numeral[i]];
            i++;
        }
        return sum;
    }
}

console.log(Solution1.romanToInt(numeral)); 

class Solution2 {
    static romanToInt(s) {
        const roman = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };

        let res = 0;
        for (let i = 0; i < s.length; i++) {
            if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
                res -= roman[s[i]];
            } else {
                res += roman[s[i]];
            }
        }
        return res;
    }
}

console.log(Solution2.romanToInt(s));