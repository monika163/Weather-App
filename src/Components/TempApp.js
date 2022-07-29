import React, { useState, useEffect } from 'react'
import './Css/style.css'
const TempApp = () => {

  const [city, setCity] = useState(null)
  const [search, setSearch] = useState("Pune")

  useEffect(() => {
    const fetchApi = async () => {

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=80118c036fb5e4ce1a8442a2cc8f1911`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main);
      // console.log(response);
      // console.log(resjson);

    }
    fetchApi();

  }, [search])

  return (
    <> <h4 className = "weather" style={{color: "#112f4e"}}>Weather App</h4>
      <div className="box">

        <div className="inputData">
          <input type="search" className="inputField" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
       

        {
          !city ? <p>no data found</p> : (

            <div>
              <div className="info">
                <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
                <h1 className="temp">{city.temp} °Cel</h1>

                <h3 className="tempmin_max">Min {city.temp_min}°Cel | Max  {city.temp_max} °Cel </h3>
              </div>

              

              <div className="wave-one"></div>
              <div className="wave-two"></div>
              <div className="wave-three"></div>
              
            </div>
          )
        }
      </div>
      
    </>
  )
}
export default TempApp;