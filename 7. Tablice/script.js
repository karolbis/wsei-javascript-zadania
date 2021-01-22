//Zadanie 1
console.log('Zad 1');
const t = [1, 2, 3, 4, 5];
t.forEach((item) => console.log(item));

//Zadanie 2
console.log('Zad 2');
const secondArr = [1, 2, 3, 45, 'str', 'dwa', 'asdasd'];

//1
console.log(secondArr[0], secondArr[1]);
//2
console.log(secondArr[secondArr.length - 1]);
//3
secondArr.forEach((item) => console.log(item));
//4
secondArr.forEach((item, index) => {
	if (index % 2 === 0) {
		console.log(item);
	}
});
//5
secondArr.forEach((item) =>
	typeof item === 'string' ? console.log(item) : null
);
//6
secondArr.forEach((item) =>
	typeof item === 'number' ? console.log(item) : null
);

//Zadanie 3
console.log('Zad 3');
const t2 = [1, 2, 3, 4, 5];
//1
const sum = t2.reduce((acc, number) => acc + number);
console.log('sum', sum);
//2
const dif = t2.reduce((acc, number) => acc - number);
console.log('dif', dif);
//3
const avg = sum / t2.length;
console.log('average', avg);
//4
t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});
//5
t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});
// 6

console.log(Math.max(...t2));
// 7

console.log(Math.min(...t2));
// 8
console.log(t2.reverse().forEach((i) => console.log(i)));

console.log('Zad 4');
//Zadanie 4
const sumArr = (arr) => arr.reduce((acc, number) => (acc += number));
const summArrResult = sumArr([1, 2, 3, 4, 5]);
console.log(summArrResult);

//Zadanie 5
console.log('Zad 5');
const task5 = (arr) => {
	const sum = arr.reduce((acc, number) => (acc += number));
	const avg = sum / arr.length;
	const result = arr.map((item) => console.log(item * avg));
};

task5(t2);

//Zadanie 6
console.log('Zad 6');
const task6 = (arr) => {
	const fitlerArr = arr.filter((item) => item % 2 === 0);
	const sumFilter = fitlerArr.reduce((acc, item) => (acc += item));
	return sumFilter / fitlerArr.length;
};

const testTask6 = task6([1, 2, 4, 6, 3, 10, 8]);
console.log(testTask6);

//Zadanie 7
console.log('Zad 7');
const sortArr = (arr) => arr.sort((a, b) => (a > b ? 1 : -1));
const sortArrResult = sortArr([10, 2, 5, 1, 3, 50]);
console.log(sortArrResult);

//Zadanie 8
console.log('Zad 8');
const sumTwoArr = (arr1, arr2) =>
	[...arr1, ...arr2].reduce((acc, number) => (acc += number));

const sumTwoArrResult = sumTwoArr([1, 2, 3, 4, 5], [10, 20, 30, 40]);
console.log(sumTwoArrResult);

//Zadanie 9
console.log('Zad 9');
const removeItemFromArr = (arr, item) => arr.filter((i) => i !== item);
const removeResult = removeItemFromArr([1, 3, 10, 5, 2], 10);
console.log(removeResult);

//Zadanie 10
console.log('Zad 10');
const task10 = (arr) => arr.map((item) => item * -1);
const task10Result = task10([1, 2, 3, 10, -20, -100]);
console.log(task10Result);
