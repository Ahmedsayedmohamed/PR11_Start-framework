import React from "react";
import DisplayPic from "./DisplayPic";
// import DisplayPic from "./DisplayPic";

export default function Item({ data }) {
  // function handle(e){
  //   console.log(e.target);
  // }

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div
          id="item"
          className="content position-relative rounded-3 overflow-hidden"
        >
          <img src={data} alt="PORT1" className="w-100"/>
          <div
            className="layer"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
          >
            <i className="fa-solid fa-plus fs-95 fw-900 "></i>
          </div>
        </div>
          <DisplayPic data={data}/>
      </div>
    </>
  );
}
