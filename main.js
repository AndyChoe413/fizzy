/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
const fizzy = (num) => {
  if (num % 3 !== 0 && num % 5 !== 0) return num
  else if(num % 5 === 0 && num % 3 === 0) return 'FizzBuzz'
  else if (num % 5 === 0 && num % 3 !== 0) return 'Buzz'
  else return 'Fizz'
}





    // ✕ returns 'Fizz' if the given number is divisible by 3 and not 5. (2 ms)
    // ✕ returns 'Buzz' if the given number is divisible by 5 and not 3. (1 ms)
    // ✕ returns 'FizzBuzz' if the given number is divisible by both 3 and 5
    // ✕ returns the number if the given number is divisible by neither 3 nor 5


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
