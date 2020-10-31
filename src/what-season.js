const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){
    return "Unable to determine the time of year!";
  }

  if(Object.prototype.toString.call(date) != "[object Date]"){
    throw new Error("THROWN");
  }

  let month = date.getMonth();
  console.log()
  if(month == undefined || month === "" || month === " "){
     throw new Error('Unable to determine the time of year!');
   }
  if(month > -1 && month < 2 || month > 10 && month < 12){
    return "winter";
  }else if(month > 1 && month < 5){
    return "spring";
  } else if(month > 4 && month < 8){
    return "summer";
  } else if(month > 7 && month < 11){
    return /autumn|fall/;
  } else{
    return 'Unable to determine the time of year!'
  }
};
