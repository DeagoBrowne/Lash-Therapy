import React from "react";
import Image1 from "./siteImages/lashexample1.jpg"
import Image2 from "./siteImages/lashexample2.jpg"

export default function Gallery() {
  return (
    <>
      <h2 className="gallery--title">Gallery</h2>
      <div className="gallery--grid">
        <img src={Image1} alt="" className="gallery--image" />
        <img src={Image2} alt="" className="gallery--image" />
        <img src={Image1} alt="" className="gallery--image" />
        <img src={Image2} alt="" className="gallery--image" />
        <img src={Image1} alt="" className="gallery--image" />
        <img src={Image2} alt="" className="gallery--image" />
        <img src={Image1} alt="" className="gallery--image" />
        <img src={Image2} alt="" className="gallery--image" />
      </div>
    </>
  )
}