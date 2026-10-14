import collections
import heapq
from typing import List

# DEQUE
# TIME COMPLEXITY: 0(n)
# SPACE COMPLEXITY: 0(n)
class Solution1:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        output = []
        q = collections.deque()
        l = r = 0

        while r < len(nums):
            # keep the deque decreasing so its first index always holds the maximum.
            while q and nums[q[-1]] < nums[r]:    # while smaller values exist in the queue
                q.pop()
            q.append(r)

            # remove left value from the window
            if l > q[0]:
                q.popleft()

            # add the maximum value to the output list once we have a full window.
            if (r + 1) >= k:
                output.append(nums[q[0]])
                l += 1
            r += 1

        return output

# HEAP
# TIME COMPLEXITY: 0(n log(n))
# SPACE COMPLEXITY: 0(n)
class Solution2:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        heap = []
        output = []

        for i in range(len(nums)):
            # Store negative values because heapq is a min-heap.
            heapq.heappush(heap, (-nums[i], i))

            # only start adding to the output list once we have a full window.
            if i >= k - 1:
                # discard heap entries that have moved outside the current window.
                while heap[0][1] <= i - k:
                    heapq.heappop(heap)

                # add the maximum value to the output list.
                output.append(-heap[0][0])

        return output