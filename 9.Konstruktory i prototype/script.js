// Zadanie 1
function Person(name, lastName, age, country, city, language) {
	this.name = name;
	this.lastname = lastName;
	this.age = age;
	this.country = country;
	this.city = city;
	this.language = language;
	this.changeCity = function (newCity) {
		return (this.city = newCity);
	};
	this.changeAge = function (newAge) {
		return (this.age = newAge);
	};
}
const p1 = new Person('mateusz', 'mika', 20, 'poland', 'krakow', 'polish');
const p2 = new Person('mietek', 'msa', 30, 'poland', 'gdansk', 'polish');
const p3 = new Person('waldek', 'slowiec', 50, 'france', 'paris', 'french');
const p4 = new Person('andrzej', 'bryza', 31, 'poland', 'warszawa', 'polish');
const p5 = new Person('dawid', 'switek', 28, 'germany', 'berlin', 'german');

p1.changeAge(21);
p1.changeCity('Poznan');
console.log(p1, p2, p3, p4, p5);
//Obiekt, na ktorym wywołano metody ma zmienione dane, natomiast pozostałe obiekty mają niezmienione dane.

class Calculator {
	constructor() {
		this.history = [];
	}

	add(x, y) {
		const result = x + y;
		this.history.push({ operation: 'add', x, y, result });
		return result;
	}

	subtract(x, y) {
		const result = x - y;
		this.history.push({ operation: 'subtract', x, y, result });
		return result;
	}

	divide(x, y) {
		const result = x / y;
		this.history.push({ operation: 'divide', x, y, result });
		return result;
	}

	multiply(x, y) {
		const result = x * y;
		this.history.push({ operation: 'multiply', x, y, result });
		return result;
	}

	showHistory() {
		return this.history.forEach((operation) => console.log(operation));
	}

	clearHistory() {
		this.history = [];
	}
}

const c1 = new Calculator();
c1.add(1, 2);
c1.divide(10, 5);
c1.showHistory();
console.log('calc 2');
const c2 = new Calculator();
c2.subtract(10, 4);
c2.multiply(10, 10);
c2.showHistory();
c2.clearHistory();
c2.showHistory();
console.log(c2.history);

//Zadanie 3
function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				console.log('End');
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();
