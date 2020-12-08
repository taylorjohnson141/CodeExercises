// A peak element is an element that is strictly greater than its neighbors.

//Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

//You may imagine that nums[-1] = nums[n] = -∞.
//Only works for arrays with a length greater than 3
var findPeakElement = function(nums) {
  if(nums.length <3){
      return 0
  }
  for(let i = 0 ; i<nums.length; i++){
      if(nums[i] > nums[i -1] && nums[i] > nums[i+1]){
          return i
      }}
  };