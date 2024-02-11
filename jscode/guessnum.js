let gameNum = 25;
let userNum = prompt("guess the number :");
while(userNum != gameNum) {
    userNum = prompt("you entered wrong number, guess again");
}
console.log("congratulations, you entered the right number");
