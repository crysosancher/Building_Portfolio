import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
// add public/josei.json to the import path if needed
import josei from "../../public/Projects/josei.json";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} dataText={josei} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Explore my portfolio and discover a showcase of my amazing works –
              where innovation meets excellence!
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  {/**!! Youtube */}
                  Frontend
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Tools
                </a>
              </li> */}
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  {/* Soundcloud */}
                  Full Stack
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Backend
                </a>
              </li> */}
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Backend & Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* ComfortJouney */}
              {/* <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Comfortjourney"
                    data-category="Full Stack WebApp"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://www.comfortjourney.in/"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34 copy.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/comfort.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>comfortjourney</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li> */}

              {/* ClickUp */}
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Clickup"
                    data-category="Frontend"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://prompt-mu.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/clickup.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Clickup</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>

              {/* Shiva Cruz */}
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Community Page"
                    data-category="Frontend"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://shivacruz.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/community.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Community Website</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              {/*  */}
              {/* <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Comfortjouney"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li> */}
              {/* Elitmus */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Online Gaming"
                    data-category="Full Stack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://elitmus1.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/elitmus.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Online Gaming</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>

              {/* Firebond */}
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Firebond"
                    data-category="Frontend "
                  >
                    <a
                      // className="popup-youtube"
                      href="https://www.firebond.xyz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/thumbs/42-34 copy.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/firebond.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Firebond</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              {/* comfortJourney */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Comfortjourney"
                    data-category="Full Stack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://www.comfortjourney.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/comfort.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>ComfortJourney</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>

              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}
                         {/* Lonar AI Project */}
              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Tool Summary"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/lonar.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Tool Summary</h3>
                    <span>Backend</span>
                  </div>
                </div>
              </li>
                                       {/* Best Fit */}
              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Tool Summary"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/lonar.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Tool Summary</h3>
                    <span>Backend</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
