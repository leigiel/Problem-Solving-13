// 2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let sum = 0;
let i = 1;

while (sum <= 100){
    i=i+1;
    sum=sum+i;
    if(sum >= 100){
        break; 
    }
    console.log("number =",i,"sum =",sum);
}


