import { useState } from "react";
import axios from "axios";


const Contact = () => {
  const [defaultError, setDefaultError] = useState("Please Fill Required Fields!");
  let CONTACT = "https://stark-portfolio.herokuapp.com/api/messages";
  const [form, setForm] = useState({ email: "", name: "", phone: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, phone, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && phone && msg) {
      axios
        .post(CONTACT, {
          name: name,
          email: email,
          message: msg,
        })
        .then(function (response) {
          console.log(response);
          setSuccess(true);
          setTimeout(() => {
            setForm({ email: "", name: "", phone: "", msg: "" });
            setSuccess(false);
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
          setDefaultError("Something Went Wrong!");
          setError(true);
          setTimeout(() => {
            setDefaultError("Please Fill Required Fields!");
            setError(false);
          }, 2000);
        });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Contact</h3>
            <h3 className="title">Get In Touch</h3>
            <p className="desc">
              Reach out to me on LinkedIn or send me an email. I look forward to hearing from you!  
            </p>
            <p>LinkedIn</p>
            <h3>
              <a href="https://www.linkedin.com/in/dannyjstark/">Daniel Stark</a>
            </h3>
            <p>
              <a className="fn__link" href="mailto:contact@danielstark.dev">
                contact@danielstark.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
