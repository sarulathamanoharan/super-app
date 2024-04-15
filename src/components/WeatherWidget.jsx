import React from "react";
import style from "../pages/homepage/HomePage.module.css";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { RiContrastDrop2Fill } from "react-icons/ri";
import lineImage from "../assets/LineImage.png";

function Weather({ weather, formatDate, formatTime }) {
  return (
    <div className={style.weatherWidget}>
      <div className={style.header}>
        <h1 className={style.dateTime}>{formatDate(new Date())}</h1>
        <h1 className={style.dateTime}>{formatTime(new Date())}</h1>
      </div>
      <div className={style.footer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img src={weather.condition.icon} alt="" />
          <div>{weather.condition.text}</div>
        </div>
        <div className={style.line}>
          <img src={lineImage} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "2.5rem" }}>{weather.temp_c} °C </div>

          <div className={style.grids}>
            <div className={style.value}>{weather.pressure_mb} mbar</div>
            <div className={style.name}>Pressure</div>
            <div className={style.icon} style={{ paddingLeft: "8px" }}>
              <FaThermometerThreeQuarters />
            </div>
          </div>
        </div>
        <div className={style.line}>
          <img src={lineImage} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "10px",
          }}
        >
          <div className={style.grids}>
            <div className={style.value}>{weather.wind_kph} km/h</div>
            <div className={style.name}>Wind</div>
            <div className={style.icon}>
              <FiWind />
            </div>
          </div>

          <div className={style.grids}>
            <div className={style.value}>{weather.humidity}%</div>
            <div className={style.name}>Humidity</div>
            <div className={style.icon}>
              <RiContrastDrop2Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
