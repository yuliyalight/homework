let unitOfMeasurement = prompt("Вкажіть будь ласка одиниці вимірювання", "кілометри, години або кілограми").trim();
if ((unitOfMeasurement == 'кілометри') || (unitOfMeasurement == 'години') || (unitOfMeasurement == 'кілограми')) {
    let amount = prompt("Вкажіть будь ласка кількість").trim();
    if (!isNaN(amount)) {
        switch (unitOfMeasurement) {
            case 'кілометри':
                alert(amount + ' км це ' + amount*1000 + ' м.');
                break;
            case 'години':
                alert(amount + ' г це ' + amount*60 + ' хв.');
                break;
            case 'кілограми':
                alert(amount + ' кг це ' + amount*1000 + ' грм.');
                break;   
        };      
    } else {
        alert('Ви вказали некоректну кількість'); 
    };
} else {
    alert('Ви вказали некоректні одиниці вимірювання');
};
location.reload();






