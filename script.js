function generateBMI(beratBadan, tinggiBadan) {
    let tinggiBadanM = tinggiBadan / 100
    let bmi = (beratBadan / (tinggiBadanM * tinggiBadanM))
    return +bmi.toFixed(2)
}
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
    } else if (gender === 'Wanita') {
        result = ((tinggi - 100) - ((tinggi - 100) * (15 / 100)))
    }
    return result
}

function idealBMIRange(tinggi) {
    let min = 18;
    let max = 25;

    return [(tinggi * tinggi * min / 10000), (tinggi * tinggi * max / 10000)]
}
function generatedCalorie(gender, tinggi, beratBadan, usia, aktivitas) {
    let result;
    let temp = 0
    let totalKalori = 0
    if (gender === 'Male') {
        temp = 66.5 + (13.7 * beratBadan) + (5 * tinggi) - (6.8 * usia)
    } else if (gender === "Female") {
        temp = 65.5 + (9.6 * beratBadan) + (1.8 * tinggi) - (4.7 * usia)
    }
    if (aktivitas === 'Tidak Pernah Berolahraga') {
        totalKalori = temp * 1.2
    } else if (aktivitas === 'Jarang Berolahraga') {
        totalKalori = temp * 1.3
    } else if (aktivitas === 'Sering Berolahraga') {
        totalKalori = temp * 1.4
    }
    result = Math.floor(totalKalori)

    return result
}

function recommendedCalorie(BMI, cal) {

    let kaloriIdealPelan;
    let kaloriIdealDrastis;
    let result = []
    if (BMI >= 25) {

        kaloriIdealPelan = cal * 0.9;
        kaloriIdealDrastis = cal * 0.7;
        kaloriIdealPelan = kaloriIdealPelan.toFixed(1)
        kaloriIdealDrastis = kaloriIdealDrastis.toFixed(1)
    }
    else if (BMI <= 18) {
        kaloriIdealPelan = cal * 1.1;
        kaloriIdealDrastis = cal * 1.3;
        kaloriIdealPelan = kaloriIdealPelan.toFixed(1)
        kaloriIdealDrastis = kaloriIdealDrastis.toFixed(1)
    }


    if (kaloriIdealPelan < 1000) {
        kaloriIdealPelan = 1000;
    }

    if (kaloriIdealDrastis < 1000) {
        kaloriIdealDrastis = 1000;
    }

    result.push(kaloriIdealPelan, kaloriIdealDrastis)

    return result
}

function WHtR(waist, height) {
    let Whtr = waist / height * 100

    return Whtr
}

function bodyFatPercentage(gender, height, waist) {

    let bodyFatPercentage = 0
    if (gender === 'Male') {
        bodyFatPercentage = 64 - (20 * height / waist)
    } else if (gender === 'Female') {
        bodyFatPercentage = 76 - (20 * height / waist)
    }

    if( +bodyFatPercentage < 0)
    {
        bodyFatPercentage = 0;
    }
    
    return +bodyFatPercentage.toFixed(2)
}

function generatedCategoryBodyFat(gender, num){
    if(gender ==='Male'){
        if(num >= 0 && num <= 17){
            return 'ATHLETIC'
        }else if(num >= 18 && num <= 24){
            return 'STANDARD'
        }else if(num > 25){
            return 'OBESITY'
        }
    }else if(gender === 'Female'){
    }if(num >= 0 && num <= 20){
        return 'ATHLETIC'
    }else if(num >= 25 && num <= 31){
        return 'STANDARD'
    }else if(num > 32){
        return 'OBESITY'
    }
}
// KALO MAU NAMBAH CELEB MASUKIN KESINI, PASTIKAN NAMANYA SAMA DENGAN FILE PNG YAHHHH (huruf besar, huruf kecil dan spasi)

