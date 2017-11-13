// Code your solutions in this file
function printBadges(arrayNames){
  for(let i = 0; i < arrayNames.length; i++){
    console.log('Welcome ${arrayNames[i]}! You are employee #${i+1}.')
  }
  return arrayNames
}


function coinToss(){
  return.Math.random() >= 0.5; // greater than .5 is tails
}

function tailsNeverFails(){
  let counter = 0
  while (cointoss() >= 0.5){
    counter += 1;
    cointoss();
  }
  return "You got ${counter} tails in a row!"
}
