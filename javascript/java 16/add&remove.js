let input = document.getElementById('inputID');


document.getElementById('add').addEventListener('click',function(){
//  document.getElementById('DivOutput').innerHTML += input.value;
// input.value="";

let div = document.createElement('div');

let text = document.createTextNode(input.value);
div.style.height = '70px';
div.style.width = '500px';
div.style.border = '1px solid black';

div.appendChild(text);
document.getElementById('DivOutput').appendChild(div);

div.addEventListener('click',function(){
  div.removeChild(div.childNodes[0]);
});

});