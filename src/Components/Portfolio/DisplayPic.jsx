import React from "react";
import port1 from "../../Assets/port1.png";

export default function DisplayPic({data}) {
  return (
    <>
        <div>
          <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <img src={data} alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
