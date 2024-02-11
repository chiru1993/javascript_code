// let Organization = Object.create({ 
//     init: function(name) { 
//        this.name = name; 
//     }, 
//     do: function(callback) { 
//        callback.apply(this); 
//     } 
//   }); 
//   let geeksforgeeks = new Organization('geeksforgeeks'); 
//   geeksforgeeks.do(function() { 
//       alert(this.name); // 'geeksforgeeks' gets alerted because we rewired 'this'. 
//   }
// starting sample


// const accountId = 123456 ; //declear const
// let accountEmail = "chiranjeevi.singh7@gmail.com" ;
// var accountPassword = "12345678" ; //note=prefer not to use var because of issue in block scope and funtion scope
// accountCity = "ara" ; 
// let accountState;
// //console.log("acoountId =", accountId);
// accountEmail = "chirusingh03@gmail.com" ;
// accountPassword = "393614" ;
// accountCity = "bagaha " ; 
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

//notes==
//"use strict"; //treat all js codes as newer version

//alert(3+3); // to get pop up in the screen

//datatypes =>>>>>>>>>
//number => 2 to power 53
//bigint
//string
//bollean => true/false
//null => standalone value ; we can assign the value as null too when we have no idea about value
//undefined
//symbol => unique

//object

//console.log(typeof null); // null is an object whereas undefined is undefined


// let score = true ;
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0

// let isLoggedIn =0;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
//"" => false
//"chiru" => true


//***************************operations********************************************

// let value = 3; 
// let negValue = -value;
// console.log(negValue);
// console.log(2*2);
// console.log(2+2);
// console.log(2/2);
// console.log(2%2);
// console.log(2-2);
// console.log(2**2);

// let str1 = "helo"
// let str2 = " chiranjivi"
// let str3 = str1 + str2 
// console.log(str3);

// console.log("1" + 2);
// console.log("1"+"2");
// console.log("1"+ 2 + 2);
// console.log(1+ 2 + "2");
// console.log((3 + 5) * 4 % 7);

// console.log (+true);

// let num1, num2, num3 ;
// num1=num2=num3=2+2;
// console.log(num1);

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter);
// ++gameCounter;
// console.log(gameCounter);

// console.log(2>1);
// console.log(`02`>1);


// console.log(null > 0);
// console.log(null >= 0); // true bcoz it is the condition of value comparision here null is converted into 0 gives true result
// console.log(null == 0);
// console.log(null < 0);

// console.log(undefined > 0);
// console.log(undefined >= 0); 
// console.log(undefined == 0);
// console.log(undefined < 0);
// avoid these type of comparisons
 
//notes about datatypes


//<i> primitive- 7 types - string, number, boolean , null, undefined, symbol, bigint
//<ii> reference type(non primitive) : arrays, objects, functions

// let chocolate = "dairymilk" ;
// let icecream = " chocobar" ;
// console.log(chocolate + icecream);

// let iceCream = prompt("enter the chocolate flavour");
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// let num = prompt("enter your number");
// if(num >= 100 ){
//     alert ("yes,you guess the right number" );
// } else{
//     alert("your guess is wrong, try again");
// }


// arrays: const heroes = ["shaktimaan", "batman", "spiderman"];
//objects : defined in {} like
// let myObj = {
//     name : "chiranjivi",
//     age : 30,
// }
  
// funtion is deleared as : function(){} like we can see below 
// const myFunction = funtion(){
//     console.log("hello world");
// }


//***************************memories*********** *
// stack memory (primitive values goes to stack which comes as a copy of that value)& 
//heap memory( it gives reference of the original value in heap memorynon primitive )

// let myYoutubename = "chiranjeevikumar@youtube.com"
// let anothername = "myYoutubename"
// anothername = "chirusingh@youtube.com"
// console.log(myYoutubename);
// console.log(anothername);

// let userOne = { 
//     email : "user@google.com",
//     upi : "user@ibl"

// }
// let userTwo = userOne

// userTwo.email = "chiru@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);
// console.log(userTwo.upi);

//**************string****************** *//
// const name = "chiranjivi"
// const repoCount = 50
// //console.log(name + repoCount + " value"); // instead of this use backtiks
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String (`chiranjivikumar`)
// console.log(gameName[0]); // key access of 0 index
// console.log(gameName.__proto__); // prototype access of string
// console.log(gameName.length);//length of the string
// console.log(gameName.toUpperCase());// to conert in uppercase
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));
// const newString = gameName.substring(0,4) // slicing the string
// console.log(newString); 
// const anotherString = gameName.slice(3,4)
// console.log(anotherString);

// const url =  "http://chirusingh.con/chiru%20chiranjivi"
// console.log(url.replace('%20', '_')) //changing in url
// console.log(url.includes('sunder')) // checking elements present inside url

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(5)); //precision value finding


//**************maths*****************


// console.log(Math);
// console.log(Math.abs(-4)); // gives postive value of the number
// console.log(Math.round(4.3)); // gives nearest possible number
// console.log(Math.ceil(4.2)); // it will show the next number 
// console.log(Math.max(3,4,5,6,8));
// console.log(Math.random()); // gives values between 0 to 1
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10
// const max = 20 
// console.log(Math.floor((Math.random() * (max - min + 1) ))+min);


//dates

//let myDate = new Date() //date itself is an object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2024, 2, 4, 5, 3)
//console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //milisecond values
// console.log(myCreatedDate.getTime()); // milisecond values
// console.log(Date.now()/1000);



