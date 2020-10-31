const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(disksNumber,turnsSpeed) {
if(disksNumber == null){
return "THROWN"
}

 let turns = 2**disksNumber - 1;

 let seconds = Math.floor(turns * 3600 / turnsSpeed);

return {seconds,turns} ;
};
