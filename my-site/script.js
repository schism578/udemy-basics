document.body.children[0].style.color = "blue";  //renders blue header

/*We can access/alter children of the entire document by traversing 
    down to them with dot notation: (Notice the use of the index to 
    access the first element within array of child elements within 
    the body parent element.)
document.body.children[0].textContent = "Hello from JavaScript";
*/


/*
let mySelection = document.querySelectorAll("p");


   We can manipulate the DOM by using methods on our variable
    by specifying criteria for which we want to, say, remove
    any HTML element that contains, for instance, three asterisks:

mySelection.forEach(para => {
    if(para.textContent.includes("***")) {
        para.remove();
    }
});
*/

/*We can force new text to be displayed for every HTML element that contains text:
mySelection.forEach(para => {
    para.textContent = "This is from the JavaScript code";
});    
    returns: two paragraph elements with the text above
*/

