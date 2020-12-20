// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.
// Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
var singleNumber = function(nums) {
  let arr = []
  for(let i = 0; i<nums.length; i ++){
      if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
          arr.push(nums[i])
      }
  }
  return arr
};