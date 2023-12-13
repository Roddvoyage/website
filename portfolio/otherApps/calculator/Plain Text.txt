/*DOM of every button*/
const nr0 = document.getElementById('nr0');
const nr1 = document.getElementById('nr1');
const nr2 = document.getElementById('nr2');
const nr3 = document.getElementById('nr3');
const nr4 = document.getElementById('nr4');
const nr5 = document.getElementById('nr5');
const nr6 = document.getElementById('nr6');
const nr7 = document.getElementById('nr7');
const nr8 = document.getElementById('nr8');
const nr9 = document.getElementById('nr9');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');

const del = document.getElementById('delete');
const clear = document.getElementById('clear');
const equals = document.getElementById('equal');
const dot = document.getElementById('dot');

const previousOperand = document.getElementById('previous-operand');
const currentOperand = document.getElementById('current-operand');
const operatorScreen = document.getElementById('operatorScreen');

/*function*/
function number0(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '0';
  }
}

function number1(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '1';
  }
}

function number2(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '2';
  }
}

function number3(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '3';
  }
}

function number4(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '4';
  }
}

function number5(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '5';
  }
}

function number6(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '6';
  }
}

function number7(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '7';
  }
}

function number8(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '8';
  }
}

function number9(){
  if (currentOperand.innerHTML.length > 10) {
    return currentOperand.innerHTML.slice(0, 10);
  } else {
    currentOperand.innerHTML += '9';
  }
}

function dotButton(){
  if(currentOperand.innerHTML.toString().includes('.')){
    console.log('wara');
  } else {
    currentOperand.innerHTML += '.';
  }
  
}



function equalsButton() {
  if(operatorScreen.innerHTML === '+') {
    let x = parseFloat(previousOperand.innerHTML) + parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '';
    currentOperand.innerHTML = '';
  } else if (operatorScreen.innerHTML === '-'){
    let x = parseFloat(previousOperand.innerHTML) - parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '';
    currentOperand.innerHTML = '';
  } else if (operatorScreen.innerHTML === '*'){
    let x = parseFloat(previousOperand.innerHTML) * parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '';
    currentOperand.innerHTML = '';
  } else if (operatorScreen.innerHTML === '/'){
    let x = parseFloat(previousOperand.innerHTML) / parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '';
    currentOperand.innerHTML = '';
  } else {
    console.log('wara');
  }
  
}




function delButton() {
  currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0, -1);
}



function clearButton() {
  currentOperand.innerHTML = '';
  operatorScreen.innerHTML = '';
  previousOperand.innerHTML = '';

}





function addButton() {
  if(currentOperand.innerHTML === ''&& previousOperand.innerHTML === ''){
    console.log('wara');
  } else if (previousOperand.innerHTML === '' && currentOperand.innerHTML !== ''){
    previousOperand.innerHTML = currentOperand.innerHTML;
    operatorScreen.innerHTML = '+';
    currentOperand.innerHTML = '';
  } else if (previousOperand.innerHTML !== '' && currentOperand.innerHTML === ''){
    operatorScreen.innerHTML = '+';
    currentOperand.innerHTML = '';
  } else {
    let x = parseFloat(previousOperand.innerHTML) + parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '+';
    currentOperand.innerHTML = '';
  }
}




function subtractButton() {
  if(currentOperand.innerHTML === ''&& previousOperand.innerHTML === ''){
    console.log('wara');
  } else if (previousOperand.innerHTML === '' && currentOperand.innerHTML !== ''){
    previousOperand.innerHTML = currentOperand.innerHTML;
    operatorScreen.innerHTML = '-';
    currentOperand.innerHTML = '';
  } else if (previousOperand.innerHTML !== '' && currentOperand.innerHTML === ''){
    operatorScreen.innerHTML = '-';
    currentOperand.innerHTML = '';
  } else {
    let x = parseFloat(previousOperand.innerHTML) - parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '-';
    currentOperand.innerHTML = '';
  }
}



function multiplyButton() {
  if(currentOperand.innerHTML === ''&& previousOperand.innerHTML === ''){
    console.log('wara');
  } else if (previousOperand.innerHTML === '' && currentOperand.innerHTML !== ''){
    previousOperand.innerHTML = currentOperand.innerHTML;
    operatorScreen.innerHTML = '*';
    currentOperand.innerHTML = '';
  } else if (previousOperand.innerHTML !== '' && currentOperand.innerHTML === ''){
    operatorScreen.innerHTML = '*';
    currentOperand.innerHTML = '';
  
  } else {
    let x = parseFloat(previousOperand.innerHTML) * parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '*';
    currentOperand.innerHTML = '';
  }
}



function divideButton() {
  if(currentOperand.innerHTML === ''&& previousOperand.innerHTML === ''){
    console.log('wara');
  } else if (previousOperand.innerHTML === '' && currentOperand.innerHTML !== ''){
    previousOperand.innerHTML = currentOperand.innerHTML;
    operatorScreen.innerHTML = '/';
    currentOperand.innerHTML = '';
  } else if (previousOperand.innerHTML === '' && currentOperand.innerHTML !== ''){
    previousOperand.innerHTML = currentOperand.innerHTML;
    operatorScreen.innerHTML = '/';
    currentOperand.innerHTML = '';
  } else {
    let x = parseFloat(previousOperand.innerHTML) / parseFloat(currentOperand.innerHTML);
    previousOperand.innerHTML = x.toString();
    operatorScreen.innerHTML = '/';
    currentOperand.innerHTML = '';
  }
}





/*addEventListeners*/
nr0.addEventListener('click', number0);
nr1.addEventListener('click', number1);
nr2.addEventListener('click', number2);
nr3.addEventListener('click', number3);
nr4.addEventListener('click', number4);
nr5.addEventListener('click', number5);
nr6.addEventListener('click', number6);
nr7.addEventListener('click', number7);
nr8.addEventListener('click', number8);
nr9.addEventListener('click', number9);

dot.addEventListener('click', dotButton);
equals.addEventListener('click', equalsButton);
del.addEventListener('click', delButton);
clear.addEventListener('click', clearButton);

add.addEventListener('click', addButton);
subtract.addEventListener('click', subtractButton);
multiply.addEventListener('click', multiplyButton);
divide.addEventListener('click', divideButton);