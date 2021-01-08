//Given a list of integers nums, return whether the largest number is bigger than the second-largest number by more than two times.



class Solution {
  solve(nums) {
      nums.sort((acc,curr)=>{
          return curr - acc
      })
      return nums[0] > nums[1] *2
  }
}