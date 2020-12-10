var findDuplicate = function(nums) {
  for(let i = 0; i< nums.length; i ++){
      for(let j = 0 ;j< nums.length ; j++){
          if(j === i){
              continue
          }
          else if(nums[j] === nums[i]){
              return nums[i]
          }
      }
  }
};