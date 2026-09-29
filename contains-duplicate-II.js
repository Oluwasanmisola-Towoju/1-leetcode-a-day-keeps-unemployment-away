// You are given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array
// such that nums[i] == nums[j] and abs(i - j) <= k, otherwise return false.

const nums = [1,2,3,1];
const k = 3;

// HASH SET WITHOUT SLIDING WINDOW
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(min(n, k))
class Solution1 {
    static containsNearbyDuplicate(nums, k) {
        const seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true;
            }
            seen.add(nums[i]);
            if (seen.size > k) {
                seen.delete(nums[i - k]);
            }
        }
        return false;
    }
}

// BRUTE FORCE
// TIME COMPLEXITY: 0(n * min(n, k))
// SPACE COMPLEXITY: 0(1)

class Solution2 {
    static containsNearbyDuplicate(nums, k) {
        for (let left = 0; left < nums.length; left++) {
            for (let right = left + 1; right < Math.min(nums.length, left + k + 1); right++) {
                if (nums[left] === nums[right]) {
                    return true;
                }
            }
        }
        return false;
    }
}

// HASH MAP
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(n)
class Solution3 {
    static containsNearbyDuplicate(nums, k) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
                return true;
            }
            map.set(nums[i], i);
        }

        return false;
    }
}

// HASH SET WITH SLIDING WINDOW
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(min(n, k))
class Solution4 {
    static containsNearbyDuplicate(nums, k) {
        let window = new Set();
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            if (right - left > k) {
                window.delete(nums[left]);
                left++
            }
            if (window.has(nums[right])) {
                return true;
            }
            window.add(nums[right]);
        }
        return false;
    }
}