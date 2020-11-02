const cardArray = [
  {
    name: "horseshoes",
    img: "images/horseshoes.jpg",
  },
  {
    name: "horseshoes",
    img: "images/horseshoes.jpg",
  },
  {
    name: "cassette_tape",
    img: "images/cassette_tape.jpg",
  },
  {
    name: "cassette_tape",
    img: "images/cassette_tape.jpg",
  },
  {
    name: "cat_color",
    img: "images/cat_color.jpg",
  },
  {
    name: "cat_color",
    img: "images/cat_color.jpg",
  },
  {
    name: "clock2",
    img: "images/clock2.jpg",
  },
  {
    name: "clock2",
    img: "images/clock2.jpg",
  },
  {
    name: "dmc",
    img: "images/dmc.jpg",
  },
  {
    name: "dmc",
    img: "images/dmc.jpg",
  },
  {
    name: "ps4",
    img: "images/ps4.jpg",
  },
  {
    name: "ps4",
    img: "images/ps4.jpg",
  },
  {
    name: "sorbet2",
    img: "images/sorbet2.jpg",
  },
  {
    name: "sorbet2",
    img: "images/sorbet2.jpg",
  },
  {
    name: "us",
    img: "images/us.jpg",
  },
  {
    name: "us",
    img: "images/us.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
const cardsWon = [];

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img");
    card.classList.add("image");
    card.setAttribute("src", "images/card_back.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/card_back.jpg");
    cards[optionTwoId].setAttribute("src", "images/card_back.jpg");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cards[optionOneId].classList.add("no-click");
    cards[optionTwoId].classList.add("no-click");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/card_back.jpg");
    cards[optionTwoId].setAttribute("src", "images/card_back.jpg");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}

//flip your card
function flipCard() {
  var cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);

  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 800);
  }
}

createBoard();
