//Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
  let arr = []
  let currhead = head
  while(currhead !== null){
      for(let prop in currhead){
          if(prop === 'val' ){
              arr.push(currhead[prop])
          }
          if(prop ==='next'){
              currhead = currhead.next                 
          }   
      }
  }
  if(arr.length ===1){
      return true
  }
  let reverse = [...arr].reverse()
  return JSON.stringify(reverse) ===JSON.stringify(arr)
};