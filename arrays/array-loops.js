//Create a new array
let shoppingList = ['eggs', 'milk', 'bread', 'cereal', 'soda'];

for(let i = 0; i < shoppingList.length; i++) {
    //return each element in the array, one at a time by implementing 'i' as the index for which we return elements
    console.log(shoppingList[i]);
}

let shoppingList2 = ['eggs', 'milk', 'bread', 'cereal', 'soda'];

/*using forEach() method, takes a function (or callback function) and needs a parameter, here 'items'
As we can see, 'forEach' allows us to iterate through an array without a 'for loop'*/
shoppingList2.forEach(function(items, index) {
    console.log(index + '. ' + items);
});