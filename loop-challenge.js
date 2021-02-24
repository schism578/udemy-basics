/*declare a sum variable that we can add to throughout the
loop iterations*/
let sum = 0;

for(let i = 1; i <= 10; i++) {
    if((i === 4) || (i === 7)) {
        continue;
    }
        
    console.log(i);

    let product = i * 5;
    console.log(product);
    
    sum += product;
    //same as ===>   sum = sum + product;
    
}
console.log('The grand total of the products is ' + sum);

