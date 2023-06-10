#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

struct node{
    int n;
    struct node* next;
};

bool isPrime(int input, struct node* primes){
    while(primes->next != NULL){
        primes = primes->next;
        if(input % primes->n == 0){
            return false;
        }
    }
    struct node* newPrime = malloc(sizeof(struct node));
    primes->next = newPrime;
    newPrime->n = input;
    return true;
}

int nthPrime(int n){
    int i;
    struct node primes;
    primes.n = 2;
    int numberOfPrimes = 1;
    for(i = 3; numberOfPrimes < n; i++){
        if(isPrime(i, &primes)){
            numberOfPrimes++;
        }
    }
    return i+1;
}

int main(int argc, char const *argv[])
{
    printf("%d\n", nthPrime(6));
    printf("%d\n", nthPrime(10001));

    return 0;
}
