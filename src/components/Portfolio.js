import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSliderProps } from "../sliderProps";
import Modalbox from "./Modalbox";
const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  return (
    <section id="portfolio">
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <h3 className="subtitle">Portfolio</h3>
            <h3 className="title">Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className="container noright">
        <div className="roww">
          <Swiper
            {...portfolioSliderProps}
            className="owl-carousel modal_items"
            data-from="portfolio"
          >
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModalValue(1);
                setModal(true);
                // Increment per project
              }}
              // Increment per project
              data-index={1}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                {/* Put project image in this div as data-bg-img */}
                <div className="abs_img" data-bg-img="img/portfolio/gameWatch.jpg" />
              </div>
              <div className="title_holder">
                {/* Project type */}
                <p>Full Stack Web Application</p>
                <h3>
                  {/* Project name */}
                  <a href="#">Game Watch</a>
                </h3>
              </div>
              <div className="fn__hidden">
                {/* Project type */}
                <p className="fn__cat">Full Stack Web Application</p>
                {/* Project name */}
                <h3 className="fn__title">Game Watchasdasdfa</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  {/* Put project image in this div as data-bg-img */}
                  <div className="abs_img" data-bg-img="img/portfolio/gameWatch.jpg" />
                </div>
                {/* Put project desription here */}
                <p className="fn__desc">
                With this project we are tackling the problem of not having quick video game information. Now users have the ability to search the video games they want more information about and leave reviews.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModalValue(2);
                setModal(true);
                // Increment per project
              }}
              // Increment per project
              data-index={2}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                {/* Put project image in this div as data-bg-img */}
                <div className="abs_img" data-bg-img="img/portfolio/midnightMotorsports.PNG" />
              </div>
              <div className="title_holder">
                {/* Project type */}
                <p>Full Stack Web Application, E-commerce</p>
                <h3>
                  {/* Project name */}
                  <a href="#">Midnight Motorsports</a>
                </h3>
              </div>
              <div className="fn__hidden">
                {/* Project type */}
                <p className="fn__cat">Full Stack Web Application, E-commerce</p>
                {/* Project name */}
                <h3 className="fn__title">Midnight Motorsports</h3>
                <div className="img_holder">
                  <img src="img/thumb/square.jpg" alt="image" />
                  {/* Put project image in this div as data-bg-img */}
                  <div className="abs_img" data-bg-img="img/portfolio/midnightMotorsports.PNG" />
                </div>
                {/* Put project desription here */}
                <p className="fn__desc">
                Midnight Motorsports is an autopart e-commerce site. Where users can browse through the products and add them to their cart. The site uses Stripe to create a user friendly experience while keeping the users credit card information highly secure. The site is built with Next.js as the frontend and Keystone for the backend and CMS. As for the database we are using mongoose to interface with a NoSQL database called MongoDB.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
