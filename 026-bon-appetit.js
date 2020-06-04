// https://www.hackerrank.com/challenges/bon-appetit/

//1
function bonAppetit(bill, k, b) {
    const fairlyCost = (bill.reduce((sum, cost) => sum + cost, 0) - bill[k]) / 2;
    console.log(fairlyCost < b ? b - fairlyCost : "Bon Appetit");
}
bonAppetit([3, 10, 2, 9], 4, 1) //Bon Appetit

// #2
function bonAppetit2(bill, k, b) {
    bill[k] = 0;
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let annaExpectedBill = bill.reduce(reducer) / 2;
    if (b == annaExpectedBill) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaExpectedBill);
    }
}
bonAppetit2([3, 10, 2, 9], 4, 1)  //-11
