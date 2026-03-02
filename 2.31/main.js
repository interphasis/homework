// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90
function calculateFinalPrice(price,sale,nalog) {
    let cost=price-(price*sale/100)
    return cost= cost + (cost*nalog)
}
 console.log(calculateFinalPrice(156, 11, 0.2));
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
function checkAcces(login,passowrd) {
    if (login === "admin" && passowrd === "123456") {
        console.log("Доступ разрешен")
    }
    else {
        console.log("Доступ запрещен")
    }
}
 console.log(checkAcces("admin", 11));
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
function getTimeOfDay(time) {
    if ( time >= 0 && time <=5) {
        console.log("Ночь");
    }
    else if (time >= 6 && time <= 11) {
        console.log("Утро");
    }
    else if (time >= 12 && time <= 17) {
        console.log("День");
    }
    else if (time >= 18 && time <= 23) {
        console.log("Вечер");
    }
    else if (time < 0 || time > 23) {
        console.log("Некорректное время");
    }
}
console.log(getTimeOfDay(16));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start,end) {
    for(let i=start;start<=end; start++) {
        if (start % 2 === 0) {
            return start;
        }
    }
}
console.log(findFirstEven(41,100));