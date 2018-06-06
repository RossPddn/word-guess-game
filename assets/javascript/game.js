var wins = 0;
var guesRemaining = 13; 
wrongGuesses=[];
document.getElementById('guessesRemaining').innerText = guesRemaining;

var words = ['Mars', 'Venus', 'Jupiter', 'Uranus', 'Saturn']
var randomword = words[Math.round(Math.random()*4)];
console.log(randomword);


function checkArray(event){
    var key = event.key;
    //if the chosen letter is in the random word do this, else do that
   if(randomword.includes(key)){
       console.log(true);


   }else{
       wrongGuesses.push(key);
       guesRemaining--;
       document.getElementById('wrong').innerText = wrongGuesses;
       document.getElementById('guessesRemaining').innerText = guesRemaining;
    
}

}

//RESET guesses and word

document.onkeyup = checkArray;
