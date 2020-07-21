console.log("Q5 - D4 - Assignment")

let sales = Number(prompt("Please mention your sales amount"))

if (sales >= 0 && sales <= 5000){
    comm = 0.02* sales 
}else if(sales > 5000 && sales <= 10000){
    comm = (sales - 5000)*0.05 + (0.02*5000)
}else if(sales > 10000 && sales <= 20000){
    comm = (sales - 10000)*0.07 + (0.02*5000) + (0.05*5000)
}else if(sales > 20000){
    comm = (sales - 20000)*0.1 + (0.02*5000) + (0.05*5000) + (0.07*10000)
}


console.log(" Total Commision = "+comm)