import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { getCityWeatherController } from './src/controllers/WeatherController.js';


const app = express();
const PORT = 4000
dotenv.config();

app.use(cors());

app.get('/api/weather', getCityWeatherController)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));