let a = document.getElementById("main");
let b = document.getElementById("head");
let c = document.getElementById("pic");
// a.style.transform = "scale(0.5)";

setInterval(function () {
    if (a.style.transform === "scale(0.7)") {
        a.style.transform = "scale(1)";
        a.style.color = "white"
        document.body.style.backgroundColor = "black"
    } else if (a.style.transform === "scale(1)") {
        a.style.transform = "scale(1.5)";
        a.style.color = "gray"
        document.body.style.backgroundColor = "brown"
    } else if (a.style.transform === "scale(1.5)") {
        a.style.transform = "scale(2)";
        a.style.color = "black"
        document.body.style.backgroundColor = "white"
    } else if (a.style.transform === "scale(2)") {
        a.style.color = "brown"
        a.style.transform = "scale(3)";
     document.body.style.backgroundColor = "gray"
    } else if (a.style.transform === "scale(3)") {
        a.style.transform = "scale(5)";
        a.style.color = "rgb(124, 222, 53)"
        document.body.style.backgroundColor = "rgb(91, 36, 122)"
    } else if (a.style.transform === "scale(5)") {
        a.style.transform = "scale(10)";
        a.style.color = "rgb(82, 141, 40)"
        document.body.style.backgroundColor = "rgb(0, 0, 0)"
    } else if (a.style.transform === "scale(10)") {
        a.style.transform = "scale(15)";
        a.style.color = "white"
        c.style.display = "block";
        b.style.display = "none"
    }
    else {
        a.style.transform = "scale(0.7)";
        c.style.display = "none";
        a.style.color = "white"
        b.style.display = "block"
    }
}, 1000);
