class Account{
    acc_Name;
    acc_Email;
    acc_Address;
    constructor(name,email,addr){
        this.acc_Name=name
        this.acc_Email=email
        this.acc_Address=addr
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=500
    constructor(){
        super()
    }
}
let sa1=new SA()
console.log(sa1)