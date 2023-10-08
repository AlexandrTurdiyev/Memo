const creatorForm = document.querySelector('.commit-creator__form'),
    gitCommitMSwitchInput = document.getElementById('gitcommitm'),
    commitTypeInput = document.getElementById('committype'),
    commitTextInput = document.getElementById('committext'),
    currentTimeInput = document.getElementById('current-time-input');

const btnGetTime = document.getElementById('gettime'),
    btnCreateCommit = document.getElementById('createCommitText');

let gitCommitM = "",
    gitCommitType = "",
    gitCommitText = "",
    gitCommitTime = "";

let currentDate = getDate();

console.log(currentDate);
console.log(
    creatorForm,
    gitCommitMSwitchInput,
    commitTypeInput,
    commitTextInput,
    currentTimeInput,
    btnGetTime,
    btnCreateCommit
)

/* FUNCTIONS */
function getInputText (input) {
    return input.value;
}

function getDate () {
    return new Date();
}
getDate();

function customAddEventListener(element, eventType, callback) {
    if (element && typeof element.addEventListener === 'function') {
        element.addEventListener(eventType, callback);
    } else {
        console.error('Неверный элемент или метод addEventListener не поддерживается');
    }
}
/* FUNCTIONS [end] */

/* LISTENERS */
/* отключить перезагрузку страницы при отправке формы */
creatorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    gitCommitM = gitCommitMSwitchInput.checked;
    console.log(gitCommitM);
    gitCommitType = getInputText(commitTypeInput);
    console.log(gitCommitType);
    gitCommitText = getInputText(commitTextInput);
    console.log(gitCommitText);
    gitCommitTime = getInputText(currentTimeInput);
    console.log(gitCommitTime);
})
/* отключить перезагрузку страницы при отправке формы [end] */

btnGetTime.addEventListener('click', () => {
    currentTimeInput.value = getDate();
})

customAddEventListener(commitTypeInput, 'input', () => {
    
})

/* LISTENERS [end] */