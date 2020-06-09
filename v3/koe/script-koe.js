// bron voor het loopen van een array: https://www.youtube.com/watch?v=4YQ4svkETS0
//extra bronnen: https://stackoverflow.com/questions/26944987/show-next-previous-item-of-an-array
//extra bronnen: http://jsfiddle.net/hrzshpma/
//extra bronnen: https://codepen.io/jameswinfield/pen/bpWQWb

// i zorgt ervoor dat je bij item 0 begint in je array
// // if( blabla ) {
// fghjk
// } else if (blabla 2) {
//   fghj
// } else {}
var i = 0;

//Variabelen kleding
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

var haarLinksButton = document.querySelector("#hoofdlinks");
var shirtLinksButton = document.querySelector("#shirtlinks");
var broekLinksButton = document.querySelector("#broeklinks");

var haarRechtsButton = document.querySelector("#hoofdrechts");
var shirtRechtsButton = document.querySelector("#shirtrechts");
var broekRechtsButton = document.querySelector("broekrechts");
//functions

//buttons links
function hoofdcycle() {
  document.querySelector("#hoofd").src = haarArray[i]; //haarArray begint bij 0 want i=0
  if (i < haarArray.length - 1) {
    // a;s de condition = true, voer dan deze statement uit
    i++; // hier wordt er +1 bij de variabele i geteld
  } else {
    // als de condition = false, loop terug naar [0]
    i = 0;
  }
  console.log("click button links hoofd");
}

function shirtcycle() {
  document.querySelector("#shirt").src = shirtArray[i]; //haarArray begint bij 0 want i=0
  if (i < shirtArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
  console.log("click button links shirt");
}

function broekcycle() {
  document.querySelector("#broek").src = broekArray[i]; //haarArray begint bij 0 want i=0
  if (i < broekArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
  console.log("click button links broek");
}

//Buttons rechts

var j = 3;

function hoofdcycleRechts() {
  document.querySelector("#hoofd").src = haarArray[j]; //haarArray begint bij 0 want i=0
  if ((j) => haarArray.length - 1) {
    // j => 3 dan -1
    j--;
    console.log(haarArray[j]);
  } else {
    j = 3;
    console.log("haar type 3");
  }
  console.log("click button rechts hoofd");
}

// function hoofdcycleRechts() {
//   document.querySelector("#hoofd").src = haarArray[i]; //haarArray begint bij 0 want i=0
//   if ((i) => haarArray.length - 1) {
//     // j => 3 dan -1
//     i--;
//     console.log(haarArray[i]);
//   } else {
//     i = 3;
//     console.log("haar type 3");
//   }
//   console.log("click button rechts hoofd");
// }

// functie aanroepen door erop te clicken
haarLinksButton.addEventListener("click", hoofdcycle);
shirtLinksButton.addEventListener("click", shirtcycle);
broekLinksButton.addEventListener("click", broekcycle);

haarRechtsButton.addEventListener("click", hoofdcycleRechts);