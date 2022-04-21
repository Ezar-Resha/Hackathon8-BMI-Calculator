const celebrityList = { Female:[
    {name:'Anne Hathaway',weight:59, height:173},
    {name:'Amy Adams', weight:52, height:163},
    {name:'Angelina Jolie', weight:59, height:169},
    {name:'Beyonce', weight:59, height:170},
    {name:'Cameron Diaz', weight:56, height:174},
    {name:'Natalie Portman', weight:52, height:160},
    {name:'Emma Watson', weight:50, height:165},
    {name:'Adele Laurie Blue Adkins', weight: 63, height:175},
    {name:'Serena Williams', weight:75, height:175},
    {name:'Ronda Rousey', weight:61 ,height:170},
    {name: 'Queen Latifah', weight:91 ,height:178}
], Male:[
    {name: 'Tom Cruise', weight:83, height:170},
    {name: 'Arnold Schwarzenegger ', weight:120, height:187},
    {name: 'Russel Crowe', weight:105 ,height:182},
    {name: 'Gerard Butler', weight:102 ,height:188},
    {name: 'Dwayne Johnson', weight:118, height:196},
    {name: 'Tom Holland', weight:70, height:173},
    {name: 'Robert Downey Jr.', weight:86, height:173},
    {name: 'Chris Evans', weight:85 ,height:183},
    {name: 'Jack Black', weight:120 ,height:168},
    {name: 'Peter Dinklage', weight:50 ,height:135},
    {name: 'Yoda', weight:13 ,height:66},
    {name: 'Min Yoon-Gi (BTS Suga)', weight:59 ,height:174},
    {name: 'Park Jimin (BTS Jimin)', weight:61 ,height:175},
    {name: 'Jungkook (BTS Jungkook)', weight:70 , height:178},
    {name: 'Benedict Cumberbatch', weight:78 ,height:183},
]
}

function generatedBMI(beratBadan, tinggiBadan) {
    let tinggiBadanM = tinggiBadan / 100
    let bmi = (beratBadan / (tinggiBadanM * tinggiBadanM))
    return +bmi.toFixed(3)
}

function celebrityBMI(gender) 
{
let result = [];
let tempArray = [];
for (const key in celebrityList)
{
    if (key === gender)
    {
        for (let i = 0; i <celebrityList[gender].length; i++)
        {
            var celebBMI = generatedBMI(celebrityList[gender][i].weight, celebrityList[gender][i].height)
        tempArray.push( celebrityList[gender][i].name , celebBMI)
        result.push(tempArray)
        tempArray = [];
        }
    }

    
}
return result;
}


function similarCeleb(BMI)
{
    let  randomCelebCount = 2;
    let  result = [];
    let genderedCelebBMI = celebrityBMI(gender);
    
     for ( let i=0; i< genderedCelebBMI.length; i++)
     {
        
         let BMIDifference = Math.abs(BMI - genderedCelebBMI[i][1]) 

         if(BMIDifference <= 1)
         {
             result.push(genderedCelebBMI[i])
         }

     }
    
     let randomNumber = Math.floor(Math.random() * result.length);
     

     return result[randomNumber];
}

 console.log (similarCeleb(BMI))