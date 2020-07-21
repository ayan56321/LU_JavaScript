console.log("Q2 - D4 - Assignment")

const student = {
    name : "helsinki" ,
    age : 24,
    projects :{
        diceGame : "two players dice game usng JScript"
    }
}

 const {name, age, projects:{diceGame}} = student
 console.log (name,age,diceGame)