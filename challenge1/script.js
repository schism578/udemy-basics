let selectScript = document.querySelectorAll("p");

selectScript.forEach(para => {
    if(para.textContent.includes("second")) {
        para.style.color = "blue";
    }
});
