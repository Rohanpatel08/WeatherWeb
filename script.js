let submit = document.getElementById('submit')
let fav1 = document.getElementById('fav-1')
let fav2 = document.getElementById('fav-2')
let fav3 = document.getElementById('fav-3')
let fav4 = document.getElementById('fav-4')

let arr = ['Delhi', 'New York', 'London', 'Milan', 'Moscow', 'Rio', 'Melbourne']

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '51868ed371msha2b088847f4d500p14d7b7jsn2189c751c601',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = new Date(response.sunrise * 1000).toLocaleTimeString()
            sunset.innerHTML = new Date(response.sunset * 1000).toLocaleTimeString()
        })
        .catch(err => console.log(err))

}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(city.value)
})
let tabData = []
let i = 0 
arr.forEach(item => {
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${item}`, options)
        .then(response => response.json())
        .then(response => {
            // tabData.push(response)
            const tableBody = document.getElementById("weatherData");
            const data = response
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><b>${item}</b></td>
                
                <td>${data.temp}</td>
                <td>${data.feels_like}</td>
                <td>${data.humidity}</td>
                <td>${data.min_temp}</td>
                <td>${data.max_temp}</td>
                <td>${data.wind_speed}</td>
                <td>${data.wind_degrees}</td>
                <td>${new Date(data.sunrise * 1000).toLocaleTimeString()}</td>
                <td>${new Date(data.sunset * 1000).toLocaleTimeString()}</td>
            `;
            tableBody.appendChild(row);
        })


})
console.log("City Data:", tabData)

fav1.addEventListener('click',()=>{
    getWeather("Ahmedabad")
})
fav2.addEventListener('click',()=>{
    getWeather("Rajkot")
})
fav3.addEventListener('click',()=>{
    getWeather("Upleta")
})
fav4.addEventListener('click',()=>{
    getWeather("Junagadh")
})

// // Loop through the data and generate table rows
// for (let i = 0; i < tabData.length; i++) {
//     const data = tabData[i];
//     console.log("123",data)
//     const row = document.createElement("tr");
{/* <td>${data.cloud_pct}</td> */}
//     row.innerHTML = `
//         <td>${i + 1}</td>
//         <td>${data.cloud_pct}</td>
//         <td>${data.temp}</td>
//         <td>${data.feels_like}</td>
//         <td>${data.humidity}</td>
//         <td>${data.min_temp}</td>
//         <td>${data.max_temp}</td>
//         <td>${data.wind_speed}</td>
//         <td>${data.wind_degrees}</td>
//         <td>${new Date(data.sunrise * 1000).toLocaleTimeString()}</td>
//         <td>${new Date(data.sunset * 1000).toLocaleTimeString()}</td>
//     `;
//     tableBody.appendChild(row);
// }

getWeather("Delhi")