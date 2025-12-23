import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { portfolioItems } from "../data/portfolioData";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const container = document.querySelector(".gallery_zoom");
      if (!container) return;
      isotope.current = new Isotope(container, {
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
    return () => {
      clearTimeout(timeoutId);
      if (isotope.current && typeof isotope.current.destroy === "function") {
        isotope.current.destroy();
        isotope.current = null;
      }
    };
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
  const [selectedItem, setSelectedItem] = useState(null);

  // Portfolio items from imported module
  const items = portfolioItems;

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup
        open={popup}
        close={() => setPopup(false)}
        item={selectedItem}
      />
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

              {/* Data-driven items */}
              {items.map((it) => (
                <li
                  key={it.id}
                  className={`${it.filterClass} grid-item`}
                  onClick={() => {
                    setSelectedItem(it);
                    setPopup(true);
                  }}
                >
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={it.title}
                      data-category={it.categoryLabel}
                    >
                      <a className="portfolio_popup" href="#">
                        <img src={it.thumb} alt="image" />
                        <div className="main" data-img-url={it.cover} />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{it.title}</h3>
                      <span>{it.categoryLabel}</span>
                    </div>
                  </div>
                </li>
              ))}
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
