// given an array of integers nums, find the next permutation of nums, the replacement must be in place and use only constant extra memory

const nums = [2, 5, 7, 8, 3];

// GREEDY ALGORITHM
// TIME COMPLEXITY: 0(n)
// SPACE COMPLEXITY: 0(1)
class Solution {
    static nextPermutation(nums) {
        const n = nums.length;
        let i = n - 2;
        // locate the pivot point
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--; 
        }

        // if the pivot point is found, swap it with the next larger element
        if (i >= 0) {
            let j = n - 1;
            while (nums[j] <= nums[i]) {
                j--;
            }
            
            // swap the pivot point with the next larger element from the right side of the array
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        // reverse the elements to the right of the pivot point
        let l = i + 1,
            r = n - 1;
        
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}

Solution.nextPermutation(nums);



// BRUTE FORCE
// TIME COMPLEXITY: 0(n! * n)
// SPACE COMPLEXITY: 0(n! * n)
class Solution {
    static nextPermutation(nums) {
        const permute = (arr) => {
            const res = [];
            arr.sort((a, b) => a - b);
            const used = Array(arr.length).fill(false);
            const path = [];
            const dfs = () => {
                if (path.length === arr.length) {
                    res.push([...path]);
                    return;
                }
                for (let i = 0; i < arr.length; i++) {
                    if (used[i]) continue;
                    if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1])
                        continue;
                    used[i] = true;
                    path.push(arr[i]);
                    dfs();
                    path.pop();
                    used[i] = false;
                }
            };
            dfs();
            return res;
        };

        const perms = permute([...nums]);
        perms.sort((a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return a[i] - b[i];
            }
            return 0;
        });

        for (let i = 0; i < perms.length; i++) {
            const p = perms[i];
            if (p.every((v, j) => v === nums[j])) {
                const next = perms[(i + 1) % perms.length];
                for (let j = 0; j < nums.length; j++) {
                    nums[j] = next[j];
                }
                break;
            }
        }
    }
}