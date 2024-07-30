import React from "react";
import plat_ic1 from "./images/plat-ic1.svg";
import platform from './images/platform-img@2x.png';
import Other_pf from "./Other_pf";
// import platform_img1 from "./images/platform-img1.svg";
// import platform_img2 from "./images/platform-img2.svg";
// import platform_img3 from "./images/platform-img.svg";
// import platform_shp from './images/platform-shp.svg';

const Platform = () => {
  return (
    <>
      {/* platform */}
      <section class="platform-wrp">
        <div class="container">
          <div class="platform-row">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="platform-data">
                  <h6>
                    <img src={plat_ic1} alt="" /> Plateforme
                  </h6>
                  <h2>Effortless Scheduling for Every Platform</h2>
                  <p>
                    With ZuperPost, you can easily plan and schedule your posts
                    across all major social media platforms from a single,
                    user-friendly dashboard. Whether you're managing Facebook,
                    Twitter, Instagram, LinkedIn, or any other network, our app
                    ensures your content goes live exactly when you want it to.
                  </p>

                  <a href="#" class="btn-arrow">
                    <span>
                      <i class="far fa-arrow-right fa-fw"></i> Learn more
                    </span>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="platform-img">
                  <img src={platform} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Other_pf/>
        
    </>
  );
};

export default Platform;
