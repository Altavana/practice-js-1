//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
// //в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer=prompt("Яка офіційна назва JavaScript?");
// // if (answer === "ECMAScript") {
// //     alert( "Вірно!");
// // } else {
// //      alert("Не знаєте? ECMAScript!");
// // }
//  alert (answer === "ECMAScript" ?  "Вірно!" : "Не знаєте? ECMAScript!");

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const num = Number(prompt("Enter number"));
// let hours = parseInt(num / 60);
// let minutes = num % 60;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const min = Number(prompt("Enter min"));
// const max = Number(prompt("Enter max"));
// let sum = 0;

// for (let i = max; i >= min; i--) {
//   console.log(i);
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }

// console.log(sum);

// function sumNumber(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//     return sum;
//   }
// }

// console.log(sumNumber(2, 50));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("Enter number from 1 to 4"));
// let result = "";
// switch (num) {
//   case 1:
//     result = "зима";
//     break;
//   case 2:
//     result = "весна";
//     break;
//   case 3:
//     result = "літо";
//     break;
//   case 4:
//     result = "осінь";
//     break;
//   default:
//     result = "Enter number from 1 to 4";
// }
// console.log(result);

// function seasone(num) {
//   let result = "";
//   switch (num) {
//     case 1:
//       result = "зима";
//       break;
//     case 2:
//       result = "весна";
//       break;
//     case 3:
//       result = "літо";
//       break;
//     case 4:
//       result = "осінь";
//       break;
//     default:
//       result = "Enter number from 1 to 4";
//   }
//   return result;
// }
// console.log(seasone(2));

// function seasone(num) {
//   switch (num) {
//     case 1:
//       return "зима";

//     case 2:
//       return "весна";

//     case 3:
//       return "літо";

//     case 4:
//       return "осінь";

//     default:
//       return "Enter number from 1 to 4";
//   }
// }
// console.log(seasone(5));

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера
//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Enter login");
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Enter password");
//   //   if (password === "Я головний") {
//   //     alert("Вітаю!");
//   //   } else {
//   //     alert("Невірний пароль!");
//   //   }
//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// } else if (login === "" || login === null) {
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// if (minuteValue <= 15) {
//   console.log(`${minuteValue}-перша чверть`);
// } else if (minuteValue <= 30) {
//   console.log(`${minuteValue}-друга чверть`);
// } else if (minuteValue <= 45) {
//   console.log(`${minuteValue}-третя чверть`);
// } else {
//   console.log(`${minuteValue}-четверта чверть`);
// }

// function check() {
//   const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
//   if (minuteValue <= 15) {
//     return `${minuteValue}-перша чверть`;
//   }
//   if (minuteValue <= 30) {
//     return `${minuteValue}-друга чверть`;
//   }
//   if (minuteValue <= 45) {
//     return `${minuteValue}-третя чверть`;
//   }
//   return `${minuteValue}-четверта чверть`;
// }
// console.log(check());

//Напиши функцію:
// Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

function checkNum(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number % 3 === 0) {
    return "fizz";
  }
  if (number % 5 === 0) {
    return "buzz";
  }
  return "error";
}
console.log(checkNum(30));
