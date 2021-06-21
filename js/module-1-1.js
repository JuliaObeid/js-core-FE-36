"use strict"

let a = 0
console.log("значение переменной а:", a);
const b = 1
console.log("значение переменной b:", b);

let c
console.log("значение переменной c:", c);
c = "my let variable"
console.log("значение переменной c:", c);

// типи даних: примітиви і об'єкти
// typeof (оператор, щоб дізнатися тип даних)
console.log("тип даних let c:", typeof c);
console.log("тип даних const b:", typeof b);

// boolean : false true
let boolValue = true
console.log("тип даних let boolValue:", typeof boolValue);
console.log("значение переменной let boolValue:", boolValue);

boolValue = false
console.log("тип даних let boolValue:", typeof boolValue);
console.log("значение переменной let boolValue:", boolValue);

// undefined
let zuzuzuzuzu
console.log("тип даних let zuzuzuzuzu:", typeof zuzuzuzuzu);
console.log("значение переменной let zuzuzuzuzu:", zuzuzuzuzu);

// null
let emptyValue = null
console.log("тип даних let emptyValue:", typeof emptyValue);
console.log("значение переменной let emptyValue:", emptyValue);
// number
let numberValue = 0
console.log("тип даних let numberValue:", typeof numberValue);
console.log("значение переменной let numberValue:", numberValue);

numberValue = 555
console.log("тип даних let numberValue:", typeof numberValue);
console.log("значение переменной let numberValue:", numberValue);

numberValue = NaN
console.log("тип даних let numberValue:", typeof numberValue);
console.log("значение переменной let numberValue:", numberValue);

numberValue = Infinity
console.log("тип даних let numberValue:", typeof numberValue);
console.log("значение переменной let numberValue:", numberValue);
// string
let StringValue = ""
console.log("тип даних let StringValue:", typeof StringValue);
console.log("значение переменной let stringValue:", StringValue);

StringValue = "Sandra"
console.log("тип даних let StringValue:", typeof StringValue);
console.log("значение переменной let stringValue:", StringValue);

StringValue = "  "
console.log("тип даних let StringValue:", typeof StringValue);
console.log("значение переменной let stringValue:", StringValue);

StringValue = 1010101010
console.log("тип даних let StringValue:", typeof StringValue);
console.log("значение переменной let stringValue:", StringValue);

// ВЗАИМОДЕЙСТВИЕ С ПОЛЬЗОВАТЕЛЕМ
// alert()
//let answer = alert("Do you speak Js?")
//console.log("hello", answer)

// confirm()
//let answer = confirm("Do you speak Js?")
//console.log(answer)

// prompt()
//let value = prompt("Enter the value please")
//console.log(value)
//console.log(value, typeof value)

// ОСНОВНІ ОПЕРАТОРИ
// математичні (+ - / * ** %)
let result
let num1 = 2
let num2 = 4

result = num1 + num2
console.log(result)

result = num1 - num2
console.log(result)

result = num1 * num2
console.log(result)

result = num1 / num2
console.log(result)

result = num1 ** num2
console.log(result)

result = num1 % num2
console.log(result)

// сравнения (>=, <=, >, <, == & ===, != & !==)

result = num1 > num2
console.log(result)

num1 = "3"
num2 = 3
result = num1 > num2
console.log(result)

result = num1 >= num2
console.log(result)

result = num1 === num2
console.log('"3" === 3', result)
//строго равна

result = num1 == num2
console.log('"3" == 3', result)
// не строго равна

result = num1 !== num2
console.log('"3" !== 3', result)
//строго ne равна

result = num1 != num2
console.log('"3" != 3', result)
// не строго ne равна

// ЧИСЛА
// number.parseInt() & Number.parseFloat()
let num = Number.parseInt('3.14px')
console.log(num, typeof num)

num = Number.parseFloat('3.14px')
console.log(num, typeof num)

// Number.isNaN()

// 0.1 + 0.2 != 0.3 // из-за двоичной системы исчисления
let sum = (0.1 * 10 + 0.2 * 10) / 10
console.log(sum)

sum = (0.1 + 0.2).toFixed(3)
// console.log(sum, typeof sum)

sum = (1 + 1).toFixed(5)
// console.log(sum)

// методы объекта Math
// округление: .ceil(), .floor() & .round()
let numberCeil = 3.000000000001
numberCeil = Math.ceil(numberCeil)
// console.log(numberCeil)

let numberFloor = 3.999999999999999
numberFloor = Math.floor(numberFloor)
// console.log(numberFloor)

let numberRound1 = 3.499999999999999
numberRound1 = Math.round(numberRound1)
// console.log(numberRound1)

let numberRound2 = 3.5111111111111
numberRound2 = Math.round(numberRound2)
// console.log(numberRound2)

// найти большее/меньшее значение: .min() & .max()
// console.log(Math.min(23, 18, 41, 38, 35, 44))
// console.log(Math.max(23, 18, 41, 38, 35, 44))

// возведение в степень: .pow()

// console.log(Math.pow(2, 3))
// console.log(2 ** 3)

// псевдослучайное число: .random() - 0->1
let usualRandom = Math.random()
usualRandom = Math.round(usualRandom)
console.log(usualRandom)

// псевдослучайное число: .random()*10 - 0->10
let random1 = Math.random() * 10
random1 = Math.round(random1)
console.log(random1)

// псевдослучайное число: .random()*(10-1) + 1 - 1->10
let random2 = Math.random() * (10 - 1) + 1
random2 = Math.round(random2)
console.log(random2)

// СТРОКИ
// length
// position & index
// конкатенация
// toLowerCase() ? toUpperCase()
// indexOf() & includes()
// `шаблонная строка и интерполяция ${variable}`

// скорее всего на второе занятие, но посмотрим

// способы приведения типов к
// строке: String(value) || value + ""
// числу: Number(value) || +value
// булеану: Boolean(value) || !!value

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// ВЕТВЛЕНИЯ

// ОБЛАСТЬ ВИДИМОСТИ

// ЦИКЛЫ