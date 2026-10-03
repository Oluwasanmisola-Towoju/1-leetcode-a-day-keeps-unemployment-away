# Design a HashMap without using any built-in hash table libraries.

#TIME COMPLEXITY: 0(1)
# SPACE COMPLEXITY: 0(1000000) since the key is in the range [0,1000000]

class MyHashMap:

    def __init__(self):
        self.map = [-1] * 1000001

    def put(self, key: int, value: int) -> None:
        self.map[key] = value

    def get(self, key: int) -> int:
        return self.map[key]

    def remove(self, key: int) -> None:
        self.map[key] = -1