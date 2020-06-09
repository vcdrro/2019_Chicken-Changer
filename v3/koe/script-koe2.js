// nieuw script dat uitgewerkt wordt voor OLIFANT, om te kijken of de code nog beter gemaakt kan worden. 

var i = 0;
var j = 0;
var x = 0;

//buttons
var haarLinksButton = document.querySelector("#hoofdlinks");
var shirtLinksButton = document.querySelector("#shirtlinks");
var broekLinksButton = document.querySelector("#broeklinks");

var haarRechtsButton = document.querySelector("#hoofdrechts");
var shirtRechtsButton = document.querySelector("#shirtrechts");
var broekRechtsButton = document.querySelector("#broekrechts");


//arrays (lijsten) van afbeeldingen
var haarArray = [
  "_images/pop/hoofd-0haar.png", // [0] 1
  "_images/pop/hoofd-1haar.png", // [1] 2
  "_images/pop/hoofd-2haar.png", // [2] 3
];
var shirtArray = [
  "_images/pop/shirt-geel.png",
  "_images/pop/shirt-paars.png",
  "_images/pop/shirt-rood.png",
];
var broekArray = [
  " _images/pop/broek-bruin.png",
  " _images/pop/broek-groen.png",
  " _images/pop/broek-blauw.png",
];



function volgendeAfbeeldingHoofd() {

  console.log("volgende");
  document.querySelector("#hoofd").src = haarArray[i];
  //#hoofd.src (afbeelding) wordt gekoppeld aan haarArray, deze array begint bij 0 want i=0 wordt hieraan gekoppeld
  i++;
  i = i % haarArray.length;
  return haarArray[i];


}

function vorigeAfbeeldingHoofd() {
  console.log("vorige");
  document.querySelector("#hoofd").src = haarArray[i];

  if (i === 0) { // i would become 0
    i = haarArray.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  i = i % haarArray.length;
  return haarArray[i];

}


function volgendeAfbeeldingShirt() {
  document.querySelector("#shirt").src = shirtArray[j];
  j++;
  j = j % shirtArray.length;

}

function vorigeAfbeeldingShirt() {
  console.log("vorige");
  document.querySelector("#shirt").src = shirtArray[i];

  if (i === 0) { // i would become 0
    i = shirtArray.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  return shirtArray[i];

}

function volgendeAfbeeldingBroek() {
  document.querySelector("#broek").src = broekArray[x];
  x++;
  x = x % broekArray.length;
}





function vorigeAfbeeldingBroek() {
  console.log("vorige");
  document.querySelector("#broek").src = broekArray[i];

  if (i === 0) { // i would become 0
    i = broekArray.length; // so put it at the other end of the array
  }
  i = i - 1; // decrease by one
  return broekArray[i];

}

function random() {


}

function vorigeAfbeelding() {
  console.log("vorige");
  document.querySelector("#hoofd").src = haarArray[i];

  i--;
  i = i % haarArray.length;
  return haarArray[i];

}




//eventlisteners 


haarRechtsButton.addEventListener("click", volgendeAfbeeldingHoofd);
shirtRechtsButton.addEventListener("click", volgendeAfbeeldingShirt);
broekRechtsButton.addEventListener("click", volgendeAfbeeldingBroek);

haarLinksButton.addEventListener("click", vorigeAfbeeldingHoofd);
shirtLinksButton.addEventListener("click", vorigeAfbeeldingShirt);
broekLinksButton.addEventListener("click", vorigeAfbeeldingBroek);