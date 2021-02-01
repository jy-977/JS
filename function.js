//<Function> 
//-fundamental building block in the program
//-subprogram can be used multiple times : 여러번 재사용 가능
//-performs a task or calculates a value: 한가지  task, 값을 계산


//1. Function declaration : 함수선언
//function name(param1, param2) { body... return; }
//only function === one thing   **중요 : 한가지 함수는 하나의 일만 한다!
//naming: doSomthing, command, verb  네이밍 : 동사형으로
//e.g. createCardAndPoint -> createCard, createPoint  : 이런식으로 여러가지를 한다면 쪼개는것이 좋다.
//function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){   //data type안정해져있음 숫자넣으면 숫자로 나오게됨... ==> typescript에서는 이게 해결이 가능하다 (type이 있음)
    console.log(message);
}
log('hello&');



//2. parameters
//premitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};  //quiz : 객체 ellie의 값은? 객체의 주소값(reference)! -- passed by reference
changeName(ellie);
console.log(ellie); //--> 결과값 {name:"coder"}

//3.Default parameters (added in ES6)
function showMessage(message,from='unknown'){
    /* //undifined인 경우를 handling
    if (from === undefined){
        from ='unknown';
    }*/
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); //--> parameter 하나 없음 :undifined 로 출력됨



//4.Rest parameters  (added in ES6)
function printAll(...args){
    for (let i =0; i<args.length; i++){
        console.log(args[i])
    }
    //간단한 for문 ... 근데 arg의 type이 왜 const지....????
    for (const arg of args){
        console.log(arg);
    }
    //더 간단한버전
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');
//콘촐에 dream \n coding \n ellie\n 출력됨



//5. Local scope
//안에서는 밖을 볼수 있지만, 밖에서는 안을 볼수 없다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage;
console.log(message);



//6.Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2) //3
console.log(`sum: ${sum(1,2)}`);



//7. Early return, early exit
//bad
function upgradeUser(user) {
    if( user.point> 10){
    //long upgrade logic
    }
}
//good
function upgradeUser(user) {
    if( user.point<= 10){
        return ; //조건에 안맞으면 바로 return 시키고
    }
    //long upgrade logic --> 여기서 코드 작성하는게 더 나은방법임
}


//First-class function
//functions are treated like any other vriable
//can be assigned as a value to variable (변수처럼 할당이 되고)
//can be passed as an argument to other function (다른함수의 parameter도 될수 있으며)
//can be return by other function (return값이 될수 있다.)

//1.Function expression
//a <function declaration> can be called earlier than it is defined. (hoisted)
//<function declaration> : hoist 가능 -- 함수 선언전에 호출한 함수도 동일하게 기능한다.
//a <fucntion expression> is created when the execution reaches it.
//<function expression> : hoist 불가능 -- 함수 표현전에 호출한 함수는 에러남.
//둘의 차이 알아두기 - hoist

const print = function(){  //함수이름 X :anonymous function
    console.log('print');
};
print();
const printAgain =  print; //--> printAgain은 변수처럼보이지만 (아랫줄계속)
printAgain(); //-> 호출시에는 함수처럼 호출해줘야함
const sumAgain = sum;
console.log(sumAgain(1,3));


//2. Callback function using fucntion expression : 상황에 맞게 함수를 호출하는것.
function randomQuiz(answer, printYes, printNo){
    if (answer ==='love you '){
        printYes();
    } else {
        printNo();
    }
} 
//anonymous functino : function다음에 이름이 X
const printYes = function () {
    console.log('yes!');
    //print(); ==> recursion된다.
};
//named function : function 다음에 이름이 O - print
//better debuggin in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);




//Arrow functino
//always anonymous
// const simplePrint = function(){
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a+b;

//IIFE : immediately Invoked Function Expression
//함수표현 (선언) 과 호출을 동시에 함
(function hello(){
    console.log('IIFE');
})();


//quiz
//function cacluate(command, a, b)
//commad : add, substract, divide, multiply, remainder
// function calculate(command, a, b){
//     switch(command){
//         case "add" :
//             a+b;
//             break; 
//         case "substract" : a-b;
//         break;
//         case "divide" : a/b;
//         break;
//         case "multiply" : a*b;
//         break;
//         case "remainder" : 
//         break;
//         default : 
//         console.log("wrong command"); break;
//     }
// }

function calculate(command, a, b){
        switch(command){
            case "add" : return a+b; 
            case "substract" : return  a-b;
            case "divide" : return a/b;
            case "multiply" : return a*b;
            case "remainder" : return a%b;
            default : throw Error("wrong command"); 
        }
    }
    