const celebrityList = {
    Female: [
        { name: 'Anne Hathaway', weight: 59, height: 173 },
        { name: 'Amy Adams', weight: 52, height: 163 },
        { name: 'Angelina Jolie', weight: 59, height: 169 },
        { name: 'Beyonce', weight: 59, height: 170 },
        { name: 'Cameron Diaz', weight: 56, height: 174 },
        { name: 'Natalie Portman', weight: 52, height: 160 },
        { name: 'Emma Watson', weight: 50, height: 165 },
        { name: 'Adele Laurie Blue Adkins', weight: 63, height: 175 },
        { name: 'Serena Williams', weight: 75, height: 175 },
        { name: 'Ronda Rousey', weight: 61, height: 170 },
        { name: 'Queen Latifah', weight: 91, height: 178 }
    ], Male: [
        { name: 'Tom Cruise', weight: 83, height: 170 },
        { name: 'Arnold Schwarzenegger ', weight: 120, height: 187 },
        { name: 'Russel Crowe', weight: 105, height: 182 },
        { name: 'Gerard Butler', weight: 102, height: 188 },
        { name: 'Dwayne Johnson', weight: 118, height: 196 },
        { name: 'Tom Holland', weight: 70, height: 173 },
        { name: 'Robert Downey Jr.', weight: 86, height: 173 },
        { name: 'Chris Evans', weight: 85, height: 183 },
        { name: 'Jack Black', weight: 120, height: 168 },
        { name: 'Peter Dinklage', weight: 50, height: 135 },
        { name: 'Yoda', weight: 13, height: 66 },
        { name: 'Min Yoon-Gi (BTS Suga)', weight: 59, height: 174 },
        { name: 'Park Jimin (BTS Jimin)', weight: 61, height: 175 },
        { name: 'Jungkook (BTS Jungkook)', weight: 70, height: 178 },
        { name: 'Benedict Cumberbatch', weight: 78, height: 183 },
    ]
}



function celebrityBMI(gender) {
    let result = [];
    let tempArray = [];
    for (const key in celebrityList) {
        if (key === gender) {
            for (let i = 0; i < celebrityList[gender].length; i++) {
                var celebBMI = generateBMI(celebrityList[gender][i].weight, celebrityList[gender][i].height)
                tempArray.push(celebrityList[gender][i].name, celebBMI)
                result.push(tempArray)
                tempArray = [];
            }
        }


    }
    return result;
}

function similarCeleb(BMI, genderedCelebBMI) {
    let randomCelebCount = 2;
    let result = [];


    for (let i = 0; i < genderedCelebBMI.length; i++) {

        let BMIDifference = Math.abs(BMI - genderedCelebBMI[i][1])

        if (BMIDifference <= 1) {
            result.push(genderedCelebBMI[i])
        }

    }

    let randomNumber = Math.floor(Math.random() * result.length);


    return result[randomNumber];
}

// FUNCTION DIBAWAH JANGAN DIGANTI GANTI URUTANNYA TAKUTNYA RUSAK

