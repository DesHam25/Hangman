// Global Variables
// ===============================================================================
// Create an array of Words
const word = ['Ace','airhead','ash people', 'bag your face', 'bite me', 'burn out','butt ugly','cool out','couch potato','crunchy'];
// Choose word randomly
Let randNum = Math.floor(Math.random() * word.length);
Let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Dom Manipulation
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
// ===============================================================================
console.log(choosenWord);
// Create underscores based on the length words
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}    

// Get Users guess
document.addEventListener('Keypress',(event) => {
    let keycode = String.fromCharCode (event.keyCode);
// if Users guess is right
    if(choosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(KeyWord);
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML =  underScore.join(' ');
        docRightGuess [0].innerHTML = rightWord;
        // checks to see if user word matches guesses
        if(underScore.join('') == choosenWord) {
            alert('You Win');
        }    
    }
    else{    
       wrongWord.push(KeyWord);
       docWrongGuess[0].innerHTML =wrongWord;
    }
});
 

underScore[0].innerHTML = generateUnderscore().join(' ');

// Check if guess is right
// if right push to right array
// if wrong push to wrong array