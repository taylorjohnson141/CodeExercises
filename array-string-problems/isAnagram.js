// Given two strings s and t , write a function to determine if t is an anagram of s.


var isAnagram = function(s, t) {
  let sArr = s.split('').sort().join('')
  let tArr = t.split('').sort().join('')
  
  return sArr === tArr
  };