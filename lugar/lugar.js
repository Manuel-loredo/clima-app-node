const axios = require('axios');


const getLugarLatLng = async (dir) => {
    const encodedUrl = encodeURI(dir);
    
    // Make a request for a user with a given ID
    
     const resp = await axios.get(`https://geocode.xyz/?locate=location?city=${encodedUrl}&auth=138091241980352462700x127558 &json=1`);
     if (resp.data.length === 0  ) {
         throw new Error(`No hay resultados para ${dir}`)
     }
     const data = resp.data;
     const direccion = data.standard.city;
     const lat = data.latt;
     const lng = data.longt;
  return {
    direccion,
    lat,
    lng
  }    
}

module.exports = {
    getLugarLatLng 
}

