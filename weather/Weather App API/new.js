                         /// ApI
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiId="4523265671c57fb608a8820f2455eb98"
const url2="https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric";
const url3="https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric";
const url4="https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric";
  
           // Top Cities Functions        
async function delhiWeather(){
        const response= await fetch(url2 +`&appId=${apiId}`)
        var data= await response.json();
        console.log(data);
        document.querySelector("#delhi_city").innerHTML=data.name;
        document.querySelector("#temp_delhi").innerHTML=`Tempreature:${Math.round(data.main.temp)} &deg c`
        document.querySelector("#pressure").innerHTML=`Pressure:${data.main.pressure}`;
        document.querySelector("#humidity_delhi").innerHTML=`Humidity:${data.main.humidity}`;
        document.querySelector("#sea_level_delhi").innerHTML=`Sea Level:${data.main.sea_level}`;

}
async function mumbaiWeather(){
    const response= await fetch(url3 +`&appId=${apiId}`)
    var data= await response.json();
    console.log(data);
    document.querySelector("#temp_mumbai").innerHTML=`Tempreature: ${Math.round(data.main.temp)} &deg c`;
    document.querySelector("#humidity_mumbai").innerHTML=`Humidity:${data.main.humidity}`;
    document.querySelector("#pressure_mumbai").innerHTML=`Pressure: ${data.main.pressure}`;
    document.querySelector("#sea_level_mumbai").innerHTML=`Sea Level:${data.main.sea_level}`;
}
async function kolkataWeather(){
    const response= await fetch(url4 + `&appId=${apiId}`)
    var data=await response.json();
    console.log(data);
    document.querySelector("#temp_kolkata").innerHTML=`Tempreature: ${Math.round(data.main.temp)}`
    document.querySelector("#humidity_kolkata").innerHTML=`Humidity:${data.main.humidity}`;
    document.querySelector("#pressure_kolkata").innerHTML=`Pressure:${data.main.pressure}`;
    document.querySelector("#sea_level_kolkata").innerHTML=`Sea Level:${data.main.sea_level}`;
}
delhiWeather();
mumbaiWeather();
kolkataWeather();

                 // Takingout the elements
const searchBtn=document.querySelector(".searchBtn");
const city1=document.querySelector("#weatherBox")
const search = document.getElementById('search')


              // Calling The API using async function

async function checkWeather(city){
   try{
    const response =await fetch( url + city + `&appId=${apiId}`)
    if(!response.ok){
        throw new Error("City Not Found")
    }
    var data= await response.json();
    console.log(data);
    const placeE1=document.querySelector(".place")
    const tempeE1=document.querySelector(".temp")
    const humidityE1=document.querySelector(".humidity")
    const windE1=document.querySelector(".wind")
    const sea_levelE1=document.querySelector("seaLevel")
    if(placeE1) placeE1.innerHTML=data.name;
    if(tempeE1) tempeE1.innerHTML=`Tempreature:${Math.round(data.main.temp)} &deg`;
    if(humidityE1) humidityE1.innerHTML=`Humidity:-${data.main.humidity} %`;
    if(windE1)windE1.innerHTML=`Wind Speed:-${data.wind.speed} km/h`;
    if(sea_levelE1) sea_levelE1.innerHTML=`Sea Level:-${data.main.sea_level}`;
   }
   catch{
    alert("Please!! Enter The Correct City");
   }
   
   
   
   
}
                    // Adding The Event Listener On Button That Will Seacrh The City
searchBtn.addEventListener("click",()=>{
    const cityname = search.value.trim();
                   // Checking if the serachbox is not empty
    if(cityname === ""){
        alert('Please enter city name');
    }
    else{
        city1.classList.remove("hide")
        checkWeather(search.value);
        
    }
})
