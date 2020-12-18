//Count the number of prime numbers less than a non-negative number, n.


var countPrimes = function(n) {
  let nums =0
  for(let i = 0; i<n;i++){
   nums += isPrime(i)
  }
  return nums
};
function isPrime(num) {
for(var i = 2; i < num; i++)
  if(num % i === 0) return false;
return num > 1;
}