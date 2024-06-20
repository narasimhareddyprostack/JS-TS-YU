class Account{
    min_Bal=500
    deposit_Amount(amount){
            console.log(`${amount} - Deposited Successfully!`)
    }
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
console.log(a1.min_Bal)
console.log(a2.min_Bal)

a1.deposit_Amount(5000)
a2.deposit_Amount(15000)