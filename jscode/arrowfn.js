// const user = {
//     username : "chiranjivi",
//     score : 500,
//     welcomeMessage : function(){
//         console.log(`${this.username} welcome to the website`); //this makes current context
        
//     }
// }
//         //user.welcomeMessage()
//         user.username = "shyam"
//         //user.welcomeMessage();
//         console.log(this);


// function chai(){
//     let username = "chiranjivi"
//     console.log(this.username);
// }
// chai();

// const chai = () => {                        // arrow function
//     let username = "chiranjivi"
//     console.log(this);
// }


//chai();

       //() => {}                        // arrow funtion declearation

//        const addTwo = (num1, num2) => {
//             return num1+num2
//        }
// addTwo(3, 4)
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) =>  (num1+num2 )            // another arrow function declearation
// console.log(addTwo(3, 4));



// ************IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)***************

// (function chai() {
//     console.log(`DB CONNECTED`);
// })();

// // ()()                    // IIFE is used to remove the pollution of global scope

// // ( () => {               //arrow function declearation in IIFE function

// // })()

// (() => {                            // same function can be written as arrow function by using this syntax
//     console.log(`DB CONNECTED TWO ${name}`)
// })(chai)



// ************javascript execution context*****************

//{} - global execution context refers to this ; execution context in windows brower is object form(window object)
// execution context - global execution context
// functional execution context - 
// eval execution context - it is a property of global object
// {} it executes in two phases i> memory creation phase or creation phase- 
// ii> execution phase - 


// let val1 = 10
// let val2 = 20
// function addNum(num1, num2){
// 	let total = num1 + num2
// 	return total

// }
// let resut1 = addNum(val1, val2)
// let result2 = addNum(10,2)


// step 1> global execution and allocated to this
// 	2> memory phase - all variables are collected in memory 
// 	val1 => undefined val2 => undefined addNum => definition of funtion result1 => undefined result2 => undefined
// 	3> execution phase(deleted after it executes its operations) -( val1 = 10 val2 = 20 ) addNum=> here new variable environment + execution thread is Formed again it goes to memory ohase
// 	 and process repeated

