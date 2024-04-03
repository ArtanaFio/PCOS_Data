// Randomize demographic information

let row;
let ethnicityCell;
const demographicTable = document.querySelector('table');

//Generate synthetic data for a sample size of 200 participants
for (let i = 0; i < 200; i++) {
    row = document.createElement('tr');
    demographicTable.appendChild(row);

    ageCell = document.createElement('td');
    ageCell.classList.add('age');

// Generate ages within the range of 18 to 55 years
    function assignAge() {
        let randomInteger = Math.floor(Math.random() * 100) + 18;
        if (randomInteger < 18) {
            return randomInteger;
        } else if ((randomInteger >= 18) && (randomInteger <= 55)) {
            return randomInteger;
        } else {
            return randomInteger - 55;
        }
    };
    ageCell.textContent = assignAge();
    row.appendChild(ageCell);

    BMICell = document.createElement('td');
    BMICell.classList.add('body-mass-index');

// Generate realistic BMI that are neither associated with extreme underweight or extreme obese measurements
    function assignBMI() {
        let randomNum = Math.random() * 100;
        let randomDecimal = Math.round(randomNum * 10) / 10;

        if (randomDecimal < 18.5) {
            randomDecimal += 15;
        } else if ((randomDecimal >= 18.5) && (randomDecimal < 45)) {
            return parseFloat(randomDecimal).toFixed(1);
        } else {
            randomDecimal -= 35;
        }

        let newDecimal = randomDecimal.toFixed(1);
        return parseFloat(newDecimal).toFixed(1);
    };
    BMICell.textContent = assignBMI();
    row.appendChild(BMICell);

    ethnicityCell = document.createElement('td');
    ethnicityCell.classList.add('ethnicity');

// Generate realistic occurrences of ethnicities within the DMV area based on a census of the Distric of Columbia
    function assignEthnicity() {
        const ethnicityArray = ["White", "Black", "Hispanic/Latino", "Asian", "Indigenous North American", "Pacific Islander", "Middle Eastern/North African", "Multiracial"];

        let randomNumber = Math.random() * 100;
        
        if (randomNumber <= 36.5) {
            return ethnicityArray[0];
        } else if ((randomNumber > 36.5 ) && (randomNumber <= 80.1)) {
            return ethnicityArray[1];
        } else if ((randomNumber > 80.1) && (randomNumber <= 91.8)) {
            return ethnicityArray[2];
        } else if ((randomNumber > 91.8) && (randomNumber <= 95.7)) {
            return ethnicityArray[3];
        } else if ((randomNumber > 95.7) && (randomNumber <= 96.4)) {
            return ethnicityArray[4];
        } else if ((randomNumber > 96.4) && (randomNumber <= 96.6)) {
            return ethnicityArray[5];
        } else if ((randomNumber > 96.6) && (randomNumber <= 96.8)) {
            return ethnicityArray[6];
        } else {
            return ethnicityArray[7];
        }
    };
    ethnicityCell.textContent = assignEthnicity();
    row.appendChild(ethnicityCell);
}
