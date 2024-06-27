import Account from "./Account.js";
class CA extends Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=25000
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id
        this.acc_Bal=amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let ca1=new CA(102,'Priyanka','pg@pm.com',50000,'New Delhi')
console.log(ca1)