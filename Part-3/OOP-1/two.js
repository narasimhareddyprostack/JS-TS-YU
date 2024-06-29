class Account{
    acc_id=101
    acc_Name="Rahul"
    open_Account(){
        console.log("Account Opened successfully!")
    }
}
let a1=new Account();
console.log(a1)
console.log(a1.acc_id)
console.log(a1.acc_Name)
a1.open_Account()