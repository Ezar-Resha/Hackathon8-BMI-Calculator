function generatedBMI(beratBadan, tinggiBadan) {
    let tinggiBadanM = tinggiBadan / 100
    let bmi = (beratBadan / (tinggiBadanM * tinggiBadanM))
    return bmi
}
console.log(generatedBMI(70, 175))

function generatedCategoryBMI(bmi) {
    let result = ''
    if (bmi < 16.00) {
        result = 'Sangat Kurus'
    } else if (bmi >= 16.00 && bmi <= 16.99) {
        result = 'Kurus'
    } else if (bmi >= 17.00 && bmi <= 18.49) {
        result = 'Agak Kurus'
    } else if (bmi >= 18.50 && bmi <= 24.99) {
        result = 'Normal'
    } else if (bmi >= 25 && bmi <= 29.99) {
        result = 'Pra-Obesitas'
    } else if (bmi >= 30 && bmi <= 34.99) {
        result = 'Obesitas Kelas I'
    } else if (bmi >= 35 && bmi <= 39.99) {
        result = 'Obesitas Kelas II'
    } else if (bmi >= 40) {
        result = 'Obesitas kelas III'
    }
    return result
}

function generatedIdealWeight(gender, tinggi) {
    let result = 0

    if (gender === 'Pria') {
        result = ((tinggi - 100) - ((tinggi - 100) * (10 / 100)))
    }else if(gender === 'Wanita'){
        result = ((tinggi - 100) - ((tinggi - 100) * (15 / 100)))
    }
    return result
}

function generatedCalory(gender, tinggi, beratBadan, usia, aktivitas){
    let result = ''
    let temp = 0
    let totalKalori = 0
    if(gender === 'Pria'){
        temp = 66.5 + (13.7 * beratBadan) + (5 * tinggi) - (6.8 * usia)
    }else if(gender === "Wanita"){
        temp = 65.5 + (9.6 * beratBadan) + (1.8 * tinggi) - (4.7 * usia)
    }
    if(aktivitas ==='Tidak Pernah Berolahraga'){
        totalKalori = temp * 1.2
    }else if(aktivitas ==='Jarang Berolahraga'){
        totalKalori = temp * 1.3
    }else if (aktivitas ==='Sering Berolahraga'){
        totalKalori = temp * 1.4
    }
    result = `${Math.floor(totalKalori)} Kalori`
    return result
}
console.log(generatedCalory('Pria', 165, 65, 29, 'Jarang Berolahraga'))

// Input dari HTML

let gender = 'Pria';
let age = 30;
let height = 150;
let weight = 50;
let activityLevel = 'Sering Berolahraga';
console.log(generatedBMI(weight,height))
let BMI = generatedBMI(weight,height);
console.log (`==============================`)
console.log (generatedCategoryBMI(BMI))
console.log (`==============================`)
let idealWeight = generatedIdealWeight(gender,height)  // explore more "ideal BMI".
let idealBMI = generatedBMI(idealWeight,height)

console.log(idealBMI)
console.log(generatedCalory(gender, height, weight, age, activityLevel)) 

// kalo BMI > ideal BMI kita kasih saran menurunkan kalori intake ( menurunkan berat badan)
// kalo BMI < ideal BMI kita kasih saran untuk menaikan.
// naik pelan2 * 1.1,
// naik drastis * 1.3,
// turun * 0.9
// turn drastis * 0.7 
// batas minimum 1000kcal buat 2-2nya. >>>> jadi kalo rekomendasi intake kalori dibawah 1000, dijadikan 1000.

console.log(BMI);
console.log(idealBMI);

let cal = generatedCalory(gender, height, weight, age, activityLevel);
let kaloriIdealPelan = 0;
let kaloriIdealDrastis = 0;

if (BMI > idealBMI) {
    kaloriIdealPelan = cal * 0.9;
    kaloriIdealDrastis = cal * 0.7;
} else if (BMI < idealBMI) {
    kaloriIdealPelan = cal * 1.1;
    kaloriIdealDrastis = cal * 1.3;
}


if (kaloriIdealPelan < 1000) {
    kaloriIdealPelan = 1000;
}

if (kaloriIdealDrastis < 1000) {
    kaloriIdealDrastis = 1000;
}

console.log(kaloriIdealPelan);
console.log(kaloriIdealDrastis);

function WHtR(waist, height){
    let Whtr = waist / height * 100

    return Whtr
}

function bodyFatPercentage(gender, weight, waist){
    let weightLbs = weight * 2.20462262
    let waistIn = waist * 0.39370079
    let bodyFatPercentage = 0
    if(gender ==='Pria'){
        bodyFatPercentage = 100*(-98.42 + (4.15*waistIn) - (0.082*weightLbs))/weightLbs
    }else if(gender ==='Wanita'){
        bodyFatPercentage = 100*(-76.76 + (4.15*waistIn) - (0.082*weightLbs))/weightLbs
    }
    return bodyFatPercentage
}
