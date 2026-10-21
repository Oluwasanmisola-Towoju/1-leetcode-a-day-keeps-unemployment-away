# given n non-negative integers a1, a2 .... an where each represents a point at coordinate (i, a1) . n vertical lines are drawn
#  such that the two endpoints of the line i is at (i, a1) and (i, 0)
# find two lines which, together with the x-axis forms a container such that the container contains the most water


heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]

from typing import List


# BRUTE FORCE
# TIME COMPLEXITY: O(n^2)  
# SPACE COMPLEXITY: O(1)
class Solution1:
    def maxArea(self, height: List[int]) -> int:
        res = 0

        for l in range(len(height)):
            for r in range(l + 1, len(height)):
                area = (r - l) * min(height[l], height[r])
                res = max(res, area)

        return res


# TWO POINTERS
# TIME COMPLEXITY: O(n)
# SPACE COMPLEXITY: O(1)
class MySolution:
    def maxArea(self, height: List[int]) -> int:
        res = 0
        l, r = 0, len(height) - 1

        while l < r:
            area = (r - l) * min(height[l], height[r])
            res = max(res, area)

            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return res

# GOD LEVEL
class Solution:
    def maxArea(self, height: list[int]) -> int:
        max_area = 0
        l, r = 0, len(height) - 1
        
        while l < r:
            hl, hr = height[l], height[r]
            area = (r - l) * (hl if hl < hr else hr)
            if area > max_area:
                max_area = area
            
            if hl < hr:
                while l < r and height[l] <= hl:
                    l += 1
            else:
                while l < r and height[r] <= hr:
                    r -= 1
                    
        return max_area