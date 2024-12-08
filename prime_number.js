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

console.log(isprime(5));
console.log(isprime(10))