import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-intro.png";
import accessAnywhere from "./assets/images/icon-access-anywhere.svg";
import security from "./assets/images/icon-security.svg";
import collaboration from "./assets/images/icon-collaboration.svg";
import anyFile from "./assets/images/icon-any-file.svg";

import stayProductive from "./assets/images/illustration-stay-productive.png";
import arrow from "./assets/images/icon-arrow.svg";

import profile1 from "./assets/images/profile-1.jpg";
import profile2 from "./assets/images/profile-2.jpg";
import profile3 from "./assets/images/profile-3.jpg";

import location from "./assets/images/icon-location.svg";
import phone from "./assets/images/icon-location.svg";
import email from "./assets/images/icon-location.svg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import instagram from "./assets/images/icon-instagram.svg";

function App() {
  return (
    <main>
      <header>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <nav>
          <ul>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <picture>
          <img src={illustration} alt="" />
        </picture>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </section>
      <section className="card-section">
        <div className="card">
          <picture>
            <img src={accessAnywhere} alt="" />
            <h3>Access your files, anywhere</h3>
            <p>
              {" "}
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </picture>
        </div>
        <div className="card">
          <picture>
            <img src={security} alt="" />
            <h3>Security you can trust</h3>
            <p>
              {" "}
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </picture>
        </div>
        <div className="card">
          <picture>
            <img src={collaboration} alt="" />
            <h3>Real-time collaboration</h3>
            <p>
              {" "}
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </picture>
        </div>
        <div className="card">
          <picture>
            <img src={anyFile} alt="" />
            <h3>Store any type of file</h3>
            <p>
              {" "}
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </picture>
        </div>
      </section>
      <section className="productive-section">
        <picture>
          <img src={stayProductive} alt="" />
        </picture>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. Securely share files and
          folders with friends, family and colleagues for live collaboration. No
          email attachments required.
        </p>
        <a href="">
          See how Fylo works <img src={arrow} alt="" />
        </a>
      </section>
      <section className="testimonials-section">
        <div className="testimonials">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div>
            <picture>
              <img src={profile1} alt="" />
            </picture>
            <div>
              <span>Satish Patel</span>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div>
            <picture>
              <img src={profile2} alt="" />
            </picture>
            <div>
              <span>Bruce McKenzie</span>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div>
            <picture>
              <img src={profile3} alt="" />
            </picture>
            <div>
              <span>Iva Boyd</span>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </section>

      <section className="early-access-section">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <input type="text" />
        <button>Get Started For Free</button>
      </section>
      <footer>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <div className="footer-grid-6">
          <img src={location} alt="" />
          <img src={phone} alt="" />
          <img src={email} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p>+1-543-123-4567</p>
          <p>example@fylo.com</p>
        </div>
        <ul>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Press</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
