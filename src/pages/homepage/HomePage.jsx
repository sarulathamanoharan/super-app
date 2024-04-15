import React, { useState, useEffect } from "react";
import style from "./HomePage.module.css";
import userAvatar from "../../assets/userAvatar.png";
import axios from "axios";
import { genres } from "../../data/genre";
import News from "../../components/NewsWidget";
import Weather from "../../components/WeatherWidget";
import User from "../../components/UserWidget";

function HomePage() {
  const [user, setUser] = useState();
  const [selectedGenre, setSelectedGenre] = useState([]);

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

  const formatTime = (date) => {
    if (weather || news) {
      const formattedTime = new Date(date).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return formattedTime;
    }
  };

  const formatDate = (date) => {
    if (weather || news) {
      const formattedDate = new Date(date).toLocaleString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      // return formattedDate;

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

      return formattedDateString;
    }
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        {user && (
          <User
            user={user}
            userAvtar={userAvatar}
            selectedGenre={selectedGenre}
            genres={genres}
          />
        )}
        {weather && (
          <Weather
            weather={weather}
            formatDate={formatDate}
            formatTime={formatTime}
          />
        )}
      </div>
      <div className={style.right}>
        {news && (
          <News news={news} formatDate={formatDate} formatTime={formatTime} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
