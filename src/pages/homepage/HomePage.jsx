import React, { useState, useEffect } from "react";
import style from "./HomePage.module.css";
import userAvatar from "../../assets/userAvatar.png";
import axios from "axios";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { RiContrastDrop2Fill } from "react-icons/ri";
import lineImage from "../../assets/LineImage.png";

function HomePage() {
  const [user, setUser] = useState();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genre = [
    {
      title: "Action",
    },
    {
      title: "Drama",
    },
    {
      title: "Romance",
    },
    {
      title: "Thriller",
    },
    {
      title: "Western",
    },
    {
      title: "Horror",
    },
    {
      title: "Fantasy",
    },
    {
      title: "Music",
    },
    {
      title: "Fiction",
    },
  ];

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("currentUser")));
    setUser(JSON.parse(localStorage.getItem("currentUser")));
    // console.log(JSON.parse(localStorage.getItem("selectedGenre")));
    setSelectedGenre(JSON.parse(localStorage.getItem("selectedGenre")));
    fetchWeatherData();
    fetchNewsData();
  }, []);

  useEffect(() => {}, [selectedGenre, user]);

  const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
  const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;
  const [weather, setWeather] = useState();
  const [news, setNews] = useState();
  const fetchWeatherData = async () => {
    const { data, status } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=Hosur`
    );
    if (status == 200) {
      setWeather(data.current);
    }
  };
  const fetchNewsData = async () => {
    const { data, status } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`
    );
    if (status == 200) {
      setNews(data.articles[0]);
    }
  };

  useEffect(() => {
    console.log(weather);
    console.log(news);
  }, [weather, news]);

  const formatDate = (date) => {
    if (date) {
      const formattedDate = new Date(news.publishedAt).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }
      );
      const formattedTime = new Date(news.publishedAt).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      );

      const dateString = formattedDate;
      const dateParts = dateString.split("/");
      const formattedDates = new Date(
        dateParts[2],
        dateParts[0] - 1,
        dateParts[1]
      );
      const formattedDateString =
        formattedDates.getMonth() +
        1 +
        "-" +
        formattedDates.getDate() +
        "-" +
        formattedDates.getFullYear();

      return `${formattedDateString} ${formattedTime}`;
    } else {
      const formattedDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      const formattedTime = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const dateString = formattedDate;
      const dateParts = dateString.split("/");
      const formattedDates = new Date(
        dateParts[2],
        dateParts[0] - 1,
        dateParts[1]
      );
      const formattedDateString =
        formattedDates.getMonth() +
        1 +
        "-" +
        formattedDates.getDate() +
        "-" +
        formattedDates.getFullYear();

      return `${formattedDateString}     ${formattedTime}`;
    }
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        {user && (
          <div className={style.userWidget}>
            <img src={userAvatar} alt="User Avatar" />
            <div className={style.userContent}>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              <h1>{user.username}</h1>
              {selectedGenre && (
                <div className={style.genreGrid}>
                  {selectedGenre
                    .filter((genres, index) => index < 4)
                    .map((genres) => (
                      <div className={style.pill}>{genre[genres].title}</div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
        {weather && (
          <div className={style.weatherWidget}>
            <div className={style.header}>
              <h1>{formatDate()}</h1>
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
        )}
      </div>
      <div className={style.right}>
        {news && (
          <div className={style.newsWidget}>
            <div className={style.header}>
              <img src={news.urlToImage} alt="NASA img" />
              <div className={style.headerText}>
                <h3>{news.title.split("-")[0]}</h3>
                <p>{formatDate(news.publishedAt)}</p>
              </div>
            </div>
            <div className={style.footer}>{news.description}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
