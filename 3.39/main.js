    // Задача 1.
    // Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

    const person = {
        name: "Pavel",
        age:10 ,
        country: "Uganda",
    }
    console.log(person.name,person.age,person.country);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const test= {};

function isEmpty(object) {
   for (const key in object) {
    if (object.key) {
        return false;
    }
   }
    return true;
}
console.log(isEmpty(test)); 

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
    title:"Сказка",
    description:"О рыбке золтой",
    isCompleted:true,
}
const rating= 10;
function cloneAndModify(object, modifications) {
    object= {...task, modifications};
    for (const key in object) {
        console.log(object.key);
    }
    return object;
}
console.log( cloneAndModify(task,rating))

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Не пон