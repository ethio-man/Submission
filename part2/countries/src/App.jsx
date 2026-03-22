import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const API_key = import.meta.env.VITE_WEATHER_API;
  const [countries, setCountries] = useState("");
  const [information, setInformation] = useState([]);
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [temprature, setTemprature] = useState(null);
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
        // console.log("languages", Object.values(response.data.languages));
        // setLanguages(Object.values(response.data.languages));
      })
      .catch((err) => console.log("Error to fetch data", err));
  }, []);

  useEffect(() => {
    if (information.length === 1) {
      const city = information[0]?.capital;
      //searching city's cooardinate for weather api call
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_key}`,
        )
        .then((response) =>
          setLocation([response.data[0].lat, response.data[0].lon]),
        )
        .catch((err) => console.log(err));
      //searching city's weather condition useing it's coordinate
      const lat = location[0];
      const lon = location[1];
      if (lat && lon) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`,
          )
          .then((response) => {
            setWeather(response.data);
            setTemprature(response.data?.main?.temp - 273.15);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [information]);
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = countries?.filter((c) => {
      const searchLower = e.target.value.toLowerCase();
      return c.name.common.toLowerCase().includes(searchLower);
    });
    setInformation(filtered);
    console.log("filtered", filtered);
  };

  console.log(countries);
  console.log("coordinate:", location);
  console.log("Weather", weather);
  console.log("Temprature in Kelvin ", temprature);
  return (
    <div>
      <div>
        <label>Find countries: </label>
        <input onChange={(e) => handleSearch(e)} />
      </div>
      <p>
        {information.length >= 10 && "Too many matches,Specify another filter"}
      </p>
      {1 < information.length &&
        information.length < 10 &&
        information.map((c, i) => (
          <p key={i}>
            {`${c.name.common}     `}
            <button onClick={() => setInformation([c])}>show</button>
          </p>
        ))}
      {information.length === 1 && (
        <div>
          <h1>{information[0]?.name?.common}</h1>
          <p>Capital {information[0]?.capital}</p>
          <p>Area {information[0]?.area}</p>
          <h1>Languages</h1>
          <ul>
            {Object.values(information[0]?.languages)?.map((lan) => (
              <li key={lan}>{lan}</li>
            ))}
          </ul>
          <img
            src={information[0]?.flags?.png}
            alt={information?.name?.common}
          />
          <h2>Weather in {information[0]?.capital}</h2>
          <p>Temperature {temprature?.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default App;
