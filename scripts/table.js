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
    document.querySelector(".bo1").removeAttribute("disabled") 
    document.querySelector(".bo3").removeAttribute("disabled") 
    document.querySelector(".bo5").removeAttribute("disabled")
    document.querySelector(".rock").removeAttribute("disabled")
    document.querySelector(".paper").removeAttribute("disabled")
    document.querySelector(".scissors").removeAttribute("disabled")
}

function disableBtns() {
    document.querySelector(".bo1").setAttribute("disabled", "true") 
    document.querySelector(".bo3").setAttribute("disabled", "true") 
    document.querySelector(".bo5").setAttribute("disabled", "true")
    document.querySelector(".rock").setAttribute("disabled", "true")
    document.querySelector(".paper").setAttribute("disabled", "true")
    document.querySelector(".scissors").setAttribute("disabled", "true")
}

function gameOverWindow() {
    if (countPlayerScore === gameMode) {
        let winner = 'Player win!';
        createGameOverWindow(winner);
        let restart = document.querySelector('.restart');
        restart.addEventListener('click', restartGame);
        disableBtns()
    }
    if (countPcScore === gameMode) {
        let winner = 'Pc win!';
        createGameOverWindow(winner);
        let restart = document.querySelector('.restart');
        restart.addEventListener('click', restartGame);
        disableBtns()
    }
}

export function scoreTable() {
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/rock.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/scissors.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();
    }
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/scissors.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/paper.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();

    }
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/paper.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/rock.png' ) {
        doingWhenPlayerwin();
        gameOverWindow();
    }
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/rock.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/paper.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/scissors.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/rock.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
    if (playerImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/paper.png' && pcImg.src === 'https://itwouldseemthat.github.io/rock-paper-scissors/img/scissors.png' ) {
        doingWhenPcwin();
        gameOverWindow();
    }
}