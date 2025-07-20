const DetailsPopup = ({ open, close, dataText }) => {
  console.log("DetailsPopup", open, close, dataText);
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
                data-img-url="img/portfolio/lonar.png"
                style={{ backgroundImage: 'url("img/portfolio/6.jpg")' }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>Lonar Ai</h3>
              <span>
                <a href="#">Whatsapp Bot</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  Spice up your chat game with our seductively savvy WhatsApp
                  bot – where every message leaves them wanting more!
                </p>
                <p>
                  {`We've developed over 90 tools, ranging from Chrome extensions to chatbots and automation scripts, many of which are confidential. As such, I'm sharing only snapshots of 2-3 tools that have been published and are currently in internal use.`}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Teach Stack</span>
                    <span>Node js, ReactJs, Python, OpenAi and AWS</span>
                  </li>
                  <li>
                    <span className="first">Category</span>
                    <span>
                      <a href="#">Miscellaneous</a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Date</span>
                    <span>March 07, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="additional_images">
              <ul>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/linkdln.png"
                        style={{
                          backgroundImage: 'url("img/portfolio/1.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/telegram.png"
                        style={{
                          backgroundImage: 'url("img/portfolio/2.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div className="my_image">
                      <img src="img/thumbs/4-2.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/cryso.png"
                        style={{
                          backgroundImage: 'url("img/portfolio/3.jpg")',
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Updated Visit Button Section */}
            <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPopup;
