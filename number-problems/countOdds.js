
var countOdds = function(low, high) {
  let odd = 0
  for(let i = low; i<=high;i++){
      if(i%2 !== 0 ){
          odd+=1
      }
  continue
  }
  return odd
};