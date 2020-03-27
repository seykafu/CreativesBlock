import React from 'react';
// import logo from './logo.svg';
import Artists from './components/Artists.jsx';
import Writers from './components/Writers.jsx';
import Readers from './components/Readers.jsx';
import Product from './components/Product.jsx';
import './App.css';

function App() {
  const writer_1 = [
    {
      title: 'CreativesBlock for Writers',
      caption: 'Write. Upload. Be protected against copyright. Turn into a Comic/Manga. Earn!'
    }
  ]
  const artist_1 = [
    {
      title: 'CreativesBlock for Comic/Manga Artists',
      caption: 'Gain credit. Earn. Be protected against copyright. Become Famous!'
    }
  ]
  const reader_1 = [
    {
      title: 'CreativesBlock for Readers',
      caption: 'Subscribe. Read. Enjoy. Add value to your life!'
    }
  ]

  const product = [
    {
      problem: 'Writers need better chances of becoming a best-seller, and fighting against copyright infringement. Comic/Manga Artists do not earn enough, and struggle against copyright infringement. Readers are unable to find the perfect book, story or manga/comic that gurantees binge-reading.',
      solution: '- Collaborate with others, earn more money, and be protected from copyright!'
    }
  ]

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">CreativesBlock</a>
      <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">I'm a Freelancer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio"></a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome to the CreativesBlock Studio!</div>
        <div className="intro-heading text-uppercase"> Check out what we're building.</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">I'm a Creative</a>
      </div>
    </div>
  </header>

  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">We're on a mission to help writers, comic artists and more to earn more money and collaborate better, all while protecting themselves from copyright infringement. How will we do that? Blockchain and Network Databases for Freelance Collaboration.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">For Writers</h4>
          <p className="text-muted"> Create amazing content, pay freelancers to help enhance your work into a comic/manga, and earn money back from readers!</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">For Readers</h4>
          <p className="text-muted">Subscribe for a small monthly fee to access amazing content produced by freelancers!</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">For Comic/Manga Artists</h4>
          <p className="text-muted"> Work on multiple projects at once, have multiple income streams, and have your work protected via blockchain! </p>
        </div>
      </div>
    </div>
  </section>

  <div className="row">
      <div className="col-lg-12 text-center">
      <h2 className="section-heading text-uppercase">What type of user are you?</h2>
      <h3 className="section-subheading text-muted">Below highlights the ways each user can obtain value from using our platform.</h3>
      </div>
  </div>

    <div className="container">
        <div className="col-lg-14 text-center"></div>
          <Writers writer_1={writer_1}> </Writers>
          <Artists artist_1={artist_1}> </Artists>
          <Readers reader_1={reader_1}> </Readers>
    </div>

  <Product product={product}> </Product>

  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">We are a group of passionate people who love comics and manga.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="src/assets/img/DSC_0659.JPG" alt=""/>
            <h4>Kasey Fu</h4>
            <p className="text-muted">Co-founder</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/kaseyfu/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h4>Shawn Du</h4>
            <p class="text-muted">Co-founder</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="team-member">
            <img class="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
            <h4>Gary Zhao</h4>
            <p class="text-muted">Co-founder</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h4>If you would like to join us, feel free to get in touch!</h4>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div class="col-md-3 col-sm-6">
          <a href="#">
            <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Contact Us</h2>
          <h5 class="section-heading text-uppercase">We love comic artists and animators. We're here to help the industry.</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">CreativesBlock, Inc. &copy; 2020</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/company/42289588/admin/">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
