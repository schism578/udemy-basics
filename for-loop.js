//for loop
for(let i = 0; i <= 5; i++) {
    console.log('This is loop # ' + i);
}

//reverse loop
for(let i = 5; i >= 0; i--) {
    console.log('This is loop # ' + i);
}

//nested loop
for(let i = 1; i <= 5; i++) {
    for(let i = 1; i <= 3; i++) {
        console.log('The inner loop has run ' + i + ' times');
    }
    console.log('The outer loop has run ' + i + ' times');
}
/*think of the returned count(s) as minutes and seconds; 
for each sixty seconds, the loop counts one minutes*/

//skip one of the loop counts
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log('This is loop number ' + i);
}

//stop at one of the loop counts
for(let i = 0; i < 5; i++) {
    if(i === 3) {
        break;
    }
    console.log('This is loop number ' + i);
}

for(let i = 0; i < 5; i++) {
    let test = 0;
    test++;

    console.log(test);
}