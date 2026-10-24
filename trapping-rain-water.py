# given n non-negative intergers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining

from typing import List
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]


# TWO POINTERS
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(1)
class MySolution:
    def trap(self, height: List[int]) -> int:
        if not height: return 0

        l, r = 0, len(height) - 1
        leftMax, rightMax = height[l], height[r]
        res = 0

        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                res += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                res += rightMax - height[r]
        print(res)
        return (res)

# BRUTE FORCE
# TIME COMPLEXITY: 0(n^2)
# SPACE COMPLEXITY: 0(1)
class Solution1:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        n = len(height)
        res = 0

        for i in range(n):
            leftMax = rightMax = height[i]

            for j in range(i):
                leftMax = max(leftMax, height[j])
            for j in range(i + 1, n):
                rightMax = max(rightMax, height[j])

            res += min(leftMax, rightMax) - height[i]
        return res


# PREFIX AND SUFFIX
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(n)
class Solution2:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0
        n = len(height)
        res = 0

        leftMax = [0] * n
        leftMax[0] = height[0]
        for i in range(1, n):
            leftMax[i] = max(leftMax[i - 1], height[i])

        rightMax = [0] * n
        rightMax[n - 1] = height[n - 1]
        for i in range(n - 2, -1, -1):
            rightMax[i] = max(rightMax[i + 1], height[i])

        for i in range(n):
            res += min(leftMax[i], rightMax[i]) - height[i]

        return res