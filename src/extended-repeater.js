const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let massive = [];
  str = String(str);
  if(!options.additionSeparator){
    options.additionSeparator = "|";
  }
  
  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }
  for(let i = 0; i < options.repeatTimes; i++){
    massive.push(str);
    if(options.additionRepeatTimes){
      for(let j = 0; j < options.additionRepeatTimes; j++){
        massive.push(String(options.addition));
        if(options.additionSeparator){
          if((j + 1) !== options.additionRepeatTimes){
            massive.push(options.additionSeparator);
          }
        }
      }
    } else if(options.addition !== undefined){
      massive.push(options.addition);
    }
    if(i + 1 !== options.repeatTimes && options.separator === undefined){
      massive.push("+");
    } else if(i + 1 !== options.repeatTimes){
      massive.push(options.separator);
    }
  }
  return massive.join("");
};
