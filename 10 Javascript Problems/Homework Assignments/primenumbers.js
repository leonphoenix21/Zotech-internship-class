// Prime Numbers - Write a program that prints all prime numbers from 1 to 100.

function isPrime(number) {
    if (number <= 1) { // Check if less than or equal to 1. If true Is not a prime number
        return false;
    }
    if (number === 2 || number === 3) { // Check if the number is less than or equal to 3. If true This is a prime number
        return true
    }
    if (number % 2 === 0 || number % 3 === 0) { // Check if the number is divisible by 2 or 3. if true This is not a prime number 
        return false
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false
        }
    }

    return true
}

function primeHundred(startNum, endNumber) {
    for (let n = startNum; n <= endNumber; n++) {
        if (isPrime(n)) {
            console.log(n)
        }
    }
}

console.log(primeHundred(10, 50))