//task 1

let password = 'пароль';
let answer = prompt("Введите пароль");


if (answer == password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неверно");
}

//task 2

let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно");
}

//task 3

let d = 10;
let e = 80;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//task 4

let a = Number('2');
let b = Number('3');
alert(a + b);

//task 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
    break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
    break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
    break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
    break;
    default:
        console.log("Неправильно указан номер месяца");
}


