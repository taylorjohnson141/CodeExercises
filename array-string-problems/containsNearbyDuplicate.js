//Given an array of integers and an integer k, 
// find out whether there are two distinct indices i and 
// j in the array such that nums[i] = nums[j] 
// and the absolute difference between i and j is at most k.
var containsNearbyDuplicate = function(nums, k) {
  for(let i =0; i<nums.length; i++){
  for(let j = 0 ; j<nums.length; j++){
      if(i === j){
          break
      }
      else{
          if(nums[j] === nums[i] && i - j <=k){
              return true
          }
      }
  }
      
  }
  return false
};