// reversed arry using loop condition 
let arr = [1, 2, 3, 4, 5];
// arr= [5,4,3,2,1]; 
let reverse = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   // arr.reverse[];
//   // console.log(arr[i]);
//   reverse.push(arr[i]);

// }
// console.log(reverse)
// console.log("valu", arr[3]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   reverse.unshift(arr[i]);  // mannually use unshift 
// }
for (let i = arr.length - 1; i >= 0; i--) {
  // console.log(reverse);
  reverse.push(arr[i]);
}
console.log(reverse)