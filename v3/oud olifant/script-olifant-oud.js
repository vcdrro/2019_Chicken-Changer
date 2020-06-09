var i = 0;
var j = 0;
var x = 0;

var haarLinksButton = document.querySelector("#hoofdlinks");
var shirtLinksButton = document.querySelector("#shirtlinks");
var broekLinksButton = document.querySelector("#broeklinks");

var haarRechtsButton = document.querySelector("#hoofdrechts");
var shirtRechtsButton = document.querySelector("#shirtrechts");
var broekRechtsButton = document.querySelector("#broekrechts");

var randomButton = document.querySelector("#randombutton")

//arrays
var hoofdArray = [
  "images/hoofd-0.png", // [0] 1
  "images/hoofd-1.png", // [1] 2
  "images/hoofd-2.png", // [2] 3
];
var shirtArray = [
  "images/shirt-0.png",
  "images/shirt-1.png",
  "images/shirt-2.png",
];
var broekArray = [
  " images/broek-0.png",
  " images/broek-1.png",
  " images/broek-2.png",
];

var poppetjeArray = [
  ["images/hoofd-0.png", // [0] 1
    "images/hoofd-1.png", // [1] 2
    "images/hoofd-2.png" // [2] 3
  ],

  ["images/shirt-0.png",
    "images/shirt-1.png",
    "images/shirt-2.png"
  ],

  [" images/broek-0.png",
    " images/broek-1.png",
    " images/broek-2.png"
  ]
];


// werkt half, haalt 1 random item uit de hele array, maar is niet goed gekoppeld.hij moet 3 random items halen uit de array
// var poppetjeArray = [
//   "images/hoofd-0.png", // [0] 1
//   "images/hoofd-1.png", // [1] 2
//   "images/hoofd-2.png" // [2] 3
//   ,

//   "images/shirt-0.png",
//   "images/shirt-1.png",
//   "images/shirt-2.png",

//   " images/broek-0.png",
//   " images/broek-1.png",
//   " images/broek-2.png"
// ];

function random() {

  var randomItem = Math.floor(Math.random() * poppetjeArray.length)
  console.log(randomItem)
  document.querySelector("#hoofd").src = poppetjeArray[0][randomItem];
  document.querySelector("#shirt").src = poppetjeArray[1][randomItem];
  document.querySelector("#broek").src = poppetjeArray[2][randomItem];


  // var randomItem = poppetjeArray[Math.floor(Math.random() * poppetjeArray.length)];
  // console.log(randomItem)

}



//function
//als ik heen en weer klik op de buttons doe ik het wel maar als ik 2x click op een button en 1x op de andere dan doet ie het niet
// function vorigeAfbeeldingHoofd() {
//   if (i <= 0)
//     i = 3;
//   i--;

//   // document.querySelector("#hoofd").src = hoofdArray[i];
//   document.querySelector("#hoofd").src = 'images/hoofd-' + [i] + '.png';

//   console.log("vorige")

// }


function vorigeAfbeelding(kledingstuk) {
  if (i <= 0)
    i = 3;
  i--;

  console.log(kledingstuk)
  document.getElementById(kledingstuk).src = 'images/' + kledingstuk + '-' + [i] + '.png'
}


function volgendeAfbeelding(kledingstuk) {
  if (i >= 2)
    i = -1;
  i++;

  console.log(kledingstuk)
  document.getElementById(kledingstuk).src = 'images/' + kledingstuk + '-' + [i] + '.png'
}

// function volgendeAfbeeldingHoofd() {
//   if (i >= hoofdArray.length - 1)
//     i = -1;
//   i++;
//   document.querySelector("#hoofd").src = hoofdArray[i];
//   console.log("volgende")

// }

// function chicken() {
//   var pop = document.querySelector

// }



//buttons
haarRechtsButton.addEventListener("click", function () {
  volgendeAfbeelding('hoofd')
})
// shirtRechtsButton.addEventListener("click", volgendeAfbeelding);
// broekRechtsButton.addEventListener("click", volgendeAfbeelding);

randomButton.addEventListener("click", random)

haarLinksButton.addEventListener("click", function () {
  vorigeAfbeelding('hoofd')
});
shirtLinksButton.addEventListener("click", function () {
  vorigeAfbeelding('shirt')
});
// shirtLinksButton.addEventListener("click", vorigeAfbeeldingShirt);
// broekLinksButton.addEventListener("click", vorigeAfbeeldingBroek);