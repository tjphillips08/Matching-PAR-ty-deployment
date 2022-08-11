// Step 1: Set-up DOM elements we will be using from our HTML
//game-info-container, game-info, game container, timer, flips, reset button(input)
let cards= document.querySelectorAll('.card');
//  console.log(cards)
let timer = document.getElementById('time remaining');

let timerInt = parseInt(timer.innerHTML)

let ticker = document.querySelector('#flips');
//console.log(ticker)
let tickerInt = parseInt(ticker.innerHTML)
let restart = document.querySelector('.reset-button');
// console.log(restart)
restart.addEventListener('click' , resetBoard) 
    //console.log('reset button clicked')

let startBtn = document.querySelector('.start-button');
// console.log(startBtn)
startBtn.addEventListener('click', startCountdown);

let selectedCards = [];
//console.log(selectedCards);

let matchedCards=[];
















//need to push cards clicked into selected cards array

function flipCard(e){
    this.classList.toggle('flip');
    tickerInt ++
    ticker.innerHTML= tickerInt
    
    addtoSelected(e);
   //console.log(e);
    //console.log(selectedCards)
    checkForCardMatch();
    
    
}
cards.forEach((card) => card.addEventListener('click', flipCard))

//create function to push selected cards into selected cards array

function addtoSelected(e){
    if (selectedCards.length == 0 || selectedCards.length ==1){
        selectedCards.push(e.target.parentElement.parentElement.id)
            //console.log(e.target.parentElement.parentElement.id)

    }
}








    
    
//when you press the start button. time goes down and when it hits 0 it stops.
function startCountdown() {
     let counter = setInterval(() => {
         timerInt --
         timer.innerHTML = timerInt
         if(timerInt=== 0){
             //clearInterval(counter)
            gameOver();
            
    
        }
        
    }, 1000);

function gameOver(){
    clearInterval(counter);
    alert('Double Bogey')
}
}
//set time back to start(120), flips to 0 and remove flips(remove(flip))
function resetBoard (){
    tickerInt=0;
    ticker.innerHTML=0;
    timerInt=120;

    document.querySelectorAll('.card').forEach((card) => {
        card.classList.remove('flip');
    });
    

}
    
    
    
    
   


//use selected card array 
function checkForCardMatch(){
    //matchedCards= [];
    if (selectedCards.length ==2){
        //disable mouse clicks on other cards
    }
    if(selectedCards.length==2 && selectedCards[0] == selectedCards[1]){
        cardMatch();
        selectedCards = [];
    }
    if(matchedCards.length === 8){

        victory();
    }
    else if(selectedCards.length==2 && selectedCards[0] !== selectedCards[1]){
        misMatch();
         selectedCards= [];
    }
}



// }
//need to push the selected cards into the selected  cards array and add the matched animation
function cardMatch() {
    //matchedCards=[];
    matchedCards.push(selectedCards);
    
        //console.log(matchedCards);
    
    // card2.classList.add('matched');
    
    
    // selectedCards[0].classList.remove('visible');
    // selectedCards[1].classList.remove('visible');
    //matchedCards.push(selectedCards);
   
    
    //  selectedCards[0].card.classList.add('matched');
    //  selectedCards[1].card.classList.add('matched');

}


    
    


// alert("Hole-in-One")
    //console.log("hole in one")


    //mismatch function will remove the visibility of the card and will stay for 1 second before flipping back over
function misMatch() {
    // selectedCards.push(selectedCards[0]);
    // selectedCards.push(selectedCards[1]);
    // selectedCards[0].card.classList.remove('flip');
    // selectedCards[1].card.classList.remove('flip');
    setTimeout(() =>{
    document.querySelectorAll('.card').forEach((selectedCards) => {
        selectedCards.classList.remove('flip');
    }, 1500);        
            
    //alert ("Try again")
    
});
}

function victory(){
    alert("Hole-in-One");
}


// function shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
//     let cardsArray = cards;
//     for (let i = cardsArray.length - 1; i > 0; i--) {
//         let randIndex = Math.floor(Math.random() * (i + 1));
//         cardsArray[randIndex].style.order = i;
//         cardsArray[i].style.order = randIndex;

//     }
// }
    




    
    // Need a function for shuffleCards, matched cards, mismatch cards, countdown, gameOver
                
        
//Step 3: Create a object class for the game, so we have properties for our timer, flips and can add functions for when game starts
//ex: class Matching PAR-ty {
    //constructor(time, cards)


// Step 4: Need to make functions for the game to run(startGame) Needs to have empty array, so game knows when victory occurs as well as starting our cards at 0 before it starts checking.
//ex: startGame(){
//total clicks = / timeRemaining = / matched cards = []/ could use null for cards checked so it won't count or turn over a already picked card

//}

//Step 5: Need a function that will count the flips on the game and turn the cards over when clicked.
//ex: flipCard ()
// use the tool called 'visible' that will turn the card over making the other side visible
//also, it should record the total number of clicks so the flip counter goes up.
//this will go back to our properties stated in Matching PAR-ty (this.flips = flips
//cards will currently be in order, so we need to set a if statement to shuffle cards

//Step 6: Fisher/Yates for loop to shuffle
//ex: function shuffleCards() with a for loop that will shuffle our cards
//use the order tool from CSS to shuffle the exact cards

//Step 7: Make a function to start the countdown(startGame)
// 1000 ms (1 second)

//Step 8: Function for game over (clear interval for game over and start interval on start game)
//this function will be called at end of startGame
//ex game over message will appear when timer runs out

//Step 9: Victory fuction
//ex clear interval just like game over but call the victory text to appear

//Step 10: Function to check when cards are matched. (have to know when you win)
//ex: cardMatch()
//will need to use if statements here to check if cards match and how they win
//use the image source from the card matches the same image its a match
//we'll need a match return and a mismatch return for this
// cardMismatch()

//also if we get two cards that don't match we need the cards to flip back over
//remove 'visible' make a small timer so player can see what those cards were to try again

//Step 11: MVP Steps

// Game will start when first card is flipped (timer and flip counter starts)
//Player wins the game when all cards are matched
//Player loses if time runs out
//There is a timer and flip counter, so they can try to better their score if they win


   
 























