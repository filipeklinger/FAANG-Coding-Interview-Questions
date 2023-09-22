/**
 * 
 Question:
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
----------------
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
----------------
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
----------------
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //Two pointer test
    const numWithIndex = nums.map((n,index) => [n,index]);
    const sorted = numWithIndex.sort((a,b)=> a[0]-b[0]);
    let left = 0,right = sorted.length - 1;
    while(left < right){
        const value = sorted[left][0]+ sorted[right][0];
        if(value == target){
            return [sorted[left][1], sorted[right][1]]
        }else if(value < target){
            left ++;
        }else{
            right --;
        }
    }
    return [];
};