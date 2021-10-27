/* eslint-disable */

import React from "react";
import Header from '../Header';
import Footer from '../Footer'
import { Link } from "react-router-dom";

const Aboutpage = () => {
    return(
        <>
        <Header />
        <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay="8" style={{backgroundImage: `url('images/page-banner-1.jpg')`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-cont">
                        <h2>About Us</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/auth">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="about-page" className="pt-70 pb-110">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="section-title mt-50">
                        <h5>About us</h5>
                        <h2>What is Motivar</h2>
                    </div>
                    <div className="about-cont">
                        <p>Motivar is a social enterprise that is focused on solving the distribution problem of Digital skill training and education for the young people whose economic/social realities limit their access. We will leverage Massive Open Online Courses (MOOCs) and Small Private Online Courses (SPOCs). Ensure access for young people that will otherwise not access them and assure course completion by helping flatten the barriers to learning online.</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-image mt-50">
                        <img src="images/about/about-2.jpg" alt="About" />
                    </div>
                </div>
            </div>
            <div className="about-items pt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-singel-items mt-30">
                            <span>01</span>
                            <h4>Why Choose us</h4>
                            <p>Digital Education is heralded as the way to democratize access to learning and open up education to the masses. In contrast, our traditional education system is discriminatory (the quality of education you receive is tied directly to how much you pay). This excludes a lot of young people from quality education. These same people have a higher chance of being excluded from digital education. Digital exclusion is reinforced by other types of disadvantages related to parental or family support, mentoring, being part of a community, as well as social and economic status.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-singel-items mt-30">
                            <span>02</span>
                            <h4>Our Mission</h4>
                            <p>Effective single pathway for people to sign up for courses online. This service would be shipped via digital systems and community centers. Motivar will run a web and app based platform. Individual users will be able to register accounts, take a personality test, select a skill they want to learn. In instances the users are unsure what skill to learn the platform will provide suggestions based on user personality and other data. The platform would serve as a window to other online learning platforms. Curate related courses on affiliate platforms by quality and prioritize two categories - Free Certified and Paid Certified courses.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10">
                        <div className="about-singel-items mt-30">
                            <span>03</span>
                            <h4>Our Vision</h4>
                            <p>Motivar will help ensure increase in completion and enrollment rates for online courses, maximized learning outcomes for learners, reduced gap between available work/market opportunities and skill level of young people filling them, a data source for skills that exist or don’t, skills that will be needed in the future, and the distribution of individuals that have them or are on track to developing them. These outcomes are important to ensuring educational equity, reducing poverty, assuring economic and social mobility, influencing public policy, encouraging innovation, creativity and industry among the young african demographic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="testimonial" className="bg_cover pt-115 pb-120" data-overlay="8" style={{backgroundImage: `url('images/bg-2.jpg')`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-40">

                        <span style={{color:  "#11d99b", fontSize: "15px", fontWeight: "700"}}>WE ARE ENSURING YOUNG PEOPLE ACCESS DIGITAL ACCESS DIGITAL LEARNING PLATFORMS AND ASSURING THEY COMPLETE THE COURSES TO GAIN REQUIRED KNOWLEDGE.</span>
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
                            <p>We believe sincerely that every African child has the capacity for greatness. We simply need to design pathways to ensure they access the required skills and training to flourish in this century regardless of gender, social className or faith.</p>
                            <span style={{color: "#00aa88", fontWeight: "900"}}><strong>LAUNCH WITH US</strong></span>
                            <span>Bsc, Engineering</span>
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
                            <p>More than anything else. This work will require the social and financial capital of forward thinking, experienced and long-term minded individuals or institutions looking to weaken educational inequalities and accelerate digital expansion in Africa.</p>
                            <span style={{color: "#00aa88",  fontWeight: "900"}}><strong>INVEST WITH US</strong></span>
                            <span>Bsc, Engineering</span>
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
                            <p>We want to partner with mission-aligned leaders & organisations to help young people surmount barriers to learning and access skills and training that will ensure social and economic mobility for them.</p>
                            <span style={{color: "#00aa88", fontWeight: "900"}}><strong>PARTNER WITH US</strong></span>
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
    )
}
export default Aboutpage;