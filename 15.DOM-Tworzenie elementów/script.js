//Zadanie 1
const div = document.createElement('div');
div.innerText = 'To jest nowy element';
document.body.appendChild(div);

//Zadanie 2
const ul = document.createElement('ul');
ul.className = 'myUl';
const fruits = ['apple', 'peach', 'orange', 'banana', 'strawberry', 'pear'];
for (let i = 0; i < 6; i++) {
	const li = document.createElement('li');
	li.innerText = fruits[i];
	ul.appendChild(li);
}
document.body.appendChild(ul);

//Zadanie 3

const myUl = document.querySelector('.myUl');

myUl.addEventListener('click', () => {
	[...myUl.children].forEach((el, index) => {
		if (index % 2 === 0) {
			myUl.removeChild(el);
		}
	});
});

//Zadanie 4
const btn = document.createElement('button');
btn.className = 'myBtn';
btn.innerText = 'Remove me';
document.body.appendChild(btn);
const myBtn = document.querySelector('.myBtn');
myBtn.addEventListener('click', () => document.body.removeChild(myBtn));

//Zadanie 5
const createDivs = (randNumber) => {
	for (let i = 0; i < randNumber; i++) {
		const div = document.createElement('div');
		div.innerText = `to jest div ${i}`;
		document.body.appendChild(div);
	}
};

createDivs(Math.round(Math.random() * 10));

//Zadanie 6

const div1 = document.createElement('div');
const span1 = document.createElement('span');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div2.appendChild(div3);
const span2 = document.createElement('span');
document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
document.body.appendChild(span2);

//Zadanie 7

const ul1 = document.createElement('ul');
ul1.className = 'ul1';
const ul2 = document.createElement('ul');
ul2.className = 'ul2';

for (let i = 0; i < 6; i++) {
	const li = document.createElement('li');
	li.innerText = i;
	ul1.appendChild(li);
}

document.body.appendChild(ul1);
document.body.appendChild(ul2);
const ulBtn = document.createElement('button');
ulBtn.className = 'ulBtn';
ulBtn.innerText = 'Move Li element';
document.body.appendChild(ulBtn);

const myUl1 = document.querySelector('.ul1');
const myUl2 = document.querySelector('.ul2');
const myUlbtn = document.querySelector('.ulBtn');

myUlbtn.addEventListener('click', (e) => {
	const mainUlLength = myUl1.children.length;
	myUl2.append(ul1.children[mainUlLength - 1]);
	console.log(mainUlLength);
	if (mainUlLength - 1 === 0) {
		myUlbtn.setAttribute('disabled', true);
	}
});

//Zadanie 8

const form = document.createElement('form');
form.className = 'myForm';
const formDataList = [
	'Jaki element chcesz utworzyć?',
	'Jaki tekst powinien zawierać ten element?',
	'Jaki kolor tekstu?',
	'Ile razy ten element ma zostać utworzony?',
];
const formBtn = document.createElement('button');
formBtn.className = 'formBtn';
formBtn.type = 'submit';
formBtn.innerText = 'Create Element';
for (let i = 0; i < formDataList.length; i++) {
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = formDataList[i];
	form.appendChild(input);
}
form.appendChild(formBtn);
document.body.appendChild(form);

const createUserElement = (name, text, color, quantity) => {
	for (let i = 0; i < quantity; i++) {
		const el = document.createElement(name);
		el.style.color = color;
		el.innerText = text;
		document.body.appendChild(el);
	}
};

const formTwo = document.querySelector('.myForm');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const { currentTarget } = e;
	const [name, text, color, quantity] = [...currentTarget.elements].map(
		(el) => el.value
	);
	createUserElement(name, text, color, parseInt(quantity));
	form.reset();
});

const br = document.createElement('br');
document.body.appendChild(br);

