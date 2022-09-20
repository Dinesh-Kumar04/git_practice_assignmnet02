function checkPrime(num){
    let num1 = 0
    for(let i = 1; i <= num; i++){
        if(num%j==0){
            num1++
        }
    }
    if(num1 > 2){
        console.log(`${num} is a prime number`)
    }else{
        console.log(`${num} is a not prime number`)
    }
}

checkPrime(4)