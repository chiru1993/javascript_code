//for loop

// for(let count=1; count <= 100000; count++){
//      console.log("chiranjivi kumar"); // 5 times execute

// }


// calculate sum of 1 to 5
 // let sum = 0;
// for (let i=1; i<=5; i++) {
//     sum = sum + i  ; // sum = 1+2 =3 +3 = 6 + 4 =10 + 5 =15
// }
// console.log ("sum =", sum);
// console.log("loop has ended");

// let sum = 0;
// let n = prompt ("enter the value of n");
// for (let i=1; i<=n; i++) {
//     sum = sum + i  ; // sum = 1+2 =3 +3 = 6 + 4 =10 + 5 =15
// }
// console.log ("sum =", sum);
// console.log("loop has ended");

//while loop
//  let i=1;
//  while(i<=5){
//     console.log("i=", i);
//     i++;
//  }

// let i=1;
// sum = 0;
//  while(i<=5){
//     sum = sum + i ;
//     i++;
//     console.log("sum=", sum);
    
//  }

//do-while loop
//  let i=1;
//  do {
//    console.log ( "i=", i);
//    i++;
//  } while (i <= 10);

//for of loop
// let str = "chiranjivi kumar";
// for( let i of str){  //iterator
//    console.log("i =", i);
   
// }
// console.log ("i=", i);

// let str = "west champaran";

// let size = 0;
//  for ( let val of str) {
//    console.log ( " val=", val);
//    size++;
//  }
//  console.log("string size =", size);


//for in loop
let student = {
   name: "chiranjivi kumar" ,
   age : 30 ,
   cgpa : 7.1 ,
   isPass : true ,
   
};
 for (let key in student){
   console.log("key=", key , "value=" , student[key]);
 }  