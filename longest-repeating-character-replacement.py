""" 
You are given a string s and an integer k. You can choose any character of the string
and change it to any other uppercase English character. You can perform this operation at most k times
Return the length of the longest sybstring containing the same letter you can get after performing the above operations
"""
s = ""
k = 2

# BRUTE FORCE
# TIME COMPLEXITY: 0(n²)
# SPACE COMPLEXITY: 0(m)
class Solution1:
    def characterReplacement(self, s: str, k: int) -> int:
        res = 0
        for i in range(len(s)):
            count, maxF = {}, 0

            for j in range(i, len(s)):
                count[s[j]] = 1 + count.get(s[j], 0)
                maxF = max(maxF, count[s[j]])

                if (j - i + 1) - maxF <= k:
                    res = max(res, j - i + 1)
        return res



# SLIDING WNDOW 
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(1)
class Solution2:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        res =   0
        l  =    0

        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)

            while (r - l + 1) - max(count.values()) > k:
                count[s[l]] -= 1
                l += 1

            res = max(res, r - l + 1)
        return res

# SLIDING WNDOW OPTIMAL
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(1)
class Solution3:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        res = 0

        l = 0
        maxf = 0
        for r in range(len(s)):
            count[s[r]] = 1 + count.get(s[r], 0)
            maxf = max(maxf, count[s[r]])

            while (r - l + 1) - maxf > k:
                count[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)

        return res