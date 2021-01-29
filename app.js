// game parts
const choice = document.querySelector('.choice');
const rockContainer = document.querySelector('#rockcontainer');
const part1 = document.querySelector('.game-part1');
const part2 = document.querySelector('.game-part2');
const part3 = document.querySelector('.game-part3');
// signs selected
const player = document.querySelector('.player-picked');
const player2 = document.querySelector('#player-picked2');
const paper = document.querySelector('.game-paper');
const rock = document.querySelector('.game-rock');
const scissors = document.querySelector('.game-scissors');
const housePick = document.querySelector('#house-pick');

const theHousePick = document.querySelector('.the-house-pick #house-pick');


function computerPlay() {

    var computerSelection = Math.floor(Math.random() * 3);

    // log event
    console.log("Computer rolled a dice and got " + computerSelection);

    switch (computerSelection) {
        case 0:
            chooseRock(true);
            break;

        case 1:
            choosePaper(true);
            break;

        case 2:
            chooseScissors(true);
            break;

        default:
            console.log("Whe should never come here.");
    }
}

function playPart1() {
    // Run the computer function
    computerPlay();

    // Play part2
    playPart2();
}

function playPart2() {
    // Create a delay for our actions to give the user some time to observe
    // and look at what is happening
    setTimeout(function() {
        part1.style.display = 'none';
        part2.style.display = 'flex';

        // Play part 3
        playPart3();
    }, 1500);
}

function playPart3() {
    setTimeout(function() {
        part2.style.display = 'none';
        part3.style.display = 'flex';

    }, 1500);
}

// sign onclick functions
function choosePaper(computer = false) {
    // Set styling of part 1 to none
    choice.style.display = 'none';
    rockContainer.style.display = 'none';
    part1.style.display = 'flex';

    // Check if 'computer' is true
    if (computer) {
        housePick.classList.add('game-paper');
    } else {
        player.classList.add('game-paper');

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

        // Run computer choice
        playPart1();
    }

    // Log our event
    // Use special operators to decide if we want to log 'computer' or 'player'
    console.log("The " + (computer ? "computer" : "player") + " chooses Rock");
}