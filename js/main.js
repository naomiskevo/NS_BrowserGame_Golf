/*----- constants -----*/
//assign value to all the different cards
const arrayCards = [];







/*----- app's state (variables) -----*/
let cardD = [], cardH = [], cardC = [], cardS = [];

let playerHand; 
// usedCards; discardPile; 






/*----- cached element references -----*/
const messageEl = document.querySelector('h2');
const hintBtn = document.getElementById('hint');
const replayBtn = document.getElementById('replay');

/*----- event listeners -----*/
replayBtn.addEventListener('click', resetGame);


//click deck
//click card button 








/*----- functions -----*/
createDeck();
init();

function resetGame(evt) {
    window.location.reload()
}

function createDeck () {
    for(i = 0; i < 13; i++) {

        cardD.url = `css/card-deck/images/diamonds/diamonds-${i}.svg`;
        cardD.value = i;

        cardH.url = `css/card-deck/images/hearts/hearts-${i}.svg`;
        cardH.value = i;

        cardC.url = `css/card-deck/images/clubs/clubs-${i}.svg`;
        cardC.value = i;

        cardS.url = `css/card-deck/images/spades/spades-${i}.svg`;
        cardS.value = i;

        arrayCards.push(cardD.value, cardH.value, cardC.value, cardS.value);


    }
}


function drawCard(arrayCards) {
    randomIndex = Math.floor(arrayCards.length * Math.random());
    return arrayCards[randomIndex];

};
console.log(arrayCards[randomIndex]);


function handValue(playerHand) {
    var sum = 0;
    for(var i = 0; i < playerHand.length; i++){
        sum = sum + playerHand[i];
    }
    return sum;
}




function init() {
playerHand = [
        drawCard(arrayCards), drawCard(arrayCards), drawCard(arrayCards), 
        drawCard(arrayCards), drawCard(arrayCards), drawCard(arrayCards)
    ];
  
};
console.log(playerHand);
console.log(handValue(playerHand))


//Allow player to click cards 1-3 only once to see content
//Click deck to turn over a card
//Replace the card on top of the discard pile with whatever card is clicked from the hand
//add all card values together when deck is finished
//add each round score to Total Score
//render message "Better Luck Next Time" if Total Score is > 40
//render message "That'll Do" if Total Score is 40 - 25
//render message "WOW, You're a pro" if Total Score is < 25

