import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Game Watch",
      tag: "Full Stack Web Application, Video Games",
      desc: [
        {
          p: "With this project we are tackling the problem of not having quick video game information. Now users have the ability to search the video games they want more information about and leave reviews.",
        },
      ],
      gitHub: "GameWatch",
      liveSite: "https://lazy-afternoon-game-watch.herokuapp.com/",
    },
    {
      name: "Midnight Motorsports",
      tag: "Full Stack Web Application, E-commerce",
      desc: [
        {
          p: "Midnight Motorsports is an autopart e-commerce site. Where users can browse through the products and add them to their cart. The site uses Stripe to create a user friendly experience while keeping the users data highly secure. The site is built with Next.js as the frontend and Keystone for the backend and CMS. As for the database we are using mongoose to interface with a NoSQL database called MongoDB.",
        },
      ],
      gitHub: "midnightmotorsports-next",
      liveSite: "https://midnight-motorsports.herokuapp.com/"
    },
    {
      name: "Lazy Afternoon Blog",
      tag: "Full Stack Web Application, Blog, Video Games",
      desc: [
        {
          p: "Lazy Afternoon Blog is a blog site where users can post and share their thoughts about Video Games with other users. The site is built with Handlebars.js as the View and Express.js as the Controller. As for the database we are using Sequelize to interface interface with MySQL and model our data.",
        }
      ],
      gitHub: "LazyAfternoonBlog",
      liveSite: "https://lazy-afternoon-blog.herokuapp.com/"
    }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.name}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/portfolio/${index}.gif`}
                      />
                    </div>
                    {d.desc.map((des, i) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          backgroundImage: "url(img/GitHub-Mark-64px.png)",
                          backgroundColor: "white",
                          borderRadius: "50%",
                        }}
                        onClick={() =>
                          window.open(
                            `https://github.com/Revivedaniel/${d.gitHub}`,
                            "_blank"
                          )
                        }
                      />
                      <a
                        href={d.liveSite}
                        style={{
                          cursor: "pointer",
                          textDecoration: "none",
                          fontSize: "1.5rem",
                        }}
                        target="_blank"
                      >
                        Live Site
                      </a>
                    </div>
                  </div>
                )
            )}
          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
