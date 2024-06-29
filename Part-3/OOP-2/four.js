class Account{
    acc_Bal=0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
}
let a1=new Account();
a1.deposit_Amount(5000);
a1.deposit_Amount(15)


let a2=new Account();
a2.deposit_Amount(15000)
a2.deposit_Amount(50)

console.log(a1)
console.log(a2)
console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log("Testing")
a1.withdrawl_Amount(15)
a2.withdrawl_Amount(200)

console.log(a1.get_Bal())
console.log(a2.get_Bal())