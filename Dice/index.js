//the dice game
var numArray = [[4],[2,6],[2,4,6],[0,2,6,8],[0,2,4,6,8],[0,3,6,2,5,8]]
var dice1 = document.querySelectorAll('.dice1 .dot');
var dice2 = document.querySelectorAll('.dice2 .dot');
function displaySix(){
    dice1[1].classList.add("hide");
    dice1[4].classList.add("hide");
    dice1[7].classList.add("hide");
    dice2[1].classList.add("hide");
    dice2[4].classList.add("hide");
    dice2[7].classList.add("hide");
    
}
function displayNum(dice, num){//dice- dice1/dice2 , num- number to displayed
    //hide all dots
    for(var i=0; i<dice.length; i++){
        dice[i].classList.add('hide');
    }
    
    if(num === 1){
        dice[4].classList.remove('hide');
    }
    else if(num === 2){
        dice[2].classList.remove('hide');
        dice[6].classList.remove('hide');
    }
    else if(num === 3){
        dice[2].classList.remove('hide');
        dice[4].classList.remove('hide');
        dice[6].classList.remove('hide');
    }
    else if(num === 4){
        dice[0].classList.remove('hide');
        dice[2].classList.remove('hide');
        dice[6].classList.remove('hide');
        dice[8].classList.remove('hide');
    }
    else if(num === 5){
        dice[0].classList.remove('hide');
        dice[2].classList.remove('hide');
        dice[4].classList.remove('hide');
        dice[6].classList.remove('hide');
        dice[8].classList.remove('hide');
    }
    else if(num === 6){
        dice[0].classList.remove('hide');
        dice[2].classList.remove('hide');
        dice[3].classList.remove('hide');
        dice[5].classList.remove('hide');
        dice[6].classList.remove('hide');
        dice[8].classList.remove('hide');
    }

}
document.onload(displaySix());
function main(){
    var p1num = Math.floor(Math.random()*6)+1;
    var p2num = Math.floor(Math.random()*6)+1;
    if(p1num>p2num){
        document.querySelector('h2').innerHTML = 'Player-1 Wins!!';
        displayNum(dice1,p1num);
        displayNum(dice2,p2num);
    }
    else if(p1num<p2num){
        document.querySelector('h2').innerHTML = 'Player-2 Wins!!';
        displayNum(dice1,p1num);
        displayNum(dice2,p2num);
    }
    else{
        document.querySelector('h2').innerHTML = 'Tie';
        displayNum(dice1,p1num);
        displayNum(dice2,p2num);
    }
}