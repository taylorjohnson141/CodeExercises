var isPalindrome = function(s) {
  let lower = s.toLowerCase()
  let replace = lower.replace(/\W/g, '')
  if(replace.includes('_')){
      replace = replace.replace(/_/g, "")
     }
  let arr = replace.split('')
  let revArr = [...arr].reverse()
  console.log(arr.join(),revArr.join())
  return arr.join() === revArr.join()
};