let price = 25;
let comp_price = 20;

price = 19;
comp_price = 18;
// console.log(price)
// console.log(comp_price)

const product = [12, 354, 56];
const comp_products = [];
// const comp_product = product;
// console.log(comp_product)
// console.log(product)

for (const pro_duct of product) {
  comp_products.push(product);

}
// console.log(comp_products);

const numbers = [1, 4, 5, 6, 3, ];
// const new_numbers = Array.from(numbers);
// const new_numbers=[].concat(numbers) // arry vitor number add hobe new ekta arry diye debe
const new_numbers=[...numbers]

// new_numbers.push(44)
numbers.push(99)
console.log(numbers)
console.log(new_numbers)