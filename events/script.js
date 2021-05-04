/*let btn = document.querySelector("button");
btn.addEventListener("click", handleEvent);

function handleEvent() {
    let p1 = document.createElement("p");
    p1.textContent = "The button was clicked";
    document.querySelector("body").appendChild(p1);
    btn.removeEventListener("click", handleEvent);
}*/ 

//The above renders a header and button that, when clicked, prints the text "The button was clicked." Without line 8, the print continues per click.

/*let heading = document.querySelector("#heading1");
heading.addEventListener("mouseover", handleEvent);

function handleEvent() {
    let head = document.createElement("h1");
    head.textContent = "This is the second heading";
    document.querySelector("#heading1").after(head);
    heading.removeEventListener("mouseover", handleEvent);
}*/

//This block auto-reveals a new heading element upon a "mouseover" event once. Without line 8, the mouseover action adds a new header for each event.

let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");

btn1.addEventListener("click", handleEvent);
btn2.addEventListener("click", handleEvent);

function handleEvent(event) {  //adding 'event' object as parameter gives access to event object properties
    if(event.target.id == "button1") {
        let para1 = document.createElement("p");
        para1.textContent = "Button 1 was clicked";
        document.querySelector("body").appendChild(para1);
    } else {
        let para1 = document.createElement("p");
        para1.textContent = "Button 2 was clicked";
        document.querySelector("body").appendChild(para1);
    }
}