console.log("Q7 - D4 - Assignment")

let n = Number(prompt("Enter a Number to check prime/non-prime"))
var  i, flag = true; 

for(i = 2; i <= n - 1; i++) {
                if (n % i == 0) { 
                    flag = false; 
                    break; 
                } 
                  
                // Check and display message 
            if (flag == true) 
            console.log(n + " is prime"); 
            else
            console.log(n + " is not prime"); 
        } 
    