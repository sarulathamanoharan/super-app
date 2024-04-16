import React from "react";
import style from "../pages/homepage/HomePage.module.css";

function User({ user, userAvtar, selectedGenre, genres }) {
  return (
    <div className={style.userWidget}>
      <img src={userAvtar} alt="User avatar" />
      <div className={style.userContent}>
        <div className={style.userInfo}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h1>{user.username}</h1>
        </div>
        {selectedGenre.length > 0 && (
          <div className={style.genreGrid}>
            {selectedGenre
              .filter((id, index) => index < 4)
              .map((id) => (
                <div className={style.pill}>{genres[id].title}</div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
