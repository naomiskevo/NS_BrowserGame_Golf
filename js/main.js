/*----- constants -----*/
//assign value to all the different cards

var SUITS = ['spades', 'clubs', 'diamonds', 'hearts'];
var RANKS = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];






/*----- app's state (variables) -----*/
let deck = [];
var playerHand = [];
let throwAway = [];
let dealerPile = [];
let gameOver = false
let shuffledDeck = [];
/*------- classes for cards -----*/
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
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
const dealerCards = document.querySelector('.dealer-container');
const deckBtn = document.getElementById('deckBtn');

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')
const p6 = document.getElementById('p6')
/*----- event listeners -----*/
replayBtn.addEventListener('click', resetGame);
// userCards.addEventListener('click', tradeCard);
deckBtn.addEventListener('click', dealCard);
p1.addEventListener('click', reactToP1)
function reactToP1(){
    console.log('hello')
    playerHand[0] = throwAway[throwAway.length - 1]
    p1.style.backgroundImage = `url(./css/card-deck/images/${playerHand[0].suit}/${playerHand[0].suit}-${playerHand[0].rank}.svg)`
    // document.getElementById('display-card').style.display = 'none'
}






/*----- functions -----*/
function init() {
    for (suit of SUITS) {
        for (rank of RANKS){
            deck.push(new Card(suit, rank));
        }
    }
            
    gameOver = false;
        
    renderShuffledDeck(); 

    playerHand = shuffledDeck.splice(0, 6);
    
    // createCardEl(true, 'p1', 'p-card', userCards, playerHand);
    // createCardEl(true, 'p2', 'p-card', userCards, playerHand);
    // createCardEl(true, 'p3', 'p-card', userCards, playerHand);
    // createCardEl(true, 'p4', 'p-card', userCards, playerHand);
    // createCardEl(true, 'p5', 'p-card', userCards, playerHand);
    // createCardEl(true, 'p6', 'p-card', userCards, playerHand);

    // createCardEl(true, 'dealer', 'd-card', dealerCards, dealerPile);
    

} 


function dealCard(evt){
    console.log('hi')
    if (evt.target.id === 'deckBtn') {
        throwAway.push(shuffledDeck.splice(0, 1));
        throwAway = throwAway.flat();
        
    } 
}


function renderShuffledDeck(){
    var tempDeck = deck.slice()
    
    while (tempDeck.length) {
        var rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    
}

// function createCardEl(faceUp, idName, className, container, cardArry) {
//         card = cardArry[i]
//         card.isFaceUp = faceUp
//         let cardDiv = document.createElement('div');
//         cardDiv.className = className
//         cardDiv.id = idName
//         cardDiv.innerHTML = `<img src="${cardImgSrc(card)}">`;
//         container.appendChild(cardDiv)
// }

function cardImgSrc(card) {

    if (card.isFaceUp === true) {
        return `css/card-deck/images/${card.suit}/${card.suit}-${card.rank}.svg`;
    } else {
        return "css/card-deck/images/backs/blue.svg";    

    } 
}


 

function resetGame() {
    window.location.reload()
}





// function tradeCard(evt) {
//     // let topDiscard = throwAway[throwAway.length-1]
//     // console.log(evt.target.parentElement.id)
//     switch(evt.target.parentElement.id) {
//         case 'p1': {
//             // console.log(playerHand)
//             // console.log(throwAway)
//             let throwCard = throwAway.pop();
//             let clickedCard = playerHand[0]
//             throwAway.push(clickedCard)
//             playerHand.splice(0, 0, throwCard)
//             // console.log(playerHand)
//             // console.log(throwAway)

//         }
//     }

// }







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








