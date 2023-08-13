import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${data.name} thanks for bieng here.you'l get a confirmation message on ${data.number} and on your email ${data.email} with this ${data.message}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="submit" onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                required
                  type="text"
                  name="name"
                  class="form-control"
                  onChange={handleInput}
                  value={data.name}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone number
                </label>
                <input
                required
                  type="number"
                  name="number"
                  class="form-control"
                  onChange={handleInput}
                  value={data.number}
                  placeholder="Phone no."
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                required
                  type="email"
                  name="email"
                  class="form-control"
                  value={data.email}
                  onChange={handleInput}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  message
                </label>
                <textarea
                required
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={handleInput}
                  rows="3"
                ></textarea>
              </div>
              <div class="row mx-auto">
                <button class="btn bg-success text-white" type="submit">
                  Submit form
                </button>
              </div>
            </form>
            <div className="google-map mt-5 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.37738500282205!2d72.43862077573942!3d33.862017641162616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1c101ee0c24b%3A0xa83f23663ccbcecb!2sVC6Q%2BPHV%2C%20MRF%20Colony%2C%20Kamra%20Kalan%2C%20Attock%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1691956407355!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
