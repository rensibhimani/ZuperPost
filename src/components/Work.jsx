import React from "react";
import work_img1 from "./images/work-img1.svg";
import work_img2 from "./images/work-img2.svg";
import work_img3 from "./images/work-img3.svg";
import how_it_shap from "./images/how-it-shap.svg";

const Work = () => {
  return (
    <>
      {/* work */}
      <section class="how-it-work-wrp">
        <div class="container">
          <h2>How it works?</h2>
          <h6>
            Streamline your social media presence and save time with ZuperPost,
            the intuitive and affordable post scheduler designed to help you
            stay on top of your content game.
          </h6>

          <div class="row">
            <div class="col-md-4 col-sm-12">
              <div class="work-block">
                <div class="work-img">
                  <img src={work_img1} alt="" />
                </div>
                <div class="work-data">
                  <h3>Connect Your Social Media Accounts</h3>
                  <p>
                    Getting started with ZuperPost is a breeze. Simply connect
                    all your social media accounts – Facebook, Twitter,
                    Instagram, LinkedIn, and more – to our platform. Don't
                    worry; your data is always safe and secure with us.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="work-block">
                <div class="work-img">
                  <img src={work_img2} alt="" />
                </div>
                <div class="work-data">
                  <h3>Create and Schedule Your Content</h3>
                  <p>
                    Once your accounts are connected, it's time to let your
                    creativity shine. Create captivating posts using our
                    user-friendly editor, or let our AI assistant help you
                    generate engaging content ideas. When your post is ready,
                    choose the date and time you want it to go live, and
                    ZuperPost will take care of the rest.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="work-block">
                <div class="work-img">
                  <img src={work_img3} alt="" />
                </div>
                <div class="work-data">
                  <h3>Analyze and Optimize Your Performance</h3>
                  <p>
                    After your posts are published, ZuperPost provides you with
                    comprehensive analytics to track your social media
                    performance. Gain valuable insights into your audience
                    engagement, reach, and growth, so you can continually refine
                    your strategy and maximize your results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={how_it_shap} alt="" class="work-shp" />
      </section>

      
    </>
  );
};

export default Work;
