//Boolean variable of the loop
let test = false;

//Variable to serve as a counter
let count = 0;

//Create the loop; 'while(test)' implies that 'test == true' changing its original value
//performs test on condition being true
//versus 'for' loop which performs test on condition 'x' number of times
while(test) {
    if(count == 3) {
        test = false;
        break;
    }
    console.log('The count is: ' + count);
    count++
} 

//do-while loop; test for true or false like 'while loop'
do {
    if(count == 3) {
        test = false;
        break;
    }
    console.log('The count is: ' + count);
    count++
} while(test)