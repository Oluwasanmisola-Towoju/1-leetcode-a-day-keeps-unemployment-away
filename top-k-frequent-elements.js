// Given an integer array nums and an integer k, return the most frequent elements within the array

const nums = [2, 8, 9, 6, 3, 22, 48, 44, 22, 6, 9, 3, 6, 5, 3];

const k = 2;

// SORTING
// Time Commplexity: 0(n log(n))
// Space Complexity:  0(n)
class Solution1 {
    static topKFrequent(nums, k) {
        const count = {};
        for (const num in nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const arr = Object.entries(count).map(([num, freq]) => [
            freq,
            parseInt(num)
        ]);

        arr.sort((a, b) => b[0] -a[0]);

        return arr.slice(0, k).map((pair) => pair[1]);
    }
}

// HEAP
// Time Complexity: 0(n log(k))
// Space Complexity: 0 (n + k)
class Solution2 {
    static topKFrequent(nums, k) {
        const count = {};
        for (const num in nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue((x) => x[1]);
        for (const [num, cnt] of Object.entries(count)) {
            heap.enqueue([num, cnt]);
            if (heap.size() > k) heap.dequeue();
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}

// BUCKET SORT
// Time Complexity: 0(n)
// Space Complexity: 0(n)
class Solution3 {
    static topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}