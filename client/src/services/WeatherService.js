import axios from "axios";

async function getCityWeather(cityName) {
    try {
        var WeatherDataModel= {
            apiStatus : 500,
            location : "",
            region : "",
            country : "",
            lastUpdated: "",
            celcius: "",
            condition: "",
            icon: ""
        }
        const apiReceivedData = await axios.get('http://localhost:4000/api/weather', { params: { city: cityName } })
        console.log(apiReceivedData);
        WeatherDataModel.location = apiReceivedData.data.location.name;
        WeatherDataModel.region = apiReceivedData.data.location.region;
        WeatherDataModel.country = apiReceivedData.data.location.country;
        WeatherDataModel.lastUpdated = apiReceivedData.data.current.last_updated;
        WeatherDataModel.celcius = apiReceivedData.data.current.temp_c;
        WeatherDataModel.condition = apiReceivedData.data.current.condition.text;
        WeatherDataModel.icon = apiReceivedData.data.current.condition.icon;
        WeatherDataModel.apiStatus = apiReceivedData.status;

        return WeatherDataModel;

        } catch (error) {
        console.error("Error fetching weather data:", error);
    }
  }

export default getCityWeather;