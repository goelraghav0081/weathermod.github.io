const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99809804admshee3d5db6282da30p1fd209jsn8d8c5bf3fcf5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =  (city) =>{
    cityName.innerHTML =city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
      
        
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
        
        
        sunrise.innerHTML = response.sunrise 
      

        sunset.innerHTML = response.sunset 
        
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
bangalore.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(bangalore.innerHTML)
})
london.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(london.innerHTML)
})
getWeather("Delhi")
if(true){
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shamli', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        
        temp11.innerHTML = response.temp 
        wind_speed11.innerHTML = response.wind_speed 
        wind_degrees11.innerHTML = response.wind_degrees  
        humidity11.innerHTML = response.humidity
        sunrise11.innerHTML = response.sunrise 
        sunset11.innerHTML = response.sunset
        
    })
	.catch(err => console.error(err));
}
if(true){
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
        
        
        temp12.innerHTML = response.temp 
        wind_speed12.innerHTML = response.wind_speed 
        wind_degrees12.innerHTML = response.wind_degrees  
        humidity12.innerHTML = response.humidity
        sunrise12.innerHTML = response.sunrise 
        sunset12.innerHTML = response.sunset
        
    })
	.catch(err => console.error(err));
}
