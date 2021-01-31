// //A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.
 
// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
 
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin. 
// var toGoatLatin = function(S) {
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