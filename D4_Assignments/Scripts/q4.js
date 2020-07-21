console.log("Q4 - D4 - Assignment")

let val = prompt(`
                   ***Calculator***
                   1. Addition ,
                   2. Subtraction,
                   3. Division,
                   4. Multiplication,
                   5. SquareRoot,
                   6. Percentage, 
                   Choose a Value`)

let num1 = Number(prompt('Enter 1st Number'))
let num2 = Number(prompt('Enter 2nd Number'))

switch (true) {
    case val==1:
        result = num1+num2
        console.log(" Value of Addition is "+result)
        break;
    case val==2:
            result = num1-num2
            console.log(" Value of Subtraction is "+result)
            break;
    case val==3:
                result = num1/num2
                console.log(" Value of Division is "+result)
                break;
    case val==4:
            result = num1*num2
            console.log(" Value of Multiplication is "+result)
            break;
    case val==6:
            result = num1%num2
            console.log(" Value of Percentage is "+result)
            break;
    case val==5:
            result1 = num1*0.5
            result2 = num2*0.5
            console.log(" Value of Square Root of "+num1+" is "+result1)
            console.log(" Value of Square Root of "+num2+" is "+result2)
            break;
    default:
        break;
}

