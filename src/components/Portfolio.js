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
        <div className="row">
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
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/gameWatch.jpg"
                />
              </div>
              <div className="title_holder">
                {/* Project type */}
                <p>Full Stack Web Application</p>
                <h3>
                  {/* Project name */}
                  <a href="#">Game Watch</a>
                </h3>
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
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/midnightMotorsports.PNG"
                />
              </div>
              <div className="title_holder">
                {/* Project type */}
                <p>Full Stack Web Application, E-commerce</p>
                <h3>
                  {/* Project name */}
                  <a href="#">Midnight Motorsports</a>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="item modal_item"
              onClick={() => {
                setModalValue(3);
                setModal(true);
                // Increment per project
              }}
              // Increment per project
              data-index={3}
            >
              <div className="img_holder">
                <img src="img/thumb/square.jpg" alt="image" />
                {/* Put project image in this div as data-bg-img */}
                <div
                  className="abs_img"
                  data-bg-img="img/portfolio/lazyAfternoonBlog.PNG"
                />
              </div>
              <div className="title_holder">
                {/* Project type */}
                <p>Full Stack Web Application, Social, Video Games</p>
                <h3>
                  {/* Project name */}
                  <a href="#">Lazy Afternoon Blog</a>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
