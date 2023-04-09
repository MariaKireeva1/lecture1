const square = document.querySelector('.block');
const text = document.querySelector('.text')
const clientWidth = parseInt(document.body.clientWidth);
const clientHeight = parseInt(document.body.clientHeight);
square.style.top = `${clientHeight/2 - 50}px`;
square.style.left = `${clientWidth/2 - 50}px`;
square.style.width = '100px';
square.style.height = '100px';

function addTextInBlock() {
    text.style.display = 'block'
    setTimeout(() => {
        text.style.display = 'none'
    }, 2000)
}


function checkBorders() {
    if (parseInt(square.style.left) < 0) {
        square.style.left = parseInt(square.style.left) + 20 + 'px';
        addTextInBlock();
    } else if (parseInt(square.style.left) + parseInt(square.style.width) >= clientWidth) {
        square.style.left = parseInt(square.style.left) - 20 + 'px';
        addTextInBlock();
    } else if (parseInt(square.style.top) < 0) {
        square.style.top = parseInt(square.style.top) + 20 + 'px';
        addTextInBlock();
    } else  if (parseInt(square.style.top) + parseInt(square.style.height) >= clientHeight) {
        square.style.top = parseInt(square.style.top) - 20 + 'px';
        addTextInBlock();
    }
}

function changeSizeOfSquare() {
    square.style.height = parseInt(square.style.height) - parseInt(square.style.height)*0.4 + 'px';
    square.style.width = parseInt( square.style.width) + parseInt( square.style.width)*0.25 + 'px';
    document.addEventListener('keyup', () => {
        square.style.width = '100px';
        square.style.height = '100px';
    })
}

function movement(event) {
    switch (event.key) {
        case 'ArrowLeft': 
            square.style.left = parseInt(square.style.left) - 10 + 'px';
            break;
        case 'ArrowRight':
            square.style.left = parseInt(square.style.left) + 10 + 'px';
            break;
        case 'Control':
            changeSizeOfSquare();
            break;
        case 'ArrowUp': 
            square.style.top = parseInt(square.style.top) - 10 + 'px';
            break;
        case 'ArrowDown': 
            square.style.top = parseInt(square.style.top) + 10 + 'px';
            break;
        case ' ':
            square.style.top = parseInt(square.style.top) - 10 + 'px';
            setTimeout(() => {
                square.style.top = parseInt(square.style.top) + 10 + 'px';
            }, 200)
    }
    checkBorders();
}


document.addEventListener('keydown', movement);
