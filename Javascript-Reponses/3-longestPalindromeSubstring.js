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
    //case one: all the string is a palindrome
    const isPalin = s.split('').reverse().join('') === s;
    if (isPalin) return s;

    //case two: end substring is palindrome
    let longestPalin = '';
    //for each char in the string, we expand to the left and right
    for (let i = 0; i < s.length; i++) {
        console.log("i: ", i, "char: ", s[i]);
        longestPalin = expandFromIndex(s, longestPalin, i, i);//impar cases
        longestPalin = expandFromIndex(s, longestPalin, i, i + 1);//par cases
    }
    //case three: start substring is palindrome


    return longestPalin;
};

/**
 * 
 * @param {string} s 
 * @param {string} longestPalin 
 * @param {number} left 
 * @param {number} right 
 */
function expandFromIndex(s, longestPalin, left, right) {
    //compare borders
    while (left >= 0 && right < s.length) {
        //move borders, must move before compare to reduce empty compares
        if (left > 0) left--;
        right++;
        console.log("left: ", left, "right: ", right, " --- ", s[left], s[right]);
        //to be candidate we need to have the same char at the borders
        if (s[left] !== s[right]) {
            //current compare is false so we need to go back one step
            if (left != 0 || (s[left] !== s[right - 1])) left++;
            right--;
            break;
        }
    }
    console.log("choosen -> left: ", left, "right: ", right);
    // console.log("testing: ", s[left], s[right]);
    console.log("-----------------------------------");

    //test middle to end
    const candidateMidleToEnd = s.substring(left, right + 1);
    console.log("candidateMidleToEnd: ", candidateMidleToEnd);
    const isPalinEnd = candidateMidleToEnd.split('').reverse().join('') === candidateMidleToEnd;
    if (candidateMidleToEnd.length > longestPalin.length && isPalinEnd) {
        longestPalin = candidateMidleToEnd;
    }

    //test middle to start
    if (left > 0) {
        const candidateStart = s.substring(left - 1, right);
        console.log("candidateStart: ", candidateStart);
        const isPalinStart = candidateStart.split('').reverse().join('') === candidateStart;
        if (candidateStart.length > longestPalin.length && isPalinStart) {
            longestPalin = candidateStart;
        }
    }

    return longestPalin;
}

// console.log("Result: ", longestPalindrome("bb"));
// console.log("Result: ", longestPalindrome("babad"));
// console.log("Result: ", longestPalindrome("cbbd"));
console.log("Result: ", longestPalindrome("ccd"));
// console.log("Result: ", longestPalindrome("csknks"));
// console.log("Result: ", longestPalindrome("jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"));
// console.log("Result: ", longestPalindrome("adam"));