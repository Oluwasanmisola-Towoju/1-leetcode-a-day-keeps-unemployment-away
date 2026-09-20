// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

const nums = [1, 2, 4, 6, 7];

// BRUTE FORCE
// Time Complexity: 0(n²)
// Space Complexity: 0(n) 
class Solution1 {
    static productExceptSelf(nums) {
        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    product *= nums[j];
                }
            }
            res[i] = product;
        }
        console.log(res);
        return res;
    }
}

// DIVISION
//Time Complexity: 0(n)
// Space Complexity: 0(n)
class Solution2 {
    static productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num !== 0) {
                product *= num;
            }
            else {
                zeroCount++
            }
        }
        
        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? product : 0;
            }
            else {
                res[i] = product / nums[i];
            }
        }
        console.log(res);
        return res;
    }
}

// PREFIX & SUFFIX
// Time Complexity: 0(n)
// Space Complexity: 0(n)
class Solution3 {
    static productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);
        const pref = new Array(n);
        const suff = new Array(n);

        pref[0] = 1;
        suff[n -1] = 1;
        for (let i = 1; i < n; i++) {
            pref[i] = nums[i - 1] * pref[i - 1];
        }

        for (let i = n - 2; i >= 0; i--) {
            suff[i] = nums[i + 1] * suff[i + 1];
        }

        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i];
        }
        return res;
    }
}

//  PREFIX AND SUFFIX OPTIMAL
// Time Complexity: 0(n)
// Space Complexity: 0(1)
class Solution4 {
    static productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
    }
}

Solution1.productExceptSelf(nums);
Solution2.productExceptSelf(nums);
Solution3.productExceptSelf(nums);
Solution4.productExceptSelf(nums);