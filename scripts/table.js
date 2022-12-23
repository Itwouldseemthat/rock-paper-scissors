import { createGameOverWindow } from './gameover.js';
import { gameMode } from './index.js';


let playerImg = document.querySelector('.player-img');
let pcImg = document.querySelector('.pc-img');

let playerScore = document.querySelector('.player');
let pcScore = document.querySelector('.pc');

let countPlayerScore = 0;
let countPcScore = 0;

function addPlayerScoreColor() {
    playerScore.setAttribute('style', 'background-color: green');
}

function removePlayerScoreColor() {
    playerScore.removeAttribute('style');
}

function addPcScoreColor() {
    pcScore.setAttribute('style', 'background-color: red');
}

function removePcScoreColor() {
    pcScore.removeAttribute('style');
}

function doingWhenPlayerwin() {
    countPlayerScore += 1;
    playerScore.textContent = countPlayerScore;
    addPlayerScoreColor();
    setTimeout(removePlayerScoreColor, 800);
}

function doingWhenPcwin() {
    countPcScore += 1;
    pcScore.textContent = countPcScore;
    addPcScoreColor();
    setTimeout(removePcScoreColor, 800);
}

function restartGame() {
    let gameOver = document.querySelector('.game-over');
    gameOver.remove();
    countPlayerScore = 0;
    playerScore.textContent = countPlayerScore;
    countPcScore = 0;
    pcScore.textContent = countPcScore;
}

function gameOverWindow() {
    if (countPlayerScore === gameMode) {
        let winner = 'Player win!';
        createGameOverWindow(winner);
        let restart = document.querySelector('.restart');
        restart.addEventListener('click', restartGame);
    }
    if (countPcScore === gameMode) {
        let winner = 'Pc win!';
        createGameOverWindow(winner);
        let restart = document.querySelector('.restart');
        restart.addEventListener('click', restartGame);
    }
}

export function scoreTable() {
    console.log(playerImg.src, pcImg.src)
    if (playerImg.src === 'http://127.0.0.1:5500/img/rock.png' && pcImg.src === 'http://127.0.0.1:5500/img/scissors.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();
    }
    if (playerImg.src === 'http://127.0.0.1:5500/img/scissors.png' && pcImg.src === 'http://127.0.0.1:5500/img/paper.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();

    }
    if (playerImg.src === 'http://127.0.0.1:5500/img/paper.png' && pcImg.src === 'http://127.0.0.1:5500/img/rock.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();
    }
    if (playerImg.src === 'http://127.0.0.1:5500/img/rock.png' && pcImg.src === 'http://127.0.0.1:5500/img/paper.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
    if (playerImg.src === 'http://127.0.0.1:5500/img/scissors.png' && pcImg.src === 'http://127.0.0.1:5500/img/rock.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
    if (playerImg.src === 'http://127.0.0.1:5500/img/paper.png' && pcImg.src === 'http://127.0.0.1:5500/img/scissors.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
}