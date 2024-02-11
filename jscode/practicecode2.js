

//**********************************scope****************************
//var c = 300
// let a = 200
// if (true){                          //here var in the scope is not used bcz it gives the values even when it is called from other function
//     let a = 10
//     const b = 20
//     var c = 30 

//     console.log("inner :", a);                 //inside braces is called block scope and outside braces all decleations are called global scope
// }                 
// console.log(a);
// //console.log(b);
// //console.log(c);


// function one(){
//     const username = "chiranjivi"        //inner function can take the value of outer function but outer function cannt take the value of inner function
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website)

//     two()
// }
// //one()

// if(true) {
//     const username = "chiranjivi"
//     if(username === "chiranjivi"){
//         const website = "  youtube"
//         console.log(username + website);
//     }
//    // console.log(website);
// }
// //console.log(username);



//*********************interesting***************** */


// console.log(addOne(5))           // declearing hoisting
// function addOne(num){
//     return num + 1

// }


// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5)
// //console.log(addOne)


