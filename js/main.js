/*----- constants -----*/
//assign value to all the different cards
const deck = [
    1, 10, 0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 10, 0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 10, 0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 10, 0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10
];







/*----- app's state (variables) -----*/

let playerHand;





/*----- cached element references -----*/
let messageEl = document.querySelector('h2');
let startOverBtn = document.getElementById('start-over');
let hintBtn = document.getElementById('hint');
let replayBtn = document.getElementById('replay');

/*----- event listeners -----*/
//Start over button starts game from Round 1
//click deck
//click card button 







/*----- functions -----*/
function drawCard(deck) {
    randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex];
};

function init() {
    playerHand = [
        drawCard(deck), drawCard(deck), drawCard(deck), 
        drawCard(deck), drawCard(deck), drawCard(deck)];
  
};



init();
console.log('player hand:' + playerHand);
    // init will deal out 6 random cards from the deck
//Allow player to click cards 1-3 only once to see content
//Click deck to turn over a card
//Replace the card on top of the discard pile with whatever card is clicked from the hand
//add all card values together when deck is finished
//add each round score to Total Score
//render message "Better Luck Next Time" if Total Score is > 40
//render message "That'll Do" if Total Score is 40 - 25
//render message "WOW, You're a pro" if Total Score is < 25

