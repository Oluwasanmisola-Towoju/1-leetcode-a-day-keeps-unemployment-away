const nums = [44,22,33,11,1];
const threshold = 5;

// Time Complexity: O(n log n)
// Space Complexity: O(1)
class Solution1 {
    static findSmallestDivisor(nums, threshold) {
        let left = 1;
        let right = Math.max(...nums);
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const sum = nums.reduce((acc, num) => acc + Math.ceil(num / mid), 0);
            if (sum <= threshold) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        console.log(left);
        return left;
    }
}

class Solution2 {
    static findSmallestDivisor(nums, threshold) {
        let left = 1;
        let right = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > right) {
                right = nums[i]
            }
        }
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += Math.ceil(nums[i] / mid);
            }
            if (sum <= threshold) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        console.log(left);
        return left;
    }
}


// Solution 2 tends to execute with a faster time due to the fact that it doesn't need to calculate the sum of the array for each iteration.
// and its space complexity is O(1) since it doesn't need to store the sum of the array for each iteration.
// plus its better for the maximum to be found with a loop