import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const Contact = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fatchData("/static/info.json");
      setData(fetchedData);
    };
    fetchDataAsync();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setFormError(false);
      window.location.href = `mailto:vibhupandey.vp@gmail.com?cc=skyldragon.md@gmail.com&subject=${encodeURIComponent(
        formData.subject || "Enquiry"
      )}&body=Hi Vibhu%0D%0A%0D%0AI'm ${encodeURIComponent(
        formData.name
      )}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          onChange={handleChange}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      defaultValue={""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="dizme_tm_button">
                    <a
                      id="send_message"
                      href={`mailto:vibhupandey.vp@gmail.com?cc=skyldragon.md@gmail.com&subject=${formData.subject}&body=Hi Vibhu%0D%0A%0D%0AI'm ${formData.name}%0D%0A%0D%0A${formData.message}`}
                    >
                      <span>Contact Us</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            {/* Brush and map sections */}
          </div>
        </div>
        {/* Brush */}
      </div>
    </div>
  );
};

export default Contact;
