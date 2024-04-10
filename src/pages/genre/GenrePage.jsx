import React, { useState, useEffect } from "react";
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
import { IoIosWarning } from "react-icons/io";

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
  const [lengthWarning, setLengthWarning] = useState(false);

  useEffect(() => {
    if (selectedGenre.length >= 3) {
      setLengthWarning(false);
    }
    localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
    console.log(localStorage.getItem("selectedGenre"));
  }, [selectedGenre]);

  const removeGenre = (index) => {
    const newGenre = selectedGenre.filter((item) => item !== index);
    setSelectedGenre(newGenre);

    // setSelectedGenre([...selectedGenre.filter((item) => item !== index)]);
  };

  const selectGenre = (index) => {
    if (selectedGenre.includes(index)) return;
    setSelectedGenre((prev) => [...prev, index]);
  };

  const handleNext = () => {
    if (selectedGenre.length < 3) {
      setLengthWarning(true);
    } else {
      setLengthWarning(false);
    }
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        <div>
          <h1 className={style.leftHeader}>Super app</h1>
          <h2 className={style.leftSubHeader}>
            Choose your <br /> entertainment <br /> category
          </h2>
        </div>
        <div className={style.selected}>
          {selectedGenre.map((item, index) => (
            <div key={item} className={style.selectedGenre}>
              {genres[item].title}
              <button onClick={() => removeGenre(item)}>X</button>
            </div>
          ))}
        </div>
        {lengthWarning && (
          <div className={style.warning}>
            <IoIosWarning /> <div> &nbsp;Minimum 3 category required</div>
          </div>
        )}
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
              style={{ backgroundColor: bgColors[index] }}
            >
              <div className={style.title}> {genre.title}</div>
              <img
                src={genre.bgImgage}
                alt="GnereImages"
                className={style.images}
              />
            </div>
          ))}
        </div>
        <button className={style.nextbutton} onClick={handleNext}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GenrePage;
