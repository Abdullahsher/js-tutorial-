async function getWeather(city) {
  const apiKey = '2cb994405e3a5f85ab2921d7e0466211';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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

getWeather("Lahore");