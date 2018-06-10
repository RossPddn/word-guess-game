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
       //check if the arrays are fully the same
       function CheckArr(randomword,answerArray){
        if(randomword.length !== answerArray.length){
        return false;
     }for(var i= randomword.length; i--;){
         if(randomword[i] !== answerArray[i]){
             return false;
         }
         return true;


     }

      }


function word(key){
    var key = event.key;
   
    if(randomword.includes(key)){
       for(var j = 0; j<randomword.length;j++){
           if(randomword[j] === key){
               answerArray[j]=key;
        
           
                   }
               }
               if(CheckArr(randomword,answerArray)== true){
                wins++;
                guesRemaining = 13;
                wrongGuesses=[];
                answer = [];
                answerArray = [];
                document.getElementById('wrong').innerText = wrongGuesses;
                document.getElementById("answer").innerHTML = answer;
                document.getElementById('wins').innerText = wins;
                document.getElementById('guessesRemaining').innerText = guesRemaining;
                randomword = words[Math.round(Math.random()*4)];
                console.log(randomword);
                for(var i = 0; i<randomword.length;i++){
                 answerArray[i]="_";
        
        }
            }
               
           }

       
        
 
 
    else if((CheckArr(randomword,answerArray)== false)){
        wrongGuesses.push(key);
        guesRemaining--;
        document.getElementById('wrong').innerText = wrongGuesses;
        document.getElementById('guessesRemaining').innerText = guesRemaining;
        if(guesRemaining == 0){
            guesRemaining = 13;
           
            wrongGuesses=[];
            answer = [];
            answerArray = [];
            document.getElementById('wrong').innerText = wrongGuesses;
            document.getElementById("answer").innerHTML = answer;
            document.getElementById('wins').innerText = wins;
            document.getElementById('guessesRemaining').innerText = guesRemaining;
            randomword = words[Math.round(Math.random()*4)];
            console.log(randomword);
            for(var i = 0; i<randomword.length;i++){
             answerArray[i]="_";
    
    }

        }
      
     
 }

    answer = answerArray.join("");
    document.getElementById("answer").innerHTML = answer;

   
}

document.onkeyup = word;


//document.onkeyup = checkArray;
