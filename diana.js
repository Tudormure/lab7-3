function înlocuire_nume(){
    document.getElementById("nume").innerHTML = "Inginer Marcu Diana-Maria <br> Bosch"
    document.getElementById("Realizari").innerHTML="Realizari"
    document.getElementById("realizari.1").innerHTML= "Am avut 10 la toate examenele"
     document.getElementById("realizari.2").innerHTML= "Am luat toate examenele in sesiune"
      document.getElementById("realizari.3").innerHTML= "Am reusit sa invat toate limbajele de programare"
      document.getElementById("schimba-poza").src="flamingo.jpg"
      document.getElementById("schimba-culoarea").style.background = " repeating-linear-gradient(-101deg,rgb(104, 152, 145),rgb(218, 204, 201) 10px,beige 10px,beige 20px)";
     document.getElementById("schimba-font").style.color= "green"
     document.getElementById("schimba-font.1").style.color= "darkblue"
     document.getElementById("schimba-font.2").style.color= "darkred"
     document.getElementById("schimba-font.3").style.fontFamily= "Courier New"
     document.getElementById("schimba-poza").style.borderRadius="0px"
     document.getElementById("schimba-poza").style.opacity="75%"
}
function Varsta(){
   return 2024-2005;
}

 function OnMouseOver(){
    document.getElementById("over").innerText = Varsta() + " ani";
    document.getElementById("over").style.textAnchor="center";
    document.getElementById("over").style.color="red";
 }
 function not(){
   document.getElementById("over").innerText= "10 mai 2005";
   document.getElementById("over").style.textAnchor="center";
   document.getElementById("over").style.color="red";
 }


