let employees=[{id:101,name:"Rahul",sal:45000},
    {id:101,name:"Sonia",sal:55000},
    {id:103,name:"Priyanka",sal:65000}
]
/* 
for( employee of employees){
    console.log(`Employee Id: ${employee.id} and Name: ${employee.name}`)
} */

let i=0;
while(i<=employees.length -1){
    console.log(`Employee Id: ${employees[i].id} and Name: ${employees[i].name}`)
    i++
}