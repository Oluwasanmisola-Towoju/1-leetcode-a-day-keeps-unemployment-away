// Given an array of integers nums, return the length of the longest consequtive sequence of elements that can be formed

const nums = [2, 20, 4, 10, 3, 4, 5]


// BRUTE FORCE
// TIME COMPLEXITY: 0(n²)
// SPACE COMPLEXITY: 0(n)
class Solution1 {
    static longestConsecutive(nums) {
        let res = 0;
        const store = new Set(nums);

        for (let num of nums) {
            let streak = 0;
            let curr = num;
            while (store.has(curr)) {
                streak++;
                curr++;
            }
            res = Math.max(res, streak);
        }
        return res;
    }  
}


//SORTING
// TIME COMPLEXITY: 0(n log(n))
// SPACE COMPLEXITY: 0(n) or 0(1) depending on the sorting algorithm

class Solution2 {
    static longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        nums.sort((a, b) => a - b);

        let res =    0;
        let curr =   nums[0]
        let streak = 0;
        let i =      0;

        while (i < nums.length) {
            if (curr !== nums[i]) {
                curr = nums[i];
                streak = 0;
            }
            while (i < nums.length && nums[i] === curr) {
                i++
            }
            streak++
            curr++;
            res = Math.max(res, streak);
        }
        return res;
    }
}

// HASH SET
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(n)

class Solution3 {
    static longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}

// HASH MAP
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(n)
class Solution4 {
    static longestConsecutive(nums) {
        const mp = new Map();
        let res = 0;

        for (let num of nums) {
            if (!mp.has(num)) {
                mp.set(num, (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1);
                mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
                mp.set(num + (mp.get(num + 1) || 0), mp.get(num));

                res = Math.max(res, mp.get(num));
            }
        }
        return res;
    }
}

Solution1.longestConsecutive(nums);
Solution2.longestConsecutive(nums);
Solution3.longestConsecutive(nums);
Solution4.longestConsecutive(nums);