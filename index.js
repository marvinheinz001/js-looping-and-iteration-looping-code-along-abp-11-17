// Code your solutions in this file
function printBadges(arr){
  for (let idx = 0; idx < arr.length; idx++) {
    console.log(`Welcome ${arr[idx]}! You are employee #${idx + 1}.`);
    // 'Welcome ${ arr[idx]}! You are employee #${idx + 1 }.'
  }
  return arr
}



function tailsNeverFails(){
  let counter = 0;
  while (Math.random() >= 0.5){
    counter += 1;
    Math.random();
  }
  console.log(`You got ${counter} tails in a row!`)
}
