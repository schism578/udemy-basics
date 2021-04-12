/*let selectScript = document.querySelectorAll("p");

selectScript.forEach(para => {
    if(para.textContent.includes("second")) {
        para.style.color = "blue";
    }
});  //returns the second paragraph in blue along with all of the others
*/

/*let mySelection = document.querySelector("#para2");

mySelection.textContent = "This was changed by JavaScript";
//returns: a new paragraph element with the above text in place of the original text
*/

//OR
let mySelection = document.querySelectorAll(".myClass");

mySelection.forEach(para => {
    para.textContent = "JavaScript changed this";
})  //returns: above text in place of the paragraph elements that contain the myClass class


