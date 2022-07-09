function addToZero(arr) {
    let sumZero = false
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; i < arr.length; i++){
            if (arr[i] + arr[j] === 0) {
                sumZero = true
            }
        } 
    }
    return sumZero
}
console.log(addToZero([1,2,3,-1])) 
console.log(addToZero([1,2,3,4]))
// Runtime complexity is O(n^2) because of the nested for loop.
// Space complexity is O(n) because the amount of space taken is going to be determined by the input size of the array.


const hasUniqueChars = (str) => {
    let isUniq = true
    for (let i = 0; i < str.length; i++) {
        if (str.split(str[i]).length > 2) {
            isUniq = false
            break
        }
    }
    return isUniq;
}
console.log(hasUniqueChars("Monday"))
console.log(hasUniqueChars("Moonday"))
// Runtime complexity is O(n) because function time is determined by the input size of the string.
// Space complexity is O(n) because the amount of space depends on the length of the string passed in.


const isPangram = (string) =>{
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
  console.log(isPangram("I like cats, but not mice"))
//Runtime complexity is O(n) because function time is determined by the input size of the string.
// Space complexity is O(n) because the amount of space depends on the length of the string passed in.

const findLongestWord = (arr) => {
    var lgth = 0
    var longest
    for (let i = 0; i < arr.length; i++){
        if (lgth < arr[i].length){
            longest = arr[i]
        }
    }
    return longest.length
}
console.log(findLongestWord(["hi", "hello", "bully", "motocross"]))
// Runtime complexity is O(n) because function time is determined by the input size of the array.
// Space complexity is O(n) because the amount of space taken is going to be determined by the input size of the array.