/**
 * Question
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = "dvdf"
Output: 3
Explanation: The answer is "vdf", with the length of 3.

 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let biggerS = [];
    let currS = [];
    for (i = 0; i < s.length; i++) {
        const c = s[i];
        if (!currS.includes(c)) {
            currS.push(c)
        } else {
            //se o caractere ja existe no array, entao o array deve ser reiniciado
            //a partir do caractere repetido
            const index = currS.indexOf(c);
            currS = [
                ...currS.slice(index + 1),
                c
            ];
        }
        console.log("currS: ",currS);
        //a cada iteracao, verifica se o tamanho do array atual eh maior que o maior
        if (biggerS.length < currS.length) {
            biggerS = [...currS];
        }
    }
    
    return biggerS.length;
};

console.log(lengthOfLongestSubstring("dvdf"));