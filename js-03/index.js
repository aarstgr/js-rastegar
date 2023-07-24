function calculator() {
    let num1 = +prompt("Enter the first number:");
    var operator = prompt("Enter an operator (+, -, *, /):");
    var num2 = +prompt("Enter the second number:");
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log("Result: " + result);
  }
  
  calculator();