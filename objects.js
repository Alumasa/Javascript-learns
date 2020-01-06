//objects can be assigned to variables
//objects have key-value pairs
//dot notation is used to access properties of an object
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;

  //bracket notation - in keys with numbers, spaces or special characters
  //console.log(objectName[variableName])
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  let isActive = spaceship['Active Mission'];
  console.log(spaceship[propName]);

  //property assignment of objects
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  spaceship.color = 'glorious gold';
  spaceship.numEngines = 4;
  delete spaceship['Secret Mission'];

  //methods of an object are functions stored in the object
  //separate methods in an object with commas, just like key-value pairs
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();

//nested objects----> //just see for yourself..lol!
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew['captain']['favorite foods'][0];
  spaceship.passengers = [{name: 'Space Dog'}]
  let firstPassenger = spaceship['passengers'][0];