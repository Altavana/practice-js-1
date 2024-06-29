// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

const stonesArray = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Брилліант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
]

function calcTotalPrice(stones, stonesName){
  
  for (const stone of stones){
    if (stone.name === stonesName){
      return stone.price * stone.quantity;
    }
  }
  return "The product is not found"
}

console.log(calcTotalPrice(stonesArray, 'Сапфір'));