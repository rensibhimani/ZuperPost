import React from 'react'
import img from './images/365-img.svg';

const Days = () => {
  return (
    <>
    
      <section class="social-wrp">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-12">
                            <div class="social-img">
                                <img src={img} alt=""/>
                            </div>
                        </div>
                        <div class="col-md-7 col-sm-12">
                            <div class="social-media-contentbx">
                                <h2>365 Days Of Social Media Content Ideas: Your Complete Guide To Engaging Posts</h2>
                                <p>This comprehensive resource is filled with engaging and interactive post ideas to keep your social media feeds vibrant all year round.</p>
                                <p>No more stress about what to post next or how to engage your followers – we've got you covered! </p>
                                <p>Start your journey towards an enhanced online presence today! Please enter your name and email below, and this invaluable tool will be on its way to your inbox.</p>

                                <form>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label>Your name*</label>
                                                <input type="text" class="form-control" placeholder="Enter your name here" required/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="form-group">
                                                <label>Email Address*</label>
                                                <input type="text" class="form-control" placeholder="Enter your email address" required/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn-main"><span>Download Now</span></button>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Days