function process() {


    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let gender = document.getElementById('gender').value;


    if (weight == '' || height == '') {
        Swal.fire({
            title: 'ada yang salah!',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if (isNaN(Number(weight)) || isNaN(Number(height))) {
        Swal.fire({
            title: 'Numbers only please',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else {
        let BMI = generateBMI(weight, height);
        let BMICategory = generatedCategoryBMI(BMI);
        let idealWeight = generatedIdealWeight(gender, height)
        let idealBMIValues = idealBMIRange(height);

        if (BMI < 0) {
            BMI = 0;
        }

        if (BMI > 40) {
            BMI = 40;
        }

        let genderedCelebBMI = celebrityBMI(gender);
        let celebFriend = similarCeleb(BMI, genderedCelebBMI);

        document.getElementById('outputContent1').innerHTML = `BMI KAMU ADALAH`
        document.getElementById('outputContent2').innerHTML = BMI;
        document.getElementById('outputContent3').innerHTML = `biasa dikategorikan sebagai <b> ${BMICategory}. <b>`
        document.getElementById('outputContent4').innerHTML = `Menurut index BMI, rekomenasi berat badan yang sehat untuk kamu adalah`
        document.getElementById('outputContent5').innerHTML = `${Math.floor(idealBMIValues[0])} kg - ${Math.floor(idealBMIValues[1])} kg`
        document.getElementById('outputContent6').innerHTML = `BMI kamu mirip dengan selebriti... <b> ${celebFriend[0]}<b> <br> <img src="./celebrity/${gender}/${celebFriend[0]}.PNG" width="256" height ="256">`
    }
}

function cleanSlate() {

    document.getElementById('outputContent1').innerHTML = '';
    document.getElementById('outputContent2').innerHTML = '';
    document.getElementById('outputContent3').innerHTML = '';
    document.getElementById('outputContent4').innerHTML = '';
    document.getElementById('outputContent5').innerHTML = '';
}

// buat mangil BMI section
function activateBMI() {
    document.getElementById('formPage').innerHTML = `
     <form method="post" id="myForm" target="script.js">
     <table style="width:100%">
     <tr> 
         <td> <h6>Gender:</h6> </td> 
     </tr>
    <tr> 
        <td> <select for="gender" style="width: 90%"> 
             <option value="Male" id="gender">Male</option>
             <option value="Female" id="gender">Female</option>
            </select> 
     </td> 
     </tr>
     <tr>
         <td>  <h6>Weight: (kg) </h6> </td>
         <td>  <h6>Height: (cm) </h6> </td>
     </tr>
     <tr>
         <td> <input class="numberInput" id="weight" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your weight (number)" title="Please input numbers only"> </td>
         <td> <input class="numberInput" id="height" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your height (number)" title="Please input numbers only"> </td>
     </tr>
     <tr>
         <td> <h6>Activity level :</h6> </td>
         <td> <h6>Age: </h6> </td>
     </tr>
      <tr>
          <td> <select id="activityLevel" for="activityLevel" style="width: 90%"> Choose your activity level: 
             <option value="Tidak Pernah Berolahraga"> Tidak pernah berolahraga </option>
             <option value="Jarang Berolahraga"> Jarang berolahraga </option>
             <option value="Sering Berolahraga"> Sering berolahraga </option> 
         </select> </td>
         <td> <input class="numberInput" id="age" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your age (number)" title="Please input numbers only"></td> 
     </tr>
     </table>
 </div>
 <div class="buttons">
     <table style="width:100%">
         <tr>
             <td> <button  type="button" onclick="process()" class="button" id="left">  Calculate your BMI  </button> </td>
             <td>  <button  type="reset" onclick="cleanSlate()" class="button"id="right" >   reset </button>  </td>
         </tr>
     </table>
 </div> 
 <div class="output">
 <p id="outputContent1"> </p>
 <p id="outputContent2"> </p>
 <p id="outputContent3"> </p>
 <p id="outputContent4"> </P>
 <p id="outputContent5"> </p>
 <p id="outputContent6"> </p>
 </div>
`
}

// buat mangil Calorie section
function activateCalorie() {


    document.getElementById('formPage').innerHTML = `
    <form method="post" id="myForm" target="script.js">
                    <table style="width:100%">
                    <tr> 
                        <td> <h6>Gender:</h6> </td> 
                    </tr>
                   <tr> 
                       <td> <select for="gender" style="width: 90%"> 
                            <option value="Male" id="gender">Male</option>
                            <option value="Female" id="gender">Female</option>
                           </select> 
                    </td> 
                    </tr>
                    <tr>
                        <td>  <h6>Weight: (kg) </h6> </td>
                        <td>  <h6>Height: (cm) </h6> </td>
                    </tr>
                    <tr>
                        <td> <input class="numberInput" id="weight" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your weight (number)" title="Please input numbers only"> </td>
                        <td> <input class="numberInput" id="height" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your height (number)" title="Please input numbers only"> </td>
                    </tr>
                    <tr>
                        <td> <h6>Activity level :</h6> </td>
                        <td> <h6>Age: </h6> </td>
                    </tr>
                     <tr>
                         <td> <select id="activityLevel" for="activityLevel" style="width: 90%"> Choose your activity level: 
                            <option value="Tidak Pernah Berolahraga"> Tidak pernah berolahraga </option>
                            <option value="Jarang Berolahraga"> Jarang berolahraga </option>
                            <option value="Sering Berolahraga"> Sering berolahraga </option> 
                        </select> </td>
                        <td> <input class="numberInput" id="age" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your age (number)" title="Please input numbers only"></td> 
                    </tr>
                    </table>
                </div>
                <div class="buttons">
                    <table style="width:100%">
                        <tr>
                            <td> <button  type="button" onclick="calorieCalculation()" class="button" id="left">  Calculate your BMR  </button> </td>
                            <td>  <button  type="reset" onclick="cleanSlate()" class="button"id="right" >   reset </button>  </td>
                        </tr>
                    </table>
                </div> 
                <div class="output">
                <p id="outputContent1"> </p>
                <p id="outputContent2"> </p>
                <p id="outputContent3"> </p>
                <p id="outputContent4"> </P>
                <p id="outputContent5"> </p>
                <p id="outputContent6"> </p>
                </div>
`
}


function generatedBf() {


    document.getElementById('formPage').innerHTML = `
    <form method="post" id="myForm" target="script.js">
                    <table style="width:100%">
                    <tr> 
                        <td> <h6>Gender:</h6> </td> 
                    </tr>
                   <tr> 
                       <td> <select for="gender" style="width: 90%"> 
                            <option value="Male" id="gender">Male</option>
                            <option value="Female" id="gender">Female</option>
                           </select> 
                    </td> 
                    </tr>
                    <tr>
                        <td>  <h6>Weight: (kg) </h6> </td>
                        <td>  <h6>Height: (cm) </h6> </td>
                    </tr>
                    <tr>
                        <td> <input class="numberInput" id="weight" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your weight (number)" title="Please input numbers only"> </td>
                        <td> <input class="numberInput" id="height" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your height (number)" title="Please input numbers only"> </td>
                    </tr>
                    <tr>
                        <td> <h6>Activity level :</h6> </td>
                        <td> <h6>Waist: (cm) </h6> </td>
                    </tr>
                     <tr>
                         <td> <select id="activityLevel" for="activityLevel" style="width: 90%"> Choose your activity level: 
                            <option value="Tidak Pernah Berolahraga"> Tidak pernah berolahraga </option>
                            <option value="Jarang Berolahraga"> Jarang berolahraga </option>
                            <option value="Sering Berolahraga"> Sering berolahraga </option> 
                        </select> </td>
                        <td> <input class="numberInput" id="waist" type="number" style="width: 90%" pattern="[0-9]" required placeholder="Enter your waist size(number)" title="Please input numbers only"></td> 
                    </tr>
                    </table>
                </div>
                <div class="buttons">
                    <table style="width:100%">
                        <tr>
                            <td> <button  type="button" onclick="bodyFatCalculation()" class="button" id="left">  Calculate your BF%  </button> </td>
                            <td>  <button  type="reset" onclick="cleanSlate()" class="button"id="right" >   reset </button>  </td>
                        </tr>
                    </table>
                </div> 
                <div class="output">
                <p id="outputContent1"> </p>
                <p id="outputContent2"> </p>
                <p id="outputContent3"> </p>
                <p id="outputContent4"> </P>
                <p id="outputContent5"> </p>
                <p id="outputContent6"> </p>
                </div>
`
}

function information() {


    document.getElementById('formPage').innerHTML = ` <div class="informasi">
    <h3 class="informationh3">Informasi</h3>
    <h5 class="informationh5">Pengertian BMI</h5>
    <p class="informationP">Body Mass Index (BMI) atau Indeks Massa Tubuh (IMT) adalah angka yang menjadi penilaian standar untuk menentukan apakah berat badan Anda tergolong normal, kurang, berlebih, atau obesitas.</p>
    <p class="informationP">Rumus yang digunakan adalah BMI = Berat Badan / (Tinggi Badan)^2 </p>

    <h5 class="informationh5">Pengertian BMR</h5>
    <p class="informationP"> BMR atau laju metabolisme basal adalah perkiraan jumlah energi yang digunakan untuk menjalankan fungsi dasar tubuh dalam kondisi istirahat.</p>
    <p class="informationP">Rumus yang digunakan untuk menghitung BMR pada pria dan wanita dapat diketahui dengan rumus berikut.</p>
    <ul class="Rumus">
         <li>BMR Pria = 66,5 + (13,7 × berat badan) + (5 × tinggi badan) – (6,8 × usia)</li>
         <li>BMR Wanita = 65,5 + (9,6 × berat badan) + (1,8 × tinggi badan) – (4,7 × usia)</li>
    </ul>

    <h5 class="informationh5">Pengertian Body Fat Percentage</h5>
    <p class="informationP">Body Fat Percentage adalah rasio antara lemak tubuh terhadap total berat tubuh.</p>
    <p class="informationP">Rumus yang digunakan untuk menghitung Body Fat Percentage pada pria dan wanita dapat diketahui dengan rumus berikut.</p>
    <ul class="Rumus">
     <li>Body Fat Pria = 64 – (20 x tinggi/lingkar pinggang)</li>
     <li>Body Fat Wanita = 76 – (20 x tinggi/lingkar pinggang)</li>
</ul>
</div>`
}


function resetEverything() {
    document.getElementById('formPage').innerHTML = `
    <div id="formpageh1"> 
                    <h1> PICK A FUNCTION </h1>
                    <br>
                    <h3> proudly presented by:</h3>
                    <h5><ul>
                        <li style="font-style: italic"> Ezar Resha</li>
                        <li> Awalludin</li>
                        <li> Arizal Fikri </li>
                        <li> Putra Ahmadani Pratikto </li>
                        <li> Ivan Richmond</li>
                    </ul> </h5>
                </div>`
}

function calorieCalculation() {

    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let gender = document.getElementById('gender').value;
    let age = +document.getElementById('age').value;
    let activityLevel = document.getElementById('activityLevel').value;

    if (weight == '' || height == '' || age == '') {
        Swal.fire({
            title: 'ada yang salah!',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if (isNaN(Number(weight)) || isNaN(Number(height)) || isNaN(Number(age))) {
        Swal.fire({
            title: 'Numbers only please',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else {
        let calculatedCalories = generatedCalorie(gender, height, weight, age, activityLevel);
        let BMI = generateBMI(weight, height);
        let calorieReccomendation = recommendedCalorie(BMI, calculatedCalories)


        document.getElementById('outputContent1').innerHTML = `YOUR BASAL METABOLISM RATE IS:`
        document.getElementById('outputContent2').innerHTML = `${calculatedCalories} calories.`
        if (BMI <= 18) {
            document.getElementById('outputContent3').innerHTML = `The reccomended calorie intake for weight gain is ${calorieReccomendation[0]} , up to ${calorieReccomendation[1]} .`
        }
        else if (BMI >= 25) {
            document.getElementById('outputContent3').innerHTML = `The reccomended calorie intake for weight loss is ${calorieReccomendation[0]} , up to ${calorieReccomendation[1]} .`
        }



    }
}


function bodyFatCalculation() {

    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let gender = document.getElementById('gender').value;
    let waist = +document.getElementById('waist').value;
    let activityLevel = document.getElementById('activityLevel').value;

    if (weight == '' || height == '' || waist == '') {
        Swal.fire({
            title: 'ada yang salah!',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else if (isNaN(Number(weight)) || isNaN(Number(height)) || isNaN(Number(waist))) {
        Swal.fire({
            title: 'Numbers only please',
            text: 'tolong masukkan angka',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
    else {
        let calculateBodyFat = bodyFatPercentage(gender, height, waist);
        let bodyFatCategory = generatedCategoryBodyFat(gender, calculateBodyFat)


        document.getElementById('outputContent1').innerHTML = `BODY FAT % KAMU ADALAH:`
        document.getElementById('outputContent2').innerHTML = `${calculateBodyFat}%`
        document.getElementById('outputContent3').innerHTML = `Bisa dikategorikan sebagai : <b> ${bodyFatCategory} <b> .`
}

}