import React from 'react'
import footer_logo from './images/footer-logo.svg';
import app_ic1 from './images/app-ic1.svg';
import app_ic2 from './images/app-ic2.svg';
import social_ic1 from './images/social-ic1.svg';
import social_ic2 from './images/social-ic2.svg';
import social_ic3 from './images/social-ic3.svg';
import social_ic4 from './images/social-ic4.svg';
import social_ic5 from './images/social-ic5.svg';

const Footer = () => {
  return (
    <>
      <footer>
                <div class="container">
                    <div class="footer-top">
                        <div class="row">
                            <div class="col-md-3 col-sm-12">
                                <div class="footer-abt">
                                    <img src={footer_logo} alt=""/>
                                    <p>Sign up for ZuperPost now and experience the difference for yourself.</p>

                                    <div class="btn-group">
                                        <a href="/" target="_blank"><img src={app_ic1} alt=""/></a>
                                        <a href="/" target="_blank"><img src={app_ic2}  alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9 col-sm-12">
                                <div class="footer-row">
                                    <div class="quicklinks">
                                        <h3>Product</h3>

                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">Pricing</a></li>
                                            <li><a href="/">Enterprice</a></li>
                                            <li><a href="/">Customer Success</a></li>
                                            <li><a href="/">Trust & Security</a></li>
                                            <li><a href="/">App & Integration</a></li>
                                            <li><a href="/">Template</a></li>
                                        </ul>
                                    </div>
                                    <div class="quicklinks">
                                        <h3>Solution</h3>

                                        <ul>
                                            <li><a href="/">Project Management</a></li>
                                            <li><a href="/">Increase Productivity</a></li>
                                            <li><a href="/">Agile Workflows</a></li>
                                            <li><a href="/">Mind Map</a></li>
                                            <li><a href="/">Strategy & Planning</a></li>
                                            <li><a href="/">Goal Management</a></li>
                                            <li><a href="/">Work Management</a></li>
                                        </ul>
                                    </div>
                                    <div class="quicklinks">
                                        <h3>Product</h3>

                                        <ul>
                                            <li><a href="/">Help Center</a></li>
                                            <li><a href="/">Blog</a></li>
                                            <li><a href="/">Community</a></li>
                                            <li><a href="/">Support</a></li>
                                            <li><a href="/">Developer & API</a></li>
                                            <li><a href="/">Partners</a></li>
                                            <li><a href="/">Accessibility</a></li>
                                        </ul>
                                    </div>
                                    <div class="quicklinks">
                                        <h3>Company</h3>

                                        <ul>
                                            <li><a href="/">About Us</a></li>
                                            <li><a href="/">Careers</a></li>
                                            <li><a href="/">Press</a></li>
                                            <li><a href="/">Sitemap</a></li>
                                            <li><a href="/">Investor Relations</a></li>
                                            <li><a href="/">Customers</a></li>
                                            <li><a href="/">Affiliates</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-8 col-sm-12">
                                <div class="tearms-links">
                                    <ul>
                                        <li>© 2024 Company. All right Reserved.</li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Terms of Service</a></li>
                                        <li><a href="/">Manages Cookies</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <div class="social-bx">
                                    <a href="/" target="_blank"><img src={social_ic1} alt=""/></a>
                                    <a href="/" target="_blank"><img src={social_ic2}  alt=""/></a>
                                    <a href="/" target="_blank"><img src={social_ic3}  alt=""/></a>
                                    <a href="/" target="_blank"><img src={social_ic4}  alt=""/></a>
                                    <a href="/" target="_blank"><img src={social_ic5}  alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
    </>
  )
}

export default Footer
