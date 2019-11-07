/*----- constants -----*/
//assign value to all the different cards

var SUITS = ['spades', 'clubs', 'diamonds', 'hearts'];
var RANKS = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];






/*----- app's state (variables) -----*/
let deck = [];
let playerHand = [];
let throwAway = [];

let gameOver = false

/*------- classes for cards -----*/
class Card {
    constructor(suit, rank, isFaceUp = true) {
        this.suit = suit;
        this.rank = rank;
        this.isFaceUp = isFaceUp;
    }
    value() {
        switch (this.rank) {
            case 'A':
                return 1;
            case 'J':
            case 'Q':
                return 10;
            case 'K':
                return 0;
            default:
                return Number(this.rank);
        }
    }
}






/*----- cached element references -----*/
const messageEl = document.querySelector('h2');
const hintBtn = document.getElementById('hint');
const replayBtn = document.getElementById('replay');
const userCards = document.querySelector('.player-container');
const dealCards = document.querySelector('.dealer-container');


/*----- event listeners -----*/
replayBtn.addEventListener('click', resetGame);
// dealerCard.addEventListener('click', dealCard);









/*----- functions -----*/
function init() {
    for (suit of SUITS)
        for (rank of RANKS)
            deck.push(new Card(suit, rank));


    gameOver = false;

    userCards.innerHTML = '';
    

    playerHand = [];
    throwAway = [];
    dealerPile = [];

 



    createCardEl(false, 'p-card', userCards, playerHand);
    createCardEl(false, 'p-card', userCards, playerHand);
    createCardEl(false, 'p-card', userCards, playerHand);
    createCardEl(false, 'p-card', userCards, playerHand);
    createCardEl(false, 'p-card', userCards, playerHand);
    createCardEl(false, 'p-card', userCards, playerHand);

    createCardEl(false, 'd-card', dealCards, dealerPile);
    createCardEl(true, 'd-card', dealCards, throwAway);
    
    console.log(playerHand)
    console.log(dealerPile)
    console.log(throwAway)

}
function resetGame() {
    window.location.reload()
}


function randomCard() {
   let random = Math.floor(Math.random() * (deck.length -1));
    return deck[random]
};

function createCardEl(faceUp, className, container, cardArry) {

    var ourCard = randomCard()
    ourCard.isFaceUp = faceUp
    cardArry.push(ourCard)
    let cardDiv = document.createElement('div');
    cardDiv.className = className
    cardDiv.innerHTML = `<img src="${cardImgSrc(ourCard)}">`;
    container.appendChild(cardDiv)
    
    
    
};

function cardImgSrc(card) {

    if (card.isFaceUp === true) {
        return `css/card-deck/images/${card.suit}/${card.suit}-${card.rank}.svg`;
    } else {
        return "css/card-deck/images/backs/blue.svg";    

    } 
}
// function totalPoints(playerHand) {
//     var sum = 0;
//     for(var i = 0; i < playerHand.length; i++){
//         sum = sum + playerHand[i];
//     }
//     return sum;
// }
// console.log(totalPoints(playerHand))






                
init();
                
                
                
                
//Allow player to click cards 1-3 only once to see content
//Click deck to turn over a card
//Replace the card on top of the discard pile with whatever card is clicked from the hand
//add all card values together when deck is finished
//add each round score to Total Score
//render message "Better Luck Next Time" if Total Score is > 40
//render message "That'll Do" if Total Score is 40 - 25
//render message "WOW, You're a pro" if Total Score is < 25








