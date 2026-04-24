// =========================
// 1. DOM ELEMENTS
// =========================
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

const statusMessage = document.getElementById("status-message");
const statusSection = document.querySelector(".status-section");

const weatherCard = document.getElementById("weather-card");
const detailsGrid = document.getElementById("details-grid");

const cityName = document.getElementById("city-name");
const countryName = document.getElementById("country-name");
const weatherIcon = document.querySelector(".weather-icon span");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const feelsLike = document.getElementById("feels-like");

const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");

// =========================
// 2. EVENT LISTENER
// =========================
button.addEventListener("click", () => {
    const city = input.value.trim();

    if (!city) return;

    getWeather(city);
});

// =========================
// 3. FETCH FUNCTION
// =========================
async function getWeather(city) {
    const API_KEY = "5e12557c3709b1ab0e1ea7c96704e378";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data); // 🔥 IMPORTANT STEP

    } catch (error) {
        console.error(error);
    }
}
