import React, { useRef } from "react";
import { Button, colors } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(alert("thank you!   ⚛  "));

    emailjs
      .sendForm(
        "service_drremfp",
        "template_8bd4rts",
        form.current,
        "GnFnxeIY06nvC3Qbm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="Contact" className="contact-section">
      <div className="contact-info">
        <div className="contact-content">
          <h1 className=" title-contact">Get in touch:</h1>

          <div className="form-div">
            <form ref={form} className="form-container" onSubmit={sendEmail}>
              <div className="input-box">
                <label name="user_name" type="Name">
                  Name
                </label>
                <input type="text" id="name" placeholder="Who Are You?" />
              </div>
              <div className="input-box">
                <label name="user_email" type="email">
                  Email
                </label>
                <input type="text" id="email" placeholder="name@email.com" />
              </div>
              <div className="input-box">
                <label type="email">Message</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="How can i help you?"
                />
                <a
                  className="checkbox"
                  target="blank"
                  href="../src/Components/privacy.html"
                >
                  <input required type="checkbox" /> I read an accept Privacy
                  polices
                </a>

                <Button
                  type="submit"
                  value="Send"
                  className="btn-mui"
                  variant="outlined"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          <h2 className="info-contact"></h2>
        </div>
      </div>
    </div>
  );
}
