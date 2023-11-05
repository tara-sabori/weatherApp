let cityName=document.getElementById("cityName");
let Submit=document.getElementById("Submit");
let wind=document.getElementById("wind");
let temp=document.getElementById("temp");
let humid=document.getElementById("humid");
let des=document.getElementById("des");
let img=document.getElementById("Img");
let main;
const apikey="e199237e797857018fc9e6278534ade3";



//get data from api
async function getWeather(){
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apikey}`);
    let data=await response.json();
    setData(data);
}
function setData(data){
   main=data['weather'][0]['main'];
   temp.innerHTML=`Temperature: ${(data['main']['temp']-273).toFixed(0)}`;
   humid.innerHTML=`Humidity: ${data['main']['humidity']} %`;
   des.innerHTML=`${data['weather'][0]['description']}`;
   wind.innerHTML=`Wind Speed: ${data['wind']['speed']} km/h`
   selectImg(main);
} 
//set img for weather  
function selectImg(main){
    let Src;
    switch(main){
        case "Rain":case "Drizzle":Src="img/rain.png";break;
        case "Clouds":Src="img/clouds.png";break;
        case "Sun":case "Sunny":case "Clear":Src="img/sun.png";break;
        case "Snow":case "Snowy":Src="img/Snow.png";break;
        case "Wind":case "Windy":Src="img/hail.png";;break;
        default :Src="img/seasons.png";
    }
    img.src=Src;
}
getWeather();
Submit.addEventListener('click',getWeather);