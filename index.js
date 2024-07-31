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

const numbers = [5,2,6,0,11,42,57,91]

let sum = 0;

for(let i=0; i<numbers.length; i++){

    if(numbers[i]%2==1){
        sum = numbers[i]
    }
}
console.log(`sum: ${sum}`)