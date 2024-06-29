class Account{
    constructor(){
        console.log("Account class -Constructor")
    }
}
class SA extends Account{
    constructor() {
        super()
        console.log("SA class - constructor")
    }
}
let sa1=new SA()
console.log(sa1)