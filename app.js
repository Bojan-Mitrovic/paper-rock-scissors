// game parts
const choice = document.querySelector('.choice');
const rockContainer = document.querySelector('#rockcontainer');
const part1 = document.querySelector('.game-part1');
const part2 = document.querySelector('.game-part2');
const part3 = document.querySelector('.game-part3');

// signs selected
const player = document.querySelector('#player-picked')



function choosePaper() {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';
    player.classList.add('game-paper');
}

function chooseScissors() {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';
    player.classList.add('game-scissors');
}

function chooseRock() {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';
    player.classList.add('game-rock');
}