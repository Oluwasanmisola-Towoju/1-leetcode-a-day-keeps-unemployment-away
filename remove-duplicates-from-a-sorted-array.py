"""
given an integer array nums in non-decreasing order, remove the duplicates in place
such that each unique element appears only once, must be done with 0(1) extra memory
"""

from typing import List

nums = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 7]

class MySolution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        l = 1

        for r in range(1, len(nums)):
            if nums[r] != nums[r - 1]:
                nums[l] = nums[r]
                l += 1
        return l

class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        n = len(nums)
        l = r = 0
        while r < n:
            nums[l] = nums[r]
            while r < n and nums[r] == nums[l]:
                r += 1
            l += 1
        return l