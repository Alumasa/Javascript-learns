//define a function inside an expression
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true
    } else {
      return false
    }
  }
  console.log(plantNeedsWater('Tuesday'));

  //arrow functions - remove the need to create a function
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
  //concise functions
  const plantNeedsWater = day => day === 'Wednesday' ? true : false;
  