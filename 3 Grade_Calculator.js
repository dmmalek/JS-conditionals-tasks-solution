/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let getNumber = 75;
if (getNumber >= 90 && getNumber <= 100) {
    console.log("You Got A+ ")
}
else if (getNumber >= 80 && getNumber <= 89) {
    console.log("You Got B ")
}
else if (getNumber >= 70 && getNumber <= 79) {
    console.log("You Got C ")
}
else if (getNumber >= 60 && getNumber <= 69) {
    console.log("You Got D ")
}
else {
    console.log("You Got F")
}