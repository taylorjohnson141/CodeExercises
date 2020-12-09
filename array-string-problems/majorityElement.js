//description 
//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

//You may assume that the array is non-empty and the majority element always exist in the array.


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