const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f751f5cc15msha554ef659b438a7p1d5f7ejsn87c4d1cb931e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        humidity.innerHTML = response.humidity
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")