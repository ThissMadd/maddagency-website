import Link from 'next/link';

export const metadata = {
  title: { absolute: "MaddAgency | About Us" },
  description: "Learn about MaddAgency — who we are, what we do, and why we build premium websites for businesses across the USA.",
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero__aurora">
          <div className="aurora__blob aurora__blob--1"></div>
          <div className="aurora__blob aurora__blob--2"></div>
        </div>
        <div className="container">
          <div className="sec-eyebrow">Who We Are</div>
          <h1 className="about-hero__title">
            Premium Websites Built
            <br />
            <span className="g-text-anim">For Results</span>
          </h1>
          <p className="about-hero__sub">MaddAgency helps businesses establish a powerful online presence through premium web design, development, and conversion-focused strategies.</p>
        </div>
      </section>
      {/* STATS */}
      <section className="about-stats">
        <div className="container about-stats__grid reveal">
          <div className="about-stat">
            <span className="about-stat__val g-text">50+</span>
            <span className="about-stat__label">Projects Delivered</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__val g-text">100%</span>
            <span className="about-stat__label">Client Satisfaction</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__val g-text">5</span>
            <span className="about-stat__label">Days Avg. Delivery</span>
          </div>
          <div className="about-stat">
            <span className="about-stat__val g-text">3+</span>
            <span className="about-stat__label">Years of Experience</span>
          </div>
        </div>
      </section>
      {/* STORY */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <div className="sec-eyebrow">Our Story</div>
            <h2 className="sec-title">
              Built From a Simple{" "}
              <span className="g-text">Belief</span>
            </h2>
            <p>Most small businesses deserve a great website — but they either can&apos;t afford agency prices, or they get stuck with a slow, generic template that does nothing for their growth.</p>
            <p>We founded MaddAgency with a simple goal: help businesses get websites that not only look great, but also drive real business growth. We combine premium design with a deep understanding of what makes websites convert visitors into paying customers.</p>
            <p>Every project we take on is treated like it&apos;s our own business. We don&apos;t just deliver pages — we deliver results.</p>
            <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg" style={{ marginTop: "32px", display: "inline-flex" }}>
              Start Your Project{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "16px", height: "16px", marginLeft: "8px" }}>
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="about-story__card">
            <div className="about-card__inner">
              <div className="about-card__tag">Our Mission</div>
              <p className="about-card__text">“To help businesses build high-performing websites that attract customers, build trust, and drive measurable growth.”</p>
              <div className="about-card__divider"></div>
              <div className="about-card__values">
                <div className="about-card__val">
                  <span className="about-card__dot"></span>
                  <span>Premium Quality</span>
                </div>
                <div className="about-card__val">
                  <span className="about-card__dot"></span>
                  <span>Fast Delivery</span>
                </div>
                <div className="about-card__val">
                  <span className="about-card__dot"></span>
                  <span>Revenue-Focused</span>
                </div>
                <div className="about-card__val">
                  <span className="about-card__dot"></span>
                  <span>Client-First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* VALUES */}
      <section className="about-values">
        <div className="container">
          <div className="sec-eyebrow">OUR PROCESS</div>
          <h2 className="sec-title" style={{ marginBottom: "52px" }}>
            From Strategy To{" "}
            <span className="g-text">Launch</span>
          </h2>
          <div className="about-values__grid reveal">
            <div className="about-value-card">
              <div className="about-value-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3>Discovery</h3>
              <p>We learn about your business, goals, and target audience.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Strategy</h3>
              <p>We plan the structure, content, and user experience of your website.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3>Design &amp; Development</h3>
              <p>We create a premium, high-performing website tailored to your business.</p>
            </div>
            <div className="about-value-card">
              <div className="about-value-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Launch &amp; Support</h3>
              <p>We launch your website and remain available for support and future growth.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="cta-band">
        <div className="container cta-band__inner">
          <div className="sec-eyebrow cta-band__tag">Ready to start?</div>
          <h2 className="cta-band__title">
            Let&apos;s Build Something
            <br />
            <span className="g-text-anim">Great Together</span>
          </h2>
          <p className="cta-band__sub">Tell us about your business and we&apos;ll get back to you within 24 hours with a free consultation.</p>
          <div className="cta-band__actions">
            <a href="https://wa.me/17866281087" target="_blank" rel="noopener noreferrer" className="btn btn--purple btn--lg">
              Start Your Project{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <Link href="/portfolio" className="btn btn--dark btn--lg">View Our Work</Link>
          </div>
        </div>
      </div>
    </>
  );
}
