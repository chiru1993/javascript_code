//print all elements in an array

// let array = [2, 3 , 5, 8, 17, 9, 4]
// for(let i=0; i<array.length; i++){
// console.log(array[i])};


// let data = [9, 45, 2, 8, 4, 23, 7, 86, 0, 11, 41, 77]
// function getElement(){
//     let el = document.getElementById("element").Value;
//     if(el < data.length && typeof parseInt(el) === "number"){
//         alert(data[el]);
//     }else{
//         alert("please enter valid input")
//     }
// }


//insert element in an array

// let data = [23, 45, 46, 24, 9];
// let newEl = 70;
// let position = 2;
// for(let i=data.length-1; i>=0; i--) {       //reverse loop
//    // console.log(data[i])
//     if(i >= position){
//         data[i + 1] = data[i]
//         if(i == position){
//             data[i] = newEl;
//         }
//     }
// }     
// console.log(data);
function insertEl(){
let data = [60, 30, 10, 65, 40];
let newEl = document.getElementById('newEl').value;
let position = document.getElementById('position').value;
console.log(data);
for(let i=data.length-1; i>=0; i--) {       //reverse loop
   // console.log(data[i])
    if(i >= position){
        data[i + 1] = data[i]
        if(i == position){
            data[i] = newEl;
        }
    }
}     
console.log(data);

}
