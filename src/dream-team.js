const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(e) {
  let massive = [];
  if(typeof(e) !== "object" || e === null){
    return false
  }
  for(let i = 0; i < e.length; i++){
    if((typeof(e[i])) !== "string"){
      continue;
    }
    for(let j = 0; j <e[i].length;j++){
      console.log(e[i][j]);
      if(e[i][j] !== " "){
       let perem = e[i][j].toUpperCase();
        massive.push(perem);
        console.log(massive);
        break;
      }
    }
  }
  if(massive.length === 0){
    return false;
  }

  console.log(massive);
  let finaly = massive.sort().join("");
  console.log(finaly);
  return finaly;
};
