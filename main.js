const cardArray = [
  {
    name: "adidas",
    img: "images/adidas.jpg",
  },
  {
    name: "adidas",
    img: "images/adidas.jpg",
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
    name: "cards",
    img: "images/cards.jpg",
  },
  {
    name: "cards",
    img: "images/cards.jpg",
  },
  {
    name: "horseshoes",
    img: "images/horseshoes.jpg",
  },
  {
    name: "horseshoes",
    img: "images/horseshoes.jpg",
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
    name: "bow",
    img: "images/bow.jpg",
  },
  {
    name: "bow",
    img: "images/bow.jpg",
  },
  {
    name: "ballerina",
    img: "images/ballerina.jpg",
  },
  {
    name: "ballerina",
    img: "images/ballerina.jpg",
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
  //clicked wrong match
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/card_back.jpg");
    cards[optionTwoId].setAttribute("src", "images/card_back.jpg");
    //clicked right match
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
    resultDisplay.textContent = "You Win!! 🥳 💯";
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
    //prevent user from clicking multiple times
  } else if (cardsChosen.length > 2) {
    this.setAttribute("src", "images/card_back.jpg");
  }
}

createBoard();
