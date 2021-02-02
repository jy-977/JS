//Objects 
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//nearly all objects in JavaScript are instance of Object
//object = {key: value};

const { concatSeries } = require("async");

//1.literals and properties
const obj1={}; //'object literal' syntax
const obj2 = new Object();//'object6 constuctor' syntax --> class를 이용한 방법
//object
const ellie = {name: 'ellie', age:4};
print (ellie);
//runtime language라서 object를 만들고 나서 중간에 property를 추가할 수 있다(동적이다)
//당연히 좋은 방식은 아님
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;



//2. computed properties
//key should be always string
//접근할 key가 뭔지 알면 . 으로 접근 
//접근할 key가 뭔지 모르면 computed properties []로 접근 - runtime에서 결정될때(실시간으로)
console.log(ellie.name); //. 으로 접근이 가능함
console.log(ellie['name']); //배열처럼 접근도 가능함 key는 string type으로 접근 (computed property)
ellie['hasJob']=true;
console.log(ellie.hasJob);
function printValueDot(obj, key){
    console.log(obj.key);
}
function printValueComputedProperties(obj,key){
    console.log(obj[key]);
}
printValueValueDot(ellie,'name'); //--> undifiend
printValueComputedProperties(ellie,'name');//--> ellie


//3.property value shorhand
const person1={name:'bob', age:2};
const person2={name:'jane', age:3};
const person3={name:'yun', age:4};
const person4 = makePerson('ellie', 30);
const person5 = new Person('jeongyun', 23);



//4. Constructor fucntion
//constructor Fucntion : not good example
function makePerson(name,age){ //constructor function
    return{
        name:name,  //key와 value의 이름이 동일하다면 생략가능
        age:age,
    };
}
//constructor Function : better example (순수하게 object만 생성하는 함수)
function Person(name,age){ //함수이름 대문자로 시작
    //this ={};
        this.name =name;
        this.age = age;
    //return this;
}
console.log(person4);
console.log(person5);



//5.in operator : property existence check (key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie);  //false
console.log(ellie.random); //undifined

//6.for .. in vs for ... of
//for in 은 객체순환 for of 는 배열순환
//for (key in obj)
for (key in ellie){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,4,5];
//notgood
for (let i =0; i< array.length; i++){
    console.log(array[i]);
}
for(value of array)
    console.log(value);



//7.Fun cloning
//object.assign(dst, [obj1, obj2, obj3 ..])
const user ={name:'ellie', age:20};
const user2 = user; //reference ;
user2.name = 'coder';
console.log(user.name); //--> 'coder'

//old way -cloning
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

//better way
const user4 ={};
Object.assign(user4, user);
console.log(user4);


//another example
const fruit1 = {color :'red'};
const fruit2 = {color : 'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue 뒤에 property로 덮어씌워짐
console.log(mixed.size); //big
