//description (binarySearch)
//You are given an integer n consisting of digits 1, 2, and 3 and you can flip one digit to a 3. Return the maximum number you can make.


class Solution {
  solve(n) {
     let nString = String(n) 
     let nArr = nString.split('')
     for(let i = 0 ; i<nArr.length; i++){
         if(nArr[i] >= 3 ){
             continue
         }
         else{
             nArr[i] = 3
             break
         }
     }
     return parseInt(nArr.join(''))
  }
}