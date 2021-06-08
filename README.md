# Length-of-Last-Word

Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

_Example 1:_

`
Input: s = "Hello World"
`
`
Output: 5
`


_Example 2:_

`
Input: s = " "
`
`
Output: 0
`
 

_Constraints:_

`
1 <= s.length <= 10^4
`

s consists of only English letters and spaces ' '.



# Solution in Java:

```
class Solution {
    public int lengthOfLastWord(String s) {
        int l = 0;
        s = s.trim();
        for(int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                l = 0;
            } else {
                l++;
            }
        }
        return l;
    }
}
```
