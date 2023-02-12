import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: "Before You Play",
      tag: "Full Stack Web Application, Video Games",
      desc: [
        {
          p: "A Full Stack MERN App which generates video game information using OpenAI.",
        },
      ],
      gitHub: "BeforeYouPlay",
      liveSite: "https://before-you-play.herokuapp.com/",
    },
    {
      name: "Midnight Motorsports",
      tag: "Full Stack Web Application, E-commerce",
      desc: [
        {
          p: "A Full-Stack MERN auto part e-commerce website. This site utilizes Next.js framework for the frontend, Keystone for the backend, and MongoDB for the database. Midnight Motorsports is still being developed but the code is open source.",
        },
      ],
      gitHub: "midnightmotorsports-next",
    },
    {
      name: "Eve Logistics",
      tag: "Full Stack Web Application, Tools, Eve Online",
      desc: [
        {
          p: "This website is a a third party application that aims to help Eve Online plays with Logistics such as assets, industry, Market, and Hauling.",
        },
      ],
      gitHub: "EveLogistics-Frontend",
      liveSite: "https://www.eveonlinelogistics.com"
    },
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
                          cursor: "pointer",
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
                      {d.liveSite && (
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
                      )}
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
