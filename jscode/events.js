let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");

// } 
// btn1.onclick = (evt) => { 
//     console.log(evt); 
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX , evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
 
// }; 
//let div = document.querySelector("div");

// by addEvent listener
btn1.addEventListener("click" , () => {
     console.log("button1 was clicked");
});
btn1.addEventListener("click" , () => {
    console.log("button1 was clicked- handler2");
});

const handler3 = ()  => {
    console.log("button1 was clicked - handler3");
}
btn1.addEventListener("click" , () => {
    console.log("button1 was clicked- handler3");
});
btn1.addEventListener("click" , () => {
    console.log("button1 was clicked- handler4");
});
btn1.removeEventListener("click", () => {
    console.log("button1 was clicked - handler3");
})
let div = document.querySelector("div");

