const API="http://api.weatherapi.com/v1/current.json?key=bd1f66041cca4648a6b200920250603&q=";


async function updateWeather(city){
  
 const reponse=await fetch(API+city);
  const data=await reponse.json();
  console.log(data)
  return data;
  
}




const inputBox=document.querySelector(".search");
let cloud=document.querySelector(".cloud")
const searchBtn=document.querySelector(".submit");
let cityName=document.querySelector(".name");
let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");
let secs=document.querySelector(".sec")
let mintue=document.querySelector(".min");
let time=document.querySelector(".time");
let date=document.querySelector(".date")
let conditionDisplay=document.querySelector(".weatherImage");
let conditions=document.querySelector(".conditions");
let tempreature=document.querySelector(".tempreature");




document.addEventListener("DOMContentLoaded", function () {
    displayWeather("New Delhi");
});

document.querySelector("#noida").addEventListener("click",()=>{
           displayWeather("noida")
})
document.querySelector("#kolkata").addEventListener("click",()=>{
    displayWeather("kolkata");
})
document.querySelector("#mumbai").addEventListener("click",()=>{
    displayWeather("mumbai")
})
document.querySelector("#patna").addEventListener("click",()=>{
    displayWeather("patna")
})
   function displayWeather(city){
    updateWeather(city).then(function(weatherdata){
        if(weatherdata.error){
            alert("City Name is error")
        }else{
            cityName.innerHTML=weatherdata.location.name;
            tempreature.innerHTML=`${weatherdata.current.temp_c}&#176c`;
            conditionDisplay.src=weatherdata.current.condition.icon;
            conditions.innerHTML=weatherdata.current.condition.text;
            cloud.innerHTML=weatherdata.current.cloud;
            humidity.innerHTML=`${weatherdata.current.humidity}%`;
            wind.innerHTML=`${weatherdata.current.wind_kph}Km/h`

        }
    }).catch(function(err){
        alert("City name is wrong");
    })
   }

    searchBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        let city=inputBox.value.trim();
        if(city===""){
            alert("Enter City Name");
            return;
        }
        displayWeather(city);
    });



setInterval(function(){
    let currentTime=new Date();

let hours=currentTime.getHours();
let minutes=currentTime.getMinutes();
let seconds=currentTime.getSeconds();

        if(hours<=10){
            hours="0"+hours;
        }
        if(minutes<=10){
            minutes="0"+minutes;
        }
        if(seconds<=10){
            seconds="0"+seconds;
        }
        time.innerHTML=`${hours}:`;
        mintue.innerHTML=`${minutes}:`;
        secs.innerHTML=seconds

},1000)

