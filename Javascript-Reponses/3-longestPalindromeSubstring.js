/**
 * Question
 * Given a string s, return the longest 
palindromic
 
substring
 in s.


Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    //case one all word is palindromic
    if (isPalindromic(s)) return s;
    
    let longestPalin = '';
    let substringLenght = 1;
    let curPointer = 0;
    //TODO improve this solution O(n^3) is not good
    //case two find substring palindromic
    while (substringLenght <= s.length) {
        //here we are iterating over all substring possibilities with window size substringLenght
        currSub = s.split('').slice(curPointer, curPointer + substringLenght);
        const isPalin = currSub.join('') === currSub.reverse().join('');
        if (isPalin && currSub.length > longestPalin.length) {
            longestPalin = currSub.join('');
        }
        curPointer++;
        //if the pointer reaches the end of the string, then the substring size must be incremented
        if(curPointer == s.length){
            substringLenght++;
            curPointer = 0;
        }
        
    }
    return longestPalin;
};
function isPalindromic(s){
    const reversed = s.split('').reverse();
    return s === reversed.join();
}

console.log("Result: ", longestPalindrome("babad"));
console.log("Result: ", longestPalindrome("cbbd"));
console.log("Result: ", longestPalindrome("acc"));
console.log("Result: ",longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"));