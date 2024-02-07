import React from "react";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container content  d-flex justify-content-center align-items-center flex-column py-5 ">
          <h2 className="fs-1 fw-700 mt-5">ABOUT COMPONENT</h2>
          <div className="decoration position-relative py-4">
            <div className="line">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="row px-5 gy-5">
            <div className="col-lg-6">
              <div className="text">
                <p className="ps-lg-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text">
                <p className="ps-lg-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
