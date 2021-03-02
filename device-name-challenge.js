const devicenames = ['switch', 'tv', 'switch', 'tv', 'switch', 'couch']

function deviceNamesSystem(devicenames) {
    // Write your code here
    let sortedArray = devicenames.slice().sort();
    let results = [];

    for(let i = 0; i < sortedArray.length - 1; i++) {
        if(sortedArray[i + 1] === sortedArray[i]) {
            results.push(sortedArray[i]);
        }
    }  
    let count = results[i++].val();  
    return `${results} + ${count}`;
}

console.log(deviceNamesSystem(devicenames));