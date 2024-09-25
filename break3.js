// 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.).
let square;
let number=0; 
while(number <=100 ){
    number++
    square=number
    console.log(number)
    if(square*square === number)
    break;     
}