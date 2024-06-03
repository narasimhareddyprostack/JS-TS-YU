const input = require('prompt-sync')()
let num= parseInt(input("Enter Number:"))

num %2 ===0 ? console.log("Even Number") : console.log("Odd")