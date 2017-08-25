let word = "";
let wordList = [];
let out = document.createElement('p');
let div = document.getElementById("wordDisplay");
let incorGuessesLeft = 7;
let corGuesses = [];
let output = "";
let check = [];
let guesses = [];

function loadData() {
    let diff = document.getElementById('diff').value;
    let requestURL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        let requestData = request.response;
        word = "";
        wordList = requestData.split("\n");
        let rnd = Math.floor((Math.random() * 370101) + 1); //give a random number between 1 and 370101
        console.log("rnd = " + rnd);
        word = wordList[rnd];
        console.log(wordList[rnd]);
        // let possWord = wordList[rnd]; //err
        // if ((diff === "easy") && (possWord.length > 7)) {
        //     word = possWord;
        // } else if ((diff === "medium") && (possWord.length >= 5) && (possWord.length <= 7)) {
        //     word = possWord;
        // } else if ((diff === "hard") && (possWord.length < 5) && (possWord.length > 3)) {
        //     word = possWord;
        // }
        for (let j = 0; j < word.length - 1; j++) {
            check[j] = "_";
        }
        console.log("rnd word = " + word);
        printProgress();
    }

}

function checkLetter() {
    let inp = document.getElementById('input').value;
    let corr = false;
    guesses[guesses.length] = inp;
    for (let i = 0; i < word.length - 1; i++) {
        if (word.charAt(i) === inp) {
            check[i] = inp;
            corr = true;
            corGuesses[corGuesses.length] = inp;
            for (let j = 0; j < check.length; j++) {
                console.log(check[j]);
            }
        }
    }
    if (corr === false) {
        incorGuessesLeft--;
        let img = document.getElementById('hangman');
        let newImg = new Image;
        newImg.onload = function () {
            img.src = this.src;
        }
        switch (incorGuessesLeft) {
            case 0:
                newImg.src = 'img/hangman6.png';
                break;
            case 1:
                newImg.src = 'img/hangman5.png';
                break;
            case 2:
                newImg.src = 'img/hangman4.png';
                break;
            case 3:
                newImg.src = 'img/hangman3.png';
                break;
            case 4:
                newImg.src = 'img/hangman2.png';
                break;
            case 5:
                newImg.src = 'img/hangman1.png';
                break;
            case 6:
                newImg.src = 'img/hangman0.png';
                break;
        }
        console.log(incorGuessesLeft);
    }
    if (incorGuessesLeft > 0) {
        printProgress();
        checkWin();
        printGuesses();
    } else {
        let wl = document.createElement('h3');
        let d = document.getElementById('winLose');
        wl.textContent = "GAME OVER!";
        d.appendChild(wl);
    }

}

function printGuesses() {
    let di = document.getElementById('guesses');
    let h4 = document.getElementById('guess');
    h4.textContent = "Guesses: ";
    for (let i = 0; i < guesses.length; i++) {
        h4.textContent += (guesses[i] + "\t");
    }
    di.appendChild(h4);
}

function printProgress() {
    out.textContent = "";
    for (let i = 0; i < check.length; i++) {
        out.textContent += (check[i] + "\t");
    }
    div.appendChild(out);
}

function checkWin() {
    let count = 0;
    for (let i = 0; i < check.length; i++) {
        if (check[i] != "_") {
            count++;
        }
    }
    if (count === check.length) {
        let wl = document.createElement('h3');
        let d = document.getElementById('winLose');
        wl.textContent = "WINNER!";
        d.appendChild(wl);
    }
}