'use strict';

function show(event) {

	const element = event.target;
	const [inputFirst, inputSecond] = document.querySelectorAll('.form__input');
	const btnSubmit = document.querySelector('.digit__btn--delete');


	function inputFill() {
		inputFirst.value = number.slice(0, 8).join('');
		inputSecond.value = number.slice(8).join('');
	}


	if (!element.classList.contains('digit__btn')) {
		return;
	}

	if (element.classList.contains('digit__btn--delete')) {
		number.pop();
		inputFill();
		return;
	}

	if (number.length < 16) {
		number.push(element.value);
		inputFill();
	}
}

const number = [];

export {show, number};