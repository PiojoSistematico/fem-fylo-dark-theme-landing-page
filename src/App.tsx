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

import quotes from "./assets/images/bg-quotes.png";

import location from "./assets/images/icon-location.svg";
import phone from "./assets/images/icon-phone.svg";
import mail from "./assets/images/icon-email.svg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import instagram from "./assets/images/icon-instagram.svg";

import bgMobile from "./assets/images/bg-curvy-mobile.svg";
import bgDesktop from "./assets/images/bg-curvy-desktop.svg";
import { useState } from "react";

function App() {
  const dummyEmail = "lalala@lala.com";
  const [email, setEmail] = useState(dummyEmail);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const newEmail = formElement.email.value;
    setEmail(newEmail);
  }

  function validateEmail(string: string): boolean {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(string);
  }

  const isValidEmail = validateEmail(email);

  return (
    <>
      <header>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <nav>
          <ul>
            <li>
              <a href="#" className="nav-a">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="nav-a">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-a">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <img src={bgMobile} alt="" className="bg mobile" />
          <img src={bgDesktop} alt="" className="bg desktop" />
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
            </picture>
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={security} alt="" />
            </picture>
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={collaboration} alt="" />
            </picture>
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="card">
            <picture>
              <img src={anyFile} alt="" />
            </picture>
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>
        <section className="productive-section">
          <picture>
            <img src={stayProductive} alt="" />
          </picture>
          <div className="productive-text">
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="#">
              <p>See how Fylo works</p>{" "}
              <img src={arrow} alt="" className="arrow" />
            </a>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonial quotes-holder">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex-row">
              <picture>
                <img src={profile1} alt="" />
              </picture>
              <div className="flex-col">
                <span className="name">Satish Patel</span>
                <span className="title">Founder & CEO, Huddle</span>
              </div>
            </div>
            <img src={quotes} alt="" className="quotes" />
          </div>
          <div className="testimonial">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex-row">
              <picture>
                <img src={profile2} alt="" />
              </picture>
              <div className="flex-col">
                <span className="name">Bruce McKenzie</span>
                <span className="title">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex-row">
              <picture>
                <img src={profile3} alt="" />
              </picture>
              <div className="flex-col">
                <span className="name">Iva Boyd</span>
                <span className="title">Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </section>

        <section className="early-access-section">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form onSubmit={handleSubmit} action="">
            <input type="text" name="email" />
            {isValidEmail ? undefined : (
              <p className="error">Please enter a valid email address</p>
            )}
            <button type="submit">Get Started For Free</button>
          </form>
        </section>
      </main>

      <footer>
        <picture>
          <img src={logo} alt="" />
        </picture>
        <div className="footer-grid">
          <img src={location} alt="" className="one" />
          <img src={phone} alt="" className="two" />
          <img src={mail} alt="" className="three" />
          <p className="four">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className="five">+1-543-123-4567</p>
          <p className="six">example@fylo.com</p>
        </div>
        <nav>
          <ul className="flex-col">
            <li>
              <a href="#" className="footer-a">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-a">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="footer-a">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="footer-a">
                Blog
              </a>
            </li>
          </ul>
          <ul className="flex-col">
            <li>
              <a href="#" className="footer-a">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-a">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="footer-a">
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        <ul className="flex-row self-center social">
          <li>
            <a href="#">
              <img src={facebook} alt="" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" className="social-icon" />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
