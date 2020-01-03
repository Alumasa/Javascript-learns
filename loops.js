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
var mutualFollowers = ['']

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; i++) {
    if (bobsFollowers[i] == tinasFollowers[j]) {
      mutualFollowers = tinasFollowers[j];
    } 
  }
}

