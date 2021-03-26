const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) {
   let str = value + "";
    this.arr.push(str);
    return this;
  },
  removeLink(position) {
    if(position < 0 || position > this.arr.length || null === position){
      this.arr = [];
      throw new Error("THROWN")
    } else{
      this.arr.splice(position - 1,1);
      return this;
    } 
  },
  reverseChain() {
   this.arr.reverse();
   return this;
  },
  finishChain() {
    let finish = this.arr.slice();
    this.arr = [];
    finish = finish.map(elem => "( " + `${elem}`+ " )");
    return finish.join("~~");
  }
};

module.exports = chainMaker;
