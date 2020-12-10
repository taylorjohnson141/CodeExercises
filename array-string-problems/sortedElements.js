class Solution {
  solve(nums) {
      let add =0
      let numsToSort = [...nums]
      numsToSort.sort((a,b) =>{
             return a-b 
      
      })
      for(let i = 0 ; i< nums.length; i++){
          if(nums[i] === numsToSort[i] ){
              add +=1
          }
      }
      return add
  }
}