const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let massive = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-prev"){
      if(arr[i - 1] === undefined){
        continue;
      }
      massive.pop();
    } else if(arr[i] === "--double-prev"){
      if(arr[i - 1] === undefined){
        continue;
      }
      massive.push(arr[i - 1])
    } else if(arr[i] === "--double-next"){
      if(arr[i + 1] === undefined){
        continue;
      }
      massive.push(arr[i + 1]);
    } else if(arr[i] === "--discard-next"){
      if(arr[i + 1] === undefined){
        continue;
      } else if( arr[i + 2] === "--double-prev" || arr[i + 2] === "--discard-prev"){
        i++;
      }
      i++;
    } else{
      massive.push(arr[i]);
    }
  }
  return massive;
};
