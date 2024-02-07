import React from "react";
import img1 from "../../Assets/avataaars.svg";

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="container content h-100 d-flex justify-content-center align-items-center flex-column py-5 ">
          <img src={img1} alt="myPic" />
          <h2 className="fs-1 fw-700 mt-5">START FRAMEWORK</h2>
          <div className="decoration position-relative  py-4">
            <div className="line">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="text">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </section>
    </>
  );
}
