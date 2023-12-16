const apiKey = '4596681df59e8ffeadf78d242e8c1a2a';
setWeatherInfo('dhaka');

function setWeather() {
    const search_field = document.querySelector('#search');
    setWeatherInfo(search_field.value);
}

async function setWeatherInfo(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`);
    const weatherData = await response.json();
    
    const city = document.querySelector('#city');
    city.innerHTML = `${weatherData.city.name}, ${weatherData.city.country}`
    
    // Day 1 (Today)
    const day_1_temp = document.querySelector('#day_1_temp');
    day_1_temp.innerHTML = Math.round(weatherData.list[0].main.temp);
    const day_1_description = document.querySelector('#day_1_description');
    day_1_description.innerHTML = changeCase(weatherData.list[0].weather[0].description);
    const day_1_feels_like = document.querySelector('#day_1_feels_like');
    day_1_feels_like.innerHTML = Math.round(weatherData.list[0].main.feels_like);
    const day_1_humidity = document.querySelector('#day_1_humidity');
    day_1_humidity.innerHTML = Math.round(weatherData.list[0].main.humidity);
    const day_1_wind = document.querySelector('#day_1_wind');
    day_1_wind.innerHTML = Math.round(weatherData.list[0].wind.speed);
    const day_1_pressure = document.querySelector('#day_1_pressure');
    day_1_pressure.innerHTML = Math.round(weatherData.list[0].main.pressure);
    
    // Day 2
    const day_2_temp = document.querySelector('#day_2_temp');
    day_2_temp.innerHTML = Math.round(weatherData.list[7].main.temp);
    const day_2_description = document.querySelector('#day_2_description');
    day_2_description.innerHTML = changeCase(weatherData.list[7].weather[0].description);
    const day_2_feels_like = document.querySelector('#day_2_feels_like');
    day_2_feels_like.innerHTML = Math.round(weatherData.list[7].main.feels_like);
    const day_2_humidity = document.querySelector('#day_2_humidity');
    day_2_humidity.innerHTML = Math.round(weatherData.list[7].main.humidity);
    const day_2_wind = document.querySelector('#day_2_wind');
    day_2_wind.innerHTML = Math.round(weatherData.list[7].wind.speed);
    const day_2_pressure = document.querySelector('#day_2_pressure');
    day_2_pressure.innerHTML = Math.round(weatherData.list[7].main.pressure);
    
    // Day 3
    const day_3_temp = document.querySelector('#day_3_temp');
    day_3_temp.innerHTML = Math.round(weatherData.list[15].main.temp);
    const day_3_description = document.querySelector('#day_3_description');
    day_3_description.innerHTML = changeCase(weatherData.list[15].weather[0].description);
    const day_3_feels_like = document.querySelector('#day_3_feels_like');
    day_3_feels_like.innerHTML = Math.round(weatherData.list[15].main.feels_like);
    const day_3_humidity = document.querySelector('#day_3_humidity');
    day_3_humidity.innerHTML = Math.round(weatherData.list[15].main.humidity);
    const day_3_wind = document.querySelector('#day_3_wind');
    day_3_wind.innerHTML = Math.round(weatherData.list[15].wind.speed);
    const day_3_pressure = document.querySelector('#day_3_pressure');
    day_3_pressure.innerHTML = Math.round(weatherData.list[15].main.pressure);
    
    // Day 4
    const day_4_temp = document.querySelector('#day_4_temp');
    day_4_temp.innerHTML = Math.round(weatherData.list[23].main.temp);
    const day_4_description = document.querySelector('#day_4_description');
    day_4_description.innerHTML = changeCase(weatherData.list[23].weather[0].description);
    const day_4_feels_like = document.querySelector('#day_4_feels_like');
    day_4_feels_like.innerHTML = Math.round(weatherData.list[23].main.feels_like);
    const day_4_humidity = document.querySelector('#day_4_humidity');
    day_4_humidity.innerHTML = Math.round(weatherData.list[23].main.humidity);
    const day_4_wind = document.querySelector('#day_4_wind');
    day_4_wind.innerHTML = Math.round(weatherData.list[23].wind.speed);
    const day_4_pressure = document.querySelector('#day_4_pressure');
    day_4_pressure.innerHTML = Math.round(weatherData.list[23].main.pressure);
    
    // Day 5
    const day_5_temp = document.querySelector('#day_5_temp');
    day_5_temp.innerHTML = Math.round(weatherData.list[31].main.temp);
    const day_5_description = document.querySelector('#day_5_description');
    day_5_description.innerHTML = changeCase(weatherData.list[31].weather[0].description);
    const day_5_feels_like = document.querySelector('#day_5_feels_like');
    day_5_feels_like.innerHTML = Math.round(weatherData.list[31].main.feels_like);
    const day_5_humidity = document.querySelector('#day_5_humidity');
    day_5_humidity.innerHTML = Math.round(weatherData.list[31].main.humidity);
    const day_5_wind = document.querySelector('#day_5_wind');
    day_5_wind.innerHTML = Math.round(weatherData.list[31].wind.speed);
    const day_5_pressure = document.querySelector('#day_5_pressure');
    day_5_pressure.innerHTML = Math.round(weatherData.list[31].main.pressure);
}

function changeCase(text) {
    var splitText = text.toLowerCase().split(' ');
    
    for (var i = 0; i < splitText.length; i++) {
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
    }
    
    return splitText.join(' ');
}
