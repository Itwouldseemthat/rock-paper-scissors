import { scoreTable } from './table.js';

let bo1 = document.querySelector('.bo1');
let bo3 = document.querySelector('.bo3');
let bo5 = document.querySelector('.bo5');

export let gameMode;

let playerScore = document.querySelector('.player');
let pcScore = document.querySelector('.pc');

let playerImg = document.querySelector('.player-img');
let pcImg = document.querySelector('.pc-img');

let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');

let obj = {
    1: '/img/rock.png',
    2: '/img/paper.png',
    3: '/img/scissors.png'
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  


function selectItem(item) {
    playerImg.src=`/img/${item}.png`;
    let random = getRandomInt(1, 3);
    pcImg.src=obj[random];
    scoreTable();
}

function showGameMode(mode) {
    let gameModeIntro = document.querySelector('.game-mode-intro');
    gameModeIntro.textContent = mode;
    gameModeIntro.setAttribute('style', 'color: white');
}

function selecteGameMode(gameModeNum) {
    gameMode = gameModeNum;
}


[bo1, bo3, bo5].forEach((bo, index) => {
    bo.addEventListener('click', () => selecteGameMode(index+1));
    bo.addEventListener('click', () => showGameMode(bo.textContent));
});


btnRock.addEventListener('click', () => selectItem('rock'));
btnPaper.addEventListener('click', () => selectItem('paper'));
btnScissors.addEventListener('click', () => selectItem('scissors'));



