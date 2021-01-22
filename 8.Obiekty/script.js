//Zadanie 1
const car = {
	name: 'Ford',
	color: 'blue',
	power: '350KM',
	isVan: false,
};

console.log(car.color, car.power, car.isVan);

//Zadanie 2
car.changeName = function (newName) {
	return (this.name = newName);
};
car.changeName('BMW');
console.log(car.name);

//Zadanie 3
const obj = {
	sum: 0,

	sumAll(arr) {
		const sum = arr.reduce((acc, item) => (acc += item));
		this.sum = sum;
	},
};
console.log(obj.sum);

obj.sumAll([1, 2, 3, 4, 5]);
console.log(obj.sum);

//Zadanie 4
const car1 = {
	name: 'BMW',
	age: 12,
	color: 'black',
};

const showCarProperties = (obj) => {
	Object.keys(obj).forEach((property) =>
		console.log(`${property}:`, obj[property])
	);
};
showCarProperties(car1);

//Zadanie 5
const carInCar = {
	country: 'Germany',
	city: 'Munich',
};
car1.production = carInCar;
console.log(car1.production.country, car1.production.city);

//Zadanie 6
car1.logHello = function () {
	console.log('Hello');
};

car1.logHello();
