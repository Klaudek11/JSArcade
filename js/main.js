// const arcadeTitle = ['ARCADE'];

const bars = document.querySelector('.fa-bars');
const hiddenMenu = document.querySelector('.side-menu');
const exit = document.querySelector('.fa-x');
const playBtn = document.getElementById('play');
const gamesSection = document.getElementById('games');
const h1Title = document.querySelector('title');

const toggleActive = () => {
    hiddenMenu.classList.toggle('active');
    exit.classList.toggle('active');
    bars.classList.toggle('active');
};

bars.addEventListener('click', toggleActive);

exit.addEventListener('click', toggleActive);

playBtn.addEventListener('click', function () {
    gamesSection.scrollIntoView();
});
