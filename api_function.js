const axios=require("axios");
async  function  get_api_data(get_city_name){
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${get_city_name}&appid=5ac946fb03ef413969c8f881681dcc57`;
    const response= await axios.get(api_url);
    const data=  response.data;
   return data;
}
module.exports = {
    get_api_data:get_api_data
};