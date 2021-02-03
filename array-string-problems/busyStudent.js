// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

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

// alt solution(on)
var busyStudent = function(startTime, endTime, queryTime) {

let count = 0
for(let i =  0; i<startTime.length; i++){
  if(queryTime >= startTime[i] && queryTime <= endTime[i]){
    count++ 
  }
}
return count
}