import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter city name: ', async (name) => {
    const keyName = 'b65ca9cae5e19a5c449272c9d120d3c5';

    const url = 'https://api.openweathermap.org/data/2.5/weather?q={name}&appid={keyName}&units=metric';

    try {
        const res = await axios.get(url);
        console.log(`Temperature in ${name} is ${res.data.main.temp}°C`);
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.message);
        } else {
            console.log(error.message);
        }
    } finally {
        rl.close();
    }
});