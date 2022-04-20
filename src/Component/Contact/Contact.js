import React, { useState } from "react";
import contact2 from "./contact_try2.jpg";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading">
            <h4>CONTACT</h4>
            <h1>Contact Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow flex-contact">
                <div className="img">
                  <img className="img-contact" src={contact2} alt="" />
                </div>
                <div className="details">
                  <h1>Samruddhi Modak</h1>
                  <p>VNIT, Nagpur</p>
                  <p>
                    I am available for freelance work. Connect with me via mail
                    and call in to my account.
                  </p>{" "}
                  <br />
                  <p className="contact-details">
                    Phone: <br />
                    +919518548960
                  </p>
                  <p className="contact-details">
                    {" "}
                    Email: <br /> samruddhisheetal@gmail.com{" "}
                  </p>{" "}
                  <br />
                </div>
              </div>
            </div>

            <div className="right box_shodow">
              <form action="https://formspree.io/f/mdobwvdr" method="POST">
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="f_flex">
                  <div className="input row">
                    <span>EMAIL </span>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>SUBJECT </span>
                    <input
                      type="text"
                      name="subject"
                      value={data.subject}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button type="submit" className=" btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
