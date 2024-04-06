import React, { useState } from "react";
import Action from "../../assets/Action.png";
import Drama from "../../assets/Drama.png";
import Romance from "../../assets/Romance.png";
import Thriller from "../../assets/Thriller.png";
import Western from "../../assets/Western.png";
import Horror from "../../assets/Horror.png";
import Fantasy from "../../assets/Fantasy.png";
import Music from "../../assets/Music.png";
import Fiction from "../../assets/Fiction.png";
import style from "./GenrePage.module.css";

function GenrePage() {
  const [genres, setGenres] = useState([
    {
      title: "Action",
      bgImgage: Action,
    },
    {
      title: "Drama",
      bgImgage: Drama,
    },
    {
      title: "Romance",
      bgImgage: Romance,
    },
    {
      title: "Thriller",
      bgImgage: Thriller,
    },
    {
      title: "Western",
      bgImgage: Western,
    },
    {
      title: "Horror",
      bgImgage: Horror,
    },
    {
      title: "Fantasy",
      bgImgage: Fantasy,
    },
    {
      title: "Music",
      bgImgage: Music,
    },
    {
      title: "Fiction",
      bgImgage: Fiction,
    },
  ]);

  const bgColors = [
    "#FF5209",
    "#D7A4FF",
    "#148A08",
    "#84C2FF",
    "#902500",
    "#7358FF",
    "#FF4ADE",
    "#E61E32",
    "#6CD061",
  ];

  const [selectedGenre, setSelectedGenre] = useState([]);

  const removeGenre = (index) => {
    const newGenre = selectedGenre.filter((item) => item !== index);
    setSelectedGenre(newGenre);

    // setSelectedGenre([...selectedGenre.filter((item) => item !== index)]);
  };

  const selectGenre = (index) => {
    setSelectedGenre([...selectedGenre, index]);
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        <h2>Super App</h2>
        <h1>Choose your entertainment category</h1>
        <div className={style.selected}>
          {selectedGenre.map((item) => (
            <div key={item} className={style.selectedGenre}>
              {genres[item].title}
              <img src={genres[item].bgImgage} alt="images" />
              <button onClick={() => removeGenre(item)}>X</button>
            </div>
          ))}
        </div>
      </div>
      <div className={style.right}>
        <div className={style.genreGrid}>
          {genres.map((genre, index) => (
            <div
              key={index}
              className={style.genreCard}
              // onClick={() => {
              //   if (!selectedGenre.includes(index)) {
              //     setSelectedGenre([...selectedGenre, index]);
              //   }
              // }}
              onClick={() => selectGenre(index)}
            >
              {genre.title}
              <img
                src={genre.bgImgage}
                alt="GnereImages"
                className={style.images}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenrePage;
