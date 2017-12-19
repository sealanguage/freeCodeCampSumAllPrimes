// Check inumbers 2 through input -1
// 		Check if input 8s divisible by number
// 			Not prime (retutn false)
// 		If not divisible
// 			Repeat with next number
// Is prime (return true)\

function isPrime(num) {
  for (var n = 2; n < num; n++) {
    if (num % n == 0) {
      return false;
    }
  }
  return true;
}

// Running total = 0
// Start with 2 up to and including 10 
// 	Check if prime
// 		Add number to running total
// Repeat with next number
// Else nt prime
// 	Repeat with next number
// Return running total


function sumPrimes(num) {
    var total = 2;
      for (var n = 3; n <= num; n++) {
        if (isPrime(n)) {
          total = total + n;
        }
      }
    
    return total;
}

console.log("2", isPrime(2));
console.log("5", isPrime(5));
console.log("4", isPrime(4));
console.log("21", isPrime(21));
sumPrimes(10);
