const button = document.querySelector('#clickme');
const body = document.querySelector('body');
const hexaColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexavalue  = document.querySelector('#get_value');

body.style.backgroundColor='#000000';
button.addEventListener('click', changeColor);
function changeColor() {
   let xyz = '#';
   for (let i = 0; i<6; i++) {
    const index= Math.floor(Math.random()*hexaColor.length);
    xyz += hexaColor[index];
       }

       body.style.backgroundColor = xyz;
       hexavalue.textContent = xyz
    
}