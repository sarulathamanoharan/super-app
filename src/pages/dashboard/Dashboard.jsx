import React from "react";
import style from "./Dashboard.module.css";
import NotesWidget from "../../components/NotesWidget";
import CountdownTimer from "../../components/TimerWidget";

const Dashboard = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.NewsWidget}></div>
        <div className={style.TimerWidget}>
          <CountdownTimer />
        </div>
        <div className={style.WeatherWidget}></div>
        <div className={style.UserWidget}></div>
        <div className={style.NotesWidget}>
          <NotesWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
