//We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

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