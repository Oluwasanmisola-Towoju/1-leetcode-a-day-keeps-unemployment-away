// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const prices = [7, 1, 5, 3, 6, 4];

// BRUTE FORCE
// Time Complexity: O(n^2)
// Space Complexity: O(1)
class Solution1 {
    static maxProfit(prices) {
        let res = 0;
        for (let i = 0; i < prices.length; i++) {
            let buy = prices[i];
            for (let j = i + 1; j < prices.length; j++) {
                let sell = prices[j];
                res = Math.max(res, sell - buy);
            }
        }
        return res;
    }
}

// SLIDING WINDOW
// Time Complexity: O(n)
// Space Complexity: O(1)
class Solution2 {
    static maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            else {
                maxProfit = Math.max(maxProfit, prices[i] - minPrice); 
            }
        }

        return maxProfit;
    }
}

class Solution3 {
    static maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;  

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price;
            }
            else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
}