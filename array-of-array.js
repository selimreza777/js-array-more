const numbers = [1, 3, 5, 6, 7,];
const tournament_run = [[], [], [], [], []];
// array of arry or two dimentional array 
const exam_marks = [
  [12, 34, 24, 56, 32, 78],
  [43, 54, 36, 44, 76, 88],
  [56, 90, 35, 12, 54, 77],
  [45, 65, 76, 32, 56, 58]
]
// console.log(exam_marks);
// console.log(numbers[3])
// console.log(exam_marks[0][0])  //shortcut way arry vitor arry vlaue
// const exam_marks_first_array=exam_marks[3];
// console.log(exam_marks_first_array[0]);

exam_marks[0][1] = 24;
exam_marks[1].pop()
exam_marks[1].push(24)
console.log(exam_marks)

// loop use for...of 
for (const mark of exam_marks) {
  console.log(mark);
}
