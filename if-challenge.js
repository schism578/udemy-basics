let temperature = 105;

if(temperature >= 90) {
    console.log('The temperature is hot')
} else if(temperature < 90 && temperature > 80) {
    console.log('The temperature is not so hot')
} else if(temperature < 80 && temperature > 70) {
    console.log('The temperature is moderate')
} else if(temperature < 70 && temperature > 60) {
    console.log('The temperature is cool')
} else {
    console.log('The temperature is cold')
}
console.log(temperature)