/Zadanie 1
const moredivs = document.querySelectorAll('.more-divs');
const task1 = (elArr) => {
	return [...elArr].map((el) => el.localName);
};

task1(moredivs);

//Zadanie 2
const shortList = document.querySelector('.short-list');
const show = (el) => {
	console.log(shortList.innerHTML);
	console.log(shortList.outerHTML);
	console.log(shortList.className);
	console.dir([...shortList.classList]);
	console.log(shortList.dataset);
};

show(shortList);

//Zadanie 3

const addAndSubtract = (el) => {
	const num1 = parseInt(el.dataset.numberone);
	const num2 = parseInt(el.dataset.numbertwo);
	const num3 = parseInt(el.dataset.numberThree);
	const sum = num1 + num2 + num3;
	const sub = num1 - num2 - num3;
	return [sum, sub];
};

console.log(addAndSubtract(document.querySelector('#datasetCheck')));

//Zadanie 4

document.querySelector('#spanText').innerText = 'Nowy tekst';

//Zadanie 5
document.querySelector('#spanText').className = 'newClass';

//Zadanie 6
const classes = document.querySelector('#classes');
const showClassses = (classList) => {
	let strAll = '';
	[...classList].forEach((cl, index, arr) => {
		console.log(cl);

		if (index === arr.length - 1) {
			strAll += cl;
		} else {
			strAll += `${cl}+`;
		}
	});
	console.log(strAll);
};

showClassses(classes.classList);

//Zadanie 7
const longList = document.querySelector('#longList');
const addDataset = (elementCollection) => {
	[...elementCollection].forEach((el) => {
		if (!el.dataset.dataText) {
			el.setAttribute('data-text', 'text');
		}
	});
};

addDataset(longList.children);

//Zadanie 8
const receiveString = (str) => {
	return {
		newClass: str,
	};
};
const myDiv = document.querySelector('#myDiv');
const getClassName = ({ newClass }) => {
	return newClass;
};
const className = getClassName(receiveString('mojaKlasa'));
myDiv.className = className;

//Zadanie 9
const numbers = document.querySelector('#numbers');
const addProperClass = (numb) => {
	if (numb % 2 === 0) {
		numbers.className = 'even';
	} else {
		numbers.className = 'odd';
	}
};

addProperClass(Math.round(Math.random() * 10));

//Zadanie 10
const returnValues = (element) => {
	return [...element.children].map((el) => el.innerText);
};

console.log(returnValues(longList));

//Zadanie 11
const randomNumbersInList = (elementCollection) => {
	[...elementCollection].forEach((el) => {
		el.setAttribute('data-oldNum', el.innerText);
		el.innerText = Math.round(Math.random() * 10);
	});
};
randomNumbersInList(longList.children);
