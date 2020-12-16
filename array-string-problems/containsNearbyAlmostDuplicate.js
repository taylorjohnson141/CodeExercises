// Description :Given an array of integers, 
//find out whether there are two distinct 
//indices i and j in the array such that the
// absolute difference between nums[i] and nums[j] 
// is at most t and the absolute difference between i and j is at most k.
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i = 0; i<nums.length; i++){
      for(let j = 0; j<nums.length;j++){
          if(i === j ){
              break
          }
          if(Math.abs(nums[i] - nums[j]) <=t && Math.abs(j - i) <= k){
              return true
          }
      }
  }
      return false
  };