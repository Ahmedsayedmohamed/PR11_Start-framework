import Form from "./Form";

export default function Contact() {
  return (
    <>
      <section id="contact" className="bgWhite pt-4">
        <div className="container content d-flex justify-content-center align-items-center flex-column py-5 ">
          <h2 className="fs-1 fw-700 mt-5">CONATCT SECTION</h2>
          <div className="decoration position-relative py-4">
            <div className="line">
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
