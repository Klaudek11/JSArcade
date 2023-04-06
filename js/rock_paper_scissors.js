const bars = document.querySelector('.fa-bars');
const hiddenMenu = document.querySelector('.side-menu');
const exit = document.querySelector('.fa-x');

const scorePc = document.querySelector('div.score span.pc');
const scoreYou = document.querySelector('div.score span.you');

const pcHand = document.querySelector('div.computer-choice i');

const resultTable = document.querySelector('div.result span.result');

const hands = [...document.querySelectorAll('div.game-panel i')];

const btnPlay = document.querySelector('div.play');

const reset = document.querySelector('div.reset');

const rockPaperScissors = {
    rock: 'fa-solid fa-hand-back-fist',
    paper: 'fa-solid fa-hand',
    scissors: 'fa-solid fa-hand-scissors',
};

const gamesResult = {
    pc: '',
    you: '',
};

//Your and PC choice
function yourChoice() {
    hands.forEach((el) => el.classList.remove('active'));
    this.classList.add('active');
    gamesResult.you = this.id;
}

function pcChoice() {
    let handId = Math.floor(Math.random() * 3);
    pcHand.classList = Object.values(rockPaperScissors)[handId];
    gamesResult.pc = Object.keys(rockPaperScissors)[handId];
}

// Stats
function result() {
    if (gamesResult.pc === gamesResult.you) {
        scorePc.textContent++;
        scoreYou.textContent++;
        resultTable.textContent = 'REMIS!';
    } else if (
        (gamesResult.pc === 'paper' && gamesResult.you === 'scissors') ||
        (gamesResult.pc === 'rock' && gamesResult.you === 'paper') ||
        (gamesResult.pc === 'scissors' && gamesResult.you === 'rock')
    ) {
        scoreYou.textContent++;
        resultTable.textContent = 'YOU WIN!';
    } else if (
        (gamesResult.pc === 'scissors' && gamesResult.you === 'paper') ||
        (gamesResult.pc === 'paper' && gamesResult.you === 'rock') ||
        (gamesResult.pc === 'rock' && gamesResult.you === 'scissors')
    ) {
        scorePc.textContent++;
        resultTable.textContent = 'PC WIN!';
    }
}

//Game
function game() {
    if (gamesResult.you !== '') {
        pcChoice();
        result();
    } else {
        alert('You have to choose!');
    }
    hands.forEach((el) => el.classList.remove('active'));
    gamesResult.you = '';
}

//Reset
function resetGame() {
    scorePc.textContent = 0;
    scoreYou.textContent = 0;
    pcHand.classList = 'fa-solid fa-question';
    resultTable.textContent = 'Play now again!';
}

//Menu
const toggleActive = () => {
    hiddenMenu.classList.toggle('active');
    exit.classList.toggle('active');
    bars.classList.toggle('active');
    gamesResult.you = '';
    gamesResult.pc = '';
};

//Listeners
hands.forEach((el) => el.addEventListener('click', yourChoice));
btnPlay.addEventListener('click', game);
reset.addEventListener('click', resetGame);

bars.addEventListener('click', toggleActive);
exit.addEventListener('click', toggleActive);
