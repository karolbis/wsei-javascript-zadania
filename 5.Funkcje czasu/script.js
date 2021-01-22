//Zadanie 1
let n = 0;
const handleInterval = () => {
	n++;
	console.log('Cześc po raz', n);
	if (n === 15) {
		clearInterval(inter);
	}
};
const inter = setInterval(handleInterval, 100);

//Zadanie 2
const arr = [1, 2, 3, 4, 5, 6];
const showArrData = () => arr.forEach((numb) => console.log(numb));

setTimeout(() => {
	showArrData();
	let y = 0;
	const arrLength = arr.length;
	const showOneItem = () => {
		console.log(arr[y]);
		y++;
		if (y === arrLength) {
			clearInterval(interOne);
		}
	};

	const interOne = setInterval(showOneItem, 3000);
}, 2000);
