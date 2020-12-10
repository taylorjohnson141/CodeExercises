
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