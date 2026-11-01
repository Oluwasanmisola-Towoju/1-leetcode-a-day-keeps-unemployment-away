// write a function to find the longest common prefix string amongst an array of strings 
// if there is no common prefix, return an empty string "".

const strs = ["flower", "flow", "flight", "flour"];

// TIME COMPLEXITY: O(n * m) where n is the number of strings and m is the length of the shortest string
// SPACE COMPLEXITY: O(1) since we are not using any extra space
class Solution {
    static longestCommonPrefix(strs) {
        if (strs.length === 0) {
            return "";
        }

        // take the first string as the prefix
        let prefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
            // narrow down the prefix until it matches the start of the current string
            while (strs[i].indexOf(prefix) != 0) {
                
                // shorten the prefix by removing the last character    
                prefix = prefix.substring(0, prefix.length - 1);
                
                // once the prefix is empty, return an empty string
                if (prefix.length === 0) {
                    return "";
                }
            }
        }
        console.log(prefix);
        return prefix;
    }
}

Solution.longestCommonPrefix(strs);