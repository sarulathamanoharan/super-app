import React, { useState, useEffect } from "react";
import styles from "./TimerWidget.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TiArrowSortedDown } from "react-icons/ti";

import { TiArrowSortedUp } from "react-icons/ti";

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(intervalId);
              setIsActive(false);
              return;
            }
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, hours, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
    setDuration(hours * 3600 + minutes * 60 + seconds);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setDuration(0);
  };

  const increment = (setter) => {
    setter((prevValue) => prevValue + 1);
  };

  const decrement = (setter) => {
    setter((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };
  const percentage = isActive
    ? Math.floor(
        ((duration - (hours * 3600 + minutes * 60 + seconds)) / duration) * 100
      )
    : 0;

  return (
    <div className={styles.timerWidget}>
      <div className={styles.left}>
        <div className={styles.circle}>
          <div
            style={{
              height: "150px",
              width: "150px",
              boxShadow: "0px 6px 26px 0px #5F5858 ",
              boxShadow: " 3px 2px 16px 4px #000000 inset",
              borderRadius: "500px",
              padding: "15px",
            }}
          >
            <CircularProgressbar
              value={isActive ? percentage : 100}
              text={`${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
              strokeWidth={3}
              background={false}
              styles={buildStyles({
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#FF6A6A",
                textColor: "#FFFFFF",
                trailColor: "#191E39",
              })}
              hey
            ></CircularProgressbar>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.label}>Hours</h3>
            <button
              className={styles.arrowIcon}
              onClick={() => increment(setHours)}
            >
              <TiArrowSortedUp />
            </button>
            <div className={styles.count}>
              {hours.toString().padStart(2, "0")}
            </div>
            <button
              className={styles.arrowIcon}
              onClick={() => decrement(setHours)}
            >
              <TiArrowSortedDown />
            </button>
          </div>
          <div className={styles.colon}>:</div>
          <div className={styles.column}>
            <h3 className={styles.label}>Minutes</h3>
            <button
              className={styles.arrowIcon}
              onClick={() => increment(setMinutes)}
            >
              <TiArrowSortedUp />
            </button>
            <div className={styles.count}>
              {minutes.toString().padStart(2, "0")}
            </div>
            <button
              className={styles.arrowIcon}
              onClick={() => decrement(setMinutes)}
            >
              <TiArrowSortedDown />
            </button>
          </div>
          <div className={styles.colon}>:</div>
          <div className={styles.column}>
            <h3 className={styles.label}>Seconds</h3>
            <button
              className={styles.arrowIcon}
              onClick={() => increment(setSeconds)}
            >
              <TiArrowSortedUp />
            </button>
            <div className={styles.count}>
              {seconds.toString().padStart(2, "0")}
            </div>
            <button
              className={styles.arrowIcon}
              onClick={() => decrement(setSeconds)}
            >
              <TiArrowSortedDown />
            </button>
          </div>
        </div>
        <div className={styles.action}>
          {isActive && (
            <>
              <button className={styles.stopbutton} onClick={stopTimer}>
                Stop
              </button>
              <button className={styles.resetbutton} onClick={resetTimer}>
                Reset
              </button>
            </>
          )}
          {!isActive && (
            <button className={styles.startbutton} onClick={startTimer}>
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
