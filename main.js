//fetching data
const img = async () => {
  const res = await fetch("cardArray.json");
  const data = await res.json();

  data.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];

  //creating board
  for (let i = 0; i < data.length; i++) {
    let card = document.createElement("img");
    card.classList.add("image");
    card.setAttribute("src", "images/card_back.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }

  /*   data.forEach((img) => {
    console.log(img);
    let card = document.createElement("img");
    card.classList.add("image");
    card.setAttribute("src", "images/card_back.jpg");
    card.setAttribute("data-id", img);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }); */
  //check for matches
  checkForMatch = () => {
    let cards = document.querySelectorAll("img");
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
    cardsWon.length === data.length / 2
      ? (resultDisplay.textContent = "You Win!! 🥳 💯")
      : null;
  };

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(data[cardId].name);
    console.log(cardsChosen);
    cardsChosenId.push(cardId);
    this.setAttribute("src", data[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 800);
      //prevent user from clicking multiple times
    } else if (cardsChosen.length > 2) {
      this.setAttribute("src", "images/card_back.jpg");
    }
  }
};

img();
