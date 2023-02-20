// №1
let averageResult = 0;
let countTotal = 0;

function average(arr, i = 0) {
	if (i >= arr.length) {
		return averageResult
	}
	if (typeof (arr[i]) == 'number') {
		countTotal = countTotal + 1;
		averageResult = averageResult +  arr[i];
	} 
	i++;
	average(arr, i);
	return averageResult/countTotal
}



// №2
let firstNum = +prompt('Введите число');
let secondNum = +prompt('Введите еще одно число');
let mark = prompt('Введите знак (он может быть: +, -, *, /, %, ^ )')

function doMath(x, mark, y) {
	let doMathResult = 0;
	switch (mark) {
		case '+': 
			doMathResult = x + y;
			break;
		case '-': 
			doMathResult = x - y;
			break;
		case '*': 
			doMathResult = x * y;
			break;
		case '/':
			doMathResult = x / y;
			break;
		case '%':
			doMathResult = x % y;
			break;
		case '^':
			doMathResult = x ^ y;
			break;
	}
	return doMathResult;
}

doMath(firstNum, mark, secondNum);



// №3
let outerArrayLength = +prompt('Введите длину основного массива');
let innerArrayLength = +prompt('Введите длину внутренних массивов')
let newArr = [];
newArr.length = outerArrayLength;


function createInnerArray(arr, i = 0) {
	if (i > arr.length - 1) {
		return
	}
	arr[i] = [];
	arr[i].length = innerArrayLength;
	i++;
	createInnerArray(arr, i)
	return arr;
}
createInnerArray(newArr);

function fillMainArray(array, i = 0, j = 0) {
	if (j > (array[i].length - 1)) {
		i += 1;
		j = 0;
	}
	if (i > array.length - 1) {
		return;
	}
	array[i][j] = prompt(`Введите значение ${j} элемента в массиве ${i}`);
	j += 1;
	fillMainArray(array, i, j);
	return array;
}
fillMainArray(newArr);



// №4
let newString = prompt('Введите слово или предложение');
let firstValueToRemove = prompt('Введите символ, который будeт удален из строки')
let secondValueToRemove = prompt('Введите еще один символ, который будeт удален из строки')
const formatter = (string) => string.toUpperCase()

function remove(str, ...values) {
	for (let i = 0; i < values.length; i++) {
		if (typeof (values[i]) !== 'function') {
			str = str.replaceAll(values[i], '')
		}
	} 
	for (let i = 0; i < values.length; i++) {
		if (typeof (values[i]) == 'function') {
			str = values[i](str);
		}
	}
	return str;
}
remove(newString, firstValueToRemove, formatter,  secondValueToRemove);




