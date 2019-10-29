function calculate(operation, firstNum, secondNum) {
  const num1 = Number(firstNum);
  const num2 = Number(secondNum);
  
  const isAddition = operation === '+'
    || operation === 'plus';
  
  const isSubtraction = operation === '-'
    || operation === 'minus';
    
  const isMultiplication = operation === '*'
    || operation.toLowerCase() === 'x'
    || operation === 'times';
    
  const isDivision = operation === '/';
    
  const isModulus = operation === '%'
    || operation === 'mod'
    || operation === 'modulus';
  
  if (isAddition) {
    return num1 + num2;
  } else if (isSubtraction) {
    return num1 - num2;
  } else if (isMultiplication) {
    return num1 * num2;
  } else if (isDivision) {
    return num1 / num2;
  } else if (isModulus) {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }
}

// console.log(calculate('-', 2, 2))
module.exports = {calculate};