// =========================
// 1. ELEMENTS
// =========================
const input = document.getElementById("city-input");
const button = document.getElementById("search-btn");

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
