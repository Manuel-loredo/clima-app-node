const axios = require('axios');

const getClima = async (lat, lng) => {

const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3f4322ba039a0049eb3388d5ffad0239&units=metric`)
return resp.data.main.temp;
}

module.exports = {
    getClima
}