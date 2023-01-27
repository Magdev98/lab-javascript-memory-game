const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();
console.log(memoryGame.shuffleCards())

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
    if(memoryGame.pickedCards.length === 2) {
      return
    }
    console.log(`Card clicked: ${card}`);
    // Add the card clicked to memoryGame.pickedCards array
    // Check if pickedCards contains 2 elements
    // If so, check if the two elements make a pair (else, keep going)
    // If it's a pair : keep them face up. Else : turn them back
    // Empty the pickedCards array (because it should never contain more than 2 elements (hint! use splice()))
    // Check if the game is over (ie : if all pairs have been guessed)
    memoryGame.pickedCards.push(card)
    
    card.classList.toggle('turned')

    if(memoryGame.pickedCards.length === 2) {
    let card1 = memoryGame.pickedCards[0].dataset.cardName
    let card2 = memoryGame.pickedCards[1].dataset.cardName
    
    memoryGame.pairsClicked
      if(memoryGame.checkIfPair(card1, card2)) {
        memoryGame.pairsGuessed
        memoryGame.pickedCards = []
      } else {
        setTimeout(() => {
          memoryGame.pickedCards[0].classList.remove('turned')
          memoryGame.pickedCards[1].classList.remove('turned')
          memoryGame.pickedCards = []
          }, 500);
        } 
    }

    const scorePairClicked = document.getElementById('pairs-clicked')
    const scorePairGuessed = document.getElementById('pairs-guessed')
    scorePairClicked.textContent = memoryGame.pairsClicked
    scorePairGuessed.textContent = memoryGame.pairsGuessed
 
    if(memoryGame.checkIfFinished()){
      window.alert("You won!")
    }
    
    });

  });

});

