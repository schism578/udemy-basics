let p1 = document.createElement("p");
p1.textContent = "This is the first paragraph";
p1.setAttribute("id", "para1");
document.querySelector("body").appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = "This is the second paragraph";
p2.setAttribute("id", "para2");
document.querySelector("body").appendChild(p2);

let p3 = document.createElement("p");
p3.textContent = "This is the third paragraph";
p3.setAttribute("id", "para3");
document.querySelector("body").appendChild(p3);

let p4 = document.createElement("p");
p4.textContent = "This is the second second paragraph";
p4.setAttribute("id", "para4");
document.querySelector("body").appendChild(p4);

let p5 = document.createElement("p");
p5.textContent = "This is the fifth paragraph";
p5.setAttribute("id", "para5");
document.querySelector("body").appendChild(p5);

let selectScript = document.querySelectorAll("p");

selectScript.forEach(para => {
    if(para.textContent.includes("second")) {
        para.style.color = "blue";
    }
});

let heading = document.createElement("h1");
heading.textContent = "This is a new heading";
heading.setAttribute("id", "heading1");
document.querySelector("#para1").before(heading);