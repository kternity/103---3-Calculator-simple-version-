function calculator(){
    console.log("Calculating...");

    let num1 = parseInt(prompt("Enter your first number"));
    let num2 = parseInt(prompt("Enter your second number"));
    alert("You entered " + num1 + " and " + num2);

    let sum = num1 + num2;
    let subtraction = (num1 - num2);
    let multiplication = (num1 * num2);
    let division = (num1 / num2);


    
console.log("the addition of the two numbers is " + sum + ".");
console.log("The subtraction of the two numbers is " + subtraction);
console.log("The multiplication of the two numbers is " + multiplication);
console.log("The division of the two numbers is " + division);
}
