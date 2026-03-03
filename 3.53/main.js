// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);
console.log(users);
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
midAge = 0;

const getUserAverageAge = (users) => {
  for (let i = 0; i < users.length; i++) {
    midAge += users[i].age;
  }
  return midAge / users.length;
};
console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const admins = [];
  users.forEach((user) => {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
}

console.log(getAllAdmins(users));
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
const massive = [0, 1, 5, 7, 4, 2, 0, 1];
function first(arr, n) {
  for (let i = 0; i < n; ++i) {
    arr.pop();
  }
  if (n === 0) {
    arr = [];
  }
  if (n === undefined) {
    return arr[0];
  }

  return arr;
}
console.log(first(massive, 3));
console.log(first(massive, 0));
console.log(first(massive));
