import React from "react";
import logo_svg from "./images/logo.svg";
import nav_ic from "./images/nav-ic.svg";
import banner_hero from "./images/banner-hero-img@2x.png";
import mobile_banner from "./images/mobile-banner-img@2x.png";
import social_fream from "./images/social-fream.png";
import Reviews from "./Reviews";
import Days from "./Days";
import Work from "./Work";
import Platform from "./Platform";
import Future from "./Future";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <header>
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#NavbarToggle"
              aria-controls="NavbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src={logo_svg} alt="Logo" />
            </a>

            <a href="/" class="btn-nav mobile-nav">
              <span>
                <img src={nav_ic} alt="" />
              </span>
            </a>
            <div class="collapse navbar-collapse" id="NavbarToggle">
              <div class="nav-row">
                <ul class="navbar-nav">
                  <li>
                    <a class="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/plateform">
                      Plateform
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/feature">
                    Features
                    </a>
                  </li>
                  <li>
                    <a class="nav-link" href="/post">
                      Posts 
                    </a>
                  </li>
                </ul>

                <a href="/" class="btn-nav">
                  <span>
                    <img src={nav_ic} alt="" /> Schedule a post
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section class="hero-banner">
        <div class="container">
          <div class="hero-block">
            <div class="hero-data">
              <h1>Introducing ZuperPost.com: </h1>
              <h2>
                Your <span>All-in-One</span> Social Media Scheduling Solution
              </h2>

              <p>
                Streamline your social media presence and save time with
                ZuperPost, the intuitive and affordable post scheduler designed
                to help you stay on top of your content game.
              </p>

              <div class="btn-group">
                <a href="/" class="btn-main">
                  <span>Schedule a post</span>
                </a>
                <a href="/" class="btn-secondary">
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            <div class="banner-img">
              {/* <img src={banner_hero} alt="" class="desktop-img" /> */}
              {/* <img src={mobile_banner} alt="" class="mobile-img" /> */}
            </div>

            <img src={social_fream} alt="" class="back-fream" />
          </div>
        </div>
      </section>

      
      <Reviews />

      <Work />

      <Platform />
      
      <Future />

      <Days />

      <Footer />
    </>
  );
};

export default Home;
