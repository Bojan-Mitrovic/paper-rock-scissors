// game parts
const choice = document.querySelector('.choice');
const rockContainer = document.querySelector('#rockcontainer');
const part1 = document.querySelector('.game-part1');
const part2 = document.querySelector('.game-part2');
const part3 = document.querySelector('.game-part3');
// signs selected
const player = document.querySelector('.player-picked');
const player2 = document.querySelector('#player-picked2');
const player3 = document.querySelector('#player-part-3');
const computer3 = document.querySelector('#computer-part-3');
const paper = document.querySelector('.game-paper');
const rock = document.querySelector('.game-rock');
const scissors = document.querySelector('.game-scissors');
const housePick = document.querySelector('#house-pick');

// const theHousePick = document.querySelector('.the-house-pick #house-pick');


function computerPlay() {

    var computerSelection = Math.floor(Math.random() * 3);

    // log event
    console.log("Computer rolled a dice and got " + computerSelection);

    switch (computerSelection) {
        case 0:
            // chooseRock(true);
            housePick.classList.remove('empty-spot');
            housePick.classList.add('base-class', 'game-rock');
            computer3.classList.add('game-rock');

            break;

        case 1:
            // choosePaper(true);
            housePick.classList.remove('empty-spot');
            housePick.classList.add('base-class', 'game-paper');
            computer3.classList.add('game-paper');

            break;

        case 2:
            // chooseScissors(true);
            housePick.classList.remove('empty-spot');
            housePick.classList.add('base-class', 'game-scissors');
            computer3.classList.add('game-scissors');
            break;

        default:
            console.log("Whe should never come here.");
    }
}

function playPart1() {
    // Run the computer function
    setTimeout(function() {
        computerPlay();

        // Play part2
        playPart2();
    }, 1500);
}


function playPart2() {
    setTimeout(function() {
        part1.style.display = 'none';
        part3.style.display = 'flex';

    }, 1500);
}

// sign onclick functions
function choosePaper(computer) {
    // Set styling of part 1 to none
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';

    // Check if 'computer' is true
    if (computer) {
        housePick.classList.add('game-paper');
    } else {
        player.classList.add('game-paper');
        player3.classList.add('game-paper');


        // Run computer choice
        playPart1();
    }

    // Log our event
    // Use special operators to decide if we want to log 'computer' or 'player'
    console.log("The " + (computer ? "computer" : "player") + " chooses Paper");
}

function chooseScissors(computer) {
    // Set styling of part 1 to none
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';

    // Check if 'computer' is true
    if (computer) {
        housePick.classList.add('game-scissors');
    } else {
        player.classList.add('game-scissors');
        player3.classList.add('game-scissors');


        // Run computer choice
        playPart1();
    }

    // Log our event
    // Use special operators to decide if we want to log 'computer' or 'player'
    console.log("The " + (computer ? "computer" : "player") + " chooses Scissors");
}

function chooseRock(computer) {
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';

    // Check if 'computer' is true
    if (computer) {
        housePick.classList.add('game-rock');
    } else {
        player.classList.add('game-rock');
        player3.classList.add('game-rock');


        // Run computer choice
        playPart1();
    }

    // Log our event
    // Use special operators to decide if we want to log 'computer' or 'player'
    console.log("The " + (computer ? "computer" : "player") + " chooses Rock");
}