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
function sumPrimes(num) {
    console.log("before prime", num);
    isPrime(num);
    console.log("after prime", num);
  
    return num;
}

console.log("2", isPrime(2));
console.log("5", isPrime(5));
console.log("4", isPrime(4));
console.log("21", isPrime(21));
sumPrimes(10);
