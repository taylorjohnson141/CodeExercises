//Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).


var maxProduct = function(nums) {
  nums.sort((a,b)=>{
      return b -a
  })
  return (nums[0]-1) * (nums[1]-1)
};