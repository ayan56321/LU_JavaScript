console.log("Q1 - D4 - Assignment")

for (i=1;i<=100;i++){

    switch (true) {
        case (i%3 == 0):
            console.log("Number is "+i+" Fizz")
            break;

            case (i%5 == 0):
                console.log("Number is "+i+" Buzz")
                break;

                case (i%3 == 0 && i%5 == 0):
                    console.log("Number is "+i+" FizzBuzz")
                    break;
    
        default:
            break;
    }
}