var uncommonFromSentences = function(A, B) {
  let allSentence = A + ' ' + B
  let allWords = allSentence.split(' ')
  let uniqueWords = allWords.reduce((uniqueWords,currentWord) =>{
      if(allWords.indexOf(currentWord) === allWords.lastIndexOf(currentWord)){
          uniqueWords.push(currentWord)
      }
      return uniqueWords
      
  },[])
  return uniqueWords
};