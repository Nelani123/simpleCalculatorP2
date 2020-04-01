'use strict';

class Calculator {
  constructor() {
    this.lastNum = 0;
    this.slot = [];
  }

  add(...args) {
    let sum = 0;
    for (let num of args) {
      if (num == 'Last') {
        num = this.last();
      }
      else if (num == 'slot_' + (num.toString().charAt(num.length - 1))) {
        console.log((num.charAt(num.length - 1)), 'we are here')
        sum += this.get_slot(num.charAt(num.length - 1))
      } else if (!isNaN(num)) {
        sum += num;
      }
      console.log(num, 'also here');
    }


    multiply(...args){
      let sum = 1;
      for (let num of args) {
        if (num == 'Last') {
          num = this.last();
        }
      else if (num == 'slot_' + (num.toString().charAt(num.length - 1))) {
        console.log((num.charAt(num.length - 1)), 'we are here');
        sum += this.get_slot(num.charAt(num.length - 1));
      } else if (!isNaN(num)) {
        sum += num;
      }
      console.log(num, 'also here');
    }
  }
      this.lastAns = Answer;
      return Answer;
    }

  last(){
    return this.lastAns;
  }

  set_slot(num){
this.arr.push(this.lastAns);
   return this.arr[num - 1];
  };
  
  get_slot(num) {
    return this.arr[num - 1];
  }
}


let casio = new Calculator();
console.log(casio.add(100, 200), 'should return 300');
console.log(casio.add(10, 20), 'should return 30');
console.log(casio.get_slot(1), 'should return 300');
console.log(casio.get_slot(2), 'should return 30');
console.log(casio.last(), 'should return 30');
console.log(casio.add('Last', 10), 'should return 40 for using last');
console.log(casio.add('slot_2', 10), 'should return 40 for using slot');
console.log(casio.add('slot_', 10), 'should return 30 pics');
module.exports = { Calculator }





