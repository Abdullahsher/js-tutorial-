async function getWeather(city) {
  const apiKey = '8165b0e6cea6bb0d17dfe21d45bf9389';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`weather in ${city}:`);
    console.log(`Temperature: ${data.main.temp}`);
    console.log(` Condition: ${data.weather[0].description}`);
  } catch (error) {
    console.log("Failed to fetch weather data:", error.message);
  }
}

getWeather("Mingora");