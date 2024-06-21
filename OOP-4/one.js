class Account{
    constructor(){
        console.log("Account class -Constructor")
    }
}
class SA extends Account{
    constructor() {
        console.log("SA class - constructor")
    }
}
let sa1=new SA()
console.log(sa1)