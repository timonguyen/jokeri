const newRowButton = document.getElementById('newRowButton');
const table = document.getElementById('jokerTable');
const readyRowsText = document.getElementById('readyRowsText');

let readyRowCount = 0;

newRowButton.addEventListener('click', generateNewRow);

function generateNewRow() {
    const newRow = generateRandomNumbers(7);

    const row = table.insertRow();
    for (const number of newRow) {
        const cell = row.insertCell();
        cell.textContent = number;
        cell.classList.add('number-box');
    }

    updateReadyRowCount();
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

function updateReadyRowCount() {
    readyRowCount++;
    readyRowsText.textContent = `Valmiita rivejä ${readyRowCount}`;
}