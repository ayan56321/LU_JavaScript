console.log ( "Q3- API Calling Assignment")

// https://jsonplaceholder.typicode.com/todos


async function fetchValue(){
let values = [] ;
const response = await fetch('https://jsonplaceholder.typicode.com/todos')
const dataVal = await response.json();

//console.log(dataVal)

let str = JSON.stringify(dataVal)
var obj = JSON.parse(str);

// Async Wait and Fetch for Completed ToDos , completed = true
// for (var key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     var val = obj[key];
//         if (obj[key]["completed"].toString() == "true"){
//             console.log(val);
//         }
        
//   }
// }

//console.log('Value Promises')
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        // Promise for Completed ToDos
        createUser(val)
    }
}


}

fetchValue()
let values = [] ;
console.log(values)



// // Promises
function createUser(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            values.push(user);
            const error = false
    
            if (!error){
                resolve();
            }else{
                reject ("Oops Error occured")
            }
    
        },2000)
    })
}

