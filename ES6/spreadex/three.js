//let eids=[101,102,103,104]
// index   0   1   2  3
//create new Arraay based on exist array
//group of elements as one entity
//elements stored based on index

let new_Eids=[]
let eids=[101,102,103,104]
for(var i=0;i<=eids.length-1;i++){
    new_Eids.push(eids[i])
}

/* var i=0
while(i<=eids.length-1){
    new_Eids.push(eids[i])
    i++
} */
/* 
var i=0
do{
    new_Eids.push(eids[i])
    i++
}while(i<=eids.length-1)
     */ 

/* for( eid of eids){
    new_Eids.push(eid)
}
 */
/* let new_Eids = eids.map((eid)=>{
    return eid
}) */
console.log(eids)
console.log(new_Eids)