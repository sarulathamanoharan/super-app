import React, { useState, useEffect } from "react";
import style from "./GenrePage.module.css";
import { IoIosWarning } from "react-icons/io";
import { genres } from "../../data/genre";

function GenrePage() {
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
