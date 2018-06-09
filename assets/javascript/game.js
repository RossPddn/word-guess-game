var wins = 0;
var guesRemaining = 13; 
wrongGuesses=[];
answerArray=[];
document.getElementById('guessesRemaining').innerText = guesRemaining;
var answer;
var words = ['mars', 'venus', 'jupiter', 'uranus', 'saturn']
var randomword = words[Math.round(Math.random()*4)];
console.log(randomword);
for(var i = 0; i<randomword.length;i++){
    answerArray[i]="_";

}

function word(key){
    var key = event.key;
 
    if(randomword.includes(key)){
       for(var j = 0; j<randomword.length;j++){
           if(randomword[j] === key){
               answerArray[j]=key;
               break;
           }

       }
        
 
 
    }else{
        wrongGuesses.push(key);
        guesRemaining--;
        document.getElementById('wrong').innerText = wrongGuesses;
        document.getElementById('guessesRemaining').innerText = guesRemaining;
     
 }
 
    
    answer = answerArray.join("");
    document.getElementById("answer").innerHTML = answer;
}


// function checkArray(event){
//     var key = event.key;
//     //if the chosen letter is in the random word do this, else do that
//    if(randomword.includes(key)){
       
//        answerArray.push(key);


//    }else{
//        wrongGuesses.push(key);
//        guesRemaining--;
//        document.getElementById('wrong').innerText = wrongGuesses;
//        document.getElementById('guessesRemaining').innerText = guesRemaining;
    
// }


// }

//RESET guesses and word
document.onkeyup = word;
//document.onkeyup = checkArray;
