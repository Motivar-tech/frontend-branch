/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';


export default class Homepage extends Component {
  render() {
    return (
      <>
            `<Header />

              <section id="slider-part" className="slider-active">
                  <div className="single-slider bg_cover pt-150" style={{backgroundImage: `url('images/slider/s-1.JPG')`}} data-overlay="4">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 col-lg-9">
                                  <div className="slider-cont">
                                      <h1 data-animation="bounceInLeft" data-delay="1s">Find A Course</h1>
                                      <p data-animation="fadeInUp" data-delay="1.3s">Motivar is a social enterprise with a core mission to improve the efficiency and distribution of digital education especially for young people in undeserved communities.</p>
                                      <ul>
                                          <li>< Link data-animation="fadeInUp" data-delay="1.6s" className="main-btn" to="/about">Read More</Link></li>
                                          <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/signup">Get Started</Link></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="single-slider bg_cover pt-150" style={{backgroundImage: `url('images/slider/s-2.jpg')`}} data-overlay="4">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 col-lg-9">
                                  <div className="slider-cont">
                                      <h1 data-animation="bounceInLeft" data-delay="1s">Start A Course</h1>
                                      <p data-animation="fadeInUp" data-delay="1.3s">Helping learners find, start and complete online courses that is tied to their individual competencies, preferences and realities.</p>
                                      <ul>
                                          <li><Link data-animation="fadeInUp" data-delay="1.6s" className="main-btn" to="/about">Read More</Link></li>
                                          <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/signup">Get Started</Link></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="single-slider bg_cover pt-150" style={{backgroundImage: `url('images/slider/s-3.jpg')`}} data-overlay="4">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 col-lg-9">
                                  <div className="slider-cont">
                                      <h1 data-animation="bounceInLeft" data-delay="1s">Complete A Course</h1>
                                      <p data-animation="fadeInUp" data-delay="1.3s">A one-stop for all outside-the-walls learning.</p>
                                      <ul>
                                          <li><Link data-animation="fadeInUp" data-delay="1.6s" className="main-btn" to="/about">Read More</Link></li>
                                          <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/signup">Get Started</Link></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>



              <section id="category-part">
                  <div className="container">
                      <div className="category-new pt-40 pb-80">
                          <div className="row">
                              <div className="col-lg-4">
                                  <div className="category-text pt-40">
                                      <h2 style={{color: "#084a3c"}}>Best platform to learn everything</h2>
                                  </div>
                              </div>
                              <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                                  <div className="row category-slied mt-40">
                                      <div className="col-lg-4">
                                          <Link to="/">
                                              <span className="singel-category text-center color-1">
                                                  <span className="icon">
                                                      <img src="images/all-icon/ctg-1.png" alt="Icon" />
                                                  </span>
                                                  <span className="cont">
                                                      <span>Coding</span>
                                                  </span>
                                              </span>
                                          </Link>
                                      </div>
                                      <div className="col-lg-4">
                                          <a href="#">
                                              <span className="singel-category text-center color-2">
                                                  <span className="icon">
                                                      <img src="images/all-icon/ctg-2.png" alt="Icon" />
                                                  </span>
                                                  <span className="cont">
                                                      <span>Business</span>
                                                  </span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="col-lg-4">
                                          <a href="#">
                                              <span className="singel-category text-center color-3">
                                                  <span className="icon">
                                                      <img src="images/all-icon/ctg-4.png" alt="Icon" />
                                                  </span>
                                                  <span className="cont">
                                                      <span>Design</span>
                                                  </span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="col-lg-4">
                                          <a href="#">
                                              <span className="singel-category text-center color-5">
                                                  <span className="icon">
                                                      <img src="images/all-icon/ctg-3.png" alt="Icon" />
                                                  </span>
                                                  <span className="cont">
                                                      <span>Literature</span>
                                                  </span>
                                              </span>
                                          </a>
                                      </div>
                                      <div className="col-lg-4">
                                          <Link to="/">
                                              <span className="singel-category text-center color-1">
                                                  <span className="icon">
                                                      <img src="images/all-icon/ctg-5.png" alt="Icon" />
                                                  </span>
                                                  <span className="cont">
                                                      <span>Digital Marketing</span>
                                                  </span>
                                              </span>
                                          </Link>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>


              <section id="testimonial" className="bg_cover pt-115 pb-120" data-overlay="8" style={{backgroundImage: `url('images/bg-2.jpg')`}} >
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="section-title pb-40">
                                  <h5>Testimonial</h5>
                                  <h2>What people say</h2>
                              </div>
                          </div>
                      </div>
                      <div className="row testimonial-slied mt-40">
                          <div className="col-lg-6">
                              <div className="singel-testimonial">
                                  <div className="testimonial-thum">
                                      <img src="images/testimonial/t-1.jpg" alt="Testimonial" />
                                      <div className="quote">
                                          <i className="fa fa-quote-right"></i>
                                      </div>
                                  </div>
                                  <div className="testimonial-cont">
                                      <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                      <h6>Regina Daniel</h6>
                                      <span>Graduate of Graphic design, 2021</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="singel-testimonial">
                                  <div className="testimonial-thum">
                                      <img src="images/testimonial/t-2.jpg" alt="Testimonial" />
                                      <div className="quote">
                                          <i className="fa fa-quote-right"></i>
                                      </div>
                                  </div>
                                  <div className="testimonial-cont">
                                      <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                      <h6>Yul Edochie</h6>
                                      <span>Graduate of Digital marketing, 2021</span>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <div className="singel-testimonial">
                                  <div className="testimonial-thum">
                                      <img src="images/testimonial/t-3.jpg" alt="Testimonial" />
                                      <div className="quote">
                                          <i className="fa fa-quote-right"></i>
                                      </div>
                                  </div>
                                  <div className="testimonial-cont">
                                      <p>Aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id elit sollicitudirem </p>
                                      <h6>Elon Musk</h6>
                                      <span>Graduate of Business, 2021</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>


              <section id="slider-part" className="slider-active">
                  <div className="single-slider bg_cover pt-150" style={{backgroundImage: `url('images/slider/s-1.JPG')`}} data-overlay="4">
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-7 col-lg-9">
                                  <div className="slider-cont">
                                      <h1 data-animation="bounceInLeft" data-delay="1s">Find A Course</h1>
                                      <p data-animation="fadeInUp" data-delay="1.3s">Motivar is a social enterprise with a core mission to improve the efficiency and distribution of digital education especially for young people in undeserved communities.</p>
                                      <ul>
                                          <li><Link data-animation="fadeInUp" data-delay="1.6s" className="main-btn" to="/about">Read More</Link></li>
                                          <li><Link data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" to="/SIgnup">Get Started</Link></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </section>


              <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
                  <div className="container">
                      <div className="row patnar-slied">
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-1.png" alt="Logo" />
                              </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-2.png" alt="Logo" />
                              </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-3.png" alt="Logo" />
                              </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-1.png" alt="Logo" />
                              </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-2.png" alt="Logo" />
                              </div>
                          </div>
                          <div className="col-lg-12">
                              <div className="singel-patnar text-center mt-40">
                                  <img src="images/patnar-logo/p-3.png" alt="Logo" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



                <Footer />
      </>
    );
  }
}
