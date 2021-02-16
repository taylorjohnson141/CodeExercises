//Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
var removeDuplicates = function(S) {
  if(!hasDuplicates(S)){
     return S
 }
 let result = S.split('')
  for(let i =0; i<result.length;i++){
     if(result[i] === result[i+1]){
         result.splice(i,2)
        }
 }
 
 return removeDuplicates(result.join(''))
 
};

function hasDuplicates(s){
 for(let i =0; i<s.length;i++){
     if(s.charAt(i) === s.charAt(i +1)){
        return true
        }
 }
 return false
}
