
// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


const list = document.createElement("ul");
const addButton = document.createElement("button");
const removeButton = document.createElement("button");

addButton.textContent = "Add";
removeButton.textContent = "Remove";

const input = document.createElement("input");

document.body.append(input, addButton, removeButton, list);

const output = () => {
const inputValue = input.value.trim();

if (!inputValue){
  return;
}

const liElement = document.createElement("li");
liElement.textContent = inputValue;
list.append(liElement);

console.log(list.children);

if(list.children.length % 2 === 0){
  liElement.style.backgroundColor = "yellow";
} else {
  liElement.style.backgroundColor = "blue";
}

input.value = "";

}

const removeAction = () => {
  if (!list.lastChild){
    return;
  }
list.lastChild.remove();
}

addButton.addEventListener('click', output);

removeButton.addEventListener('click', removeAction);



