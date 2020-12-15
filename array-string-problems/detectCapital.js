var detectCapitalUse = function(word) {
  let words = word.slice(1,word.length)
  let firstLetter =word.slice(0,1)
if(word.toLowerCase() === word || word.toUpperCase() ===word){
   return true
}else if((firstLetter === word.slice(0,1).toUpperCase()) && word.slice(1,word.length) === word.slice(1,word.length).toLowerCase()){
   return true
}
   return false

}

