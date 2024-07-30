import React from "react";
import ic1 from './images/ic1.png';
import ic2 from './images/ic2.svg';
import ic3 from './images/ic3.svg';
import ic4 from './images/ic4.svg';
import ic5 from './images/ic5.svg';
import ic6 from './images/ic6.svg';
import ic7 from './images/ic7.svg';
import ic8 from './images/ic8.svg';
import ic9 from './images/ic9.svg';
import review_img1 from './images/review-img1.png';
import review_img2 from './images/review-img2.png';
import review_img3 from './images/review-img3.png';
import review_img4 from './images/review-img4.png';
import review_img5 from './images/review-img5.png';
import review_img6 from './images/review-img6.png';
import review_lines from './images/review-lines.png';
import review_spin from './images/review-spin.svg';
import review_shp1 from './images/review-shp1.png';
import review_shp2 from './images/review-shp2.png';
import review_shp3 from './images/review-shp3.png';
import review_shp4 from './images/review-shp4.png';

const Reviews = () => {
  return (
    <>
      {/* Reviews */}
      <section class="review-wrp">
        <div class="container">
          <div class="desktop-review">
            <ul>
              <li>
                <div class="review-box">
                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                  >
                    <p>Effortless scheduling</p>
                    <img src={ic1} alt="" />
                  </div>
                  <div class="review-img">
                    <img src={review_img1} class="user-img" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div class="review-box marketingbx">
                  <div class="review-img">
                    <img src={review_img2}class="user-img" alt="" />
                    <img
                      src={review_shp1}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>

                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    <img src={ic2} alt="" />
                    <img src={ic3} class="ic3" alt="" />
                    <p>Marketing automation software</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="review-box schedulingbx">
                  <div class="review-img">
                    <img src={review_img3} class="user-img" alt="" />
                    <img
                      src={review_shp2}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>

                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="2000"
                  >
                    <img src={ic4} alt="" />
                    <img src={ic5} class="ic3" alt="" />
                    <p>Effortless scheduling</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="review-box east-post">
                  <div class="review-img">
                    <img src={review_img4} class="user-img" alt="" />
                    <img
                      src={review_shp3}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>

                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="2500"
                  >
                    <img src={ic6} alt="" />
                    <img src={ic7} class="ic3" alt="" />
                    <p>East to create post</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="review-box powerful-box">
                  <div class="review-img">
                    <img src={review_img5} class="user-img" alt="" />
                  </div>

                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="2500"
                  >
                    <p>Powerful sales software</p>
                    <img src={ic1} alt="" />
                  </div>
                </div>
              </li>
              <li>
                <div class="review-box automate-box">
                  <div class="review-img">
                    <img src={review_img6} class="user-img" alt="" />
                    <img
                      src={review_shp4}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>

                  <div
                    class="tooltipbx"
                    data-aos="fade-in"
                    data-aos-duration="1500"
                  >
                    <img src={ic8} alt="" />
                    <img src={ic9} class="ic3" alt="" />
                    <p>Automate marketing</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mobile-review">
          <div id="carouselTicker" class="carouselTicker">
            <ul class="carouselTicker__list">
              <li class="carouselTicker__item">
                <div class="review-box">
                  <div class="tooltipbx">
                    <p>Effortless scheduling</p>
                    <img src={ic1} alt="" />
                  </div>
                  <div class="review-img">
                    <img src={review_img1} class="user-img" alt="" />
                  </div>
                </div>
              </li>
              <li class="carouselTicker__item">
                <div class="review-box marketingbx">
                  <div class="tooltipbx">
                    <img src={ic2} alt="" />
                    <img src={ic3} class="ic3" alt="" />
                    <p>Marketing automation software</p>
                  </div>
                  <div class="review-img">
                    <img src={review_img2} class="user-img" alt="" />
                    <img
                      src={review_shp1}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>
                </div>
              </li>
              <li class="carouselTicker__item">
                <div class="review-box schedulingbx">
                  <div class="tooltipbx">
                    <img src={ic4} alt="" />
                    <img src={ic5} class="ic3" alt="" />
                    <p>Effortless scheduling</p>
                  </div>
                  <div class="review-img">
                    <img src={review_img3} class="user-img" alt="" />
                    <img
                      src={review_shp2}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>
                </div>
              </li>
              <li class="carouselTicker__item">
                <div class="review-box east-post">
                  <div class="tooltipbx">
                    <img src={ic6} alt="" />
                    <img src={ic7} class="ic3" alt="" />
                    <p>East to create post</p>
                  </div>
                  <div class="review-img">
                    <img src={review_img4} class="user-img" alt="" />
                    <img
                      src={review_shp3}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>
                </div>
              </li>
              <li class="carouselTicker__item">
                <div class="review-box powerful-box">
                  <div class="tooltipbx">
                    <p>Powerful sales software</p>
                    <img src={ic1} alt="" />
                  </div>
                  <div class="review-img">
                    <img src={review_img5} class="user-img" alt="" />
                  </div>
                </div>
              </li>
              <li class="carouselTicker__item">
                <div class="review-box automate-box">
                  <div class="tooltipbx">
                    <img src={ic8} alt="" />
                    <img src={ic9} class="ic3" alt="" />
                    <p>Automate marketing</p>
                  </div>
                  <div class="review-img">
                    <img src={review_img6} class="user-img" alt="" />
                    <img
                      src={review_shp4}
                      alt=""
                      class="reviewshp1"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <img src={review_lines} alt="" class="lines-img" />

        <img src={review_spin} alt="" class="innershp" />
      </section>
      {/* End Reviews  */}
    </>
  );
};

export default Reviews;
