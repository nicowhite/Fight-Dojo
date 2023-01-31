

function redirect (){
document.getElementById("mk").addEventListener("click", function(){
    window.location.href = "https://mk11.mortalkombat.com/";
 });
 document.getElementById("sf").addEventListener("click", function(){
    window.location.href = "https://www.streetfighter.com/6/es-es/";
 });
 document.getElementById("dbz").addEventListener("click", function(){
    window.location.href = "https://en.bandainamcoent.eu/dragon-ball/dragon-ball-fighterz";
 });
}

redirect();



const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});
