// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

var reverseOnlyLetters = function(S) {
  let stringLetters = S.split('')
  let nonLetterIndex = []
  let result = stringLetters.reduce((finalArr,char,index) =>{
      if((/[a-zA-Z]/).test(char)){
          finalArr.unshift(char)
      }else {
           nonLetterIndex.push(
               {index:index,
                  char:char   
               })
      }
      return finalArr
  },[])
  nonLetterIndex.forEach(nonLetter =>{
      result.splice(nonLetter.index,0,nonLetter.char)
  })
  let resultString = result.join('')
  return resultString

};