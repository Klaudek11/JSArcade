const bars = document.querySelector('.fa-bars');
const hiddenMenu = document.querySelector('.side-menu');
const exit = document.querySelector('.fa-x');

const scorePc = document.querySelector('div.score span.pc');
const scoreYou = document.querySelector('div.score span.you');

const pcHand = document.querySelector('div.computer-choice i');

const resultTable = document.querySelector('div.result span.result');

const hands = [...document.querySelectorAll('div.game-panel i')];

const btnPlay = document.querySelector('div.play');

const rockPaperScissors = {
    rock: 'fa-solid fa-hand-back-fist',
    paper: 'fa-solid fa-hand',
    scissors: 'fa-solid fa-hand-scissors',
};

const gamesResult = {
    pc: 'result',
    you: 'result',
};

//Game
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

function result() {
    if (gamesResult.pc === gamesResult.you) {
        scorePc.textContent++;
        scoreYou.textContent++;
        resultTable.textContent = 'REMIS!'
    } else if (
        (gamesResult.pc === 'paper' && gamesResult.you === 'scissors') ||
        (gamesResult.pc === 'rock' && gamesResult.you === 'paper') ||
        (gamesResult.pc === 'scissors' && gamesResult.you === 'rock')
    ) {
        scoreYou.textContent++;
        resultTable.textContent = 'YOU WIN!'
    } else if (
        (gamesResult.pc === 'scissors' && gamesResult.you === 'paper') ||
        (gamesResult.pc === 'paper' && gamesResult.you === 'rock') ||
        (gamesResult.pc === 'rock' && gamesResult.you === 'scissors')
    ) {
        scorePc.textContent++;
        resultTable.textContent = 'PC WIN!'
    }
}

function game() {
    pcChoice();
    result();
    hands.forEach((el) => el.classList.remove('active'));
}

//Menu

const toggleActive = () => {
    hiddenMenu.classList.toggle('active');
    exit.classList.toggle('active');
    bars.classList.toggle('active');
};

//Listeners
hands.forEach((el) => el.addEventListener('click', yourChoice));

btnPlay.addEventListener('click', game);
bars.addEventListener('click', toggleActive);
exit.addEventListener('click', toggleActive);
