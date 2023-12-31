// Problem 6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function sumOfSquares(max, sum=0){
    if(max == 0){
        return sum;
    }
    if(max > 0){
        sum += max * max;
        return sumOfSquares(max-1, sum);
    }
}

function squareOfSums(max, sum=0){
    if(max == 0){
        return sum * sum;
    }
    if(max > 0){
        sum += max;
        return squareOfSums(max-1, sum);
    }
}

function sumSquareDifference(max){
    return (squareOfSums(max)) - sumOfSquares(max);
}

console.log(sumSquareDifference(100))