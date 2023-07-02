// const urlCountry ='https://restcountries.com/v3.1/all';

// const urlBank = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';


// let rates = await fetch(urlBank);
//     rates = await rates.json();

//     // rates = rates.results;
// console.log(rates[24].r030);



// let country = await fetch(urlCountry);
//     country = await country.json();   
    
//     // country = country.results;

// console.log(country[224].ccn3);



// let infoClass = document.getElementById('info');

// console.log(infoClass);



// const totalInfo = rates.concat(country);

// console.log(totalInfo);

// for(let tag of totalInfo){

//     if(rates[tag.r030] === country[tag.ccn3]){
//         infoClass.innerHTML = totalInfo.map(item =>`
//         <div class="card border rounded-4 border-3 border-secondary p-3 m-3">
//             <p class="fs-4">Валюта: ${item.txt} (${item.cc})</p>
//             <p class="fs-4">Курс: ${item.rate}</p>
//             <p class="fs-4">Флаг:</p>
//             <img style="width:150px" src="${item.flags.png}" alt="...">
//         </div>
//         `).join('');
//     } else if(rates[tag.r030] != country[tag.ccn3]) {
//         infoClass.innerHTML = '...';
        
//     }
// }





// currencies









const urlCountry ='https://restcountries.com/v3.1/all';

const urlBank = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';


let rates = await fetch(urlBank);
    rates = await rates.json();

    // rates = rates.results;
console.log(rates[24].r030);



let country = await fetch(urlCountry);
    country = await country.json();   
    
    // country = country.results;

console.log(country[224].ccn3);



let infoClass = document.getElementById('info');

console.log(infoClass);

const totalInfo = rates.concat(country);

for(let tag of totalInfo){
    
    if(tag.r030 === tag.ccn3){
        infoClass.innerHTML = totalInfo.map(item =>`
        <div class="card border rounded-4 border-3 border-secondary p-3 m-3">
            <p class="fs-4">Валюта: ${item.txt} (${item.cc})</p>
            <p class="fs-4">Курс: ${item.rate}</p>
            <p class="fs-4">Флаг:</p>
            <img style="width:150px" src="${item.flags}" alt="...">
        </div>
        `).join('');

    }
        

}