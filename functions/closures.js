function add(num1, num2) {
    function innerAdd(first, second) {
        return first + second;
    }
    return innerAdd(num1, num2);
}

console.log(add(4,6));     //returns 10

function add2(num3) {
    //anonymous function/unnamed
    return function(num4) {
        return num3 + num4;
    }
}

let add4 = add2(4);
console.log(add4(6));
console.log(add4(13));

function calculation(num5) {
    let result = num5;
    return{
        //object notation with anon func as value of key/value pair/JSON object
        add: function(num6) {
            result += num6;
        },
        subtract: function(num6) {
            result -= num6;
        },
        multiplication: function(num6) {
            result *= num6;
        },
        division: function(num6) {
            result /= num6;
        },
        getResult: function() {
            return result;
        }
    }
}

let myCalc = calculation(0);
//dot notation
myCalc.add(43);
console.log(myCalc.getResult());
myCalc.multiplication(3);
console.log(myCalc.getResult());