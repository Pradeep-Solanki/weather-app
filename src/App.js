import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const ApiKey = "a0f6674652745d97d5b33f8b4838167b";
  const [inputCity, setinputCity] = useState("Indore");
  const [data, setdata] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) {
      cityName = "Indore";
    }
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      ApiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    setinputCity(e.target.value);
  };
  const handleSearch = () => {
    getWetherDetails(inputCity);
  };
  // handleSearch();
  const icons = data?.weather?.icon;
  let imgURL = `https://openweathermap.org/img/wn/` + icons + `@2x.png`;
  return (
    <>
      <div className="col-md-12">
        <div className="weatherBg ">
          <h1 className="heading">Weather APP</h1>

          <div className="d-grid gap-3 col-4 mt-4">
            <input
              type="text"
              value={inputCity}
              className=" form-control"
              onInput={handleChangeInput}
            />
            <button
              className="btn btn-primary"
              type="button"
              value=""
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
            <img
              className="weatherIcon"
              src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
              alt=""
              srcset=""
            />
            <h5 className="WeatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">
              {(data?.main?.temp - 271.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
