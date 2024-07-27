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
const tweets = [
  { id: "000", name: "Alex", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", name: "Oleh", likes: 2, tags: ["html", "css"] },
  { id: "002", name: "Ihor", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", name: "Borys", likes: 8, tags: ["css", "react"] },
  { id: "004", name: "Jhon", likes: 0, tags: ["js", "nodejs", "react"] },
];

const statsList = document.querySelector(".stats");
const createMarkup = (arr) => {
  return arr
    .map(
      ({ name, likes, tags }) => `<li>
        <p>Name: ${name}</p>
        <p>Likes: ${likes}</p>
        <p>Tags: ${tags.join(", ")}</p>
      </li>`
    )
    .join("");
};
statsList.insertAdjacentHTML("beforeend", createMarkup(tweets));
