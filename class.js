'use strict';
//Ojbect-oriented programming : 객체지향 프로그래밍
//class : template 
//object : instance of a class
//JavaScript classes
//-introduce in ES6
//-syntactical sugar over prototype-based inheritance

//1. class declaration : 클래스 선언
class Person{
    //constructor
    constructor(name, age){
        //feilds
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log (`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. getter setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        // //if (value < 0){
        //     throw Error('age can not be negative')
        // }
        this._age = value<0 ? 0 : value;
    }
}
const user1 = new User('Steve','Job', -1);
console.log(user.age);


//3.Feilds (public private)
//too soon!
//https://developer.mozilla.org/en-US/docs/web/JavaScrtip/...
class Exeperiment {
    publicField =2;
    #privateField = 0;
} 
const experiment = new experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //-->결과값 undifined



//4. static properties and method --> 스태틱 이런거 어려유 ㅠㅠ
//too soon
//class에 static으로 만들면, 그 클래스로 만든 객체들한테는 값이 복사되지 않고 --> class자체의 값으로 접근가능
//말보다 밑에 예제를 이해하자
class Article {
    static publisher = 'dream coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.pulisher); //--> undifined
console.log(Article.publisher); //--> dream coding.
Article.printPublisher(); //--> static 함수 호출시 class 명으로 호출한다 // 결과값 'dream coding'



//5. inheritance
//a way for one class to extend another class.
//공통적으로 이용되는 특징을 부모클래스로 만든다 (상위개념)
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw(); //부모 클래스의 함수 호출 : super
        console.log('trinange : '); 
    }
    getArea(){ //overiding
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();  //결과값 : drawing blue color of
console.log(rectangle.getArea()); //400

const triangle = new Triangle(20,20,'red');
triangle.draw(); //결과값 : drawing red color of 
console.log(triangle.getArea());

//6. Class Checking : instance of
//instance가 오른쪽 클래스를 이용해서 만들어졌는지를 판단하는 명령어 (T/F)

console.log(rectangle instanceof Rectangle); //T
console.log(triangle instanceof Rectangle); //F
console.log(triangle instanceof Triangle); //T
console.log(triangle instanceof shape); //T
console.log(triangle instanceof Object); //T --> 헷갈림 : JS의 모든 object는 이 object인터페이스를 상속한거임
console.log(triangle.toString); // object의 to String 불러옴 : triangle 에 toString이 없기 때문
//--> triangle에서 toString overide가능함

