const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e44c59556msh84c241951b4990dp1fa891jsn0b73257090d6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) =>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        min_temp.innerHTML = response.min_temp-2
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
})
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")