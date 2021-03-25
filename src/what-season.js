const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(e) {
  if(typeof(e) !== "object"){
    return "Unable to determine the time of year!";
  }else if(toString.call(e) !== "[object Date]"){
    throw new Error("THROWN");
  }
  let month = e.getMonth();
  if(month < 2 || month === 11){
    return "winter"
  } else if(month < 5){
    return "spring"
  } else if(month < 8){
    return "summer"
  } else{
    return "autumn"
  }
};
