const CustomError = require("../extensions/custom-error");

module.exports = function countCats(e) {

  let array = 0;
  for(let i = 0; i < e.length; i++){
    console.log(e[i].length)
    if(e[i].length > i){
      for(let j = 0; j < e[i].length;j++){
        if(e[i][j] === "^^"){
          array+=1;
        }

      }
    }
  }


  console.log(array);
  return array;
};
