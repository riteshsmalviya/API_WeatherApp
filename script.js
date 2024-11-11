const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e44c59556msh84c241951b4990dp1fa891jsn0b73257090d6',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            // Populate data based on the updated JSON structure
            temp.innerHTML = response.current.temp_c;
            feels_like.innerHTML = response.current.feelslike_c;
            wind_speed.innerHTML = response.current.wind_kph;
            wind_degrees.innerHTML = response.current.wind_degree;
            wind_direction.innerHTML = response.current.wind_dir;
            humidity.innerHTML = response.current.humidity;
            pressure.innerHTML = response.current.pressure_mb;
            
        })
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            max_temp.innerHTML = response.forecast.forecastday[0].day.maxtemp_c;
            min_temp.innerHTML = response.forecast.forecastday[0].day.mintemp_c;
            
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Indore");
