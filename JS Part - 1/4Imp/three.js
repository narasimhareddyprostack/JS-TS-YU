//what is object? group of key:values pairs
//how to create 
let emp={
    eid:101,
    ename:"Rahul",
    esal:55000
}
let user={}

console.log(Object.values(emp))
console.log(Object.values(emp).length)
console.log(Object.values(emp).length>0)


if(Object.keys(user).length >0){
    console.log("Not Empty Object")
}
else{
    console.log("Empty Object")
}