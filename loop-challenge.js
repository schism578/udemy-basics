// 1) Create a loop that will run from 1-10
// 2) Multiply the value of the counter by 5
// 3) Create a sum of the products of the last step
// 4) Output the products of each iteration
// 5) Show the grand total of the sum at the end
// 6) ***BONUS*** Have the loop skip iterations 4 and 7

/*declare a sum variable that we can add to throughout the
loop iterations*/
let sum = 0;

//Set the loop to iterate from 1-10 inclusive
for(let i = 1; i <= 10; i++) {
    //BONUS: skip iterations 4 and 7
    if((i === 4) || (i === 7)) {
        continue;
    }
    //Log the iteration count
    console.log(i);
    //create a variable to calculate the product of the iteration and 5 and log
    let product = i * 5;
    console.log(product);
    //sum the products of iterations and 5
    sum += product;
    //same as ===>   sum = sum + product;
    
}
//log the total of all product sums
console.log('The grand total of the products is ' + sum);

