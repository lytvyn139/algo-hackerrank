//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
/*
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/

function rentalCarCost(d) {
    const base = 40
    if (d >= 7) return d * base - 50
    if (d >= 3) return d * base - 20
    return d * base
}

function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50
    } else if (d >= 3) {
        return (d * 40) - 20
    }
    return d * 40
}