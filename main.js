const span = document.querySelector('.mess-with-me');
span.style.fontSize = '40px';

const para = document.querySelector('p.mess-with-me');
span.style.backgroundColor = 'green';

const dinoImage = document.querySelector('#hide-me');
dinoImage.style.backgroundColor = 'none';

const dinoOne = document.querySelector('#triceratops');
dinoOne.style.fontSize = '324px';

function toOrange() {
    span.style.backgroundColor = 'orange';
}
span.addEventListener('click', toOrange);

function redBorder() {
    dinoImage.style.border = 'red';
}
trike.addEventListener('click', makeBorder);

function sneaky() {
    feather.style.opacity = '.5';

}

feather.addEventListener('click', sneaky);

function rowColor() {
    dinoRow.style.backgroundColor = 'blue';

}

button.addEventListener('click', rowColor);


function biggie() {
    bigger.style.width = "200px";

}

bigger.addEventListener('mouseover', biggie);