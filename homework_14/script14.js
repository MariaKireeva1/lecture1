const root = document.querySelector('body');
const square = document.createElement('div');
root.append(square);
square.className = 'block';


const clientWidth = document.body.clientWidth;
const clientHeight = document.body.clientHeight;
square.style.left = 0
square.style.top = 0

function changeElementColor () {
	square.style.background = `#${String(Math.random()).slice(2, 8)}`
}

function replaceElement() {
	const randomValue = Math.round(Math.random()*4);
	const distanceFromLeft = parseInt(window.getComputedStyle(square).width) + parseInt(square.style.left);
    const distanceFromTop = parseInt(window.getComputedStyle(square).height) + parseInt(square.style.top);


	if (randomValue == 1 && distanceFromLeft < clientWidth - 20) {
        square.style.left = parseInt(square.style.left) + 20 + 'px'
    } else if (randomValue == 2 && parseInt(square.style.left) > 20) {
        square.style.left = parseInt(square.style.left) - 20 + 'px'
    } else if (randomValue == 3  && distanceFromTop < clientHeight - 20) {
        square.style.top = parseInt(square.style.top) + 20 + 'px'
    } else if (randomValue == 4 && parseInt(square.style.top) > 20) {
        square.style.top = parseInt(square.style.top) - 20 + 'px'
    }
}

setInterval(changeElementColor, 500)
setInterval(replaceElement, 1000)