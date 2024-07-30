import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/client.css";
import Slider from "react-slick";
import client_img1 from "./images/client-img1.png";
import client_img2 from "./images/client-img2.png";
import client_img3 from "./images/client-img3.png";
import client_img4 from "./images/client-img4.png";

function Client() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 3,
    
  };
  return (
    <>
      {/* Client  */}
      <section class="client-wrp">
        <div class="container">
          <h2>
            20,000+ clients in 100+ countries enhance business growth with our
            ZuperPost services
          </h2>
          <p>
            Streamline your social media presence and save time with ZuperPost,
            the intuitive and affordable post scheduler designed to help you
            stay on top of your content game.
          </p>

          <div class="client-slider">
            <Slider {...settings}>
              <div class="client-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img1} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block yellow-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img2} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block blue-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img3} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block green-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img4} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img1} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block yellow-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img2} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block blue-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img3} alt="" />
                  </div>
                </div>
              </div>

              <div class="client-block green-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img4} alt="" />
                  </div>
                </div>
              </div>
              <div class="client-block yellow-block">
                <div class="client-box">
                  <div class="client-img">
                    <img src={client_img2} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;




