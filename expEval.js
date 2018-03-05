function evaluate(str){
  var expArray = str.split(' '); //assume the numbers and operators are space separated
  return expressionEval(expArray);
}

function expressionEval(expArray) {
  var values = []; // add numbers you come across to an array
  for(var a = expArray.length - 1; a >= 0; a--){ //start from back and go forwards
    if(expArray[a]=='+'){
      values.push(values.pop() + values.pop()); //when you come across a + operator take the last two numbers off, add them, and put them back on the number array
    } else if(expArray[a]=='-'){
      values.push((values.pop() - values.pop())); //likewise but you subtract the last two numbers
    } else { //assume there are no other strings other than numbers + and -
      values.push(Number(expArray[a])); //if you just come across a number string then add its number to values
    }
  }
  return values[0]; //when complete the values cascade down to one number
}

/* tests
console.log(evaluate("") == 0)
console.log(evaluate("+ 1 2") == 3)
console.log(evaluate("- 1 -2") == 3)
console.log(evaluate("+ 1 + 2 3") == 6)
console.log(evaluate("+ 4 - 1 + 2 3") == 0)
console.log(evaluate("+ + 1 + 2 3 4") == 10)
console.log(evaluate("- + 1 + 2 3 4") == 2)
*/
