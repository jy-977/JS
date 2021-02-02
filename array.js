'use strict';

//Array 
//1. array delcaration
const arr1 = new Array(0)
const arr2 = [1,2];

//2. Index position
const fruits =['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);//'apple'
console.log(fruit[2]);//undefined
console.log(fruits[fruits.length-1]);//last element

//3.Looping over an array
//print all fruits
    //a. for
for (let i=0; i<fruit.length; i++)
    console.log(fruit[i]);
    //b. for of
for(element of fruit)
    console.log(element);
    //c.forEach - callback function 
fruits.forEach((fruit,index,array)=>console.log(fruit,index));  // arrow function : 아직 안익숙한듯 열심히하자!


//4. addition,deletion, copy
//push : add an idtem to the end
fruits.push('strawberry', 'peach');
console.log(fruits);
//pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//note !!!!:: 중요 : shift, unshift 는 pop, push 보다 훨~~씬 느림
//unshift : add an item from beginning - 앞에서 추가
fruit.unshift('strawberry','lemon');
console.log(fruits);
//shift.remove an item from the beginning - 앞에서 삭제
fruit.shift();
fruit.shift();
console.log(fruits);
//splice : remove an item by index position
fruits.push ('strawberry','peach','lemon');
console.log(fruits);
fruit.splice(1); //parameter(index, count - 몇개나 지울건지)
console.log(fruits); //console : index 0만 남아있고 1부터는 싹지워짐
fruit.splice(1,1); //parameter(index, count - 몇개나 지울건지)
console.log(fruits); //console : index 1만 지워짐
fruit.splice(1,1,'peanut'); //index 1이지워지고 그 자리에 peanut 삽입
//combine two arrapys
const fruits2 = ['pear', 'coconut'];
const newFruits = concat(fruits, fruits2);




//5.searching
//indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf('strawberry'));
console.log(fruits.indexOf('pear'));
//includes
console.log(fruits.includes('coconut')); //T, F
console.log(fruits.includes('passionfruit')); //-1 : 존재하지 않는값
//lastIndexOf
fruit.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple')); //elemetn가 여려개 있으면 가장 마지막 index를 가져옴

