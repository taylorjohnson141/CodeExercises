//Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
var isPalindrome = function(x) {
  if(x <0){
      return false
  }
 let xStr = x.toString()
  let xArr = xStr.split('')
  let xArrCopy = [...xArr]
  xArrCopy.reverse()
  let reverse = xArrCopy.join('')
  let og = xArr.join('')
  if(reverse === og){
      return true
  }
  return false
};