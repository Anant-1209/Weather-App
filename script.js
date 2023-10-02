const apiKey = "eae1c35557118ce2b469993f06463f0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404)
    {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else
    {
        var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";
    document.querySelector(".max-temp").innerHTML = data.main.temp_max +"°c";    ;
    document.querySelector(".min-temp").innerHTML = data.main.temp_min +"°c";

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Haze")
    {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "images/mist.png"
    }
    
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
} 
    }


searchbtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})