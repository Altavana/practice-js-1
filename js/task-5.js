// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// function updateObject(obj, ...rest) {
//   const newObj = {};
//   for (const elem of Object.keys(obj)) {
//     if (!rest.includes(elem)) {
//       newObj[elem] = obj[elem];
//     }
//   }
//   return newObj;
// }
console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "a"));

function updateObject(obj, ...rest) {
  const newObj = { ...obj };
  for (const elem of rest) {
    delete newObj[elem];
  }
  return newObj;
}
