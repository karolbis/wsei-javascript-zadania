//Zadanie 1
const lists = document.querySelectorAll('.list');

//Zadanie 2
const retTag = (param) => {
	console.log(param.tagName);
	return param.tagName;
};

retTag(document.querySelector('.span-list'));

//Zadanie 3
const listId = document.querySelector('#id');

//Zadanie 4
const showElements = (element) => console.log(element);
showElements(document.querySelectorAll('li'));
showElements(document.querySelectorAll('ul'));
showElements(document.querySelectorAll('span'));
showElements(document.querySelectorAll('div.list span'));
showElements(document.querySelectorAll('#spans span'))
