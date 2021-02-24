let num = 50;

//switch structure
switch(num) {
    case 1:
        console.log('The number is one');
    //If condition proves true, switch is ended with 'break'
    break;
    case 2:
        console.log('The number is two');
    break;
    case 3:
        console.log('The number is three');
    break;
    case 4:
        console.log('The number is four');
    break;
    default:
        console.log('num has a value not covered by the switch structure');
    //not necessary to break after 'default' statement but did so for repetition
    break;
}