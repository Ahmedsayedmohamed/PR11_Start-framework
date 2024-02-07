import React from "react";
import Item from "./Item";
import port1 from "../../Assets/port1.png";
import port2 from "../../Assets/port2.png";
import port3 from "../../Assets/port3.png";
import DisplayPic from "./DisplayPic";

export default function Portfolio() {
  const pics = [port1, port2, port3, port1, port2, port3];

  return (
    <>
      <section id="portfolio" className="bgWhite pt-4">
        <div className="container content d-flex justify-content-center align-items-center flex-column py-5 ">
          <h2 className="fs-1 fw-700 mt-5">PORTFOLIO COMPONENT</h2>
          <div className="decoration position-relative py-4">
            <div className="line">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="row gy-5">
            {pics.map((item, index) => (
              <Item key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
