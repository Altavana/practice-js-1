// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]

function createNewArr(firstArr, secondArr) {
  const newArr = [];
  for (const elem of firstArr) {
    if (!secondArr.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
}

console.log(createNewArr([1, 2, 3, 1, 2], [1, 2]));
