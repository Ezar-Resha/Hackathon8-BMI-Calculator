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

