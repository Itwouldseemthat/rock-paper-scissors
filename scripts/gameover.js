export function createGameOverWindow(elem) {
    let gameOver = document.createElement('div');
    gameOver.classList.add('game-over');
    let gameOverTitle = document.createElement('p');
    gameOverTitle.classList.add('game-over-title');
    gameOverTitle.innerText = elem;
    let restartWrapper = document.createElement('div');
    restartWrapper.classList.add('restart-wrapper');
    let restart = document.createElement('button');
    restart.classList.add('restart');
    restart.setAttribute('type', 'submit');
    restart.innerText = 'Restart';

    document.querySelector('.pc-img').after(gameOver);
    gameOver.prepend(gameOverTitle);
    gameOverTitle.after(restartWrapper);
    restartWrapper.prepend(restart);

    document.querySelector(".bo1").setAttribute("disabled", "true") 
    document.querySelector(".bo3").setAttribute("disabled", "true") 
    document.querySelector(".bo5").setAttribute("disabled", "true")
    document.querySelector(".rock").setAttribute("disabled", "true")
    document.querySelector(".paper").setAttribute("disabled", "true")
    document.querySelector(".scissors").setAttribute("disabled", "true")
}

