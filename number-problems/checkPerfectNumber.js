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