import axios from "axios";

export async function getCityWeatherController(req,res) {
    const weatherAppApiKey = process.env.WEATHER_API_KEY;

    const city = req.query.city;
    try{
        var url =`http://api.weatherapi.com/v1/current.json?key=${weatherAppApiKey}&q=${city}&aqi=no`
        const response = await axios.get(url).catch(err => console.log(err))
        console.log("REPSONSE" + response)
        res.json(response.data).status(200);
    }
    catch(err){
        res.status(500).json({error: "Server not reachable"})
    }
}