//***********************level 2*********************
//*************arrays******************** 
 //array is an object , resizable, mixed datatypes, accessed by index values 
 
// const myArr = [0, 1, 2, 3, 4, 5, 6]
// const myHeroes = ["superman","batman", "antman"]

// const myArr2 = new Array(1, 2, 3, 4) // new method to declear arrays
// console.log(myArr[1]);

//array mathods
//myArr.push(6)
// myArr.push(7)//add elements at the last index
// myArr.pop() // removes an element 
// console.log(myArr);
// console.log(myArr);
// myArr.unshift(9) // 9 inshirted at the begining of the array
// myArr.shift() // removes the shifted element from begining
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join() //binds the array and convert it into string
// console.log(myArr);
// console.log(newArr);

//slice & splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const marvel_heros = ["thor", "spiderman", "ironman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //goves array inside array - it took array as a data

// const allHeros = marvel_heros.concat(dc_heros) // add all elements in a single array of length size 6
// console.log(allHeros); //

// const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros)

// const another_array = [1, 2, 3, [4, 5, 6],7 , [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity) // spread out all the values
// console.log(real_another_array);

// console.log(Array.isArray("Chiranjivi")); // true or false -- false
// console.log(Array.from("Chiranjivi")); // converting into array

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); // combines all scores into arrays




//****************************0bjects*************************** 

//singleton - object made by help of constructor not by literals objects
//object literals


//const mySym = Symbol("key1")
//const mySym = Symbol("key2")


// const JsUser = {
//     name : "chiranjivi", // here we can define name and key both 
//     "full name" : "chiranjivi Kumar",
//     [mySym ]: "myKey1" ,
//     age : 30,
//     location : "bagaha",
//     email : "chirusingh03@gmail.com",
//     isLoggedIn : false ,
//     lastLogginDay : ["monday", "saturday"]
// }


// console.log(JsUser);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "chiranjivikumar@gmail.com" // change the value inside object by declearing with dot
// //Object.freeze(JsUser) // freeze the value inside object which cannt be changed
// JsUser.email = "chiranjivikumar12345@gmail.com"
// //console.log(JsUser);

// JsUser.greeting = function() {  // declearing a funtion
//     console.log("hello welcome to JS");
// }
// JsUser.greetingTwo = function() {
//     console.log(`hello welcome to JS, ${this.name}`); // string interpolation
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//*************8object singleton**************

//const tinderUser = new Object()
// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "samaay"
// tinderUser.isLoggedIn = false

//console.log(tinderUser);

// const regularUser = {
//     email : "samaay123@gmail.com", 
//     fullname: {
//         userfullname: {
//             firstname : "ritesh",
//             lastname : "kumar"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// //const returnedobj1 = Object.assign(obj1, obj2);

// //const obj3 = {obj1, obj2}

// const obj3 = {...obj1, ...obj2}

// // console.log(obj1)
// // console.log(returnedobj1 === obj1);
// console.log(obj3);

// const user = [
//     {
//         id : 1,
//         email : "cks@gmail.com",

//     },
//     {
//         id : 2,
//         email : "ck@gmail.com",
        
//     },
//     {
//         id : 3,
//         email : "c@gmail.com",
        
//     }
// ]
// console.log(user);
// //user[1].email()
// console.log(user[1]);

// const course = {
//     courseName : "javascript",
//     price : 999,
//     courseTeacher : "Hitesh"
// }
// //console.log(course);

// const{courseTeacher : instructor} = course //can rename the courseTeacher as another name like instructor by taking ":"
// //console.log(courseTeacher);
// console.log(instructor);


//*************************API*********************

// {
//     "name" : "chiranjivi",
//     "courseName" : "javacript practice",
//     "price" : "free"

// }
// [
//     {},
//     {},
//     {}

// ]  // check random user me API and understand it




//***************funtions************** 

// console.log("c");
// console.log("H");
// console.log("I");
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("J")


// function sayMyName(){                      // definition of function
// console.log("c");
// console.log("H");
// console.log("I");
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("J");


// }

// sayMyName()


// function addTwoNumbers(number1, number2) {          // declearing functions
//     number1 + number2 
//     console.log(number1 + number2);
// }


// function addTwoNumbers(number1, number2) {          // declearing functions in another way
//    let result= number1 + number2 
//    return result                                       // nothing can be decleared after result
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3,4)
// console.log("result:", result);
// //addTwoNumbers(3,"4")
// //addTwoNumbers("3",4)

// function addTwoNumbers(number1, number2) {          // declearing functions in another way 
//     return number1 + number2                                      // nothing can be decleared after result
//  }
//  const result = addTwoNumbers(3,4)
//  console.log("result:", result);


// function calculateCartPrice(...num1){       // ... is called rest operator(packed it in a bundle)
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 700, 9000, 6700))


// function calculateCartPrice(val1, val2, ...num1){       // val1 & val2 takes their values itself rest returned
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 400, 700, 9000, 6700))


// const user = {
//     username : "chiranjivi",
//     score : 300 
// }
// function handleObject(anyObject) {
//     console.log(`username is ${anyObject.username} and score is ${anyObject.score}`)

// }
// //handleObject(user)
// handleObject({
//     username : "chiranjivi",
//     score : 300
// })


// const myNewArray = [200, 300, 400, 500, 600]
// function returnSecondValue(getArray){
//     return getArray[4]
// }
// //console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 600, 800, 507]));


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  let temperatureInFarenhite = 98.6
  let temperatureInCelcius = toCelsius(temperatureInFarenhite)
  console.log(temperatureInCelcius);
