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