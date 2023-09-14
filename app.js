//Найти сумму элемента массива
const arr = [2,3,6,4,1,7,9]

const newArray = arr.reduce((acm,elem) => acm += elem,0)
console.log(newArray)


// Найти максимальныое число в массива
const arr2 = [2, 3, 6, 4, 1, 7, 9];

const max = Math.max(...arr2)
console.log(max)

// Найти минимальное число в массива
const arr3 = [2, 3, 6, 4, 1, 7, 9];

const min = Math.min(...arr3)
console.log(min)

// Сортирвка чисел в массиве по возростанию
let numbers = [2,10,21,3,7,5,1,19,12]

let newNumber = numbers.sort((a,b) => a - b)
console.log(newNumber)

// Развернуть массив чисел
let arrs = [1,2,3,4,5,6,7]

console.log(arrs.reverse())



