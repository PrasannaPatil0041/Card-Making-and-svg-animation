
const section = document.querySelectorAll("section");
const svg = document.querySelector(".background-svg");
const stroke = document.querySelectorAll(".background-stroke")

section[0].addEventListener ("mouseover" , function() {
    svg.style.cssText = "stroke:#f0ae22";
    stroke.forEach(function(j){
        j.style.cssText = "stroke:#f0ae22";
    })
})
section[1].addEventListener ("mouseover" , function() {
    svg.style.cssText = "stroke:#4f1bdd"
    stroke.forEach(function(j){
        j.style.cssText = "stroke:#4f1bdd"
    })
})
section[2].addEventListener ("mouseover" , function() {
    svg.style.cssText = "stroke:#f13131"
    stroke.forEach(function(j){
        j.style.cssText = "stroke:#f13131"
    })
})