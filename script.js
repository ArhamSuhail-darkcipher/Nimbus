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
// 2. API CONFIG
// =========================
const API_KEY = "5e12557c3709b1ab0e1ea7c96704e378";

// =========================
// 3. EVENT LISTENERS
// =========================
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        showStatus("Please enter a city name.", "error");
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// =========================
// 4. FETCH WEATHER DATA
// =========================
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        showStatus("Loading weather data...", "loading");

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found. Please try again.");
        }

        const data = await response.json();

        updateUI(data);
        showStatus("Weather updated successfully.", "success");

    } catch (error) {
        showStatus(error.message, "error");
    }
}
