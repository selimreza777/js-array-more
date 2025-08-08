const numbers = [1, 3, 2, 4, 5];
const players = [{}, {}, {}, {},];


// multiple arry of object decleration process: 
const employes = [
  { name: 'rakib', designation: 'Manager', salary: 16030 },
  { name: 'atik', designation: 'admin', salary: 12000 },
  { name: 'monir', designation: 'developer', salary: 1500 },
  { name: 'asifa', designation: 'web developr', salary: 25000 }
]
employes[1].name='sathi'; //property valu change kora jai ei vabe
// console.log(employes[1].designation);
// console.log(employes[3].designation);

// for (const employe of employes) {
//   console.log(employe.salary,employe.designation,employe.name);
// }

// for (const body of employes) {
//   console.log(body.name, body.designation, body.salary);
// }

for (const emp of employes) {
  const members = emp;
  console.log(members.name, ':', members.designation, '-', members.salary);
}