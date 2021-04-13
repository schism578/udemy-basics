let p1 = document.createElement("p");
p1.textContent = "This was created with JavaScript";
p1.setAttribute("id", "para1");
document.querySelector("body").appendChild(p1);  //renders para1 text at top of page

let p2 = document.createElement("p");
p2.textContent = "This is the second paragraph";
p2.setAttribute("id", "para2");
document.querySelector("body").appendChild(p2);  //renders para2 text after para1

let heading = document.createElement("h1");
heading.textContent = "This is a new heading";
heading.setAttribute("id", "heading1");
document.querySelector("#para1").before(heading);  //renders heading text above para1 element; can use '.after' method to place after the para2 element