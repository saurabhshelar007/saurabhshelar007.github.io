

var scores,roundValue,playerSelected,dice,gamePlaying;

init();





document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gamePlaying)
    {
    //generate the random number
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice!==1)
    {
        roundValue+=dice;
        document.querySelector('#current-'+playerSelected).textContent=roundValue;

    }
    else{
    //   next player
       nextPlayer();

    }

}
})
;


document.querySelector('.btn-hold').addEventListener('click',function(){

 if(gamePlaying)
 {
    //Add current score to global score
     scores[playerSelected]+=roundValue;
     //Update the ui

     document.querySelector('#score-'+playerSelected).textContent=scores[playerSelected];

     //check if player won the game
     if(scores[playerSelected]>=100)
     {
          document.querySelector('#name-'+playerSelected).textContent='Winner!';

          document.querySelector('.dice').style.display='none';
          document.querySelector('.player-'+playerSelected+'-panel').classList.add('winner');
          document.querySelector('.player-'+playerSelected+'-panel').classList.remove('active');
          gamePlaying=false;   

     }
     else{

     //Next player
     
     nextPlayer();

     }


}});


function nextPlayer()
{

    playerSelected===0?playerSelected=1:playerSelected=0;
    roundValue=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');

    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';

}

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores=[0,0];
    playerSelected=0;
    roundValue=0;
    gamePlaying=true;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



}// console.log(dice);

// document.querySelector('#current-'+playerSelected).textContent=dice;
