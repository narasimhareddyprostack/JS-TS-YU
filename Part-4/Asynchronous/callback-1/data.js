let employees=[{id:101,name:"Rahul",sal:46000},
               {id:102,name:"Sonia",sal:54000},
]
let createEmployee=(emp)=>{
    setTimeout(()=>{
        employees.push(emp)
    },4000)
}

let displayData=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+`<tr>
                        <td>${emp.id}</td> 
                        <td>${emp.name}</td> 
                        <td>${emp.sal}</td> 
                       </tr>`
        }
        document.getElementById('abc').innerHTML=rows
    },2000)
}
createEmployee({id:103,name:"Priyanka",sal:65000})
displayData()