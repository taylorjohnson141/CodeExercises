var majorityElement = function(nums) {
  for(let i = 0 ; i<nums.length ; i++ ){
      let currNum = 0
      for(let j = 1;j<nums.length; j++){
      if(i !== j && nums[i] === nums[j]){
          currNum +=1
      }
          if(currNum > nums.length /2){
              return nums[i]
          }
  }
  }
  
};