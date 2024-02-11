// print even no between 1-100
// for(let i=1; i<=100 ; i++){
//    // console.log("i=", i);
//     if(i%2===0) {
//         console.log("i=", i)
//     }
// }
// // print odd no between 1-50
// for(let i=1 ; i<=50 ; i++){
//     if(i%2 != 0){
//         console.log("i=", i)
//     }
// }

//create a game where you start with random no and ask user tp match the number

let gameNum =25;
let userNum = prompt("guess the game number:");
while(userNum != gameNum) { //game
userNum = prompt(" you entered wrong number. guess again: ");
}
 console.log("congratulations, you entered the right number");
 