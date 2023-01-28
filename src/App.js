import "./App.css"
import "./style.css"
import "./css/normalize.css"
import "./css/vendor.css"
import aditya from "./images/aditya.jpg"
import whatsapp from "./images/whatsapp.jpg"
import twitter from "./images/twitter.png"
import mspaint from "./images/mspaint.png"
import nasa from "./images/nasa.png"
import moc from "./images/moc.png"
import iphone from "./images/iphone.png"
import cnn from "./images/cnn.jpg"
import bloomberg from "./images/bloomberg.jpg"
import vogue from "./images/vogue.jpg"
import book1 from "./images/book1.jpg"
import book2 from "./images/book2.jpg";
import book3 from "./images/book3.jpg";
import book4 from "./images/book4.jpg";
import book5 from "./images/book5.jpg";
import book6 from "./images/book6.png";
import book7 from "./images/book7.jpg";
import book8 from "./images/book8.jfif";


function App() {
  return (
    <div className="App">
      <div id="header-wrap">
        {/*top-content*/}

        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="main-logo">
                  <h4>ADITYA AHLAWAT</h4>
                </div>
              </div>

              <div className="col-md-10">
                <nav id="navbar">
                  <div className="main-menu stellarnav">
                    <ul className="menu-list">
                      <li className="menu-item active">
                        <a href="#home" data-effect="Home">
                          Home
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#about"
                          className="nav-link"
                          data-effect="About"
                        >
                          About
                        </a>
                      </li>

                      <li className="menu-item">
                        <a
                          href="#featured-projects"
                          className="nav-link"
                          data-effect="Shop"
                        >
                          PROJECTS
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#footer"
                          className="nav-link"
                          data-effect="Articles"
                        >
                          CERTIFICATIONS
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#footer"
                          className="nav-link"
                          data-effect="Contact"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/*header-wrap*/}

      <section id="billboard">
        <div className="container">
          <div className="row">
            <div className="main-slider pattern-overlay">
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">
                    I am <br />
                    ADITYA
                  </h2>
                  <p>
                    Full Stack Developer | Competitive Coder | Intern @ Neustar
                  </p>
                </div>
                {/*banner-content*/}
                <img src={aditya} alt="banner" className="banner-image" />
              </div>
            </div>
            {/*slider*/}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Something about me</span>
                </div>
                <h2 className="section-title">About</h2>
              </div>
              <br />
              <div className="inner-content">
                <div className="logo-wrap">
                  <div className="grid" style={{ textAlign: "left" }}>
                    Myself Aditya, <br/>An alumnus of Chitkara University. I am a
                    passionate, determined, enthusiastic person who believes
                    hard work and smart work must be combined for the best
                    possible outcomes. I was always inclined towards computers since the day
                    I saw them in books when I was in 3rd grade and from the
                    days, when I used to program in LOGO which was a fun
                    language as one only needs to remember basic commands like
                    FD1, RT1 and REPEAT 360.
                    <br /> I am a 5 times state champion in the International
                    Science Olympiad, Certificate of Achievement Holder in Green 
                    Olympiad organized by TERI - TATA Energy And Resources
                    Institute, Govt. of India. I have also filed 5 Patents on
                    Quantum Computing and Quantum Entanglement out of which one
                    has been selected by the University Central Committee for
                    the Kapila Program by Ministry of Education, Govt. of India.
                  </div>
                </div>
                {/*image-holder*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="featured-projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality projects</span>
                </div>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <br />

              <div className="product-list">
                <div className="row">
                  <div className="col-md-3">
                    <figure className="product-style">
                      <img
                        src={whatsapp}
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://chatfullstack.netlify.app/"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </button>
                      <figcaption>
                        <h3>What's App Clone</h3>
                        <p>Chat Application</p>
                        <div className="item-price">~3K SLOC's</div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="col-md-3">
                    <figure className="product-style">
                      <img src={twitter} alt="Books" className="product-item" />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://twitter1309.netlify.app/"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </button>
                      <figcaption>
                        <h3>Twitter Clone</h3>
                        <p>Social Media Application</p>
                        <div className="item-price">~5K SLOC's</div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="col-md-3">
                    <figure className="product-style">
                      <img src={mspaint} alt="Books" className="product-item" />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://paint0183.netlify.app/"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </button>
                      <figcaption>
                        <h3>MS Paint Clone</h3>
                        <p>Desktop Application</p>
                        <div className="item-price">~2.5K SLOC's</div>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="col-md-3">
                    <figure className="product-style">
                      <img src={nasa} alt="Books" className="product-item" />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        <a
                          style={{ textDecoration: "none" }}
                          href="https://ztmnasa.netlify.app/"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </button>
                      <figcaption>
                        <h3>NASA Mission Control</h3>
                        <p>Crud Application</p>
                        <div className="item-price">~1.5K SLOC's</div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/*ft-books-slider*/}
              </div>
              {/*grid*/}
            </div>
            {/*inner-content*/}
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="btn-wrap align-right">
                <a
                  href="https://meaningofcode.netlify.app/"
                  className="btn-accent-arrow"
                  target="_blank"
                >
                  View all projects <i className="icon icon-ns-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best-selling" className="leaf-pattern-overlay">
        <div className="corner-pattern-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-6">
                  <figure className="products-thumb">
                    <img src={moc} alt="book" className="single-image" />
                  </figure>
                </div>

                <div className="col-md-6">
                  <div className="product-entry">
                    <h2 className="section-title divider">
                      Cloud Os Prototype
                    </h2>

                    <div className="products-content">
                      <div className="author-name">By Aditya Ahlawat</div>
                      <h3 className="item-title">Meaning Of Code</h3>
                      <p>
                        Cloud OS Prototype to depict the possibility of having
                        minimal hardware laptops in coming future.
                      </p>
                      <div className="item-price">~15K SLOC's</div>
                      <div className="btn-wrap">
                        <a
                          href="https://meaningofcode.netlify.app/"
                          className="btn-accent-arrow"
                          target="_blank"
                        >
                          View Project{" "}
                          <i className="icon icon-ns-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* / row */}
            </div>
          </div>
        </div>
      </section>

      <section id="popular-books" className="bookshelf">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">My Favourite Books</h2>
              </div>

              <ul className="tabs">
                <li data-tab-target="#all-genre" className="active tab">
                  All Genre
                </li>
               
              </ul>

              <div className="tab-content">
                <div id="all-genre" data-tab-content="" className="active">
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book1} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>A Brief History Of Time</h3>
                          <p>Proff. Stephen Hawking</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book2} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>The Grand Design</h3>
                          <p>Proff. Stephen Hawking</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book3} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>Feynman Tips on Physics</h3>
                          <p>Proff. Richard P. Feynman</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book4} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>Rich Dad Poor Dad</h3>
                          <p>Robert T. Kiyosaki</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book5} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>The Richest Engineer</h3>
                          <p>Abhishek Kumar</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book6} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>Black Beauty</h3>
                          <p>Anna Sewell</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book7} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>The Story of My Life</h3>
                          <p>Helen Keller</p>
                        </figcaption>
                      </figure>
                    </div>

                    <div className="col-md-3">
                      <figure className="product-style">
                        <img src={book8} alt="Books" className="product-item" />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          <a
                            style={{ textDecoration: "none" }}
                            href="https://www.amazon.com/books-used-books-textbooks/"
                            target="_blank"
                          >
                            Add to Cart
                          </a>
                        </button>
                        <figcaption>
                          <h3>Relativity The Special and General Theory</h3>
                          <p>Proff. Albert Einstein</p>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
                </div>
                </div>
            {/*inner-tabs*/}
          </div>
        </div>
      </section>

      <section id="quotation" className="align-center">
        <div className="inner-content">
          <h2 className="section-title divider">My Favourite Quote</h2>
          <blockquote>
            <q>
              I ain't nice, I ain't bad. I'm just reflection of your character.
            </q>
            <div className="author-name">- Aditya Ahlawat</div>
          </blockquote>
        </div>
      </section>

      <section id="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-element">
                    <h2 className="section-title divider">Write an E-mail</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="subscribe-content">
                    <p>
                      loved the protfolio? Write down your valuable thoughts and
                      possible job offer...
                    </p>
                    <form id="form">
                      <div className="row">
                        <div className="btn-wrap align-center">
                          <button className="btn-subscribe">
                            <a
                              href="mailto:aditya.ahlawat.1309@gmail.com"
                              style={{ textDecoration: "none" }}
                            >
                              click here to write one down.
                            </a>
                            <i className="icon icon-send" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>fashionista | Literotica | feminism</span>
                </div>
                <h2 className="section-title">What i look upto on Internet?</h2>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <article className="column">
                    <figure>
                      <a
                        href="https://edition.cnn.com/"
                        target="_blank"
                        className="image-hvr-effect"
                      >
                        <img src={cnn} alt="post" className="post-image" />
                      </a>
                    </figure>

                    <div className="post-item">
                      <div className="meta-date">June 1, 1980</div>
                      <h3>
                        <a href="https://edition.cnn.com/" target="_blank">
                          CNN is a multinational cable news channel
                          headquartered in Atlanta, Georgia, U.S. Founded in
                          1980 by American media proprietor Ted Turner and Reese
                          Schonfeld as a 24-hour cable news channel
                        </a>
                      </h3>

                      <div className="links-element">
                        <div className="categories">From Politics to Pop</div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="column">
                    <figure>
                      <a
                        href="https://www.vogue.in/?international"
                        target="_blank"
                        className="image-hvr-effect"
                      >
                        <img src={vogue} alt="post" className="post-image" />
                      </a>
                    </figure>
                    <div className="post-item">
                      <div className="meta-date">1892</div>
                      <h3>
                        <a
                          href="https://www.vogue.in/?international"
                          target="_blank"
                        >
                          Founded in 1892 as “a dignified authentic journal of
                          society, fashion, and the ceremonial side of life,”
                          Vogue was a weekly for the first 17 years of its
                          existence.
                        </a>
                      </h3>

                      <div className="links-element">
                        <div className="categories">Fashion</div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="column">
                    <figure>
                      <a
                        href="https://www.bloomberg.com/"
                        target="_blank"
                        className="image-hvr-effect"
                      >
                        <img
                          src={bloomberg}
                          alt="post"
                          className="post-image"
                        />
                      </a>
                    </figure>
                    <div className="post-item">
                      <div className="meta-date">Oct 1, 1981</div>
                      <h3>
                        <a href="https://www.bloomberg.com/" target="_blank">
                          Bloomberg L.P. is a privately held financial,
                          software, data, and media company headquartered in
                          Midtown Manhattan, New York City.
                        </a>
                      </h3>

                      <div className="links-element">
                        <div className="categories">Business</div>
                      </div>
                      {/*links-element*/}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download-app" className="leaf-pattern-overlay">
        <div className="corner-pattern-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="row">
                <div className="col-md-5">
                  <figure>
                    <img src={iphone} alt="phone" className="single-image" />
                  </figure>
                </div>

                <div className="col-md-7">
                  <div className="app-info">
                    <h2 className="section-title divider">
                      Try our Web-App on your <b style={{textTransform:"lowercase"}}>i</b>Phone !
                    </h2>
                    <p>responsive, beautiful, elegant and on the go...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <div className="company-brand">ADITYA AHLAWAT</div>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Achievements</h5>

                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1PGXqs_8dwq0GCQXuHcnxFgSfF23SRAm2?usp=share_link"
                >
                  Resume
                </a>

                <br />
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/1vr59qx2venmp41jHZsq3KTpVSX_416ex?usp=share_link"
                >
                  Certifications
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Professional Accounts</h5>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/aditya-ahlawat/"
                >
                  Linkedin
                </a>
                <br />

                <a target="_blank" href="tg://resolve?domain=adityaahlawat1309">
                  Telegram
                </a>

                <br />
                <a target="_blank" href="https://wa.me/918901459471">
                  What's App
                </a>
                <br />
                <a target="_blank" href="mailto:aditya.ahlawat.1309@gmail.com">
                  Gmail
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>My Social Accounts</h5>

                <a href="https://www.facebook.com/adityaahlawat1309/">
                  Facebook
                </a>
                <br />
                <a
                  href="https://www.instagram.com/adityaahlawat1309/"
                  target="_blank"
                >
                  Instagram
                </a>
                <br />
                <a href="https://twitter.com/iadityaahlawat" target="_blank">
                  Twitter
                </a>
                <br />
                <a
                  href="https://www.reddit.com/user/adityaahlawat"
                  target="_blank"
                >
                  Reddit
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Help</h5>

                <a
                  href="mailto:aditya.ahlawat.1309@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          {/* / row */}
        </div>
      </footer>

      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      © January 2023 Made By{" "}
                      <a
                        href="https://www.linkedin.com/in/aditya-ahlawat/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        ADITYA AHLAWAT
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/*grid*/}
            </div>
            {/*footer-bottom-content*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
