document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from API 1
    fetch('/api1')
        .then(response => response.json())
        .then(data => {
            // Update the content of the first div with data from API 1
            document.getElementById('apiData1').innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error('Error fetching data from API 1:', error));

    // Fetch data from API 2
        const latitude = 51.509865; // Replace with the actual latitude
        const longitude = -0.118092; // Replace with the actual longitude

    // Second API
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=f4e48e65002f6d466b302a58a92f9619`)
        .then(response => response.json())
        .then(data => {
            // Process the historical weather data
            document.getElementById('apiData2').innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error('Error fetching historical weather data:', error));
});


