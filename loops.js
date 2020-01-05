//for loop
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }
  
  
// Looping in reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
  
//Looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

//Nested loops
var bobsFollowers = ['Ann', 'Marie', 'Mix', 'Red'];
var tinasFollowers = ['Mix', 'Marie', 'North'];
var mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j= 0; j < tinasFollowers.length; i++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log(mutualFollowers);
    } 
  }
}

// a while loop
const cards = ['diamond', 'spade', 'heart', 'club'];


let currentCard;
while (currentCard !== 'spade') {
  currentCard = 
  cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//do..while loop:
var cupsOfSugarNeeded = 5;
var cupsAdded = 0;
do {
  cupsAdded = cupsAdded + 1;
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}
console.log('And if you don\'t know, now you know.')




