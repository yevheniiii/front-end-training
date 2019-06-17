const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

// Second way to write it
//const plantNeedsWater = day => day === 'Wednesday' ? true : false;