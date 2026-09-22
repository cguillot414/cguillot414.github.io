function styleSwitch(){
    let s = document.getElementById("style1");
    let curr = s.getAttribute("href");

    if(curr === "style1.css"){
        s.setAttribute("href", "style2.css");
    } else {
        s.setAttribute("href", "style1.css");
    }

    curr = s.getAttribute("href");
    localStorage.setItem("style", curr);
}

window.onload = function(){
    let currStyle = (localStorage.getItem("style") || "style1.css");
    let s = document.getElementById("style1");
    s.setAttribute("href", currStyle);
}
