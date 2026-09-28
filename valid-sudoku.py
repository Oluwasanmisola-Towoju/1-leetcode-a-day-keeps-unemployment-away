# You are given a 9 x 9 sudoku board. A Sudoku board is valid if the following rules are followed:
#    1. Each row must contain the digits 1-9 without duplicates
#    2. Each column must contain the digits 1-9 without duplicates
#    3. Each of the nine 3x3 sub-boxe of the grid must contain the digits 1-9 without duplicates
# Return true if the sudoku board is valid otherwise return false
from typing import List, Tuple, defaultdict

board= [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]       
    ]

# BRUTE FORCE
# TIME COMPLEXITY: O(n²)
# SPACE COMPLEXITY: 0(n)
class Solution1:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(9):
            seen = set()
            for i in range(9):
                if board[row][i] == ".":
                    continue
                if board[row][i] in seen:
                    return False
                seen.add(board[row][i])

        for col in range(9):
            seen = set()
            for i in range(9):
                if board[i][col] == ".":
                    continue
                if board[i][col] in seen:
                    return False
                seen.add(board[i][col])

        for square in range(9):
            seen = set()
            for i in range(3):
                for j in range(3):
                    row = (square//3) * 3 + i
                    col = (square % 3) * 3 + j
                    if board[row][col] == ".":
                        continue
                    if board[row][col] in seen:
                        return False
                    seen.add(board[row][col])
        return True

# HASH SET
# TIME COMPLEXITY: O(n²)
# SPACE COMPLEXITY: O(n²)

class Solution2:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        cols, rows, squares = defaultdict(set), defaultdict(set), defaultdict(set)

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                if ( board[r][c] in rows[r] or
                    board[r][c] in cols[c] or
                    board[r][c] in squares[(r//3, c//3)]):
                    return False

                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[(r//3, c//3)].add(board[r][c])
        return True

# BITMASK
# TIME COMPLEXITY: O(n²)
# SPACE COMPLEXITY: O(n)

class Solution3:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [0] * 9
        cols = [0] * 9
        squares = [0] * 9

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                val = int(board[r][c]) - 1
                if (1 << val) & rows[r] or (1 << val) & cols[c] or (1 << val) & squares[(r//3)*3 + c//3]:
                    return False
                rows[r] |= (1 << val)
                cols[c] |= (1 << val)
                squares[(r//3)*3 + c//3] |= (1 << val)
        return True

Solution1.isValidSudoku(Solution1, board)
Solution2.isValidSudoku(Solution2, board)
Solution3.isValidSudoku(Solution3, board)