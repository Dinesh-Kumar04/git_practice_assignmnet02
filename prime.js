function checkPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
        return true;
    }
}

let number = 12;
let result = checkPrime(number);
if(result==true){
    console.log(`${number} is a prime number`)
}else{
    console.log(`${number} is not a prime number`)
}