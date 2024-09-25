//2-4. Display sum of all the even numbers from 206 to 311.
let sum=0;
for(let number=206; number<=311; number++){
    if( number%2 === 0){
        sum=sum+number
        //console.log(sum)
    }
}
console.log(sum)
