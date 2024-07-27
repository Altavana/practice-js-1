// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ul");
// const addButton = document.createElement("button");
// const removeButton = document.createElement("button");

// addButton.textContent = "Add";
// removeButton.textContent = "Remove";

// const input = document.createElement("input");

// document.body.append(input, addButton, removeButton, list);

// const output = () => {
// const inputValue = input.value.trim();

// if (!inputValue){
//   return;
// }

// const liElement = document.createElement("li");
// liElement.textContent = inputValue;
// list.append(liElement);

// console.log(list.children);

// if(list.children.length % 2 === 0){
//   liElement.style.backgroundColor = "yellow";
// } else {
//   liElement.style.backgroundColor = "blue";
// }

// input.value = "";

// }

// const removeAction = () => {
//   if (!list.lastChild){
//     return;
//   }
// list.lastChild.remove();
// }

// addButton.addEventListener('click', output);

// removeButton.addEventListener('click', removeAction);

// Створити розмітку на основі масива даних, де у кожного елемента списку
// буде вказано ім'я, кількість лайків і перелічені теги
// в indexed.html додайте список ul.stats, в який буде рендеритись цей список
// const tweets = [
//   { id: "000", name: "Alex", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", name: "Oleh", likes: 2, tags: ["html", "css"] },
//   { id: "002", name: "Ihor", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", name: "Borys", likes: 8, tags: ["css", "react"] },
//   { id: "004", name: "Jhon", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statsList = document.querySelector(".stats");
// const createMarkup = (arr) => {
//   return arr
//     .map(
//       ({ name, likes, tags }) => `<li>
//         <p>Name: ${name}</p>
//         <p>Likes: ${likes}</p>
//         <p>Tags: ${tags.join(", ")}</p>
//       </li>`
//     )
//     .join("");
// };
// statsList.insertAdjacentHTML("beforeend", createMarkup(tweets));

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const changeFigure = () => {
//   figure.style.cssText = forms[randomither(forms.length)];
//   figure.style.backgroundColor = getRandomHexColor();
//   figure.style.position = "absolute";
//   figure.style.top = `${randomither(95)}%`;
//   figure.style.left = `${randomither(95)}%`;
// };
// const figure = document.createElement("div");
// changeFigure();
// document.body.append(figure);

// figure.addEventListener("click", changeFigure);

/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/
// const items = document.querySelectorAll(".listItem");
// const doubleBtn = document.querySelector("#double");

// const doubleItems = () => {
//   items.forEach((item) => (item.textContent *= 2));
// };
// doubleBtn.addEventListener("click", doubleItems);



//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// const outputMessage = document.querySelector("#productDetails");

// const outputAction = (event) => {


//   if (event.target.nodeName !== "TD"){
//     return;
//   }

//   const parent = event.target.parentNode;

//   const product = parent.firstElementChild.textContent;
//   const price = parent.lastElementChild.textContent;

//   outputMessage.textContent = `Ви вибрали ${product.toLowerCase()}  за ${price}`;
 
// }

// table.addEventListener('click', outputAction);

/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const parentEl = document.querySelector(".statList");
const resultBtn = document.querySelector("#resultButton");
const resultSection = document.querySelector("#resultSection");
let stats = {};


let total = 0;
const countClicks = (event) => {
 if (!event.target.classList.contains("calcButton")){
  return;
 }
total += Number(event.target.dataset.number);


const key = event.target.textContent;

if(stats[key]){
  stats[key] += 1;
} else {
  stats[key] = 1;
}



}

const totalResult = () => {
  let markup = `Загальна кількість ${total}<br>`;
for (const [key, value] of Object.entries(stats)){
  markup += `${key} натиснута ${value} разів<br>`
}
resultSection.innerHTML = markup;
  total = 0;
stats = {};


}

parentEl.addEventListener('click', countClicks);

resultBtn.addEventListener('click', totalResult);

