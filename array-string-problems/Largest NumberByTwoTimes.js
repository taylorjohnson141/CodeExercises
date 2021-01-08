class Solution {
  solve(nums) {
      nums.sort((acc,curr)=>{
          return curr - acc
      })
      return nums[0] > nums[1] *2
  }
}