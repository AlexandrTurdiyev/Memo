const gitCommitMinusMCheckBox = document.querySelector(".create-commit__checkbox-input");
const gitCommitOptionSelector = document.querySelector(".create-commit__select-action");
const gitCommitTextInput = document.querySelector('.create-commit__text-input');
const refreshTimeBtn = document.querySelector(".create-commit__refresh-time-btn");
const timeInput = document.querySelector(".create-commit__time-input");
const commitOutput = document.querySelector('.create-commit__output-text');
const createCommitForm = document.querySelector('.create-commit__form');

let currentTime = new Date();
function refreshTime () {
    currentTime = new Date();
    return currentTime;
}

function importValueFromInputForm (input) {
    return input.value;
}

/* listeners */
refreshTimeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    timeInput.value = refreshTime();
})

createCommitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let gitCommitMinusMValue = gitCommitMinusMCheckBox.checked ? "git commit -m " : "";
    commitOutput.innerText = gitCommitMinusMValue
        + `'`
        + importValueFromInputForm(gitCommitOptionSelector)
        + ' '
        + importValueFromInputForm(gitCommitTextInput)
        + '; timecode: '
        +
        importValueFromInputForm(timeInput)
        + `'`;
})
/* listeners [end] */

/* debugging */
/* debugging [end] */

