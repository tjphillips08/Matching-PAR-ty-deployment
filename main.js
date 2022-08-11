// Set-up DOM elements we will be using from our HTML
//game-info-container, game-info, game container, timer, flips, reset button(input)
let cards= document.querySelectorAll('.card');
//  console.log(cards)
let timer = document.getElementById('time remaining');
//console.log(timer)
let timerInt = parseInt(timer.innerHTML)
//console.log(timerInt)
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
//when you click the timer starts ticking down
let selectedCards = [];
//console.log(selectedCards);

let matchedCards=[];
//console.log(matchedCards)

let winTime = document.getElementById('victory');
//console.log(winTime)
let gameEnd = document.getElementById('game-over');
//console.log(gameEnd)


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
//need to target where the image is we're looking for
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
             
            gameOver();
            
    
        }
        
    }, 1000);

//when game ends we need to be able to display message and stop our time and flips
    function gameOver(){
        clearInterval(counter);
        gameEnd.innerText = "DOUBLE BOGEY";
        //alert('Double Bogey')
    }
    }

    //set time back to start(120), flips to 0 and remove flips(remove(flip))
    function resetBoard (){
        tickerInt=0;
        ticker.innerHTML=0;
        timerInt=120;
        matchedCards= [];
        
        document.querySelectorAll('.card').forEach((card) => {
            card.classList.remove('flip');
        });
    
        winTime.innerText='';
        gameEnd.innerText='';
        
    }
    
    //use selected card array, selected cards should equal two then compare(if match then call match function, else doesn't match (mismatch function)) 
       function checkForCardMatch(){
        
           if (selectedCards.length ==2){
               //disable mouse clicks on other cards
           }
           if(selectedCards.length==2 && selectedCards[0] == selectedCards[1]){
               cardMatch();
               selectedCards = [];//empty array
           }
           if(matchedCards.length === 8){ //8 sets of 2
       
               victory();//this function will display our win message
           }
           else if(selectedCards.length==2 && selectedCards[0] !== selectedCards[1]){
               misMatch();
                selectedCards= [];//empty array
           }
       }
    
       //need to push the selected cards into the matched card array to store. 
       function cardMatch() {
           matchedCards.push(selectedCards);
           
       }

       //mismatch function will remove the visibility of the card and will stay for 1 second before flipping back over
       function misMatch() {
       
       setTimeout(() =>{
       document.querySelectorAll('.card').forEach((selectedCards) => {
           selectedCards.classList.remove('flip');
       }, 1500);        
               
       //alert ("Try again")
       
    });
}

    function victory(){
    winTime.innerText = "HOLE-IN-ONE!!"
    //alert("Hole-in-One");
}
















    
    

    
    
    
    
   


    




    



    
    





    



    




    
    


   
 























