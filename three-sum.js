// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

const nums = [-1, 0, 1, 2, -1, -4];

// TWO POINTERS
// TIME COMPLEXITY: O(n²)
// SPACE COMPLEXITY: O(n) for the result array
class MySolution {
    static threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) {
                break;
            }

            if (i === 0 || nums[i - 1] !== nums[i]) {
                let left = i + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum = nums[i] + nums[left] + nums[right];
                    if (sum < 0) {
                        left++;
                    }
                    else if (sum > 0) {
                        right--;
                    }
                    else {
                        res.push([nums[i], nums[left++], nums[right--]]);
                        while(left < right && nums[left] === nums[left - 1]) {
                            ++left
                        }
                    }
                }
            }
        }
        return res;
    }
}


// FREQUENCY MAP
// TIME COMPLEXITY: O(n²)
// SPACE COMPLEXITY: O(n) for the hash set
class Solution1 {
    static threeSum(nums) {
        const neg = {};
        const pos = {};
        let zeros = 0;
        
        for (const x of nums) {
            if (x < 0) {
                neg[x] = (neg[x] || 0) + 1;
            } else if (x > 0) {
                pos[x] = (pos[x] || 0) + 1;
            } else {
                zeros += 1;
            }
        }
        
        const r = [];
        
        if (zeros > 0) {
            for (const nStr in neg) {
                const n = Number(nStr);
                if (pos[-n]) {
                    // sorting the triplet to ensure consistent order
                    r.push([n, 0, -n]); 
                }
            }
            if (zeros > 2) {
                r.push([0, 0, 0]);
            }
        }

        const sets = [[neg, pos], [pos, neg]];
        
        for (const [set_a, set_b] of sets) {
            const set_a_items = Object.entries(set_a).map(([x, q]) => [Number(x), q]);
            
            for (let i = 0; i < set_a_items.length; i++) {
                const [x, q] = set_a_items[i];
                
                for (let j = i; j < set_a_items.length; j++) {
                    const [x2, q2] = set_a_items[j];
                    
                    if (x !== x2 || (x === x2 && q > 1)) {
                        const target = -x - x2;
                        if (set_b[target]) {
                            // sorting the values so LeetCode doesn't treat [x, x2, target] 
                            // and [x2, x, target] as separate unexpected answers
                            const triplet = [x, x2, target].sort((a, b) => a - b);
                            r.push(triplet);
                        }
                    }
                }
            }
        }

        // remove duplicate triplets if your nested loops cross paths 
        // across the two set iterations.
        const uniqueTriplets = Array.from(
            new Set(r.map(t => t.join(','))),
            str => str.split(',').map(Number)
        );

        return uniqueTriplets;
    }
}

// HASH MAP
// TIME COOMPLEXITY: 0(n²)
// SPACE COMPLEXITY: 0(n)
class Solution2 {
    static threeSum(nums) {
        nums.sort((a, b) => a - b);
        const count = new Map();
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], count.get(nums[i]) - 1);
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) - 1);
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                const target = -(nums[i] + nums[j]);
                if (count.get(target) > 0) {
                    res.push([nums[i], nums[j], target]);
                }
            }

            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) + 1);
            }
        }
        return res;
    }
}