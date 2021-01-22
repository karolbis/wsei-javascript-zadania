//Zadanie 1
function yay() {
	console.log('Udalo sie');
}

yay();

//Zadanie 2
const param = (x) => {
	console.log(x);
};
param(5);

//Zadanie 3
const returnArr = (arr) => {
	return arr;
};

const test = returnArr([1, 2, 3]);
console.log(test);

//Zadanie 4
const showString = (str) => {
	let x = 0;
	const handleInterval = () => {
		x++;
		console.log(str);
		if (x === 5) {
			clearInterval(inter);
			console.log('Koniec');
		}
	};

	const inter = setInterval(handleInterval, 3000);
};

showString('string');
