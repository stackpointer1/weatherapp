import React, { useState, useEffect } from "react";

const TempApp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Mumbai");
  const[dimension,setDimension]=useState({
    heigth:window.innerHeight,
    widht:window.innerWidth
  })

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=af5508a1fe776dc96404427c8e881be2`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setCity(data.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="input data">
          <input
            type="text"
            placeholder="search"
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
         {!city ? (
          <p>No Data found</p>
        ) : ( 
          <div className="info">
            <h2 className="location">
             
              <i className="fas fa-cloud-sun"></i>
              {search}
             
          
            </h2>
             <h1 className="temp">{city.temp}°C </h1> 

            <h3 className="tempmin_max">Max Temp:{city.temp_min}°C | Min Temp:{city.temp_max}°C</h3>
            <h4 className="humidity">Humidity:{city.humidity}</h4> 
          </div>
        )}
      </div>
    </>
  );
};
export default TempApp;
