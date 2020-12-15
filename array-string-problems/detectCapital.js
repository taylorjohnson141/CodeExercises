// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.

var detectCapitalUse = function(word) {
  let words = word.slice(1,word.length)
  let firstLetter =word.slice(0,1)
if(word.toLowerCase() === word || word.toUpperCase() ===word){
   return true
}else if((firstLetter === word.slice(0,1).toUpperCase()) && words === word.slice(1,word.length).toLowerCase()){
   return true
}
   return false

}

