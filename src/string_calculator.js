module.exports = class Calculator {
    constructor() {
        this.slotArr = [];
        this.slotResults = [];
        this.prev = 0;
    }
​
    add() {
        let sum = 0;
        // Loop through each number while adding it
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i] === 'LAST') {
                arguments[i] = this.prev;
            }
​
            sum += arguments[i];
            arguments[i] = this.prev;
            this.prev = sum;
        }
        this.slotResults.push(sum);
​
        // Return the final sum of the numbers added together
        return sum;
    }

    multiply() {
        let sum = 1;
        // Loop through each number while multiplying it
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i] === 'LAST') {
                arguments[i] = this.prev;
            }
​
            sum += arguments[i];
            arguments[i] = this.prev;
            this.prev = sum;
        }
        this.slotResults.push(sum);
​
        // Return the final sum of the numbers multiplied together
        return sum;
    }

    last() {
        return this.prev;
    }
​
    
    set_slot(slot){
        this.slotArr.push(slot);
    }
​
    get_slot(slot){
        let slotResultPos = slot - 1;
        let slotResult = this.slotResults[slotResultPos];
        return slotResult;
    }
};

let calculator = new calc;
​
console.log(calculator.add(1,2));
console.log(calculator.add("LAST",5))
calculator.set_slot(1);
console.log("slot results");
console.log(calculator.get_slot(1));
console.log(calculator.add(10,20));
calculator.set_slot(2);
console.log(calculator.get_slot(2));
​


