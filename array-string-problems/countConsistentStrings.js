// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//Return the number of consistent strings in the array words.


var countConsistentStrings = function(allowed, words) {
  let allowedIt = allowed.split('')
  let allWords = words.filter((word)=>{
          let goodTo = false
          for(let j = 0; j<word.length;j++){
              
               goodTo = allowedIt.includes(word.charAt(j))
              if(goodTo === false){
                  return false
              }
          }
      return true
  })
  return allWords.length 
};