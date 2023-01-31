

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


const audio = document.getElementById("my-audio");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function() {
  audio.play();
});


