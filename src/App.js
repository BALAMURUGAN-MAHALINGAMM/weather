import axios from "axios";
import { useState } from "react";

import "./index.css";
import img1 from "./images/new1.jpg";

function App() {

  var [inputbox, setinputbox] = useState('')
  var [main, setmain] = useState('')
  var [description, setdescription] = useState('')
  var [wind,setwind] =useState('')
  var [country,setcountry] = useState('')
  var [pressure,setpressure] =useState('')

const getapi=()=>{
 var weather=axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox}&appid=ad6c7734d1b70a62b6fc079b69b995a1`)

 weather.then((response)=>{
  setmain(response.data.weather[0].main)
  setdescription(response.data.weather[0].description)
  setwind(response.data.wind.speed)
  setcountry(response.data.sys.country)
  setpressure(response.data.main.pressure)
}
)
}

  return (
    <div class="top">
      <img
        src={img1}
        style={{ border: "1px solid grey" }}
      />
      <h1 style={{ paddingLeft: 120 }}>WEATHER APP</h1>
      <div class="top1">
        <label style={{ alignItems: "center" }}>CITY:</label>
        <input
          type="text"
          placeholder=" enter your city"
          style={{ width: "200px", marginLeft: "5px" }}
          value={inputbox}
          onChange={(e)=>setinputbox(e.target.value)}
        ></input>
        <br />
      </div>
      <button
        style={{
          backgroundColor: "palegoldenrod",
          border: "1px solid black",
          color: "red",
          margin: "5px",
          marginLeft: "150px",
          marginTop: "20px",
        }}
        onClick={getapi}
      >
        Check weather
      </button>

      <h1>Weather:    {main}</h1>
      <h2>Wind Speed: {wind}km/hr</h2>
      <h2>Pressure:   {pressure}</h2>
      <h2>Country:    {country}</h2>
      <h2>Description: {description}</h2>
      
    </div>
  );
}

export default App;
