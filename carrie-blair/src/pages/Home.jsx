import React, { useEffect, useState } from "react";
import "../index.css"; // Adjust path if your CSS is elsewhere

const images = [
  "/images/IMG_2486.JPEG",
  "/images/IMG_5050.JPEG",
  "/images/IMG_8563.JPEG",
  "/images/IMG_3984.jpg",
  "/images/cow"
];

function Home() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sticky header visibility on scroll
  useEffect(() => {
    function handleScroll() {
      setHeaderVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(idx => (idx + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Sticky Header */}
      <div
        className="sticky-header"
        style={{
          opacity: headerVisible ? 1 : 0,
          transition: "opacity 0.5s"
        }}
      >
        <h3>hi i'm carrie, and i'm glad you're here.</h3>
      </div>
      <div className="container">
        {/* Section 1: Header/Profile */}
        <section className="section" id="section1">
          <header>
            <div className="profile-picture"></div>
            <div className="header-text">
              <h1>hi i'm carrie,</h1>
              <br />
              <h2>& i'm glad you're here.</h2>
            </div>
          </header>
        </section>

        {/* Section 2: About */}
        <section className="section" id="section2">
          <article>
            <h2>get to know me.</h2>
            <p>
              I thrive on solving complex problems with smart technical solutions,
              always looking for innovative ways to make things work better, faster,
              and more efficiently. Beyond the world of tech, I have a deep love for
              photography and travel — whether it’s capturing stunning landscapes,
              immersing myself in new cultures, or chasing the perfect shot at golden hour.
              This space is where I share a tiny tidbit about me. Let’s connect and build something great together!
              <br />
              <br />
              📍Based in Kansas City, KS
            </p>
          </article>
        </section>

        {/* Section 3: Recent Accomplishment */}
        <section className="section" id="section3">
          <article>
            <div className="stacked-container left">
              <h4>my most recent accomplishment.</h4>
              <p>
                Imagine a single, intuitive platform that seamlessly integrates every aspect of your organization’s operations—from corporate roadmaps to customer invoices, project tracking, and meeting notes—all in one place.
                <br />
                <br />
                <b>That’s exactly what I built for my current org.</b>
                <br />
                <br />
                Our custom Operations Dashboard is the heartbeat of the company, designed to centralize and streamline critical business functions. No more scattered spreadsheets, lost documents, or siloed information. This one-stop hub provides:
                <br />
                <br />
                ✅ Corporate Alignment – Real-time visibility into company roadmaps ensures every department moves in sync toward strategic goals.<br />
                ✅ Seamless Collaboration – Meeting notes and project tracking keep teams aligned and accountable.<br />
                ✅ Financial Transparency – Customer invoices, budgets, and revenue streams are all easily accessible.<br />
                ✅ Operational Efficiency – A single source of truth eliminates redundant processes, improving decision-making and execution.<br />
                <br />
                With this dashboard, information flows effortlessly across teams, enhancing productivity, accountability, and company-wide visibility. It’s not just a tool—it’s a game-changer for how we work.
                <br />
                <br />
                We were able to move beyond disconnected systems and redefined efficiency to meet our aggressive 3-year roadmap.
              </p>
            </div>
          </article>
        </section>

        {/* Section 4: Meaningful Work */}
        <section className="section" id="section4">
          <article id="thin">
            <div className="stacked-container">
              <h4>meaningful work && meaningful connections.</h4>
              <p>
                I believe the best work is driven by <i>purpose</i> and <i>connection</i>.
                I strive to create <b>solutions</b> that have real impact. Collaboration and meaningful
                relationships fuel my creativity, pushing me to innovate and grow.
                <i>At the heart of it all, I’m passionate about work that not only solves
                  problems but also builds lasting connections and inspires others.</i>
              </p>
            </div>
          </article>
        </section>

        {/* Section 5: Testimonial */}
        <section className="section" id="section5">
          <blockquote>
            <div className="stacked-container">
              <h4>
                "From day one, her technical articulation and leadership skills have shone through
                giving huge lift to our engagements. But what truly sets her apart is how past
                clients and coworkers respect her candor and pursuit of truth in expectations."
              </h4>
              <br />
              <h1>- Current Manager & CEO</h1>
            </div>
          </blockquote>
        </section>

        {/* Section 6: Resume Download and More About You */}
        <section className="section" id="section6">
          <blockquote id="thin">
            <div className="stacked-container">
              <div>
                <h1>
                  <a href="/assets/cb_resume_25.pdf" target="_blank" rel="noopener noreferrer">
                    download my resume
                  </a>
                </h1>
              </div>
              <div>
                <h3>
                  At my core, I thrive as a solution architect—collaborating with leadership to
                  understand their biggest challenges and working closely with engineers to craft
                  innovative solutions. Titles don’t drive me; solving complex problems and
                  making a real impact on your organization does.
                </h3>
              </div>
              <div>
                <h4>let's make magic together</h4>
              </div>
            </div>
          </blockquote>
        </section>

        {/* Section 7: Passions and Photo */}
        <section className="section" id="section7">
          <figure id="thin">
            <div>
              <h4>my passions</h4>
              <br />
            </div>
            <img
              id="slideshow"
              className="travel-photos"
              src={images[currentImageIndex]}
              alt="Travel"
              style={{ opacity: 1, transition: "opacity 1s" }}
            />
          </figure>
        </section>

        {/* Section 8: Footer/Calendly */}
        <section className="section" id="section8">
          <footer>
            <h1>
              <a href="https://calendly.com/carrieblair" target="_blank" rel="noopener noreferrer">
                book time on my calendar
              </a>
            </h1>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Home;
