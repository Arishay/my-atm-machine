#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 10000; //dollar
console.log(`your curent balance is ${myBalance}`);
let pinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin number!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an option",
            type: "list",
            choices: ["withdraw", "check balance" , "fast cash"],
        },
    ]);
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount to withdraw",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
            
        }

        //Using Assignment operator -=

        else {
            let answer = myBalance -= amountAns.amount;
        console.log(`your remaining balance is ${answer} `);
        }
    } else if (operationAns.operation === "check balance"){
        console.log(`your balance is ${myBalance}`);

    }

    else if (operationAns.operation === "fast cash"){
        let fastCash = await inquirer.prompt (
            [
                {
                    name:"cash",
                    message:"Enter the amount to withdrawl",
                    type:"list",
                    choices:[1000,2000,5000,7000,10000]

                }
            ]
        );
        myBalance -= fastCash.cash;
        console.log(` you have succesfully withdrawl ${fastCash.cash} \n your remaining balance is ${myBalance}`);
        
    }

}

else {
    console.log("Incorrect pin number");
}
//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.