""" 
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space. 
"""
# CYCLE SORT
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(1)
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        n = len(nums)

        # place each valid number at its correct index
        for i in range(n):
            # keep swapping until nums[i] is in its correct spot (nums[i] - 1)  with the condition that...
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:   
                # the number must be a valid positive integer within range [1, n]
                # it is not already at its correct index position
                correct_idx = nums[i] - 1
                nums[i], nums[correct_idx] = nums[correct_idx], nums[i]

        # find the index that doesn't match it's expected value
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1

        # if 1 to n are all present then the missing number is n + 1
        return n + 1

#