import React from "react";

export default function FooterInfo() {
  return (
    <>
      <section id="footerInfo" className="py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="content text-center ">
                <h3 className="text-uppercase  ">location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content text-center ">
                <h3 className="text-uppercase  ">AROUND THE WEB</h3>
                <ul className="list-unstyled  d-flex justify-content-center align-items-center p-0">
                  <li className="mx-2 p-1 px-2">
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li className="mx-2 p-1 px-2"><i className="fa-brands fa-twitter"></i></li>
                  <li className="mx-2 p-1 px-2"><i className="fa-brands fa-linkedin-in"></i></li>
                  <li className="mx-2 p-1 px-2"><i className="fa-solid fa-globe"></i></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content text-center ">
                <h3 className="text-uppercase  ">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
