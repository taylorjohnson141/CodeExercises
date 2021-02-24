//An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic

var isMonotonic = function(A) {
  let currentDirection;
  for(let i = 0; i<A.length; i++){
      if(A[i] === A[i+1]){
          continue
      }
      console.log(currentDirection)
      if(A[i] < A[i+1] ){
          if(currentDirection === 'decrease'){
              return false
          }
          currentDirection = "increase"
      }else {
      if(currentDirection === 'increase' && A[i +1] !== undefined){
              return false
          }             currentDirection = "decrease"
      }
  }
  return true
};