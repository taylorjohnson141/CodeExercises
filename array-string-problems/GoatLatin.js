var toGoatLatin = function(S) {
  let finalString = ''
  let vowels = ['a','e','i','o','u']
  let iteratableString = S.split(' ')
  for(let i = 0 ; i< iteratableString.length; i++){
      if(vowels.includes(iteratableString[i].charAt(0).toLowerCase()) ){
         finalString += iteratableString[i]
          finalString += 'ma'
         }
      else{
         finalString +=iteratableString[i].slice(1,iteratableString[i].length)
          finalString += iteratableString[i].slice(0,1)
          finalString += 'ma'

      }
 for(let j =0; j<i+1; j++){
  finalString += 'a'
 }
      if(i !== iteratableString.length -1){
              finalString += ' '

      }
  }
  return finalString

};