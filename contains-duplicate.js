// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

const nums = [1, 4, 6, 8, 3, 4, 1];

// BRUTE FORCE 
// Time complexity: O(n²)
// Space complexity: O(1)

class Solution {
    static hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++ ) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false
    }
}

// SORTING
// Time complexity: O(nlog(n))
// Space complexity: O(1) or O(n) depending on the sorting algorithm
class Solution2 {
    static hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i+1]) {
                console.log(nums);
                return console.log(true);
            }
        }
        return false;
    }
}


// HASH SET
// Time complexity: O(n)
// Space complexity: O(n)
class Solution3 {
    static hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}


// HASH SET LENGTH
// Time complexity: O(n)
// Space complexity: O(n)
class Solution4 {
    static hasDuplicate(nums) {
        return new Set(nums).size < nums.length; 
    }
}

Solution.hasDuplicate(nums);
Solution2.hasDuplicate(nums);
Solution3.hasDuplicate(nums);
Solution4.hasDuplicate(nums);