// function for prime number

function isprime(num){
    if(num==1){
        return false;
    }
    for(let i =2; i<Math.sqrt(num)+1; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

// function for EvenOdd number

function evenOdd(num){
    return num % 2 ==0
}

console.log(isprime(5))
console.log(isprime(10))
console.log(evenOdd(10))
console.log(evenOdd(3))