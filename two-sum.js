// Given an array of integers nums and an integer target, 
// return the indices i and j such that nums[i] + nums[j] == target and i != j.


const nums = [4,5,6,3,2,1,7,8,9];
const target = 11


// BRUTE FORCE
// Time Complexity: 0n²
// Space Complexity: 0(1)
class Solution1 {
    static twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    }
}

class Solution2 {
    static twoSum(nums, target) {
        let A = [];
        for (let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }

        A.sort((a, b) => a[0] - b[0]);

        let i = 0,
            j = nums.length - 1;

        while (i < j) {
            let cur = A[i][0] + A[j][0];
            if (cur === target) {
                return [Math.min(A[i][1], A[j][1]), Math.max(A[i][1], A[j][1])]; 
            }
            else if (cur < target) {
                i++
            }
            else {
                j--;
            }
        }
        return [];
    }
}

// HASHMAP - TWO PASS
// Time Complexity: 0(n)
// Space Complexity: 0(n)
class Solution3 {
    static twoSum(nums, target) {
        const indices = {};  // val -> index

        for (let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];
            if (indices[diff] !== undefined && indices[diff] !== i) {
                return [i, indices[diff]];
            }
        }

        return [];
    }
}

// HASHMAP - ONE PASS
// Time Complexity: 0(n)
// Space Complexity: 0(n)
class Solution4 {
    static twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }
            prevMap.set(nums[i], i);
        }
        return [];
    }
}

Solution1.twoSum(nums, target);
Solution2.twoSum(nums, target);
Solution3.twoSum(nums, target);
Solution4.twoSum(nums, target);