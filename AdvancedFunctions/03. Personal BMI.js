function personalBMI(name, age, weight, height) {
    const person = {};

    person.name = name;
    person.personalInfo = {age: age, weight: weight, height: height};
    person.BMI = calculateBMI(age, weight, height);
    person.status = setStatus(person.BMI);

    if (person.status === 'obese') {
        person.recommendation = 'admission required'
    }

    function calculateBMI(age, weight, height) {
        return Math.round(weight / ((height / 100) ** 2))
    }

    function setStatus(BMI) {
        if (BMI < 18.5) return 'underweight';
        if (BMI < 25.0) return 'normal';
        if (BMI < 30.0) return 'overweight';
        if (BMI >= 30.0) return 'obese';
    }

    return person;
}

console.log(personalBMI('Tsetso', 33, 79, 173));