

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl =document.getElementById("city-input");
const passWordEl = document.getElementById("password");
const formEl = document.querySelector("form");
formEl.addEventListener("submit",(event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    const passWord = passWordEl.value;
    console.log(cityValue,passWord)

}
)
