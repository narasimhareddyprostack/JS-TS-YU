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
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id
        this.acc_Bal=amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let sa1=new SA(101,'Rahul','rg@pm.com',5000,'wayanad')
console.log(sa1)

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

console.log(sa1.get_Bal())
console.log(ca1.get_Bal())