# given a string s, return the number of palindromic substrings in it

from typing import List

# TWO POINTERS
# TIME COMPLEXITY: 0(n²)
# SPACE COMPLEXITY: 0(1)
class Solution:
    def countSubstrings(self, s: str) -> int:
        res = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                res += 1
                l -= 1
                r += 1

            # even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                res += 1
                l -= 1
                r += 1

        return res

# TWO POINTERS OPTIMAL
# TIME COMPLEXITY: 0(n²)
# SPACE COMPLEXITY: 0(1)
class Solution2:
    def expand(self, str: str, left: int, right: int) -> int:
        res = 0
        while left >= 0 and right < len(str) and str[left] == str[right]:
            res += 1
            left -= 1
            right += 1
        return res

    def countSubstrings(self, str: str) -> int:
        l = len(str)
        res = 0
        for i in range(l):
            # odd length
            res += self.expand(str, i, i)

            # even length
            res += self.expand(str, i, i + 1)

        return res

class MySolution:
    def countSubstrings(self, str: str) -> int:
        # set up two pointers, l and r, to iterate through the string
        l = len(str)
        r = 0
        res = 0

        # iterate through the string with the left pointer
        for i in range(l):
            # for each position, check for odd-length palindromes
            # set the right pointer to the same position as the left pointer
            r = i

            # check for odd-length palindromes by expanding outwards from the center
            while r < l and i - (r - i) >= 0 and str[i - (r - i)] == str[r]:
                # increment the result counter for each palindrome found
                res += 1
                # increment the right pointer to check for the next character
                r += 1

            # even length
            # check for even-length palindromes by expanding outwards from the center
            r = i + 1
            # check for even-length palindromes by expanding outwards from the center
            while r < l and i - (r - i) + 1 >= 0 and str[i - (r - i) + 1] == str[r]:
                # increment the result counter for each palindrome found
                res += 1
                # increment the right pointer to check for the next character
                r += 1

        return res