var countPrimes = function(n) {
  let nums =0
  for(let i = 0; i<n;i++){
      if(i%2 ===0 && i!==2){
          continue
      }
   nums += isPrime(i)
  }
  return nums
};
function isPrime(num) {
for(var i = 2; i < num; i++)
  if(num % i === 0) return false;
return num > 1;
}