let goToGoa = (success,failure)=>{

    let acc_Bal=500
    acc_Bal > 10000 ? success("Go and Enjoy!"):failure("Go to Prostack! Practice Node JS")


}
goToGoa((msg)=>{  console.log(msg) },(err)=>{console.log(err)})
//goToGoa(()=>{},()=>{})