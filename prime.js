function checkPrime(num){
    let sun1 = 0
    for(let i = 1; i <= num; i++){
        if(num%i==0){
            sun1++;
        }
    }
    if(sun1 > 2){
        console.log(`${sum1} is a prime number`)
    }else{
        console.log(`${sum1} is a not prime number`)
    }
}

checkPrime(4)