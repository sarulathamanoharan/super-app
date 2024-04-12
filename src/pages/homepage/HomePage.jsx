import React, { useState, useEffect } from "react";
import style from "./HomePage.module.css";
import userAvatar from "../../assets/userAvatar.png";

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
  }, []);

  useEffect(() => {
    // console.log(genre);
    // console.log(selectedGenre);
    //   genre.map((genres, index) => {
    //     if (selectedGenre.includes(index)) {
    //       console.log(genres);
    //     }
    //   });
    // }, [selectedGenre]);
    selectedGenre.map((genres) => {
      console.log(genre[genres]);
    });
    console.log(user);
  }, [selectedGenre, user]);

  return (
    <div className={style.page}>
      <div className={style.left}>
        {user && (
          <div className={style.userWidget}>
            <img src={userAvatar} alt="User Avatar" />
            <div>
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
        <div className={style.weatherWidget}></div>
      </div>
      <div className={style.right}>Right</div>
    </div>
  );
}

export default HomePage;
