const students = 
[
    "pranjal",
    "payal",
    "aditya",
]
for(const stud of students){
    console.log(`Hello ${stud}`)
}

const marks = [7,100,729,21,49]
let largest = marks[0]

for(const num of marks){
    if (num>largest){
        largest = num
    }
}
console.log(largest)