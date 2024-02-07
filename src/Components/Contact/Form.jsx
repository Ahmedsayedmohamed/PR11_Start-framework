import React, { useState } from "react";

export default function Form() {
  let myLabel = {};
  const [input, setInput] = useState(true);

  if (input) {
    myLabel = { top: "100%", position: "absolute" };
  } else {
    myLabel = { top: 0, position: "relative" };
  }

  return (
    <>
      <form className="d-flex flex-column w-50">
        <div className="label position-relative overflow-hidden ">
          <label className="form-label" style={myLabel}>
            userName :
          </label>
        </div>
        <input
          onClick={() => setInput(false)}
          type="text"
          className="form-control "
          placeholder="userName"
        />

        <div className="label position-relative overflow-hidden ">
          <label className="form-label" style={myLabel}>
            userAge :
          </label>
        </div>
        <input
          onClick={() => setInput(false)}
          type="text"
          className="form-control "
          placeholder="userAge"
        />

        <div className="label position-relative overflow-hidden ">
          <label className="form-label" style={myLabel}>
            userEmail :
          </label>
        </div>
        <input
          onClick={() => setInput(false)}
          type="text"
          className="form-control "
          placeholder="userEmail"
        />

        <div className="label position-relative overflow-hidden ">
          <label className="form-label" style={myLabel}>
            userPassword :
          </label>
        </div>
        <input
          onClick={() => setInput(false)}
          type="text"
          className="form-control "
          placeholder="userPassword"
        />
        <button className="btn">send Message</button>
      </form>
    </>
  );
}
