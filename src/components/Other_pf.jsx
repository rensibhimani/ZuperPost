import React from 'react'
import platform_img1 from './images/platform-img1.svg';
import platform_img2 from './images/platform-img2.svg';
import platform_img3 from './images/platform-img3.svg';
import plat_ic1 from './images/plat-ic1.svg';
import platform_shp from './images/platform-shp.svg';

const Other_pf = () => {
  return (
    <>
      <section class="other-platforms">
                <div class="container">
                    <div class="other-platforms-rw">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-img">
                                    <img src={platform_img1} alt=""/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-data">
                                    <h6><img src={plat_ic1} alt=""/> Plateforme</h6>
                                    <h2>AI-Powered Content Creation</h2>
                                    <p>Say goodbye to creative blocks and hello to engaging, high-quality content. ZuperPost's built-in AI assistant is here to help you craft compelling posts that resonate with your audience. From generating ideas to optimizing your copy, our AI technology is your secret weapon for social media success.</p>

                                    <a href="#" class="btn-arrow"><span><i class="far fa-arrow-right fa-fw"></i> Learn more</span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="other-platforms-rw">
                        <div class="row">                            
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-data">
                                    <h6><img src={plat_ic1} alt=""/> Plateforme</h6>
                                    <h2>Affordable Pricing for Every Business</h2>
                                    <p>We believe that effective social media management should be accessible to everyone. That's why ZuperPost offers unbeatable value at just $3 per social media connection. No hidden fees, no long-term contracts – just a simple, straightforward pricing model that puts you in control.</p>

                                    <a href="#" class="btn-arrow"><span><i class="far fa-arrow-right fa-fw"></i> Learn more</span></a>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-img">
                                    <img src={platform_img2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="other-platforms-rw">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-img">
                                    <img src={platform_img3} alt=""/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="platform-data">
                                    <h6><img src={plat_ic1} alt=""/> Plateforme</h6>
                                    <h2>Calendar View for Easy Planning</h2>
                                    <p>With ZuperPost's intuitive calendar view, you can visualize your entire social media strategy at a glance. Drag and drop your posts, make quick edits, and always know what's coming up next. Plus, our app makes it easy to collaborate with your team and keep everyone on the same page.</p>

                                    <a href="#" class="btn-arrow"><span><i class="far fa-arrow-right fa-fw"></i> Learn more</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={platform_shp} alt="" class="platform-shp"/>
            </section>
    </>
  )
}

export default Other_pf
