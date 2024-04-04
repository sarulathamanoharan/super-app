import React, { useState } from "react";
import bgImage from "../../assets/backgroundImage.png";
import style from "./Registration.module.css";

function Registration() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [shareData, setShareData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!name) {
      alert("Name is required!");
      return;
    }
    if (!username) {
      alert("Username is required!");
      return;
    }
    if (!email) {
      alert("Email is required!");
      return;
    } else if (!regex.test(email)) {
      alert("This is not a valid email format!");
      return;
    }
    if (!mobile) {
      alert("Moblile Number is required");
      return;
    } else if (mobile.length < 10) {
      alert("Please Enter correct number!");
      return;
    }
    if (!shareData) {
      alert("Check this box if you want to proceed");
      return;
    } else {
      const currentUser = { name, username, email, mobile, shareData };
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    console.log(JSON.parse(localStorage.getItem("currentUser")));
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        <div className={style.leftHeader}>
          <h1>
            Discover new things on <br />
            SuperApp
          </h1>
        </div>
        <img src={bgImage} className={style.bgImage} alt="backgroundImage" />
      </div>
      <div className={style.right}>
        <div>
          <p className={style.para1}>Super app</p>
          <p>Create your new account</p>
        </div>
        <div className={style.form}>
          <form>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <div className={style.checkbox}>
              <input
                type="checkbox"
                value={shareData}
                onChange={(e) => setShareData(e.target.checked)}
              />
              <label htmlFor="">Share my registration data with Superapp</label>
            </div>
          </form>
        </div>
        <div className={style.footer}>
          <button onClick={handleSubmit}>SIGN UP</button>
          <p className={style.para2}>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p className={style.para2}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
