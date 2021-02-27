var findLucky = function(arr) {
  let allFreq = arr.reduce((allFreq, currNum) =>{
      if(allFreq[currNum] === undefined){
          allFreq[currNum] = 1
      }
      else{
          allFreq[currNum] +=1
      }
      return allFreq
  },{})
  let largestFreq = 0
  for(let freq in allFreq){
      if(freq == allFreq[freq] && parseInt(freq)> largestFreq){
          largestFreq = freq
      }
  }
  if(largestFreq === 0){
          return -1

  }
  return largestFreq
};