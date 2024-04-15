import React from "react";
import style from "../pages/homepage/HomePage.module.css";

function News({ news, formatDate, formatTime }) {
  return (
    <div className={style.newsWidget}>
      <div className={style.header}>
        <img src={news.urlToImage} alt="" />
        <div className={style.headerText}>
          <h3>{news.title.split("-")[0]}</h3>
          <p>
            {formatDate(news.publishedAt)} | {formatTime(news.publishedAt)}
          </p>
        </div>
      </div>
      <div className={style.footer}>{news.description}</div>
    </div>
  );
}

export default News;
