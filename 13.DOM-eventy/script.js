//Zadanie 1

const btn = document.querySelector('#test-event');
btn.addEventListener('click', (e) => console.log(e));

//window.addEventListener('mousemove', (e) => console.log(e));

btn.addEventListener('mouseenter', (e) => console.log(e));
window.addEventListener('keydown', (e) => console.log(e));
//window.addEventListener('scroll', (e) => console.log(e));
const input = document.querySelector('#input-test');
input.addEventListener('change', (e) => console.log(e));

//Wyswietlaja sie eventy - mouse even, keyboard event po wciskaniu guzikow oraz event dla scrolla oraz po wyjsciu z inputa ze zmienionymi danymi

//Zadanie 2
const ex2 = document.querySelector('#ex2');
ex2.addEventListener('click', (e) => {
	const { target } = e;
	const span = target.nextElementSibling;
	span.innerText = target.dataset.text;
});

//Zadanie 3
const square = document.querySelector('#ex3');
const changeSquareColor = (e) => {
	const { target, type } = e;
	type === 'mouseenter'
		? (target.style.backgroundColor = 'blue')
		: (target.style.backgroundColor = 'red');
};
square.addEventListener('mouseenter', changeSquareColor);
square.addEventListener('mouseleave', changeSquareColor);

//Zadanie 4
const inputError = document.querySelector('#ex3-err');
input.addEventListener('keyup', (e) => {
	const reg = /[0-9]/gm;
	const checkIfNumber = e.target.value.match(reg);
	if (checkIfNumber !== null) {
		inputError.innerText = 'You cannot enter numbers here';
	} else {
		inputError.innerText = '';
	}
});

//Zadanie 5
const ex5Span = document.querySelector('#ex5 sppan');
const ex5Button = document.querySelector('#ex5-button');
let val = 0;
ex5Button.innerText = val;
const counter = (e) => {
	val++;
	e.target.innerText = val;
	if (val === 10) {
		ex5Button.removeEventListener('click', counter);
	}
};

ex5Button.addEventListener('click', counter);

//Zadanie 6
window.addEventListener('scroll', (e) => {
	const scrollTop = window.scrollY;
	if (scrollTop < 200) {
		document.body.style.backgroundColor = 'red';
	} else {
		document.body.style.backgroundColor = 'white';
	}
});

//Zadanie 7
const calculator = document.querySelector('#calculator');
const calculatorText = calculator.querySelector('input[type="text"]');

const buttonsContainers = calculator.querySelectorAll('div');
class Calculator {
	constructor() {
		this.a = '';
		this.b = this.operation = '';
		this.result = 0;
	}
	setOperation = (e) => {
		this.operation = e.target.innerText;
	};
	clearOperation() {
		this.operation = '';
	}
	setVariable = (e) => {
		if (this.operation === '') {
			this.a += e.target.innerText;
		} else {
			this.b += e.target.innerText;
			this.performOperation();
			this.clearAB();
			this.clearOperation();
		}
	};
	clearAB() {
		this.a = '';
		this.b = '';
	}
	performOperation() {
		switch (this.operation) {
			case '+': {
				this.add();
				break;
			}
			case '-': {
				this.subtract();
				break;
			}
			case '*': {
				this.multiply();
				break;
			}
			case '/': {
				this.divide();
				break;
			}
		}
		this.showResult(calculatorText);
	}
	parseAB() {
		return [parseInt(this.a), parseInt(this.b)];
	}
	showResult(element) {
		element.value = this.result;
	}
	add() {
		const [a, b] = this.parseAB();
		const result = a + b;
		this.result = result;
	}

	subtract() {
		const [a, b] = this.parseAB();

		this.result = a - b;
	}

	divide() {
		const [a, b] = this.parseAB();

		this.result = a / b;
	}

	multiply() {
		const [a, b] = this.parseAB();

		this.result = a * b;
	}
}
const calc = new Calculator();

[...buttonsContainers[0].children].forEach((button) =>
	button.addEventListener('click', calc.setVariable)
);
[...buttonsContainers[1].children].forEach((button) =>
	button.addEventListener('click', calc.setOperation)
);
