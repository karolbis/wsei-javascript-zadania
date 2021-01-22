//Zadanie 1
const buz = document.querySelector('#buz');
console.log(buz.parentElement);

const baz = document.querySelector('#baz');
console.log(baz.previousElementSibling);

const foo = document.querySelector('#foo');
console.log(foo.children);
console.log(foo.parentElement);
console.log(foo.firstElementChild);
console.log(foo.children[1]);

//Zadanie 2
const fn = (el) => {
	el.addEventListener('click', (e) => {
		console.log(
			e.currentTarget.firstElementChild.firstElementChild.firstElementChild
				.children[1].firstElementChild.firstElementChild.innerText
		);
	});
};

fn(document.querySelector('#ex2'));

//Zadanie 3, //Zadanie 4
const toggleSpan = () => {
	const ex3Children = document.querySelector('#ex3').children;
	[...ex3Children].forEach((div) => {
		const btn = div.firstElementChild;
		btn.addEventListener('click', (e) => {
			const { target } = e;
			const span = target.nextElementSibling;
			const parent = target.parentElement;
			parent.style.backgroundColor =
				'#' + Math.floor(Math.random() * 16777215).toString(16);
			const newProp = span.style.display === 'none' ? 'block' : 'none';
			span.style.display = newProp;
		});
	});
};

toggleSpan();

//Zadanie 5
const divCollection = document.querySelectorAll('#ex5 div');
const ex5Ul = document.querySelector('#ex5 ul');

//1
// [...divCollection].forEach((div) => {
// 	console.log(div);
// 	div.addEventListener('mouseenter', (e) => {
// 		const getColor = e.target.style.backgroundColor;
// 		ex5Ul.firstElementChild.style.backgroundColor = getColor;
// 	});
// });

//2
// [...divCollection].forEach((div) => {
// 	console.log(div);
// 	div.addEventListener('mouseenter', (e) => {
// 		const getColor = e.target.style.backgroundColor;
// 		ex5Ul.lastElementChild.style.backgroundColor = getColor;
// 	});
// });

//3
// const evenElements = [...ex5Ul.children].filter((_, index) => index % 2 !== 0);
// [...divCollection].forEach((div) => {
// 	div.addEventListener('mouseenter', (e) => {
// 		const getColor = e.target.style.backgroundColor;
// 		evenElements.forEach((el) => (el.style.backgroundColor = getColor));
// 	});
// });

//4
// [...divCollection].forEach((div) => {
// 	div.addEventListener('mouseenter', (e) => {
// 		const getColor = e.target.style.backgroundColor;
// 		[...ex5Ul.children].forEach((el) => (el.style.backgroundColor = getColor));
// 	});
// });

//5

[...divCollection].forEach((div) => {
	div.addEventListener('mouseenter', (e) => {
		const getColor = e.target.style.backgroundColor;
		ex5Ul.style.backgroundColor = getColor;
	});
});

//Zadanie 6

const ex6Div = document.querySelector('#ex6');
//1
const first = ex6Div.firstElementChild.firstElementChild.firstElementChild;
console.log(first);
const second =
	ex6Div.firstElementChild.parentElement.firstElementChild.firstElementChild
		.nextElementSibling.parentElement;
console.log(second);

const third =
	ex6Div.parentElement.firstElementChild.parentElement.firstElementChild
		.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
console.log(third);
