// 1. Import the math module
// and use it in the application

const math = require("../lib/math")

// TASK 1:
// Make simple calculator app that asks the user for operation to make
// The application will parse the given operation and call the appropriate function
// from the math module.
// The application will then print the result to the console.
// The application will then ask the user if they want to continue.
// If the user wants to continue, the application will repeat the process.
// If the user does not want to continue, the application will exit.

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Please enter your calculation: ', (answer) => {

    let numbers = []
    let opAfter = []
    let op = ['+','-','/','÷',"*","x"]
    let nums = ['1','2','3','4','5','6','7','8','9','0']
    let check = 0
    let storage = ''
    while (check < answer.length){
        if (op.includes(answer[check])){ 
            if (answer[check] == "÷"){ 
                opAfter.push("/")
                numbers.push(Number(storage))
                storage = ""
            }else if (answer[check] == "x"){
                opAfter.push("*")
                numbers.push(Number(storage))
                storage = ""
            }else {
                opAfter.push(answer[check])
                numbers.push(Number(storage))
                storage = ""}
        }else if (nums.includes(answer[check])){  
            storage += answer[check]
        }else{ 
            break
        }
        check += 1
    }
    if (storage != ""){
        numbers.push(Number(storage))}
     
    
    let result = numbers[0]
    for (let i = 0; i < opAfter.length; i++){
        if (opAfter[i] === "+"){
            result += numbers[i+1]
        }else if (opAfter[i] === "-"){
            result -= numbers[i+1]
        }else if (opAfter[i] === "*"){
            result *= numbers[i+1]
        }else if (opAfter[i] === "/"){
            result /= numbers[i+1]
        }
    }

    console.log("Result =", result)
  rl.close();
});
  
// TASK 2 (Bouns 50 points):
// Make a guessing game that asks the user to guess a number between 0 and 50.
// The application will generate a random number between 0 and 50 using the randomTo50 function.
// The application will then ask the user to guess the number.
// The user has 5 attempts to guess the number. if the attempt is wrong, the application will print "Try again 🤔" to the console.
// If the user does not guess the number correctly 5 times, the application will print "You lost the game!! try again 🤔" to the console.
// If the user guesses the number correctly, the application will print "You won the game!! congrats 🥳🥳" to the console.

const rand = math.randomTo50()
let check = 5
function guess_play(){
    if (check > 0){
        rl.question('Guess number between 1 to 50: ',(guess) => {
                if (guess === rand){
                    console.log("You won the game!! congrats 🥳🥳")
                    rl.close()
                }
                check -= 1
                if (check > 0){
                    console.log("Try again 🤔")
                    console.log(`You have ${check} times`)
                    guess_play()
                }else{
                    console.log("You lost the game!! try again 🤔")
                    console.log(`the correct answer was: ${rand}`)
                    rl.close()
                }
        })
    }
}
guess_play()


// TASK 3 (Bouns 50 points):
// Make a function that ask the user the following questions:
// 1. What is your name?
// 2. What is your age? (if age is not a number or is less than 10, the application will print "Invalid age" and end the program)
// 3. What is the Favorite programming language
// Then after the user answers all the questions, the application will print the following.

rl.question("What is your name? ",(QName) => {
    rl.question("What is your age? ",(QAge) => {
        if (isNaN(Number(QAge)) || QAge < 10){
             console.log("Invalid age")
             rl.close()
        }else{
            rl.question("What is the Favorite programming language? ",(QLanguage) => {
                console.log("\n--- Summary ---");
                console.log(`Name: ${QName || "(no name)"}`);
                console.log(`Age: ${QAge}`);
                console.log(`Favorite language: ${QLanguage || "(not specified)"}`);
                console.log("----------------\n");

                rl.close()
                    })}
           

    })
})



