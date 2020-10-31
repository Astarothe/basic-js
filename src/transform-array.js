const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let massive = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-prev"){
      massive.pop();
  } else if(arr[i] === "--double-prev"){
      if(arr[i - 1] === undefined){
      }else{
        massive.push(arr[i - 1]);
      }
  } else if(arr[i] === "--double-next"){
      console.log(arr[i+1]);
      if(arr[i + 1] === undefined){
      }else{
        massive.push(arr[i+1])
      }
    }else if(arr[i] === "--discard-next"){
      if(arr[i + 1] === undefined){

      }else{
        if(arr[i + 2] === "--discard-prev" || arr[i + 2] === '--double-prev'){
          i+=2
        }else{
          i++;
        }
      }
    } else{
      massive.push(arr[i])
    }
  }
  return massive;
};
