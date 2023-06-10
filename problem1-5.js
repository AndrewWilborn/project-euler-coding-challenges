// Problem 1
// Find the sum of all the multipules of 3 or 5 below 1000

function multipulesof3or5(max){
    sum = 0;
    for(let i = 0; i < max; i++){
        if(i % 5 == 0 || i % 3 == 0){
            sum += i;
        }
    }
    return sum;
}

console.log(multipulesof3or5(1000))

// Problem 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even valued terms.

function evenFibonacciNumbers(max){
    let num1 = 1;
    let num2 = 2;
    let sum = 0;
    let temp = 0;
    
    while(num1 < max){
        if(num1 % 2 == 0){
            sum += num1;
        }
        temp = num2;
        num2 = num2 + num1;
        num1 = temp;
    }
    return sum;
}
console.log(evenFibonacciNumbers(4000000));

// Problem 3
// What is the largest prime factor of the number 600851475143

function isPrime(input){
    for(let i = 2; i < input/2; i++){
        if(input % i == 0){
            return false;
        }
    }
    return true;
}

function largestPrimeFactor(input){
    let dividend = input;
    let primeFactorization = [];
    for(let i = 2; dividend != 1; i++){
        if(isPrime(i)){
            while(dividend % i == 0){
                dividend = dividend / i;
                primeFactorization.push(i);
            }
        }
    }
    return primeFactorization.pop();
}
console.log(largestPrimeFactor(600851475143))


// Problem 4
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(n){
    n = String(n);
    digits = n.length
    for(let i = 0; i < digits/2; i++){
        if(n.charAt(i) != n.charAt(n.length - i - 1)){
            return false;
        }
    }
    return true;
}

function largestPalindromeProduct(){
    let greatestVal = 0;
    for(let i = 999; i > 0; i--){
        for(let j = 999; j > 0; j--){
            if(isPalindrome(i * j) && i*j > greatestVal){
                greatestVal = i*j;
            }
        }
    }
    return greatestVal;
}

console.log(largestPalindromeProduct());

// Problem 5
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultipule(max){
    let foundAnswer = false;
    let value = 0;
    while(!foundAnswer){
        value++;
        foundAnswer = true;
        for(i = 1; i <= max; i++){
            if(value % i != 0){
                foundAnswer = false;
                break;
            }
        }
    }
    return value;
}

console.log(smallestMultipule(20))