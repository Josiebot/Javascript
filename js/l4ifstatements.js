// IF STATEMENTS
let customerisBanned=false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if(customerisBanned){
    reply = `sorry. You are banned!`
}
else 
if (soup && crackers ){
    reply = `here is your ${soup} and crackers of $30}`
}
else {
    reply = "we are out of soup";
}

console.log(reply)


// Conditional :if statements

let testScore = 50;
let collegeStudent = false;
let grade;

if (testScore  >=90) {
    grade = "A";
}
else if 
(testScore >80){
    grade ="B"

}
else if(testScore >70){
    grade ="C"

}
else if (testScore >60){
    grade ="D"

}
else{ 
    if (collegeStudent){
        grade = "U";
    } else {grade = "pass";}
}


console.log(grade);


console.log(".....")