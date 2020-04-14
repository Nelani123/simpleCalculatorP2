'Use strict'

class calculator{

  constructor(){
    this.regex = /\d+/g;
    this.lastValue = 0;
    this.slots = {};
  }

  add(){
    let sum = 0;
    let i = 0;
    for(;i<arguments.length;i++){
      if(arguments[i]==='LAST'){
        sum += parseInt(this.lastValue);
      }else if(arguments[i] !="LAST" && typeof(arguments[i])=='string'){
        let getNum = arguments[i].match(this.regex);
        sum = sum + parseInt(Object.values(this.slots[getNum])[0]);

      }
      else
      {
        sum += parseInt(arguments[i]);
      }
    }
    this.lastValue = sum;
    return sum;
  }

  multiply(){
    let product = 1;
    for (var i = 0; i < arguments.length; i++){
      if (arguments[i] === `LAST`) {
        product *= parseInt(this.last());
      }else if (arguments[i] != `LAST` && typeof (arguments[i]) == `string`){
        let getNum = arguments[i].match(this.regex);
        product *= parseInt(Object.values(this.slots[getNum])[0]);
      } else {
        product *= parseInt(arguments[i]);
      }
    }
    this.last_value = product;
    return product;
  }

  last(){
    return parseInt(this.lastValue)
  }

  set_slot(num){
    this.slots[num] = {number:this.last()}
    const slotResult = Object.values(this.slots[num]);
    return slotResult;
  }

  get_slot(index){
    this.slot_results = this.slots[index]

    return parseInt(this.slot_results);
  }
}
const calc = new calculator();

console.log(calc.add(3,5));
console.log(calc.multiply(30,2));

console.log(calc.add(3,5,2));

console.log(calc.add(1,2));
console.log(calc.multiply("LAST",5));

console.log(calc.add(1,2));
console.log(calc.multiply(10,20));
console.log(calc.add(100,200));

console.log(calc.add("LAST",10));

module.exports = { calculator }
