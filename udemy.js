"use strict"

//ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ: 

/*alert('Go study'); //- окно уведомления

const result = confirm('Are you here?'); //- модальное с двумя ответами 

const answer = +prompt('Are you 18?', ' '); // - окно для ввода текста пользователя, данные всегда строка

const answers =[];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your sirname?', '');
answers[2] = prompt('How old are you?', '');

console.log(typeof(answers)); 
*/

//ИНТРАПОЛЯЦИЯ: 

/*const user = 'Elena';
console.log(`Hello, ${user}`); 
*/

//ОПЕРАТОРЫ:

/*let incr = 10,
    decr = 10;

console.log(incr++); //- сначала дает старое значение, потом прибавляет
console.log(--decr); //- сразу дает новое значение 

console.log(5%2); //- остаток от деления (1)

= - присваивание 
== - сравнение
=== - сравнение по типу данных 
&& - и  
|| - или  
! - оператор отрицания

const isChecked = true,
      isClosed = true;
      
console.log(isChecked && !isClosed);       
*/

//УСЛОВИЯ 

/*if (4 > 9) {
    console.log('Error');
}else if (4 < 9){
    console.log('Ok');
}

//тернарный) оператор
const num = 50; 
(num === 50) ? console.log('Ok') : console.log('Error');
*/
/*
const num = 50; 
switch(num) {   //всегда только строгое сравнение 
    case 49:
        console.log('No');
        break;
    case 100:
        console.log('still no');
        break;
    case 50:
        console.log('yeap');
        break;
    default:
        console.log('nothing');    
}
*/

//ЦИКЛЫ
//1
/*
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

//2
do{
    console.log(num);
    num++;
}
while(num < 55); 

//3
for (let i = 1; i < 8; i++) {
    if (i === 6){
        //break;
        continue;}
    console.log(i);
}
*/