let totalPerson = document.querySelector(".total-amount");
let personTip = document.querySelector(".tip-amount");
let inputsFields = document.querySelector('.input-tip').querySelectorAll('input');

const custom = document.getElementById('custom')



inputsFields.forEach(element => {
    element.addEventListener('click', function () {
        inputsFields.forEach(input => input.classList.remove('active'));
        this.classList.add('active');
    });
});




function calculateTip(percentage) {
    let billAmount = parseInt(document.getElementById("bill").value);
    let numberOfPeoples = parseInt(document.getElementById("people").value);
    let custom = document.getElementById("custom").value;
    if (billAmount < 1) {
        alert("Please, enter a valid amount > $1.00");
    };

    if (numberOfPeoples < 1) {
        alert("Please, enter a valid amount of persons");
        return;
    };
    if(percentage === undefined){
        percentage = custom;
    }

    let totalTip = (billAmount * percentage) / numberOfPeoples;
    let personTotal = totalTip + billAmount / numberOfPeoples;

    totalPerson.innerHTML = `${personTotal.toFixed(2)}`;
    personTip.innerHTML = `${totalTip.toFixed(2)}`;

    function reset() {
        window.location.reload();
    }
}