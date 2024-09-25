// 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.).

let number = 1;
let Square = 1; 

for (let number = 1; number <= 100; number++) {
  if (number === Square) { 
    console.log("First Square Number =",number)
    break; }
  else{
    console.log(number)
    Square = number * number;  
  }
}