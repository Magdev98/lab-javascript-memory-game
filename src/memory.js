class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if(!this.cards) {
      return undefined
    };
  /*  this.cards.sort(() => {
      return Math.random() - 0.5
    }); */
  let shuffled = this.cards.length
  while(--shuffled > 0) {
    let randomCards = Math.floor(Math.random() * (shuffled + 1));
    [this.cards[randomCards], this.cards[shuffled]] = [this.cards[shuffled], this.cards[randomCards]];
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if(card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else {
      return false
    }
  }
}
