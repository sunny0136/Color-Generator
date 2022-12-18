const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['red', 'green', 'violet','yellow'];

body.style.backgroundColor='red';
button.addEventListener('click', changeColor);
function changeColor() {
    const colorIndex= parseInt(Math.random()*color.length);
    body.style.backgroundColor= color[colorIndex];
    
}