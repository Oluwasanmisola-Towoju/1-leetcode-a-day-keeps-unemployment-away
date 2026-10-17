# a palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
# given a string s, return true if it is a palindrome, or false otherwise.

# REVERSE STRING
# TIME COMPLEXITY: O(n)
# SPACE COMPLEXITY: O(n)
class Solution1:
    def isPalindrome(self, s: str) -> bool:
        # remove all non-alphanumeric characters and convert to lowercase
        cleaned_s = ''.join(char.lower() for char in s if char.isalnum())

        # check if the cleaned string is a palindrome
        return cleaned_s == cleaned_s[::-1]

# TWO POINTERS
# TIME COMPLEXITY: O(n)
# SPACE COMPLEXITY: O(1)
class Solution2:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1

        while left < right:
            # move left pointer to the next alphanumeric character
            while left < right and not s[left].isalnum():
                left += 1

            # move right pointer to the previous alphanumeric character
            while left < right and not s[right].isalnum():
                right -= 1

            # compare characters at left and right pointers
            if s[left].lower() != s[right].lower():
                return False

            left += 1
            right -= 1

        return True
        