var trailingZeroes = function(n) {
  if(n ===0){
      return 0
  }
  let l = factorialize(n)
  string = l.toString()
  arr = string.split('')
  let zeros = 0
  console.log(arr)
  for(let i = 0; i<arr.length; i++){
      if(arr[i] == 0){
          
          zeros +=1
      }
      if(arr[i] != 0){
          zeros = 0
      }
  }
  return zeros
  
};
function factorialize(num) {
if (num < 0) 
      return -1;
else if (num == 0) 
    return 1;
else {
    return (num * factorialize(num - 1));
}
}