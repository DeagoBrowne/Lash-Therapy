import React from "react";
import EmilyPic from "./siteImages/emily.jpg";

export default function AboutMe() {
  return (
    <main className="main-section">
      <p className="profile">
        Hello, <br />
        My name is Emily, and <br />
        I have many years experience in beauty industry.
        <br />
        Recently, I've taken an interest in eyeLashes
        (wink). <br />
        1 year and 4 months experience. <br />
        Also love doing gel nails
        Eyebrows etc
      </p>
      <img src={EmilyPic} alt="" className="aboutMeImage" />
    </main>
  )
}