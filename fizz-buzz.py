"""
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
"""

# SIMPLE SOLUTION
# TIME COMPLEXITY: O(n)
# SPACE COMPLEXITY: O(n)
class Solution1:
    def fizzBuzz(self, n: int) -> list[str]:
        res = []
        for i in range(1, n + 1):
            if i % 3 == 0 and i % 5 == 0:
                res.append("FizzBuzz")
            elif i % 3 == 0:
                res.append("Fizz")
            elif i % 5 == 0:
                res.append("Buzz")
            else:
                res.append(str(i))
        return res

# OPTIMIZED SOLUTION
# TIME COMPLEXITY: O(n)
# SPACE COMPLEXITY: O(n)
class Solution2:
    def fizzBuzz(self, n: int) -> list[str]:
        res = []
        for i in range(1, n + 1):
            output = ""
            if i % 3 == 0:
                output += "Fizz"
            if i % 5 == 0:
                output += "Buzz"
            if not output:
                output = str(i)
            res.append(output)
        return res