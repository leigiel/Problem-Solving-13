const sen = 'hi i am web developer';
let reverse = [];
for (const letter of sen) {
    reverse.unshift(letter);
    let print = reverse.join('')
    console.log(print);
}
