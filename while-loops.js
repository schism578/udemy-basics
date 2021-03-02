//Boolean variable of the loop
let test = false;

//Variable to serve as a counter
let count = 0;

//Create the loop; 'while(test)' implies that 'test == true' changing its original value
do {
    if(count == 3) {
        test = false;
        break;
    }
    console.log('The count is: ' + count);
    count++
} while(test)