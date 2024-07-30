import React from 'react'
import feature_ic1 from './images/feature-ic1.svg';
import feature_ic2 from './images/feature-ic2.svg';
import feature_ic3 from './images/feature-ic3.svg';
import feature_ic4 from './images/feature-ic4.svg';
import feature_ic5 from './images/feature-ic5.svg';
import feature_ic6 from './images/feature-ic6.svg';
import feature_shp from './images/feature-shp.png';
import feature_shp2 from './images/feature-shp2.png';
import feature_shp3 from './images/feature-shp3.svg';
import join_shp1 from './images/join-shp1.svg';
import join_shp2 from './images/join-shp2.svg';
import join_shp3 from './images/join-shp3.svg';

const Future = () => {
  return (
    <>
      <section class="features-wrp">
                <div class="container">
                    <h2>Some amazing features we think fit you well.</h2>
                    <p>We specialize in providing top-tier Software as a Service (SaaS) solutions that empower businesses of all sizes to thrive in the digital age.</p>

                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic1} alt=""/>

                                <h3>Save time and effort with our all-in-one scheduling solution</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic2} alt=""/>

                                <h3>Create engaging content with the help of our AI assistant</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic3} alt=""/>

                                <h3>Enjoy affordable pricing that fits any budget</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic4} alt=""/>

                                <h3>Stay organized with our intuitive calendar view</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic5} alt=""/>

                                <h3>Collaborate seamlessly with your team</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <div class="features-box">
                                <img src={feature_ic6} alt=""/>

                                <h3>Spending overview</h3>
                                <p>We take step wise for your every platform We help.ng to client with our talented expert.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={feature_shp} alt="" class="feature-imgshp"/>
                <img src={feature_shp2} alt="" class="feature-imgshp2"/>

                <img src={feature_shp3} alt="" class="feature-imgshp3"/>
            </section>

            <section class="join-wrp">
                <div class="container">
                    <div class="join-block">
                        <h2>Join the 
                        ZuperPost 
                        <span>Revolution</span>
                        Today</h2>

                        <a href="#"><i class="far fa-arrow-right fa-fw"></i> Schedule a post</a>

                        <img src={join_shp1} alt="" class="join-shp1"/>
                        <img src={join_shp2} alt="" class="join-shp2"/>
                        <img src={join_shp3} alt="" class="join-shp3"/>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Future
