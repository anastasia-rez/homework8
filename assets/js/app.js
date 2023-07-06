

const urlCountry ='https://restcountries.com/v3.1/all';

const urlBank = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';


let rates = await fetch(urlBank);
    rates = await rates.json();

console.log(rates);



let countries = await fetch(urlCountry);
    countries = await countries.json();   

console.log(countries);



for(let rate of rates){
    rate.flags = [];
    rate.countryName = [];


    for(let country of countries){
        for(let code in country.currencies) {
            if(code == rate.cc){
                rate.flags.push(country.flags.png);
                rate.countryName.push(country.name.common);
            }
        }
    }
}

rates.pop();
rates.pop();
rates.pop();
rates.pop();

console.log(rates);






let infoClass = document.getElementById('info');


infoClass.innerHTML = rates.map((item) =>`
        <div class="border rounded-4 border-3 border-secondary p-3 m-3">
            <p class="fs-4">Валюта: ${item.txt} (${item.cc})</p>
            <p class="fs-4">Курс: ${item.rate}</p>
            <p class="fs-4">Флаг:</p>
            
            <p title="${item.countryName}"><img style="width:150px"  src="${item.flags}" alt="...">  </p>
        </div>
        `).join('');
