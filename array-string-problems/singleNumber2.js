var singleNumber = function(nums) {
  let arr = []
  for(let i = 0; i<nums.length; i ++){
      if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
          arr.push(nums[i])
      }
  }
  return arr
};