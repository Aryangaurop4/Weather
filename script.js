const getWeather = (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aba9e5520emshbb04915bb2a567ep19dd16jsn6dd01f7fcdd9',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    // let city=document.getElementById("city")
    // let place=city.value;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            let searchcity = document.getElementById('searchcity');
            searchcity.innerHTML = `<u> Weather Of : ${city}</u>`;
            let stemp = document.getElementById(`stemp`)
            let scloud = document.getElementById(`scloud`)
            let shumidity = document.getElementById(`shumidity`)
            let swind_speed = document.getElementById(`swindspeed`)
            stemp.innerText = `Temperature : ${response.temp} Deg. C`;
            scloud.innerText = `Cloud % : ${response.cloud_pct} %`;
            shumidity.innerText = `Humidity % : ${response.humidity} %`;
            swind_speed.innerText = `Wind Speed : ${response.wind_speed} km/h`;
            let search = document.getElementsByClassName("search")[0];
            let load=document.getElementById('load');
            load.style.display="none";
            search.style.display = "block";
        })
        .catch(err => console.error(err));
}

let btn = document.getElementById('btn');
// go.addEventListener
btn.addEventListener("click", () => {
    let load=document.getElementById('load');
    load.style.display="block";
    getWeather(city.value)
})

extra_cities = ["Mumbai", "London", "Canberra", "Paris", "Dubai"];
for (let i = 0; i < extra_cities.length; i++) {
    let cityget = extra_cities[i];
    console.log(cityget)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aba9e5520emshbb04915bb2a567ep19dd16jsn6dd01f7fcdd9',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityget}`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            let city = document.getElementById(`City(${i + 1})`)
            let temp = document.getElementById(`Temp(${i + 1})`)
            let cloud = document.getElementById(`Cloud%(${i + 1})`)
            let humidity = document.getElementById(`Humidity(${i + 1})`)
            let wind_speed = document.getElementById(`Wind-Speed(${i + 1})`)
            city.innerText = cityget;
            temp.innerText = `${response.temp} Deg. C`;
            cloud.innerText = `${response.cloud_pct} %`;
            humidity.innerText = `${response.humidity} %`;
            wind_speed.innerText = `${response.wind_speed} km/h`;
        })
        .catch(err => console.error(err));
}