//Import the xlsx library
const XLSX = require('xlsx');

// Randomize demographic information

// Generate ages within the range of 18 to 55 years
function assignAge() {
    let randomInteger = Math.random() * (55 - 18 + 1) + 18;
    let age = Math.floor(randomInteger);
    return age;
}

// Generate realistic BMI that are neither associated with extreme underweight or extreme obese measurements
function assignBMI() {
    let num = Math.random();
    let number = num * (45 - 18.5) + 18;
    let BMINumber = number.toFixed(1);
    return BMINumber;
}

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
}

// Generate location type
function assignLocation() {
    const locationArray = ["urban", "suburban", "rural"];

    let localNum = Math.random() * 100;

    if (localNum <= 50) {
        return locationArray[0];
    } else if ((localNum > 50) && (localNum <= 85)) {
        return locationArray[1];
    } else {
        return locationArray[2];
    }

}

// Generate income levels
function assignIncome() {
    const incomeArray = ["low income", "mid income", "high income"];

    let incomeNum = Math.random().toFixed(2);

    if (incomeNum < 0.5) {
        return incomeArray[0]
    } else if ((incomeNum >= 0.5) && (incomeNum < 0.9)) {
        return incomeArray[1];
    } else {
        return incomeArray[2];
    }
}

//Generate synthetic data for a sample size of 200 participants
const data = [['Age', 'BMI', 'Ethnicity', 'Location', 'Income']];
for (let i = 0; i < 200; i++) {

    let age = assignAge();
    let bmi = assignBMI();
    let ethnicity = assignEthnicity();
    let location = assignLocation();
    let income = assignIncome();

    data.push([age, bmi, ethnicity, location, income]);
}

// Create a new workbook and export
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(data);
XLSX.utils.book_append_sheet(workbook, worksheet, 'Simulated Demographics Data');
XLSX.writeFile(workbook, 'simulated_demographics_data.xlsx');

