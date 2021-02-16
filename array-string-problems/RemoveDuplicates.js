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
