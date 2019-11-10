'use strict';

// Методы перебора массивов

const number = [54, 20, 80, -35, 32, 29, 15];

const names = ['vladimir', 'Mark', 'Logan', 'Victor', 'maks', 'Kate', 'Alex'];

const mix = ['Nikita', 25, true, 'Trofimov', '15', -2, null];

const badNum = [45, 20, 74, -35, 'hi', 32, 29, 5];

// Первый способ. Цикл for
// for (let i = 0; i < mix.length; i++) {
// 	console.log(mix[i]);
// }

// Второй способ. Цикл for in. Служит для перебора ИНДЕКСОВ итерируемых объектов. Подходит больше для объектов, а не для массивов
// for (let index in mix) {
// 	console.log(index);
// }

// Третий способ. Цикл for of. Служит для перебора ЗНАЧЕНИЙ итерируемых объектов. 
// for (let elem of mix) {
// 	console.log(elem);
// }

// Четвертый способ. Метод forEach(). Может передавать this. Если использовать стрелочную функцию, то this нельзя будет передавать
// mix.forEach((item, index, arr) => {
// 	console.table({
// 		item,
// 		index
// 	});
// });

// Следующие методы будут что-то возвращать
// Исправляем массив names

// for (let i = 0; i < names.length; i++) {
// 	names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
// }
// console.log(names);

// names.forEach(function (item, i, arr) {
// 	arr[i] = item[0].toLocaleUpperCase() + item.slice(1).toLocaleLowerCase();
// });
// console.log(names);

// const correctName = names.map(function (item) {
// 	return item[0].toLocaleUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(correctName);
// Этот метод перезаписывает все значения массива, либо записывает их в новый массив.

let forWords = [];

for (let i = 0; i < mix.length; i++) {
	if (typeof (mix[i]) === 'string' && isNaN(mix[i])) {
		forWords.push(mix[i]);
	}
}
console.log(forWords);