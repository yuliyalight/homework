//ДЗ 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

function myBlend(arr) {   
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random()*i);
        let a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
    }
};

myBlend(arr);
console.log(arr);

//ДЗ 2
/*const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        },
                        {
                            name: 'Клієнт 1.2.4',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                            partners: [
                                {
                                    name: 'Клієнт 1.2.3.4',
                                    type: 'subsubSubCompany',
                                    uses: 'Рішення для продажу квитків',
                                    sells: 'Рішення для продажу квитків',
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};


function findValueByKey(obj, companyName) {
    if (obj.name === companyName) {
        return JSON.stringify(obj, null, 2);
    }
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            let result = findValueByKey(obj[key], companyName);
            if (result) {
                return result;
            }
        }
    }
    return null;
};*/

/*let companyInfo = findValueByKey(company, 'Велика Компанія');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 1');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 2');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 1.1');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 1.2');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 1.2.4');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт 1.2.3.4');
console.log(companyInfo);*/
/*let companyInfo = findValueByKey(company, 'Клієнт');
console.log(companyInfo);*/

