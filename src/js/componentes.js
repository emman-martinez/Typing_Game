import './../css/componentes.css';
/* DOM */
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [ /* LIST OF WORDS FOR GAME  */
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];
/* Init Word */
let randomWord;
/* Init Score */
let score = 0;
/* Init Time */
let time = 10;
/* GET RANDOM WORD */
const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};
/* ADD WORD TO DOM */
const addWordToDOM = () => {
    randomWord = getRandomWord();
    word.innerText = randomWord;
};
/* UPDATE SCORE */
const updateScore = () => {
    score++;
    scoreEl.innerHTML = score;
};
/* ************************************************************ */
const eventos = () => {
    console.log('Event Listeners');
    text.addEventListener('input', (e) => {
        const insertedText = e.target.value;
        if (insertedText === randomWord) {
            addWordToDOM();
            updateScore();
            // Clear
            e.target.value = '';
        }
    });
};
/* ************************************************************ */
const init = () => {
    console.log('Typing Game');
    addWordToDOM();
    eventos();
};
/* ************************************************************ */
export {
    init
}