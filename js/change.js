'use strict';

var wrapper = document.getElementById('wrapper');
var colorName = document.querySelector('#color');


function randomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	if (event.which == 32) {
		wrapper.style.backgroundColor = color;
		colorName.innerHTML = color;

		if (wrapper.style.backgroundColor == '#ffffff') {
			colorName.style.color = '#222'
		} else {
			colorName.style.color = '#fff'
		}
	}
	return color;
}

document.addEventListener('keydown', function (event) {
	randomColor();
});