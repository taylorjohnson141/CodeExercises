

var threeConsecutiveOdds = function(arr) {
  for(let i = 0 ; i< arr.length; i++){
      console.log('num,arr 1',i,arr[i] % 2 !== 0 )
      console.log('num,arr 2',i,arr[i+1] % 2 !== 0 )
      console.log('num,arr 3',i,arr[i+2] % 2 !== 0 )
      if(i === arr.length -2 || arr.length <3){
          return false
      }
      if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0 ){
          return true
      }
  }
};