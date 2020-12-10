var reverseWords = function(s) {
  let l = s.split(' ')
  let result = []
  for(let i = l.length ; i >-1;i--){
      if(l[i] === ''){
          continue
      }
      result.push(l[i]) 
  }
  return result.join(' ').trim()
};