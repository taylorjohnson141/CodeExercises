// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

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