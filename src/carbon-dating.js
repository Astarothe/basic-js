const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {
  const numberValidator = str => /^\d+$/.test(str);
  let string = String(numActivity);

  if(numActivity !== string || numActivity === "" ){
    console.log(false)
    return false;
  }else if(numberValidator !== numActivity){
    return false;
  } else {
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
    if(t < 0){
      return false;
    }
    return t
  }

};
