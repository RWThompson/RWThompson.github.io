let word = "";
let wordList = [];
let out = document.createElement('p');
let div = document.getElementById("wordDisplay");
let incorGuessesLeft = 7;
let corGuesses = [];
let output = "";
let check = [];
let guesses = [];
let players = [];
let store = window.localStorage;

// function createPlayer() {
//     let player = {
//         name: "",
//         gPlayed: 0,
//         gLost: 0,
//         gWon: 0,
//         wPerc: 0,
//         leastGuess: 0,
//         mostGuess: 0
//     }
// }

pList = [];

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
        while (word === "") {
            let rnd = Math.floor((Math.random() * 370101) + 1); //give a random number between 1 and 370101
            let possWord = wordList[rnd];
            console.log("rnd = " + rnd);
            console.log(wordList[rnd]);
            if ((diff === "easy") && (possWord.length > 7)) {
                word = possWord;
            } else if ((diff === "medium") && (possWord.length > 5) && (possWord.length <= 7)) {
                word = possWord;
            } else if ((diff === "hard") && (possWord.length <= 5) && (possWord.length > 3)) {
                word = possWord;
            }
            for (let j = 0; j < word.length - 1; j++) {
                check[j] = "_";
            }
            console.log("rnd word = " + word);
            printProgress();
        }
    }

}

function checkLetter() {
    let inp = document.getElementById('input').value;
    let corr = false;
    let f = 0;
    for (let k = 0; k < guesses.length; k++) {
        if (guesses[k] === inp) {
            f = 1;
        }
    }
    if (f === 0) {
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
    } else {
        let wl = document.createElement('h3');
        let d = document.getElementById('interface');
        wl.textContent = "You cannot guess the same letter twice!";
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

function addPlayer() {
    let p = document.getElementById('players');
    let name = document.getElementById('name').value;
    let flag = 0;
    console.log(name);
    for (let i = 0; i <= p.length; i++) {
        if (p[i] === name) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log(name);
        let o = document.createElement('option');
        o.value = name;
        o.textContent = name;
        p.appendChild(o);
        // let play = createPlayer();
        // play.name = name;
        // let tmp = pList[pList.length];
        // pList[pList.length] = play;
        // localStorage.setItem(pList[j], play);
        // loadPlayers();
    }
}

function loadPlayers() {
    let p = document.getElementById('players');
    let o = document.createElement('option');
    o.value = localStorage.getItem("name");
    o.textContent = localStorage.getItem("name");
    p.appendChild(o);
}