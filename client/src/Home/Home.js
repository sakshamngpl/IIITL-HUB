import React from 'react'
import home from './home.css'
import './scripts.js'
import Fancy from './Fancy'
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'
// // import 'http://code.jquery.com/ui/1.11.4/jquery-ui.js'
// import 'https://daniellaharel.com/raindrops/js/raindrops.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js'

export default function HomePage() {
  return (
    <div>
      <header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
              aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
              aria-label="Slide 6"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ backgroundImage: 'url(slide2.jpg)' }}>
              <div className="carousel-caption">
                <h4 style={{ color: '#000' }}>NOTES</h4>
                <p className="first">Filtered notes for every semester</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('bloging.jpg')" }}>
              <div className="carousel-caption">
                <h4>BLOGS</h4>
                <p>Journeys of achivements.</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('timeline.jpg')" }}>
              <div className="carousel-caption">
                <h4>TIMELINE</h4>
                <p>How our college progresses</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('./slide1.jpg')" }}>
              <div className="carousel-caption">
                <h4>NOTES</h4>
                <p>High Quality Notes</p>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('slide3.jpg')" }}>
              <div className="carousel-caption">
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: "url('slide4.jpg')" }}>
              <div className="carousel-caption">
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
      <section className="py-5">
        <div className="container1 ">
          <h1 className="fw-light main-heading"> GET
            <i className="auto-type">
              <Fancy />
            </i></h1>
          <p className="lead reveal">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to IIITL HUB, a place where we provide you everything that you need to move forward in your career and achieve new highs.
            <br />
           Let's have a look at what we actually provide:
          </p>
          <h1 className="py-5-first-heading reveal">Notes</h1>
          <p className="lead reveal">As students, we all know that we need notes in the process of learning. We provide you the filtered notes that cover the complete syllabus that was taught in the classes, and question papers of previous years to help you achieve a good score in your academics.
          </p>
          <h1 className="py-5-first-heading reveal">Blogs</h1>
          <p className="lead reveal">This section includes the stories and journeys of our seniors who achieved great highs in their fields and by their stories, we can learn from them and can build our own path of success. Here you can find blogs related to GSOC (Google summer of code) competition, App development, web development, competitive programming, freelancing etc. which will help you to enhance your knowledge in these fields and gain some clarity in your life.
          </p>
          <h1 className="py-5-second-heading reveal">About Us</h1>
          <p className="lead reveal">We all are students of IIITL Lucknow pursuing our B.Tech. We have this build website to help students in their learning process. We learnt many things during this development journey and hope that you get help from it.
          </p>
        </div>
      </section>

      <section className="profile reveal" id="team">
        <h1 className="team-member"><i className="team-member-span">T</i>eam <i className="team-member-span">M</i>embers</h1>
        <div className="cards">
          <div className="card" data-tilt data-tilt-max="35">
            <span className="close"></span>
            <span className="arrow"></span>
            <article>
              <h2>Charandeep Kumar</h2>
              <div className="title">Frontend Developer</div>
              <div className="pic"><img src="charandeep.jpg" /></div>
              <div className="desc">LIT2021036<br />IIITL Student</div>

            </article>
            <div className="actions">
              <button className="btn"><a href="https://wa.me/918873286865" target="_blank"><span>Whatsapp</span></a><i className="icon fa fa-whatsapp"></i></button>
              <button className="btn"><a href="https://www.linkedin.com/in/charandeep/" target="_blank"><span>Linkedin</span></a><i className="icon fa fa-linkedin"></i></button>
            </div>
          </div>
          <div className="card" data-tilt data-tilt-max="35">
            <span className="close"></span>
            <span className="arrow"></span>
            <article>
              <h2>Rudranil Acharya</h2>
              <div className="title">Backend Developer</div>
              <div className="pic"><img src="charandeep.jpg" /></div>

              <div className="desc">LIT2021006<br />IIITL Student</div>

            </article>
            <div className="actions">
              <button className="btn"><a href="https://wa.me/917004422720" target="_blank"><span>Whatsapp</span></a><i className="icon fa fa-whatsapp"></i></button>
              <button className="btn"><a href="#" target="_blank">
                <span>Linkedin</span>
              </a><i className="icon fa fa-linkedin">
                </i>
              </button>
            </div>
          </div>
          <div className="card" data-tilt data-tilt-max="35">
            <span className="close"></span>
            <span className="arrow"></span>
            <article>
              <h2>Abhishek</h2>
              <div className="title">Frontend Developer</div>
              <div className="pic"><img src="charandeep.jpg" /></div>

              <div className="desc">LIT2021002<br />IIITL Student</div>

            </article>
            <div className="actions">
              <button className="btn"><a href="https://wa.me/919255520988" target="_blank"><span>Whatsapp</span></a><i className="icon fa fa-whatsapp"></i></button>
              <button className="btn"><a href="#" target="_blank"><span>Linkedin</span></a><i className="icon fa fa-linkedin"></i></button>
            </div>
          </div>

          <div className="card" data-tilt data-tilt-max="35">
            <span className="close"></span>
            <span className="arrow"></span>
            <article>
              <h2>Saksham Nagpal</h2>
              <div className="title">Backend Developer</div>
              <div className="pic"><img src="charandeep.jpg" /></div>

              <div className="desc">LIT2021013<br />IIITL Student</div>

            </article>
            <div className="actions">
              <button className="btn"><a href="https://wa.me/918287924707" target="_blank"><span>Whatsapp</span></a><i className="icon fa fa-whatsapp"></i></button>
              <button className="btn"><a href="#" target="_blank"><span>Linkedin</span></a><i className="icon fa fa-linkedin"></i></button>
            </div>
          </div>
        </div>





      </section>






      <div className="page-wrapper reveal">
        <div id="waterdrop"></div>

        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                    <p>Connect With Us...</p>
                    <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                      <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                      <button className="btn btn_get btn_get_two" type="submit"><a href="mailto:lit2021036@iiitl.ac.in" className="send-email">Send Email</a></button>
                      <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                      <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18">Team Members</h3>
                    <ul className="list-unstyled f_list">
                      <li><a href="#team">Charandeep Kumar</a></li>
                      <li><a href="#team">Rudranil Acharya</a></li>
                      <li><a href="#team">Abhishek Kumar</a></li>
                      <li><a href="#team">Saksham Nagpal</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                    <h3 className="f-title f_600 t_color f_size_18">Navigate</h3>
                    <ul className="list-unstyled f_list">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#">Notes</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="timeline.html">Timeline</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                    <h3 className="f-title f_600 t_color f_size_18">Social Media</h3>
                    <div className="f_social_icon">
                      <a href="https://www.facebook.com/iiitlucknow/" className="fa fa-facebook"></a>
                      <a href="https://twitter.com/iiitlucknow" className="fa fa-twitter"></a>
                      <a href="https://www.linkedin.com/school/iiitl/" className="fa fa-linkedin"></a>
                      <a href="https://www.youtube.com/c/EquinoxIIITLucknow" className="fa fa-youtube"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

  )
}
