//let num=20;
// let num =  prompt("please enter a number");

// if (num % 5 === 0 ){
//     console.log (num,"multiple of 5");
// } else{
//     console.log(num,"not a multiple of 5");
// }
 

let score = prompt ("enter your grade between (0-100");
if (score > 0 && score <50){
    console.log("yout garde is F");
} else if ( score >=50 && score < 60) {
    console.log ("your grade is D");
} else if ( score >= 60 && score < 70) {
    console.log("your grade is C");
}else if ( score >= 70 && score < 80) {
    console.log("your grade is B");
} else if ( score >= 80 && score < 90) {
    console.log("your grade is A");
} else{
    console.log("you are excellent");
}