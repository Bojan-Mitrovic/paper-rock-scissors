// game parts
const choice = document.querySelector('.choice');
const rockContainer = document.querySelector('#rockcontainer');
const part1 = document.querySelector('.game-part1');
const part2 = document.querySelector('.game-part2');
const part3 = document.querySelector('.game-part3');
const housePick = document.querySelector('#house-pick');
// signs selected
const player = document.querySelector('#player-picked');
const paper = document.querySelector('.game-paper');
const rock = document.querySelector('.game-rock');
const scissors = document.querySelector('.game-scissors');

const signList = [];
let random = Math.floor(Math.random() * 3);

// sign onclick functions

function choosePaper() {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';
    player.classList.add('game-paper');

    setTimeout(function() {


        if (random == 1) {
            housePick.classList.remove('.empty-spot');
            housePick.classList.add('.base-class', '.game-scissors');
        }
        if (random == 2) {
            housePick.classList.remove('.empty-spot');
            housePick.classList.add('.base-class', '.game-rock');
        } else {
            housePick.classList.remove('.empty-spot');
            housePick.classList.add('.base-class', '.game-paper');
        }

    }, 2000);
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

// computer pick

function housePick() {
    let random = Math.floor(Math.random() * 3);

    if (random = 0) {
        housePick.classList.add('.base-class', '.game-scissors');
    } else if (random = 1) {
        housePick.classList.add('.base-class', '.game-rock');
    } else {
        housePick.classList.add('.base-class', '.game-paper');
    }

}