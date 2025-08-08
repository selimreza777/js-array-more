const numbers = [5, 1, 4, 3, 2, 6];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['akib', 'bamun', 'dhoyon', 'eamil', 'colash'];
friends.sort();
// console.log(friends);

const ages = [11, 100, 15, 25, 105, 205, 300];
// console.log(ages);
ages.sort();
// console.log(ages);

// ascending(choto theke boro dike jacce)
const sorted_ages = ages.sort(function (a, b) { return a - b });
// console.log(sorted_ages);

// descending(boro theke choto jacee)
const sorted_ages_des = ages.sort(function (a, b) { return b - a });
console.log(sorted_ages_des)