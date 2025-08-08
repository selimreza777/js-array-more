/*
const -->variable value not changes
let --> value might changes
var --> not var use exceptional case
*/
// primitive 
const price = 500; // number 
// console.log(price);
const name = "Mr Been";  // string
const isPoor = true; //boolean

// non-primitive 
const friends = ['rakib', 'hasan', 'monir', 'reza', 'shakil'];
const student = { class: 9, name: 'dalim', roll: 56, address: 'Mirpur' };

// condition 
if (price > 1000) {
  // console.log('we buy a t-shairt');
}
else if (price >= 500) {
  // console.log("go outside");

}
else {
  // console.log('I will not go out at this time');
}


// loop 
let pushUp = 0;
// while (pushUp < 5) {   
//   console.log("continue pushup",pushUp);
//   // pushUp +=1; // pushup er man 1 by 1 kore barbe dekhate hobe
//   // pushupp =pushUp+1;
//   pushUp++;   // eta na bolle loop continue cholte thakbe
// }

// for (let pushUp = 0; pushUp < 5; pushUp++) { // loop er sob condition for loop backet er vitore bole dete

//   console.log("today leg exercise");
// }

const sald = ["gajor", "shosha", "labu", "anarosh"];
// console.log(sald[i]);
for (let i = 0; i < sald.length; i++) { //arry modde koot bar loop chalbo salad.length diye bujhaiche
  // console.log("Good Food for your Healdth", i);
  // console.log(sald[i]);
}

let number = [23, 45, 56, 75, 78, 90];
for (j = 0; j < number.length; j++) {
  // console.log(number[j]);
}
let pen = ['matador', 'pin-point', 'matador-hi-school', 'goodluck', 'apolo'];
let m = 0;

while (m < pen.length) {

  // console.log(pen[m])
  m++;
}

let value = [12, 34, 54, 65, 34, 45, 67];
let n = 0;
// let indexOf[n]=[2];
while (n < value.length) {
  // if (n === 3) {
  //   console.log(value[n]);
  // }
  console.log(value[n])

  n++;
}
console.log("valu index 3 show:",value[3]);

