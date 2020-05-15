/* Write a program that prints the numbers from 1 to 100. 
- But for multiples of three print “Fizz” instead of the number 
- and for the multiples of five print “Buzz”. 
- for numbers which are multiples of both three and five print “FizzBuzz”. */

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz (3*5)");
  } else if (i % 3 === 0) {
    console.log("Fizz (*3)");
  } else if (i % 5 === 0) {
    console.log("Buzz (*5)");
  }
  else console.log('else:',i);
}

// for (let i = 0; i < 100; )
//   console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);

