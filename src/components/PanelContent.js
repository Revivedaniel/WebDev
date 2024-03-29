import { useEffect } from "react";

const PanelContent = () => {
  useEffect(() => {
    const Typed = require("typed.js");
    new Typed(".animated_title", {
      strings: ["Daniel Stark", "A Software Engineer", "A Web Developer", "A Cloud Engineer", "A Sound Designer", "A Gamer"],
      loop: true,
      smartBackspace: false,
      typeSpeed: 50,
      startDelay: 700,
      backDelay: 3e3,
    });
  }, []);
  return (
    <div className="right_in">
      <div className="right_top">
        <div className="border1" />
        <div className="border2" />
        <div className="img_holder">
          <img src="img/thumb/square.webp" alt="image" />
          <div className="abs_img" data-bg-img="img/right.webp" />
        </div>
        <div className="title_holder">
          <h5>Hi There! I am</h5>
          <p className="h3">
            <span className="animated_title" />
          </p>
        </div>
      </div>
      <div className="right_bottom">
        <a href="#contact">
          <span className="circle" />
          <span className="text">
            I’m available for employment and freelance. Hire me
          </span>
        </a>
      </div>
    </div>
  );
};

export default PanelContent;
