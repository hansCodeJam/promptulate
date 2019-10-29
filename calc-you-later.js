

// const result = calculate(operation, num1, num2);

function myFunction() {

    let input = prompt("Please enter operation");
    input = input.split(' ')
    let result = calculate(input[0],Number(input[1]),Number(input[2]))
    // console.log(operation)
    document.getElementById("result").innerText = result
    // calculate(input[0],Number(input[1]),Number(input[2]))
      
  }