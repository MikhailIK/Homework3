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
        console.log("Зима");
        break;
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Зима");
    break;
    case 3:
        console.log("Зима");
    break;
    case 4:
        console.log("Весна");
    break;
    case 5:
        console.log("Весна");
    break;
    case 6:
        console.log("Лето");
    break;
    case 7:
        console.log("Лето");
    break;
    case 8:
        console.log("Лето");
    break;
    case 9:
        console.log("Осень");
    break;
    case 10:
        console.log("Осень");
    break;
    case 11:
        console.log("Осень");
    break;
    default:
        console.log("Неправильно указан номер месяца");
        break;
}

//task 6

