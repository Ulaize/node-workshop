//This is the number guessing game yeah!

 var prompt = require('prompt');
 
var startingNumber = Math.ceil(Math.random()*100);

var numberOfGuesses = [];

function game (){
    if (numberOfGuesses.length <= 4){
    
              prompt.start();
                
                console.log("Can you guess a number between 1 and 100?");
                
                 prompt.get(['number'], function (err, result) {
                    
                    var numberGuessed = result.number;
                    
                        if (startingNumber=== numberGuessed){
                            console.log("You got it!");
                           
                        }
                        
                        else if (startingNumber < numberGuessed){
                            console.log("Too high!");
                            numberOfGuesses.push(numberGuessed);
                            game();
                            
                        }
                        
                        else if (startingNumber > numberGuessed){
                            console.log("Too low!");
                            numberOfGuesses.push(numberGuessed);
                            game();
                            
                        }
                        
                  });
        
    }
    
    else{
            var x = numberOfGuesses.toString();
            console.log("The right number was " + startingNumber +". Your guesses were: " + x +".");
            
    }
}

game();