//Printing Calender

for(let i = 1; i <= 12; ++i) {
    if(i <= 7) {       //for first 7 months
      if(i === 2) {    //for feb
        for(j = 1; j <= 28; ++j) {
          console.log(`${j}-${i}`);
        }
      }else if(i % 2 === 0) {
        for(j = 1; j <= 30; ++j) {
          console.log(`${j}-${i}`);
        }
      }else {
        for(j = 1; j <= 31; ++j) {
          console.log(`${j}-${i}`);
        }
      }
    }else {          //for last 5 months
      if(i % 2 === 0) {
        for(j = 1; j <= 31; ++j) {
          console.log(`${j}-${i}`);
        }
      }else {
        for(j = 1; j <= 30; ++j) {
          console.log(`${j}-${i}`);
        }
      }
    }
  }