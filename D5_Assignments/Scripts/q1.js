var inputArray = [];
size = prompt('Enter array size ');
//elememt = 0
//var size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
    
    //Taking Input from user
    inputArray[i] = i+1;
}

//Print the array in the console.
console.log(inputArray);

console.log("Higher Order Functions");

let odd = inputArray.filter(el=>el%2!=0);

let oddCubes = inputArray.filter(el=>el%2!=0).map(el=>el**3);

console.log(odd);
console.log(oddCubes);