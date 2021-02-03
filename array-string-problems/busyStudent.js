var busyStudent = function(startTime, endTime, queryTime) {
  let combinedArray = []
  for(let i = 0 ;i<startTime.length; i++){
      combinedArray.push([startTime[i],endTime[i]])
  }
  let queried = combinedArray.filter(arr =>{
      return queryTime>=arr[0] && queryTime<=arr[1]
  })
  return queried.length
};