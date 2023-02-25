const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express(); //ACTIVACION DE EXPRESS

app.use(bodyParser.urlencoded({ extended: true })); //USO DE BODY PARSER
app.use(express.static("public")); //METODO QUE SE USA PARA ACTIVAR EL CSS DESDE LA CARPETA PUBLIC

app.get("/", function (req, res) {
  //HOME ROUTE
  res.sendFile(__dirname + "/index.html");
});

app.get("/mk11.html", function (req, res) {
  //MK11 ROUTE
  res.sendFile(__dirname + "/mk11.html");
});
app.get("/sf6.html", function (req, res) {
  //SF6 ROUTE
  res.sendFile(__dirname + "/sf6.html");
});
app.get("/dnfduel.html", function (req, res) {
  //DNF DUEL ROUTE
  res.sendFile(__dirname + "/dnfduel.html");
});
app.get("/dbfz.html", function (req, res) {
  //DBFZ ROUTE
  res.sendFile(__dirname + "/dbfz.html");
});

app.post("/", function (req, res) {});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});

// function redirect() {
// document.getElementById("mk").addEventListener("click", function () {
//     window.location.href = "https://mk11.mortalkombat.com/";
//   });
//   document.getElementById("sf").addEventListener("click", function () {
//     window.location.href = "https://www.streetfighter.com/6/es-es/";
//   });
//   document.getElementById("dbz").addEventListener("click", function () {
//     window.location.href =
//       "https://en.bandainamcoent.eu/dragon-ball/dragon-ball-fighterz";
//   });
//   document.getElementById("dnf duel").addEventListener("click", function () {
//     window.location.href = "https://dd.nexon.com/en/main";
//   });
// }
// redirect();
