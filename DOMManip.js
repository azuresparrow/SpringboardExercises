document.getElementById("container");
document.querySelector("#container");
document.querySelectorAll(".second");
document.querySelector("ol .third");
document.querySelector("section #container");
document.querySelector("section#container").innerText = "Hello!";
document.querySelector(".footer").classList.add("main");
document.querySelector(".footer").classList.remove("main");
let appendedLi = document.createElement("li");
appendedLi.innerText = "four";
document.querySelector("ul").appendChild(appendedLi);
let loopList = document.querySelectorAll("ol li");
for(item of loopList){
    item.style.backgroundColor = "green";
}
document.querySelector(".footer").remove();