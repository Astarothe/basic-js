const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamName = [];
  if(typeof(members) !== "object" || members === null){
    return false
  }
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] !== "string"){
      continue;
    }
    for(let j = 0; j < members[i].length; j++){
      if(members[i][j] === " "){
      } else {
        dreamName.push(members[i][j].toUpperCase());
        break;
      }
    }
  }
  dreamName = dreamName.sort().join("");
  return dreamName;
};
