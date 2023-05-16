import React from "react";
import EmilyPic from "./siteImages/emily.jpg";

export default function AboutMe() {
  return (
    <main className="main-section">
      <p className="profile">
        Hello , My name is Emily
        I have many years experience in beauty industry.
        Not long recently started taking an interested to Lashes
        1 year and 4 months experience
        Also love doing gel nails
        Eyebrows ect
        Something I really enjoy doing!
      </p>
      <img src={EmilyPic} alt="" className="aboutMeImage" />
    </main>
  )
}