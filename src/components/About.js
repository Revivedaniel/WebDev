import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`As a highly skilled Software Engineer and Cloud solutions expert, I bring a wealth of knowledge to the table. Currently working for Microsoft on the Azure Resource Manager team, I provide crucial support to senior cloud engineers from various companies, guiding them through the development of Azure Policies, ARM templates, Bicep templates, and Terraform IAC. With a talent for troubleshooting unexpected behavior, I also share my expertise on best practices for IAC, Policy, and ARM SDKs.`}
            </p>
            <p className="desc">
              {`When I'm not working, I moonlight as a Teaching Assistant for the UCLA Coding Bootcamp, imparting my knowledge to eager students as I guide them through the creation of full-stack web applications using the MERN stack. Whether it's frontend technologies like Semantic HTML, Responsive CSS, and DOM Manipulation with JavaScript, or backend technologies like Node, Express, GraphQL, MongoDB, and SQL, I'm a developer who brings both creativity and technical skill to the table.`}
            </p>
          </div>
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Daniel Stark</th>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <th>Orange County, CA</th>
                  </tr>
                  <tr>
                    <th>linkedin</th>
                    <th><a href="https://www.linkedin.com/in/dannyjstark/" target="_blank">Daniel Stark</a></th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+19493963988">(+1) 949 396-3988</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:contact@danielstark.dev">
                        contact@danielstark.dev
                      </a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about_right">
              <div className="resumo_fn_cv_btn">
                <a href="img/Daniel_Stark.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
          <div className="resumo_fn_tabs">
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Skills
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab_content">
              
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>University California, Irvine</h5>
                          <span>( 2021 )</span>
                        </div>
                        <h3>Fullstack Web Development Bootcamp</h3>
                        <p>
                        A 24 Unit intensive program focused on gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. 
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                <div className="resumo_fn_progress_bar">
                    <div className="item_in">
                      <h3 className="progress_title">React.js, Next.js, HTML5, JavaScript ES6+</h3>
                    </div>
                    <div className="item_in">
                      <h3 className="progress_title"> CSS3, Bootstrap, Material UI</h3>
                    </div>
                    <div className="item_in">
                      <h3 className="progress_title">Express(REST), GraphQL, JsonWebToken(JWT)</h3>
                    </div>
                    <div className="item_in">
                      <h3 className="progress_title"> SQL, NoSQL, Mongoose(MongoDB), Sequelize(MySQL)</h3>
                    </div>
                    <div className="item_in">
                      <h3 className="progress_title">C#, Typescript, Git</h3>
                    </div>
                </div>
                

                <div className="resumo_fn_desc">
                  <p>
                    Comfortable working in MERN and ASP .NET stacks. Open to learning new technologies and frameworks. Very familiar with Agile development methodologies. Great understanding of Object Oriented Programming and Software Design Patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
