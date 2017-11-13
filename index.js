// Code your solutions in this file
function printBadges(arr){
  for (let idx = 0; idx < arr.length; idx++) {
    console.log(`Welcome ${arr[idx]}! You are employee #${idx + 1}.`);
    // 'Welcome ${ arr[idx]}! You are employee #${idx + 1 }.'
  }
  return arr
}
