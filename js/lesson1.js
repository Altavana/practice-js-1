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

function sumNumber(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
    return sum;
  }
}

console.log(sumNumber(2, 50));
