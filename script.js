//ДЗ 1
/*function isNotANumber(x) {
    if (typeof x === 'undefined') {
        console.log(true);
    } else if ((x/10) || (x == null) || (x == "") || (x == " ")) {
        console.log(false);
    } else {
        console.log(true);
    }
};*/

//isNotANumber(NaN); //true
//isNotANumber(undefined); //true
//isNotANumber({}); //true
//isNotANumber(true); // false
//isNotANumber(null); // false
//isNotANumber(28); // false
//isNotANumber("28"); // false
//isNotANumber("28.28"); // false
//isNotANumber(""); // false
//isNotANumber(" "); // false
//isNotANumber("28,5"); //true


// ДЗ 2
/*function pad(str, symbol, quantity, booleanValue) {
    let lengthOfStr = str.length;
        if (quantity > lengthOfStr ? quantity = 1 : quantity) {
            for (let i = 0; i < quantity; i++) {
                if (booleanValue) {
                    str = symbol + str;
                } else {
                    str += symbol;
                };  
            };
        }; 
    return str;
};

let res = pad('abc', '*', 2, true);
console.log(res);*/


// ДЗ 3
/*function checkProbabilityTheory(count) {
    let number;
    let quantityOfEven = 0;
    let quantityOfOdd = 0;
    let percentageOfEven;
    let percentageOfOdd;
        for (let i = 0; i < count; i++) {
        number = Math.floor(100 + Math.random() * 900);
        console.log(number);
        if (number%2 == 0) {
            quantityOfEven += 1;
        } else {
            quantityOfOdd += 1;
        };
    };
    percentageOfEven = Math.round(quantityOfEven/count * 100);
    percentageOfOdd = Math.round(quantityOfOdd/count * 100);
    console.log('Кількість згенерованих чисел: ' + count);
    console.log('Парних чисел:  ' + quantityOfEven);
    console.log('Не парних чисел:  ' + quantityOfOdd);
    console.log('Відсоток парних до не парних:   ' + percentageOfEven + '%' + percentageOfOdd);
};

checkProbabilityTheory(33);*/
