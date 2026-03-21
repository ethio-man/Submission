import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState("");
  const [information, setInformation] = useState([]);
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
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = countries.filter((c) => {
      const searchLower = e.target.value.toLowerCase();
      return c.name.common.toLowerCase().includes(searchLower);
    });
    setInformation(filtered);
    console.log("filtered", filtered);
  };

  console.log(countries);
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
        information.map((c) => <p>{c.name.common}</p>)}
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
        </div>
      )}
    </div>
  );
}

export default App;
