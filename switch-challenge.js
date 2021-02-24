let grade = 100;

switch(true) {
    case (grade >= 90):
        console.log('Your grade is an A');
    break;
    case (80 < grade && grade < 90):
        console.log('Your grade is a B');
    break;
    case (70 < grade && grade < 80):
        console.log('Your grade is a C');
    break;
    case (60 < grade && grade < 70):
        console.log('Your grade is a D');
    break;
    case (grade < 60):
        console.log('Your grade is an F');
    break;
}
console.log(grade)