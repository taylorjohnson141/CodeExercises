var maxProduct = function(nums) {
  nums.sort((a,b)=>{
      return b -a
  })
  return (nums[0]-1) * (nums[1]-1)
};