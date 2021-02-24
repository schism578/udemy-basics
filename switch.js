let num = 43;

//switch structure
switch(true) {
    case num == 1:
        console.log('The number is one');
    break;
    case num == 2:
        console.log('The number is two');
    break;
    case num == 3:
        console.log('The number is three');
    break;
    case num == 4:
        console.log('The number is four');
    break;
    case (num > 40):
        console.log('The number is greater than 40');
    break;
    default:
        console.log('num has a value not covered by the switch structure');
    break;
}
    //not necessary to break after 'default' statement but did so for repetition
