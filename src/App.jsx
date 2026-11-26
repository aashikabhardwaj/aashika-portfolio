
import { useState } from "react";

import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Menu,
  X,
  Leaf,
  Carrot,
  Apple,
  Mail,
  Sparkles
} from "lucide-react";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          AASHIKA<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <a href="#contact" className="nav-btn" onClick={closeMenu}>
          Let's Connect <ArrowUpRight />
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span></span> OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M AASHIKA BHARDWAJ</p>

            <h1>
              Building digital<br />
              experiences with <em>purpose.</em>
            </h1>

            <p className="hero-desc">
              I'm a Computer Science graduate and aspiring Full Stack Developer
              passionate about building practical, user-focused web applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                Explore My Work <ArrowUpRight />
              </a>

              <a href="#about" className="secondary-btn">
                More About Me <ArrowDown />
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/aashikabhardwaj"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight />
              </a>

              <a href="https://www.linkedin.com/in/aashika-bhardwaj"  target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight />
              </a>

              <a href="mailto:aashikabhardwaj168@gmail.com">
                Email <Mail />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle"></div>

            <div className="visual-card">
              <span className="card-label">FEATURED PROJECT</span>

              <h3>FarmCart</h3>

              <p>
                A sustainable marketplace connecting farmers and customers.
              </p>

              <div className="tech-tags">
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
              </div>

              <div className="card-bottom">
                01 / FEATURED PROJECT
              </div>
            </div>

            <div className="floating-star">
              <Sparkles />
            </div>
          </div>

          <div className="hero-bottom">
            SCROLL TO EXPLORE <ArrowDown />
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Curious mind. <em>Practical builder.</em>
          </h2>

          <div className="about-grid">
            <p className="about-lead">
              I enjoy turning ideas into useful digital products through
              thoughtful development and continuous learning.
            </p>

            <p className="about-text">
              I'm a 2026 B.Tech Computer Science graduate with MERN Stack
              development training. I enjoy solving problems, understanding
              how systems work and building applications that address
              practical needs.
            </p>
          </div>

          <div className="stats">
            <div>
              <strong>2026</strong>
              <span>Graduation Year</span>
            </div>

            <div>
              <strong>8.15</strong>
              <span>CGPA / 10</span>
            </div>

            <div>
              <strong>01</strong>
              <span>Public GitHub Project</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" id="skills">
          <p className="section-label">02 — TECHNICAL SKILLS</p>

          <h2>
            Tools I work <em>with.</em>
          </h2>

          <div className="skill-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>Languages</h3>
              <p>JavaScript · Java · HTML · CSS</p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>Frontend</h3>
              <p>React.js · HTML · CSS · JavaScript</p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>Backend</h3>
              <p>Node.js · Express.js · REST APIs</p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>Database</h3>
              <p>MongoDB · Mongoose</p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Core CS</h3>
              <p>OOP · DBMS · OS · Computer Networks</p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>Tools</h3>
              <p>Git · GitHub · VS Code · Postman</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <p className="section-label">03 — SELECTED WORK</p>

          <h2>
            Things I've <em>built.</em>
          </h2>

          {/* PROJECT 1 */}
          <article className="project-card">
            <div className="project-visual">
              <div className="mock-window">
                <div className="mock-top">
                  <span></span>
                  <span></span>
                  <span></span>
                  <b>FarmCart</b>
                </div>

                <div className="mock-content">
                  <small>FRESH. LOCAL. SUSTAINABLE.</small>

                  <h3>
                    From farm<br />
                    to your cart.
                  </h3>

                  <div className="mock-products">
                    <i><Leaf /></i>
                    <i><Carrot /></i>
                    <i><Apple /></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <span className="project-number">
                01 / FULL STACK WEB APPLICATION
              </span>

              <h3>FarmCart</h3>

              <p>
                A farmer-to-customer marketplace designed to support local
                farmers, eco-friendly products and sustainable packaging practices.
              </p>

              <ul>
                <li>User authentication and role-based dashboards</li>
                <li>Product listings, cart and order management</li>
                <li>Farmer, customer and retailer workflows</li>
                <li>Returnable packaging deposit/refund concept</li>
              </ul>

              <div className="tech-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
                <span>EJS</span>
              </div>

              <a
                className="text-link"
                href="https://github.com/aashikabhardwaj/FarmCart"
                target="_blank"
                rel="noreferrer"
              >
                VIEW GITHUB REPOSITORY <ArrowUpRight />
              </a>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="project-card portfolio-project">
            <div className="project-visual portfolio-visual">
              <div className="portfolio-preview">
                <span>PERSONAL PORTFOLIO</span>

                <h3>
                  AASHIKA<span>.</span>
                </h3>

                <p>Developer Portfolio</p>

                <div className="preview-lines">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <small>DESIGN · DEVELOP · LEARN</small>
              </div>
            </div>

            <div className="project-info">
              <span className="project-number">
                02 / FRONTEND WEB APPLICATION
              </span>

              <h3>Personal Developer Portfolio</h3>

              <p>
                A personal portfolio website developed using React to present
                my technical skills, education, projects and professional profile.
              </p>

              <ul>
                <li>Personal introduction and education details</li>
                <li>Technical skills and project showcase</li>
                <li>Navigation across different portfolio sections</li>
                <li>Links to GitHub, LinkedIn and LeetCode profiles</li>
                <li>Responsive layouts for desktop, tablet and mobile</li>
              </ul>

              <div className="tech-tags">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Vite</span>
              </div>

              <div className="project-links">
              <a
               href="https://github.com/aashikabhardwaj/aashika-portfolio"
               target="_blank"
               rel="noopener noreferrer"
               className="text-link"
               >
                View GitHub Repository ↗
               </a>
              </div>
            </div>
          </article>
        </section>

        {/* ENGINEERING MINDSET */}
        <section className="section problem" id="problem">
          <p className="section-label">04 — ENGINEERING MINDSET</p>

          <h2>
            Beyond writing <em>code.</em>
          </h2>

          <div className="problem-grid">
            <div>
              <span>01</span>
              <h3>Problem Solving</h3>
              <p>
                Practising data structures and algorithms, focusing on
                problem-solving approaches and time and space complexity.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Debugging</h3>
              <p>
                Working through application issues, testing workflows and
                improving functionality in FarmCart.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Backend Development</h3>
              <p>
                Implementing authentication, API handling and database
                interactions while developing web applications.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION */}
        <section className="section documentation" id="documentation">
          <p className="section-label">05 — PROJECT DOCUMENTATION</p>

          <h2>
            How the system <em>works.</em>
          </h2>

          <p className="doc-intro">
            Technical documentation for the FarmCart project.
          </p>

          
          <div className="doc-grid">
             <a
               className="doc-card"
               href="/docs/system-architecture.html"
               target="_blank"
               rel="noreferrer"
              >
             <span>01</span>
             <h3>System Architecture</h3>
             <p>Frontend, backend and database interaction flow.</p>
             </a>

             <a
               className="doc-card"
               href="/docs/database-relationships.html"
               target="_blank"
               rel="noreferrer"
               >
             <span>02</span>
             <h3>Database Design</h3>
             <p>MongoDB models, data fields and relationships.</p>
             </a>

              <a
               className="doc-card"
               href="/docs/api-documentation.html"
               target="_blank"
               rel="noreferrer"
               >
               <span>03</span>
               <h3>API Documentation</h3>
               <p>API endpoints, HTTP methods and request-response examples.</p>
               </a>

               <a
               className="doc-card"
                href="/docs/project-workflow.html"
                target="_blank"
                rel="noreferrer"
                >
               <span>04</span>
               <h3>Project Workflow</h3>
               <p>Authentication, product, cart and order workflows.</p>
               </a>
               </div>
        </section>

        {/* EDUCATION */}
        <section className="section learning" id="education">
          <p className="section-label">06 — EDUCATION</p>

          <h2>
            My academic <em>background.</em>
          </h2>

          <div className="learning-card">
            <div>
              <span>2026</span>
              <h3>
                Bachelor of Technology — Computer Science Engineering
              </h3>
              <p>Graduated in 2026</p>
              <p><strong>CGPA: 8.15 / 10</strong></p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="section certifications" id="certifications">
          <p className="section-label">07 — CERTIFICATIONS & LEARNING</p>

          <h2>
            Learning through <em>practice.</em>
          </h2>

          <div className="learning-card">
            <div>
              <span>APNA COLLEGE</span>
              <h3>MERN Stack Development</h3>

              <p>
                Completed training covering full-stack web development
                and Data Structures & Algorithms.
              </p>

              <p><strong>Course Completion Certificate</strong></p>

              <a
                
                className="certificate-link"
                href="/docs/apna-college-delta-certificate.pdf"
                target="_blank"
                rel="noreferrer"
               >
              <span>01</span>
              <h3>Delta — Full Stack Web Development</h3>
              <p>Apna College</p>
              <p><strong>View Certificate ↗</strong></p>
              </a>
            </div>
          </div>
        </section>

        {/* PROJECT SHOWCASE */}
        <section className="section showcase" id="showcase">
          <p className="section-label">08 — PROJECT SHOWCASE</p>

          <h2>
            See the work <em>in action.</em>
          </h2>

          <p className="doc-intro">
            Screenshots and a walkthrough of FarmCart.
          </p>

          <div className="showcase-gallery">
           <img src="/images/farmcart/home_customer.png" alt="FarmCart customer home page" />
           <img src="/images/farmcart/ecoproducts.png" alt="FarmCart eco-friendly products" />
           <img src="/images/farmcart/cart.png" alt="FarmCart shopping cart" />
           <img src="/images/farmcart/farmer_dashboard.png" alt="FarmCart farmer dashboard" />
           <img src="/images/farmcart/farmer_products.png" alt="FarmCart farmer products" />
           <img src="/images/farmcart/retailer_dashboard.png" alt="FarmCart retailer dashboard" />
           <img src="/images/farmcart/orders.png" alt="FarmCart orders page" />
          </div>
          <a
            className="certificate-link"
            href="https://youtu.be/Oim-9AziUzc?si=XXZlu2WyzwZukIMO"
            target="_blank"
            rel="noreferrer"
            >
          <span>FARMCART DEMO</span>
          <h3>Watch the Project Walkthrough ↗</h3>
          <p>Explore FarmCart’s features in a short video demo.</p>
          </a>

        </section>

        {/* ACHIEVEMENTS & PROFILES */}
        <section className="section achievements" id="achievements">
          <p className="section-label">09 — ACHIEVEMENTS & PROFILES</p>

          <h2>
            My developer <em>journey.</em>
          </h2>

          <div className="profile-links">
            <a
              href="https://github.com/aashikabhardwaj"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </a>

            <a href="https://www.linkedin.com/in/aashika-bhardwaj" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight />
            </a>

            <a href="https://leetcode.com/aashikabhardwaj" target="_blank" rel="noreferrer">
              LeetCode <ArrowUpRight />
            </a>
          </div>

        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <p className="section-label">10 — GET IN TOUCH</p>

          <h2>
            Have an opportunity?<br />
            <em>Let's connect.</em>
          </h2>

          <a
            className="primary-btn"
            href="mailto:aashikabhardwaj168@gmail.com"
          >
            Send Me an Email <Mail />
          </a>

          <div className="contact-bottom">
            <span>AASHIKA BHARDWAJ · 2026</span>
            <span>BUILT WITH REACT & CARE</span>

            <a href="#home">
              BACK TO TOP <ArrowUp />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
