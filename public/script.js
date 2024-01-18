// public/script.js

function fetchWeather() {
    fetch('/weather')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiData1').innerHTML = 'Current Weather: ' + data.current.weather[0].description + '<br>' + 'Current Temperature: ' + data.current.temp + ' °C';
            
            // All the data from the API call for current
            console.log(data.current);
        });
}


// .then(data => {
    // document.getElementById('apiData1').innerHTML = 'Current Weather: ' + data.summary;
// });

// function fetchNews() {
//     fetch('/news')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('news').innerHTML = 'Top News: ' + data.headline;
//         });
// }

fetchWeather();
fetchNews();