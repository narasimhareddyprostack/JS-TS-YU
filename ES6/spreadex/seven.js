let emp={
    id:101,name:"Rahul",sal:45000
}
let detaisl={
    sal:55000,
    loc:"Wayanad"
}
let emp_Details={...emp,...detaisl}
console.log(emp_Details)