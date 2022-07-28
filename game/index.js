//variables
let round=1;
let playerOneScore=0;
let playerTwoScore=0;
//selectors
let gameRound=getElement("game-round");
let startButton=getElement("start-button");
let endButton=getElement("end-button");
//main div selectors
let gameContainerStart=getElement("game-container-start");
//player one selecters
let playerOneButton=getElement("player-one-shoot")
let playerOnePower=getElement("player-one-power");
let playerOneProgress=getElement("player-one-progerss");
let playerOnePercent=getElement("player-one-parcent");
let playerOneScoreEle=getElement("player-one-score");
//players two selectors
let playerTwoButton=getElement("player-two-shoot")
let playerTwoPower=getElement("player-two-power");
let playerTwoProgress=getElement("player-two-progerss");
let playerTwoPercent=getElement("player-two-parcent");
let playerTwoScoreEle=getElement("player-two-score");

gameContainerStart.style.display="none";

//Events Listeners
startButton.addEventListener("click",function(){

    startButton.style.display="none";
    endButton.style.display="none";
    gameContainerStart.style.display="block";
    gameContainerStart.classList.add("flex");
    gameRound.innerHTML=round;
    
    function result(){
        playerOneButton.addEventListener("click",function(){
            playerOneButton.disabled=true;
            playerTwoButton.disabled=false;
            let randomNumber=getRandomNumber();
            playerOnePower.innerHTML=randomNumber;
            playerOneProgress.value=playerOneProgress.value-randomNumber;
            console.log(playerOneProgress.value-randomNumber)
            playerOnePercent.innerHTML=playerOneProgress.value+"%";
            if(playerTwoProgress.value<=0){
                alert("Player One winner");
                playerOneScoreEle.innerHTML=playerOneScore+1;
                onPlaywin();
                round++;
                playerOneScore++;
                if(playerOneScore===20){
                    playerOneScore=0;
                    playerOneScoreEle.innerHTML=playerOneScore;
                    alert("Player 1 has win the game and game is over");

                    gameContainerStart.classList.remove("flex");
                    gameContainerStart.style.display="none";

                    endButton.style.display="block";

                    startButton.style.display="block";
                }
            }
           
        })
        playerTwoButton.addEventListener("click",function(){
            playerTwoButton.disabled=true;
            playerOneButton.disabled=false;
            let randomNumber=getRandomNumber();
            playerTwoPower.innerHTML=randomNumber;
            playerTwoProgress.value=playerOneProgress.value-randomNumber;
            console.log(playerTwoProgress.value-randomNumber)
            playerTwoPercent.innerHTML=playerTwoProgress.value+"%";
            if(playerOneProgress.value<=0){
                alert("Player Two winner");
                playerTwoScoreEle.innerHTML=playerTwoScore+1;
                onPlaywin();
                round++;
                playerTwoScore++;
                if(playerTwoScore===20){
                    playerTwoScore=0;
                    playerTwoScoreEle.innerHTML=playerTwoScore;
                    alert("Player 2 has win the game and game is over");
                    gameContainerStart.classList.remove("flex");
                    gameContainerStart.style.display="none";
                    endButton.style.display="block";
                    startButton.style.display="block";
                }
            }
        })     
    
    }
    result();
});



//function
function getRandomNumber(){
    return Math.floor(Math.random()*51);
}

function getElement(id){
    return document.getElementById(id);
}

function onPlaywin(){
    gameRound.innerHTML=round+1;
    playerOneProgress.value="100";
    playerOnePercent.innerHTML="100 %";
    playerOnePower.innerHTML="";
    playerTwoProgress.value="100";
    playerTwoPercent.innerHTML="100 %";
    playerTwoPower.innerHTML="";
}