/*----- constants -----*/
//assign value to all the different cards

var SUITS = ['spades', 'clubs', 'diamonds', 'hearts'];
var RANKS = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];


/*----- app's state (variables) -----*/
let deck = [];
let playerHand = [];
let throwAway = [];
let dealPile = [];
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
const deckBtn = document.getElementById('deckBtn');
const cardPic = document.getElementById('cardPic');
const cardTA = document.getElementById('cardTA');
const p1 = document.getElementById('cardP1');
const p2 = document.getElementById('cardP2');
const p3 = document.getElementById('cardP3');
const p4 = document.getElementById('cardP4');
const p5 = document.getElementById('cardP5');
const p6 = document.getElementById('cardP6');

/*----- DOM Manipulation -----*/
cardPic.style.height = '200px';
cardPic.style.width = '150px';






/*----- event listeners -----*/
replayBtn.addEventListener('click', resetGame);
cardPic.addEventListener('click', dealCard);
p1.addEventListener('click', reactToP1)
p2.addEventListener('click', reactToP2)
p3.addEventListener('click', reactToP3)
p4.addEventListener('click', reactToP4)
p5.addEventListener('click', reactToP5)
p6.addEventListener('click', reactToP6)







/*----- functions -----*/
function init() {
    for (suit of SUITS) 
        for (rank of RANKS)
            deck.push(new Card(suit, rank));
    

    
    gameOver = false;
    
    renderShuffledDeck(); 
    
    playerHand = shuffledDeck.splice(0, 6);   
} 

function renderShuffledDeck(){
    var tempDeck = deck.slice()
    while (tempDeck.length) {
        var rndIdx = Math.floor(Math.random() * tempDeck.length);
        shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }  
}

function dealCard(evt){
    if (evt.target.id === 'cardPic'){
        dealPile.push(shuffledDeck.splice(0, 1));
        dealPile = dealPile.flat();
        cardD.style.backgroundImage = `url(./css/card-deck/images/${dealPile[dealPile.length - 1].suit}/${dealPile[dealPile.length - 1].suit}-${dealPile[dealPile.length - 1].rank}.svg)`
    }
}

function reactToP1(evt){
    console.log(evt.target)
    cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[0].suit}/${playerHand[0].suit}-${playerHand[0].rank}.svg)`
    playerHand[0] = dealPile[dealPile.length - 1]
    cardD.style.backgroundImage = ``
    }
function reactToP2(){

        cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[1].suit}/${playerHand[1].suit}-${playerHand[1].rank}.svg)`
        playerHand[1] = dealPile[dealPile.length - 1]
        cardD.style.backgroundImage = ``
    }
function reactToP3(){

        cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[2].suit}/${playerHand[2].suit}-${playerHand[2].rank}.svg)`
        playerHand[2] = dealPile[dealPile.length - 1]
        cardD.style.backgroundImage = ``
    }
function reactToP4(){

        cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[3].suit}/${playerHand[3].suit}-${playerHand[3].rank}.svg)`
        playerHand[3] = dealPile[dealPile.length - 1]
        cardD.style.backgroundImage = ``
    }
function reactToP5(){

        cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[4].suit}/${playerHand[4].suit}-${playerHand[4].rank}.svg)`
        playerHand[4] = dealPile[dealPile.length - 1]
        cardD.style.backgroundImage = ``
    }
function reactToP6(){

        cardTA.style.backgroundImage = `url(./css/card-deck/images/${playerHand[5].suit}/${playerHand[5].suit}-${playerHand[5].rank}.svg)`
        playerHand[5] = dealPile[dealPile.length - 1]
        cardD.style.backgroundImage = ``
    }


 

    
    
    
    
    
    
    
    
    
    
    
    
    
    // function totalPoints(playerHand) {
        //     var sum = 0;
        //     for(var i = 0; i < playerHand.length; i++){
            //         sum = sum + playerHand[i];
            //     }
            //     return sum;
            // }
            // console.log(totalPoints(playerHand))
            
            
            
            
            
            
function resetGame() {
    window.location.reload()
}
            
init();
            
            
            
            
//Allow player to click cards 1-3 only once to see content
//Click deck to turn over a card
//Replace the card on top of the discard pile with whatever card is clicked from the hand
//add all card values together when deck is finished
//add each round score to Total Score
//render message "Better Luck Next Time" if Total Score is > 40
//render message "That'll Do" if Total Score is 40 - 25
//render message "WOW, You're a pro" if Total Score is < 25








