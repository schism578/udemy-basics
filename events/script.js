/*let btn = document.querySelector("button");
btn.addEventListener("click", handleEvent);

function handleEvent() {
    let p1 = document.createElement("p");
    p1.textContent = "The button was clicked";
    document.querySelector("body").appendChild(p1);
    btn.removeEventListener("click", handleEvent);
}*/ 

//The above renders a header and button that, when clicked, prints the text "The button was clicked." Without line 8, the print continues per click.

let heading = document.querySelector("#heading1");
heading.addEventListener("mouseover", handleEvent);

function handleEvent() {
    let head = document.createElement("h1");
    head.textContent = "This is the second heading";
    document.querySelector("#heading1").after(head);
    heading.removeEventListener("mouseover", handleEvent);
}

//This block auto-reveals a new heading element upon a "mouseover" event once. Without line 8, the mouseover action adds a new header for each event.
