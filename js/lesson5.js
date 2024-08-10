// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.
// const value = Number(prompt("Enter value"));
// const checkValue = (value) => {
//   return new Promise((resolve, reject) => {
//     if (Number.isNaN(value)) {
//       reject("error");
//     } else if (value % 2 === 0) {
//       setTimeout(() => resolve("even"), 1000);
//     } else if (value % 2 !== 0) {
//       setTimeout(() => resolve("odd"), 2000);
//     }
//   });
// };
// checkValue(value)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Додай відображення дати і часу в реальному часі
// <p class="date">Current data and time: <span></span></p>

const time = document.querySelector(".date span");
time.textContent = new Date().toLocaleString("uk");
setInterval(() => (time.textContent = new Date().toLocaleString()), 1000);
