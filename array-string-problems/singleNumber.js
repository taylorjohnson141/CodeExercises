//description :
//Given a non-empty array of integers nums, 
//every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
  return nums.find((num,index )=>{
     return nums.indexOf(num) === nums.lastIndexOf(num)
 })
  
};