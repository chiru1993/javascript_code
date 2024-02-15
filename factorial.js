function factorial(num){
           
    if(num==0){
        return 1;
    }
    return num * factorial(num-1);
}

let data = 5;
console.log(factorial(data));
