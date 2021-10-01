// handler
const input = document.getElementById('ip');
const flag = document.getElementById('country-flag');
const name = document.getElementById('country-name');
const capital = document.getElementById('country-capital');
const currency = document.getElementById('country-currency');
const population = document.getElementById('country-population');

// handler for 2nd card
const input1 = document.getElementById('ip1');
const flag1 = document.getElementById('country-flag1');
const name1 = document.getElementById('country-name1');
const capital1 = document.getElementById('country-capital1');
const currency1 = document.getElementById('country-currency1');
const population1 = document.getElementById('country-population1');

// listening for country name as input in the input box
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // getting country name from input box
        var link = `https://restcountries.eu/rest/v2/name/${event.target.value}?fullText=true`;
        // clearing input field after assigning it to the link
        input.value = '';

        const xhr = new XMLHttpRequest();
        xhr.open('GET', link);
        xhr.send();

        xhr.onload = function () {
            document.getElementById('op').classList.add("card");
            const data = JSON.parse(xhr.responseText);
            
            flag.setAttribute('src', data[0].flag);
            name.textContent = `💳 - ${data[0].name}`;
            capital.textContent = `🏙 - ${data[0].capital}`;
            currency.textContent = `💰 - ${data[0].currencies[0].name}`;
            population.textContent = `👬 - ${(data[0].population / 1000000).toFixed(2)} million`;
        };
    }
});

// same as above but just for the second card
input1.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // getting country name from input box
        var link = `https://restcountries.eu/rest/v2/name/${event.target.value}?fullText=true`;
        // clearing input field after assigning it to the link
        input1.value = '';

        const xhr = new XMLHttpRequest();
        xhr.open('GET', link);
        xhr.send();

        xhr.onload = function () {
            document.getElementById('op1').classList.add("card1");
            const data = JSON.parse(xhr.responseText);
            
            flag1.setAttribute('src', data[0].flag);
            name1.textContent = `💳 - ${data[0].name}`;
            capital1.textContent = `🏙 - ${data[0].capital}`;
            currency1.textContent = `💰 - ${data[0].currencies[0].name}`;
            population1.textContent = `👬 - ${(data[0].population / 1000000).toFixed(2)} million`;
        };
    }
});
