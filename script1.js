let age = prompt("Вкажіть будь ласка скільки Вам років").trim(); 
    if ((age > 0) && (age <= 100)) {
        if ((age == 1 ) || (age == 21 ) || (age == 31 ) || (age == 41 ) || (age == 51 ) || (age == 61 ) || (age == 71 ) || (age == 81 ) || (age == 91 )) {
            alert('Ваш вік ' + age + ' рік');
        } else if ((age >= 2 && age <= 4) || (age >= 22 && age <= 24) || (age >= 32 && age <= 34) || (age >= 42 && age <= 44) || (age >= 52 && age <= 54) || (age >= 62 && age <= 64) || (age >= 72 && age <= 74) || (age >= 82 && age <= 84) || (age >= 92 && age <= 94)) {
            alert('Ваш вік ' + age + ' роки');
        } else {
            alert('Ваш вік ' + age + ' років');
        };
    } else {
        alert('Ви вказали некоректний вік'); 
    };
location.reload();
        
