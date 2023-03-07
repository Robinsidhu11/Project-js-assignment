let number1=prompt("Enter First Number")
number1=Number.parseInt(number1)
let number2=prompt("Enter Second Number")
number2=Number.parseInt(number2)
let operator=prompt("Enter Operation Symbol")
let result=undefined
switch(operator){
    case '+':
        result=number1+number2
        console.log(result)
        break
    case '-':
        result=number1-number2
        console.log(result)
        break
    case '*':
        result=number1*number2
        console.log(result)
        break
    case '/':
        result=number1/number2
        console.log(result)
        break
    default:
        console.log("Invalid operator")
}