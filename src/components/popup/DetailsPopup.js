const DetailsPopup = ({ open, close, item }) => {
  // Fallback content when no item is provided
  const fallback = {
    title: "Lonar Ai",
    categoryLabel: "Whatsapp Bot",
    description:
      "Spice up your chat game with our seductively savvy WhatsApp bot – where every message leaves them wanting more!",
    description2:
      "We've developed over 90 tools, ranging from Chrome extensions to chatbots and automation scripts, many of which are confidential. As such, I'm sharing only snapshots of 2-3 tools that have been published and are currently in internal use.",
    techStack: "Node.js, React, Python, OpenAI, AWS",
    date: "March 07, 2021",
    cover: "img/portfolio/lonar.png",
    gallery: [
      "img/portfolio/linkdln.png",
      "img/portfolio/telegram.png",
      "img/portfolio/cryso.png",
    ],
  };

  const i = item || fallback;

  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url={i.cover}
                style={{ backgroundImage: `url(${i.cover})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{i.title}</h3>
              {i.categoryLabel && (
                <span>
                  <a href="#">{i.categoryLabel}</a>
                </span>
              )}
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                {i.description && (
                  <p dangerouslySetInnerHTML={{ __html: i.description }} />
                )}
                {i.description2 && (
                  <p dangerouslySetInnerHTML={{ __html: i.description2 }} />
                )}
              </div>
              <div className="detailbox">
                <ul>
                  {i.techStack && (
                    <li>
                      <span className="first">Tech Stack</span>
                      <span>{i.techStack}</span>
                    </li>
                  )}
                  {i.categoryLabel && (
                    <li>
                      <span className="first">Category</span>
                      <span>
                        <a href="#">{i.categoryLabel}</a>
                      </span>
                    </li>
                  )}
                  {i.date && (
                    <li>
                      <span className="first">Date</span>
                      <span>{i.date}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {Array.isArray(i.gallery) && i.gallery.length > 0 && (
              <div className="additional_images">
                <ul>
                  {i.gallery.map((g, idx) => (
                    <li key={idx}>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="img/thumbs/4-2.jpg" alt="image" />
                          <div
                            className="main"
                            data-img-url={g}
                            style={{ backgroundImage: `url(${g})` }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {i.ctaLink && (
              <div
                className="portfolio_popup_footer"
                style={{
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 0",
                  textAlign: "center",
                  background:
                    "linear-gradient(to top, rgba(255,255,255,1) 70%, rgba(255,255,255,0))",
                  backdropFilter: "blur(4px)",
                  zIndex: 999,
                }}
              >
                <div className="dizme_tm_button">
                  <a href={i.ctaLink} target="_blank" rel="noopener noreferrer">
                    <span>{i.ctaText || "View Project"}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
