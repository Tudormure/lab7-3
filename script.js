function schimba_pagina() {
  document.getElementById("nume").innerHTML =
    "Dr. Ing. Muresan Tudor-Horea <br> Cyber Intelligence";
  document.getElementById("realizari-1").innerHTML = "Realizari";
  document.getElementById("realizari-2").innerHTML = "Nu am avut restante";
  document.getElementById("realizari-3").innerHTML =
    "Am facut un curs de Python";
  document.getElementById("realizari-4").innerHTML = "Am facut un curs de Java";
  document.getElementById("realizari-5").innerHTML =
    "Am facut un curs de CyberSecurity";
  document.getElementById("blank").style.display = "none";
  document.getElementById("blank-2").style.display = "none";
  document.getElementById("poza").src = "poza2.png";
  document.getElementById("poza").style.borderRadius = "100px";
  document.getElementById("poza").style.opacity = "90%";
  window.scrollTo(0, 0);
  document.getElementById("body-color").style.background =
    "linear-gradient(rgb(0,101,2), black)";
  document.getElementById("body-color-2").style.background = "#0000";
  document.getElementById("body-color-3").style.background = "#0000";
  document.getElementById("poza").style.border = "#0000";
  document.getElementById("scris-1").style.textShadow = "none";
  document.getElementById("scris-1").style.color = "lightgreen";
  document.getElementById("scris-1").style.fontFamily = "Courier New";
  document.getElementById("font").style.fontFamily = "Courier New";
  document.getElementById("font").style.textShadow = "none";
  document.getElementById("font").style.color = "green";
  document.getElementById("nume").style.color = "green";
  document.getElementById("nume").style.textShadow = "none";
  document.getElementById("nume").style.fontFamily = "Courier New";

  //linear-gradient(blue,yellow)
}
function varsta() {
  return 2024 - 2005;
}
function over() {
  document.getElementById("hover-text").innerText = varsta() + " ani";
  document.getElementById("hover-text").style.textAlign = "center";
  document.getElementById("hover-text").style.fontWeight = "bold";
}
function notover() {
  document.getElementById("hover-text").innerText = "13 iunie 2005";
  document.getElementById("hover-text").style.textAlign = "center";
  document.getElementById("hover-text").style.fontWeight = "bold";
}
window.onload = ex3;
function ex3() {
  x = 0;
  document.getElementById("container-poza").src = "tudor.png";
  document.getElementById("nume-2").innerHTML = "Muresan Tudor Horea";

  setInterval(function () {
    if (x == 0) {
      document.getElementById("container-poza").src = "iuli.jpg";
      document.getElementById("nume-2").innerHTML = "Suteu Iulian";
      document.getElementById("nume-2").href="iuli.html";
    } 
    else if (x == 1) {
      document.getElementById("container-poza").src = "Diana.jpg";
      document.getElementById("nume-2").innerHTML = "Marcu Diana";
      document.getElementById("nume-2").href="diana.html";
    } else if (x == 2) {
      document.getElementById("container-poza").src = "Ama.jpg";
      document.getElementById("nume-2").innerHTML = "Popescu Amalia";
      document.getElementById("nume-2").href="amalia.html";
    } else if (x == 3) {
      document.getElementById("container-poza").src = "tudor.png";
      document.getElementById("nume-2").innerHTML = "Muresan Tudor Horea";
      document.getElementById("nume-2").href="tudor.html";
    }
    x++;
    if (x == 4) x = 0;
  }, 3000);
}
