let array_of_marks=[]
let marks1=prompt("Enter First Student's Marks")
marks1=Number.parseInt(marks1)
array_of_marks.push(marks1)

let marks2=prompt("Enter Second Student's Marks")
marks2=Number.parseInt(marks2)
array_of_marks.push(marks2)

let marks3=prompt("Enter Third Student's Marks")
marks3=Number.parseInt(marks3)
array_of_marks.push(marks3)

let marks4=prompt("Enter Fourth Student's Marks")
marks4=Number.parseInt(marks4)
array_of_marks.push(marks4)

let marks5=prompt("Enter Fifth Student's Marks")
marks5=Number.parseInt(marks5)
array_of_marks.push(marks5)

let maxmarks=-100
for (let mark of array_of_marks){
    maxmarks= mark>maxmarks?mark:maxmarks
}
console.log(maxmarks)

