'use strict';
// ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

// To String (Перевод в строку)

// 1) Команда больше для истории
console.log(typeof (String(5)));

// 2) Просто сложение строки с чем угодно. Конкатенация
console.log(typeof ("q" + false));

// 3) .toString()

// To Number

// 1) Команда больше для истории. Сейчас чаще используют унарный плюс
console.log(typeof (Number('5')));

// 2) Унарный плюс. Поставив перед любым типом знак "+" можно его превратить в Number
console.log(typeof (+'5'));

// 3) 
console.log(typeof (parseInt('15px', 10)));

// To Boolean

// 1) Сравниваем значение в условии
let swither = null;

if (swither) {
	console.log("Time to js");
}

// 2) 
console.log(typeof (Boolean('5')));

// 3) 
console.log(typeof (!!('5'));

		// Всегда превращается в False

		// 0, '', null, undefined, NaN