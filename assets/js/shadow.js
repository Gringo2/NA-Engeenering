customElements.define('hero-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/slider.css"/>
    </head>
    <!-- 
        - #HERO
      -->

      <section class="hero text-center" aria-label="home" id="home">

        <ul class="hero-slider" data-hero-slider>

          <li class="slider-item active" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./assets/images/slider1.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>

            <h1 class="display-1 hero-title slider-reveal">
              For the love of <br>
              delicious food
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./assets/images/slider2.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">delightful experience</p>

            <h1 class="display-1 hero-title slider-reveal">
              Flavors Inspired by <br>
              the Seasons
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./assets/images/hero-slider-3.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">amazing & delicious</p>

            <h1 class="display-1 hero-title slider-reveal">
              Where every flavor <br>
              tells a story
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

        </ul>

        <button class="slider-btn prev" aria-label="slide to previous" data-prev-btn>
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button class="slider-btn next" aria-label="slide to next" data-next-btn>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="#" class="hero-btn has-after">
          <img src="./assets/images/hero-icon.png" width="48" height="48" alt="booking icon">

          <span class="label-2 text-center span">Book A Table</span>
        </a>

      </section>
        
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }
  }
});

  customElements.define('duo-component', class extends HTMLElement {
    constructor() {
      super(); // always call super() first in the constructor.
  
          // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
    <body class="one">
    <head>
    <link rel="stylesheet" href="./assets/css/duo.css"/>
    </head>
    
    <!-- 
    - #FEATURES
  -->

  <section class="feature" aria-label="features">

    <div  data-reveal="right" class="feature-banner has-bg-image has-after"
      style="background-image: url('./assets/images/feature-banner.jpg')">
      <button class="play-btn" aria-label="play video: man making handmade belt">
        <img data-reveal src="./assets/images/play.svg" width="60" height="60" loading="lazy" alt="play icon">
      </button>
    </div>

    <div  data-reveal="left" class="section feature-content">
      <div class="container">

        <h2 class="h2 section-title">
          Why us?
        </h2>
        <br/>
        

        <ul style="margin-top: 5px;" class="feature-list" >

          <li data-reveal="right">
            <div class="feature-list-card">

              <div class="card-icon">
                <img src="./assets/images/feature-icon-1.svg" width="45" height="45" loading="lazy"
                  alt="review icon">
              </div>

              <div>

                <p class="card-text">
                Our vision is to become the most Successful & Respected Company in the areas of   Engineering & Automotive Industry in Ethiopia. We   envisage our activities to demonstrate adequate Health, Safety and Environment standards.
                </p>
              </div>

            </div>
          </li>

          <li data-reveal="right">
            <div class="feature-list-card">

              <div class="card-icon">
                <img src="./assets/images/feature-icon-2.svg" width="45" height="45" loading="lazy"
                  alt="badge icon">
              </div>

              <div>
                

                <p class="card-text">
                Our mission is to provide clients’ products & services with the highest quality, timely and on budget. Our approach to working clients’ as partners also extends to our entire employees ensuring timely completion of projects & High quality execution. Prevention of Environment polluting activities, Death, Injury and Ill-Health to those at work & to those affected by our work activities is the primary attentions of our company.
                </p>
              </div>

            </div>
          </li>

          <li data-reveal="right">
            <div class="feature-list-card">

              <div class="card-icon">
                <img src="./assets/images/feature-icon-3.svg" width="45" height="45" loading="lazy"
                  alt="money bag icon">
              </div>

              <div>
                

                <p class="card-text">
                  Our Vision
                  
                </p>
                <ul>
                    <li>
                    •	Unswerving to safe working environment
                    </li>
                    <li>
                    •	Committed to the surrounding community
                    </li>
                    <li>
                    •	Collaborative relationship
                    </li>
                    <li>
                    •	Value customer satisfaction
                    </li>
                    <li>
                    •	Maintain and continuously improve quality
                    </li>
                    <li>
                    •	Committed HSE  to be everybody’s concern
                    </li>
                  </ul>
              </div>

            </div>
          </li>

        </ul>

        
      </div>
    </div>

  </section>
    </body>
    `;
  }
  connectedCallback() {
    while (this.childNodes.length > 0) {
        this.shadowRoot.appendChild(this.childNodes[0]);
    }

      /**
 * #SCROLL REVEAL
 */

const revealElements = this.shadowRoot.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
  }
});

customElements.define('partner-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/partners.css">
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css">

  </head>
  <section style="margin:70px 0px;" class="section section-default mt-none mb-none">
  <div class="container">
      <div class="row">
        <div data-reveal="left" class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png" />
          </div>
        </div>
        <div data-reveal-b class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png" />
          </div>
        </div>
        <div data-reveal="right" class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png" />
          </div>
        </div>
        <div  data-reveal-b class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png" />
          </div>
        </div>
        <div data-reveal="right" class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png" />
          </div>
        </div>
        <div data-reveal-b class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png" />
          </div>
        </div>
        <div data-reveal="left" class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png" />
          </div>
        </div>
        <div data-reveal-b class="col-sm-6 col-md-4 col-lg-3">
          <div class="square-holder">
            <img alt="" src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg" />
          </div>
        </div>
      </div>
    
  </div>
</section>
  
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }

    /**
 * #SCROLL REVEAL
 */

const revealElements = this.shadowRoot.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

   /**
 * #SCROLL REVEAL-b
 */

    const revealElementsb = this.shadowRoot.querySelectorAll("[data-reveal-b]");

    const scrollRevealb= function () {
      for (let i = 0, x = revealElementsb.length; i < x; i++) {
        if (revealElementsb[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
          revealElementsb[i].classList.add("revealed");
        } else {
          revealElementsb[i].classList.remove("revealed");
        }
      }
    }
    
    window.addEventListener("scroll", scrollRevealb);
    window.addEventListener("load", scrollRevealb);
}
});

customElements.define('projects-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/proj.css"/>
  </head>
  <!-- 
        - #PROJECT
      -->

      <section class="section project" aria-label="project">
        <div class="container">

          <p class="section-subtitle">Projects</p>

          <h2 class="h2 section-title">Featured Projects</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
          </p>

          <ul class="project-list">

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-1.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Warehousing , Distrbution</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Warehouse inventory</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-2.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Logistics, Analytics</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Minimize Manufacturing</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-3.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Warehousing , Distrbution</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Warehouse inventory</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-4.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Logistics, Analytics</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Minimize Manufacturing</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-5.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Warehousing , Distrbution</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Warehouse inventory</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

            <li class="project-item" data-reveal="left">
              <div class="project-card">

                <figure class="card-banner img-holder" style="--width: 397; --height: 352;">
                  <img src="./assets/images/project-6.jpg" width="397" height="352" loading="lazy"
                    alt="Warehouse inventory" class="img-cover">
                </figure>

                <button class="action-btn" aria-label="View image">
                  <ion-icon name="expand-outline"></ion-icon>
                </button>

                <div class="card-content">
                  <p class="card-tag">Logistics, Analytics</p>

                  <h3 class="h3">
                    <a href="#" class="card-title">Minimize Manufacturing</a>
                  </h3>

                  <a href="#" class="card-link">Read More</a>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
  /**
 * #SCROLL REVEAL
 */

const revealElements = this.shadowRoot.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
}
});

customElements.define('service-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/proj.css"/>
  </head>
  <section class="section service" id="service" aria-label="service">
        <div class="container">

          <p class="section-subtitle">All Services</p>

          <h2 class="h2 section-title">Trusted For Our Services</h2>

          <p class="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
            the when an
            printer took.
          </p>

          <ul class="service-list grid-list">

            <li data-reveal="left">
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-1.png" width="80" height="60" loading="lazy" alt="Truck">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">01</span> Air Freight
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

            <li data-reveal>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-2.png" width="74" height="60" loading="lazy" alt="Ship">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">02</span> Road Freight
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

            <li data-reveal="right">
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-3.png" width="60" height="60" loading="lazy" alt="Airplane">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">03</span> Ocean Freight
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

            <li  data-reveal="right">
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-4.png" width="50" height="60" loading="lazy" alt="Train">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">04</span> Rail Freight
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

            <li data-reveal>
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-5.png" width="63" height="60" loading="lazy" alt="Trolley">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">05</span> Warehousing
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

            <li data-reveal="left">
              <div class="service-card">

                <div class="card-icon">
                  <img src="./assets/images/service-icon-6.png" width="46" height="60" loading="lazy" alt="Paper">
                </div>

                <h3 class="h3 card-title">
                  <span class="span">06</span> Project Cargo
                </h3>

                <p class="card-text">
                  Our aim is to optimize and improve your supply chain so that we can give you the best service.
                </p>

                <a href="#" class="btn-link">
                  <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>

                  <span class="span">View Detail</span>
                </a>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <script>
      
      </script>
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
      
  }

  /**
 * #SCROLL REVEAL
 */

const revealElements = this.shadowRoot.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
}
});

customElements.define('contact-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/contact.css"/>
  </head>
    
  <!-- 
  - #RESERVATION
-->

<section class="reservation">
  <div class="container">

    <div class="form reservation-form bg-black-10">

      <form action="" class="form-left">

        <h2 class="headline-1 text-center">Let's Chat</h2>

        

        <div style="margin: 10px 0px;" class="input-wrapper">
          <input type="text" name="name" placeholder="Your Name" autocomplete="off" class="input-field">

          <input type="tel" name="phone" placeholder="Phone Number" autocomplete="off" class="input-field">

          <input type="text" name="companyname" placeholder="Company Name (opitional)" autocomplete="off" class="input-field">

          <input type="text" name="Email" placeholder="Email" autocomplete="off" class="input-field">
        </div>

       

        <textarea name="message" placeholder="Message" autocomplete="off" class="input-field"></textarea>

        <button type="submit" class="btn btn-secondary">
          <span class="text text-1">Submit</span>

          <span class="text text-2" aria-hidden="true">Submit</span>
        </button>

      </form>
      
      <div class="form-right text-center">

        <h2 class="headline-1 text-center">Contact Us</h2>

        <p class="contact-label">Hotline</p>

        <a href="tel:+88123123456" class="body-1 contact-number hover-underline">+251-114-711620</a>
        <a href="tel:+88123123456" class="body-1 contact-number hover-underline">+251-114-711152</a>
        <a href="tel:+88123123456" class="body-1 contact-number hover-underline">+251-967-891954</a>

        <div class="separator"></div>

        <p class="contact-label">Location</p>

        <address class="body-1 contact-number hover-underline">
        Lebu  <br>
        behind Haile Garment
        </address>

        <!-- <p class="contact-label">Lunch Time</p>

        <p class="body-4">
          Monday to Sunday <br>
          11.00 am - 2.30pm
        </p>

        <p class="contact-label">Dinner Time</p>

        <p class="body-4">
          Monday to Sunday <br>
          05.00 pm - 10.00pm
        </p> -->

      </div>

    </div>

  </div>
</section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('separator-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/about.css"/>
  </head>
  <div style="background-image: url('./assets/images/welding2.jpg'); height: 100vh; background-size:cover;">
        
    </div>
  <div class="row">
  <div>
      <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep12" viewBox="0 0 1600 200"
          style="display: block;" data-height="200">
          <polygon class="" style="fill: rgb(255, 255, 255);" points="-4,24 800,198 1604,24 1604,204 -4,204 ">
          </polygon>
          <polygon class="" style="opacity: 1;fill: #95a5a6;"
              points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "></polygon>
          <polygon class="" style="opacity: 1;fill: #d2d7d3;"
              points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "></polygon>
      </svg>
  </div>
</div>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('separate-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/about.css"/>
  </head>
  <div class="row">
  <div>
      <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep12" viewBox="0 0 1600 200"
          style="display: block;" data-height="200">
          <polygon class="" style="fill: rgb(255, 255, 255);" points="-4,24 800,198 1604,24 1604,204 -4,204 ">
          </polygon>
          <polygon class="" style="opacity: 1;fill: #95a5a6;"
              points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "></polygon>
          <polygon class="" style="opacity: 1;fill: #d2d7d3;"
              points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "></polygon>
      </svg>
  </div>
</div>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('mv-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/mv.css"/>
  <link rel="stylesheet" href="./assets/css/flaticon.min.css"/>
  </head>
  <!-- 
        - #SERVICE
      -->

      <section class="section service" id="services" aria-label="services">
        <div class="container">

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <img style="margin: auto;" src="./assets/images/mission.png">
                <h3 class="h3">
                  <a href="#" class="card-title">Mission</a>
                </h3>

                <p class="card-text">
                Our mission is to provide clients’ products & services with the highest quality, timely and on budget. 
                Our approach to working clients’ as partners also extends to our entire employees ensuring timely completion
                 of projects & High quality execution. Prevention of Environment polluting activities, Death, Injury and 
                 Ill-Health to those at work & to those affected by our work activities is the primary attentions of our company.

              </div>
            </li>

            <li>
              <div class="service-card">

              <img style="margin: auto;" src="./assets/images/vision.png">

                <h3 class="h3">
                  <a href="#" class="card-title">Vision</a>
                </h3>

                <p class="card-text">
                Our vision is to become the most Successful & Respected Company in the areas of   
                Engineering & Automotive Industry in Ethiopia. We   envisage our activities to 
                demonstrate adequate Health, Safety and Environment standards.
                </p>

                

              </div>
            </li>

          </ul>

        </div>
      </section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('timeline-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/timeline.css"/>
  </head>
  <section>
    <div>
        <ul>
            <li>
                <div>
                    <time>1910</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1920</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1930</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1940</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1950</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1960</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1970</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1980</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <time>1990</time>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </li>
        </ul>

    </div>
</section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }

  var items = this.shadowRoot.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

}
});

customElements.define('timeln-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/timeln.css"/>
  </head>
  <!-- The Timeline -->

<ul style="margin-bottom: 20px;" class="timeline">

	<!-- Item 1 -->
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Freelancer</span>
				<span class="time-wrapper"><span class="time">2013 - present</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>
  
	<!-- Item 2 -->
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag">Apple Inc.</span>
				<span class="time-wrapper"><span class="time">2011 - 2013</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>

	<!-- Item 3 -->
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Harvard University</span>
				<span class="time-wrapper"><span class="time">2008 - 2011</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>
    <li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Freelancer</span>
				<span class="time-wrapper"><span class="time">2013 - present</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>
  
	<!-- Item 2 -->
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag">Apple Inc.</span>
				<span class="time-wrapper"><span class="time">2011 - 2013</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>

	<!-- Item 3 -->
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">Harvard University</span>
				<span class="time-wrapper"><span class="time">2008 - 2011</span></span>
			</div>
			<div class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
		</div>
	</li>
  
</ul>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }

  var items = this.shadowRoot.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
}
});

customElements.define('servicepg-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/proj.css"/>
  </head>
  
  <!-- 
  - #FEATURE
-->

<section class="section feature" aria-label="feature">
  <div class="container">

    <div class="title-wrapper">

      <div>
        <p class="section-subtitle">Estimation</p>

        <h2 class="h2 section-title">Has a wide range of solutions</h2>

        <p class="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever
          since the when an
          printer took.
        </p>
      </div>

      <a href="#" class="btn">Read More</a>

    </div>

    <ul class="feature-list grid-list">

      <li data-reveal="right">
        <div class="feature-card">

          <div class="card-icon">
            <img src="./assets/images/feature-icon-1.png" width="72" height="91" alt="">
          </div>

          <h3 class="h3 card-title">Solutions and specialized</h3>

          <p class="card-text">
            Our aim is to optimize and improve your supply chain so that we can give you the best service
          </p>

          

        </div>
      </li>

      <li data-reveal>
        <div class="feature-card" >

          <div class="card-icon">
            <img src="./assets/images/feature-icon-2.png" width="94" height="94" alt="">
          </div>

          <h3 class="h3 card-title">Multiple warehouses</h3>

          <p class="card-text">
            We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
            any kind...
          </p>

          

        </div>
      </li>

      <li data-reveal="left">
        <div class="feature-card" >

          <div class="card-icon">
            <img src="./assets/images/feature-icon-3.png" width="93" height="93" alt="">
          </div>

          <h3 class="h3 card-title">Tracking made easy</h3>

          <p class="card-text">
            A tracking number for the entire process. so that you can find the exact position. this process will
            help you
          </p>

          

        </div>
      </li>

      <li data-reveal="left">
      <div class="feature-card">

        <div class="card-icon">
          <img src="./assets/images/feature-icon-1.png" width="72" height="91" alt="">
        </div>

        <h3 class="h3 card-title">Solutions and specialized</h3>

        <p class="card-text">
          Our aim is to optimize and improve your supply chain so that we can give you the best service
        </p>

        

      </div>
    </li>

    <li data-reveal>
      <div class="feature-card" >

        <div class="card-icon">
          <img src="./assets/images/feature-icon-2.png" width="94" height="94" alt="">
        </div>

        <h3 class="h3 card-title">Multiple warehouses</h3>

        <p class="card-text">
          We provide multiple drop off and pickup locations so you don't have to worry. And you should not face
          any kind...
        </p>

        
      </div>
    </li>

    <li data-reveal="right">
      <div class="feature-card" >

        <div class="card-icon">
          <img src="./assets/images/feature-icon-3.png" width="93" height="93" alt="">
        </div>

        <h3 class="h3 card-title">Tracking made easy</h3>

        <p class="card-text">
          A tracking number for the entire process. so that you can find the exact position. this process will
          help you
        </p>

        

      </div>
    </li>
    </ul>

  </div>
</section>
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }

  /**
 * #SCROLL REVEAL
 */

const revealElements = this.shadowRoot.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
}
});

customElements.define('teams-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/teams.css"/>
  </head>
  
  <div class="container">
            <div class="section-title">
			
            </div>
            <div class="row">
                <div class="column">
                    <div class="team-1">
                        <div class="team-img">
                            <img src="./assets/images/team-2-1.jpg" alt="Team Image">
                        </div>
                        <div class="team-content">
                            <h2>Josh Dunn</h2>
                            <h3>CEO &amp; Founder</h3>
                            <h4>example@example.com</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="team-1">
                        <div class="team-img">
                            <img src="./assets/images/team-2-2.jpg" alt="Team Image">
                        </div>
                        <div class="team-content">
                            <h2>Mollie Ross</h2>
                            <h3>Art Director</h3>
                           
                            <h4>example@example.com</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="team-1">
                        <div class="team-img">
                            <img src="./assets/images/team-2-3.jpg" alt="Team Image">
                        </div>
                        <div class="team-content">
                            <h2>Dylan Adams</h2>
                            <h3>Developer</h3>
                            
                            <h4>example@example.com</h4>
                            
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="team-1">
                        <div class="team-img">
                            <img src="./assets/images/team-2-4.jpg" alt="Team Image">
                        </div>
                        <div class="team-content">
                            <h2>Jennifer Page</h2>
                            <h3>Designer</h3>
                           
                            <h4>example@example.com</h4>
                           
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('testimonial-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/testimonial.css"/>
  <link rel="stylesheet" href="./assets/css/font-awesome/css/font-awesome.css"/>
  </head>
  <section style="height: 75vh;" id="testim" class="testim">
  <!--         <div class="testim-cover"> -->
  <div class="wrap">

      <span id="right-arrow" class="arrow right fa fa-chevron-right"></span>
      <span id="left-arrow" class="arrow left fa fa-chevron-left "></span>
      <ul id="testim-dots" class="dots">
          <li class="dot active"></li>
          <!--
                  -->
          <li class="dot"></li>
          <!--
                  -->
          <li class="dot"></li>
          <!--
                  -->
          <li class="dot"></li>
          <!--
                  -->
          <li class="dot"></li>
      </ul>
      <div id="testim-content" class="cont">

          <div class="active">
              <div class="img">
                  <img src="./assets/images/team-2-4.jpg"></div>
              <h2>Lorem P. Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div>
              <div class="img">
              <img src="./assets/images/team-2-1.jpg">
                  </div>
              <h2>Mr. Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div>
              <div class="img">
              <img src="./assets/images/team-2-2.jpg">
                  </div>
              <h2>Lorem Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div>
              <div class="img">
              <img src="./assets/images/team-2-3.jpg">
                  </div>
              <h2>Lorem De Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

          <div>
              <div class="img">
              <img src="./assets/images/team-2-4.jpg">
                 </div>
              <h2>Ms. Lorem R. Ipsum</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>

      </div>

  </div>
  <!--         </div> -->
</section>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
  // vars
'use strict'
var testim = this.shadowRoot.getElementById("testim"),
    testimDots = Array.prototype.slice.call(this.shadowRoot.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(this.shadowRoot.getElementById("testim-content").children),
    testimLeftArrow = this.shadowRoot.getElementById("left-arrow"),
    testimRightArrow = this.shadowRoot.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // // keyboard shortcuts
    // this.shadowRoot.addEventListener("keyup", function (e) {
    //     switch (e.keyCode) {
    //         case 37:
    //             testimLeftArrow.click();
    //             break;

    //         case 39:
    //             testimRightArrow.click();
    //             break;

    //         case 39:
    //             testimRightArrow.click();
    //             break;

    //         default:
    //             break;
    //     }
    // })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}
}
});

customElements.define('contacthero-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/hero.css"/>
  </head>
  <div class="hero">
  <div class="hero__bg">
    <picture back>
      <img src="./assets/images/contactus.png">
    </picture>
  </div>

  <div class="hero__cnt">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205 213">><path d="M201.76,17.01C174.45,6.79,145.3,1.07,115.13,0c-1.35-.04-2.66,.46-3.63,1.39-.97,.94-1.52,2.23-1.52,3.58V73.57c0,2.75,2.23,4.98,4.98,4.98h78.8c2.3,0,4.3-1.57,4.84-3.8,4.25-17.46,6.4-35.31,6.4-53.07,0-2.08-1.29-3.94-3.24-4.67Z"/><path d="M93.51,1.4c-.97-.94-2.29-1.44-3.63-1.39C59.7,1.07,30.55,6.79,3.24,17.01c-1.95,.73-3.24,2.59-3.24,4.67,0,17.77,2.16,35.63,6.42,53.08,.54,2.23,2.54,3.8,4.84,3.8H90.06c2.75,0,4.98-2.23,4.98-4.98V4.98c0-1.35-.55-2.65-1.52-3.58Z"/><path d="M90.06,93.5H17.1c-1.61,0-3.12,.78-4.05,2.09-.93,1.31-1.18,2.99-.66,4.51,11.56,33.67,30.73,64.99,56.97,93.07l17.06,18.25c.96,1.03,2.29,1.58,3.64,1.58,.61,0,1.23-.11,1.83-.35,1.9-.75,3.15-2.59,3.15-4.63V98.48c0-2.75-2.23-4.98-4.98-4.98Z"/><path d="M191.95,95.58c-.93-1.31-2.44-2.09-4.05-2.09H114.96c-2.75,0-4.98,2.23-4.98,4.98v109.53c0,2.05,1.25,3.88,3.15,4.63,.59,.23,1.21,.35,1.83,.35,1.35,0,2.68-.55,3.64-1.58l17.05-18.25c26.23-28.08,45.4-59.39,56.96-93.07,.52-1.52,.28-3.2-.66-4.51Z"/></svg>
    <h1>Scūtarius</h1>
  </div>
</div>
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});

customElements.define('x-component', class extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

        // Attach a shadow root to <fancy-tabs>.
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <body class="one">
  <head>
  <link rel="stylesheet" href="./assets/css/Program.css"/>
  </head>
  
      
  </body>
  `;
}
connectedCallback() {
  while (this.childNodes.length > 0) {
      this.shadowRoot.appendChild(this.childNodes[0]);
  }
}
});
