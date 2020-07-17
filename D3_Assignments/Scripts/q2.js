console.log("Solution for Q2- Day3 Assignment")

let strVal = prompt("Input OSName and Version with Space Inbetween")

if (strVal.includes(" ")){
    console.log("Entered Data does contain Space")
    arrVal = strVal.split(" ");
    console.log("The OSName is "+arrVal[0]+" Version is "+arrVal[1])
}else{
    console.log("Entered Data does not contain Space")
}


