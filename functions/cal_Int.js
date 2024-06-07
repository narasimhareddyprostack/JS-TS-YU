function cal_Interest(principal, rate,no_Of_Months){

    let total_Amount = principal + principal/100*rate*no_Of_Months;
    return total_Amount

}

let amount=cal_Interest(100000,2,4)
console.log(amount)