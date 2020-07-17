console.log("Solution for Q3- Day3 Assignment")

let marks = Number(prompt("Enter your marks "));

// if (marks >= 50 && marks <= 75){
//     console.log(" Marks Scored = "+marks+" Grade=B")
// }else if (marks >= 35 && marks <= 49){
//     console.log(" Marks Scored = "+marks+" Grade=C")
// }else if (marks >= 76 && marks <= 100){
//     console.log(" Marks Scored = "+marks+" Grade=A")
// }else if (marks <= 34){
//     console.log(" Marks Scored = "+marks+" Grade= Fail ")
// }

// Using Switch Statement
// switch (true) {
//     case marks >= 50 && marks <= 75:
//         console.log(" Marks Scored = "+marks+" Grade=B")
//         break;
//     case marks >= 35 && marks <= 49:
//         console.log(" Marks Scored = "+marks+" Grade=C")
//         break;
//     case marks >= 76 && marks <= 100 :
//         console.log(" Marks Scored = "+marks+" Grade=A")
//         break;
//     case marks <= 34 :
//         console.log(" Marks Scored = "+marks+" Grade= Fail ")
//         break;
//     default:
//         break;
// }

// Using Ternary Operator

let result = (marks >= 50 && marks <= 75) ? `Marks Scored = ${marks} and Grade=B` : 
             (marks >= 35 && marks <= 49) ? `Marks Scored = ${marks} and Grade=C`:
             (marks >= 76 && marks <= 100 ) ? `Marks Scored = ${marks} and Grade=A`:
             (marks <= 34) ? `Marks Scored = ${marks} and Grade=Fail`:'You have entered Invalid vale > 100 ' ;


 console.log(result)