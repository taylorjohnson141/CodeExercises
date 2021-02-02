//A perfect number is a positive integer that is equal to the sum of 
//its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

Given an integer n, return true if n is a perfect number, otherwise return false.
var checkPerfectNumber = function(num) {
  let factorials   = []
  for(let i = 0; i< num; i++){
      if(num % i === 0 && i !== num){
          factorials.push(i)
      }
  }
  let sum = factorials.reduce((sum, currNum) =>{
      sum += currNum
      return sum
  }, 0)
  if(sum === num){
      return true
  }
  return false
};