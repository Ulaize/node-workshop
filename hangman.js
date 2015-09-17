//Hangman game


var prompt = require('prompt');

var words = ["cat", "dog", "fish"];

var randomWord = words[Math.floor(Math.random() * words.length)];

var decomposedAnimal = randomWord.split("");

var answer = decomposedAnimal.map(function() {return 0;});

var trial = [];

function game (){
     
    if (!compareWords(decomposedAnimal,answer)){
        prompt.start();
                    
        console.log("The word has " + decomposedAnimal.length + " characters.");
            
        prompt.get(['letter'], function (err, result) {
                
            var letterGuessed = result.letter;
            
            if (checkAnswer(letterGuessed)){
                for (var i=0 ; i < decomposedAnimal.length ; i++){
                    
                    if(letterGuessed === decomposedAnimal[i]){
                        answer.splice(i, 1, letterGuessed);
                        console.log("You got a letter right!It is in position " + (i+1) );
                    }
                }
            game(); 
            }
            
            else {
                
                trial++;
                
                switch(trial) {
                case 1:
                    console.log(a+b+c+i+i+i);
                    game(); 
                    break;
                case 2:
                    console.log(a+b+c+d+i+i);
                    game(); 
                    break;
                case 3:
                    console.log(a+b+c+e+i+i);
                    game(); 
                    break;
                case 4:
                    console.log(a+b+c+f+i+i);
                    game(); 
                    break;
                case 5:
                    console.log(a+b+c+f+g+i);
                    game(); 
                    break;
                case 6:
                    console.log(a+b+c+f+h+i);
                    console.log("Game Over");
                    break;
                }
            }
                  
        });
    }
    else {
        console.log("You freaking won!");
    }
}     

game(decomposedAnimal);


function compareWords (array1,array2){
    
    for (var i=0 ; i<array1.length ; i++){
        if (array1[i] !== array2[i]){
            return false;
        }

    }
    
    return true;
}

function checkAnswer (a){
    for (var i=0 ; i < decomposedAnimal.length ; i++){
        if(a === decomposedAnimal[i]){
            return true;
            
        }
        
    }
    return false;
}


var a = " _________     \n";
var b = "|         |    \n";
var c = "|         0    \n";
var d = "|        /     \n";
var e = "|        /|    \n";
var f = "|        /|/   \n";
var g = "|        /     \n";
var h = "|        / /   \n";
var i = "|              \n";


   