var wins = 0;
var guesRemaining; 
var wrongGuesses;
var answerArray;
var answer;
var randomword;

///////RESET FUNCTION/ RESETS EVERYTHING EXCEPT WINS
function reset(){

    guesRemaining = 13; 
    wrongGuesses=[];
    answerArray=[];
    document.getElementById('guessesRemaining').innerText = guesRemaining;
    document.getElementById('wrong').innerText = wrongGuesses;
    
    answer;
    words = ['mars', 'galaxy', 'jupiter', 'pluto', 'saturn']
    randomword = words[Math.round(Math.random()*4)];
    console.log(randomword);
    for(var i = 0; i<randomword.length;i++){
        answerArray[i]="_";
    }
    answer = answerArray.join("");
    document.getElementById("answer").innerHTML = answer;
}
reset();

       //check if the arrays are fully the same
       function CheckArr(randomword,answerArray){
        if(randomword.length !== answerArray.length){
        return false;
     }for(var i= randomword.length; i--;){
         if(randomword[i] !== answerArray[i]){
             return false;
         }
     }
     return true;
      }
/////////////////////////////////////// checking answer for picture insert
function checkForPicture(randomword){
    if(randomword === 'mars'){
        document.getElementById('imgCaption').style.display = 'block';
        document.getElementById('imgCaption').innerText = "Mars!!"
        document.getElementById('leftColumnImg').src = 'assets/images/mars.jpg';
    }else if(randomword === "saturn"){
        document.getElementById('imgCaption').style.display = 'block';
        document.getElementById('imgCaption').innerText = "Saturn!!"
        document.getElementById('leftColumnImg').src = 'assets/images/saturn_dream.jpg';
    }else if(randomword ==="pluto"){
        document.getElementById('imgCaption').style.display = 'block';
        document.getElementById('imgCaption').innerText = "Pluto!!"
        document.getElementById('leftColumnImg').src = 'assets/images/pluto.jpg';
    }else if(randomword ==="galaxy"){
        document.getElementById('imgCaption').style.display = 'block';
        document.getElementById('imgCaption').innerText = "Milky Way!!"
        document.getElementById('leftColumnImg').src = 'assets/images/galaxyOne.jpg';
        
    }else if(randomword ==="jupiter"){
        document.getElementById('imgCaption').style.display = 'block';
        document.getElementById('imgCaption').innerText = "Jupiter!!"
        document.getElementById('leftColumnImg').src = 'assets/images/jupiter.jpg';
    }
    wins++;
    reset();


}
/////////////////////////// COLLECTING THEIR KEY PRESS AND CHECKING IF IT'S IN THE RANDOM WORD
function word(key){
    var key = event.key;
   
    if(randomword.includes(key)){
       for(var j = 0; j<randomword.length;j++){
           if(randomword[j] === key){
               answerArray[j]=key;
                   }
               }
               if(CheckArr(randomword,answerArray)== true){
                checkForPicture(randomword);
            }
           }
    else if((CheckArr(randomword,answerArray)== false)){
        if(wrongGuesses.includes(key) == false){
        wrongGuesses.push(key);
        guesRemaining--;
    }
        document.getElementById('wrong').innerText = wrongGuesses;
        document.getElementById('guessesRemaining').innerText = guesRemaining;
        if(guesRemaining == 0){
            reset();

        }
 }
    answer = answerArray.join("");
    document.getElementById("answer").innerHTML = answer;
}

document.onkeyup = word;


//document.onkeyup = checkArray;