//Zadanie 9
const secondForm = document.createElement('form');
secondForm.className = 'myForm2';
const secondFormDataList = ['Imie', 'Nazwisko', 'Wiek', 'Ilość dzieci'];
const secondFormBtn = document.createElement('button');
secondFormBtn.className = 'formBtn2';
secondFormBtn.type = 'submit';
secondFormBtn.innerText = 'Create';
for (let i = 0; i < formDataList.length; i++) {
	const input = document.createElement('input');
	input.type = 'text';
	input.placeholder = secondFormDataList[i];
	secondForm.appendChild(input);
}
secondForm.appendChild(secondFormBtn);
document.body.appendChild(secondForm);
const table = document.createElement('table');
table.className = 'userTable';
document.body.appendChild(table);
const createTable = (arr) => {
	for (let i = 0; i < 4; i++) {
		const tr = document.createElement('tr');
		const th = document.createElement('th');
		const td = document.createElement('td');
		const b = document.createElement('button');
		b.innerText = 'Delete';
		th.innerText = secondFormDataList[i];
		td.innerText = arr[i];
		tr.append(th);
		tr.append(td);
		tr.append(b);
		table.append(tr);
	}
};
const changeFirstLetter = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
const secondFormSelector = document.querySelector('.myForm2');
secondFormSelector.addEventListener('submit', (e) => {
	e.preventDefault();
	const { currentTarget } = e;
	const [name, lastname, age, childrenQuant] = [...currentTarget.elements].map(
		(el) => el.value
	);
	createTable([
		changeFirstLetter(name),
		changeFirstLetter(lastname),
		age,
		childrenQuant,
	]);
	form.reset();
});

const userTable = document.querySelector('.userTable');
userTable.addEventListener('click', (e) => {
	const { target } = e;
	console.log(e.target.tagName);
	if (target.tagName !== 'BUTTON') return;
	const parent = e.target.closest('tr');
	userTable.removeChild(parent);
});

//Zadanie 10 użyte wyżej
const changeFirstLetterExample = (string) => {
	return string.chartAt(0).toUpperCase() + string.slice(1);
};

//Zadanie 11
const numFromString = (str) => {
	const numArr = str
		.split('')
		.map((el) => parseInt(el))
		.filter((el) => {
			if (el) {
				return true;
			} else {
				return false;
			}
		});
	const sum = numArr.reduce((acc, number) => (acc += number));
	const product = numArr.reduce((acc, number) => (acc *= number));
	for (let i = 0; i < product; i++) {
		const d = document.createElement('div');
		d.innerText = i;
		document.body.appendChild(d);
	}
};

numFromString('siesa21sdasedol123');

//Zadanie 12
const createObj = (str) => {
	const obj = {
		str,
		checkStr() {
			if (this.str === 'Ala') {
				this.str = 'Ola';
			} else {
				const d = document.createElement('div');
				d.innerText = 'Słowo Ala nie występuje w tekście.';
				document.body.appendChild(d);
			}
		},
	};
	obj.checkStr();
};
createObj('jola');

//Zadanie 13
const stringChartQuant = (strArr) => {
	return strArr.map((el) => el.length);
};
const numberArr = stringChartQuant(['nowyStr', 'tesa213', 'noweasdOk']);
const sumNumberArr = (numArr) => numArr.reduce((acc, num) => (acc += num));

console.log(sumNumberArr(numberArr));

const averageFromNumArr = (numArr) => {
	const sum = numArr.reduce((acc, num) => (acc += num));
	return (sum / numArr.length).toFixed(2);
};

console.log(averageFromNumArr(numberArr));

//Zadanie 14
const o = {
	name: '',
	surname: '',
	age: '',
};
const defaultObj = () => {
	o.name = '';
	o.surname = '';
	o.age = '';
	console.log(o);
};
const fn = () => {
	o.name = 'babaJaga';
	o.surname = 'mira';
	o.age = '20';
	const keys = Object.keys(o);
	let isTooLong = false;
	for (let i = 0; i < keys.length; i++) {
		console.log(o[keys[i]]);
		if (o[keys[i]].length > 5) {
			isTooLong = true;
			break;
		} else {
			continue;
		}
	}
	if (isTooLong) {
		const b = document.createElement('button');
		b.className = 'objReset';
		b.innerText = 'Reset object data';
		b.addEventListener('click', defaultObj);
		document.body.appendChild(b);
	}
	console.log(o);
};
fn();
