//Zad 1

const person = {
	name: 'Andrzej',
	lastName: 'Ziolek',
	age: 30,
	city: 'Poznan',
	showPerson() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

const person2 = {
	name: 'Tomasz',
	lastName: 'Antek',
	age: 34,
	city: 'Warszawa',
	showPerson() {
		console.log(this.name, this.lastName, this.age, this.city);
	},
	addAge() {
		this.age++;
	},
};

person.showPerson();
person.addAge();
person.showPerson();

//Zadanie 2
person.favouriteMeal = [];
person2.favouriteMeal = [];
person.showFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};
person2.showFavouriteMeal = function () {
	console.log(this.favouriteMeal);
};

person.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person2.addMeal = function (meal) {
	this.favouriteMeal.push(meal);
};

person.addMeal('pork chop');
person.showFavouriteMeal();
person2.showFavouriteMeal();

//Zadanie 3
const calculator = {
	a: 0,
	b: 0,
	saveAandB(a, b) {
		this.a = a;
		this.b = b;
	},
	sum() {
		console.log(this.a + this.b);
		return this.a + this.b;
	},
	subtract() {
		console.log(this.a - this.b);
		return this.a - this.b;
	},
	multiply() {
		console.log(this.a * this.b);
		return this.a * this.b;
	},
	divide() {
		if (this.b === 0) {
			console.log('You cant divide by 0');
			return;
		}
		console.log(this.a / this.b);
		return this.a / this.b;
	},
};

calculator.saveAandB(10, 5);
calculator.sum();
calculator.subtract();
calculator.multiply();
calculator.divide();
calculator.saveAandB(10, 0);
calculator.divide();

//Zadanie 4

const ladder = {
	isOnLader: false,
	step: 0,
	climbLadder() {
		this.isOnLader = true;
	},
	getOff() {
		if (this.step === 0) {
			this.isOnLader = false;
		} else {
			console.log('Go down to the lowest step');
		}
	},
	goUp() {
		if (this.isOnLader) {
			this.step += 1;
		} else {
			console.log('Climb at your ladder.');
		}
	},
	goDown() {
		if (this.step === 0) {
			console.log('You cannot go down.');
			return this.getOff();
		}
		this.step -= 1;
	},
};

console.log(ladder);
ladder.goUp();
ladder.climbLadder();
ladder.goUp();
ladder.goUp();
console.log(ladder);
ladder.getOff();
ladder.goDown();
ladder.goDown();
console.log(ladder);
ladder.goDown();
ladder.getOff();
ladder.goUp();
