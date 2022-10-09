/* ----------------------------------------
START -----> ++++++++ Function 01 +++++++++

1. Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
---------------------------------------- */

// Variables
let dataFieldFun01 = document.querySelector('#fun01-data');
let submitBtnFun01 = document.querySelector('#fun01-submit');
let outputFieldFun01 = document.querySelector('#fun01-output');

// Function & Event Listner
submitBtnFun01.addEventListener('click', () => {
	let outputValue = '';
	if (dataFieldFun01.value !== '') {
		for (let i = 0; i < dataFieldFun01.value.length; i++) {
			const element = dataFieldFun01.value[dataFieldFun01.value.length - i - 1];
			outputValue += element;
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun01.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 02 +++++++++

2. Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.
---------------------------------------- */

// Variables
dataFieldFun02 = document.querySelector('#fun02-data');
submitBtnFun02 = document.querySelector('#fun02-submit');
outputFieldFun02 = document.querySelector('#fun02-output');

// Function & Event Listner
submitBtnFun02.addEventListener('click', () => {
	let outputValue = '';
	if (dataFieldFun02.value !== '') {
		for (let i = 0; i < dataFieldFun02.value.length; i++) {
			const element = dataFieldFun02.value[dataFieldFun02.value.length - i - 1];
			outputValue += element;
		}
		if (dataFieldFun02.value.toLowerCase() == outputValue.toLowerCase()) {
			outputValue += ' - (Palindrome)';
		} else {
			outputValue += ' - (Not a Palindrome)';
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun02.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 03 +++++++++

3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
---------------------------------------- */

// Variables
let dataFieldFun03 = document.querySelector('#fun03-data');
let submitBtnFun03 = document.querySelector('#fun03-submit');
let outputFieldFun03 = document.querySelector('#fun03-output');

// Function & Event Listner
submitBtnFun03.addEventListener('click', () => {
	let outputValue = [];
	let count = 0;
	if (dataFieldFun03.value !== '') {
		for (let i = 0; i < dataFieldFun03.value.length; i++) {
			for (let j = i + 1; j < dataFieldFun03.value.length + 1; j++) {
				outputValue.push(dataFieldFun03.value.slice(i, j));
				count += 1;
				if (count == 10) {
					outputValue.push('<br>');
					count = 0;
				}
			}
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun03.children[0].innerHTML = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 04 +++++++++

4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
---------------------------------------- */

// Variables
let dataFieldFun04 = document.querySelector('#fun04-data');
let submitBtnFun04 = document.querySelector('#fun04-submit');
let outputFieldFun04 = document.querySelector('#fun04-output');

// Function & Event Listner
submitBtnFun04.addEventListener('click', () => {
	let outputValue = '';
	if (dataFieldFun04.value !== '') {
		outputValue = dataFieldFun04.value.toLowerCase().split('').sort().join('');
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun04.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 05 +++++++++

5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
---------------------------------------- */

// Variables
let dataFieldFun05 = document.querySelector('#fun05-data');
let submitBtnFun05 = document.querySelector('#fun05-submit');
let outputFieldFun05 = document.querySelector('#fun05-output');

// Function & Event Listner
submitBtnFun05.addEventListener('click', () => {
	let temp = [];
	let outputValue = [];
	if (dataFieldFun05.value !== '') {
		for (let i = 0; i < dataFieldFun05.value.split(' ').length; i++) {
			const element = dataFieldFun05.value.split(' ')[i];
			temp.push(element);
			outputValue.push(temp[i].charAt(0).toUpperCase() + temp[i].slice(1));
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun05.children[0].innerText = outputValue.join(' ');
});

/* ----------------------------------------
START -----> ++++++++ Function 06 +++++++++

6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
---------------------------------------- */

// Variables
let dataFieldFun06 = document.querySelector('#fun06-data');
let submitBtnFun06 = document.querySelector('#fun06-submit');
let outputFieldFun06 = document.querySelector('#fun06-output');

// Function & Event Listner
submitBtnFun06.addEventListener('click', () => {
	let outputValue = [];
	let result;
	if (dataFieldFun06.value !== '') {
		for (let i = 0; i < dataFieldFun06.value.split(' ').length; i++) {
			const element = dataFieldFun06.value.split(' ')[i];
			outputValue.push(element);
		}
		result = outputValue[0];
		for (let i = 1; i < outputValue.length; i++) {
			if (result.length < outputValue[i].length) {
				result = outputValue[i];
			}
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun06.children[0].innerText = result;
});

/* ----------------------------------------
START -----> ++++++++ Function 07 +++++++++

7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Example string : 'The quick brown fox'
Expected Output : 5
---------------------------------------- */

// Variables
let dataFieldFun07 = document.querySelector('#fun07-data');
let submitBtnFun07 = document.querySelector('#fun07-submit');
let outputFieldFun07 = document.querySelector('#fun07-output');

// Function & Event Listner
submitBtnFun07.addEventListener('click', () => {
	let outputValue = 0;
	if (dataFieldFun07.value !== '') {
		outputValue = dataFieldFun07.value.match(/[aeiou]/gi).length;
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun07.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 08 +++++++++

8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
---------------------------------------- */

// Variables
let dataFieldFun08 = document.querySelector('#fun08-data');
let submitBtnFun08 = document.querySelector('#fun08-submit');
let outputFieldFun08 = document.querySelector('#fun08-output');

// Function & Event Listner
submitBtnFun08.addEventListener('click', () => {
	let outputValue = '';
	let count = 0;
	let input = parseInt(dataFieldFun08.value);
	if (dataFieldFun08.value !== '') {
		// outputValue = dataFieldFun08.value.match(/[aeiou]/gi).length;
		for (let i = 2; i < input; i++) {
			if (input % i == 0) {
				outputValue = input + ' - Not a Prime Number';
				count++;
				break;
			}
		}
		if (count == 0) {
			outputValue = input + ' - A Prime Number';
		}
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun08.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 09 +++++++++

9. Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
---------------------------------------- */

// Variables
let dataFieldFun09 = document.querySelector('#fun09-data');
let submitBtnFun09 = document.querySelector('#fun09-submit');
let outputFieldFun09 = document.querySelector('#fun09-output');

// Function & Event Listner
function checkDataType(value) {
	var dataTypes = [Function, RegExp, Number, String, Boolean, Object],
		x,
		len;

	if (typeof value === 'object' || typeof value === 'function') {
		for (x = 0, len = dataTypes.length; x < len; x++) {
			if (value instanceof dataTypes[x]) {
				return dataTypes[x];
			}
		}
	}
	return typeof value;
}

let inputFun09 = function (a, b) {
	return a - b;
};
// Enter Any Value (object, boolean, function, number, string, and undefined)

dataFieldFun09.value = inputFun09;
let outputValue = checkDataType(inputFun09);
submitBtnFun09.addEventListener('click', () => {
	outputFieldFun09.children[0].innerText = outputValue;
});

/* ----------------------------------------
START -----> ++++++++ Function 10 +++++++++

10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
---------------------------------------- */

// Variables
let dataFieldFun10 = document.querySelector('#fun10-data');
let submitBtnFun10 = document.querySelector('#fun10-submit');
let outputFieldFun10 = document.querySelector('#fun10-output');

// Function & Event Listner
submitBtnFun10.addEventListener('click', () => {
	let outputValue = [];
	let input = dataFieldFun10.value.split(',');
	let temp = [];

	if (dataFieldFun10.value !== '') {
		for (let i = 0; i < input.length; i++) {
			temp.push(parseInt(input[i]));
		}
		console.log(
			temp.sort(function (a, b) {
				return a - b;
			})
		);
		outputValue.push(temp[1]);
		outputValue.push(temp[input.length - 2]);
	} else {
		outputValue = 'Please Enter Some Value';
	}
	outputFieldFun10.children[0].innerText = outputValue;
});
