//ДЗ 1
//перший спосіб
/*function drawTriangle(lines, element) {
  let str= ''; 
    for (let i = 0; i < lines; i++) {
        str = str + element; 
        console.log(str);
    };  
};

drawTriangle(5,'*');*/


//другий спосіб
/*function drawTriangle(lines, element) {
    let i = 0; 
    let str= '';
    do {
        i += 1; 
        str = str + element;
        console.log(str);
    } while (i < lines);  
}; 

drawTriangle(5, '*');*/


//ДЗ 2
/*let sum = 0; 
for (let i = 1; i <= 100; i++) {
    if (i%3 !== 0) {
        sum += i; 
    };
};
console.log (sum);*/


//ДЗ 3
/*function pow(x, y) {
    let res;
    if (y == 0) {
        res = 1;
        console.log (res);
    } else {
        res = x;
        for (let i = 1; i < y; i++) {
            res *= x; 
        };
        console.log (res);
    }
};

pow(2,3);*/