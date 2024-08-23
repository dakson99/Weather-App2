let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressuer = document.getElementById('pressure');
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valueSearch.value != '') {
        searchWeather();
    }
});

let id = 'b8921f3aaeb18550bd014acfdd85ca97';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
        .then(responsive => responsive.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = 'https://flagsapi.com/' + data.sys.country + '/shiny/32.png';

            }
        })
}