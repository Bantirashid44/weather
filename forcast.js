import express from "express";
import axios from "axios";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Weather App</h1>
    <form action="/weather" method="GET">
      <input type="text" name="city" placeholder="Enter city" required />
      <button type="submit">Get Weather</button>
    </form>
  `);
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const keyName = "22f369ab4697322faa2d293234e7d528";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyName}&units=metric`
    );

    const temp1 = response.data.main.temp;

    res.send(`
      <h1>Your city temp: ${city} is ${temp1} °C</h1>
      <a href="/">Go Back</a>
    `);

  } catch (error) {
    res.send(`
      <h2>City not found </h2>
      <a href="/">Try again</a>
    `);
  }
});

app.listen(7000, () => {
  console.log("server called");
});