// Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }

wrapGifts(gifts);


function writeCards(array, event) {
    const myArray = [];
    for (let i = 0; i < array.length; i++) {
        myArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        debugger;    
    } 
    return myArray;
}

console.log(writeCards(["Max", "Dave", "Michael"], "christmas"));

function countDown(int) {
    while (int >= 0) {
    console.log(int);
    int--;
    }
}

countDown(10);
