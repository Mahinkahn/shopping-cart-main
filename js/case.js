function updateCaseNumber(isIncrease) {
    const casrNumberField = document.getElementById('case-number-field');
    const casrNumberString = casrNumberField.value;
    const previousCasrNumber = parseInt(casrNumberString);

    let newCasrNumber;
    if (isIncrease) {
        newCasrNumber = previousCasrNumber + 1;
    }

    else {
        newCasrNumber = previousCasrNumber - 1;
    }
    casrNumberField.value = newCasrNumber;

    return newCasrNumber;
}

function updateCasePrice(newCasrNumber) {
    const caseTotalPrice = newCasrNumber * 59;
    const caseTotalElement = document.getElementById('cares-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-casr-plus').addEventListener('click', function () {
    const newCasrNumber = updateCaseNumber(true);

    updateCasePrice(newCasrNumber);
    calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCasrNumber = updateCaseNumber(false);

    updateCasePrice(newCasrNumber);
    calculateSubTotal()
})