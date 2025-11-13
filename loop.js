// FOR LOOP
for (var i = 0; i <= 20; i+= 2) {
  console.log(i);
}
// For Looping through arrays
var bill = [124, 48, 268, 35];
for (let g = 0; g < bill.length; g++) {
  console.log(bill[g]);  
}


// WHILE LOOP
var uju = ['Pretty', 21, 'Smart', 'Bold', 'Confident', 'Ambitious']
var i = 0;
while(i < uju.length){
    if(typeof uju[i] !== 'number') continue;
  console.log(uju[i]);
  i++;
}

// Looping forward through an array and logging the types of each element
const ujuArray = [
  'Obianuju',
  'Sunday',
  2025 - 2003,
  'Copywriter',
  ['HTML', 'CSS', 'JavaScript']
];

var types = [];

for (var i = 0; i < ujuArray.length; i++) {
  types.push(typeof ujuArray[i]);
  if (typeof ujuArray[i] !== 'string') continue;
  console.log(ujuArray[i] + ' - ' + typeof ujuArray[i]);
}

console.log(types)


// Looping backwards through an array
const myDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var brokeEarly = false;
for (i = myDays.length - 1; i >= 0; i--) {
  var dayNumber = i + 1;
  console.log(`Day ${dayNumber} of the week is ${myDays[i]}`)
  if (myDays[i] === 'Wednesday') {
    brokeEarly = true; break
  }
}

if(brokeEarly === false){ // only runs if the loop didn't break early , you can also use !brokeEarly
  console.log('Weekend Loading!')
}
