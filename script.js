//ДЗ 1
let cat = {
    breed: "Scotish fold",
    color: "Chinchilla Silver",
    age: "2 year",
    weight: "5 kg",
    getInfo: function() {
        for (let key in this){
            console.log(key + ': ' + this[key]);
        }    
    }
};
cat.getInfo();
cat.gender = "Male";
cat.getInfo();

//ДЗ 2
/*var services = {
	"стрижка": "60 грн",
	"гоління": "80 грн",
	"Миття голови": "100 грн"    
};

function price(obj) {
    let sumPrice = 0;
    let price = 0;
    for (let key in obj){
        price = obj[key];
        price = +price.slice(0,-4);
        sumPrice += price;  
    }
    return console.log('загальна вартість "наданих послуг": ' + sumPrice + ' грн');    
};
function minPrice(obj) {
    let prices = Object.values(obj);
    let minPrice = +prices[0].slice(0,-4);
        for (let i = 1; i < prices.length; i++){
            prices[i] = +prices[i].slice(0,-4);
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
        }    
    return console.log('мінімальний price: ' + minPrice);
};

function maxPrice(obj) {
    let price = 0;
    let maxPrice = 0;
        for (let key in obj){
            price = obj[key];
            price = +price.slice(0,-4);
            if (price > maxPrice) {
                maxPrice = price;
            }
        }    
    return console.log('максимальний price: ' + maxPrice);
};*/

/*price(services);
minPrice(services);
maxPrice(services);
console.log(Object.entries(services));*/
/*services['Фарбування'] = "270 грн";
services['Розбити скло'] = "200 грн";
console.log(Object.entries(services));
price(services);
minPrice(services);
maxPrice(services);*/
