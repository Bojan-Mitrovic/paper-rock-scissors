// game parts
const choice = document.querySelector('.choice');
const rockContainer = document.querySelector('#rockcontainer');
const part1 = document.querySelector('.game-part1');
const part2 = document.querySelector('.game-part2');
const part3 = document.querySelector('.game-part3');
// signs selected
const player = document.querySelector('#player-picked');
const player2 = document.querySelector('#player-picked2');
const paper = document.querySelector('.game-paper');
const rock = document.querySelector('.game-rock');
const scissors = document.querySelector('.game-scissors');
const housePick = document.querySelector('#house-pick');


const signList = [];
let random = Math.floor(Math.random() * 3);

// sign onclick functions

function choosePaper() {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';
    player.classList.add('game-paper');
    player2.classList.add('game-paper');


    setTimeout(function() {

        if (random == 1) {
            housePick.classList.add('.game-scissors');
            part1.style.display = 'none';
            part2.style.display = 'flex'
        } else if (random == 2) {
            housePick.classList.add('.game-rock');
            part1.style.display = 'none';
            part2.style.display = 'flex'
        } else {
            housePick.classList.add('.game-paper');
            part1.style.display = 'none';
            part2.style.display = 'flex'
        }

        ;

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

//