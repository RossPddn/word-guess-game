var wins = 0;
var guesRemaining = 13; 
wrongGuesses=[];
answerArray=[];
document.getElementById('guessesRemaining').innerText = guesRemaining;
var answer;
var words = ['mars', 'venus', 'jupiter', 'uranus', 'saturn']
var randomword = words[Math.round(Math.random()*4)];
console.log(randomword);

function word(){
    for(var i = 0; i<randomword.length;i++){
        answerArray[i]="_";

    }
    answer = answerArray.join("");
document.getElementById("answer").innerHTML = answer;
}


function checkArray(event){
    var key = event.key;
    //if the chosen letter is in the random word do this, else do that
   if(randomword.includes(key)){
       
       


   }else{
       wrongGuesses.push(key);
       guesRemaining--;
       document.getElementById('wrong').innerText = wrongGuesses;
       document.getElementById('guessesRemaining').innerText = guesRemaining;
    
}


}

//RESET guesses and word
word();
document.onkeyup = checkArray;
