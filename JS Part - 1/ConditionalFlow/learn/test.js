const input = require('prompt-sync')()
let num= parseInt(input("Enter Number:"))
if(num %2 ===0){
   console.log("Even Number") 
}
else{
    console.log("Odd Number")
}